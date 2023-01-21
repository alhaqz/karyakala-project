import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>
  );
};

export default MainHeader;
