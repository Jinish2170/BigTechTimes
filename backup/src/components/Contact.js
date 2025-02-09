import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult({ success: true, message: 'Your message has been sent!' });
    }, 2000);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 text-center"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-montserrat mb-12 text-neon-turquoise">Get in Touch with BigTechTimes</h2>
        <p className="text-lg mb-8">Have questions, ideas, or partnership opportunities? We’d love to hear from you. Reach out to us using the contact form below or connect with us through our social media channels.</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-left mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Message</label>
            <textarea
              id="message"
              className="w-full bg-gray-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-neon-turquoise"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-3 px-6 rounded transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {submissionResult && (
          <div className={`mt-8 p-4 rounded-md ${submissionResult.success ? 'bg-green-700' : 'bg-red-700'}`}>
            {submissionResult.message}
          </div>
        )}

        <div className="mt-16">
          <p>We'd love to hear from you! Please use the contact form above to send us a message.</p>
          <p>You can also reach us via email at: <a href="mailto:contact@bigtechtimes.tech" className="text-neon-turquoise hover:text-white">contact@bigtechtimes.tech</a></p>
          {/* Add Google Maps integration here */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://discord.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Discord"><i className="fab fa-discord"></i></a>
            <a href="https://www.reddit.com/" className="hover:text-neon-turquoise transition-colors duration-200" aria-label="Reddit"><i className="fab fa-reddit"></i></a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
