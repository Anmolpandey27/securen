import React from 'react';

const Footer = () => (
  <footer className="py-8 text-center bg-slate-950 border-t border-slate-800">
    <div className="container px-4 mx-auto">
      <p className="text-sm text-slate-500">
        &copy; {new Date().getFullYear()} <span className="text-slate-50 w-8 h-10 mr-2">secure<span className="text-blue-500">N.</span></span>All rights reserved. | Security Powered by Open Source.
      </p>
      <div className="mt-4 space-x-4 text-sm">
        <a href="#" className="text-slate-400 hover:text-blue-500">Privacy Policy</a>
        <span className="text-slate-500">|</span>
        <a href="#" className="text-slate-400 hover:text-blue-500">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
