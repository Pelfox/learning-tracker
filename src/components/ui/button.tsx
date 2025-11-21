import type { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      {...props}
      className={twMerge(
        'text-sm bg-cyan-500 py-1.5 px-3 rounded-md text-white hover:bg-cyan-600 cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-cyan-300',
        className,
      )}
    />
  );
}
