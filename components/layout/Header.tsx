'use client';

import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Menu, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  isScrolled ? 'text-slate-700' : 'text-white'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#support"
              className={cn(
                'text-sm font-medium hover:text-blue-600 transition-colors',
                isScrolled ? 'text-slate-700' : 'text-white'
              )}
            >
              후원하기
            </a>
            <Button size="sm" variant="gradient">
              문의하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isScrolled ? 'text-slate-700' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled ? 'text-slate-700' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <a
                href="#support"
                className="block text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                후원하기
              </a>
              <Button className="w-full" size="sm" variant="gradient">
                문의하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
