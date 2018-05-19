import React, { Component } from 'react';
import Socket from 'socket.io-client';

import Header from './components/Header';
import Footer from './components/Footer';
import Controller from './components/Controller';

const socket = Socket('http://localhost:3001');
class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      connected: false,
      batteryLevel: false,
      flightStatus: 'landed'
    };
  }

  componentDidMount() {
    socket.on('connected', () => {
      this.setState({ connected: true });
      console.log('connected');
    });

    socket.on('batteryStatusChange', level => {
      this.setState({ batteryLevel: level });
      console.log('Battery Level', level);
    });

    socket.on('flightStatusChange', status => {
      this.setState({ flightStatus: status });
      console.log('isFlying', status);
    });

    socket.on('flightParamChange', params => {
      console.log('Flight Params', params);
    });

    document.addEventListener('keydown', this.onKeydown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeydown);
  }

  takeoffOrLand(e) {
    if (e) e.preventDefault();

    console.log('takeoffOrLand()');
    socket.emit('takeoffOrLand');
  }

  move(direction, e) {
    if (e) e.preventDefault();

    console.log('move()', direction);
    socket.emit('move', direction);
  }

  turn(direction, e) {
    if (e) e.preventDefault();

    console.log('turn()', direction);
    socket.emit('turn', direction);
  }

  trim(e) {
    if (e) e.preventDefault();

    console.log('trim()');
    socket.emit('trim');
  }

  emergency(e) {
    if (e) e.preventDefault();

    console.log('emergency()');
    socket.emit('emergency');
  }

  onKeydown(e) {
    if (e) e.preventDefault();
    switch (e.which) {
      case 38: // Up arrow
        this.move('forward');
        break;
      case 40: // Down arrow
        this.move('backward');
        break;
      case 37: // Left arrow
        this.move('left');
        break;
      case 39: // Right arrow
        this.move('right');
        break;
      case 87: // w
        this.turn('up');
        break;
      case 83: // s
        this.turn('down');
        break;
      case 65: // a
        this.turn('left');
        break;
      case 68: // d
        this.turn('right');
        break;
      case 84: // t
        this.takeoffOrLand();
        break;
      case 70: // f
        this.trim();
        break;
      case 27: // escape
        this.emergency();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Controller
          move={this.move}
          turn={this.turn}
          takeoffOrLand={this.takeoffOrLand}
          emergency={this.emergency}
          connected={this.state.connected}
          batteryLevel={this.state.batteryLevel}
          flightStatus={this.state.flightStatus}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
