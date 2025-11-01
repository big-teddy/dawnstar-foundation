'use client';

import React from 'react';

/**
 * DAWNSTAR (새벽별) - THE ESSENCE
 *
 * 새벽별(샛별) = 금성(Venus)
 * - 동이 트기 직전, 어둠이 가장 깊을 때 가장 밝게 빛나는 별
 * - 희망의 상징, 새로운 시작의 안내자
 * - 어둠 속에서 길을 밝혀주는 유일한 빛
 *
 * 핵심 컨셉:
 * 1. 어둠과 빛의 대비
 * 2. 지평선 - 밤과 낮의 경계
 * 3. 단 하나의 빛 - 고독하지만 강렬한
 * 4. 새로운 시작을 알림
 */

interface DawnstarEssenceProps {
  variant?:
    | 'venus'          // 금성 - 가장 순수한 형태
    | 'horizon'        // 지평선 위의 한 점
    | 'breakthrough'   // 어둠을 뚫고 나오는 빛
    | 'guide'          // 길을 밝히는 안내자
    | 'awakening'      // 깨어남
    | 'solitary';      // 고독한 빛
  size?: number;
  className?: string;
}

export default function DawnstarEssence({
  variant = 'venus',
  size = 40,
  className = ''
}: DawnstarEssenceProps) {

  // VENUS - 금성, 가장 순수하고 본질적인 형태
  // 어둠 속 단 하나의 빛나는 점
  if (variant === 'venus') {
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
          <linearGradient id="dawnSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F0F23" />
            <stop offset="60%" stopColor="#1A1A3E" />
            <stop offset="85%" stopColor="#4A4A7A" />
            <stop offset="100%" stopColor="#FFB84D" />
          </linearGradient>

          {/* 별의 빛 */}
          <radialGradient id="starLight">
            <stop offset="0%" stopColor="#FFFAEB" />
            <stop offset="30%" stopColor="#FFE89C" />
            <stop offset="60%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFB84D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 새벽 하늘 배경 */}
        <rect width="100" height="100" fill="url(#dawnSky)" rx="0" />

        {/* 별의 후광 - 3단계 */}
        <circle cx="50" cy="30" r="35" fill="url(#starLight)" opacity="0.4" />
        <circle cx="50" cy="30" r="22" fill="url(#starLight)" opacity="0.6" />
        <circle cx="50" cy="30" r="12" fill="url(#starLight)" opacity="0.8" />

        {/* 메인 별 - 단순하고 강렬한 하나의 점 */}
        <circle cx="50" cy="30" r="5" fill="#FFFAEB" />
        <circle cx="50" cy="30" r="2.5" fill="white" />

        {/* 십자 빛살 - Venus의 특징 */}
        <g opacity="0.7">
          <line x1="50" y1="15" x2="50" y2="45" stroke="#FFFAEB" strokeWidth="1" strokeLinecap="round" />
          <line x1="35" y1="30" x2="65" y2="30" stroke="#FFFAEB" strokeWidth="1" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  // HORIZON - 지평선 위의 한 점
  // 밤과 낮의 경계에서 빛나는 별
  if (variant === 'horizon') {
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
          <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A0A1A" />
            <stop offset="100%" stopColor="#1A1A3E" />
          </linearGradient>
          <linearGradient id="dawnHorizon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB84D" />
            <stop offset="50%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#FF6B9D" />
          </linearGradient>
        </defs>

        {/* 밤 하늘 */}
        <rect width="100" height="60" fill="url(#nightSky)" />

        {/* 지평선 빛 */}
        <rect y="60" width="100" height="40" fill="url(#dawnHorizon)" />

        {/* 지평선 라인 */}
        <line x1="0" y1="60" x2="100" y2="60" stroke="#FFD54F" strokeWidth="1.5" opacity="0.8" />

        {/* 지평선 위의 별 - 정확히 경계에 */}
        <g>
          {/* 빛의 반사 - 지평선 아래로 */}
          <ellipse cx="50" cy="75" rx="15" ry="8" fill="#FFE89C" opacity="0.3" />

          {/* 별의 후광 */}
          <circle cx="50" cy="50" r="18" fill="#FFFAEB" opacity="0.2" />
          <circle cx="50" cy="50" r="10" fill="#FFFAEB" opacity="0.4" />

          {/* 메인 별 */}
          <circle cx="50" cy="50" r="4" fill="#FFFAEB" />
          <circle cx="50" cy="50" r="2" fill="white" />

          {/* 빛살 */}
          <line x1="50" y1="35" x2="50" y2="65" stroke="#FFFAEB" strokeWidth="0.8" opacity="0.6" />
          <line x1="38" y1="50" x2="62" y2="50" stroke="#FFFAEB" strokeWidth="0.8" opacity="0.6" />
        </g>
      </svg>
    );
  }

  // BREAKTHROUGH - 어둠을 뚫고 나오는 빛
  // 가장 극적이고 강렬한 순간
  if (variant === 'breakthrough') {
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
          <radialGradient id="burstLight">
            <stop offset="0%" stopColor="#FFFAEB" />
            <stop offset="50%" stopColor="#FFE89C" />
            <stop offset="100%" stopColor="#0A0A1A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 어둠 */}
        <rect width="100" height="100" fill="#0A0A1A" />

        {/* 중심에서 폭발하는 빛 */}
        <circle cx="50" cy="50" r="45" fill="url(#burstLight)" opacity="0.6" />

        {/* 8방향 광선 - 어둠을 뚫고 나감 */}
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const length = 40;
            const x2 = 50 + length * Math.cos((angle * Math.PI) / 180);
            const y2 = 50 + length * Math.sin((angle * Math.PI) / 180);
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="url(#burstLight)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
            );
          })}
        </g>

        {/* 중심 별 */}
        <circle cx="50" cy="50" r="8" fill="#FFFAEB" />
        <circle cx="50" cy="50" r="4" fill="white" />
      </svg>
    );
  }

  // GUIDE - 길을 밝히는 안내자
  // 경로를 만들어내는 빛
  if (variant === 'guide') {
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
          <linearGradient id="pathGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFAEB" />
            <stop offset="100%" stopColor="#FFB84D" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* 어둠 배경 */}
        <rect width="100" height="100" fill="#0F0F23" />

        {/* 빛의 경로 - 위에서 아래로 */}
        <path
          d="M50 10 L50 90"
          stroke="url(#pathGrad)"
          strokeWidth="25"
          opacity="0.3"
        />
        <path
          d="M50 10 L50 90"
          stroke="url(#pathGrad)"
          strokeWidth="10"
          opacity="0.5"
        />

        {/* 상단의 별 - 길을 밝히는 원천 */}
        <circle cx="50" cy="20" r="15" fill="#FFFAEB" opacity="0.3" />
        <circle cx="50" cy="20" r="8" fill="#FFFAEB" />
        <circle cx="50" cy="20" r="4" fill="white" />

        {/* 경로 위의 작은 빛들 - 안내 표시 */}
        <circle cx="50" cy="45" r="2" fill="#FFE89C" opacity="0.6" />
        <circle cx="50" cy="65" r="1.5" fill="#FFE89C" opacity="0.4" />
        <circle cx="50" cy="80" r="1" fill="#FFE89C" opacity="0.3" />
      </svg>
    );
  }

  // AWAKENING - 깨어남
  // 어둠에서 빛으로의 전환
  if (variant === 'awakening') {
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
          <linearGradient id="awakeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A0A1A" />
            <stop offset="50%" stopColor="#1A1A3E" />
            <stop offset="100%" stopColor="#FFB84D" />
          </linearGradient>
        </defs>

        {/* 그라디언트 배경 - 어둠에서 빛으로 */}
        <rect width="100" height="100" fill="url(#awakeGrad)" />

        {/* 중앙 하단에서 올라오는 빛 */}
        <g>
          {/* 빛의 삼각형 - 확산 */}
          <path
            d="M50 100 L20 40 L80 40 Z"
            fill="#FFFAEB"
            opacity="0.15"
          />
          <path
            d="M50 100 L30 50 L70 50 Z"
            fill="#FFE89C"
            opacity="0.25"
          />

          {/* 중심 별 - 빛의 원천 */}
          <circle cx="50" cy="65" r="12" fill="#FFFAEB" opacity="0.6" />
          <circle cx="50" cy="65" r="6" fill="#FFFAEB" />
          <circle cx="50" cy="65" r="3" fill="white" />
        </g>
      </svg>
    );
  }

  // SOLITARY - 고독한 빛
  // 광활한 어둠 속 단 하나의 빛
  if (variant === 'solitary') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* 깊은 어둠 */}
        <rect width="100" height="100" fill="#050510" />

        {/* 매우 미묘한 별들 (먼 배경) */}
        <circle cx="15" cy="20" r="0.5" fill="white" opacity="0.3" />
        <circle cx="85" cy="25" r="0.5" fill="white" opacity="0.2" />
        <circle cx="25" cy="75" r="0.5" fill="white" opacity="0.25" />
        <circle cx="75" cy="80" r="0.5" fill="white" opacity="0.2" />

        {/* 중앙의 새벽별 - 압도적으로 밝음 */}
        <g>
          {/* 넓은 후광 */}
          <circle cx="50" cy="50" r="30" fill="#FFFAEB" opacity="0.05" />
          <circle cx="50" cy="50" r="20" fill="#FFFAEB" opacity="0.1" />
          <circle cx="50" cy="50" r="12" fill="#FFFAEB" opacity="0.2" />

          {/* 메인 별 */}
          <circle cx="50" cy="50" r="6" fill="#FFFAEB" />
          <circle cx="50" cy="50" r="3" fill="white" />

          {/* 섬세한 빛살 */}
          <g opacity="0.5">
            <line x1="50" y1="40" x2="50" y2="60" stroke="#FFFAEB" strokeWidth="0.5" />
            <line x1="40" y1="50" x2="60" y2="50" stroke="#FFFAEB" strokeWidth="0.5" />
            <line x1="44" y1="44" x2="56" y2="56" stroke="#FFFAEB" strokeWidth="0.3" />
            <line x1="56" y1="44" x2="44" y2="56" stroke="#FFFAEB" strokeWidth="0.3" />
          </g>
        </g>
      </svg>
    );
  }

  // Default
  return <DawnstarEssence variant="venus" size={size} className={className} />;
}

// 편의 함수들
export function VenusLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="venus" />;
}

export function HorizonLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="horizon" />;
}

export function BreakthroughLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="breakthrough" />;
}

export function GuideLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="guide" />;
}

export function AwakeningLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="awakening" />;
}

export function SolitaryLogo(props: Omit<DawnstarEssenceProps, 'variant'>) {
  return <DawnstarEssence {...props} variant="solitary" />;
}
