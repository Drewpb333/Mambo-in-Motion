import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Auth from './Auth';

const auth = new Auth();

let state = {};
window.setState = (changes) => {
   state = Object.assign({}, state, changes);

   ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
let initalState = {
   name: "Mambo",
   location: location.pathname.replace(/^\/?|\/$/g, ""),
   auth
}

window.setState(initalState);