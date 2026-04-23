import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full mt-auto pt-20 pb-10 border-t border-gray-200 bg-white relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold font-poppins text-blue-700 mb-6">
              Flux<span className="text-purple-600">AI</span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent, automated lead generation tools designed to convert at massive scale and speed.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                <motion.a 
                  whileHover={{ y: -3 }}
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-300"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Quick Links</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Services</a></li>
              <li><a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Contact Us</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li className="text-gray-600 text-sm">contact@fluxai.com</li>
              <li className="text-gray-600 text-sm">+1 (555) 123-4567</li>
              <li className="text-gray-600 text-sm">123 AI Boulevard<br/>Tech District, CA 94103</li>
            </ul>
          </div>

          {/* Final CTA / Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold font-poppins mb-6">Ready to Grow?</h3>
            <p className="text-gray-600 text-sm mb-4">Start generating high-quality AI leads today.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md shadow-green-500/20 transition-colors w-full"
            >
              Get Free Strategy Call
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
