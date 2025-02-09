import React from 'react';

function Footer() {
  return (
    <footer className="bg-background border-t border-gray-700 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AI Agents Agency. All rights reserved.</p>
        <p>Powered by AI Innovation</p>
      </div>
    </footer>
  );
}

export default Footer;
