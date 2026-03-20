import React, { useState, useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../ThemeContext';
//import 'ionicons/dist/ionicons/ionicons.css';
// import "ionicons/dist/css/ionicons.min.css";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }
}

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo"><a href="#home">PC_Stack</a></div>
      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <ion-icon name={menuOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>
      </div>
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#cpus" onClick={() => setMenuOpen(false)}>CPUs</a></li>
          <li><a href="#gpus" onClick={() => setMenuOpen(false)}>GPUs</a></li>
          <li><a href="#ram" onClick={() => setMenuOpen(false)}>RAM</a></li>
          <li><a href="#storage" onClick={() => setMenuOpen(false)}>Storage</a></li>
          <li><a href="#psu" onClick={() => setMenuOpen(false)}>Power Supplies</a></li>
          <li><a href="#motherboards" onClick={() => setMenuOpen(false)}>Motherboards</a></li>
          <li><a href="#brands" onClick={() => setMenuOpen(false)}>Brands</a></li>
          {isLoggedIn ? (
            <li><a href="#home" onClick={() => { onLogout(); setMenuOpen(false); }}>Logout</a></li>
          ) : (
            <li><a href="#auth" onClick={() => setMenuOpen(false)}>Login</a></li>
          )}
        </ul>
        
      </nav>
      <button className="theme-switcher" onClick={toggleTheme}>
          <ion-icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'}></ion-icon>
        </button>
    </header>
  );
};

export default Header;
