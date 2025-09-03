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
  const base = 'px-6 py-2.5 rounded-full font-semibold text-base xs:text-lg min-w-[200px] shadow transition-colors duration-300';
  const styles =
    variant === 'primary'
      ? "bg-[var(--secondary-color)] text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-orange-500 transition-colors"
      : "border-2 border-[var(--secondary-color)] bg-white text-[var(--secondary-color)] font-semibold px-6 py-3 rounded-full hover:bg-[var(--secondary-color)] hover:text-white transition-colors";
  return (
    <button
      className={`${base} ${styles}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}