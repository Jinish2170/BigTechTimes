import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        bounce: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex justify-center items-center text-center text-white">
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-space-blue to-black opacity-50"></div>
      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6 md:space-y-8">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight"
            variants={textVariants}
          >
            <span className="block">BigTechTimes</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
              <span className="text-neon-turquoise">Connecting</span>{" "}
              <span className="block md:inline">Tomorrow's Tech Talent</span>
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-gray-300"
            variants={textVariants}
          >
            Empowering tech professionals and students through cutting-edge learning, collaboration, and innovation.
          </motion.p>
        </motion.div>
        <motion.div className="space-x-4 mt-8 md:mt-12" variants={textVariants}>
          <a
            href="/community"
            className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-3 px-6 rounded transition-transform transform hover:translate-y-1 inline-block"
            variants={buttonVariants}
            whileHover="hover"
          >
            Join the Community
          </a >
          <a
            href="/learning"
            className="bg-transparent border border-neon-turquoise hover:bg-neon-turquoise hover:text-deep-space-blue text-neon-turquoise font-bold py-3 px-6 rounded transition-transform transform hover:translate-y-1 inline-block"
            variants={buttonVariants}
            whileHover="hover"
          >
            Explore Resources
          </a>
        </motion.div>
        <motion.p
          className="text-sm md:text-base lg:text-lg mt-8 md:mt-12 max-w-3xl mx-auto text-gray-400"
          variants={textVariants}
        >
          Discover a space where emerging talent meets industry expertise. Whether you're ready to learn, network, or collaborate on real-world projects, BigTechTimes is your launchpad to the future of technology.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;
