import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioSection from '../components/sections/PortfolioSection'; 
import LeadCaptureForm from '../components/sections/Form';
export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <PortfolioSection />
      <LeadCaptureForm /> 
    </main>
  );
}