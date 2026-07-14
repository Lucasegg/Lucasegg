import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { problems } from '../data/problems';
import type { Problem, Solution } from '../types/domain';

const categoryName = (id: string) => categories.find((category) => category.id === id)?.name ?? id;

export function SolutionCard({ solution }: { solution: Solution }) {
  const problem = problems.find((item) => item.id === solution.problemId);
  return <Link to={`/solucoes/${solution.id}`} className="group block rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"><div className="mb-4 flex flex-wrap gap-2"><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">{categoryName(solution.category)}</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Impacto</span></div><h3 className="text-lg font-semibold tracking-tight group-hover:underline">{solution.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{solution.summary}</p><p className="mt-4 text-xs text-zinc-500">Dificuldade: {solution.difficulty} {problem ? `• Problema: ${problem.title}` : ''}</p></Link>;
}

export function ProblemCard({ problem }: { problem: Problem }) {
  return <Link to={`/problemas/${problem.id}`} className="group block rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md"><div className="mb-4 flex flex-wrap gap-2"><span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">{categoryName(problem.category)}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">Urgência {problem.urgency}</span></div><h3 className="text-lg font-semibold tracking-tight group-hover:underline">{problem.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{problem.summary}</p><p className="mt-4 text-xs text-zinc-500">Público: {problem.audience}</p></Link>;
}
