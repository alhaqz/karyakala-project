import React from 'react';

import img_work from '../../img/img_work.jpeg';
import './Purpose.css';

function Purpose() {
  return (
    <div className="purpose-container">
      <h1>Mengapa Karyakala Bergerak?</h1>
      <div className="row-purpose">
        <div className="column-purpose img3">
          <img src={img_work} className="img-purpose" />
        </div>
        <div className="column-purpose">
          <p>
            Kami percaya bahwa pertumbuhan UMKM menjadi pondasi dari kemajuan
            perekonomian di Indonesia, yang roda penggerak utamanya merupakan
            UMKM itu sendiri.
          </p>
          <span></span>
          <p>
            Kami juga percaya, bahwa penggunaan teknologi tak terelakkan dalam
            hal mendukung terlaksananya kegiatan ekonomi secara digital di
            tengah era disrupsi ini.
          </p>
          <p>
            Oleh karena itu, kami hadir untuk membantu dan menjembatani UMKM,
            perusahaan rintisan (start up), dan proyek kewirausahaan lain agar
            dapat go digital semaksimal mungkin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
