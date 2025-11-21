import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth-hook';
import { Button } from './ui/button';

export function LoginButton() {
  const { isLoggedIn, state: authState } = useAuth();

  if (!isLoggedIn || !authState) {
    return (
      <Button asChild>
        <Link to="/login">Войти в аккаунт</Link>
      </Button>
    );
  }

  return (
    <Button asChild>
      <Link to="/dashboard">{authState?.username}</Link>
    </Button>
  );
}
