import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-auto pt-20 pb-10 border-t border-white/10 bg-primary/50 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              Flux<span className="text-gradient">AI</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent, automated lead generation tools designed to convert at massive scale and speed.
            </p>
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan hover:bg-white/10 transition-all duration-300">
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li><a href="#" className="nav-link text-sm">Features</a></li>
              <li><a href="#" className="nav-link text-sm">Integrations</a></li>
              <li><a href="#" className="nav-link text-sm">Pricing</a></li>
              <li><a href="#" className="nav-link text-sm">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li><a href="#" className="nav-link text-sm">Documentation</a></li>
              <li><a href="#" className="nav-link text-sm">Help Center</a></li>
              <li><a href="#" className="nav-link text-sm">Community</a></li>
              <li><a href="#" className="nav-link text-sm">API Reference</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest AI lead generation tips.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-purple transition-colors"
                required
              />
              <button type="submit" className="btn-primary w-full text-sm">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FluxAI Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
