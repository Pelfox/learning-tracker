import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth-hook';
import { Button } from './ui/button';

export function LoginButton() {
  const { isLoggedIn, state: authState, logout } = useAuth();

  if (!isLoggedIn || !authState) {
    return (
      <Button asChild className="lg:w-fit w-full">
        <Link to="/login">Войти в аккаунт</Link>
      </Button>
    );
  }

  return (
    <Button onClick={() => logout()} className="lg:w-fit w-full">
      Выйти
    </Button>
  );
}
