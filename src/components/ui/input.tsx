import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={twMerge(
        'text-sm h-9 px-3 border dark:border-neutral-800 border-neutral-200 rounded-md outline-none transition-all focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300',
        className,
      )}
    />
  );
}
