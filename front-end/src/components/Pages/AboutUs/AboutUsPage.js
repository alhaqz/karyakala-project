import React from 'react';

import './AboutUs.css';

import KaryaKalaPage from './KaryaKalaPage';
import Purpose from './Purpose';

function AboutUsPage() {
  return (
    <div className="aboutus-container">
      <div className="about-us-bg">
        <div>
          <Purpose />
          <KaryaKalaPage />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage();
