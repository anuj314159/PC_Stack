import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cpu from './components/Cpu';
import Gpu from './components/Gpu';
import Ram from './components/Ram';
import Storage from './components/Storage';
import Motherboard from './components/Motherboard';
import Container from './components/Container';
import Nvidia from './components/Nvidia';
import Amd from './components/Amd';
import Intel from './components/Intel';
import WesternDigital from './components/WesternDigital';
import Corsair from './components/Corsair';
import Psu from './components/Psu';
import Auth from './components/Auth';
import { authService } from './api/authService';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');
  const [isLoggedIn, setIsLoggedIn] = useState(authService.isAuthenticated());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    window.location.hash = '#home';
  };

  const renderContent = () => {
    switch (route) {
      case '#home':
        return (
          <Container title="Welcome to PC Stack!" iconName="home-outline">
            <div className="home-content">
              <h2>Your one-stop shop for PC components</h2>
              <p>Explore our wide range of products and build your dream PC today.</p>
            </div>
          </Container>
        )
      case '#cpus':
        return <Cpu />;
      case '#gpus':
        return <Gpu />;
      case '#ram':
        return <Ram />;
      case '#storage':
        return <Storage />;
      case '#psu':
        return <Psu />;
      case '#motherboards':
        return <Motherboard />;
      case '#auth':
        return <Auth onLoginSuccess={handleLoginSuccess} />;
      case '#brands':
        return (
          <Container title="Brands" iconName="bookmark-outline">
            <Nvidia />
            <Amd />
            <Intel />
            <WesternDigital />
            <Corsair />
          </Container>
        );
      default:
        return (
          <Container title="Welcome to PC Stack!" iconName="home-outline">
            <div className="home-content">
              <h2>Your one-stop shop for PC components</h2>
              <p>Explore our wide range of products and build your dream PC today.</p>
            </div>
          </Container>
        )
    }
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
