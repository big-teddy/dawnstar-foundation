'use client';

import { ReactNode } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({
  children,
  className = ''
}: BrowserFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Minimal window chrome - very subtle */}
      <div className="absolute inset-0 rounded-xl border border-black/10 pointer-events-none z-10" />

      {/* Top bar - minimal macOS style */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white/80 backdrop-blur-sm rounded-t-xl border-b border-black/5 flex items-center px-3 z-20">
        {/* Traffic lights - smaller and more subtle */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
      </div>

      {/* Content with shadow */}
      <div className="relative rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden bg-white">
        {/* Padding for top bar */}
        <div className="pt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
