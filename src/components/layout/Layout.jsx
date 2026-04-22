import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
