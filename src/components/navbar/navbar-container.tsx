import type { PropsWithChildren } from 'react';

export function NavbarContainer({ children }: PropsWithChildren) {
  return (
    <nav className="lg:px-0 px-4 py-3 border-b border-b-neutral-200 dark:border-b-neutral-800">
      <div className="container mx-auto max-w-5xl lg:flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
}
