import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioSection from '../components/sections/PortfolioSection'; 

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <PortfolioSection />
    </main>
  );
}