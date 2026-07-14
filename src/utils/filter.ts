import type { CategoryId, Problem, Solution } from '../types/domain';

export function matchesSearch(item: Pick<Problem | Solution, 'title' | 'summary' | 'description'>, query: string) {
  const value = query.trim().toLowerCase();
  if (!value) return true;
  return [item.title, item.summary, item.description].some((text) => text.toLowerCase().includes(value));
}

export function matchesCategory(item: Pick<Problem | Solution, 'category'>, category: CategoryId | 'all') {
  return category === 'all' || item.category === category;
}
