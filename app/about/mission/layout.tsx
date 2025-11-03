import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리의 미션',
  description:
    '새벽별 파운데이션은 교육이 모든 사람의 권리이며, 학생 개개인의 속도와 방식을 존중하는 맞춤형 교육을 추구합니다. AI 기술로 교육 평등을 실현합니다.',
  keywords: ['교육 미션', '교육 철학', '교육 평등', 'AI 교육', '비영리 교육'],
  openGraph: {
    title: '우리의 미션 | 새벽별 파운데이션',
    description:
      '교육이 모든 사람의 권리이며, 학생 개개인의 속도와 방식을 존중하는 맞춤형 교육을 추구합니다.',
    url: 'https://dawnstar.org/about/mission',
  },
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
