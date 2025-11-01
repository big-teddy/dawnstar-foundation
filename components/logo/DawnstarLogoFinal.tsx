'use client';

import React from 'react';

/**
 * DAWNSTAR FOUNDATION - FINAL LOGO DESIGNS
 *
 * Inspired by successful education brands:
 * - Khan Academy: Simple geometric shapes, warm and approachable
 * - Duolingo: Playful yet professional, memorable character
 * - Coursera: Clean, modern, trustworthy
 *
 * New approach: 별(star)을 추상적으로 재해석
 */

interface LogoProps {
  variant?:
    | 'spark'      // 불꽃, 영감의 순간 (가장 추천)
    | 'bloom'      // 꽃이 피는 모습, 성장
    | 'orbit'      // 궤도, 체계적 학습
    | 'ascend'     // 상승, 발전
    | 'connect'    // 연결, 커뮤니티
    | 'simple';    // 초미니멀
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function DawnstarLogoFinal({
  variant = 'spark',
  size = 40,
  className = '',
  showText = false
}: LogoProps) {

  const renderLogo = () => {
    // SPARK - 영감의 순간, 아이디어의 불꽃 (RECOMMENDED)
    // 새벽별의 빛이 터지는 순간을 표현
    if (variant === 'spark') {
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
            <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#45B7D1" />
            </linearGradient>
          </defs>

          {/* 중심 코어 - 영감의 원천 */}
          <circle cx="50" cy="50" r="12" fill="#1A1A2E" />

          {/* 4개의 주요 광선 - 방향성 */}
          <path d="M50 10 L50 35 L45 35 L50 10 L55 35 L50 35 Z" fill="url(#sparkGrad)" />
          <path d="M90 50 L65 50 L65 45 L90 50 L65 55 L65 50 Z" fill="url(#sparkGrad)" />
          <path d="M50 90 L50 65 L45 65 L50 90 L55 65 L50 65 Z" fill="url(#sparkGrad)" />
          <path d="M10 50 L35 50 L35 45 L10 50 L35 55 L35 50 Z" fill="url(#sparkGrad)" />

          {/* 4개의 대각선 광선 - 확산 */}
          <circle cx="75" cy="25" r="4" fill="#4ECDC4" opacity="0.8" />
          <circle cx="75" cy="75" r="4" fill="#4ECDC4" opacity="0.8" />
          <circle cx="25" cy="75" r="4" fill="#4ECDC4" opacity="0.8" />
          <circle cx="25" cy="25" r="4" fill="#4ECDC4" opacity="0.8" />

          {/* 연결선 */}
          <line x1="50" y1="50" x2="71" y2="29" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.3" />
          <line x1="50" y1="50" x2="71" y2="71" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.3" />
          <line x1="50" y1="50" x2="29" y2="71" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.3" />
          <line x1="50" y1="50" x2="29" y2="29" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.3" />
        </svg>
      );
    }

    // BLOOM - 꽃이 피는 모습, 학습을 통한 성장
    // Khan Academy 스타일의 기하학적 꽃
    if (variant === 'bloom') {
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* 6개의 꽃잎 - 원형 배치 */}
          <g transform="rotate(0 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#FF6B6B" opacity="0.9" />
          </g>
          <g transform="rotate(60 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#FFD93D" opacity="0.9" />
          </g>
          <g transform="rotate(120 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#6BCF7F" opacity="0.9" />
          </g>
          <g transform="rotate(180 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#4ECDC4" opacity="0.9" />
          </g>
          <g transform="rotate(240 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#45B7D1" opacity="0.9" />
          </g>
          <g transform="rotate(300 50 50)">
            <ellipse cx="50" cy="25" rx="12" ry="20" fill="#96CEB4" opacity="0.9" />
          </g>

          {/* 중심 */}
          <circle cx="50" cy="50" r="15" fill="#1A1A2E" />
          <circle cx="50" cy="50" r="8" fill="white" />
        </svg>
      );
    }

    // ORBIT - 궤도를 도는 행성, 체계적이고 지속적인 학습
    if (variant === 'orbit') {
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* 3개의 궤도 */}
          <circle cx="50" cy="50" r="35" stroke="#4ECDC4" strokeWidth="1.5" opacity="0.3" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="#45B7D1" strokeWidth="2" opacity="0.5" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="#FF6B6B" strokeWidth="2.5" opacity="0.7" fill="none" />

          {/* 중심 별 */}
          <circle cx="50" cy="50" r="8" fill="#1A1A2E" />

          {/* 궤도 위의 학습자들 (작은 점) */}
          <circle cx="85" cy="50" r="3.5" fill="#4ECDC4" />
          <circle cx="50" cy="25" r="3" fill="#45B7D1" />
          <circle cx="35" cy="50" r="2.5" fill="#FF6B6B" />
          <circle cx="62" cy="62" r="2" fill="#FFD93D" />
        </svg>
      );
    }

    // ASCEND - 위로 상승하는 화살표, 발전과 성취
    if (variant === 'ascend') {
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
            <linearGradient id="ascendGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>

          {/* 3단계 성장 계단 */}
          <rect x="15" y="70" width="20" height="15" rx="3" fill="#4ECDC4" opacity="0.6" />
          <rect x="40" y="55" width="20" height="30" rx="3" fill="#45B7D1" opacity="0.7" />
          <rect x="65" y="35" width="20" height="50" rx="3" fill="url(#ascendGrad)" opacity="0.8" />

          {/* 별 - 정상 */}
          <path d="M75 15 L78 23 L87 23 L80 28 L82 36 L75 31 L68 36 L70 28 L63 23 L72 23 Z" fill="#FFD93D" />

          {/* 상승 화살표 */}
          <path d="M50 80 L50 25 L45 30 L50 25 L55 30" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        </svg>
      );
    }

    // CONNECT - 연결된 점들, 커뮤니티와 협력
    if (variant === 'connect') {
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* 연결선 */}
          <line x1="30" y1="30" x2="70" y2="30" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="30" x2="70" y2="70" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="70" x2="30" y2="70" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="30" y1="70" x2="30" y2="30" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="30" y1="30" x2="70" y2="70" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="30" x2="30" y2="70" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="30" x2="50" y2="50" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="70" y1="70" x2="50" y2="50" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />
          <line x1="30" y1="70" x2="50" y2="50" stroke="#4ECDC4" strokeWidth="2" opacity="0.4" />

          {/* 노드들 - 학습자/교육자 */}
          <circle cx="30" cy="30" r="6" fill="#FF6B6B" />
          <circle cx="70" cy="30" r="6" fill="#FFD93D" />
          <circle cx="70" cy="70" r="6" fill="#6BCF7F" />
          <circle cx="30" cy="70" r="6" fill="#45B7D1" />
          <circle cx="50" cy="50" r="8" fill="#1A1A2E" />
        </svg>
      );
    }

    // SIMPLE - 초미니멀, 단순한 별 하나
    if (variant === 'simple') {
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
            <linearGradient id="simpleGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFD93D" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>

          {/* 5각 별 - 클래식하지만 현대적인 비율 */}
          <path
            d="M50 15 L58 42 L87 42 L64 58 L72 85 L50 69 L28 85 L36 58 L13 42 L42 42 Z"
            fill="url(#simpleGrad)"
          />
        </svg>
      );
    }

    // Default
    return renderLogo();
  };

  if (!showText) {
    return renderLogo();
  }

  return (
    <div className="flex items-center gap-3">
      {renderLogo()}
      <div className="flex flex-col">
        <span
          className="font-bold text-slate-900 leading-tight"
          style={{ fontSize: size * 0.55 }}
        >
          새벽별
        </span>
        <span
          className="text-slate-500 font-normal leading-tight"
          style={{ fontSize: size * 0.28 }}
        >
          파운데이션
        </span>
      </div>
    </div>
  );
}

// 편의 함수들
export function SparkLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="spark" />;
}

export function BloomLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="bloom" />;
}

export function OrbitLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="orbit" />;
}

export function AscendLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="ascend" />;
}

export function ConnectLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="connect" />;
}

export function SimpleLogo(props: Omit<LogoProps, 'variant'>) {
  return <DawnstarLogoFinal {...props} variant="simple" />;
}
