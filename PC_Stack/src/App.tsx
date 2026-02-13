import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cpu from './components/Cpu';
import Gpu from './components/Gpu';
import Ram from './components/Ram';
import Storage from './components/Storage';
import Motherboard from './components/Motherboard';
import Nvidia from './components/Nvidia';
import Amd from './components/Amd';
import Intel from './components/Intel';
import WesternDigital from './components/WesternDigital';
import Corsair from './components/Corsair';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
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
          <>
            <Nvidia />
            <Amd />
            <Intel />
            <WesternDigital />
            <Corsair />
          </>
        );
      default:
        return (
          <>
            <section id="cpus"><Cpu /></section>
            <section id="gpus"><Gpu /></section>
            <section id="ram"><Ram /></section>
            <section id="storage"><Storage /></section>
            <section id="motherboards"><Motherboard /></section>
            <h2 id="brands">Brands</h2>
            <section id="nvidia"><Nvidia /></section>
            <section id="amd"><Amd /></section>
            <section id="intel"><Intel /></section>
            <section id="wd"><WesternDigital /></section>
            <section id="corsair"><Corsair /></section>
          </>
        );
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
