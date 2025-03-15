import React, { Suspense } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

function App() {
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <Router>
      <div className="App bg-deep-space-blue text-white min-h-screen flex flex-col">
        <Header />
        <Suspense fallback={
          <div className="flex-grow flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neon-turquoise text-xl"
            >
              Loading...
            </motion.div>
          </div>
        }>
          <main className="flex-grow pt-20">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <motion.div {...pageTransition}>
                    <HomePage />
                  </motion.div>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/community" element={<Community />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
        </Suspense>
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
        ease: "easeInOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      id="value-proposition"
      className="py-24 md:py-32 text-center relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-neon-turquoise/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6 text-neon-turquoise">
          Why Choose BigTechTimes?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          At BigTechTimes, we believe that innovation is born from connection. Our community is designed to bridge the gap between ambitious tech talent and industry leaders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20"
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Learn</h3>
            <p className="text-gray-400">Access expert tutorials, in-depth articles, and interactive workshops on AI, cybersecurity, web development, and more.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={500} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Resources</p>
          </motion.div>
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20"
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <FontAwesomeIcon icon={faUsers} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400">Build lasting relationships with peers, mentors, and companies seeking fresh ideas. Network with industry leaders and find your next opportunity.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={10000} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Members</p>
          </motion.div>
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20"
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <FontAwesomeIcon icon={faCodeBranch} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
            <p className="text-gray-400">Participate in real-world projects and hackathons that challenge and inspire. Work alongside talented individuals and build your portfolio.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={50} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Projects</p>
          </motion.div>
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20"
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <FontAwesomeIcon icon={faRocket} className="text-neon-turquoise text-4xl mb-4" />
            <h3 className="text-2xl font-bold mb-4">Advance</h3>
            <p className="text-gray-400">Discover career opportunities, mentorship programs, and cutting-edge insights to fuel your professional growth. Take your career to the next level.</p>
            <p className="text-neon-turquoise text-2xl font-bold mt-2"><CountUp end={200} duration={5} suffix="+" /></p>
            <p className="text-sm text-gray-400">Opportunities</p>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link 
            to="/community" 
            className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-neon-turquoise/50"
          >
            <span>Ready to shape the future?</span>
            <span className="text-neon-turquoise">Join us now!</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

function FeaturedSections() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { 
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.section
      id="featured-sections"
      className="py-24 md:py-32 text-center relative bg-deep-space-blue/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-turquoise/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-12 text-neon-turquoise">
          Explore BigTechTimes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faBookOpen} className="text-neon-turquoise text-5xl mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Learning Hub</h3>
            <p className="text-gray-300 flex-grow mb-6">Dive into our extensive library of resources, including tutorials, articles, and courses on the latest tech topics.</p>
            <Link 
              to="/learning" 
              className="text-neon-turquoise hover:text-white mt-auto inline-flex items-center group"
            >
              <span>View Resources</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faComments} className="text-neon-turquoise text-5xl mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Community</h3>
            <p className="text-gray-300 flex-grow mb-6">Connect with fellow tech enthusiasts and experts, share your knowledge, and collaborate on exciting projects.</p>
            <Link 
              to="/community" 
              className="text-neon-turquoise hover:text-white mt-auto inline-flex items-center group"
            >
              <span>See Member Stories</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-neon-turquoise/10 shadow-lg hover:shadow-neon-turquoise/20 flex flex-col"
            variants={cardVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="text-neon-turquoise text-5xl mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Events</h3>
            <p className="text-gray-300 flex-grow mb-6">Join our live webinars, hackathons, and meetups to connect with the community and learn from industry leaders.</p>
            <Link 
              to="/community" 
              className="text-neon-turquoise hover:text-white mt-auto inline-flex items-center group"
            >
              <span>View Events</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default App;
