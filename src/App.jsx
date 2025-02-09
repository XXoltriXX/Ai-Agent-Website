import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const strategySessionLink = "[INSERT STRATEGY SESSION LINK]";

  return (
    <div className="font-sans">
      <Navbar strategySessionLink={strategySessionLink} />
      <Routes>
        <Route path="/" element={<HomePage strategySessionLink={strategySessionLink} />} />
        <Route path="/services" element={<ServicesPage strategySessionLink={strategySessionLink} />} />
        <Route path="/case-studies" element={<CaseStudiesPage strategySessionLink={strategySessionLink} />} />
        <Route path="/about-us" element={<AboutUsPage strategySessionLink={strategySessionLink} />} />
        <Route path="/contact" element={<ContactPage strategySessionLink={strategySessionLink} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
