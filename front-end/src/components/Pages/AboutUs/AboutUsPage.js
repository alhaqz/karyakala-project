import React from 'react';

import './AboutUs.css';

import AboutKarya from './AboutKarya';
import KaryaKalaPage from './KaryaKalaPage';

function AboutUsPage() {
  return (
    <div className="aboutus-container">
      <div className="about-us-bg">
        <div>
          {/* <h1>lol</h1> */}
          <AboutKarya />
          {/* <h1>lol2</h1> */}
          <KaryaKalaPage />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage();
