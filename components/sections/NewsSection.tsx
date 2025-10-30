import { BLOG_POSTS } from '@/lib/constants';
import { ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function NewsSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                최신 소식
              </h2>
              <p className="text-lg text-slate-600">
                새벽별 파운데이션의 활동과 교육 기술 인사이트
              </p>
            </div>
            <a
              href="/blog"
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
            >
              전체 보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <ScrollReveal key={post.title} delay={index * 0.2}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                    더 읽기
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            전체 보기
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
