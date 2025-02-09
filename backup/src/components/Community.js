import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarker, faClock, faUsers, faCode, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'AI & Machine Learning Hackathon 2024',
    date: 'March 15-16, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Online & San Francisco, CA',
    description: 'Join us for a 48-hour hackathon focused on building innovative AI/ML solutions. Cash prizes, mentorship, and networking opportunities available!',
    image: '/assets/events/ai-hackathon.jpg',
    registrationLink: '#'
  },
  {
    id: 2,
    title: 'Cybersecurity Workshop Series',
    date: 'April 5-7, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Online',
    description: 'Three-day intensive workshop covering advanced cybersecurity techniques, threat detection, and prevention strategies.',
    image: '/assets/events/cyber-workshop.jpg',
    registrationLink: '#'
  },
  {
    id: 3,
    title: 'Web3 Development Conference',
    date: 'May 20, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'New York, NY',
    description: 'Explore the future of web development with industry experts. Topics include blockchain, DApps, and smart contracts.',
    image: '/assets/events/web3-conf.jpg',
    registrationLink: '#'
  }
];

const projectCategories = [
  { name: 'All Projects', icon: faCode },
  { name: 'AI/ML', icon: faRocket },
  { name: 'Web Development', icon: faCode },
  { name: 'Cybersecurity', icon: faShieldAlt }
];

const activeProjects = [
  {
    id: 1,
    title: 'AI-Powered Code Assistant',
    category: 'AI/ML',
    members: 5,
    techStack: ['Python', 'TensorFlow', 'React'],
    description: 'Building an intelligent code assistant that helps developers write better code through AI-powered suggestions.',
    progress: 65,
    openRoles: ['ML Engineer', 'Frontend Developer']
  },
  // ... more projects
];

function Community() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-turquoise opacity-10"></div>
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Tech Community</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Connect with fellow tech enthusiasts, collaborate on projects, and grow together.
          </p>
          <motion.button
            className="mt-8 bg-neon-turquoise text-deep-space-blue px-8 py-3 rounded-lg font-bold hover:bg-electric-blue hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Member
          </motion.button>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neon-turquoise">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <motion.div
                key={event.id}
                className="bg-gray-800 rounded-lg overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <motion.button
                    className="w-full bg-electric-blue text-white py-2 rounded-lg hover:bg-neon-turquoise transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neon-turquoise">Active Projects</h2>
          <div className="flex justify-center mb-8">
            {projectCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-4 py-2 rounded-lg mr-4 transition-colors duration-300 ${
                  selectedCategory === category.name 
                    ? 'bg-neon-turquoise text-deep-space-blue' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <FontAwesomeIcon icon={category.icon} className="mr-2" />
                {category.name}
              </button>
            ))}
          </div>
          {/* Project cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be mapped here */}
          </div>
        </div>
      </section>

      {/* Discussion Forums */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-neon-turquoise">Join the Discussion</h2>
          {/* Forum categories and recent discussions */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-neon-turquoise">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Collaborating?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of tech enthusiasts and start building amazing projects together.
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-deep-space-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Join BigTechTimes Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Community;
