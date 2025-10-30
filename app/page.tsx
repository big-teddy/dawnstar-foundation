import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import ImpactSection from '@/components/sections/ImpactSection';
import MissionSection from '@/components/sections/MissionSection';
import NewsSection from '@/components/sections/NewsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PricingSection from '@/components/sections/PricingSection';
import ProductSection from '@/components/sections/ProductSection';
import SupportSection from '@/components/sections/SupportSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProductSection />
      <PricingSection />
      <ImpactSection />
      <PartnersSection />
      <SupportSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
