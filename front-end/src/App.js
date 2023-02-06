import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/MainHeader/Navigation';
import AboutUsPage from './components/Pages/AboutUs/AboutUsPage';
import FAQPage from './components/Pages/FAQ/FAQPage';
import ContactUsPage from './components/Pages/ContactUs/ContactUsPage';
import Home from './components/LandingPage/Home';
import ProductPage from './components/Pages/Product/Product';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/MainHeader/Footer';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/work" element={<ProductPage />} />
          <Route path="/about-us" element={AboutUsPage} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
