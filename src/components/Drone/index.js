import React from 'react';
import './styles.css';

const Drone = ({ connected, flightStatus }) => {
  let connectedClasses = 'fa fa-circle drone-connect drone-connecting';
  let connectedText = 'Connecting...';
  let flightClasses = 'drone-status drone-landed';

  if (connected) {
    connectedClasses = 'fa fa-circle drone-connect drone-connected';
    connectedText = 'Connected';
  }

  if (flightStatus === 'taking off' || flightStatus === 'landing') {
    flightClasses = 'drone-status drone-landing';
  } else if (flightStatus === 'hovering') {
    flightClasses = 'drone-status drone-flying';
  } else if (flightStatus === 'emergency') {
    flightClasses = 'drone-status drone-emergency';
  }

  return (
    <div className="drone">
      <svg viewBox="0 0 100 100" className="drone-icon">
        <g>
          <path d="M50,39.5c-3.3,0-6,2.7-6,6H23.9l0.6-3.3c0.3-1.4-0.8-2.7-2.2-2.7H15c-1.4,0-2.5,1.3-2.2,2.7l2.3,12.3
            c0.3,1.7,1.8,2.9,3.5,2.9c1.7,0,3.2-1.2,3.5-2.9l0.5-2.6l3,0.6v14.1c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V53.1l5.7,1.1v12.3
            c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3V54.8L50,57.2l12.4-2.4v11.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3V54.3l5.7-1.1
            v13.4c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8V52.5l3-0.6l0.5,2.6c0.3,1.7,1.8,2.9,3.5,2.9c1.7,0,3.2-1.2,3.5-2.9l2.3-12.3
            c0.3-1.4-0.8-2.7-2.2-2.7h-7.3c-1.4,0-2.5,1.3-2.2,2.7l0.6,3.3H56C56,42.2,53.3,39.5,50,39.5z"
          />
          <path className={flightClasses} d="M7.4,36.6c1,0,5.7-0.4,9.2-1c1.3-0.2,2.7-0.2,4.1,0c3.5,0.6,8.2,1,9.2,1c1.5,0,2.8-1.1,2.8-2.4c0-1.3-1.3-2.4-2.8-2.4
            c-1,0-5.7,0.4-9.2,1c-1.3,0.2-2.7,0.2-4.1,0c-3.5-0.6-8.2-1-9.2-1c-1.5,0-2.8,1.1-2.8,2.4C4.6,35.5,5.9,36.6,7.4,36.6z"
          />
          <path className={flightClasses} d="M92.6,31.7c-1,0-5.7,0.4-9.2,1c-1.3,0.2-2.7,0.2-4.1,0c-3.5-0.6-8.2-1-9.2-1c-1.5,0-2.8,1.1-2.8,2.4c0,1.3,1.3,2.4,2.8,2.4
            c1,0,5.7-0.4,9.2-1c1.3-0.2,2.7-0.2,4.1,0c3.5,0.6,8.2,1,9.2,1c1.5,0,2.8-1.1,2.8-2.4C95.4,32.8,94.1,31.7,92.6,31.7z"
          />
        </g>
      </svg>
      <i className={connectedClasses} alt={connectedText} />
    </div>
  )
};

export default Drone;
