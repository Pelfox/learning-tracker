import type { HTMLAttributes } from 'react';
import type { TechnologyItem } from '../../hooks/use-technologies-hook';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useTechnologies } from '../../hooks/use-technologies-hook';
import { Button } from '../ui/button';
import { Card, CardTitle } from '../ui/card';

function ProgressBadge({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        'text-xs font-normal px-1.5 py-0.5 border border-neutral-200 rounded-full text-white',
        className,
      )}
    />
  );
}

export function renderProgressBadge(progress: TechnologyItem['progress']) {
  switch (progress) {
    case 'not-started':
      return <ProgressBadge className="bg-red-500">Не начато</ProgressBadge>;
    case 'in-progress':
      return (
        <ProgressBadge className="bg-yellow-500">В процессе</ProgressBadge>
      );
    case 'completed':
      return <ProgressBadge className="bg-green-500">Завершено</ProgressBadge>;
  }
}

function renderProgressButton(item: TechnologyItem) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { updateTechnology } = useTechnologies();

  function handleProgressClick() {
    let newProgress: TechnologyItem['progress'];
    switch (item.progress) {
      case 'not-started':
        newProgress = 'in-progress';
        break;
      case 'in-progress':
        newProgress = 'completed';
        break;
      case 'completed':
        newProgress = 'not-started';
        break;
    }
    updateTechnology(item.id, { ...item, progress: newProgress });
  }

  switch (item.progress) {
    case 'not-started':
      return <Button onClick={handleProgressClick}>Начать изучение</Button>;
    case 'in-progress':
      return <Button onClick={handleProgressClick}>Закончить изучение</Button>;
    case 'completed':
      return <Button onClick={handleProgressClick}>Изучить снова</Button>;
  }
}

export function TechnologyCard({
  id,
  title,
  description,
  progress,
  comments,
}: TechnologyItem) {
  const { deleteTechnology } = useTechnologies();

  return (
    <Card className="p-4 flex flex-col items-start justify-between">
      <div className="flex items-center justify-between w-full">
        <Link to={`/technologies/${id}`} className="w-full">
          <CardTitle className="flex items-center gap-2">
            <span>{title}</span>
            {renderProgressBadge(progress)}
          </CardTitle>
        </Link>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => deleteTechnology(id)}
        >
          ❌
        </button>
      </div>

      <p className="text-sm text-neutral-600">{description}</p>
      {renderProgressButton({ id, title, description, progress, comments })}
    </Card>
  );
}
