import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FadeInSection from '../components/common/FadeInSection';

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen overflow-x-hidden">
      <Hero />
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
    </main>
  );
}
