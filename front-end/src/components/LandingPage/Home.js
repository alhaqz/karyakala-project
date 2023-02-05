import React from 'react';

import LandingPage from './LandingPage';
import AimPage from './AimPage';
import Purpose from '../Pages/AboutUs/Purpose';
import Product from './Product';
import OurProduct from '../Pages/Product/OurProduct';
import FAQPage from '../Pages/FAQ/FAQPage';
import ContactUsPage from '../Pages/ContactUs/ContactUsPage';

function Home() {
  return (
    <div>
      <LandingPage />
      <AimPage />
      <Purpose />
      <OurProduct />
      <FAQPage />
      <ContactUsPage />
    </div>
  );
}

export default Home();
