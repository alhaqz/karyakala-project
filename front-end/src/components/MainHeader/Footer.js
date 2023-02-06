import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
      <div class="container-footer">
        <div class="row-footer">
          <div class="footer-col">
            <h4>Perusahaan</h4>
            <ul>
              <li>
                <a href="about-us">Tentang Kami</a>
              </li>
              <li>
                <a href="work">Produk</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Hubungi kami</h4>
            <ul>
              <li>
                <a href="FAQ">FAQ</a>
              </li>
              <li>
                <a href="contact-us">Kontak</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Media Sosial</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
