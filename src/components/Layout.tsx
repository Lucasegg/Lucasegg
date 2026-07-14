import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/solucoes', label: 'Soluções' },
  { to: '/problemas', label: 'Problemas' },
  { to: '/nova-solucao', label: 'Cadastrar solução' },
  { to: '/novo-problema', label: 'Cadastrar problema' },
];

export function Layout() {
  return <div className="min-h-screen bg-zinc-50 text-zinc-950"><header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/85 backdrop-blur"><nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"><NavLink to="/" className="text-lg font-semibold tracking-tight">Banco de Soluções</NavLink><div className="flex flex-wrap gap-2 text-sm">{navItems.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => `rounded-full px-3 py-2 transition ${isActive ? 'bg-zinc-950 text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950'}`}>{item.label}</NavLink>)}</div></nav></header><main className="mx-auto max-w-6xl px-4 py-8"><Outlet /></main><footer className="border-t border-zinc-200 bg-white"><div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">Open source, minimalista e preparado para colaboração.</div></footer></div>;
}
