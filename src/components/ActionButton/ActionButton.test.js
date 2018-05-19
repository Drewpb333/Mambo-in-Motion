import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import ActionButton from './index';

const mockFunction = jest.genMockFunction();
let component;

beforeEach(() => {
  component = TestUtils.renderIntoDocument(<div><ActionButton action={mockFunction} label="Hello World!"/></div>);
});

it('should render with appropriate content', () => {
  expect(
    ReactDOM.findDOMNode(component).querySelector('.action_button').textContent
  ).toBe('Hello World!');
});

it('should call logger when the button is clicked', function() {
  const button = ReactDOM.findDOMNode(component).querySelector('.action_button');
  TestUtils.Simulate.click(button);
  expect(mockFunction).toBeCalled();
});
