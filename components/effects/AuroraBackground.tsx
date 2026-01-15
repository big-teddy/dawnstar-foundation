'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    showRadialGradient?: boolean;
}

export function AuroraBackground({
    children,
    className,
    showRadialGradient = true,
}: AuroraBackgroundProps) {
    return (
        <div
            className={cn(
                'relative flex flex-col min-h-screen bg-slate-50 overflow-hidden',
                className
            )}
        >
            {/* Aurora Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Warm animated blob 1 - Top left */}
                <motion.div
                    className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-60"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Warm animated blob 2 - Top right */}
                <motion.div
                    className="absolute -top-20 right-0 w-[700px] h-[700px] rounded-full opacity-50"
                    style={{
                        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 50%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />

                {/* Warm animated blob 3 - Bottom center */}
                <motion.div
                    className="absolute -bottom-40 left-1/3 w-[800px] h-[800px] rounded-full opacity-40"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.08, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 4,
                    }}
                />

                {/* Subtle orange/amber blob - Right side */}
                <motion.div
                    className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)',
                    }}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.12, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 6,
                    }}
                />
            </div>

            {/* Optional radial overlay for depth */}
            {showRadialGradient && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80 pointer-events-none" />
            )}

            {/* Content */}
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
}

// Simpler version with just CSS animation (no Framer Motion dependency for specific pages)
export function AuroraBackgroundCSS({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('relative min-h-screen overflow-hidden aurora-bg', className)}>
            {/* Animated gradient orbs using CSS */}
            <div className="aurora-orb aurora-orb-1" />
            <div className="aurora-orb aurora-orb-2" />
            <div className="aurora-orb aurora-orb-3" />
            <div className="aurora-orb aurora-orb-4" />

            {/* Radial overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/70 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
