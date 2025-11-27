import type { PropsWithChildren } from 'react';
import { createContext, use, useEffect, useState } from 'react';

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  progress: 'not-started' | 'in-progress' | 'completed';
  comments: string[];
}

const TechnologiesContext = createContext<{
  technologies: TechnologyItem[];
  createTechnology: (item: TechnologyItem) => void;
  updateTechnology: (id: string, item: TechnologyItem) => void;
  deleteTechnology: (id: string) => void;
  setTechnologies: (technologies: TechnologyItem[]) => void;
} | null>(null);

export function useTechnologies() {
  const context = use(TechnologiesContext);
  if (!context) {
    throw new Error(
      'useTechnologies must be used within a TechnologiesContextProvider',
    );
  }
  return context;
}

export function TechnologiesContextProvider({ children }: PropsWithChildren) {
  const [technologies, setTechnologies] = useState<TechnologyItem[]>(() => {
    // initial technologies data load
    const storedData = localStorage.getItem('technologies');
    if (!storedData) {
      return [];
    }
    return JSON.parse(storedData);
  });

  // sync technologies to localStorage
  useEffect(() => {
    localStorage.setItem('technologies', JSON.stringify(technologies));
  }, [technologies]);

  function createTechnology(item: TechnologyItem) {
    setTechnologies((prev) => [...prev, item]);
  }

  function updateTechnology(id: string, item: TechnologyItem) {
    setTechnologies((prev) =>
      prev.map((tech) => (tech.id === id ? item : tech)),
    );
  }

  function deleteTechnology(id: string) {
    setTechnologies((prev) => prev.filter((tech) => tech.id !== id));
  }

  return (
    <TechnologiesContext
      value={{
        technologies,
        createTechnology,
        updateTechnology,
        deleteTechnology,
        setTechnologies,
      }}
    >
      {children}
    </TechnologiesContext>
  );
}
