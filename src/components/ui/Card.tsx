// src/components/ui/Card.tsx

'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700',
      glass: 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50',
      gradient: 'bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 border border-violet-500/20',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-slate-900/30',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
