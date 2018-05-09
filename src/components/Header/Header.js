import React from 'react';

import arrow from '../../assets/img/arrow_pointer.png';
import spacexLogo from '../../assets/img/space_x_logo_bw_centered.png';

const Header = () => (
  <div className="header">
    <div className="container header__container">
      <a href="#" className="header__go-back-wrapper">
        <img src={arrow} className="header__arrow" alt="go back" />
        <span className="header__arrow-line" />
        <span className="header__back title">GO BACK</span>
      </a>
      <img src={spacexLogo} className="header__logo" alt="spacex logo" />
      <div className="header__placeholder" />
    </div>
  </div>
);

export default Header;
