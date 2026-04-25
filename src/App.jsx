import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import Form from './components/sections/Form';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/portfolio" element={<PortfolioSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;