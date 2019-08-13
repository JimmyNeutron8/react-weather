// Dependencies
const express = require('express');
const https = require('https');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const Geocoder = require('node-geocoder');
const config = require('./config');

// Setup geocoder
const options = {
  provider: 'opencage',
  apiKey: config.geolocateKey
};

const geocoder = Geocoder(options);

// Create the express app
const app = express();

// Security
app.use(helmet());

// Rate limiting (to prevent api abuse)
const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20
});

// Special routes for getting weather data
app.get('/api/weather/coords/:location', (req, res) => {
  const location = JSON.parse(req.params.location);
  const lat = location.lat;
  const long = location.long;
  const apiUrl = `https://api.darksky.net/forecast/${config.apikey}/${lat},${long}`;

  getWeather(lat, long, (weatherData) => {
    res.send(weatherData);
  });
});
app.get('/api/weather/address/:address', (req, res) => {
  const address = req.params.address;

  geocoder.geocode(address, (err, result) => {
    const lat = result[0].latitude;
    const long = result[0].longitude;

    getWeather(lat, long, (weatherData) => {
      res.send(weatherData);
    });
  });
});

app.get('/api/geocoder/:address', (req, res) => {
  const address = req.params.address;
  console.log(address);

  geocoder.geocode(address, (err, result) => {
    console.log('Result: ' + result);
  });
});

app.use('/api/', apiLimiter);

// Static routing for the basic files
app.use('/', express.static(__dirname + '/client'));

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

// The function for getting weather info from coords
function getWeather (lat, long, callback) {
  const apiUrl = `https://api.darksky.net/forecast/${config.apikey}/${lat},${long}`;

  // Send request to weather api
  https.get(apiUrl, apiResponse => {
    let data = '';

    apiResponse.on('data', chunk => {
      data += chunk;
    });

    apiResponse.on('end', () => {
      callback(data);
    });
  });
}
