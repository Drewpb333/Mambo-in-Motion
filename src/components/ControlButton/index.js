import React from 'react';
import './styles.css';

const ControlButton = ({ action, direction, icon }) => {
  return (
    <button className={`button control_button control_button-${direction}`} onClick={action.bind(null, direction)}>
      <i className={`fa ${icon}`} aria-hidden="true" />
    </button>
  )
};

export default ControlButton;
