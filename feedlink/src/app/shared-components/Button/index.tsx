'use client';
import { ReactNode } from 'react';

export default function Button({
  children,
  variant = 'primary',
  onClick,
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) {
  const base = 'px-6 py-3 rounded-full font-semibold text-base xs:text-lg min-w-[200px] shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[var(--secondary-color)] text-white hover:bg-white hover:text-orange-500 focus:ring-white',
    secondary:
      'border-2 border-[var(--secondary-color)] bg-white text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white focus:ring-[var(--secondary-color)]',
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      type="button"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </button>
  );
}