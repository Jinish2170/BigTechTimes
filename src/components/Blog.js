import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar, faUser, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// Import all images from assets directory
const importAllImages = () => {
  const context = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);
  return context.keys().reduce((images, path) => {
    const key = path.replace('./', '');
    images[key] = context(path);
    return images;
  }, {});
};

function Blog() {
  const [images, setImages] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load images on component mount
  useEffect(() => {
    const loadedImages = importAllImages();
    setImages(loadedImages);
  }, []);

  // Get image URL with fallback
  const getImageUrl = (imageName) => {
    const colors = ['4F46E5', '7C3AED', 'EC4899', 'EF4444', '8B5CF6', '10B981'];
    
    try {
      return images[imageName] || `https://via.placeholder.com/800x400/${colors[Math.floor(Math.random() * colors.length)]}/FFFFFF?text=${imageName.replace('.jpg', '')}`;
    } catch {
      return `https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Blog+Post`;
    }
  };

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
      image: 'ai-dev.jpg',
      tags: ["AI", "Machine Learning", "Programming"]
    },
    {
      id: 2,
      title: "A Comprehensive Guide to Implementing Machine Learning Models",
      excerpt: "Explore a step-by-step approach to building and deploying machine learning models effectively.",
      category: "AI & ML",
      author: "Jinish Kathiriya",
      date: "2024-02-10",
      readTime: "10 min",
      likes: 200,
      image: 'ml_implementation.jpg',
      tags: ["Machine Learning", "Model Deployment", "Data Science"]
    },
    {
      id: 3,
      title: "Mastering Artificial Intelligence: Essential Tutorials and Resources",
      excerpt: "Discover top tutorials and resources to enhance your AI skills and knowledge.",
      category: "AI & ML",
      author: "Jinish Kathiriya",
      date: "2024-03-05",
      readTime: "12 min",
      likes: 180,
      image: 'logo169.jpg',
      tags: ["Artificial Intelligence", "Learning Resources", "Tutorials"]
    },
    {
      id: 4,
      title: "Python for AI: A Beginner's Guide",
      excerpt: "Learn how to leverage Python programming for artificial intelligence applications.",
      category: "Programming",
      author: "Jinish Kathiriya",
      date: "2024-04-20",
      readTime: "9 min",
      likes: 220,
      image: 'python_ai.jpg',
      tags: ["Python", "Artificial Intelligence", "Programming"]
    },
    {
      id: 5,
      title: "Deploying Machine Learning Models: Best Practices",
      excerpt: "Understand the best practices for deploying machine learning models in production environments.",
      category: "AI & ML",
      author: "Jinish Kathiriya",
      date: "2024-05-15",
      readTime: "11 min",
      likes: 190,
      image: 'ml_deployment.jpg',
      tags: ["Machine Learning", "Deployment", "Best Practices"]
    },
    {
      id: 6,
      title: "AI Engineering: Bridging the Gap Between Theory and Practice",
      excerpt: "Explore how AI engineering integrates theoretical concepts with practical applications.",
      category: "AI & ML",
      author: "Jinish Kathiriya",
      date: "2024-06-10",
      readTime: "10 min",
      likes: 210,
      image: 'ai_engineering.jpg',
      tags: ["AI Engineering", "Practical Applications", "Theory"]
    }
    
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

      {/* Updated Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="flex flex-col bg-deep-space-blue/30 rounded-xl overflow-hidden border border-neon-turquoise/10 hover:border-neon-turquoise/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full pt-[56.25%]">
                  <img 
                    src={getImageUrl(post.image)}
                    alt={post.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${post.image}`);
                      e.target.src = `https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=${post.title.replace(' ', '+')}`;
                    }}
                  />
                  <div className="absolute top-0 right-0 bg-deep-space-blue/80 px-3 py-1 m-2 rounded-full">
                    <span className="text-neon-turquoise text-sm">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="mr-2" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
                      {post.likes}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-neon-turquoise transition-colors truncate">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-neon-turquoise/10 flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <span><FontAwesomeIcon icon={faCalendar} className="mr-2" />{post.date}</span>
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
