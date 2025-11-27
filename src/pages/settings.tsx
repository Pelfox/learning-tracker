import type { FormEvent } from 'react';
import { useState } from 'react';
import { PageWrapper } from '../components/page-wrapper';
import { ProtectedPage } from '../components/protected-page';
import { Button } from '../components/ui/button';
import { Field, Label } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { useAuth } from '../hooks/use-auth-hook';

export function SettingsPage() {
  const { state, update } = useAuth();
  const [isDarkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  function handleThemeChange() {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    localStorage.setItem('theme', newDarkTheme ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', newDarkTheme);
    window.dispatchEvent(new CustomEvent('themeChange'));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');

    if (!username || typeof username !== 'string') {
      // eslint-disable-next-line no-alert
      alert('Требуется указать имя пользователя.');
      return;
    }

    update(username);
    // eslint-disable-next-line no-alert
    alert('Настройки успешно сохранены.');
  }

  return (
    <PageWrapper>
      <ProtectedPage>
        <div className="w-full">
          <h1 className="text-xl font-semibold leading-tight">Настройки</h1>
          <div className="mt-4">
            <form onSubmit={onSubmit} className="space-y-4">
              <Field className="flex items-start">
                <Label>Тёмная тема</Label>
                <input
                  type="checkbox"
                  onChange={handleThemeChange}
                  checked={isDarkTheme}
                />
              </Field>
              <Field>
                <Label>Имя пользователя</Label>
                <Input
                  name="username"
                  defaultValue={state?.username ?? ''}
                  className="w-full"
                  placeholder="Иванов Иван"
                />
              </Field>
              <Button type="submit">Сохранить изменения</Button>
            </form>
          </div>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
