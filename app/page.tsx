import GetInvolvedSection from '@/components/sections/GetInvolvedSection';
import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import MissionSection from '@/components/sections/MissionSection';
import OurCommitmentsSection from '@/components/sections/OurCommitmentsSection';
import OurStorySection from '@/components/sections/OurStorySection';
import PartnersSection from '@/components/sections/PartnersSection';
import VisionSection from '@/components/sections/VisionSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <ManifestoSection />
      <OurStorySection />
      <MissionSection />
      <WhatWeDoSection />
      <PartnersSection />
      <OurCommitmentsSection />
      <GetInvolvedSection />
    </>
  );
}
