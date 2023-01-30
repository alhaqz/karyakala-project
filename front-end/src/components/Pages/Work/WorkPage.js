import React from 'react';

import './WorkPage.css';
import img_work from '../../../img/img_work.jpeg';
import TextWork from './TextWork';
import logo_yellow from '../../../img/logo_yellow.png';

function WorkPage() {
  return (
    <div className="work-container">
      <div className="bg-work">
        <div className="float-container">
          <div className="float-child">
            <h1>What we aim!</h1>
            <div className="containter-left">
              <TextWork title={'title'} desc={'desc'} logo={logo_yellow} />
              <TextWork title={'title'} desc={'desc'} logo={logo_yellow} />
              <TextWork title={'title'} desc={'desc'} logo={logo_yellow} />
            </div>
          </div>
          <div className="float-child">
            <img className="img-work" src={img_work} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage();
