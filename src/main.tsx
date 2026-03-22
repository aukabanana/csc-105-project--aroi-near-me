import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import LandingPage from './pages/public/LandingPage.tsx'
import LoginPage from './pages/public/LoginPage.tsx';
import MainPage from './pages/public/MainPage.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Landing',
    element: <LandingPage />
  },
  {
    path: '/LoginPage',
    element: <LoginPage />
  },
  {
    path: '/MainPage',
    element: <MainPage />
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
