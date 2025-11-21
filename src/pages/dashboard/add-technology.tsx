import type { FormEvent } from 'react';
import { useRef } from 'react';
import { PageWrapper } from '../../components/page-wrapper';
import { ProtectedPage } from '../../components/protected-page';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Field, Label } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { useTechnologies } from '../../hooks/use-technologies-hook';

export function AddTechnologyPage() {
  const { createTechnology } = useTechnologies();
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const id = formData.get('id');
    const title = formData.get('title');
    const description = formData.get('description');

    if (
      !id ||
      typeof id !== 'string' ||
      !title ||
      typeof title !== 'string' ||
      !description ||
      typeof description !== 'string'
    ) {
      // eslint-disable-next-line no-alert
      alert('Пожалуйста, заполните все поля формы корректно.');
      return;
    }

    createTechnology({
      id,
      title,
      description,
      progress: 'not-started',
      comments: [],
    });
    formRef.current?.reset();
    // eslint-disable-next-line no-alert
    alert('Технология успешно добавлена!');
  }

  return (
    <PageWrapper>
      <ProtectedPage>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-semibold leading-tight">
            Добавление технологии
          </h1>
          <Card className="w-full">
            <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
              <Field>
                <Label htmlFor="id">ID технологии</Label>
                <Input
                  name="id"
                  id="id"
                  type="text"
                  placeholder="nodejs"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="title">Название технологии</Label>
                <Input
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Node.js"
                  required
                />
              </Field>
              <Field>
                <Label htmlFor="description">Описание технологии</Label>
                <Input
                  name="description"
                  id="description"
                  type="text"
                  placeholder="Какое-то описание технологии..."
                  required
                />
              </Field>
              <Button type="submit" className="w-full">
                Добавить технологию
              </Button>
            </form>
          </Card>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
