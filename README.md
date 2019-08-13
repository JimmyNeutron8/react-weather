# react-weather
A weather app build using React for the front end, and Node.js on the backend. This is a work in progress.

# Back end
The app uses a simple express server to serve the webpage, with two special routes for handling weather data requests.

# Front end
The front end is built using React. The React project is located in the `weather-react` directory inside the project root.
The `client` folder in the project root is a duplicate of the `build` folder generate by the React build script.

# APIs
The server uses two APIs: Dark Sky API for fetching weather data, and OpenCage Geocoder.

# Config
To use this project, simply run `npm start` in the root directory, passing in the appropriate apy keys and port number. For example:
```
DARK_SKY_KEY="your dark sky api key" PORT=3001 GEOLOCATE_KEY="your opencage geocoder key" npm start
```
