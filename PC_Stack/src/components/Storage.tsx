import React from 'react';
import Container from './Container';
import { storage } from '../utils/products';

const Storage: React.FC = () => {
  return (
    <Container title="Storage" iconName="save-outline">
      {storage.map((item) => (
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

export default Storage;
