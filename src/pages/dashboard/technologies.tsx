import { Link } from 'react-router-dom';
import { TechnologyCard } from '../../components/dashboard/technology-item';
import { PageWrapper } from '../../components/page-wrapper';
import { ProtectedPage } from '../../components/protected-page';
import { Button } from '../../components/ui/button';
import { useTechnologies } from '../../hooks/use-technologies-hook';

export function TechnologiesPage() {
  const { technologies } = useTechnologies();

  return (
    <PageWrapper>
      <ProtectedPage>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold leading-tight">
              Список технологий
            </h1>
            <Button type="button" asChild>
              <Link to="/add-technology">Добавить технологию</Link>
            </Button>
          </div>
          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-3">
            {technologies.length === 0 && (
              <p className="text-sm">Нет технологий для отображения.</p>
            )}
            {technologies.map((item) => (
              <TechnologyCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
