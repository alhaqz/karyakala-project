import './App.css';
import React from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/MainHeader/Navigation';
import WorkPage from './components/Pages/Work/WorkPage';
import AboutUsPage from './components/Pages/AboutUs/AboutUsPage';
import FAQPage from './components/Pages/FAQ/FAQPage';
import ContactUsPage from './components/Pages/ContactUs/ContactUsPage';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={LandingPage} />
          <Route path="/work" element={WorkPage} />
          <Route path="/about-us" element={AboutUsPage} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
