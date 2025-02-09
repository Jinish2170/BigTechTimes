import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { 
    year: '2024', 
    month: 'January', 
    title: 'Vision & Concept', 
    event: 'BigTechTimes was born from a bold vision by Jinish Kathiriya to bridge the gap between emerging tech talent and industry leaders, recognizing the future of technology depends on collaboration and continuous learning.' 
  },
  { 
    year: '2024', 
    month: 'March', 
    title: 'Website Launch', 
    event: 'After months of dedicated research, design, and development, we proudly launched the BigTechTimes website, built using React, Tailwind CSS, and Framer Motion.' 
  },
  { 
    year: '2024', 
    month: 'June', 
    title: 'First Hackathon', 
    event: 'To kickstart our community engagement, we organized our very first hackathon, bringing together aspiring developers, tech enthusiasts, and industry experts for a day of creative problem-solving.' 
  },
  { 
    year: '2025', 
    month: 'September', 
    title: 'Strategic Partnerships', 
    event: 'BigTechTimes reached another milestone by forming strategic partnerships with leading tech companies and educational institutions, enriching our platform with high-quality learning resources.' 
  }
];

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.2
    }
  }
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

function Timeline() {
  return (
    <motion.div
      className="timeline relative"
      variants={timelineVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        <div className="absolute left-1/2 h-full border-l-2 border-gray-700"></div>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-16 last:mb-0"
            variants={timelineItemVariants}
          >
            <div className="flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-turquoise rounded-full"></div>
              <div className="w-1/2 pr-8 text-right">
                <div className="text-neon-turquoise font-bold">{item.month} {item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-400">{item.event}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Timeline;
