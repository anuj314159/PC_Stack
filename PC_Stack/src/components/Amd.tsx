import React from 'react';
import AMDLogo from '../assets/brand-images/AMD_Logo.svg';

const Amd: React.FC = () => {
  return (
    <div className="brand-card">
      <img src={AMDLogo} alt="AMD Logo" className="brand-logo" />
      <h3>AMD</h3>
      <p>High-performance computing and visualization.</p>
      <a href="#cpus">View Products</a>
    </div>
  );
};

export default Amd;
