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

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#home':
        return (
          <Container title="Welcome to PC_Stack!" iconName="home-outline">
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
      case '#motherboards':
        return <Motherboard />;
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
          <Container title="Welcome to PC_Stack!" iconName="home-outline">
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
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

