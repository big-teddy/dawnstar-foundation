'use client';

import React from 'react';

/**
 * DAWNSTAR - ICONIC LOGO SYSTEM
 *
 * 아이코닉 로고의 원칙 (Apple, Nike, Mercedes 수준):
 * 1. 배경 없이 독립적으로 존재
 * 2. 단색으로도 완벽하게 작동
 * 3. 1cm부터 10m까지 모든 크기에서 선명
 * 4. 즉시 인식 가능
 * 5. 설명 없이도 기억에 남음
 * 6. 어떤 매체에도 적용 가능
 *
 * 새벽별의 본질을 가장 단순한 형태로 압축
 */

interface DawnstarIconicProps {
  variant?:
    | 'mark'           // 단순한 마크 (가장 추천)
    | 'monoline'       // 단일 선으로 된 별
    | 'stellar'        // 기하학적 별
    | 'ray'            // 빛의 광선
    | 'minimal-star'   // 미니멀 별
    | 'abstract';      // 추상적 해석
  size?: number;
  color?: string;
  className?: string;
}

export default function DawnstarIconic({
  variant = 'mark',
  size = 40,
  color = '#1A1A2E',
  className = ''
}: DawnstarIconicProps) {

  // MARK - THE DAWNSTAR MARK (가장 추천)
  // Nike Swoosh처럼 단순하지만 독특한
  // 별의 핵심 + 빛의 확산을 하나의 형태로
  if (variant === 'mark') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* 중심 다이아몬드 - 별의 핵 */}
        <path
          d="M50 20 L65 50 L50 80 L35 50 Z"
          fill={color}
        />

        {/* 4개의 광선 - 빛의 확산 */}
        <path d="M50 20 L50 5" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M65 50 L80 50" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M50 80 L50 95" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M35 50 L20 50" stroke={color} strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  // MONOLINE - 단일 선으로 그린 별
  // 하나의 연속된 선, 끊김 없는 성장
  if (variant === 'monoline') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M50 10 L60 45 L95 45 L67 65 L77 100 L50 77 L23 100 L33 65 L5 45 L40 45 Z"
          stroke={color}
          strokeWidth="5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  // STELLAR - 완벽한 기하학
  // Mercedes 로고처럼 정교한 기하학적 구조
  if (variant === 'stellar') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* 외부 원 */}
        <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="3" fill="none" />

        {/* 6개 광선 - 정확히 60도 간격 */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 20 * Math.cos(rad);
          const y1 = 50 + 20 * Math.sin(rad);
          const x2 = 50 + 45 * Math.cos(rad);
          const y2 = 50 + 45 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
            />
          );
        })}

        {/* 중심 원 */}
        <circle cx="50" cy="50" r="12" fill={color} />
      </svg>
    );
  }

  // RAY - 빛의 광선만으로
  // 가장 미니멀, 빛의 폭발만 표현
  if (variant === 'ray') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* 중심점 */}
        <circle cx="50" cy="50" r="6" fill={color} />

        {/* 8개의 광선 */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 10 * Math.cos(rad);
          const y1 = 50 + 10 * Math.sin(rad);
          const x2 = 50 + 45 * Math.cos(rad);
          const y2 = 50 + 45 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    );
  }

  // MINIMAL STAR - 초미니멀 별
  // Apple 로고처럼 단순한 실루엣
  if (variant === 'minimal-star') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M50 10 L58 42 L92 42 L64 62 L72 94 L50 74 L28 94 L36 62 L8 42 L42 42 Z"
          fill={color}
        />
      </svg>
    );
  }

  // ABSTRACT - 추상적 해석
  // 별을 완전히 재해석, 가장 독특
  if (variant === 'abstract') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* 3개의 겹친 삼각형 - 별의 추상화 */}
        <path
          d="M50 15 L70 50 L50 85 Z"
          fill={color}
          opacity="0.8"
        />
        <path
          d="M50 15 L30 50 L50 85 Z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M30 35 L70 35 L50 70 Z"
          fill={color}
        />
      </svg>
    );
  }

  // Default
  return <DawnstarIconic variant="mark" size={size} color={color} className={className} />;
}

// Convenience exports
export function MarkLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="mark" />;
}

export function MonolineLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="monoline" />;
}

export function StellarLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="stellar" />;
}

export function RayLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="ray" />;
}

export function MinimalStarLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="minimal-star" />;
}

export function AbstractLogo(props: Omit<DawnstarIconicProps, 'variant'>) {
  return <DawnstarIconic {...props} variant="abstract" />;
}
