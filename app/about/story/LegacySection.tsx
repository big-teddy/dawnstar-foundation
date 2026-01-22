'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';



// ============================================
// SECTION LABEL (Centered)
// ============================================
function SectionLabelCenter({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-8 bg-amber-400/60" />
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">
                {children}
            </span>
            <div className="h-[1px] w-8 bg-amber-400/60" />
        </div>
    );
}

// ============================================
// LEGACY SECTION - CINEMATIC VERSION
// ============================================
export function LegacySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(contentRef, { once: true, margin: "-20% 0px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    // 스크롤에 따른 배경 어두워짐 효과
    const bgOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.95]);
    const spotlightScale = useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]);

    // 단계별 등장
    const [stage, setStage] = useState(0);

    useEffect(() => {
        if (isInView && stage === 0) {
            setStage(1);
            // 헤드라인 등장 후 0.8초 뒤 바디 텍스트
            setTimeout(() => setStage(2), 800);
            // 바디 텍스트 후 1초 뒤 핵심 문구 스크램블
            setTimeout(() => setStage(3), 2000);
        }
    }, [isInView, stage]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-32"
        >
            {/* 배경: 어두워지는 오버레이 */}
            <motion.div
                className="absolute inset-0 bg-slate-900"
                style={{ opacity: bgOpacity }}
            />

            {/* 스포트라이트 효과 */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ scale: spotlightScale }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-indigo-500/10 via-violet-500/5 to-transparent blur-3xl" />
            </motion.div>

            {/* 별빛 파티클 효과 - 최적화 */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full will-change-transform"
                        style={{
                            left: `${(i * 8.33) % 100}%`,
                            top: `${(i * 7.5 + 10) % 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2.5 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.25,
                        }}
                    />
                ))}
            </div>

            {/* 메인 콘텐츠 */}
            <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                {/* 섹션 라벨 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={stage >= 1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <SectionLabelCenter>LEGACY</SectionLabelCenter>
                </motion.div>

                {/* 헤드라인 */}
                <motion.h2
                    className="text-3xl sm:text-4xl xl:text-5xl font-black text-white break-keep tracking-tight leading-snug mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={stage >= 1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    우리가 미래 세대에게 물려줄<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                        진정한 유산
                    </span>
                </motion.h2>

                {/* 바디 텍스트 - Line by Line */}
                <div className="space-y-4 mb-12">
                    <motion.p
                        className="text-lg sm:text-xl text-slate-300 leading-relaxed break-keep"
                        initial={{ opacity: 0, y: 20 }}
                        animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        아이들이 환경에 구애받지 않고 각자의 잠재력대로 살아갈 수 있는 세상.
                    </motion.p>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-300 leading-relaxed break-keep"
                        initial={{ opacity: 0, y: 20 }}
                        animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        진정한 교육의 목적과 본질이 실현되는 그것이
                    </motion.p>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-300 leading-relaxed break-keep"
                        initial={{ opacity: 0, y: 20 }}
                        animate={stage >= 2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        우리가 다음 세대에게 주고싶은 유산이자,
                    </motion.p>
                </div>

                {/* 핵심 하이라이트: 우아한 단어별 등장 */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={stage >= 3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* 미묘한 글로우 배경 */}
                    <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 blur-2xl" />

                    {/* 메인 텍스트 박스 */}
                    <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
                        <p className="text-xl sm:text-2xl xl:text-3xl font-bold leading-relaxed break-keep">
                            {'새벽별파운데이션이 존재하는 이유입니다.'.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400"
                                    initial={{ opacity: 0 }}
                                    animate={stage >= 3 ? { opacity: 1 } : {}}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.05,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default LegacySection;
