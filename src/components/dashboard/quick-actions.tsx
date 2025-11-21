import { useTechnologies } from '../../hooks/use-technologies-hook';
import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';

export function QuickActions() {
  const { technologies, updateTechnology } = useTechnologies();

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
    <Card className="p-4">
      <CardTitle className="block mb-4">Быстрые действия</CardTitle>
      <div className="space-y-2">
        <Button type="button" className="w-full" onClick={markAllCompleted}>
          Отметить всё как выполненное
        </Button>
        <Button type="button" className="w-full" onClick={resetAll}>
          Сбросить все статусы
        </Button>
        <Button type="button" className="w-full">
          Экспортировать данные
        </Button>
      </div>
    </Card>
  );
}
