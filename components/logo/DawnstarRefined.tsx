'use client';

import React from 'react';

/**
 * DAWNSTAR (새벽별) - REFINED LOGO COLLECTION
 *
 * 컨셉: 동이 트기 직전, 어둠 속에서 가장 밝게 빛나는 별
 * - 희망의 빛
 * - 새로운 시작
 * - 어둠을 밝히는 안내자
 */

interface DawnstarRefinedProps {
  variant?:
    | 'bloom-refined'      // Bloom 개선 버전
    | 'morning-star'       // 새벽별 그 자체
    | 'dawn-glow'          // 새벽의 빛남
    | 'horizon-light'      // 지평선의 빛
    | 'first-light'        // 첫 번째 빛
    | 'radiant';           // 빛나는
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function DawnstarRefined({
  variant = 'bloom-refined',
  size = 40,
  className = '',
  animated = false
}: DawnstarRefinedProps) {

  // BLOOM REFINED - 당신이 선택한 bloom을 더 세련되게
  // 새벽별처럼 부드럽게 빛나는 꽃잎
  if (variant === 'bloom-refined') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          {/* 새벽 하늘의 그라디언트 */}
          <radialGradient id="dawnGlow">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="50%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#C44569" />
          </radialGradient>

          {/* 각 꽃잎의 그라디언트 */}
          <linearGradient id="petal1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD166" />
            <stop offset="100%" stopColor="#EF476F" />
          </linearGradient>
          <linearGradient id="petal2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9770" />
            <stop offset="100%" stopColor="#FF6B9D" />
          </linearGradient>
          <linearGradient id="petal3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEC5BB" />
            <stop offset="100%" stopColor="#FFA69E" />
          </linearGradient>
          <linearGradient id="petal4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE5D9" />
            <stop offset="100%" stopColor="#FFC9B0" />
          </linearGradient>
          <linearGradient id="petal5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFCDB2" />
            <stop offset="100%" stopColor="#FFB4A2" />
          </linearGradient>
          <linearGradient id="petal6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE5D9" />
            <stop offset="100%" stopColor="#FFDAB9" />
          </linearGradient>
        </defs>

        {/* 빛나는 배경 (새벽의 후광) */}
        <circle cx="50" cy="50" r="45" fill="url(#dawnGlow)" opacity="0.15" />

        {/* 6개의 꽃잎 - 부드러운 타원형 */}
        <g className={animated ? 'animate-spin-slow' : ''} style={{ transformOrigin: '50px 50px' }}>
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal1)" opacity="0.95" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal2)" opacity="0.95" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal3)" opacity="0.95" transform="rotate(120 50 50)" />
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal4)" opacity="0.95" transform="rotate(180 50 50)" />
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal5)" opacity="0.95" transform="rotate(240 50 50)" />
          <ellipse cx="50" cy="22" rx="11" ry="22" fill="url(#petal6)" opacity="0.95" transform="rotate(300 50 50)" />
        </g>

        {/* 중심 - 별의 핵 */}
        <circle cx="50" cy="50" r="16" fill="#2A1A5E" opacity="0.8" />
        <circle cx="50" cy="50" r="12" fill="#FFE66D" />
        <circle cx="50" cy="50" r="6" fill="white" opacity="0.8" />
      </svg>
    );
  }

  // MORNING STAR - 새벽별 그 자체
  // 클래식한 별 + 새벽의 색감
  if (variant === 'morning-star') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="morningGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="50%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#845EC2" />
          </linearGradient>

          {/* 빛나는 효과 */}
          <radialGradient id="starGlow">
            <stop offset="0%" stopColor="#FFE66D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFE66D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 후광 */}
        <circle cx="50" cy="50" r="40" fill="url(#starGlow)" />

        {/* 메인 별 */}
        <path
          d="M50 12 L56 38 L83 38 L62 53 L68 79 L50 64 L32 79 L38 53 L17 38 L44 38 Z"
          fill="url(#morningGrad)"
        />

        {/* 하이라이트 */}
        <path
          d="M50 12 L54 32 L50 38 L46 32 Z"
          fill="white"
          opacity="0.4"
        />
      </svg>
    );
  }

  // DAWN GLOW - 새벽의 빛남
  // 중심에서 퍼져나가는 빛
  if (variant === 'dawn-glow') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <radialGradient id="glowCenter">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="40%" stopColor="#FFB347" />
            <stop offset="70%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#845EC2" />
          </radialGradient>
        </defs>

        {/* 빛의 링들 */}
        <circle cx="50" cy="50" r="45" fill="#845EC2" opacity="0.1" />
        <circle cx="50" cy="50" r="35" fill="#FF6B9D" opacity="0.15" />
        <circle cx="50" cy="50" r="25" fill="#FFB347" opacity="0.2" />

        {/* 중심 별 */}
        <circle cx="50" cy="50" r="15" fill="url(#glowCenter)" />
        <circle cx="50" cy="50" r="8" fill="#FFE66D" />

        {/* 빛줄기 8개 */}
        <g opacity="0.6">
          <path d="M50 10 L52 40 L50 50 L48 40 Z" fill="#FFE66D" />
          <path d="M75 18 L58 46 L50 50 L54 42 Z" fill="#FFE66D" />
          <path d="M90 50 L60 52 L50 50 L60 48 Z" fill="#FFB347" />
          <path d="M82 75 L54 58 L50 50 L58 54 Z" fill="#FFB347" />
          <path d="M50 90 L52 60 L50 50 L48 60 Z" fill="#FF6B9D" />
          <path d="M18 82 L46 54 L50 50 L42 58 Z" fill="#FF6B9D" />
          <path d="M10 50 L40 52 L50 50 L40 48 Z" fill="#845EC2" />
          <path d="M25 25 L46 46 L50 50 L42 42 Z" fill="#845EC2" />
        </g>
      </svg>
    );
  }

  // HORIZON LIGHT - 지평선의 빛
  // 지평선 위로 떠오르는 새벽별
  if (variant === 'horizon-light') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A1A2E" />
            <stop offset="50%" stopColor="#845EC2" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
        </defs>

        {/* 하늘 배경 */}
        <rect width="100" height="65" fill="url(#skyGrad)" />

        {/* 지평선 */}
        <rect y="65" width="100" height="35" fill="#2A1A5E" />
        <line x1="0" y1="65" x2="100" y2="65" stroke="#FFB347" strokeWidth="2" opacity="0.5" />

        {/* 별 - 지평선 위에 */}
        <g>
          {/* 빛나는 효과 */}
          <circle cx="50" cy="35" r="25" fill="#FFE66D" opacity="0.2" />
          <circle cx="50" cy="35" r="15" fill="#FFE66D" opacity="0.3" />

          {/* 메인 별 */}
          <circle cx="50" cy="35" r="10" fill="#FFE66D" />
          <circle cx="50" cy="35" r="6" fill="white" />

          {/* 빛 광선 */}
          <line x1="50" y1="35" x2="50" y2="10" stroke="#FFE66D" strokeWidth="2" opacity="0.6" />
          <line x1="50" y1="35" x2="70" y2="20" stroke="#FFE66D" strokeWidth="1.5" opacity="0.5" />
          <line x1="50" y1="35" x2="30" y2="20" stroke="#FFE66D" strokeWidth="1.5" opacity="0.5" />
        </g>
      </svg>
    );
  }

  // FIRST LIGHT - 첫 번째 빛
  // 단순하고 강력한 빛의 폭발
  if (variant === 'first-light') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <radialGradient id="lightBurst">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFE66D" />
            <stop offset="60%" stopColor="#FFB347" />
            <stop offset="100%" stopColor="#FF6B9D" />
          </radialGradient>
        </defs>

        {/* 배경 어둠 */}
        <circle cx="50" cy="50" r="50" fill="#1A1A2E" />

        {/* 빛의 폭발 */}
        <circle cx="50" cy="50" r="40" fill="url(#lightBurst)" opacity="0.3" />
        <circle cx="50" cy="50" r="25" fill="url(#lightBurst)" opacity="0.6" />
        <circle cx="50" cy="50" r="15" fill="#FFE66D" />
        <circle cx="50" cy="50" r="8" fill="white" />

        {/* 광선들 */}
        <g opacity="0.7">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
              stroke="#FFE66D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    );
  }

  // RADIANT - 빛나는
  // Bloom의 미니멀 버전
  if (variant === 'radiant') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="radiantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="100%" stopColor="#FF6B9D" />
          </linearGradient>
        </defs>

        {/* 5개 꽃잎 - 더 단순하게 */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="25"
            rx="10"
            ry="18"
            fill="url(#radiantGrad)"
            opacity="0.9"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* 중심 */}
        <circle cx="50" cy="50" r="12" fill="#2A1A5E" />
        <circle cx="50" cy="50" r="8" fill="#FFE66D" />
      </svg>
    );
  }

  // Default
  return <DawnstarRefined variant="bloom-refined" size={size} className={className} />;
}

// 편의 함수들
export function BloomRefinedLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="bloom-refined" />;
}

export function MorningStarLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="morning-star" />;
}

export function DawnGlowLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="dawn-glow" />;
}

export function HorizonLightLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="horizon-light" />;
}

export function FirstLightLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="first-light" />;
}

export function RadiantLogo(props: Omit<DawnstarRefinedProps, 'variant'>) {
  return <DawnstarRefined {...props} variant="radiant" />;
}
