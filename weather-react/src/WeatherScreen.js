import React from 'react';

const WeatherScreen = (props) => {
  const dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  const forecastList = props.weather.forecast.map(day => {
    return (
      <div className="forecast-list-item">
        <p>{dayNames[day.day]}</p>
        <img src={day.icon} alt={day.icon} />
        <p className="low-temp">{day.low}</p>
        <p className="high-temp">{day.high}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Today</h1>
      <img className="current-icon" src={props.weather.forecast[0].icon} alt={props.weather.forecast[0].icon} />
      <div className="current-temps-container">
        <p className="low-temp">{props.weather.forecast[0].low}</p>
        <p className="current-temp">{props.weather.currentTemp}</p>
        <p className="high-temp">{props.weather.forecast[0].high}</p>
      </div>
      <div className="forecast-container">
        {forecastList}
      </div>
    </div>
  );
}

export default WeatherScreen;
