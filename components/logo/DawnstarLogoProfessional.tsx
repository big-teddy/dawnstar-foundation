'use client';

import React from 'react';

/**
 * DAWNSTAR FOUNDATION LOGO - PROFESSIONAL BRANDING VERSION
 *
 * Based on methodologies from:
 * - Pentagram: Design excellence and timeless simplicity
 * - Landor & Fitch: Holistic brand systems and scalability
 * - Interbrand: Brand strength through consistency and differentiation
 * - Wolff Olins: Adaptive, living identities
 *
 * Design Principles Applied:
 * 1. Mission Alignment: Star represents hope, guidance, and equal opportunity
 * 2. Simplicity: Clean lines, 2-3 colors maximum
 * 3. Memorability: Unique geometric construction
 * 4. Longevity: Timeless design for 10+ years
 * 5. Scalability: Works from 16px favicon to billboard
 * 6. Cultural Relevance: Korean design sensibility with global appeal
 */

interface DawnstarLogoProfessionalProps {
  variant?: 'primary' | 'education' | 'foundation' | 'wordmark' | 'icon';
  size?: number;
  className?: string;
}

export default function DawnstarLogoProfessional({
  variant = 'primary',
  size = 40,
  className = ''
}: DawnstarLogoProfessionalProps) {

  // PRIMARY: Based on Pentagram's philosophy of design excellence
  // A refined 6-pointed star with perfect geometry
  if (variant === 'primary') {
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
          {/* Subtle gradient for depth without overwhelming */}
          <linearGradient id="primaryGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1d1d1f" />
            <stop offset="100%" stopColor="#424245" />
          </linearGradient>
        </defs>

        {/* Outer star - represents reaching outward to help all students */}
        <path
          d="M 50,12
             L 56,38 L 82,38
             L 61,53 L 68,79
             L 50,64 L 32,79
             L 39,53 L 18,38
             L 44,38 Z"
          fill="url(#primaryGradient)"
        />

        {/* Inner hexagon - represents the solid foundation/core mission */}
        <path
          d="M 50,38 L 61,44 L 61,56 L 50,62 L 39,56 L 39,44 Z"
          fill="white"
          opacity="0.15"
        />

        {/* Center dot - the guiding light / 새벽별 */}
        <circle
          cx="50"
          cy="50"
          r="3.5"
          fill="white"
          opacity="0.3"
        />
      </svg>
    );
  }

  // EDUCATION: Inspired by Landor's holistic brand systems
  // Star with learning rays - dynamic and growth-oriented
  if (variant === 'education') {
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
          <linearGradient id="eduGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0071e3" />
            <stop offset="50%" stopColor="#5e5ce6" />
            <stop offset="100%" stopColor="#0071e3" />
          </linearGradient>
          <radialGradient id="eduRadial">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Knowledge rays emanating from center */}
        <g opacity="0.3">
          <line x1="50" y1="50" x2="50" y2="15" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="75" y2="25" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="85" y2="50" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="75" y2="75" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="50" y2="85" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="25" y2="75" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="15" y2="50" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="50" x2="25" y2="25" stroke="url(#eduGradient)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Core star */}
        <path
          d="M 50,20 L 55,42 L 78,42 L 59,55 L 65,77 L 50,64 L 35,77 L 41,55 L 22,42 L 45,42 Z"
          fill="url(#eduGradient)"
        />

        {/* Glow effect */}
        <circle cx="50" cy="50" r="25" fill="url(#eduRadial)" />

        {/* Center */}
        <circle cx="50" cy="50" r="5" fill="white" />
      </svg>
    );
  }

  // FOUNDATION: Inspired by Interbrand's Brand Strength framework
  // Solid, trustworthy, institutional
  if (variant === 'foundation') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Two interlocking triangles - balance of support */}
        {/* Bottom triangle - the foundation */}
        <path
          d="M 50,75 L 78,30 L 22,30 Z"
          fill="#1d1d1f"
          opacity="0.85"
        />

        {/* Top triangle - aspiration and growth */}
        <path
          d="M 50,25 L 78,70 L 22,70 Z"
          fill="#1d1d1f"
        />

        {/* Center hexagon - stability and structure */}
        <path
          d="M 50,38 L 62,45 L 62,55 L 50,62 L 38,55 L 38,45 Z"
          fill="white"
          opacity="0.2"
        />

        {/* Minimal highlight - top triangle */}
        <path
          d="M 50,25 L 64,55 L 36,55 Z"
          fill="white"
          opacity="0.08"
        />
      </svg>
    );
  }

  // WORDMARK: Following Wolff Olins' adaptive identity approach
  // Complete logo with text for full brand expression
  if (variant === 'wordmark') {
    return (
      <div className="flex items-center gap-3">
        {/* Icon */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wordmarkGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1d1d1f" />
              <stop offset="100%" stopColor="#424245" />
            </linearGradient>
          </defs>

          <path
            d="M 50,12 L 56,38 L 82,38 L 61,53 L 68,79 L 50,64 L 32,79 L 39,53 L 18,38 L 44,38 Z"
            fill="url(#wordmarkGradient)"
          />

          <path
            d="M 50,38 L 61,44 L 61,56 L 50,62 L 39,56 L 39,44 Z"
            fill="white"
            opacity="0.15"
          />
        </svg>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span
              className="font-bold text-slate-900 tracking-tight"
              style={{
                fontSize: size * 0.5,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              새벽별
            </span>
            <span
              className="font-normal text-slate-500"
              style={{
                fontSize: size * 0.28,
                lineHeight: 1.2
              }}
            >
              파운데이션
            </span>
          </div>
          <span
            className="text-slate-400 font-normal"
            style={{
              fontSize: size * 0.22,
              lineHeight: 1.3,
              marginTop: size * 0.05,
              letterSpacing: '0.02em'
            }}
          >
            DAWNSTAR FOUNDATION
          </span>
        </div>
      </div>
    );
  }

  // ICON: Minimal version for small sizes (favicon, app icon)
  // Optimized for 16px-64px sizes
  if (variant === 'icon') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Simplified star for small sizes - fewer points for clarity */}
        <path
          d="M 50,15 L 58,45 L 88,45 L 64,63 L 72,93 L 50,75 L 28,93 L 36,63 L 12,45 L 42,45 Z"
          fill="#1d1d1f"
        />

        {/* No inner details - maintains clarity at small sizes */}
      </svg>
    );
  }

  // Default fallback
  return <DawnstarLogoProfessional variant="primary" size={size} className={className} />;
}

// Convenience exports following component pattern
export function PrimaryLogo(props: Omit<DawnstarLogoProfessionalProps, 'variant'>) {
  return <DawnstarLogoProfessional {...props} variant="primary" />;
}

export function EducationLogo(props: Omit<DawnstarLogoProfessionalProps, 'variant'>) {
  return <DawnstarLogoProfessional {...props} variant="education" />;
}

export function FoundationLogo(props: Omit<DawnstarLogoProfessionalProps, 'variant'>) {
  return <DawnstarLogoProfessional {...props} variant="foundation" />;
}

export function WordmarkLogo(props: Omit<DawnstarLogoProfessionalProps, 'variant'>) {
  return <DawnstarLogoProfessional {...props} variant="wordmark" />;
}

export function IconLogo(props: Omit<DawnstarLogoProfessionalProps, 'variant'>) {
  return <DawnstarLogoProfessional {...props} variant="icon" />;
}
