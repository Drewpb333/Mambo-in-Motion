import React from 'react';
import './styles.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_title">Mambo In Motion</h1>
      <p className="header_info">
        Either click on elements below or use keyboard. 
      </p>
      <p className="header_info header_info-small">
        <strong>Keys -</strong> Take-Off/ Land: T | Move: Arrows | Raise: W | Lower: S | Turn Left: A | Turn Right: D | Flatten: F | Emergency Stop: Esc
      </p>
    </div>
  );
};

export default Header;
