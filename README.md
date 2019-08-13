# react-weather
A weather app build using React for the front end, and Node js on the backend.

# Back end
The app uses a simple express server to serve the webpage, with two special routes for handling weather data requests.

# Front end
The front end is built using React. The React project is located in the weather-react directory inside the project root.
The client folder in the project root is a symlink to the build folder in the React project. This allows for quicker development
of both client and server simultaneously.

# APIs
The server uses two APIs: Dark Sky API for fetching weather data, and OpenCage Geocoder.

# Config
To use the project, you must fill in appropriate api keys in the config.js file.
