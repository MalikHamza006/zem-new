import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-primary-navy text-white overflow-hidden pt-20">
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Your{' '}
            <span className="text-gold inline-block">Compliance</span>
            <br />
            & Advisory Partner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mt-6 text-white/80 max-w-xl"
          >
            Expert guidance for MSBs, FinTechs, and payment institutions. 360°
            regulatory solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-gold">Get Started</button>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={-80}>
              <button className="btn-outline-gold">Learn More</button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;