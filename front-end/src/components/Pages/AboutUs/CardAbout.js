import React from 'react';

import './CardAbout.css';

function CardAbout({ img, name, desc }) {
  return (
    <div className="card-about-container">
      <div className="bg-color">
        <img src={img} className="img-container" />
      </div>
      <div className="name-container">
        <h2>{name}</h2>
        <h3>{desc}</h3>
      </div>
      <div className="socmed">
        <button className="button2">IG</button>
        <button className="button2">LI</button>
      </div>
    </div>
  );
}

export default CardAbout;
