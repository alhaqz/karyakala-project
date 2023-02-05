import React from 'react';

import LandingPage from './LandingPage';
import AimPage from './AimPage';
import Purpose from './Purpose';
import Product from './Product';
import OurProduct from '../Pages/Work/OurProduct';
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
