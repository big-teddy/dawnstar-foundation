'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote } from 'lucide-react';

// ============================================
// SHARED CONTENT (from markdown spec)
// ============================================
const NARRATIVE_CONTENT = {
    headline: '교육은 아이들의 잠재력을 이끌어내는 과정입니다',
    body1: '한국의 공교육과 한국 1세대 홈스쿨러, 그리고 글로벌 교육의 현장을 두루 경험하며 배움이 가진 다양한 이면을 깊이 있게 마주했습니다. 서로 다른 교육 환경의 경계를 넘나들며 제가 확인한 본질은 단 하나였습니다.',
    coreMessage: '교육은 아이 안의 잠재력을 세상으로 이끌어내고 실현하도록 돕는 가장 순수한 과정이어야 한다는 것.',
    conclusion: '교육은 결코 경쟁의 도구나 사회적 지위를 얻기 위한 수단이 되어서는 안 됩니다.'
};

// Shared easing for cinematic feel
const CINEMATIC_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ============================================
// NARRATIVE SECTION - FULLSCREEN PIN
// 풀스크린 고정 + 스크롤에 따른 하이라이트 + 단어 등장 효과
// ============================================
export function NarrativeSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.3) setActiveIndex(0);
        else if (latest < 0.6) setActiveIndex(1);
        else setActiveIndex(2);
    });

    // Background gradient opacity shifts
    const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.6]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    // Core message words for reveal effect
    const coreMessageWords = NARRATIVE_CONTENT.coreMessage.split(' ');

    return (
        <section ref={sectionRef} className="h-[300vh] relative">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 will-change-transform"
                    style={{ opacity: bgOpacity, scale: bgScale }}
                />

                {/* Subtle aurora orbs - optimized */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl will-change-transform"
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl will-change-transform"
                        animate={{
                            x: [0, -20, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    {/* Centered Section Label */}
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
                    >
                        <div className="h-[1px] w-8 bg-indigo-300" />
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
                            NARRATIVE
                        </span>
                        <div className="h-[1px] w-8 bg-indigo-300" />
                    </motion.div>

                    {/* Headline - Always visible */}
                    <motion.h2
                        className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 break-keep tracking-tight leading-snug mb-12 sm:mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: CINEMATIC_EASE }}
                    >
                        교육은 아이들의<br />
                        <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                            잠재력을 이끌어내는
                        </span><br />
                        과정입니다
                    </motion.h2>

                    {/* Content Blocks with Scroll Highlight */}
                    <div className="space-y-6 sm:space-y-8 text-center">

                        {/* Block 1: Origin Story */}
                        <motion.div
                            animate={{
                                opacity: activeIndex === 0 ? 1 : 0.15,
                                scale: activeIndex === 0 ? 1 : 0.97,
                                filter: activeIndex === 0 ? 'blur(0px)' : 'blur(1px)'
                            }}
                            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                            className="max-w-2xl mx-auto will-change-transform"
                        >
                            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 break-keep">
                                {NARRATIVE_CONTENT.body1}
                            </p>
                        </motion.div>

                        {/* Block 2: Core Message with Word Reveal */}
                        <motion.div
                            animate={{
                                opacity: activeIndex === 1 ? 1 : 0.15,
                                scale: activeIndex === 1 ? 1 : 0.97,
                            }}
                            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                            className="max-w-2xl mx-auto will-change-transform"
                        >
                            <div className="bg-gradient-to-br from-indigo-50/90 to-violet-50/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-indigo-100 shadow-sm">
                                <Quote className="w-6 h-6 text-indigo-300 mx-auto mb-4" />
                                <p className="text-lg sm:text-xl xl:text-2xl leading-relaxed text-slate-900 font-medium break-keep">
                                    {activeIndex === 1 ? (
                                        // Word reveal effect when active
                                        coreMessageWords.map((word, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0.3 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                                className="inline-block mr-1.5"
                                            >
                                                {word}
                                            </motion.span>
                                        ))
                                    ) : (
                                        NARRATIVE_CONTENT.coreMessage
                                    )}
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 3: Conclusion */}
                        <motion.div
                            animate={{
                                opacity: activeIndex === 2 ? 1 : 0.15,
                                scale: activeIndex === 2 ? 1 : 0.97,
                                filter: activeIndex === 2 ? 'blur(0px)' : 'blur(1px)'
                            }}
                            transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
                            className="max-w-2xl mx-auto will-change-transform"
                        >
                            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-medium break-keep">
                                {NARRATIVE_CONTENT.conclusion}
                            </p>
                        </motion.div>

                    </div>


                </div>
            </div>
        </section>
    );
}

export default NarrativeSection;
