'use client';

import React from 'react';

interface DawnstarLogoProps {
  variant?: 'default' | 'minimal' | 'gradient' | 'outlined' | 'davidStar' | 'burst' | 'geometric' | 'modern' | 'dotted' | 'dual';
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function DawnstarLogo({
  variant = 'default',
  size = 40,
  className = '',
  showText = false
}: DawnstarLogoProps) {

  // Logo variants
  const renderStar = () => {
    switch (variant) {
      case 'minimal':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Minimal 6-pointed star (hexagram) */}
            <path
              d="M50 15 L58 40 L85 40 L63 55 L71 80 L50 65 L29 80 L37 55 L15 40 L42 40 Z"
              fill="#1d1d1f"
              className="transition-colors duration-300"
            />
          </svg>
        );

      case 'gradient':
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
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="50%" stopColor="#5e5ce6" />
                <stop offset="100%" stopColor="#bf5af2" />
              </linearGradient>
              <linearGradient id="starGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bf5af2" />
                <stop offset="50%" stopColor="#5e5ce6" />
                <stop offset="100%" stopColor="#0071e3" />
              </linearGradient>
            </defs>
            {/* Two overlapping triangles with gradient */}
            <path
              d="M50 20 L75 65 L25 65 Z"
              fill="url(#starGradient)"
              opacity="0.9"
            />
            <path
              d="M50 80 L75 35 L25 35 Z"
              fill="url(#starGradient2)"
              opacity="0.9"
            />
          </svg>
        );

