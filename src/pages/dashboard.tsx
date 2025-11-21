import { ProgressIndicator } from '../components/dashboard/progress-indicator';
import { QuickActions } from '../components/dashboard/quick-actions';
import { TechnologyItem } from '../components/dashboard/technology-item';
import { PageWrapper } from '../components/page-wrapper';
import { ProtectedPage } from '../components/protected-page';

export function DashboardPage() {
  return (
    <PageWrapper>
      <ProtectedPage>
        <header className="flex items-start justify-start w-full gap-3">
          <QuickActions />
          <ProgressIndicator />
        </header>
        <div className="w-full mt-8">
          <h1 className="text-xl font-semibold leading-tight">
            Список технологий
          </h1>
          <div className="mt-4 grid grid-cols-3">
            <TechnologyItem />
          </div>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
