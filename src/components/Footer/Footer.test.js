import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import Footer from './index';

let component;

beforeEach(() => {
  component = TestUtils.renderIntoDocument(<div><Footer /></div>);
});

it('should render with appropriate content', () => {
  expect(
    ReactDOM.findDOMNode(component).querySelector('.footer').textContent
  ).toMatch('Rob');
});

