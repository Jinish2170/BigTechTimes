import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Learning from './components/Learning';
import Community from './components/Community';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faCodeBranch, faRocket, faBookOpen, faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function App() {
  return (
    <Router>
      <div className="App bg-deep-space-blue text-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <FeaturedSections />
    </>
  );
}

function ValueProposition() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="value-proposition"
      className="py-20 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-montserrat mb-12 text-neon-turquoise">Why Choose BigTechTimes?</h2>
        <p className="text-lg mb-8">At BigTechTimes, we believe that innovation is born from connection. Our community is designed to bridge the gap between ambitious tech talent and industry leaders. Here’s what we offer:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Learn</h3>
            <p className="text-gray-400">Access expert tutorials, in-depth articles, and interactive workshops on AI, cybersecurity, web development, and more.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={500} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Resources</p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faUsers} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400">Build lasting relationships with peers, mentors, and companies seeking fresh ideas. Network with industry leaders and find your next opportunity.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={10000} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Members</p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faCodeBranch} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
            <p className="text-gray-400">Participate in real-world projects and hackathons that challenge and inspire. Work alongside talented individuals and build your portfolio.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={50} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Projects</p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faRocket} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Advance</h3>
            <p className="text-gray-400">Discover career opportunities, mentorship programs, and cutting-edge insights to fuel your professional growth. Take your career to the next level.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={200} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Opportunities</p>
          </motion.div>
        </div>
        <Link to="/community" className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-3 px-6 rounded transition-transform transform hover:translate-y-1 inline-block mt-8">Ready to shape the future? Join us now!</Link>
      </div>
    </motion.section>
  );
}

function FeaturedSections() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="featured-sections"
      className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-montserrat mb-12 text-neon-turquoise">Explore BigTechTimes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faBookOpen} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Learning Hub</h3>
            <p className="text-gray-400">Dive into our extensive library of resources, including tutorials, articles, and courses on the latest tech topics.</p>
            <Link to="/learning" className="text-neon-turquoise hover:text-white mt-4 inline-block">View Resources</Link>
          </motion.div>
          <motion.div
            className="p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faComments} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Community</h3>
            <p className="text-gray-400">Connect with fellow tech enthusiasts and experts, share your knowledge, and collaborate on exciting projects.</p>
            <Link to="/community" className="text-neon-turquoise hover:text-white mt-4 inline-block">See Member Stories</Link>
          </motion.div>
          <motion.div
            className="p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Events</h3>
            <p className="text-gray-400">Join our live webinars, hackathons, and meetups to connect with the community and learn from industry leaders.</p>
            <Link to="/community" className="text-neon-turquoise hover:text-white mt-4 inline-block">View Events</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default App;
