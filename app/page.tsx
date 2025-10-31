import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import HeroSection from '@/components/sections/HeroSection';
import HowYouCanHelpSection from '@/components/sections/HowYouCanHelpSection';
import MissionInActionSection from '@/components/sections/MissionInActionSection';
import SimpleCTASection from '@/components/sections/SimpleCTASection';
import WhyWeExistSection from '@/components/sections/WhyWeExistSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyWeExistSection />
      <MissionInActionSection />
      <FeaturedProjectSection />
      <HowYouCanHelpSection />
      <SimpleCTASection />
    </>
  );
}
