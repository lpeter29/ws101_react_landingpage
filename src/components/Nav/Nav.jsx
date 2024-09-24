import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <i className="fas fa-code"></i> WEB DEV
      </div>
      <div className={`burger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/home"><i className="fas fa-home"></i> HOME</Link></li>
        <li><Link to="/about"><i className="fas fa-info-circle"></i> ABOUT</Link></li>
        <li><Link to="/tools"><i className="fas fa-wrench"></i> TOOLS</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
