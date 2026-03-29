import React from 'react';
import Container from './Container';
import { imageMap } from '../utils/products';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const Motherboard: React.FC = () => {
  const motherboards = [
    { name: 'MSI B650M', price: '$159' },
    { name: 'Zebronics H61 NVME', price: '$249' },
    { name: 'Gigabyte A520M', price: '$399' },
  ];

  return (
    <Container title="Motherboards" iconName="options-outline">
      {motherboards.map((mb, index) => {
        const slug = slugify(mb.name);
        return (
          <div key={index} className="product-card">
            <img src={imageMap[slug] || "https://via.placeholder.com/300x200"} alt={mb.name} className="product-image-placeholder" />
            <h3>{mb.name}</h3>
            <p>Price: {mb.price}</p>
          </div>
        );
      })}
    </Container>
  );
};

export default Motherboard;
