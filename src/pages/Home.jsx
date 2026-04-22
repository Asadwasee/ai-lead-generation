import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PortfolioSection from '../components/sections/PortfolioSection'; 

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <PortfolioSection /> {/* Ise yahan render karein */}
      {/* Jab Navbar aur Footer ban jayein toh wo bhi yahan add honge */}
    </main>
  );
}