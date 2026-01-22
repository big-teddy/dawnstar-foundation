'use client';

import { motion, useScroll, useTransform, AnimatePresence, useInView, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Quote, X, Globe, Zap, Sparkles, icons } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { allMembers, founder, boardMembers, teamMembers, partners, TeamMember } from './story.data';
import { NarrativeSection } from './NarrativeVariants';
import { LegacySection } from './LegacySection';

// ============================================
// ANIMATION VARIANTS
// ============================================

const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

// ============================================
// COMPONENTS
// ============================================

function SectionLabelCenter({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mb-8 text-center"
        >
            <div className="h-[1px] w-8 bg-indigo-300" />
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
                {children}
            </span>
            <div className="h-[1px] w-8 bg-indigo-300" />
        </motion.div>
    );
}

function SectionLabelLeft({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
        >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
                {children}
            </span>
            <div className="h-[1px] w-12 bg-indigo-300" />
        </motion.div>
    );
}

function MemberCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
    return (
        <motion.div
            layoutId={`card-${member.id}`}
            onClick={onClick}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="cursor-pointer group w-full max-w-sm"
        >
            <div className="h-full bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Placeholder */}
                <motion.div layoutId={`image-${member.id}`} className={`relative z-10 w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl font-bold ${member.imageColor} shrink-0`}>
                    {member.name.charAt(0)}
                </motion.div>

                {/* Content */}
                <motion.h3 layoutId={`title-${member.id}`} className="relative z-10 text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                </motion.h3>
                <motion.p layoutId={`role-${member.id}`} className="relative z-10 text-xs text-indigo-600 font-bold uppercase tracking-wider">
                    {member.roleEn}
                </motion.p>
            </div>
        </motion.div>
    );
}

function PartnerCard({ member }: { member: TeamMember }) {
    return (
        <div className="h-28 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 flex flex-col items-center justify-center relative overflow-hidden px-4 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white/60">
            <span className={`text-2xl font-bold text-slate-400/70`}>
                {member.name.charAt(0)}
            </span>
            <h3 className="text-sm font-bold text-slate-500 text-center break-keep mt-2">
                {member.name}
            </h3>
        </div>
    );
}


