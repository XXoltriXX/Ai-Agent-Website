import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

function ContactPage({ strategySessionLink }) {
  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-4">Contact Us</h2>
        <p className="text-lg text-gray-400">
          We'd love to hear from you! Let us know how we can help your business grow with AI.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div>
          <h3 className="text-xl font-bold text-textLight mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-400">Name</label>
              <input type="text" id="name" className="bg-background border border-gray-700 rounded-md py-2 px-4 w-full focus:outline-none focus:border-highlight" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-400">Email</label>
              <input type="email" id="email" className="bg-background border border-gray-700 rounded-md py-2 px-4 w-full focus:outline-none focus:border-highlight" />
            </div>
            <div>
              <label htmlFor="website" className="block mb-1 text-gray-400">Business Website (Optional)</label>
              <input type="url" id="website" className="bg-background border border-gray-700 rounded-md py-2 px-4 w-full focus:outline-none focus:border-highlight" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-400">Message</label>
              <textarea id="message" rows="4" className="bg-background border border-gray-700 rounded-md py-2 px-4 w-full focus:outline-none focus:border-highlight"></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold text-textLight mb-4">Direct Contact Info</h3>
          <p className="text-gray-400 mb-2">Email: <a href="mailto:info@example.com" className="text-highlight">info@example.com</a></p>
          <p className="text-gray-400 mb-2">Phone: <a href="tel:+15551234567" className="text-highlight">+1-555-123-4567</a></p>
          <p className="text-gray-400 mb-4">Address: 123 AI Innovation Street, Tech City, USA</p>

          <h3 className="text-xl font-bold text-textLight mb-4">AI Chatbot</h3>
          <p className="text-gray-400">
            Chat with our AI chatbot for instant answers to common questions. (Chatbot integration can be added here)
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-textLight">Book a Free Consultation Today</h2>
        <Button href={strategySessionLink}>Book a Free AI Consultation</Button>
      </motion.div>
    </motion.div>
  );
}

export default ContactPage;
