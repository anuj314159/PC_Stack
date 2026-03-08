import React from 'react';
import CorsairLogo from '../assets/brand-images/Corsair.svg';

const Corsair: React.FC = () => {
  return (
    <div className="brand-card">
      <img src={CorsairLogo} alt="Corsair Logo" className="brand-logo" />
      <h3>Corsair</h3>
      <p>High-performance gear for gamers, creators, and PC builders.</p>
      <a href="#ram">View Products</a>
    </div>
  );
};

export default Corsair;
