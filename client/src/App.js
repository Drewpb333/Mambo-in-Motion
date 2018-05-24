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
    <title>Mambo In Motion!</title>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="icon" type="image/png" href="images/app-icon-48.png"/>
    <link rel="manifest" href="manifest.json"/>
  </head>
  <body>

    <button className="button" id="connectBtn">Connect</button>
    <br/>
    <br/>    
    <button className="button" id="takeOffBtn">Take off</button>

    <div className="direction-pad">
      <div>
        <button className="button" id="forwardBtn" className="up">⇧</button>
      </div>
      <div>
        <button className="button" id="leftBtn" className="left">⇦</button>
        <button className="button" id="hoverBtn" className="hover">Hover</button>
        <button className="button" id="rightBtn" className="right">⇨</button>
      </div>
      <div>
        <button className="button" id="backwardBtn" className="down">⇩</button>
      </div>
    </div>

    <button className="button" id="flipBtn">Flip</button>
    <button className="button" id="landBtn">Land</button>
    <button className="button" id="emergencyBtn">Emergency Land</button>

 <div id="root"><div data-reactroot=""><div className="header"><h1 className="header_title">Mambo In Motion</h1><p className="header_info">Either click on elements below or use keyboard.</p><p className="header_info header_info-small"><strong>Keys -</strong>Take-Off/ Land: T | Move: Arrows | Raise: W | Lower: S | Turn Left: A | Turn Right: D | Flatten: F | Emergency Stop: Esc</p></div><div className="controller"><div className="joypad"><button className="button control_button control_button-up"><i className="fa fa-arrow-up" aria-hidden="true"></i></button><button className="button control_button control_button-right"><i className="fa fa-repeat" aria-hidden="true"></i></button><button className="button control_button control_button-down"><i className="fa fa-arrow-down" aria-hidden="true"></i></button><button className="button control_button control_button-left"><i className="fa fa-undo" aria-hidden="true"></i></button></div><div className="joypad-mid"><div className="drone"><svg viewBox="0 0 100 100" className="drone-icon"><g><path d="M50,39.5c-3.3,0-6,2.7-6,6H23.9l0.6-3.3c0.3-1.4-0.8-2.7-2.2-2.7H15c-1.4,0-2.5,1.3-2.2,2.7l2.3,12.3 c0.3,1.7,1.8,2.9,3.5,2.9c1.7,0,3.2-1.2,3.5-2.9l0.5-2.6l3,0.6v14.1c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V53.1l5.7,1.1v12.3 c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3V54.8L50,57.2l12.4-2.4v11.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3V54.3l5.7-1.1 v13.4c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V52.5l3-0.6l0.5,2.6c0.3,1.7,1.8,2.9,3.5,2.9c1.7,0,3.2-1.2,3.5-2.9l2.3-12.3 c0.3-1.4-0.8-2.7-2.2-2.7h-7.3c-1.4,0-2.5,1.3-2.2,2.7l0.6,3.3H56C56,42.2,53.3,39.5,50,39.5z"></path><path className="drone-status drone-landed" d="M7.4,36.6c1,0,5.7-0.4,9.2-1c1.3-0.2,2.7-0.2,4.1,0c3.5,0.6,8.2,1,9.2,1c1.5,0,2.8-1.1,2.8-2.4c0-1.3-1.3-2.4-2.8-2.4 c-1,0-5.7,0.4-9.2,1c-1.3,0.2-2.7,0.2-4.1,0c-3.5-0.6-8.2-1-9.2-1c-1.5,0-2.8,1.1-2.8,2.4C4.6,35.5,5.9,36.6,7.4,36.6z"></path><path className="drone-status drone-landed" d="M92.6,31.7c-1,0-5.7,0.4-9.2,1c-1.3,0.2-2.7,0.2-4.1,0c-3.5-0.6-8.2-1-9.2-1c-1.5,0-2.8,1.1-2.8,2.4c0,1.3,1.3,2.4,2.8,2.4 c1,0,5.7-0.4,9.2-1c1.3-0.2,2.7-0.2,4.1,0c3.5,0.6,8.2,1,9.2,1c1.5,0,2.8-1.1,2.8-2.4C95.4,32.8,94.1,31.7,92.6,31.7z"></path></g></svg><i className="fa fa-circle drone-connect drone-connecting" alt="Connecting..." aria-hidden="true"></i></div><div className="battery"><i className="fa fa-battery-empty battery-icon" aria-hidden="true"></i><span className="battery-label">???</span></div><div><button className="button action_button">Take-Off</button><button className="button action_button">Stop</button></div></div><div className="joypad"><button className="button control_button control_button-forward"><i className="fa fa-caret-up" aria-hidden="true"></i></button><button className="button control_button control_button-right"><i className="fa fa-caret-right" aria-hidden="true"></i></button><button className="button control_button control_button-backward"><i className="fa fa-caret-down" aria-hidden="true"></i></button><button className="button control_button control_button-left"><i className="fa fa-caret-left" aria-hidden="true"></i></button></div></div><div className="footer">Built and designed by <a href="https://github.com/Drewpb333/Project_3">Team Mambo In Motion</a>using React / Socket.io. / Auth0 / MySQL&nbsp;</div></div></div>

<script src="https://use.fontawesome.com/ca2ab5f879.js"></script>
    <script src="drone.js"></script>
    <script src="main.js"></script>
  </body>
      </div>
    );
  }
}

export default App;
