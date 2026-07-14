import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { problems } from '../data/problems';
import { solutions } from '../data/solutions';

export function Home() {
  return <div className="space-y-14"><section className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm md:p-12"><p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">Open source • impacto real</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Um banco público para descobrir problemas e compartilhar soluções aplicáveis.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">Organize ideias, conecte desafios a propostas práticas e ajude comunidades, empresas e pessoas a construir respostas melhores.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/solucoes" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">Explorar soluções</Link><Link to="/problemas" className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-100">Explorar problemas</Link></div></section><section className="grid gap-4 md:grid-cols-3"><Stat value={solutions.length} label="soluções iniciais" /><Stat value={problems.length} label="problemas mapeados" /><Stat value={categories.length} label="categorias" /></section><section><div className="mb-5 flex items-end justify-between gap-4"><div><h2 className="text-2xl font-semibold tracking-tight">Categorias</h2><p className="mt-2 text-zinc-600">Temas para navegar por contexto e impacto.</p></div></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <article key={category.id} className="rounded-3xl border border-zinc-200 bg-white p-5"><h3 className="font-semibold">{category.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{category.description}</p></article>)}</div></section></div>;
}

function Stat({ value, label }: { value: number; label: string }) {
  return <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><strong className="text-3xl font-semibold">{value}</strong><p className="mt-2 text-sm text-zinc-600">{label}</p></article>;
}
