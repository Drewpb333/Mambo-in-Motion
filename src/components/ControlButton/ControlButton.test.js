import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import ControlButton from './index';

const mockFunction = jest.genMockFunction();
let component;

beforeEach(() => {
  component = TestUtils.renderIntoDocument(<div><ControlButton action={mockFunction} direction="left" icon="fa-alert"/></div>);
});

it('should add appropriate classes to the button', () => {
  expect(
    ReactDOM.findDOMNode(component).querySelector('.control_button').classList
  ).toContain('control_button-left');
});

it('should call logger when the button is clicked', function() {
  const button = ReactDOM.findDOMNode(component).querySelector('.control_button');
  TestUtils.Simulate.click(button);
  expect(mockFunction).toBeCalled();
});
