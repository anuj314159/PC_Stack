import React from 'react';
import IntelLogo from '../assets/brand-images/Intel_logo_2023.svg';

const Intel: React.FC = () => {
  return (
    <div className="brand-card">
      <img src={IntelLogo} alt="Intel Logo" className="brand-logo" />
      <h3>Intel</h3>
      <p>Experience the power of Intel processors.</p>
      <a href="#cpus">View Products</a>
    </div>
  );
};

export default Intel;
