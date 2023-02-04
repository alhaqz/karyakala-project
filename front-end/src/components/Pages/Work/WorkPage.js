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
            <h1>Bisnis yang Kami Sasar untuk Berkembang bersama Kami!</h1>
            <div className="containter-left">
              <TextWork
                title={'UMKM'}
                desc={
                  'Pelaku usaha yang ingin meningkatkan kredibilitas dan branding bisnismu secara digital.'
                }
                logo={logo_yellow}
              />
              <TextWork
                title={'StartUp'}
                desc={
                  'Perusahaan rintisan yang sedang berkembang dan membutuhkan produk digital guna meningkatkan brand awareness.'
                }
                logo={logo_yellow}
              />
              <TextWork
                title={'Proyek Kewirausahaan'}
                desc={
                  'Membutuhkan produk digital untuk tugas akhir ataupun project kewirausahaan dalam bentuk website.Bisnis yang Kami Sasar untuk Berkembang bersama Kami!'
                }
                logo={logo_yellow}
              />
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
