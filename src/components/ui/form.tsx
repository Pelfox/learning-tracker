import type { HTMLAttributes, LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export function Field({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={twMerge('flex flex-col gap-1', className)} />
  );
}

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className={twMerge('text-sm font-medium text-neutral-700', className)}
    />
  );
}
