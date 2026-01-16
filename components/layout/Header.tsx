'use client';

import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';
import Button from '../ui/Button';

const NAVIGATION_ITEMS = [
  {
    label: '소개',
    dropdown: [
      { label: '미션과 비전', subtitle: 'AI로 모든 학생에게 평등한 교육 기회를', href: '/about/mission' },
      { label: '우리의 이야기', subtitle: '새벽별이 시작된 이유', href: '/about/story' },
      { label: '새벽별 선언문', subtitle: '우리가 믿는 10가지 원칙', href: '/about/manifesto' },
      { label: '우리의 약속', subtitle: '말이 아닌 행동으로 증명합니다', href: '/about/commitments' },
      { label: '함께하는 사람들', subtitle: '교육의 변화를 만들어가는 이들', href: '/about/people' },
    ],
  },
  {
    label: '우리의 활동',
    dropdown: [
      { label: '샛별 AI', subtitle: 'AI 기반 맞춤형 학습 플랫폼', href: 'https://korean-khanmigo.vercel.app', external: true },
    ],
  },
  {
    label: '함께하기',
    dropdown: [
      { label: '참여하기', subtitle: '교육 평등을 위한 여정에 함께해주세요', href: '/get-involved' },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnDarkBg, setIsOnDarkBg] = useState(true); // Start true for home page hero
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll effect and dark background detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Check if we're on the home page dark hero (approx first 1.5 screens)
      // Hero section in home is about 200vh on desktop
      const heroHeight = window.innerHeight * 1.5;
      const isHomePage = window.location.pathname === '/';
      setIsOnDarkBg(isHomePage && scrollY < heroHeight);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  }, []);

  const handleDropdownClick = useCallback(() => {
    setOpenDropdown(null);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isOnDarkBg && !isScrolled
          ? 'bg-transparent' // Transparent on dark hero
          : isScrolled
            ? 'liquid-glass-header'
            : 'liquid-glass-header-initial'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className={cn(
              "text-lg font-black tracking-tight transition-colors duration-300",
              isOnDarkBg && !isScrolled ? "text-white" : "text-slate-900"
            )}>
              새벽별 파운데이션
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1",
                    isOnDarkBg && !isScrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  )}
                  aria-label={`${item.label} 메뉴 열기`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label ? "true" : "false"}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-0 mt-2 w-72 liquid-glass-dropdown rounded-2xl py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      role="menu"
                      aria-label={`${item.label} 하위 메뉴`}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        'external' in dropdownItem && dropdownItem.external ? (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-indigo-50/80 transition-all duration-200 rounded-xl mx-1"
                            onClick={handleDropdownClick}
                            role="menuitem"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1">
                                <span className="font-semibold text-slate-900">{dropdownItem.label}</span>
                                <ExternalLink className="w-3 h-3 text-slate-400" />
                              </div>
                              {'subtitle' in dropdownItem && (
                                <p className="text-xs text-slate-500 truncate">{dropdownItem.subtitle}</p>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 px-4 py-3 text-sm hover:bg-slate-50 transition-all duration-200 rounded-xl mx-1 group"
                            onClick={handleDropdownClick}
                            role="menuitem"
                          >
                            <div className="flex-1">
                              <span className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{dropdownItem.label}</span>
                              {'subtitle' in dropdownItem && (
                                <p className="text-xs text-slate-500 mt-0.5">{dropdownItem.subtitle}</p>
                              )}
                            </div>
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className={cn(
                "font-semibold px-6 transition-colors cursor-not-allowed opacity-75",
                isOnDarkBg && !isScrolled
                  ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              )}
              aria-label="새벽별 파운데이션 후원하기 (준비 중)"
              disabled
            >
              <Heart className="mr-2 w-4 h-4" />
              후원하기 (준비 중)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isOnDarkBg && !isScrolled ? "hover:bg-white/10" : "hover:bg-slate-100"
            )}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isOnDarkBg && !isScrolled ? "text-white" : "text-slate-700")} />
            ) : (
              <Menu className={cn("w-6 h-6", isOnDarkBg && !isScrolled ? "text-white" : "text-slate-700")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-all"
                        aria-expanded={mobileOpenDropdown === item.label}
                        aria-label={`${item.label} 메뉴 ${mobileOpenDropdown === item.label ? '닫기' : '열기'}`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-1 ml-4 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              'external' in dropdownItem && dropdownItem.external ? (
                                <a
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all font-medium"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                >
                                  <span className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    {dropdownItem.label}
                                  </span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <Link
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenDropdown(null);
                                  }}
                                >
                                  {dropdownItem.label}
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full font-semibold bg-slate-900 text-white hover:bg-slate-800 cursor-not-allowed opacity-75" aria-label="새벽별 파운데이션 후원하기 (준비 중)" disabled>
                  <Heart className="mr-2 w-4 h-4" />
                  후원하기 (준비 중)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
