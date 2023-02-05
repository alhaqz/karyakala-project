import React from 'react';

import './KaryaKalaPage.css';

import Adella from '../../../img/team/Adella.png';
import Dimas from '../../../img/team/Dimas.png';
import Sanyyah from '../../../img/team/Sanyyah.png';
import Yudho from '../../../img/team/Yudho.png';

import CardAbout from './CardAbout';

function FAQPage() {
  return (
    <div className="about-us-container">
      <div className="bg-about-us">
        <h1>Di Balik Layar Karyakala</h1>
        <div className="row">
          <div className="column">
            <CardAbout img={Adella} name={'Adella'} desc={'Finance'} />
          </div>
          <div className="column">
            <CardAbout img={Yudho} name={'Yudho'} desc={'Developer'} />
          </div>
          <div className="column">
            <CardAbout img={Dimas} name={'Dimas'} desc={'Developer'} />
          </div>
          <div className="column">
            <CardAbout img={Sanyyah} name={'Sanyyah'} desc={'HR'} />
          </div>
          <div className="column">
            <CardAbout img={Adella} name={'Elham'} desc={'Developer'} />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default FAQPage;
