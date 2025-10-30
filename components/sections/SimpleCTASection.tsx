'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import Button from '../ui/Button';

export default function SimpleCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-12 lg:p-16 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                함께 만드는
                <br />
                더 나은 교육의 미래
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                새벽별 파운데이션과 함께 모든 학생에게 평등한 교육 기회를
                제공하는 데 동참해주세요
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 px-8 py-4 font-semibold shadow-xl"
                >
                  <Heart className="mr-2 w-5 h-5" />
                  후원하기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 font-semibold backdrop-blur-sm"
                >
                  문의하기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
