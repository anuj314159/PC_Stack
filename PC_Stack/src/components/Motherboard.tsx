import React from 'react';
import Container from './Container';

const Motherboard: React.FC = () => {
  return (
    <Container title="Motherboards" iconName="options-outline">
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="Motherboard 1" className="product-image-placeholder" />
        <h3>Motherboard 1</h3>
        <p>Price: $159</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="Motherboard 2" className="product-image-placeholder" />
        <h3>Motherboard 2</h3>
        <p>Price: $249</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="Motherboard 3" className="product-image-placeholder" />
        <h3>Motherboard 3</h3>
        <p>Price: $399</p>
      </div>
    </Container>
  );
};

export default Motherboard;
