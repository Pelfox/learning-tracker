import { useTechnologies } from '../../hooks/use-technologies-hook';
import { Card } from '../ui/card';

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="relative h-8 w-full bg-transparent border border-neutral-200 rounded-xl z-50 overflow-hidden">
      <div
        className="h-8 bg-green-400 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-sm">{percentage}%</span>
      </div>
    </div>
  );
}

export function ProgressIndicator() {
  const { technologies } = useTechnologies();

  const completedCount = technologies.filter(
    (item) => item.progress === 'completed',
  ).length;
  const inProgressCount = technologies.filter(
    (item) => item.progress === 'in-progress',
  ).length;

  return (
    <Card className="max-w-screen p-4 w-full">
      <div className="text-sm">
        <p>
          Доступно технологий для изучения:{' '}
          <span className="font-semibold">{technologies.length}</span>.
        </p>
        <p>
          Изучено технологий:{' '}
          <span className="font-semibold">
            {completedCount} из {technologies.length}
          </span>
          .
        </p>
        <p>
          В процессе изучения:{' '}
          <span className="font-semibold">{inProgressCount}</span>.
        </p>
      </div>
      <ProgressBar
        percentage={
          technologies.length !== 0
            ? Math.round((completedCount / technologies.length) * 100)
            : 0
        }
      />
    </Card>
  );
}
