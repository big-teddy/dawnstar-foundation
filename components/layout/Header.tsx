'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronDown, Heart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';

const NAVIGATION_ITEMS = [
  {
    label: '소개',
    href: '/about',
    dropdown: [
      { label: '미션과 비전', href: '/about/mission' },
      { label: '우리의 이야기', href: '/about/story' },
      { label: '새벽별 선언문', href: '/about/manifesto' },
      { label: '우리의 약속', href: '/about/commitments' },
    ],
  },
  {
    label: '우리의 활동',
    href: '/work/students',
    dropdown: [
      { label: '샛별 (학생)', href: '/work/students' },
      { label: '샛별 (선생님)', href: '/work/teachers' },
      { label: '샛별 (부모)', href: '/work/parents' },
    ],
  },
  {
    label: '함께하기',
    href: '/get-involved',
    dropdown: [
      { label: '후원하기', href: '/get-involved#support' },
      { label: '파트너십', href: '/get-involved#partner' },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
    setCloseTimeout(timeout);
  };

  const handleDropdownClick = () => {
    setOpenDropdown(null);
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-sm border-b border-slate-200/50'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/30'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-lg font-black text-slate-900 tracking-tight">
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
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg transition-colors duration-200 hover:bg-slate-50 flex items-center gap-1"
                  aria-label={item.dropdown ? `${item.label} 메뉴 열기` : item.label}
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={item.dropdown && openDropdown === item.label ? "true" : "false"}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    role="menu"
                    aria-label={`${item.label} 하위 메뉴`}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg mx-1"
                        onClick={handleDropdownClick}
                        role="menuitem"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/get-involved">
              <Button
                size="sm"
                className="font-semibold bg-slate-900 text-white px-6 hover:bg-slate-800 transition-colors"
                aria-label="새벽별 파운데이션 후원하기"
              >
                <Heart className="mr-2 w-4 h-4" />
                후원하기
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
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
          className="md:hidden bg-white border-t border-slate-200 shadow-lg"
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
                    {mobileOpenDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-1 ml-4 space-y-1"
                      >
                        {item.dropdown.map((dropdownItem) => (
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
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/get-involved">
                <Button className="w-full font-semibold bg-slate-900 text-white hover:bg-slate-800" aria-label="새벽별 파운데이션 후원하기">
                  <Heart className="mr-2 w-4 h-4" />
                  후원하기
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
