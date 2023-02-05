import React from 'react';

import './OurProduct.css';
import TextProduct from './TextProduct';
import logo_yellow from '../../../img/logo_yellow.png';

function OurProduct() {
  return (
    <div className="main-prouct-container">
      <div className="bg-main-product">
        <div className="float-main-product-container">
          <h1>Produk Kami</h1>
          {/* <div className="float-child"> */}
          <div className="row">
            <div className="column">
              <TextProduct
                title={'SEO Optimization'}
                button={'Segera Hadir'}
                logo={logo_yellow}
              />{' '}
            </div>
            <div className="column">
              <TextProduct
                title={'Website/Landing Page'}
                button={'Segera Hadir'}
                logo={logo_yellow}
              />
            </div>
            <div className="column">
              <TextProduct
                title={'Social Media Ads'}
                button={'Segera Hadir'}
                logo={logo_yellow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
