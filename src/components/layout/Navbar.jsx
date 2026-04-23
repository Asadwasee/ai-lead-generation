import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold font-poppins text-blue-700 transition-opacity hover:opacity-80">
          Flux<span className="text-purple-600">AI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
          <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Choose Us</a>
          <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-green-500/30 transition-colors"
          >
            Book Free Consultation
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 focus:outline-none z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8 px-6">
              <a href="#services" className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#why-choose-us" className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#portfolio" className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#testimonials" className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-green-500/30 transition-colors w-full max-w-xs mt-2" onClick={() => setMobileMenuOpen(false)}>
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
