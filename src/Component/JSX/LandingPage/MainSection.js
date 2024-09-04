import React from 'react';
// import './MainSection.css';
import img3 from "./MaskGroup.png"

const MainSection = () => {
  return (
    <div className="MainSections">
      <div className="container">
        <div className="text-box">
          <h1>Let's Find a home that's perfect for you</h1>
          <p>We create your dream house. Architectural and built by our own carpenters with turnkey contracts.</p>
          <input style={{ borderRadius: `50px`, }} type="text" placeholder="Your Phone Number" />
          <button style={{ borderRadius: `50px`, }}>Register</button>
        </div>
        <div className="image-box">
          <img src={img3} alt="House" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
