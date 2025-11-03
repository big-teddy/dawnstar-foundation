import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/ScrollToTop';
import StructuredData from '@/components/StructuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dawnstarfoundation.org'),
  title: {
    default: '새벽별 파운데이션 | AI 기술로 모든 학생에게 맞춤형 교육 기회를',
    template: '%s | 새벽별 파운데이션',
  },
  description:
    '교육 불평등을 해소하고, 모든 학생에게 세계 최고 수준의 개인 맞춤형 학습 경험을 제공하는 비영리 교육 기술 단체입니다. AI 튜터 새벽별을 통해 한국 교육의 미래를 만들어갑니다.',
  keywords: [
    'AI 교육',
    'AI 튜터',
    '에듀테크',
    '비영리',
    '교육 평등',
    '개인 맞춤 학습',
    '한국 교육',
    '새벽별',
    'DawnStar',
    '교육 불평등',
    '온라인 학습',
    '맞춤형 교육',
    '학습 지원',
    '교육 기부',
    '교육 혁신',
  ],
  authors: [{ name: '새벽별 파운데이션', url: 'https://dawnstarfoundation.org' }],
  creator: '새벽별 파운데이션',
  publisher: '새벽별 파운데이션',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '새벽별 파운데이션 | AI 교육 혁신',
    description:
      '모든 학생이 최고의 교육을 받을 수 있는 세상을 만듭니다. AI 기술로 교육 불평등을 해소하고 개인 맞춤형 학습을 제공합니다.',
    url: 'https://dawnstarfoundation.org',
    siteName: '새벽별 파운데이션',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '새벽별 파운데이션 - AI 교육 혁신',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '새벽별 파운데이션 | AI 교육 혁신',
    description: 'AI 기술로 교육 평등을 실현합니다',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dawnstarfoundation.org',
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body className={notoSansKR.className}>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
