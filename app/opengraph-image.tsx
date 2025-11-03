import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '새벽별 파운데이션 - AI 교육 혁신';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              textAlign: 'center',
            }}
          >
            새벽별 파운데이션
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: '#e2e8f0',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            AI 기술로 모든 학생에게 맞춤형 교육 기회를
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
