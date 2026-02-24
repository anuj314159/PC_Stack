import React from 'react';
import Container from './Container';

const Cpu: React.FC = () => {
  return (
    <Container title="CPUs" iconName="hardware-chip-outline">
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="CPU Model 1" className="product-image-placeholder" />
        <h3>CPU Model 1</h3>
        <p>Price: $299</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="CPU Model 2" className="product-image-placeholder" />
        <h3>CPU Model 2</h3>
        <p>Price: $399</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="CPU Model 3" className="product-image-placeholder" />
        <h3>CPU Model 3</h3>
        <p>Price: $499</p>
      </div>
    </Container>
  );
};

export default Cpu;
