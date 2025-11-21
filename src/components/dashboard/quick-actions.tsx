import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';

export function QuickActions() {
  return (
    <Card className="p-4">
      <CardTitle className="block mb-4">Быстрые действия</CardTitle>
      <div className="space-y-2">
        <Button type="button" className="w-full">
          Отметить всё как выполненное
        </Button>
        <Button type="button" className="w-full">
          Сбросить все статусы
        </Button>
        <Button type="button" className="w-full">
          Экспортировать данные
        </Button>
      </div>
    </Card>
  );
}
