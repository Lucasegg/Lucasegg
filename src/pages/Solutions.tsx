import { useMemo, useState } from 'react';
import { SolutionCard } from '../components/Cards';
import { SearchAndCategory } from '../components/SearchAndCategory';
import { solutions } from '../data/solutions';
import type { CategoryId } from '../types/domain';
import { matchesCategory, matchesSearch } from '../utils/filter';

export function Solutions() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const filtered = useMemo(() => solutions.filter((item) => matchesSearch(item, query) && matchesCategory(item, category)), [query, category]);
  return <div className="space-y-6"><PageTitle title="Explorar soluções" description="Descubra propostas práticas, passos de implementação e impacto esperado." /><SearchAndCategory query={query} category={category} onQueryChange={setQuery} onCategoryChange={setCategory} /><div className="grid gap-4 md:grid-cols-2">{filtered.map((solution) => <SolutionCard key={solution.id} solution={solution} />)}</div>{filtered.length === 0 && <Empty />}</div>;
}

function PageTitle({ title, description }: { title: string; description: string }) { return <header><h1 className="text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-2 text-zinc-600">{description}</p></header>; }
function Empty() { return <p className="rounded-3xl border border-dashed border-zinc-300 p-8 text-center text-zinc-500">Nenhuma solução encontrada.</p>; }
