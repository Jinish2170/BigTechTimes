import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Change the imports for social media icons
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// Change the imports for regular icons
import { faRocket, faUsers, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons';

function About() {
  const stats = [
    { number: '10K+', label: 'Community Members' },
    { number: '500+', label: 'Resources' },
    { number: '50+', label: 'Events Hosted' },
    { number: '200+', label: 'Success Stories' }
  ];

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-turquoise opacity-10"></div>
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Empowering Tech Innovation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Founded in 2024 by Jinish Kathiriya, BigTechTimes is building the future of tech community collaboration.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-neon-turquoise mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-neon-turquoise">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize tech education and foster a community where innovation thrives through collaboration, learning, and shared knowledge.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-neon-turquoise">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become the world's most impactful tech community, where every member has the opportunity to learn, grow, and shape the future of technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-neon-turquoise">Meet Our Founder</h2>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="/assets/team/jinish.jpg" 
                  alt="Jinish Kathiriya" 
                  className="rounded-lg w-full max-w-[300px] mx-auto"
                />
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/Jinish2170" className="text-gray-400 hover:text-neon-turquoise">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a href="https://linkedin.com/in/jinish-kathiriya" className="text-gray-400 hover:text-neon-turquoise">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="https://twitter.com/JinishKathiriya" className="text-gray-400 hover:text-neon-turquoise">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Jinish Kathiriya</h3>
                <p className="text-gray-300 mb-4">
                  Deeply passionate about AI, Machine Learning, and Cybersecurity, Jinish founded BigTechTimes to create a bridge between emerging tech talent and industry leaders.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-neon-turquoise">Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Technologies</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>JavaScript / Python / C++</li>
                        <li>TensorFlow / PyTorch</li>
                        <li>MySQL / MongoDB</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Focus Areas</h5>
                      <ul className="text-gray-400 space-y-1">
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning</li>
                        <li>Cybersecurity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-turquoise">Our Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-neon-turquoise">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with fellow tech enthusiasts, share your knowledge, and be part of something bigger.
          </p>
          <a 
            href="/community" 
            className="bg-white text-deep-space-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Join BigTechTimes Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
