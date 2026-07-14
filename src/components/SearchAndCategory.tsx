import type { CategoryId } from '../types/domain';
import { categories } from '../data/categories';

type Props = { query: string; category: CategoryId | 'all'; onQueryChange: (value: string) => void; onCategoryChange: (value: CategoryId | 'all') => void };

export function SearchAndCategory({ query, category, onQueryChange, onCategoryChange }: Props) {
  return <section className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm"><div className="grid gap-3 md:grid-cols-[1fr_240px]"><label className="block"><span className="mb-2 block text-sm font-medium text-zinc-700">Pesquisa</span><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Busque por título, resumo ou descrição" className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-zinc-950/10 transition focus:ring-4" /></label><label className="block"><span className="mb-2 block text-sm font-medium text-zinc-700">Categoria</span><select value={category} onChange={(event) => onCategoryChange(event.target.value as CategoryId | 'all')} className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-zinc-950/10 transition focus:ring-4"><option value="all">Todas</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label></div></section>;
}
