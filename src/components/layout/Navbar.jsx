import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-primary/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white transition-opacity hover:opacity-80">
          Flux<span className="text-gradient">AI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          <a href="#features" className="nav-link text-lg w-full text-center" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="nav-link text-lg w-full text-center" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="nav-link text-lg w-full text-center" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="nav-link text-lg w-full text-center" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <button className="btn-primary w-full max-w-xs mt-2" onClick={() => setMobileMenuOpen(false)}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
