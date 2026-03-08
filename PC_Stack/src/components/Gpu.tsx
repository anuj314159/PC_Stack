import React from 'react';
import Container from './Container';
import { gpus } from '../utils/products';

const Gpu: React.FC = () => {
  return (
    <Container title="GPUs" iconName="game-controller-outline">
      {gpus.map((gpu) => (
        <div className="product-card" key={gpu.name}>
          {gpu.image ? (
            <img src={gpu.image} alt={gpu.name} className="product-image" />
          ) : (
            <div className="product-image-placeholder">No image available</div>
          )}
          <h3>{gpu.name}</h3>
          <p>{gpu.details}</p>
        </div>
      ))}
    </Container>
  );
};

export default Gpu;
