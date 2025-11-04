import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리의 선언',
  description:
    '새벽별 파운데이션의 10가지 교육 원칙. 교육은 모든 사람의 권리이며, 기술은 교사를 돕는 도구입니다. 우리가 믿는 교육의 미래를 확인하세요.',
  keywords: [
    '교육 선언',
    '교육 원칙',
    'AI 교육 철학',
    '교육 평등',
    '비영리 교육',
    '에듀테크 비전',
  ],
  openGraph: {
    title: '우리의 선언 | 새벽별 파운데이션',
    description:
      '교육은 모든 사람의 권리입니다. 새벽별 파운데이션이 믿는 10가지 교육 원칙을 확인하세요.',
    url: 'https://dawnstarfoundation.org/about/manifesto',
  },
};

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
