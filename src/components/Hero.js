import React, { useRef, useEffect } from 'react';
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

  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const parallaxContainer = parallaxRef.current;
      if (!parallaxContainer) return;

      const wValue = parallaxContainer.offsetWidth;
      const hValue = parallaxContainer.offsetHeight;

      const x = (event.clientX - wValue / 2) / wValue;
      const y = (event.clientY - hValue / 2) / hValue;

      parallaxContainer.style.transform = `
        translateX(${x * 20}px)
        translateY(${y * 20}px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex justify-center items-center text-center text-white">
      <ParticleBackground />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-space-blue to-black opacity-50"></div>
      <motion.div
        className="container mx-auto px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={parallaxRef}
      >
        <motion.h1
          className="text-5xl font-bold font-montserrat mb-4"
          variants={textVariants}
        >
          BigTechTimes: <span className="text-neon-turquoise">Connecting</span> Tomorrow’s Tech Talent
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          variants={textVariants}
        >
          Empowering tech professionals and students through cutting-edge learning, collaboration, and innovation.
        </motion.p>
        <motion.div className="space-x-4" variants={textVariants}>
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
          className="text-md mt-8"
          variants={textVariants}
        >
          Discover a space where emerging talent meets industry expertise. Whether you're ready to learn, network, or collaborate on real-world projects, BigTechTimes is your launchpad to the future of technology.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;
