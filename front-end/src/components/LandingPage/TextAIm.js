import React from 'react';

import './TextAim.css';

function TextAim({ title, desc, logo }) {
  return (
    <div className="aim-container">
      <div className="aim-logo">
        <img src={logo} className="aim_logo" />
      </div>
      <div className="aim-child">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default TextAim;
