import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faStar, faClock, faCode, faShieldAlt, faRobot, faDatabase } from '@fortawesome/free-solid-svg-icons';

const resources = [
  {
    id: 1,
    title: 'Introduction to Machine Learning with Python',
    category: 'AI & ML',
    level: 'Beginner',
    duration: '2 hours',
    rating: 4.8,
    author: 'Jinish Kathiriya',
    thumbnail: '/assets/learning/ml-intro.jpg',
    tags: ['Python', 'Machine Learning', 'AI'],
    description: 'Learn the fundamentals of Machine Learning using Python, including data preprocessing, model training, and evaluation.'
  },
  {
    id: 2,
    title: 'Advanced Web Security Techniques',
    category: 'Cybersecurity',
    level: 'Advanced',
    duration: '3 hours',
    rating: 4.9,
    author: 'Jinish Kathiriya',
    thumbnail: '/assets/learning/cybersecurity.jpg',
    tags: ['Security', 'Web', 'Hacking Prevention'],
    description: 'Master advanced web security techniques to protect your applications from modern cyber threats.'
  },
  {
    id: 3,
    title: 'Full Stack Development with MERN',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '4 hours',
    rating: 4.7,
    author: 'Jinish Kathiriya',
    thumbnail: '/assets/learning/mern.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'Build full-stack applications using MongoDB, Express, React, and Node.js.'
  }
];

const categories = [
  { name: 'All', icon: faCode },
  { name: 'AI & ML', icon: faRobot },
  { name: 'Cybersecurity', icon: faShieldAlt },
  { name: 'Web Development', icon: faCode },
  { name: 'Database', icon: faDatabase }
];

function Learning() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || resource.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-turquoise opacity-10"></div>
        <motion.div 
          className="text-center z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Learning Hub</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Explore our comprehensive collection of tech tutorials, courses, and resources.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name 
                      ? 'bg-neon-turquoise text-deep-space-blue' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={category.icon} />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map(resource => (
              <motion.div
                key={resource.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neon-turquoise text-sm">{resource.category}</span>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                      <span className="text-gray-300">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" />
                      <span className="text-gray-400">{resource.duration}</span>
                    </div>
                    <button className="bg-electric-blue hover:bg-neon-turquoise text-white px-4 py-2 rounded-lg transition-colors">
                      Start Learning
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learning;
