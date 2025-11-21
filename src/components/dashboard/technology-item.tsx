import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';

export function TechnologyItem() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between w-full">
        <CardTitle className="flex items-center gap-2">
          React
          <div className="text-xs font-normal px-1.5 py-0.5 border border-neutral-200 bg-red-500 rounded-full text-white">
            Не начато
          </div>
        </CardTitle>
        <button type="button" className="cursor-pointer">
          ❌
        </button>
      </div>
      <p className="text-sm text-neutral-600">Описание для технологии...</p>
      <Button type="button" className=" w-full">
        Начать изучение
      </Button>
    </Card>
  );
}
