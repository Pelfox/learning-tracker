import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../components/page-wrapper';
import { Button } from '../components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Field, Label } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useAuth } from '../hooks/use-auth-hook';

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
    <PageWrapper className="flex-1 mt-0">
      <section className="w-full flex flex-col items-center justify-center gap-6">
        <form onSubmit={onSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Вход в аккаунт</CardTitle>
              <CardDescription>
                Войдите в свой аккаунт, чтобы продолжить.
              </CardDescription>
            </CardHeader>
            <Field>
              <Label htmlFor="username">Имя пользователя</Label>
              <Input name="username" id="username" type="text" required />
            </Field>
            <Button type="submit">Авторизоваться</Button>
          </Card>
        </form>
      </section>
    </PageWrapper>
  );
}
