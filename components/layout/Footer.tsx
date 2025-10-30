import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { Github, Linkedin, Sparkles, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">문의</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="text-sm">{SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 {SITE_CONFIG.name} {SITE_CONFIG.nameEn}. All rights
              reserved.
              <br />
              이 재단은 비영리 교육 기술 단체입니다.
            </p>
            <p className="text-slate-400 text-sm">
              Made with ❤️ for education equality
            </p>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="mt-8 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
      </div>
    </footer>
  );
}
