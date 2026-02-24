import React from 'react';
import Container from './Container';

const Ram: React.FC = () => {
  return (
    <Container title="RAM" iconName="hardware-chip-outline">
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="RAM Kit 1" className="product-image-placeholder" />
        <h3>RAM Kit 1</h3>
        <p>Price: $99</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="RAM Kit 2" className="product-image-placeholder" />
        <h3>RAM Kit 2</h3>
        <p>Price: $149</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="RAM Kit 3" className="product-image-placeholder" />
        <h3>RAM Kit 3</h3>
        <p>Price: $199</p>
      </div>
    </Container>
  );
};

export default Ram;