function JourneyClassic() {
    return (
        <section className="py-32 sm:py-40 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT: Sticky Headline */}
                    <motion.div
                        className="lg:col-span-5 lg:sticky lg:top-32"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <SectionLabelLeft>NARRATIVE</SectionLabelLeft>
                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 break-keep tracking-tight leading-tight">
                            교육은 아이들의<br />
                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                잠재력을 이끌어내는
                            </span><br />
                            과정입니다
                        </h2>
                    </motion.div>

                    {/* RIGHT: Content Stream */}
                    <div className="lg:col-span-7 space-y-12 lg:space-y-16">

                        {/* Block 1: The Origin Journey */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        >
                            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 break-keep">
                                초등학교 5학년, 저는 학교를 떠나 한국의 1세대 홈스쿨러가 되었습니다. 이후 미국에서 대학 생활을 하며 한국의 공교육과 대안 교육, 그리고 글로벌 교육의 현장을 두루 경험하며 배움이 가진 다양한 이면을 깊이 있게 마주했습니다.
                            </p>
                        </motion.div>

                        {/* Block 2: The Revelation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 break-keep">
                                서로 다른 교육 환경의 경계를 넘나들며 제가 확인한 본질은 단 하나였습니다.{' '}
                                <strong className="text-slate-900 font-bold">
                                    교육은 아이 안의 잠재력을 세상으로 이끌어내고 실현하도록 돕는 가장 순수한 과정이어야 한다는 것.
                                </strong>{' '}
                                교육은 결코 경쟁의 도구나 사회적 지위를 얻기 위한 수단이 되어서는 안 됩니다.
                            </p>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    )
}

// ============================================
// MAIN CLIENT COMPONENT
// ============================================

export default function StoryContent() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    // Modal State
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedMember = allMembers.find(m => m.id === selectedId);

    useEffect(() => {
        if (selectedId) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedId]);


    // ============================================
    // TYPOGRAPHY & STYLE
    // ============================================
    // Consistent Typography Constants across sections
    const SECTION_TITLE_CLASS = "text-3xl sm:text-5xl font-black mb-8 leading-tight text-slate-900 word-keep tracking-tight";
    const BODY_TEXT_CLASS = "text-lg sm:text-xl leading-relaxed text-slate-600 break-keep";
    const GLASS_BOX_CLASS = "p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm";

    // ============================================
    // INSIGHT SCROLL LOGIC
    // ============================================
    const insightSectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress: insightProgress } = useScroll({
        target: insightSectionRef,
        offset: ['start start', 'end end']
    });

    const [activeInsightIndex, setActiveInsightIndex] = useState(0);

    useMotionValueEvent(insightProgress, "change", (latest) => {
        if (latest < 0.35) {
            setActiveInsightIndex(0);
        } else if (latest < 0.70) {
            setActiveInsightIndex(1);
        } else {
            setActiveInsightIndex(2);
        }
    });


    return (
        <main ref={containerRef} className="min-h-screen aurora-bg aurora-start-indigo">
            <div className="aurora-container">
                <div className="aurora-gradient opacity-80" />
            </div>
            <div className="aurora-overlay" />

            <div className="aurora-content relative z-10">

                {/* =========================================
             1. HERO SECTION (Center)
             ========================================= */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    <motion.div
                        style={{ opacity: heroOpacity, scale: heroScale }}
                        className="container-apple text-center py-32 px-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <SectionLabelCenter>OUR STORY</SectionLabelCenter>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 mx-auto max-w-5xl leading-tight">
                                “나는 미래 세대에게<br />
                                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                    어떤 유산을 물려줄 것인가?”
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium break-keep">
                                새벽별 파운데이션은 청소년 시절 스스로 던진 이 질문에서 시작되었습니다.<br className="hidden sm:block" />
                                제도권 안팎의 독특한 교육을 경험하며 마주한 한사람의 소명이자,<br className="hidden sm:block" />
                                교육의 본질을 되찾아 미래세대에게 전하고자 하는 여정입니다.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* =========================================
             2. NARRATIVE SECTION (Fullscreen Pin - Final)
             ========================================= */}

                <NarrativeSection />


                {/* =========================================
             3. INSIGHT (PINNED SCROLLYTELLING)
             * Layout: Fixed Full Screen (sticky)
             * Interaction: Scroll triggers active state of text items
             ========================================= */}
                <section ref={insightSectionRef} className="h-[200vh] relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        <div className="max-w-6xl mx-auto w-full px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">

                                {/* LEFT: Title Anchor (Col 2-6) */}
                                <div className="lg:col-start-2 lg:col-span-5 relative hidden lg:block">
                                    <div className="flex flex-col justify-start">
                                        <SectionLabelLeft>INSIGHT</SectionLabelLeft>
                                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black mb-0 leading-tight text-slate-900 word-keep tracking-tight">
                                            낡은 관성을 허무는<br />
                                            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                                혁신의 열쇠, AI
                                            </span>
                                        </h2>
                                    </div>
                                </div>

                                {/* MOBILE HEADER */}
                                <div className="lg:hidden col-span-1 mb-8">
                                    <SectionLabelLeft>INSIGHT</SectionLabelLeft>
                                    <h2 className={SECTION_TITLE_CLASS}>
                                        낡은 관성을 허무는<br />
                                        <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                                            혁신의 열쇠, AI
                                        </span>
                                    </h2>
                                </div>


                                {/* RIGHT: Fixed Text Stream (Col 7-12) */}
                                {/* Static Position, but highlight changes */}
                                <div className="lg:col-start-7 lg:col-span-6 flex flex-col relative z-10 pt-24 sm:pt-0 lg:mt-14 space-y-6">

                                    <InsightFixedItem
                                        isActive={activeInsightIndex === 0}
                                        text={<span>세상의 기술이 정점을 향해 질주하는 동안에도<br /> <strong className="">교육은 200년 넘은 낡은 시스템</strong>에 여전히 머물러 있습니다.</span>}
                                    />

                                    <InsightFixedItem
                                        isActive={activeInsightIndex === 1}
                                        text={<span>우리는 이 시스템을 혁신하기 위한<br /> <strong className="">첫 단추로 AI 기술에 주목</strong>했습니다.</span>}
                                    />

                                    <InsightFixedItem
                                        isActive={activeInsightIndex === 2}
                                        text={<span>AI는 단순히 지식을 전달하는 도구가 아니라,<br /> <strong className="">모든 학생이 자신만의 속도로 빛날 수 있게 돕는</strong><br /> 가장 강력한 조력자가 될 것입니다.</span>}
                                    />

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================================
             4. LEGACY (Cinematic - Impact)
             ========================================= */}
                <LegacySection />

                {/* =========================================
             5. OUR PEOPLE (Center Grid)
             ========================================= */}
                <section className="py-32 sm:py-40 px-6 bg-slate-50/50 backdrop-blur-sm">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-20">
                            <SectionLabelCenter>OUR PEOPLE</SectionLabelCenter>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6"
                            >
                                함께 변화를 만드는 사람들
                            </motion.h2>
                        </div>
                        <div className="flex flex-col gap-28">
                            <div className="flex flex-col items-center gap-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Founder</h3>
                                <MemberCard member={founder} onClick={() => setSelectedId(founder.id)} />
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Board & Advisors</h3>
                                <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
                                    {boardMembers.map(member => (
                                        <MemberCard key={member.id} member={member} onClick={() => setSelectedId(member.id)} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Team DawnStar</h3>
                                <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
                                    {teamMembers.map(member => (
                                        <MemberCard key={member.id} member={member} onClick={() => setSelectedId(member.id)} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Partners</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
                                    {partners.map(member => (
                                        <PartnerCard key={member.id} member={member} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="relative py-32 overflow-hidden bg-slate-900 text-white text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950" />
                    <div className="relative z-10 px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                                함께 만들어가는 미래
                            </h2>
                            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed break-keep">
                                여러분의 참여가 아이들의 내일을 바꿉니다.<br className="hidden sm:block" />
                                새벽별 파운데이션과 함께 교육 혁신의 여정에 동참해주세요.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/get-involved"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-full hover:bg-indigo-50 transition-colors"
                                >
                                    함께하기
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/about/manifesto"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/20 transition-colors"
                                >
                                    선언문 읽기
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* ============================================
          MODAL (Common)
      ============================================ */}
            <AnimatePresence>
                {selectedId && selectedMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:px-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="w-full sm:w-auto max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden relative shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] flex flex-col sm:m-0"
                            style={{ borderRadius: "24px 24px 0 0" }}
                        >
                            <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-20"><X className="w-5 h-5 text-slate-600" /></button>
                            <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar bg-white">
                                <div className="flex flex-col items-center text-center mb-8">
                                    <motion.div layoutId={`image-${selectedId}`} className={`w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl font-bold ${selectedMember.imageColor} shrink-0`}>{selectedMember.name.charAt(0)}</motion.div>
                                    <motion.h3 layoutId={`title-${selectedId}`} className="text-3xl font-bold text-slate-900 mb-1">{selectedMember.name}</motion.h3>
                                    <motion.p layoutId={`role-${selectedId}`} className="text-sm text-indigo-600 font-bold uppercase tracking-wider">{selectedMember.roleEn}</motion.p>
                                </div>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
                                    {selectedMember.details.length > 0 && <div className="space-y-4">{selectedMember.details.map((block, idx) => (
                                        <div key={idx}> {block.type === 'heading' && <h4 className="text-lg font-bold text-slate-900 mt-4">{block.text}</h4>} {block.type === 'paragraph' && <p className="text-slate-600 text-sm">{block.text}</p>} {block.type === 'list' && Array.isArray(block.text) && <ul className="space-y-2">{block.text.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-600 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" /><span>{item}</span></li>))}</ul>} </div>
                                    ))}</div>}
                                    <div className="border-t border-slate-100 my-6" />
                                    <div className="text-slate-600 leading-relaxed text-lg break-keep">{selectedMember.fullDesc}</div>
                                    {selectedMember.quote && <div className="bg-indigo-50 p-6 rounded-2xl relative mt-6"><Quote className="w-8 h-8 text-indigo-200 absolute top-4 left-4 -z-10" /><p className="text-slate-800 font-medium italic relative z-10 pl-2">"{selectedMember.quote.text}"</p>{selectedMember.quote.author && <p className="text-right text-sm text-indigo-600 font-bold mt-2">— {selectedMember.quote.author}</p>}</div>}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}



// Sub-component for Fixed Stream Item

function InsightFixedItem({ text, isActive }: { text: React.ReactNode, isActive: boolean }) {
    return (
        <div className="py-2 transition-all duration-200 ease-in-out">
            <div className="flex flex-col">
                <div className={`text-lg sm:text-xl leading-relaxed word-keep transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-400/60'}`}>
                    {text}
                </div>
            </div>
        </div>
    )
}


