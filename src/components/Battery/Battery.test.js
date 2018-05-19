import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import Battery from './index';

let component;

it('should contain appropriate content', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="100" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-label').textContent
  ).toBe('100%');
});

it('should contain appropriate content when no value selected', () => {
  component = TestUtils.renderIntoDocument(<div><Battery /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-label').textContent
  ).toBe('???');
});

it('should render with connected class', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="100" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-icon').classList
  ).toContain('fa-battery-full');
});

it('should render with connecting class', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="78" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-icon').classList
  ).toContain('fa-battery-three-quarters');
});

it('should render with hovering class', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="45" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-icon').classList
  ).toContain('fa-battery-half');
});

it('should render with emergency class', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="25" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-icon').classList
  ).toContain('fa-battery-quarter');
});

it('should render with emergency class', () => {
  component = TestUtils.renderIntoDocument(<div><Battery percent="4" /></div>);
  expect(
    ReactDOM.findDOMNode(component).querySelector('.battery-icon').classList
  ).toContain('fa-battery-empty');
});


