import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ProductSection from '@/components/sections/ProductSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProductSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
