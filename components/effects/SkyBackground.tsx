'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * SkyBackground - 최적화된 스크롤 기반 밤→새벽→오로라 전환
 * 
 * 구조:
 * - Hero (100vh): progress 0 → 0.4 (밤)
 * - ScrollDepthZone (150vh): progress 0.4 → 1.0 (밤 → 새벽 → 오로라 극적 전환)
 * - WhyWeExist 진입 시: progress 1.0+ (완전한 오로라)
 * 
 * 최적화:
 * - CSS 기반 별 (motion.div 대신)
 * - requestAnimationFrame 스로틀링
 * - 초기 배경색으로 화이트 플래시 방지
 */
export default function SkyBackground() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Refs for direct DOM manipulation (Performance Optimization)
    const containerRef = useRef<HTMLDivElement>(null);
    const starsRef = useRef<HTMLDivElement>(null);
    const horizonRef = useRef<HTMLDivElement>(null);
    const auroraRef = useRef<HTMLDivElement>(null);
    const ticking = useRef(false);

    // 초기 배경 - 밤하늘
    const initialGradient = 'linear-gradient(to bottom, hsl(222, 47%, 8%) 0%, hsl(224, 50%, 12%) 50%, hsl(226, 53%, 16%) 100%)';

    // Static color definitions for interpolation
    // 상단: 깊은 밤 -> 밝은 새벽 -> 아침
    const topStops = [
        { stop: 0.0, h: 222, s: 47, l: 8 },
        { stop: 0.2, h: 222, s: 47, l: 8 },
        { stop: 0.6, h: 215, s: 30, l: 60 },
        { stop: 1.0, h: 210, s: 40, l: 94 },
    ];
    // 중간: 밤 -> 차분한 블루 -> 화이트
    const midStops = [
        { stop: 0.0, h: 224, s: 50, l: 12 },
        { stop: 0.2, h: 224, s: 50, l: 12 },
        { stop: 0.6, h: 215, s: 20, l: 75 },
        { stop: 1.0, h: 210, s: 10, l: 98 },
    ];
    // 하단: 밤 -> 따뜻한 살구색 -> 화이트
    const bottomStops = [
        { stop: 0.0, h: 226, s: 53, l: 16 },
        { stop: 0.2, h: 226, s: 53, l: 16 },
        { stop: 0.6, h: 25, s: 60, l: 75 },
        { stop: 1.0, h: 35, s: 40, l: 98 },
    ];

    // Helper: HSL Interpolation
    const interpolateColor = (p: number, stops: { stop: number; h: number; s: number; l: number }[]) => {
        let start = stops[0];
        let end = stops[stops.length - 1];

        for (let i = 0; i < stops.length - 1; i++) {
            if (p >= stops[i].stop && p <= stops[i + 1].stop) {
                start = stops[i];
                end = stops[i + 1];
                break;
            }
        }

        const range = end.stop - start.stop;
        const t = range > 0 ? (p - start.stop) / range : 0;

        const h = start.h + (end.h - start.h) * t;
        const s = start.s + (end.s - start.s) * t;
        const l = start.l + (end.l - start.l) * t;

        return `hsl(${h}, ${s}%, ${l}%)`;
    };

    useEffect(() => {
        if (!containerRef.current) return;

        // If not home, force bright day immediately
        if (!isHome) {
            containerRef.current.style.background = 'linear-gradient(to bottom, hsl(210, 40%, 94%) 0%, hsl(210, 10%, 98%) 50%, hsl(35, 40%, 98%) 100%)';
            if (starsRef.current) starsRef.current.style.display = 'none';
            if (horizonRef.current) horizonRef.current.style.display = 'none';
            if (auroraRef.current) {
                auroraRef.current.style.opacity = '1';
                auroraRef.current.style.visibility = 'visible';
            }
            return;
        }

        const handleScroll = () => {
            if (ticking.current) return;

            ticking.current = true;
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const transitionEnd = window.innerHeight * 2.5;
                const progress = Math.max(0, Math.min(1, scrollY / transitionEnd));

                // 1. Update Background Gradient
                if (containerRef.current) {
                    // Optimization: Only update gradient if it changes significantly or just do it every frame?
                    // CSS Gradients are heavy, but essential here.
                    const top = interpolateColor(progress, topStops);
                    const mid = interpolateColor(progress, midStops);
                    const bottom = interpolateColor(progress, bottomStops);
                    containerRef.current.style.background = `linear-gradient(to bottom, ${top} 0%, ${mid} 50%, ${bottom} 100%)`;
                }

                // 2. Stars Opacity
                if (starsRef.current) {
                    let starOp = 0;
                    if (progress <= 0.2) starOp = 1;
                    else if (progress >= 0.5) starOp = 0;
                    else starOp = 1 - (progress - 0.2) * 3.33;

                    starsRef.current.style.opacity = starOp.toFixed(3);
                    starsRef.current.style.visibility = starOp <= 0 ? 'hidden' : 'visible';
                }

                // 3. Horizon Glow Opacity
                if (horizonRef.current) {
                    let horizonOp = 0;
                    if (progress < 0.2) horizonOp = 0;
                    else if (progress < 0.5) horizonOp = (progress - 0.2) * 3.33;
                    else if (progress < 0.7) horizonOp = 1;
                    else if (progress < 0.9) horizonOp = 1 - (progress - 0.7) * 5;
                    else horizonOp = 0;

                    horizonRef.current.style.opacity = horizonOp.toFixed(3);
                    horizonRef.current.style.visibility = horizonOp <= 0 ? 'hidden' : 'visible';
                }

                // 4. Aurora Opacity
                if (auroraRef.current) {
                    let auroraOp = 0;
                    if (progress < 0.5) auroraOp = 0;
                    else auroraOp = Math.min(1, (progress - 0.5) * 2);

                    auroraRef.current.style.opacity = auroraOp.toFixed(3);
                    auroraRef.current.style.visibility = auroraOp <= 0 ? 'hidden' : 'visible';
                }

                ticking.current = false;
            });
        };

        handleScroll(); // Init
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll); // Recalc on resize

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [isHome]);

    // 별 줄인 개수 (50개) - Static constant
    const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.7,
        delay: Math.random() * 3,
    })), []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 -z-10 overflow-hidden"
            style={{
                background: initialGradient,
                willChange: 'background'
            }}
        >
            {/* 별 레이어 */}
            <div
                ref={starsRef}
                className="absolute inset-0 pointer-events-none"
                style={{ willChange: 'opacity' }}
            >
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white star-twinkle"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* 지평선 글로우 */}
            <div
                ref={horizonRef}
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                    height: '45%',
                    opacity: 0,
                    willChange: 'opacity',
                    visibility: 'hidden'
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to top, 
                            rgba(253, 186, 116, 0.4) 0%,   /* Soft Orange */
                            rgba(253, 186, 116, 0.2) 30%,
                            rgba(253, 186, 116, 0.05) 60%,
                            transparent 100%
                        )`
                    }}
                />
            </div>

            {/* 오로라 레이어 - 밝고 풍부한 색상 */}
            <div
                ref={auroraRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    opacity: 0,
                    willChange: 'opacity',
                    visibility: 'hidden'
                }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -inset-[50%] w-[200%] h-[200%]"
                        style={{
                            background: `
                                radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                                radial-gradient(ellipse 60% 40% at 70% 30%, rgba(236, 72, 153, 0.35) 0%, transparent 50%),
                                radial-gradient(ellipse 70% 60% at 40% 70%, rgba(59, 130, 246, 0.35) 0%, transparent 50%),
                                radial-gradient(ellipse 50% 50% at 80% 60%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)
                            `,
                            filter: 'blur(50px)',
                            animation: 'aurora-drift 20s ease-in-out infinite',
                            willChange: 'transform'
                        }}
                    />
                </div>
                {/* 밝은 오버레이 */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg,
                            rgba(255, 255, 255, 0.1) 0%,
                            rgba(255, 255, 255, 0.25) 40%,
                            rgba(255, 255, 255, 0.4) 70%,
                            rgba(255, 255, 255, 0.55) 100%
                        )`,
                    }}
                />
            </div>

            {/* CSS 애니메이션 */}
            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                .star-twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
                @keyframes aurora-drift {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(2%, 1%) rotate(1deg); }
                }
            `}</style>
        </div>
    );
}
