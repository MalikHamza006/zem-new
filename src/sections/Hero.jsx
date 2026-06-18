import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white overflow-hidden pt-20 relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        {/* Gradient Overlay with Navy Tones - Made more subtle for professional look */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/80 via-primary-navy/60 to-primary-navy/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content - Centered */}
      <div className="container-custom py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider border border-gold/30 px-4 py-1.5 rounded-full">
              Trusted Compliance Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
          >
            Your trusted{' '}
            <span className="text-gold">Compliance</span>
            <br />
            <span className="text-white/90">& finance partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            From FINTRAC & FCA regulatory compliance to restaurant bookkeeping and tax advisory
            ZEM Global Consultants Ltd delivers practical, expert-led solutions for businesses across the UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10 justify-center"
          >
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn-gold px-8 py-3.5 text-base font-semibold shadow-lg hover:shadow-gold/20 transition-all duration-300">
                Get Started
              </button>
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={-80}>
              <button className="btn-outline-gold px-8 py-3.5 text-base font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;