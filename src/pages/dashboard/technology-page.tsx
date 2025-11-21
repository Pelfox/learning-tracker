import type { FormEvent } from 'react';
import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { renderProgressBadge } from '../../components/dashboard/technology-item';
import { PageWrapper } from '../../components/page-wrapper';
import { ProtectedPage } from '../../components/protected-page';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { useTechnologies } from '../../hooks/use-technologies-hook';

export function TechnologyPage() {
  const params = useParams();
  const { technologies, updateTechnology } = useTechnologies();

  const formRef = useRef<HTMLFormElement>(null);
  const technology = technologies.find((tech) => tech.id === params.id);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comment = formData.get('comment');

    if (!comment || typeof comment !== 'string') {
      // eslint-disable-next-line no-alert
      alert('Пожалуйста, введите корректный текст заметки.');
      return;
    }

    updateTechnology(technology!.id, {
      ...technology!,
      comments: [...technology!.comments, comment],
    });
    // eslint-disable-next-line no-alert
    alert('Заметка успешно добавлена!');
    formRef.current?.reset();
  }

  if (!technology) {
    return (
      <PageWrapper>
        <ProtectedPage>
          <div className="flex items-center justify-center w-full flex-col space-y-3">
            <p className="font-semibold">Технология не найдена.</p>
            <Link
              to="/technologies"
              className="text-sm text-blue-600 hover:underline underline-offset-4"
            >
              &larr; Назад к списку технологий
            </Link>
          </div>
        </ProtectedPage>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ProtectedPage>
        <div className="mb-4">
          <Link
            to="/technologies"
            className="text-sm text-blue-600 hover:underline underline-offset-4"
          >
            &larr; Назад к списку технологий
          </Link>
          <h1 className="mt-2 text-2xl font-bold">{technology.title}</h1>
        </div>
        <Card className="max-w-screen w-full">
          <div>
            <span className="text-sm font-bold text-neutral-500 tracking-tight block mb-0.5">
              ID
            </span>
            <p>{technology.id}</p>
          </div>
          <div>
            <span className="text-sm font-bold text-neutral-500 tracking-tight block mb-0.5">
              Статус
            </span>
            <div className="w-fit">
              {renderProgressBadge(technology.progress)}
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-neutral-500 tracking-tight block mb-0.5">
              Описание технологии
            </span>
            <p>{technology.description}</p>
          </div>
          <div>
            <span className="text-sm font-bold text-neutral-500 tracking-tight block mb-0.5">
              Заметки
            </span>
            {technology.comments.length === 0 && <p>Нет заметок.</p>}
            <div className="flex flex-col gap-2 mt-1">
              {technology.comments.map((comment, index) => (
                <div
                  key={index}
                  className="border border-neutral-200 rounded-md h-9 flex items-center px-3"
                >
                  <span>{comment}</span>
                </div>
              ))}
            </div>
          </div>
          <form ref={formRef} onSubmit={onSubmit} className="space-y-2">
            <Input
              type="text"
              placeholder="Текст заметки..."
              className="w-full"
              name="comment"
            />
            <Button type="submit">Добавить заметку</Button>
          </form>
        </Card>
      </ProtectedPage>
    </PageWrapper>
  );
}
