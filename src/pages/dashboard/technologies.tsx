import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TechnologyCard } from '../../components/dashboard/technology-item';
import { PageWrapper } from '../../components/page-wrapper';
import { ProtectedPage } from '../../components/protected-page';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input.tsx';
import { useTechnologies } from '../../hooks/use-technologies-hook';

export function TechnologiesPage() {
  const { technologies } = useTechnologies();
  const [showTechnologies, setShowTechnologies] = useState(technologies);
  const [searchText, setSearchText] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!searchText || searchText.trim().length === 0) {
        setShowTechnologies(technologies);
        return;
      }

      const lower = searchText.toLowerCase();
      const filtered = technologies.filter((item) =>
        item.title.toLowerCase().includes(lower),
      );
      setShowTechnologies(filtered);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchText, technologies]);

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
          <div className="mt-4">
            <div>
              <Input
                placeholder="Поиск..."
                className="w-full"
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>
            <div className="mt-3 grid lg:grid-cols-3 grid-cols-1 gap-3">
              {showTechnologies.length === 0 && (
                <p className="text-sm">Нет технологий для отображения.</p>
              )}
              {showTechnologies.map((item) => (
                <TechnologyCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </ProtectedPage>
    </PageWrapper>
  );
}
