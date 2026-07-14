import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SolutionDetail, ProblemDetail } from './pages/Details';
import { NewProblem, NewSolution } from './pages/Forms';
import { Problems } from './pages/Problems';
import { Solutions } from './pages/Solutions';
import './styles.css';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'solucoes', element: <Solutions /> },
    { path: 'solucoes/:id', element: <SolutionDetail /> },
    { path: 'problemas', element: <Problems /> },
    { path: 'problemas/:id', element: <ProblemDetail /> },
    { path: 'nova-solucao', element: <NewSolution /> },
    { path: 'novo-problema', element: <NewProblem /> },
  ] },
]);

createRoot(document.getElementById('root')!).render(<StrictMode><RouterProvider router={router} /></StrictMode>);
