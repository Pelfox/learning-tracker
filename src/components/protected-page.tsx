import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth-hook';
import { Button } from './ui/button';

export function ProtectedPage({ children }: PropsWithChildren) {
  const { isLoggedIn, state } = useAuth();

  if (!isLoggedIn || !state) {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex flex-col items-center justify-center space-y-4">
        <span className="block text-4xl">🛑</span>
        <div className="space-y-1.5 text-center">
          <h1 className="text-3xl font-semibold leading-tight">
            Требуется вход
          </h1>
          <p>Для просмотра этой страницы войдите в свой аккаунт.</p>
        </div>
        <Button asChild>
          <Link to="/login">Войти в аккаунт</Link>
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
