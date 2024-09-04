import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import HouseSection from './HouseSection';
import Footer from './Footer';
import './LandingPage.css'
// import './App.css';

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <HouseSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
