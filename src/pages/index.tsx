import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/page-wrapper';
import { Button } from '../components/ui/button';

export function IndexPage() {
  return (
    <PageWrapper className="flex-1 mt-0">
      <section className="w-full flex flex-col items-center justify-center gap-6">
        <div className="text-center space-y-2">
          <span className="block text-4xl mb-2">📝</span>
          <h1 className="text-3xl font-semibold leading-tight">
            Трекер обучения технологий
          </h1>
          <p>Отслеживайте свой прогресс обучения в простой и удобной форме!</p>
        </div>
        <div className="flex items-center justify-center w-full h-fit gap-2">
          <Button asChild>
            <Link to="/login">Войти в аккаунт</Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  );
}
