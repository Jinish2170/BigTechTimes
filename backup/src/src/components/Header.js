import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-opacity-90 bg-deep-space-blue text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <Link to="/" className="flex items-center">
            <img src="assets/logo.png" alt="BigTechTimes Logo" className="h-10 mr-2" />
            <span className="font-bold text-xl">BigTechTimes</span>
          </Link>
        </div>
        <nav className={`hidden md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="hover:text-neon-turquoise transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:text-neon-turquoise transition-colors duration-200">About</Link>
          <Link to="/learning" className="hover:text-neon-turquoise transition-colors duration-200">Learning Hub</Link>
          <Link to="/community" className="hover:text-neon-turquoise transition-colors duration-200">Community</Link>
          <Link to="/blog" className="hover:text-neon-turquoise transition-colors duration-200">Blog</Link>
          <Link to="/contact" className="hover:text-neon-turquoise transition-colors duration-200">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
