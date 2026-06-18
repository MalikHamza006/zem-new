import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Industries', to: 'industries' },
  { label: 'Insights', to: 'blog' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glassmorphism shadow-navbar-scroll'
            : 'bg-secondary-navy shadow-navbar'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-1xl font-bold text-white tracking-tight"
              >
                Zem Global<span className="text-gold"> Consultant</span>
              </motion.div>
            </ScrollLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white/80 font-medium text-sm hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
              >
                <button className="btn-gold text-sm px-6 py-2">
                  Book Consultation
                </button>
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white text-2xl p-2 hover:text-gold transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-secondary-navy z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <button
                  onClick={closeMenu}
                  className="self-end text-white text-3xl p-2 hover:text-gold transition-colors"
                >
                  ×
                </button>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.to}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={closeMenu}
                      className="text-white/80 text-lg font-medium hover:text-gold transition-colors cursor-pointer block py-2"
                    >
                      {item.label}
                    </ScrollLink>
                  ))}
                </div>
                <div className="mt-8">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
                  >
                    <button className="btn-gold w-full text-center">
                      Book Consultation
                    </button>
                  </ScrollLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;