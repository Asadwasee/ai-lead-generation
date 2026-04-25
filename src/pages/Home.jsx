import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import LeadCaptureForm from '../components/sections/Form';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialsSection />
      <LeadCaptureForm />
    </main>
  );
}