import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import ImpactSection from '@/components/sections/ImpactSection';
import MissionSection from '@/components/sections/MissionSection';
import NewsSection from '@/components/sections/NewsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ProductSection from '@/components/sections/ProductSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProductSection />
      <ImpactSection />
      <PartnersSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
