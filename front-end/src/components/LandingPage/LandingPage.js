import React from 'react';
import { Button } from '../Button/Button';
import '../../App.css';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="hero-container">
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
              <div className="hero-btns">
                <Button
                  className="btns"
                  buttonStyle="btn--secondary"
                  path="/contact-us"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
