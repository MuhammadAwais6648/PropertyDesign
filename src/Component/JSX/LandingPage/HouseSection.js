import React from 'react';
// import './HouseSection.css';
import img4 from "./image14.png"
import img5 from "./Group10350.png"
import img6 from "./Group72.png"


const HouseSection = () => {
  return (
    <div className="HouseSections">
      <div className="section">
        <div className="image-box">
          <img src={img4} alt="House 1" />
        </div>
        <div className="text-box">
          <h1>Find your next perfect place to live</h1>
          <p>We create your dream house. Architecturally built by our own carpenters with turnkey contracts.</p>
          <button style={{ borderRadius: `50px`, }}>Register</button>
        </div>
      </div>
      <div className="section">
      <div className="text-box">
          <h1>Find your next perfect place to live</h1>
          <p>We create your dream house. Architecturally built by our own carpenters with turnkey contracts.</p>
          <button style={{ borderRadius: `50px`, }}>Register</button>
        </div>
        <div className="image-box">
          <img src={img5} alt="House 2" />
        </div>
        
      </div>

      <div className="latest-property">
        <h2>Latest Property</h2>
        <div className="property-listing">
          <div className="property">
            <div className="image-box">
              <img src={img6} alt="Bridgeland Modern House" />
            </div>
            {/* <div className="property-details">
              <span className="tag available">Available</span>
              <h3>Bridgeland Modern House</h3>
              <p>Semarang, Indonesia</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <div className="property-info">
                <span>Offer ID: 120001</span>
                <span>No Of Rooms: 4</span>
                <span>Area: 1250 Sqft</span>
                <span>District: Semarang</span>
                <span>Price: $260/M</span>
              </div>
              <div className="buttons">
                <button>Send Request</button>
                <button>Send Offer</button>
              </div>
            </div> */}
          </div>
          <div className="property">
            <div className="image-box">
              <img src={img6} alt="Bridgeland Modern House" />
            </div>
            {/* <div className="property-details">
              <span className="tag sold">Sold</span>
              <h3>Bridgeland Modern House</h3>
              <p>Semarang, Indonesia</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <div className="property-info">
                <span>Offer ID: 120001</span>
                <span>No Of Rooms: 4</span>
                <span>Area: 1250 Sqft</span>
                <span>District: Semarang</span>
                <span>Price: $260/M</span>
              </div>
              <div className="buttons">
                <button>Send Request</button>
                <button>Send Offer</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default HouseSection;
