import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/use-auth-hook';
import { Button } from '../components/ui/button';
import { Field, Label } from '../components/ui/form';
import { Input } from '../components/ui/input';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');

    if (!username || typeof username !== 'string') {
      // eslint-disable-next-line no-alert
      alert('Требуется указать имя пользователя.');
      return;
    }

    login(username);
    navigate('/dashboard');
  }

  return (
    <section className="w-full flex flex-col items-center justify-center gap-6">
      <form
        onSubmit={onSubmit}
        className="p-6 border border-neutral-200 rounded-xl w-sm space-y-4"
      >
        <div>
          <h1 className="text-xl font-semibold mb-0.5">Вход в аккаунт</h1>
          <p className="text-sm">Войдите в свой аккаунт, чтобы продолжить.</p>
        </div>
        <Field>
          <Label htmlFor="username">Имя пользователя</Label>
          <Input name="username" id="username" type="text" required />
        </Field>
        <Button type="submit">Авторизоваться</Button>
      </form>
    </section>
  );
}
