import { useEffect, useState } from 'react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

export function useApi(query: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function fetchRepositories() {
    setIsLoading(true);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    if (!response.ok) {
      setIsLoading(false);
      setError('Failed to fetch projects.');
      return;
    }

    const data = await response.json();
    setIsLoading(false);
    setRepositories(data.items);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRepositories();
  }, []);

  return {
    isLoading,
    error,
    projects: repositories,
    fetchRepositories,
  };
}
