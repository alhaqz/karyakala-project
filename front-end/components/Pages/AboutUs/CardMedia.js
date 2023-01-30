import React from 'react';

import './CardMedia.css';

function CardMedia({ logo }) {
  return (
    <div className="card-container">
      <div className="card-inside">
        <div className="card-logo">
          <img src={logo} className="card_logo" />
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <p>lol</p>
        </div>
      </div>
    </div>
  );
}

export default CardMedia;
