'use client';

import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-slate-200/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <span
              className={cn(
                'text-xl font-black text-slate-900 transition-opacity',
                isScrolled ? 'opacity-100' : 'opacity-100 lg:opacity-0'
              )}
            >
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300',
                  isScrolled
                    ? 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
                    : 'text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className={cn(
                'font-semibold transition-all duration-300',
                isScrolled
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                  : 'bg-white text-slate-900 hover:bg-slate-50 shadow-md'
              )}
            >
              문의하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-slate-700' : 'text-white'
                )}
              />
            ) : (
              <Menu
                className={cn(
                  'w-6 h-6',
                  isScrolled ? 'text-slate-700' : 'text-white'
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-slate-200 shadow-xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button className="w-full font-semibold bg-indigo-600 hover:bg-indigo-700">
                문의하기
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
