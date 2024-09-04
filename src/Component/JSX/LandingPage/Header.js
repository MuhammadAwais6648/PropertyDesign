import React from 'react';
// import './Header.css';
import logo from "./img2.png"
const Header = () => {
  return (
    <header className="header navbar">
      <div className="logo">
    <img src={logo} alt=" " />
  </div>
      <nav>
        <ul>
          <li><a href="#login">Log In</a></li>
          <li><a href="/register" className="register-link">Register</a></li>
          {/* <a href="/register" className="register-link">Register</a> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
