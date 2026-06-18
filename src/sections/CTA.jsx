import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const CTA = () => {
  return (
    <section className="bg-secondary-navy py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-navy max-w-4xl mx-auto p-12 md:p-16 rounded-large text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Strengthen Your Business?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get expert compliance and advisory support tailored to your needs.
          </p>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <button className="btn-gold px-12 py-4 text-lg">
              Book Consultation
            </button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;