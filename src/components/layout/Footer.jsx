import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
// React Icons Imports
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa6';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight 
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full mt-auto pt-20 pb-10 border-t border-gray-200 bg-white relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-poppins text-blue-700 mb-6">
              Flux<span className="text-purple-600">AI</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent, automated lead generation tools designed to convert at massive scale and speed.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaTwitter size={18} />, label: 'Twitter' },
                { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn' },
                { icon: <FaGithub size={18} />, label: 'Github' }
              ].map((item) => (
                <motion.a
                  whileHover={{ y: -3 }}
                  key={item.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-4 list-none p-0 m-0">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Contact Us</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FiMail size={16} className="text-blue-600" />
                <span>contact@fluxai.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FiPhone size={16} className="text-blue-600" />
                <span>+923-123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <FiMapPin size={16} className="text-blue-600 mt-0.5" />
                <span>123 AI Boulevard<br />Tech District, CA 94103</span>
              </li>
            </ul>
          </div>

          {/* Final CTA / Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Ready to Grow?</h3>
            <p className="text-gray-600 text-sm mb-4">Start generating high-quality AI leads today.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md shadow-green-500/20 transition-colors w-full flex items-center justify-center gap-2"
            >
              <span>Get Free Strategy Call</span>
              <FiArrowRight size={18} />
            </motion.button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FluxAI Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;