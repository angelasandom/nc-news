import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics/coding" className="nav-link" onClick={toggleMenu}>Coding</NavLink>
          </li>
          <li>
            <NavLink to="/topics/cooking" className="nav-link" onClick={toggleMenu}>Cooking</NavLink>
          </li>
          <li>
            <NavLink to="/topics/football" className="nav-link" onClick={toggleMenu}>Football</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;