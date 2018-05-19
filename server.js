const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const Mambo = require('parrot-minidrone');

const config = require('./config');

server.listen(3001);

app.get('/', (req, res) => {
  res.json({ status: 'listening' });
});

let connected = false;
const drone = new Mambo({
  updateMS: 400,
  droneFilter: config.droneName,
  maxVerticalSpeed: config.maxVerticalSpeed,
  maxRotationSpeed: config.maxRotationSpeed,
  maxAltitude: config.maxAltitude,
  autoconnect: true,
});

drone.on('connected', () => {
  connected = true
});

io.on('connection', (socket) => {
  const inputSensitivity = 70;
  const timeOutLength = 300;

  const flightParams = {
    yaw: 0,
    pitch: 0,
    roll: 0,
    altitude: 0,
  };

  const resetFlightParams = () => {
    drone.setFlightParams({
      yaw: 0,
      pitch: 0,
      roll: 0,
      altitude: 0,
    });
  };

  if (connected) socket.emit('connected');
  else drone.on('connected', () => socket.emit('connected'));

  drone.on('batteryStatusChange', level => socket.emit('batteryStatusChange', level));
  drone.on('flightStatusChange', status => socket.emit('flightStatusChange', status));
  drone.on('flightParamChange', params => socket.emit('flightParamChange', params));


  socket.on('takeoffOrLand', () => {
    console.log('takeoffOrLand');
    drone.takeoffOrLand();
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });

  socket.on('move', (direction) => {
    console.log(`moving ${direction}`);
    switch (direction) {
      case 'forward':
        flightParams.pitch = inputSensitivity;
        break;
      case 'backward':
        flightParams.pitch = -inputSensitivity;
        break;
      case 'left':
        flightParams.roll = -inputSensitivity;
        break;
      case 'right':
        flightParams.roll = inputSensitivity;
        break;
      default:
        break;
    }
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });

  socket.on('turn', (direction) => {
    console.log(`turning ${direction}`);
    switch (direction) {
      case 'up':
        flightParams.altitude = inputSensitivity;
        break;
      case 'down':
        flightParams.altitude = -inputSensitivity;
        break;
      case 'left':
        flightParams.yaw = -inputSensitivity;
        break;
      case 'right':
        flightParams.yaw = inputSensitivity;
        break;
      default:
        break;
    }
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });

  socket.on('trim', () => {
    console.log('flat trim');
    drone.trim();
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });

  socket.on('animate', method => {
    console.log('animating', method);
    drone.animate(method);
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });

  socket.on('emergency', () => {
    console.log('emergency land');
    drone.emergency();
    drone.setFlightParams(flightParams);
    setTimeout(resetFlightParams, timeOutLength);
  });
});
