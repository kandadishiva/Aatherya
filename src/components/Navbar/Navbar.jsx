import React from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import images from '../../static/Images/logo.jpeg';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images} alt="app__logo" />
        <h3>Aatherya</h3>
      </div>
      <ul className="app__navbar-links">
        <li className="app__nav__li"><a className="app__nav__a" href="#home">Home</a></li>
        <li className="app__nav__li"><a className="app__nav__a" href="#about">About</a></li>
        <li className="app__nav__li"><a className="app__nav__a" href="#menu">Gallery</a></li>
        <li className="app__nav__li"><a className="app__nav__a" href="#awards">Achievements</a></li>
        <li className="app__nav__li"><a className="app__nav__a" href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="app__nav__a">Log In</a>
        <div />
        
        <button className="button n-button">Apply</button>

      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a className="app__nav__a" href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a className="app__nav__a" href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a className="app__nav__a" href="#menu" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a className="app__nav__a" href="#awards" onClick={() => setToggleMenu(false)}>Achievements</a></li>
              <li><a className="app__nav__a" href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;