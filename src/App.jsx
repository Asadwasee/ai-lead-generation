import React from 'react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Supercharge Your Leads <br /> with <span className="text-gradient">AI Power</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          Transform your conversion rates with our cutting-edge AI lead generation system. Find, engage, and convert high-quality clients effortlessly.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary flex items-center gap-2">
            Start Free Trial
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="px-6 py-3 rounded-full font-semibold border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white">
            Watch Demo
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;