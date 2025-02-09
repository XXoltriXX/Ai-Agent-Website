import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ strategySessionLink }) {
  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-textLight">AI Agents Agency</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-highlight">Home</Link>
          <Link to="/services" className="hover:text-highlight">Services</Link>
          <Link to="/case-studies" className="hover:text-highlight">Case Studies</Link>
          <Link to="/about-us" className="hover:text-highlight">About Us</Link>
          <Link to="/contact" className="hover:text-highlight">Contact</Link>
          <a href={strategySessionLink} className="bg-highlight text-background font-bold py-2 px-4 rounded-md hover:bg-neon-cyan-600 transition-colors duration-300">
            Book a Free AI Consultation
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Icon (Hamburger) - You can add this later */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
