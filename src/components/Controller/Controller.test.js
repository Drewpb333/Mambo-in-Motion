import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils'; // ES6
import Controller from './index';

const mockFunction = jest.genMockFunction();
let component;

beforeEach(() => {
  component = TestUtils.renderIntoDocument(
    <div>
      <Controller
          move={mockFunction}
          turn={mockFunction}
          takeoffOrLand={mockFunction}
          emergency={mockFunction}
          connected="true"
          batteryLevel="100%"
          flightStatus="landing"
        />
    </div>
  );
});

it('should contain appropriate content', () => {
  expect(
    ReactDOM.findDOMNode(component).querySelector('.joypad')
  ).toBeDefined();
});


