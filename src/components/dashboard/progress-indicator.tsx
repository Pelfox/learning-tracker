import { Card } from '../ui/card';

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="relative h-8 w-full bg-transparent border border-neutral-200 rounded-xl z-50 overflow-hidden">
      <div className="h-8 bg-green-400" style={{ width: `${percentage}%` }} />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-sm">{percentage}%</span>
      </div>
    </div>
  );
}

export function ProgressIndicator() {
  return (
    <Card className="max-w-screen p-4 w-full">
      <div className="text-sm">
        <p>
          Доступно технологий для изучения:{' '}
          <span className="font-semibold">5</span>.
        </p>
        <p>
          Изучено технологий: <span className="font-semibold">0 из 5</span>.
        </p>
        <p>
          В процессе изучения: <span className="font-semibold">3</span>.
        </p>
      </div>
      <ProgressBar percentage={0} />
    </Card>
  );
}
