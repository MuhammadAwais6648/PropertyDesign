// src/components/ResponsivePage.js

import React, { useState } from 'react';
import './ResponsivePage.css';

const ResponsivePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="page-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">MySite</div>
          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to My Responsive Page</h1>
          <p>This is a fully responsive layout built with React and CSS.</p>
        </section>
        <section className="features">
          <div className="feature-card">Feature 1</div>
          <div className="feature-card">Feature 2</div>
          <div className="feature-card">Feature 3</div>
          <div className="feature-card">Feature 4</div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResponsivePage;
