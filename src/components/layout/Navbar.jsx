import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Routing ke liye import

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold font-poppins text-blue-700 mb-6"
        >
          Flux<span className="text-purple-600">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/services"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/why-us"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Why Choose Us
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/testimonials"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="bg-green-500 hover:bg-green-600 text-white px-7 py-2.5 rounded-full font-semibold shadow-md transition-all active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

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
                <Link
                  to="/services"
                  className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/why-us"
                  className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Choose Us
                </Link>
                <Link
                  to="/portfolio"
                  className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/testimonials"
                  className="text-gray-800 font-medium text-lg w-full text-center hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-green-500/30 transition-colors w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
