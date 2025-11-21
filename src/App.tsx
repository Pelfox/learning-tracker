import { Link, Route, Routes } from 'react-router-dom';
import { LoginButton } from './components/login-button';
import { NavbarContainer } from './components/navbar/navbar-container';
import {
  NavbarMenuContainer,
  NavbarMenuLink,
} from './components/navbar/navbar-menu';
import { IndexPage } from './pages';
import { DashboardPage } from './pages/dashboard';
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
          <NavbarMenuLink to="/dashboard/technologies">
            Все технологии
          </NavbarMenuLink>
          <NavbarMenuLink to="/dashboard/settings">Настройки</NavbarMenuLink>
        </NavbarMenuContainer>
        <div>
          <LoginButton />
        </div>
      </NavbarContainer>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}
