'use client';

import DawnstarLogo, {
  DawnstarLogoMinimal,
  DawnstarLogoGradient,
  DawnstarLogoOutlined,
  DawnstarLogoWithText
} from '@/components/logo/DawnstarLogo';
import { motion } from 'framer-motion';

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            새벽별 파운데이션 로고
          </h1>
          <p className="text-xl text-slate-600">
            6각 별표(✶)를 기반으로 한 10가지 디자인 옵션
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Default Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              1. Default (기본형)
            </h2>
            <p className="text-slate-600 mb-8">
              6각 별 모양의 클래식한 디자인. 심플하면서도 전문적인 느낌.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="default" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="default" size={80} className="[&_path]:fill-white" />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="default" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Minimal Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              2. Minimal (미니멀)
            </h2>
            <p className="text-slate-600 mb-8">
              가장 단순한 형태의 6각 별. 현대적이고 깔끔한 느낌.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoMinimal size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoMinimal size={80} className="[&_path]:fill-white" />
                </div>
                <span className="text-sm text-slate-500">컬러 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="minimal" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Gradient Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              3. Gradient (그라디언트)
            </h2>
            <p className="text-slate-600 mb-8">
              겹쳐진 두 삼각형에 블루-퍼플 그라디언트. 새벽의 느낌을 표현한 화려한 디자인.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoGradient size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoGradient size={80} />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="gradient" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Outlined Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              4. Outlined (아웃라인)
            </h2>
            <p className="text-slate-600 mb-8">
              얇은 선으로 된 6각 별 외곽선과 중앙의 빛나는 코어. 섬세하고 우아한 느낌.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoOutlined size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoOutlined size={80} className="[&_path]:stroke-white [&_circle]:fill-blue-400" />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="outlined" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* David Star Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              5. David Star (헥사그램)
            </h2>
            <p className="text-slate-600 mb-8">
              겹쳐진 두 삼각형으로 이루어진 클래식 헥사그램. 균형과 조화를 상징.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="davidStar" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="davidStar" size={80} className="[&_path]:fill-white" />
                </div>
                <span className="text-sm text-slate-500">컬러 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="davidStar" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Burst Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              6. Burst (버스트)
            </h2>
            <p className="text-slate-600 mb-8">
              6개 방향으로 뻗어나가는 빛줄기. 새벽별의 빛을 역동적으로 표현.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="burst" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="burst" size={80} />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="burst" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Geometric Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              7. Geometric (기하학)
            </h2>
            <p className="text-slate-600 mb-8">
              중앙의 육각형과 6개의 삼각형 포인트. 기하학적이고 현대적인 디자인.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="geometric" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="geometric" size={80} className="[&_path:first-child]:fill-white [&_path:not(:first-child)]:fill-cyan-200" />
                </div>
                <span className="text-sm text-slate-500">컬러 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="geometric" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Modern Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              8. Modern (모던)
            </h2>
            <p className="text-slate-600 mb-8">
              3D 스타일의 겹친 삼각형. 현대적이고 세련된 느낌의 디자인.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="modern" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="modern" size={80} />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="modern" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Dotted Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              9. Dotted (점선)
            </h2>
            <p className="text-slate-600 mb-8">
              점선 외곽선과 6개의 코너 점. 섬세하고 창의적인 디자인.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="dotted" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="dotted" size={80} className="[&_path]:stroke-white [&_circle]:fill-white" />
                </div>
                <span className="text-sm text-slate-500">컬러 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="dotted" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Dual Variant */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              10. Dual (듀얼톤)
            </h2>
            <p className="text-slate-600 mb-8">
              듀얼톤 그라디언트의 헥사그램. 조화롭고 고급스러운 느낌.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="dual" size={80} />
                </div>
                <span className="text-sm text-slate-500">아이콘 단독</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-900 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogo variant="dual" size={80} />
                </div>
                <span className="text-sm text-slate-500">어두운 배경</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-slate-50 rounded-2xl p-8 w-full flex items-center justify-center">
                  <DawnstarLogoWithText variant="dual" size={60} />
                </div>
                <span className="text-sm text-slate-500">텍스트 포함</span>
              </div>
            </div>
          </motion.div>

          {/* Size Variations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-apple"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              5. 크기 변형 (Minimal 버전)
            </h2>
            <div className="flex items-end justify-center gap-8 bg-slate-50 rounded-2xl p-12">
              <div className="flex flex-col items-center gap-2">
                <DawnstarLogoMinimal size={24} />
                <span className="text-xs text-slate-500">24px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DawnstarLogoMinimal size={32} />
                <span className="text-xs text-slate-500">32px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DawnstarLogoMinimal size={48} />
                <span className="text-xs text-slate-500">48px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DawnstarLogoMinimal size={64} />
                <span className="text-xs text-slate-500">64px</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DawnstarLogoMinimal size={96} />
                <span className="text-xs text-slate-500">96px</span>
              </div>
            </div>
          </motion.div>

          {/* Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-10"
          >
            <h2 className="text-2xl font-bold mb-6">사용 추천</h2>
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div>
                <p className="mb-2">
                  <strong className="text-white">헤더/네비게이션:</strong>
                </p>
                <p className="text-sm">Minimal, Default, Outlined (심플하고 깔끔)</p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">히어로 섹션:</strong>
                </p>
                <p className="text-sm">Gradient, Dual, Modern (임팩트 있고 화려함)</p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">파비콘:</strong>
                </p>
                <p className="text-sm">Minimal, David Star (작은 크기에서도 선명)</p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">인쇄물/공식 문서:</strong>
                </p>
                <p className="text-sm">Outlined, Dotted, Geometric (고급스럽고 전문적)</p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">앱 아이콘:</strong>
                </p>
                <p className="text-sm">Burst, Geometric (눈에 띄고 독특함)</p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-white">소셜 미디어:</strong>
                </p>
                <p className="text-sm">Gradient, Dual, Modern (화려하고 현대적)</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>모든 로고는 SVG 형식으로 제작되어 어떤 크기에서도 선명합니다</p>
        </div>
      </div>
    </div>
  );
}
