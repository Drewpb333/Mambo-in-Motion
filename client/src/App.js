import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/main";
import Panel from "./components/Panel";
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends Component {
  render() {
    let mainComponent = ""
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "Callback":
        mainComponent = <Callback />;
        break;
      case "Panel":
        mainComponent = this.props.auth.iAuthenticated() ? <Panel {...this.props}/> : <NotFound/>;
        break;
      default:
        mainComponent = <NotFound />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.props.name}</h1>
        </header>
        {mainComponent}
      </div>
    );
  }
}


