import React from 'react';
import Container from './Container';

const Gpu: React.FC = () => {
  return (
    <Container title="GPUs" iconName="game-controller-outline">
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="GPU Model 1" className="product-image-placeholder" />
        <h3>GPU Model 1</h3>
        <p>Price: $799</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="GPU Model 2" className="product-image-placeholder" />
        <h3>GPU Model 2</h3>
        <p>Price: $999</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="GPU Model 3" className="product-image-placeholder" />
        <h3>GPU Model 3</h3>
        <p>Price: $1299</p>
      </div>
    </Container>
  );
};

export default Gpu;
