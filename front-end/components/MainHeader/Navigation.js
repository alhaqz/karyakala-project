import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo_white from '../../img/logo_white.png';
<<<<<<< HEAD
=======
import logo_yellow from '../../img/logo_yellow.png';
import { Button } from '../Button/Button';
>>>>>>> 7087960 (cek)
import './Navigation.css';

const Navigation = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
<<<<<<< HEAD
            <img src={logo_white} className="logo" />
            Karyakala
            <i class="fab fa-typo3" />
=======
            <img src={logo_yellow} className="logo" />
            Karyakala
            <i className="fab fa-typo3" />
>>>>>>> 7087960 (cek)
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
<<<<<<< HEAD
            <li className="nav-item">
=======
            {/* <li className="nav-item">
              {button && (
                <Button buttonStyle="btn--outline" path="/contact-us">
                  Contact Us
                </Button>
              )}
>>>>>>> 7087960 (cek)
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
<<<<<<< HEAD
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
=======
            </li> */}
          </ul>
          {button && (
            <Button buttonStyle="btn--primary" path="/contact-us">
              Contact Us
            </Button>
          )}
>>>>>>> 7087960 (cek)
        </div>
      </nav>
    </>
  );
};

export default Navigation;
