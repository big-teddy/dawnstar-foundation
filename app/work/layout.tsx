import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리의 활동',
  description:
    '새벽별 파운데이션의 다양한 교육 프로젝트와 AI 튜터 샛별을 통해 학생, 교사, 학부모 모두를 지원합니다.',
  keywords: [
    '교육 활동',
    'AI 튜터',
    '교육 프로젝트',
    '학습 지원',
    '교사 지원',
    '학부모 지원',
  ],
  openGraph: {
    title: '우리의 활동 | 새벽별 파운데이션',
    description:
      'AI 튜터 샛별과 다양한 교육 프로젝트로 학생, 교사, 학부모 모두를 지원합니다.',
    url: 'https://dawnstar.org/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
