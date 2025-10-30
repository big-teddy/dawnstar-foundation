import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
      secondary:
        'bg-white text-slate-900 hover:bg-slate-50 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl',
      outline:
        'border-2 border-white text-white hover:bg-white hover:text-slate-900 hover:scale-105 active:scale-95',
      ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
      gradient:
        'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl animate-gradient',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
