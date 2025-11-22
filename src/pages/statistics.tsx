import { ProgressIndicator } from '../components/dashboard/progress-indicator';
import { PageWrapper } from '../components/page-wrapper';
import { ProtectedPage } from '../components/protected-page';

export function StatisticsPage() {
  return (
    <PageWrapper>
      <ProtectedPage>
        <div className="w-full">
          <h1 className="text-xl font-semibold leading-tight">Статистика</h1>
          <div className="mt-4">
            <ProgressIndicator />
          </div>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
