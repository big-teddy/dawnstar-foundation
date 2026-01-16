'use client';

import { useEffect, useRef } from 'react';

interface ShootingStar {
    x: number;
    y: number;
    vx: number;
    vy: number;
    length: number;
    opacity: number;
    trail: { x: number; y: number; opacity: number }[];
}

interface ShootingStarsCanvasProps {
    opacity?: number;
}

export default function ShootingStarsCanvas({ opacity = 1 }: ShootingStarsCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | undefined>(undefined);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const lastSpawnTimeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Spawn a new shooting star - RARE and SLOW
        const spawnShootingStar = () => {
            const now = Date.now();
            // Minimum 2-5 seconds between shooting stars (Increased frequency)
            const minInterval = 2000 + Math.random() * 3000;

            if (now - lastSpawnTimeRef.current < minInterval) return;
            if (shootingStarsRef.current.length > 0) return; // Only one at a time

            // 1.5% chance per frame (more frequent)
            if (Math.random() > 0.015) return;

            lastSpawnTimeRef.current = now;

            // Start from top-right quadrant, move to bottom-left (realistic direction)
            const startX = canvas.width * (0.3 + Math.random() * 0.6); // 30-90% from left
            const startY = Math.random() * canvas.height * 0.3; // Top 30%

            shootingStarsRef.current.push({
                x: startX,
                y: startY,
                // Slow, graceful movement - diagonal down-left
                vx: -(1.5 + Math.random() * 1), // -1.5 to -2.5 (leftward)
                vy: 1.2 + Math.random() * 0.8,   // 1.2 to 2.0 (downward)
                length: 80 + Math.random() * 60, // 80-140px trail
                opacity: 0.9 + Math.random() * 0.1,
                trail: [],
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Try to spawn new shooting star
            spawnShootingStar();

            // Update and draw shooting stars
            shootingStarsRef.current = shootingStarsRef.current.filter((star) => {
                // Add current position to trail
                star.trail.unshift({ x: star.x, y: star.y, opacity: star.opacity });

                // Limit trail length
                const maxTrailPoints = Math.floor(star.length / 2);
                if (star.trail.length > maxTrailPoints) {
                    star.trail.pop();
                }

                // Move star
                star.x += star.vx;
                star.y += star.vy;

                // Gradually fade out as it travels
                star.opacity -= 0.003;

                // Draw the meteor trail
                if (star.trail.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(star.trail[0].x, star.trail[0].y);

                    for (let i = 1; i < star.trail.length; i++) {
                        const point = star.trail[i];
                        ctx.lineTo(point.x, point.y);
                    }

                    // Create gradient for trail
                    const gradient = ctx.createLinearGradient(
                        star.x, star.y,
                        star.trail[star.trail.length - 1].x,
                        star.trail[star.trail.length - 1].y
                    );
                    gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                    gradient.addColorStop(0.3, `rgba(200, 220, 255, ${star.opacity * 0.6})`);
                    gradient.addColorStop(0.7, `rgba(150, 180, 255, ${star.opacity * 0.2})`);
                    gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.lineCap = 'round';
                    ctx.stroke();

                    // Draw bright head
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                    ctx.fill();

                    // Glow effect on head
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
                    const headGlow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 6);
                    headGlow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.8})`);
                    headGlow.addColorStop(0.5, `rgba(200, 220, 255, ${star.opacity * 0.4})`);
                    headGlow.addColorStop(1, 'rgba(150, 180, 255, 0)');
                    ctx.fillStyle = headGlow;
                    ctx.fill();
                }

                // Remove if off-screen or faded out
                return (
                    star.x > -100 &&
                    star.x < canvas.width + 100 &&
                    star.y > -100 &&
                    star.y < canvas.height + 100 &&
                    star.opacity > 0
                );
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity }}
            aria-hidden="true"
        />
    );
}
