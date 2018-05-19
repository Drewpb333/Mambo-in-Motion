import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import Drone from './index';

let component;

it('should render with connected class', () => {
  component = TestUtils.renderIntoDocument(<div><Drone connected="true" flightStatus="landing" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.drone-connect').classList
  ).toContain('drone-connected');
});

it('should render with connecting class', () => {
  component = TestUtils.renderIntoDocument(<div><Drone flightStatus="landing" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.drone-connect').classList
  ).toContain('drone-connecting');
});

it('should render with hovering class', () => {
  component = TestUtils.renderIntoDocument(<div><Drone flightStatus="landing" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.drone-status').classList
  ).toContain('drone-hovering');
});

it('should render with emergency class', () => {
  component = TestUtils.renderIntoDocument(<div><Drone flightStatus="emergency" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.drone-status').classList
  ).toContain('drone-emergency');
});


