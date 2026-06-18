import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#06122e] text-white/80"
    >
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h5 className="text-white text-xl font-bold mb-4">
              Apex<span className="text-gold">Comply</span>
            </h5>
            <p className="text-sm leading-relaxed">
              Regulatory compliance and advisory for financial institutions, MSBs, and FinTechs.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><ScrollLink to="home" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">About</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">Services</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">Contact</ScrollLink></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Services</h5>
            <ul className="space-y-2">
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">AML Consulting</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">Licensing</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">MLRO</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} className="hover:text-gold transition-colors cursor-pointer">Audit</ScrollLink></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Connect</h5>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 hover:text-gold transition-colors"><FaLinkedin /> LinkedIn</a>
              <a href="#" className="flex items-center gap-3 hover:text-gold transition-colors"><FaTwitter /> Twitter</a>
              <a href="#" className="flex items-center gap-3 hover:text-gold transition-colors"><FaYoutube /> YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm">
          © {currentYear} ApexComply. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;