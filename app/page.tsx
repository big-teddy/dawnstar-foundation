import DawnTransition from '@/components/sections/DawnTransition';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import HeroSection from '@/components/sections/HeroSection';
import HowYouCanHelpSection from '@/components/sections/HowYouCanHelpSection';
import MissionInActionSection from '@/components/sections/MissionInActionSection';
import SimpleCTASection from '@/components/sections/SimpleCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DawnTransition />
      <MissionInActionSection />
      <FeaturedProjectSection />
      <HowYouCanHelpSection />
      <SimpleCTASection />
    </>
  );
}
