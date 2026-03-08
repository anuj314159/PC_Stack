import React from 'react';
import WDLogo from '../assets/brand-images/Western_Digital_logo_2004.svg';

const WesternDigital: React.FC = () => {
  return (
    <div className="brand-card">
      <img src={WDLogo} alt="Western Digital Logo" className="brand-logo" />
      <h3>Western Digital</h3>
      <p>Reliable storage solutions for every need.</p>
      <a href="#storage">View Products</a>
    </div>
  );
};

export default WesternDigital;
