import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Threat Intel', id: 'threat-intel' },
    { name: 'Virtual Tour', id: 'virtual-tour' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-slate-900/90 backdrop-blur-sm shadow-lg border-b border-slate-700">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center text-2xl font-bold cursor-pointer" onClick={() => navigate('home')}>
          {/* <Shield className="w-6 h-6 mr-2 text-green-500" /> */}
          <img src="images/secureN-logo.png" alt="secureN logo" className="w-8 h-8 mr-2" />
          <span className="text-slate-50 w-8 h-10 mr-2">secure<span className="text-blue-500">N</span></span>
        </div>

        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`text-slate-300 transition duration-300 cursor-pointer hover:text-green-500 ${
                currentPage === item.id ? 'text-green-500 font-bold border-b-2 border-green-500' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button className="text-slate-300 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => {
                navigate(item.id);
                setIsMenuOpen(false);
              }}
              className={`block p-3 text-slate-300 transition duration-300 border-l-4 border-transparent cursor-pointer ${
                currentPage === item.id
                  ? 'border-green-500 bg-slate-800 font-semibold text-green-500'
                  : 'hover:border-green-500 hover:bg-slate-800'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
