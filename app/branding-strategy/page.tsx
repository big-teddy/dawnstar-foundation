'use client';

import { motion } from 'framer-motion';
import DawnstarLogoProfessional, {
  PrimaryLogo,
  EducationLogo,
  FoundationLogo,
  WordmarkLogo,
  IconLogo
} from '@/components/logo/DawnstarLogoProfessional';

export default function BrandingStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 px-4">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              새벽별 파운데이션
              <br />
              브랜드 전략
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-4">
              세계 최고 브랜딩 컨설팅 회사들의 방법론을 적용한 전략적 브랜드 아이덴티티
            </p>
            <p className="text-sm text-white/60">
              Based on methodologies from Pentagram, Landor & Fitch, Interbrand, and Wolff Olins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              브랜딩 방법론
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pentagram */}
              <div className="bg-white rounded-2xl p-8 shadow-apple">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Pentagram
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Design Excellence</strong>
                  <br />
                  완벽한 기하학과 시각적 조화. 10년 이상 지속될 타임리스 디자인.
                </p>
              </div>

              {/* Landor */}
              <div className="bg-white rounded-2xl p-8 shadow-apple">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Landor & Fitch
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Holistic Brand Systems</strong>
                  <br />
                  16px 파비콘부터 빌보드까지 완벽하게 작동하는 확장 가능한 시스템.
                </p>
              </div>

              {/* Interbrand */}
              <div className="bg-white rounded-2xl p-8 shadow-apple">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Interbrand
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Brand Strength</strong>
                  <br />
                  일관성, 차별성, 진정성을 통한 강력한 브랜드 구축.
                </p>
              </div>

              {/* Wolff Olins */}
              <div className="bg-white rounded-2xl p-8 shadow-apple">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Wolff Olins
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <strong>Adaptive Identity</strong>
                  <br />
                  다양한 맥락에서 유연하게 적응하는 살아있는 아이덴티티.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Design Principles */}
      <section className="py-20 px-4">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            핵심 디자인 원칙
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mission Alignment</h3>
              <p className="text-slate-600">
                별은 희망, 안내, 평등한 기회를 상징. 새벽별처럼 어둠 속 빛이 되는 미션 반영.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Simplicity</h3>
              <p className="text-slate-600">
                깔끔한 선, 최소한의 디테일, 2-3가지 색상으로 즉각적인 인지 가능.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Memorability</h3>
              <p className="text-slate-600">
                독특한 기하학적 구조로 한 번 보면 잊을 수 없는 강력한 인상.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏳</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Longevity</h3>
              <p className="text-slate-600">
                유행을 타지 않는 타임리스 디자인. 10년 이상 사용 가능.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📐</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scalability</h3>
              <p className="text-slate-600">
                16px 파비콘부터 대형 광고판까지 모든 크기에서 완벽하게 작동.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌏</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cultural Relevance</h3>
              <p className="text-slate-600">
                한국적 미감과 글로벌 어필의 완벽한 균형.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Variants */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            전략적 로고 시스템
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            각기 다른 목적과 맥락에 최적화된 5가지 로고 변형
          </p>

          <div className="space-y-12">
            {/* PRIMARY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-apple"
            >
              <div className="flex items-start gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    1. Primary Logo
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>용도:</strong> 공식 문서, 웹사이트 헤더, 명함
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Pentagram의 design excellence 철학 적용. 완벽한 기하학과 미묘한 그라디언트로
                    프리미엄 느낌 전달. 외부 별은 모든 학생에게 다가가려는 노력, 내부 육각형은
                    견고한 파운데이션, 중앙 점은 새벽별의 빛을 상징.
                  </p>
                  <div className="flex gap-2 text-xs text-slate-400">
                    <span className="px-2 py-1 bg-slate-100 rounded">Pentagram Method</span>
                    <span className="px-2 py-1 bg-slate-100 rounded">Timeless</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <PrimaryLogo size={80} />
                    </div>
                    <span className="text-xs text-slate-500">밝은 배경</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-900 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <PrimaryLogo size={80} className="[&_path]:fill-white [&_path:nth-child(2)]:fill-slate-900 [&_circle]:fill-slate-900" />
                    </div>
                    <span className="text-xs text-slate-500">어두운 배경</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-apple"
            >
              <div className="flex items-start gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    2. Education Logo
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>용도:</strong> 교육 프로그램, 학생용 자료, SNS
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Landor의 holistic brand systems 적용. 중심에서 8방향으로 뻗어나가는
                    지식의 광선은 교육의 확산을 표현. 생동감 있는 그라디언트로 학습의 즐거움과
                    성장을 시각화. 학생들과 직접 소통하는 자료에 최적화.
                  </p>
                  <div className="flex gap-2 text-xs text-slate-400">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Landor Method</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Dynamic</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <EducationLogo size={80} />
                    </div>
                    <span className="text-xs text-slate-500">밝은 배경</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-900 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <EducationLogo size={80} />
                    </div>
                    <span className="text-xs text-slate-500">어두운 배경</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FOUNDATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-apple"
            >
              <div className="flex items-start gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    3. Foundation Logo
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>용도:</strong> 기부 캠페인, 공식 보고서, 파트너십
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Interbrand의 brand strength 프레임워크 적용. 겹쳐진 두 삼각형은
                    지지와 성장의 균형을 상징. 하단 삼각형은 견고한 재단, 상단 삼각형은
                    학생들의 꿈과 성취를 표현. 신뢰성과 전문성을 강조하는 제도적 디자인.
                  </p>
                  <div className="flex gap-2 text-xs text-slate-400">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">Interbrand Method</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">Trustworthy</span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <FoundationLogo size={80} />
                    </div>
                    <span className="text-xs text-slate-500">밝은 배경</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-900 rounded-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <FoundationLogo size={80} className="[&_path]:fill-white [&_path:nth-child(3)]:fill-slate-900 [&_path:nth-child(4)]:fill-slate-900" />
                    </div>
                    <span className="text-xs text-slate-500">어두운 배경</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WORDMARK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-apple"
            >
              <div className="flex items-start gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    4. Wordmark Logo
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>용도:</strong> 웹사이트 푸터, 이메일 서명, 프레젠테이션
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Wolff Olins의 adaptive identity 접근법 적용. 심볼과 텍스트의 조화로운 결합으로
                    완전한 브랜드 표현. 한글, 한자어, 영문 표기를 계층적으로 배치하여 글로벌
                    접근성과 한국적 정체성을 동시에 확보.
                  </p>
                  <div className="flex gap-2 text-xs text-slate-400">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Wolff Olins Method</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded">Complete</span>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
                      <WordmarkLogo size={60} />
                    </div>
                    <span className="text-xs text-slate-500">밝은 배경</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-apple"
            >
              <div className="flex items-start gap-8 flex-col md:flex-row">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    5. Icon Logo (Favicon/App Icon)
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>용도:</strong> 파비콘, 앱 아이콘, 소셜 미디어 프로필
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Landor의 scalability 원칙 적용. 16px~64px 작은 크기에 최적화.
                    내부 디테일을 제거하고 핵심 형태만 유지하여 극소 크기에서도
                    명확한 인식 가능. 모바일 퍼스트 시대의 필수 요소.
                  </p>
                  <div className="flex gap-2 text-xs text-slate-400">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded">Scalability Focus</span>
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded">Minimal</span>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center">
                      <IconLogo size={16} />
                    </div>
                    <span className="text-xs text-slate-500">16px</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
                      <IconLogo size={32} />
                    </div>
                    <span className="text-xs text-slate-500">32px</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
                      <IconLogo size={64} />
                    </div>
                    <span className="text-xs text-slate-500">64px</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Strategy */}
      <section className="py-20 px-4">
        <div className="container-apple">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            컬러 전략
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primary Colors */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Primary Colors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#1d1d1f' }}></div>
                  <div>
                    <div className="font-mono text-sm text-slate-600">#1d1d1f</div>
                    <div className="text-xs text-slate-400">Slate Black</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-slate-200"></div>
                  <div>
                    <div className="font-mono text-sm text-slate-600">#ffffff</div>
                    <div className="text-xs text-slate-400">Pure White</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                신뢰성, 전문성, 시대를 초월하는 우아함
              </p>
            </div>

            {/* Secondary Colors */}
            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Secondary Colors</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#0071e3' }}></div>
                  <div>
                    <div className="font-mono text-sm text-slate-600">#0071e3</div>
                    <div className="text-xs text-slate-400">Education Blue</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: '#5e5ce6' }}></div>
                  <div>
                    <div className="font-mono text-sm text-slate-600">#5e5ce6</div>
                    <div className="text-xs text-slate-400">Innovation Purple</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                혁신, 기술, 미래 지향적 교육
              </p>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Usage Guidelines</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>공식 문서: Primary colors만 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>교육 자료: Secondary colors 활용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>디지털: 그라디언트 허용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>인쇄물: 그라디언트 지양</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container-apple">
          <h2 className="text-4xl font-bold mb-12 text-center">
            구현 로드맵
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Phase 1 */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phase 1: 디지털 우선 (1-2주)</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Wordmark Logo를 웹사이트 헤더에 적용</li>
                      <li>• Icon Logo로 파비콘 업데이트</li>
                      <li>• Primary Logo로 SNS 프로필 통일</li>
                      <li>• Education Logo로 교육 프로그램 자료 제작</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phase 2: 인쇄물 확장 (2-4주)</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• Foundation Logo로 공식 문서 템플릿 제작</li>
                      <li>• Primary Logo로 명함, 레터헤드 디자인</li>
                      <li>• 브랜드 가이드라인 문서 완성</li>
                      <li>• 파트너사 협력 자료 업데이트</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phase 3: 통합 브랜딩 (1-2개월)</h3>
                    <ul className="space-y-2 text-white/80">
                      <li>• 전체 디지털 자산에 일관된 로고 시스템 적용</li>
                      <li>• 물리적 공간 브랜딩 (사무실, 이벤트)</li>
                      <li>• 굿즈 및 마케팅 자료 제작</li>
                      <li>• 브랜드 모니터링 및 피드백 수집</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-20 px-4">
        <div className="container-apple">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">최종 추천</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-white/90">
                세계 최고 브랜딩 컨설팅 회사들의 방법론을 종합한 결과,
                <strong className="text-white"> Primary Logo</strong>를 메인 아이덴티티로,
                <strong className="text-white"> Education Logo</strong>를 학생 대면 자료에 사용하는
                이원화 전략을 권장합니다.
              </p>
              <p className="text-white/80">
                이는 Pentagram의 타임리스 디자인, Landor의 확장 가능한 시스템,
                Interbrand의 브랜드 강도, Wolff Olins의 적응형 아이덴티티를
                모두 충족하는 최적의 솔루션입니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
