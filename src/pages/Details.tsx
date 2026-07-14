import type { ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProblemCard, SolutionCard } from '../components/Cards';
import { problems } from '../data/problems';
import { solutions } from '../data/solutions';

export function SolutionDetail() {
  const { id } = useParams();
  const solution = solutions.find((item) => item.id === id);
  if (!solution) return <Navigate to="/solucoes" replace />;
  const problem = problems.find((item) => item.id === solution.problemId);
  return <article className="space-y-8"><header className="rounded-[2rem] border border-zinc-200 bg-white p-8"><Link to="/solucoes" className="text-sm text-zinc-500 hover:text-zinc-950">← Voltar para soluções</Link><h1 className="mt-4 text-4xl font-semibold tracking-tight">{solution.title}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{solution.description}</p></header><Section title="Passos de implementação"><ol className="space-y-3">{solution.steps.map((step) => <li key={step} className="rounded-2xl border border-zinc-200 bg-white p-4">{step}</li>)}</ol></Section><Section title="Métricas de impacto"><ul className="grid gap-3 md:grid-cols-3">{solution.metrics.map((metric) => <li key={metric} className="rounded-2xl bg-zinc-100 p-4 text-sm font-medium">{metric}</li>)}</ul></Section>{problem && <Section title="Problema relacionado"><ProblemCard problem={problem} /></Section>}</article>;
}

export function ProblemDetail() {
  const { id } = useParams();
  const problem = problems.find((item) => item.id === id);
  if (!problem) return <Navigate to="/problemas" replace />;
  const relatedSolutions = solutions.filter((item) => problem.relatedSolutionIds.includes(item.id));
  return <article className="space-y-8"><header className="rounded-[2rem] border border-zinc-200 bg-white p-8"><Link to="/problemas" className="text-sm text-zinc-500 hover:text-zinc-950">← Voltar para problemas</Link><h1 className="mt-4 text-4xl font-semibold tracking-tight">{problem.title}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{problem.description}</p></header><Section title="Contexto"><p className="leading-8 text-zinc-700">{problem.context}</p><p className="mt-4 text-sm text-zinc-500">Público impactado: {problem.audience}</p></Section><Section title="Soluções relacionadas"><div className="grid gap-4 md:grid-cols-2">{relatedSolutions.map((solution) => <SolutionCard key={solution.id} solution={solution} />)}</div></Section></article>;
}

function Section({ title, children }: { title: string; children: ReactNode }) { return <section><h2 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h2>{children}</section>; }
