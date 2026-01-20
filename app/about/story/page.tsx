import { Metadata } from 'next';
import StoryContent from './StoryContent';

export const metadata: Metadata = {
  title: '우리의 이야기 | 새벽별 파운데이션',
  description: '새벽별 파운데이션의 시작과 여정, 그리고 우리가 꿈꾸는 교육의 미래를 소개합니다.',
  openGraph: {
    title: '우리의 이야기 | 새벽별 파운데이션',
    description: '새벽별 파운데이션의 시작과 여정, 그리고 우리가 꿈꾸는 교육의 미래를 소개합니다.',
    images: [
      {
        url: '/og-story.png',
        width: 1200,
        height: 630,
        alt: '새벽별 파운데이션 - 우리의 이야기',
      },
    ],
  },
};

export default function StoryPage() {
  return <StoryContent />;
}
