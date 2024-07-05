import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <a href="/">Diversif.ai</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">Features</a>
        <a href="/services">About</a>
        <a href="/contact">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
