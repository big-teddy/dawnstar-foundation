import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리의 이야기',
  description:
    '새벽별 파운데이션이 교육 불평등 해소를 위해 시작된 이야기. AI 기술로 모든 학생에게 평등한 교육 기회를 제공하기 위한 우리의 여정을 소개합니다.',
  keywords: [
    '새벽별 파운데이션 설립',
    '교육 불평등',
    '비영리 교육 단체',
    'AI 교육 혁신',
    '에듀테크 스토리',
  ],
  openGraph: {
    title: '우리의 이야기 | 새벽별 파운데이션',
    description:
      '교육 불평등을 해소하고 모든 학생에게 AI 기반 맞춤형 학습을 제공하기 위한 새벽별 파운데이션의 시작 이야기.',
    url: 'https://dawnstarfoundation.org/about/story',
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
