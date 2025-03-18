import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-deep-space-blue/95 backdrop-blur-md text-white py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-lg border-b border-neon-turquoise/10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center group">
          <motion.div
            className="text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">Big</span>
            <span className="text-white">Tech</span>
            <span className="bg-gradient-to-r from-neon-turquoise to-electric-blue text-transparent bg-clip-text">Times</span>
          </motion.div>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none p-2 hover:bg-deep-space-blue/50 rounded-lg transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Community", "Blog", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="relative group"
            >
              <span className="text-white hover:text-neon-turquoise transition-colors duration-200">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-turquoise transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-deep-space-blue/95 backdrop-blur-md md:hidden border-b border-neon-turquoise/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col py-4">
              {["Home", "About", "Community", "Blog", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="px-4 py-2 hover:bg-neon-turquoise/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;
