import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '함께하기',
  description:
    '새벽별 파운데이션과 함께 교육 평등을 실현해주세요. 후원, 자원봉사, 파트너십 등 다양한 방법으로 참여하실 수 있습니다.',
  keywords: [
    '교육 기부',
    '교육 후원',
    '자원봉사',
    '파트너십',
    '교육 참여',
    '비영리 후원',
  ],
  openGraph: {
    title: '함께하기 | 새벽별 파운데이션',
    description:
      '후원, 자원봉사, 파트너십 등 다양한 방법으로 교육 평등 실현에 동참해주세요.',
    url: 'https://dawnstar.org/get-involved',
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
