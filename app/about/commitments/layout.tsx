import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리의 약속',
  description:
    '새벽별 파운데이션의 7가지 약속. 접근성 우선 설계, 데이터 프라이버시 보호, 투명한 운영으로 모든 학생에게 신뢰받는 교육 플랫폼을 만듭니다.',
  keywords: [
    '교육 약속',
    '데이터 보호',
    '투명한 운영',
    '접근성',
    '교사 협력',
    '비영리 약속',
  ],
  openGraph: {
    title: '우리의 약속 | 새벽별 파운데이션',
    description:
      '접근성, 프라이버시, 투명성. 새벽별 파운데이션이 지키는 7가지 약속을 확인하세요.',
    url: 'https://dawnstarfoundation.org/about/commitments',
  },
};

export default function CommitmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
