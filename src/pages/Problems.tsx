import { useMemo, useState } from 'react';
import { ProblemCard } from '../components/Cards';
import { SearchAndCategory } from '../components/SearchAndCategory';
import { problems } from '../data/problems';
import type { CategoryId } from '../types/domain';
import { matchesCategory, matchesSearch } from '../utils/filter';

export function Problems() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const filtered = useMemo(() => problems.filter((item) => matchesSearch(item, query) && matchesCategory(item, category)), [query, category]);
  return <div className="space-y-6"><header><h1 className="text-3xl font-semibold tracking-tight">Explorar problemas</h1><p className="mt-2 text-zinc-600">Encontre desafios reais e conecte oportunidades de solução.</p></header><SearchAndCategory query={query} category={category} onQueryChange={setQuery} onCategoryChange={setCategory} /><div className="grid gap-4 md:grid-cols-2">{filtered.map((problem) => <ProblemCard key={problem.id} problem={problem} />)}</div>{filtered.length === 0 && <p className="rounded-3xl border border-dashed border-zinc-300 p-8 text-center text-zinc-500">Nenhum problema encontrado.</p>}</div>;
}
