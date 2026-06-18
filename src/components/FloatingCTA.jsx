import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gold text-primary-text p-4 rounded-full shadow-gold hover:shadow-gold-hover transition-all duration-300"
              aria-label="Contact options"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <FaWhatsapp className="text-2xl" />
              )}
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute bottom-16 right-0 flex flex-col gap-3"
                >
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-primary-text p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <FaEnvelope className="text-xl" />
                    </motion.div>
                  </ScrollLink>

                  <a
                    href="tel:+18005550199"
                    className="bg-white text-primary-text p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaPhone className="text-xl" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;