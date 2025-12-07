import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import ThreatIntel from './pages/ThreatIntel/ThreatIntel';
import VirtualTour from './pages/VirtualTour/VirtualTour';
import Contact from './pages/Contact/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (pageId) => { setCurrentPage(pageId); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <Services navigate={navigate} />;
      case 'threat-intel': return <ThreatIntel navigate={navigate} />;
      case 'virtual-tour': return <VirtualTour navigate={navigate} />;
      case 'contact': return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased text-slate-200 bg-slate-900">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
