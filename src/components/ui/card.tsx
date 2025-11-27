import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        'p-6 border dark:border-neutral-800 border-neutral-200 rounded-xl space-y-4 max-w-sm dark:bg-neutral-900 bg-white',
        className,
      )}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={twMerge('space-y-1', className)} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={twMerge(
        'text-xl font-semibold mb-0.5 dark:text-white',
        className,
      )}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={twMerge('text-sm dark:text-neutral-300', className)}
    />
  );
}
