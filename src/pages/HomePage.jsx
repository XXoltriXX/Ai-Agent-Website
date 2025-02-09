import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function HomePage({ strategySessionLink }) {
  return (
    <motion.div
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-textLight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        AI Agents That Scale Your Business 24/7
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Automate, optimize, and grow with AI-driven business solutions.
      </motion.p>
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 100 }}
      >
        <Button href={strategySessionLink}>Book a Free AI Consultation</Button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <div>
          <h3 className="text-xl font-semibold mb-2 text-textLight">Lead Generation</h3>
          <p className="text-gray-400">AI Agents to capture and qualify more leads.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-textLight">Customer Service</h3>
          <p className="text-gray-400">24/7 AI Chatbots for instant support.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-textLight">SEO Automation</h3>
          <p className="text-gray-400">AI-powered SEO to improve your online visibility.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-textLight">Sales & Outreach</h3>
          <p className="text-gray-400">Automate sales processes and customer outreach.</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-textLight">Ready to Scale with AI?</h2>
        <Button href={strategySessionLink}>Book Your Free Consultation</Button>
      </motion.div>
    </motion.div>
  );
}

export default HomePage;
