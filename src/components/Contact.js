import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

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

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "contact@bigtechtimes.tech",
      link: "mailto:contact@bigtechtimes.tech"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: faLocationDot,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: faLinkedin, href: "https://linkedin.com/company/bigtechtimes" },
    { icon: faTwitter, href: "https://twitter.com/bigtechtimes" },
    { icon: faGithub, href: "https://github.com/bigtechtimes" },
    { icon: faDiscord, href: "https://discord.gg/bigtechtimes" }
  ];

  return (
    <div className="min-h-screen bg-deep-space-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-turquoise/20 opacity-20"></div>
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or ideas? We'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="p-6 rounded-xl bg-deep-space-blue/30 border border-neon-turquoise/10 hover:border-neon-turquoise/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <FontAwesomeIcon 
                  icon={info.icon} 
                  className="text-4xl text-neon-turquoise mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-deep-space-blue/30 border border-neon-turquoise/20 rounded-lg py-3 px-4 focus:outline-none focus:border-neon-turquoise transition-colors duration-300"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-deep-space-blue/30 border border-neon-turquoise/20 rounded-lg py-3 px-4 focus:outline-none focus:border-neon-turquoise transition-colors duration-300"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-deep-space-blue/30 border border-neon-turquoise/20 rounded-lg py-3 px-4 focus:outline-none focus:border-neon-turquoise transition-colors duration-300"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-deep-space-blue/30 border border-neon-turquoise/20 rounded-lg py-3 px-4 focus:outline-none focus:border-neon-turquoise transition-colors duration-300"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="bg-electric-blue hover:bg-neon-turquoise text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <FontAwesomeIcon icon={faPaperPlane} className={`ml-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </motion.button>
              </form>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-deep-space-blue/30 border border-neon-turquoise/10 rounded-xl p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-electric-blue to-neon-turquoise text-transparent bg-clip-text">
                Connect With Us
              </h2>
              <p className="text-gray-300 mb-8">
                Follow us on social media to stay updated with the latest tech trends, community events, and exciting opportunities.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-turquoise transition-colors duration-300"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Submission Feedback */}
      {submissionResult && (
        <motion.div 
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
            submissionResult.success ? 'bg-green-600' : 'bg-red-600'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          {submissionResult.message}
        </motion.div>
      )}
    </div>
  );
}

export default Contact;
