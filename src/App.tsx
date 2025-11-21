import { Link, Route, Routes } from 'react-router-dom';
import { LoginButton } from './components/login-button';
import { NavbarContainer } from './components/navbar/navbar-container';
import {
  NavbarMenuContainer,
  NavbarMenuLink,
} from './components/navbar/navbar-menu';
import { AuthContextProvider } from './hooks/use-auth-hook';
import { TechnologiesContextProvider } from './hooks/use-technologies-hook';
import { IndexPage } from './pages';
import { DashboardPage } from './pages/dashboard';
import { AddTechnologyPage } from './pages/dashboard/add-technology';
import { TechnologiesPage } from './pages/dashboard/technologies';
import { TechnologyPage } from './pages/dashboard/technology-page';
import { LoginPage } from './pages/login';
import './App.css';

export default function App() {
  return (
    <AuthContextProvider>
      <TechnologiesContextProvider>
        <div className="min-h-screen flex flex-col">
          <NavbarContainer>
            <span className="font-semibold text-lg cursor-pointer select-none">
              <Link to="/">📝 Трекер</Link>
            </span>
            <NavbarMenuContainer>
              <NavbarMenuLink to="/dashboard">Панель управления</NavbarMenuLink>
              <NavbarMenuLink to="/technologies">Все технологии</NavbarMenuLink>
              <NavbarMenuLink to="/settings">Настройки</NavbarMenuLink>
            </NavbarMenuContainer>
            <div>
              <LoginButton />
            </div>
          </NavbarContainer>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/technologies/:id" element={<TechnologyPage />} />
            <Route path="/add-technology" element={<AddTechnologyPage />} />
          </Routes>
        </div>
      </TechnologiesContextProvider>
    </AuthContextProvider>
  );
}
