import { Metadata } from 'next';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectSection';
import HeroSection from '@/components/sections/HeroSection';
import HowYouCanHelpSection from '@/components/sections/HowYouCanHelpSection';
import MissionInActionSection from '@/components/sections/MissionInActionSection';
import SimpleCTASection from '@/components/sections/SimpleCTASection';
import WhyWeExistSection from '@/components/sections/WhyWeExistSection';

export const metadata: Metadata = {
  title: '새벽별 파운데이션 | AI 교육으로 모든 학생에게 평등한 기회를',
  description:
    '교육 불평등을 해소하고 모든 학생에게 AI 기반 맞춤형 학습을 제공하는 비영리 교육 기술 단체입니다. 새벽별 AI 튜터로 한국 교육의 미래를 함께 만들어갑니다.',
  keywords: [
    'AI 교육',
    '교육 평등',
    '비영리 교육',
    'AI 튜터',
    '맞춤형 학습',
    '에듀테크',
    '교육 불평등 해소',
    '새벽별',
    '한국 교육 혁신',
  ],
  openGraph: {
    title: '새벽별 파운데이션 | AI 교육으로 모든 학생에게 평등한 기회를',
    description:
      '교육 불평등을 해소하고 모든 학생에게 AI 기반 맞춤형 학습을 제공하는 비영리 교육 기술 단체입니다.',
    url: 'https://dawnstarfoundation.org',
    type: 'website',
  },
};

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
