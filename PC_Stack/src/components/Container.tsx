import React from 'react';
import './Container.css';

interface ContainerProps {
  title: string;
  children: React.ReactNode;
  iconName?: string;
}

const Container: React.FC<ContainerProps> = ({ title, children, iconName }) => {
  return (
    <div className="component-section">
      <h2>
        {iconName && <ion-icon name={iconName}></ion-icon>}
        {title}
      </h2>
      <div className="component-content">
        {children}
      </div>
    </div>
  );
};

export default Container;
