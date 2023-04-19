import React from "react";
import "./Footer.css";

import github from "../../img/github.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
      <div className='footer'>
        <div className='social-links'>
          <img src={github} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
        <div className='logo-f'>
          <img src={logo} />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
