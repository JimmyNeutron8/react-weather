import React from 'react';
import InputScreen from './InputScreen';
import CityScreen from './CityScreen';
import WeatherScreen from './WeatherScreen';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import Icons from './icons';

class App extends React.Component {
  constructor (props) {
    super(props);

    // Advance to the city screen if geolocation is not available
    if (navigator.geolocation) {
      this.state = {
        phase: 'input-screen'
      }
    }else{
      this.state = {
        phase: 'city-screen'
      }
    }

    // Bind this to event handlers
    this.handleClickGeolocate = this.handleClickGeolocate.bind(this);
    this.handleClickCity = this.handleClickCity.bind(this);
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  handleClickGeolocate () {
    this.setState({
      phase: 'loading-screen'
    });
    navigator.geolocation.getCurrentPosition((position) => {
      // Parse position stuff
      const location = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };

      requestWeatherData(location, (response) => {
        // Check if response was successful
        if (response.success) {
          this.setState({
            weatherData: response,
            phase: 'weather-screen'
          });
        }
      }, true);
    });
  }

  handleClickCity () {
    this.setState({
      phase: 'city-screen'
    });
  }

  handleCityChange (e) {
    this.setState({
      cityName: e.target.value
    });
  }

  handleCitySubmit (e) {
    e.preventDefault();

    this.setState({
      phase: 'loading-screen'
    });

    requestWeatherData(this.state.cityName, (response) => {
      // Check if response was successful
      if (response.success) {
        this.setState({
          weatherData: response,
          phase: 'weather-screen'
        });
      }
    }, false);
  }

  render () {
    if (this.state.phase === 'input-screen') {
      return (
        <div className="weather-app">
          <InputScreen
            onClickGeolocate={this.handleClickGeolocate}
            onClickCity={this.handleClickCity}
          />
          <Footer />
        </div>
    );
    }else if (this.state.phase === 'city-screen') {
      return (
        <div className="weather-app">
          <CityScreen
            onChange={this.handleCityChange}
            onSubmit={this.handleCitySubmit}
          />
          <Footer />
        </div>
      );
    }else if (this.state.phase === 'weather-screen') {
      return (
        <div className="weather-app">
          <WeatherScreen weather={this.state.weatherData} />
          <Footer />
        </div>
      );
    }else{
      return (
        <LoadingScreen />
      );
    }
  }
}

// Call this to parse the weather data into what we need
function parseWeatherData (response) {
  const data = {
    success: true,
    currentTemp: Math.round(response.currently.temperature),
    forecast: []
  }

  for (let i = 0; i < response.daily.data.length; i++) {
    const datum = response.daily.data[i];

    const date = new Date();
    date.setTime(datum.time * 1000);
    const day = date.getDay();

    const newDay = {
      icon: Icons[datum.icon],
      low: Math.round(datum.temperatureLow),
      high: Math.round(datum.temperatureHigh),
      day: day
    }
    data.forecast.push(newDay);
  }

  return data;
}

// Call this to request weather data from the backend
function requestWeatherData (location, callback, coords) {
  const xml = new XMLHttpRequest();
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      const data = parseWeatherData(JSON.parse(xml.responseText));
      callback(data);
    }
  }
  if (coords) {
    xml.open('GET', '/api/weather/coords/' + JSON.stringify(location), true);
  }else{
    xml.open('GET', '/api/weather/address/' + location, true);
  }
  xml.send(null);
}

export default App;
