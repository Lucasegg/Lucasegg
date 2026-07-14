export type CategoryId = 'sociedade' | 'empresas' | 'tecnologia' | 'educacao' | 'saude' | 'meio-ambiente' | 'empreendedorismo';

export type Category = { id: CategoryId; name: string; description: string };
export type Problem = { id: string; title: string; summary: string; description: string; category: CategoryId; urgency: 'Baixa' | 'Média' | 'Alta'; audience: string; context: string; relatedSolutionIds: string[] };
export type Solution = { id: string; title: string; summary: string; description: string; category: CategoryId; difficulty: 'Baixa' | 'Média' | 'Alta'; impact: string; problemId: string; steps: string[]; metrics: string[] };
