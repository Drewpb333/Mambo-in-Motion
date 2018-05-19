import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import Header from './index';

let component;

beforeEach(() => {
  component = TestUtils.renderIntoDocument(<div><Header /></div>);
});

it('should render with appropriate content', () => {
  expect(
    ReactDOM.findDOMNode(component).querySelector('.header').textContent
  ).toMatch('Parrot');
});
