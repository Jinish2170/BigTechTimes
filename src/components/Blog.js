import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faClock, faUser, faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const articles = [
  {
    id: 1,
    title: 'Building AI-Powered Cybersecurity Systems',
    summary: 'Explore how artificial intelligence is revolutionizing cybersecurity with advanced threat detection and automated response systems.',
    content: 'As cyber threats become more sophisticated...',
    author: 'Jinish Kathiriya',
    date: 'February 15, 2024',
    readTime: '8 min read',
    category: 'AI & Cybersecurity',
    tags: ['AI', 'Machine Learning', 'Cybersecurity'],
    thumbnail: '/assets/blog/ai-security.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'The Future of Web3 Development',
    summary: 'Discover the latest trends in Web3 development and how blockchain technology is shaping the future of the internet.',
    content: 'Web3 represents the next evolution...',
    author: 'Jinish Kathiriya',
    date: 'February 10, 2024',
    readTime: '6 min read',
    category: 'Web Development',
    tags: ['Web3', 'Blockchain', 'DApps'],
    thumbnail: '/assets/blog/web3.jpg'
  },
  {
    id: 3,
    title: 'Machine Learning for Beginners',
    summary: 'A comprehensive guide to getting started with machine learning using Python and popular ML frameworks.',
    content: 'Machine learning might seem daunting...',
    author: 'Jinish Kathiriya',
    date: 'February 5, 2024',
    readTime: '10 min read',
    category: 'Machine Learning',
    tags: ['Python', 'ML', 'Data Science'],
    thumbnail: '/assets/blog/ml-guide.jpg'
  }
];

const categories = ['All', 'AI & Cybersecurity', 'Web Development', 'Machine Learning', 'Cloud Computing'];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Insights & Innovations</h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay ahead of the curve with our latest articles on AI, cybersecurity, web development, and more.
              </p>
              <div className="relative">
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-gray-800 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
            {featuredArticle && (
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={featuredArticle.thumbnail} 
                    alt={featuredArticle.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="bg-neon-turquoise text-deep-space-blue px-2 py-1 rounded text-xs font-bold mr-2">
                        Featured
                      </span>
                      <span className="mr-4">{featuredArticle.date}</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{featuredArticle.title}</h2>
                    <p className="text-gray-300 mb-4">{featuredArticle.summary}</p>
                    <button className="text-neon-turquoise hover:text-white transition-colors duration-300 flex items-center">
                      Read More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category 
                    ? 'bg-neon-turquoise text-deep-space-blue' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <motion.article
                key={article.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src={article.thumbnail} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {article.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-neon-turquoise hover:text-white transition-colors duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-neon-turquoise">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly tech insights and updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-deep-space-blue rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-deep-space-blue"
            />
            <button className="bg-deep-space-blue text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
