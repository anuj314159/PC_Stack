import React from 'react';
import Container from './Container';
import { cpus } from '../utils/products';

const Cpu: React.FC = () => {
  return (
    <Container title="CPUs" iconName="hardware-chip-outline">
      {cpus.map((cpu) => (
        <div className="product-card" key={cpu.name}>
          {cpu.image ? (
            <img src={cpu.image} alt={cpu.name} className="product-image" />
          ) : (
            <div className="product-image-placeholder">No image available</div>
          )}
          <h3>{cpu.name}</h3>
          <p>{cpu.details}</p>
        </div>
      ))}
    </Container>
  );
};

export default Cpu;
