import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function ServicesPage({ strategySessionLink }) {
  const services = [
    {
      title: 'AI-Powered Lead Generation',
      description: 'Generate high-quality leads using AI agents that identify and engage potential customers effectively.',
    },
    {
      title: 'AI Chatbots & Customer Support',
      description: 'Provide 24/7 customer support with AI chatbots that handle queries, resolve issues, and improve satisfaction.',
    },
    {
      title: 'AI-Enhanced SEO & Content Creation',
      description: 'Boost your online presence with AI-driven SEO strategies and content creation that ranks and engages.',
    },
    {
      title: 'AI Automation for Sales & Outreach',
      description: 'Automate your sales processes and outreach campaigns to increase efficiency and conversion rates.',
    },
    {
      title: 'AI-driven Data Analysis & Insights',
      description: 'Gain valuable insights from your data with AI analytics to make informed decisions and drive growth.',
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-textLight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our AI Solutions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md bg-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-textLight">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-textLight">Ready to Transform Your Business with AI?</h2>
        <Button href={strategySessionLink}>Book a Free AI Consultation</Button>
      </motion.div>
    </motion.div>
  );
}

export default ServicesPage;
