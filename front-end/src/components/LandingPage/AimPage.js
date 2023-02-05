import React from 'react';

import './AimPage.css';
import logo_yellow from '../../img/logo_yellow.png';
import TextAim from './TextAIm';

function AimPage() {
  return (
    <div className="aim2-container">
      <div className="bg-aim">
        <div className="float-aim-container">
          <h1>Bisnis yang Kami Sasar</h1>
          {/* <div className="float-child"> */}
          <div className="row">
            <div className="column">
              <TextAim
                title={'UMKM'}
                desc={
                  'Pelaku usaha yang ingin meningkatkan kredibilitas dan branding bisnismu secara digital.'
                }
                logo={logo_yellow}
              />{' '}
            </div>
            <div className="column">
              <TextAim
                title={'StartUp'}
                desc={
                  'Perusahaan rintisan yang sedang berkembang dan membutuhkan produk digital guna meningkatkan brand awareness.'
                }
                logo={logo_yellow}
              />
            </div>
            <div className="column">
              <TextAim
                title={'Proyek Kewirausahaan'}
                desc={
                  'Membutuhkan produk digital untuk tugas akhir ataupun project kewirausahaan dalam bentuk website.Bisnis yang Kami Sasar untuk Berkembang bersama Kami!'
                }
                logo={logo_yellow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AimPage;
