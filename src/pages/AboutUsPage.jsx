import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function AboutUsPage({ strategySessionLink }) {
  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-4">About Us</h2>
        <p className="text-lg text-gray-400">
          We are a team of experts passionate about leveraging AI to drive business growth and efficiency.
        </p>
      </motion.div>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-textLight mb-6">Our Team</h3>
        <p className="text-gray-400 mb-4">
          Our team comprises seasoned professionals in AI, SEO, automation, and lead generation. We bring together years of experience to deliver cutting-edge AI solutions tailored to your business needs.
        </p>
        <p className="text-gray-400">
          We are committed to staying at the forefront of AI innovation to provide our clients with the most effective and advanced strategies.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-textLight mb-6">Our Mission</h3>
        <p className="text-gray-400">
          Our mission is to help businesses of all sizes scale and thrive by implementing intelligent AI solutions. We aim to save you time, maximize your profits, and give you a competitive edge in the market.
        </p>
      </motion.section>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-textLight mb-6">Our Tech Stack</h3>
        <p className="text-gray-400">
          We utilize a robust tech stack including the latest advancements in AI, machine learning, and automation technologies. Our solutions are built to be scalable, reliable, and seamlessly integrated into your existing systems.
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-4">
          <li>Cutting-edge AI and Machine Learning Models</li>
          <li>Scalable Cloud Infrastructure</li>
          <li>Advanced Automation Platforms</li>
          <li>Secure Data Handling and Analytics Tools</li>
        </ul>
      </motion.section>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-textLight">Ready to Partner with Us?</h2>
        <Button href={strategySessionLink}>Work With Us</Button>
      </motion.div>
    </motion.div>
  );
}

export default AboutUsPage;
