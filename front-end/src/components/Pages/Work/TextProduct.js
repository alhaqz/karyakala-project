import React from 'react';

import './TextProduct.css';

function TextProduct({ title, button, logo }) {
  return (
    <div className="product3-container">
      <div>
        <div className="product-name">
          <h1>{title}</h1>
        </div>
        <div className="product-logo">
          <img src={logo} className="product_logo" />
        </div>
        <button className="button">{button}</button>
      </div>
    </div>
  );
}

export default TextProduct;
