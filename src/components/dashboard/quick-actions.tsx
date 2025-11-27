import type { ChangeEvent } from 'react';
import { useRef } from 'react';
import { useTechnologies } from '../../hooks/use-technologies-hook';
import { Button } from '../ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

export function QuickActions() {
  const { technologies, updateTechnology, setTechnologies } = useTechnologies();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const importUnputRef = useRef<HTMLInputElement>(null);

  async function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const uploadedFile = event.target.files[0];
    const parsedUploadedFile = JSON.parse(await uploadedFile.text());
    setTechnologies(parsedUploadedFile);
  }

  function markAllCompleted() {
    technologies.forEach((item) => {
      if (item.progress !== 'completed') {
        updateTechnology(item.id, { ...item, progress: 'completed' });
      }
    });
  }

  function resetAll() {
    technologies.forEach((item) => {
      if (item.progress !== 'not-started') {
        updateTechnology(item.id, { ...item, progress: 'not-started' });
      }
    });
  }

  return (
    <>
      <Card className="p-4 lg:w-fit lg:max-w-sm max-w-full w-full">
        <CardTitle className="block mb-4">Быстрые действия</CardTitle>
        <div className="space-y-2">
          <Button type="button" className="w-full" onClick={markAllCompleted}>
            Отметить всё как выполненное
          </Button>
          <Button type="button" className="w-full" onClick={resetAll}>
            Сбросить все статусы
          </Button>
          <div className="grid grid-cols-2 gap-1">
            <input
              ref={importUnputRef}
              type="file"
              className="hidden"
              accept="application/json"
              onChange={onInputChange}
            />
            <Button
              type="button"
              className="w-full"
              onClick={() => importUnputRef.current?.click()}
            >
              Импортировать данные
            </Button>
            <Button
              type="button"
              className="w-full"
              onClick={() => dialogRef.current?.showModal()}
            >
              Экспортировать данные
            </Button>
          </div>
        </div>
      </Card>
      <dialog
        ref={dialogRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-50"
      >
        <Card className="bg-white w-sm">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="fixed top-3 right-3 cursor-pointer hover:bg-neutral-100 py-0.5 px-2 rounded-md transition-colors"
          >
            &#10005;
          </button>
          <CardHeader>
            <CardTitle>Экспорт данных</CardTitle>
            <CardDescription>
              Вы можете экспортировать текущие данные технологий в формате JSON.
            </CardDescription>
          </CardHeader>
          <div>
            <pre className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 whitespace-pre-wrap break-words">
              {JSON.stringify(technologies, null, 2)}
            </pre>
          </div>
        </Card>
      </dialog>
    </>
  );
}
