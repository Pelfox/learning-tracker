import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function PageWrapper({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      {...props}
      className={twMerge(
        'container mx-auto max-w-5xl flex flex-col items-start justify-center mt-6',
        className,
      )}
    />
  );
}