      case 'outlined':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Outlined 6-pointed star */}
            <path
              d="M50 15 L58 40 L85 40 L63 55 L71 80 L50 65 L29 80 L37 55 L15 40 L42 40 Z"
              stroke="#1d1d1f"
              strokeWidth="2.5"
              fill="none"
              strokeLinejoin="round"
              className="transition-all duration-300"
            />
            {/* Inner glow */}
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="#0071e3"
              opacity="0.25"
            />
          </svg>
        );

      case 'davidStar':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Classic Star of David / Hexagram */}
            <path
              d="M50 20 L75 65 L25 65 Z"
              fill="#1d1d1f"
              className="transition-colors duration-300"
            />
            <path
              d="M50 80 L75 35 L25 35 Z"
              fill="#1d1d1f"
              className="transition-colors duration-300"
            />
            {/* Center hexagon highlight */}
            <path
              d="M50 40 L60 50 L50 60 L40 50 Z"
              fill="white"
              opacity="0.2"
            />
          </svg>
        );

      case 'burst':
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
              <radialGradient id="burstGradient">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="100%" stopColor="#1d1d1f" />
              </radialGradient>
            </defs>
            {/* 6-pointed burst rays */}
            <g className="transition-all duration-300">
              <path d="M50 10 L54 45 L50 50 L46 45 Z" fill="url(#burstGradient)" />
              <path d="M77 25 L58 53 L50 50 L56 42 Z" fill="url(#burstGradient)" />
              <path d="M77 75 L58 47 L50 50 L56 58 Z" fill="url(#burstGradient)" />
              <path d="M50 90 L54 55 L50 50 L46 55 Z" fill="url(#burstGradient)" />
              <path d="M23 75 L42 47 L50 50 L44 58 Z" fill="url(#burstGradient)" />
              <path d="M23 25 L42 53 L50 50 L44 42 Z" fill="url(#burstGradient)" />
            </g>
            <circle cx="50" cy="50" r="8" fill="#0071e3" />
          </svg>
        );

      case 'geometric':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Geometric hexagon with 6 triangular points */}
            <path
              d="M50 25 L65 37.5 L65 62.5 L50 75 L35 62.5 L35 37.5 Z"
              fill="#1d1d1f"
              className="transition-colors duration-300"
            />
            {/* 6 outer points */}
            <path d="M50 10 L57 25 L43 25 Z" fill="#0071e3" />
            <path d="M75 30 L65 37.5 L68 50 Z" fill="#0071e3" />
            <path d="M75 70 L68 50 L65 62.5 Z" fill="#0071e3" />
            <path d="M50 90 L43 75 L57 75 Z" fill="#0071e3" />
            <path d="M25 70 L35 62.5 L32 50 Z" fill="#0071e3" />
            <path d="M25 30 L32 50 L35 37.5 Z" fill="#0071e3" />
          </svg>
        );

      case 'modern':
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
              <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="100%" stopColor="#5e5ce6" />
              </linearGradient>
            </defs>
            {/* Modern 3D-style hexagram */}
            <g className="transition-all duration-300">
              {/* Bottom triangle - darker */}
              <path
                d="M50 80 L75 35 L25 35 Z"
                fill="#1d1d1f"
                opacity="0.8"
              />
              {/* Top triangle - gradient */}
              <path
                d="M50 20 L75 65 L25 65 Z"
                fill="url(#modernGradient)"
              />
              {/* Center highlight */}
              <circle cx="50" cy="50" r="6" fill="white" opacity="0.3" />
            </g>
          </svg>
        );

      case 'dotted':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Hexagram outline with dots */}
            <path
              d="M50 20 L75 65 L25 65 Z"
              stroke="#1d1d1f"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              className="transition-all duration-300"
            />
            <path
              d="M50 80 L75 35 L25 35 Z"
              stroke="#0071e3"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              className="transition-all duration-300"
            />
            {/* 6 corner dots */}
            <circle cx="50" cy="20" r="4" fill="#0071e3" />
            <circle cx="75" cy="35" r="4" fill="#0071e3" />
            <circle cx="75" cy="65" r="4" fill="#0071e3" />
            <circle cx="50" cy="80" r="4" fill="#0071e3" />
            <circle cx="25" cy="65" r="4" fill="#0071e3" />
            <circle cx="25" cy="35" r="4" fill="#0071e3" />
            {/* Center */}
            <circle cx="50" cy="50" r="5" fill="#1d1d1f" />
          </svg>
        );

      case 'dual':
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
              <linearGradient id="dualGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0071e3" />
                <stop offset="100%" stopColor="#5e5ce6" />
              </linearGradient>
              <linearGradient id="dualGradient2" x1="100%" y1="100%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bf5af2" />
                <stop offset="100%" stopColor="#5e5ce6" />
              </linearGradient>
            </defs>
            {/* Dual-tone hexagram with rounded edges */}
            <path
              d="M50 20 L75 65 L25 65 Z"
              fill="url(#dualGradient1)"
              className="transition-all duration-300"
            />
            <path
              d="M50 80 L75 35 L25 35 Z"
              fill="url(#dualGradient2)"
              opacity="0.8"
              className="transition-all duration-300"
            />
            {/* Inner hexagon */}
            <path
              d="M50 37 L62 50 L50 63 L38 50 Z"
              fill="white"
              opacity="0.25"
            />
          </svg>
        );

      default: // 'default'
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
          >
            {/* Classic 6-pointed star with depth */}
            <path
              d="M50 15 L58 40 L85 40 L63 55 L71 80 L50 65 L29 80 L37 55 L15 40 L42 40 Z"
              fill="#1d1d1f"
              className="transition-colors duration-300"
            />
            {/* Highlight overlay */}
            <path
              d="M50 15 L54 35 L50 45 L46 35 Z"
              fill="white"
              opacity="0.2"
            />
          </svg>
        );
    }
  };

  if (!showText) {
    return renderStar();
  }

  return (
    <div className="flex items-center gap-3">
      {renderStar()}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
          새벽별
        </span>
        <span className="text-xs text-slate-500 leading-tight">
          파운데이션
        </span>
      </div>
    </div>
  );
}

// Export individual variants for convenience
export function DawnstarLogoMinimal({ size = 40, className = '' }: { size?: number; className?: string }) {
  return <DawnstarLogo variant="minimal" size={size} className={className} />;
}

export function DawnstarLogoGradient({ size = 40, className = '' }: { size?: number; className?: string }) {
  return <DawnstarLogo variant="gradient" size={size} className={className} />;
}

export function DawnstarLogoOutlined({ size = 40, className = '' }: { size?: number; className?: string }) {
  return <DawnstarLogo variant="outlined" size={size} className={className} />;
}

export function DawnstarLogoWithText({ variant = 'default', size = 40, className = '' }: DawnstarLogoProps) {
  return <DawnstarLogo variant={variant} size={size} className={className} showText={true} />;
}
