import React from 'react';
import './styles.css';

const Battery = ({ percent }) => {
  let icon = 'fa-battery-empty';
  
  if (parseInt(percent, 10) > 90) {
    icon = 'fa-battery-full';
  } else if (parseInt(percent, 10) > 75) {
    icon = 'fa-battery-three-quarters'; 
  } else if (parseInt(percent, 10) > 40) {
    icon = 'fa-battery-half';
  } else if (parseInt(percent, 10) > 5) {
    icon = 'fa-battery-quarter';
  }

  let batteryContent;
  if (percent) {
    batteryContent = `${percent}%`;
  } else {
    batteryContent = '???';
  }

  return (
    <div className="battery">
      <i className={`fa ${icon} battery-icon`} aria-hidden="true" />
      <span className="battery-label">{batteryContent}</span>
    </div>
  );
};

export default Battery;
