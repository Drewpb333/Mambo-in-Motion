import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" content="#0ea2dc"/>
    <title>Web Bluetooth Drone Demo</title>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="icon" type="image/png" href="images/app-icon-48.png"/>
    <link rel="manifest" href="manifest.json"/>
  </head>
  <body>

    <h1>Drone Controller</h1>

    <button class="button" id="connectBtn">Connect</button>
    <button class="button" id="takeOffBtn">Take off</button>

    <div class="direction-pad">
      <div>
        <button class="button" id="forwardBtn" class="up">⇧</button>
      </div>
      <div>
        <button class="button" id="leftBtn" class="left">⇦</button>
        <button class="button" id="hoverBtn" class="hover">Hover</button>
        <button class="button" id="rightBtn" class="right">⇨</button>
      </div>
      <div>
        <button class="button" id="backwardBtn" class="down">⇩</button>
      </div>
    </div>

    <button class="button" id="flipBtn">Flip</button>
    <button class="button" id="landBtn">Land</button>
    <button class="button" id="emergencyBtn">Emergency Land</button>

    <script src="js/drone.v1.2.js"></script>
    <script src="js/main.v1.2.js"></script>
  </body>
      </div>
    );
  }
}

export default App;
