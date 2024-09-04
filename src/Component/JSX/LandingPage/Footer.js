import React from 'react';
// import './Footer.css';
import logo from "./img2.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-logo">
        <div className="logo">
    <img src={logo} alt=" " />
  </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer-copyright">
          <p>© 2019 Diyara Ltd. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
