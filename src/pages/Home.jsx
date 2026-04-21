import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FadeInSection from '../components/common/FadeInSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
    </main>
  );
}
