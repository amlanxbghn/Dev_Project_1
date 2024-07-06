// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features-page');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <a href="/">Diversif.<span className="highlight">ai</span></a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="#features" onClick={handleScrollToFeatures}>Features</a>
        <a href="/about">About</a>
        <a href="/sign up" className="signup-button">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
