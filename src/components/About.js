import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20 opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/assets/circuit-pattern.svg')] opacity-5"></div>
        <motion.div 
          className="text-center z-10 px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
            Empowering Tech Innovation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Founded in 2024 by <span className="text-neon-turquoise">Jinish Kathiriya</span>, BigTechTimes is building the future of tech community collaboration.
          </p>
        </motion.div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-deep-space-blue/30 backdrop-blur-sm border border-neon-turquoise/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold text-neon-turquoise mb-2"
                  whileInView={{ scale: [0.9, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                content: "To democratize tech education and foster a community where innovation thrives through collaboration, learning, and shared knowledge."
              },
              {
                title: "Our Vision",
                content: "To become the world's most impactful tech community, where every member has the opportunity to learn, grow, and shape the future of technology."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm border border-neon-turquoise/10 hover:border-neon-turquoise/30 transition-all duration-300"
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">{item.title}</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">Meet Our Founder</h2>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-deep-space-blue/40 to-deep-space-blue/20 backdrop-blur-sm rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <Timeline />
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20"></div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Connect with fellow tech enthusiasts, share your knowledge, and be part of something bigger.
          </p>
          <motion.a 
            href="/community" 
            className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join BigTechTimes Today</span>
            <span className="ml-2">→</span>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
