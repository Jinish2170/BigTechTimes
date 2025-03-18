import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar, faUser, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog data - replace with your API call or data source
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with AI Development",
      excerpt: "Learn the fundamentals of AI development and how to implement machine learning models.",
      category: "AI & ML",
      author: "Jinish Kathiriya",
      date: "2024-01-15",
      readTime: "8 min",
      likes: 156,
      image: "/assets/blog/ai-dev.jpg",
      tags: ["AI", "Machine Learning", "Programming"]
    },
    // Add more blog posts here
  ];

  const categories = ["All", "AI & ML", "Web Dev", "DevOps", "Cybersecurity"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20 opacity-20"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
              Tech Insights & Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the latest in technology, development tips, and community stories.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-deep-space-blue/50 border border-neon-turquoise/20 rounded-lg py-3 px-6 pl-12 focus:outline-none focus:border-neon-turquoise text-white placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === category.toLowerCase() 
                    ? 'bg-neon-turquoise text-deep-space-blue border-neon-turquoise' 
                    : 'border-neon-turquoise/30 text-gray-300 hover:border-neon-turquoise'
                  }`}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-deep-space-blue/30 rounded-xl overflow-hidden border border-neon-turquoise/10 hover:border-neon-turquoise/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-neon-turquoise text-sm">{post.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-neon-turquoise transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span><FontAwesomeIcon icon={faCalendar} className="mr-2" />{post.date}</span>
                      <span><FontAwesomeIcon icon={faThumbsUp} className="mr-2" />{post.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
