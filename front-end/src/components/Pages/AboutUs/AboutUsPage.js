import React from 'react';

import './AboutUs.css';
import CardMedia from './CardMedia';
import logo_yellow from '../../../img/logo_yellow.png';
import logo_white from '../../../img/logo_white.png';

function AboutUsPage() {
  return (
    <div className="aboutus-container">
      <div className="about-us-bg">
        <div className="background-about-us">
          <div className="hero-about-us">
            <div className="karya-container">
              <h1>Kami Karyakala</h1>
              <p>
                Kami bertekad untuk turut berkontribusi dalam memajukan
                pertumbuhan UMKM Indonesia melalui jasa pembuatan website yang
                user-centric dan berkualitas.Kami bertekad untuk turut
                berkontribusi dalam memajukan pertumbuhan UMKM Indonesia melalui
                jasa pembuatan website yang user-centric dan berkualitas.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="grid-container">
          <div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
          </div>
          <div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
            <div className="item1">
              <CardMedia logo={logo_yellow} />
            </div>
          </div>
        </div> */}
      </div>
      {/* <h1>This is About Us Page!</h1> */}
    </div>
  );
}

export default AboutUsPage();
