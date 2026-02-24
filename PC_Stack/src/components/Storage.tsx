import React from 'react';
import Container from './Container';

const Storage: React.FC = () => {
  return (
    <Container title="Storage" iconName="save-outline">
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="SSD 1TB" className="product-image-placeholder" />
        <h3>SSD 1TB</h3>
        <p>Price: $99</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="HDD 4TB" className="product-image-placeholder" />
        <h3>HDD 4TB</h3>
        <p>Price: $79</p>
      </div>
      <div className="product-card">
        <img src="https://via.placeholder.com/300x200" alt="NVMe SSD 2TB" className="product-image-placeholder" />
        <h3>NVMe SSD 2TB</h3>
        <p>Price: $199</p>
      </div>
    </Container>
  );
};

export default Storage;
