import React from 'react';
import NvidiaLogo from '../assets/brand-images/NVIDIA_logo.svg';

const Nvidia: React.FC = () => {
  return (
    <div className="brand-card">
      <img src={NvidiaLogo} alt="Nvidia Logo" className="brand-logo" />
      <h3>Nvidia</h3>
      <p>The world's most powerful graphics cards.</p>
      <a href="#gpus">View Products</a>
    </div>
  );
};

export default Nvidia;
