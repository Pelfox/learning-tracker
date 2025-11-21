import { Link, Route, Routes } from 'react-router-dom';
import { LoginButton } from './components/login-button';
import { NavbarContainer } from './components/navbar/navbar-container';
import {
  NavbarMenuContainer,
  NavbarMenuLink,
} from './components/navbar/navbar-menu';
import { IndexPage } from './pages';
import { LoginPage } from './pages/login';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarContainer>
        <span className="font-semibold text-lg cursor-pointer select-none">
          <Link to="/">📝 Трекер</Link>
        </span>
        <NavbarMenuContainer>
          <NavbarMenuLink to="/">Главная</NavbarMenuLink>
          <NavbarMenuLink to="/technologies">Все технологии</NavbarMenuLink>
          <NavbarMenuLink to="/settings">Настройки</NavbarMenuLink>
        </NavbarMenuContainer>
        <div>
          <LoginButton />
        </div>
      </NavbarContainer>
      <main className="container mx-auto max-w-5xl flex-1 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}
