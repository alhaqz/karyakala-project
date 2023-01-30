import React from 'react';

import './TextWork.css';

function TextWork({ title, desc, logo }) {
  return (
    <div className="text-container">
      <div className="text-child">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="text-logo">
        <img src={logo} className="text_logo" />
      </div>
    </div>
  );
}

export default TextWork;
