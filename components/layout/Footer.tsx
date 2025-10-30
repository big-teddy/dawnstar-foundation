import { SITE_CONFIG } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const aboutLinks = [
    { label: 'Our Mission & Vision', href: '#vision' },
    { label: 'Our Story', href: '#story' },
    { label: 'The DawnStar Manifesto', href: '#manifesto' },
    { label: 'Our Commitments', href: '#commitments' },
  ];

  const workLinks = [
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Saetbyeol (AI Tutor)', href: '#what-we-do' },
  ];

  const involvedLinks = [
    { label: 'Support Us', href: '#get-involved' },
    { label: 'Partner With Us', href: '#get-involved' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              새벽별 파운데이션
            </h3>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Work</h3>
            <ul className="space-y-2">
              {workLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {involvedLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2025 새벽별 파운데이션 (DawnStar Foundation). All rights
              reserved.
              <br />
              이 재단은 비영리 교육 기술 단체입니다.
            </p>
            <p className="text-slate-500 text-sm">
              Made with ❤️ for education equality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
