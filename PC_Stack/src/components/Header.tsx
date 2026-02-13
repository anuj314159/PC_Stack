import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">PC_Stack</div>
      <nav>
        <ul>
          <li><a href="#cpus">CPUs</a></li>
          <li><a href="#gpus">GPUs</a></li>
          <li><a href="#ram">RAM</a></li>
          <li><a href="#storage">Storage</a></li>
          <li><a href="#motherboards">Motherboards</a></li>
          <li><a href="#brands">Brands</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
