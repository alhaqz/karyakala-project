<<<<<<< HEAD
import React from 'react';

=======
import React, { Fragment } from 'react';
import { Button } from '../Button/Button';
import '../../App.css';
>>>>>>> 7087960 (cek)
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="hero-container">
<<<<<<< HEAD
      <h1>This is Landing Page!</h1>
=======
      <div className="base-img">
        <div className="bg-img">
          <div className="container">
            <div className="text">
              <h1>Tunjang Bisnismu dengan Website yang Kredibel!</h1>
              <p>
                Karyakala bergerak untuk membantu personalisasi solusi bagi
                permasalahan yang bisnis Anda alami. Percayakan pembuatan
                website perusahaan Anda kepada kami dengan jaminan kualitas
                serta harga yang terjangkau.
              </p>
              <p>Cocok bagi anda pegiat perusahaan, UMKM, dan bisnis.</p>
              <div className="hero-btns">
                <Button
                  className="btns"
                  buttonStyle="btn--secondary"
                  path="/work"
                >
                  Learn more about us!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 7087960 (cek)
    </div>
  );
}

export default LandingPage();
