import React from 'react';

import './FAQ.css';

import Adella from '../../../img/team/Adella.png';
import Dimas from '../../../img/team/Dimas.png';
import Sanyyah from '../../../img/team/Sanyyah.png';
import Yudho from '../../../img/team/Yudho.png';

import CardAbout from './CardAbout';

function FAQPage() {
  return (
    <div className="about-us-container">
      <div className="bg-about-us">
        <h1>Meet our team!</h1>
        <div className="row">
          <div className="column">
            <CardAbout img={Adella} name={'Adella'} desc={'left'} />
          </div>
          <div className="column">
            <CardAbout img={Yudho} name={'Yudho'} desc={'mid'} />
          </div>
          <div className="column">
            <CardAbout img={Dimas} name={'Dimas'} desc={'right'} />
          </div>
        </div>
        <div className="row">
          <div className="column2">
            <CardAbout img={Sanyyah} name={'Sanyyah'} desc={'left'} />
          </div>
          <div className="column2">
            <CardAbout img={Adella} name={'Elham'} desc={'right'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage();
