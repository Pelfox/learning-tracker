import type { PropsWithChildren } from 'react';
import { createContext, use, useEffect, useState } from 'react';

const AuthContext = createContext<{
  isLoggedIn: boolean;
  state: {
    username: string;
  } | null;

  login: (username: string) => void;
  logout: () => void;
} | null>(null);

export function useAuth() {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
}

export function AuthContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(() => {
    // initial auth state load
    const storedState = localStorage.getItem('authState');
    if (!storedState) {
      return { isLoggedIn: false, state: null };
    }
    return JSON.parse(storedState);
  });

  // save auth state on change
  useEffect(() => {
    if (!state.isLoggedIn || !state.state) {
      localStorage.removeItem('authState');
      return;
    }
    localStorage.setItem('authState', JSON.stringify(state));
  }, [state]);

  function login(username: string) {
    setState({ isLoggedIn: true, state: { username } });
  }

  function logout() {
    setState({ isLoggedIn: false, state: null });
  }

  return (
    <AuthContext value={{ ...state, login, logout }}>{children}</AuthContext>
  );
}
