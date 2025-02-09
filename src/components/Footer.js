import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-deep-space-blue text-white text-center py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-neon-turquoise transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:text-neon-turquoise transition-colors duration-200">About</Link>
          <Link to="/learning" className="hover:text-neon-turquoise transition-colors duration-200">Learning Hub</Link>
          <Link to="/community" className="hover:text-neon-turquoise transition-colors duration-200">Community</Link>
          <Link to="/blog" className="hover:text-neon-turquoise transition-colors duration-200">Blog</Link>
          <Link to="/contact" className="hover:text-neon-turquoise transition-colors duration-200">Contact</Link>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://discord.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Discord"><i className="fab fa-discord"></i></a>
          <a href="https://www.reddit.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Reddit"><i class name="fab fa-reddit"></i></a>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2">Stay updated with BigTechTimes—subscribe to our newsletter for the latest tech insights and community updates.</h4>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neon-turquoise mr-2" />
            <button className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-2 px-4 rounded transition-colors duration-200">Subscribe</button>
          </form>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy" className="hover:text-neon-turquoise transition-colors duration-200">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-neon-turquoise transition-colors duration-200">Terms of Service</Link>
        </div>
        <p className="mt-4">&copy; 2025 BigTechTimes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
