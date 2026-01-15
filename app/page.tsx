import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import HeroSection from '@/components/sections/HeroSection';
import HowYouCanHelpSection from '@/components/sections/HowYouCanHelpSection';
import MissionInActionSection from '@/components/sections/MissionInActionSection';
import ScrollDepthZone from '@/components/sections/ScrollDepthZone';
import SimpleCTASection from '@/components/sections/SimpleCTASection';
import WhyWeExistSection from '@/components/sections/WhyWeExistSection';

export default function Home() {
  return (
    <>
      {/* Hero Section - Dark night sky with stars and shooting stars */}
      <HeroSection />

      {/* Transition Zone - Night to Aurora */}
      <ScrollDepthZone />

      {/* Post-transition sections - aurora background */}
      <WhyWeExistSection />
      <MissionInActionSection />
      <FeaturedProjectSection />
      <HowYouCanHelpSection />
      <SimpleCTASection />
    </>
  );
}
