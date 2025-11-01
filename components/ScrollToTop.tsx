'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Also use scrollTo with behavior option as fallback
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });

    // Additional fallback for document element
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
