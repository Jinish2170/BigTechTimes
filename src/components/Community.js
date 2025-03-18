import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faLightbulb, 
  faComments, faStar, faShareNodes, faLaptopCode 
} from '@fortawesome/free-solid-svg-icons';

function Community() {
  const communityFeatures = [
    {
      icon: faComments,
      title: "Tech Discussions",
      description: "Engage in meaningful discussions about latest technologies, coding challenges, and industry trends."
    },
    {
      icon: faLaptopCode,
      title: "Code Reviews",
      description: "Get your code reviewed by experienced developers and help others improve their code."
    },
    {
      icon: faShareNodes,
      title: "Knowledge Sharing",
      description: "Share your experiences, solutions, and learn from others' real-world problem-solving approaches."
    }
  ];

  const discussionTopics = [
    {
      category: "Problem Solving",
      topics: [
        "Algorithm Challenges",
        "System Design Discussions",
        "Performance Optimization",
        "Debug Together"
      ]
    },
    {
      category: "Tech Stack",
      topics: [
        "Frontend Development",
        "Backend Architecture",
        "DevOps & Cloud",
        "AI & Machine Learning"
      ]
    },
    {
      category: "Career Growth",
      topics: [
        "Code Review Culture",
        "Technical Leadership",
        "Best Practices",
        "Architecture Patterns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20 opacity-20"></div>
        <motion.div 
          className="container mx-auto px-4 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
              Join Our Tech Community
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Connect, collaborate, and grow with fellow tech enthusiasts in a supportive environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="#join-now" 
              className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Join the Community</span>
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Connect, Share & Grow Together
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-deep-space-blue/30 backdrop-blur-sm border border-neon-turquoise/10 hover:border-neon-turquoise/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className="text-neon-turquoise text-4xl mb-4" 
                />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Forums */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-turquoise">
            Active Discussion Forums
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {discussionTopics.map((section, index) => (
              <motion.div
                key={index}
                className="bg-deep-space-blue/30 backdrop-blur-sm border border-neon-turquoise/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-electric-blue">{section.category}</h3>
                <ul className="space-y-4">
                  {section.topics.map((topic, topicIndex) => (
                    <motion.li
                      key={topicIndex}
                      className="flex items-center space-x-3 text-gray-300 hover:text-neon-turquoise cursor-pointer transition-colors duration-200"
                      whileHover={{ x: 10 }}
                    >
                      <FontAwesomeIcon icon={faLightbulb} className="text-neon-turquoise/50" />
                      <span>{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neon-turquoise">
              How to Get Involved
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="p-6 rounded-xl bg-deep-space-blue/30 border border-neon-turquoise/10"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-4">Ask Questions</h3>
                <p className="text-gray-400">
                  Stuck on a problem? Share it with the community and get help from experienced developers.
                </p>
              </motion.div>
              <motion.div
                className="p-6 rounded-xl bg-deep-space-blue/30 border border-neon-turquoise/10"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-4">Share Solutions</h3>
                <p className="text-gray-400">
                  Found a clever solution? Share your knowledge and help others learn from your experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join-now" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20"></div>
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join our community today and take your tech journey to the next level.
          </p>
          <motion.button 
            className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up Now
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Community;
