import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const socialLinks = [
    { icon: faLinkedin, url: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: faTwitter, url: "https://twitter.com/", label: "Twitter" },
    { icon: faDiscord, url: "https://discord.com/", label: "Discord" },
    { icon: faReddit, url: "https://www.reddit.com/", label: "Reddit" }
  ];

  return (
    <footer className="bg-gradient-to-b from-deep-space-blue to-black text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.div
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">Big</span>
                <span className="text-white">Tech</span>
                <span className="bg-gradient-to-r from-neon-turquoise to-electric-blue text-transparent bg-clip-text">Times</span>
              </motion.div>
            </Link>
            <p className="text-gray-400">Empowering tomorrow's tech leaders through community, learning, and innovation.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-turquoise">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Learning Hub", "Community", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-neon-turquoise transition-colors duration-200 w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold text-neon-turquoise">Stay Connected</h3>
            <p className="text-gray-400">Get the latest updates and insights from BigTechTimes.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-deep-space-blue/50 border border-neon-turquoise/20 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-turquoise text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-electric-blue hover:bg-neon-turquoise text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neon-turquoise/10">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map(({ icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-gray-400 hover:text-neon-turquoise transition-colors duration-200"
              >
                <FontAwesomeIcon icon={icon} className="text-xl" />
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
            <span>&copy; 2025 BigTechTimes. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link to="/privacy" className="hover:text-neon-turquoise transition-colors duration-200">Privacy</Link>
              <Link to="/terms" className="hover:text-neon-turquoise transition-colors duration-200">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
