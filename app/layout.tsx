import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '새벽별 파운데이션 | AI 기술로 모든 학생에게 맞춤형 교육 기회를',
  description:
    '교육 불평등을 해소하고, 모든 학생에게 세계 최고 수준의 개인 맞춤형 학습 경험을 제공하는 비영리 교육 기술 단체입니다.',
  keywords: [
    'AI 교육',
    '에듀테크',
    '비영리',
    '교육 평등',
    '개인 맞춤 학습',
    '한국 교육',
    '새벽별',
    'DawnStar',
  ],
  authors: [{ name: '새벽별 파운데이션' }],
  openGraph: {
    title: '새벽별 파운데이션 | AI 교육 혁신',
    description: '모든 학생이 최고의 교육을 받을 수 있는 세상을 만듭니다',
    url: 'https://dawnstar.org',
    siteName: '새벽별 파운데이션',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '새벽별 파운데이션',
    description: 'AI 기술로 교육 평등을 실현합니다',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className={notoSansKR.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
