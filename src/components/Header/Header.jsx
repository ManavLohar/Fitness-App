import React, { useState } from "react";
import "./Header.css";
import Logo from "../../img/logo.png";
import Bars from "../../img/bars.png";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  function handleClick() {
    setMenuOpened(false);
  }

  return (
    <div className='header'>
      <img className='logo' src={Logo} />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "#ababab",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}>
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link
              onClick={handleClick}
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to='programs' spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link onClick={handleClick} to='reasons' spy={true} smooth={true}>
              Why us
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link onClick={handleClick} to='plans' spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to='testimonials'
              span={true}
              smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
