import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function CaseStudiesPage({ strategySessionLink }) {
  const caseStudies = [
    {
      title: 'Increased Lead Generation by 300%',
      description: 'Using our AI agents, a marketing agency increased their lead generation by 300% in just three months.',
      metrics: '300% Lead Increase',
      testimonial: '“The AI agents have revolutionized our lead generation process. We’re seeing unprecedented growth!” - Marketing Agency CEO',
    },
    {
      title: 'Improved Customer Response Time by 90%',
      description: 'An e-commerce business reduced their customer response time by 90% using our AI chatbot solutions.',
      metrics: '90% Response Time Reduction',
      testimonial: '“Our customer support is now lightning fast and incredibly efficient, thanks to AI agents.” - E-commerce Business Owner',
    },
    {
      title: 'Boosted Organic Traffic by 150%',
      description: 'A SaaS company increased their organic traffic by 150% using our AI-enhanced SEO strategies.',
      metrics: '150% Traffic Growth',
      testimonial: '“AI-driven SEO has significantly improved our online visibility and brought in more qualified traffic.” - SaaS Company Marketing Lead',
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
        Proven AI Success Stories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md bg-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-textLight">{study.title}</h3>
            <p className="text-gray-400 mb-4">{study.description}</p>
            <div className="mb-4">
              <strong className="text-highlight">Key Metrics:</strong> {study.metrics}
            </div>
            <blockquote className="text-gray-400 italic">
              "{study.testimonial}"
            </blockquote>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-textLight">See How AI Can Transform Your Business</h2>
        <Button href={strategySessionLink}>Start Automating Your Business with AI</Button>
      </motion.div>
    </motion.div>
  );
}

export default CaseStudiesPage;
