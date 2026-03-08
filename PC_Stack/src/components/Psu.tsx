import React from 'react';
import Container from './Container';
import { psus } from '../utils/products';

const Psu: React.FC = () => {
  return (
    <Container title="Power Supplies" iconName="flash-outline">
      {psus.map((item) => (
        <div className="product-card" key={item.name}>
          {item.image ? (
            <img src={item.image} alt={item.name} className="product-image" />
          ) : (
            <div className="product-image-placeholder">No image available</div>
          )}
          <h3>{item.name}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </Container>
  );
};

export default Psu;
