import type { HTMLAttributes } from 'react';
import type { NavLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export function NavbarMenuContainer({
  className,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className={twMerge('flex text-sm gap-4', className)} />;
}

export function NavbarMenuLink({ className, ...props }: NavLinkProps) {
  return (
    <li>
      <NavLink
        {...props}
        className={({ isActive }) =>
          twMerge(
            'relative text-neutral-600 hover:text-neutral-950 transition-colors outline-none focus-visible:text-neutral-950',
            isActive &&
              'before:content-[""] before:absolute before:left-0 before:right-0 before:-bottom-1.5 before:h-0.5 before:bg-cyan-500',
          )
        }
      />
    </li>
  );
}
