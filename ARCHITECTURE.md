# Arquitetura — Banco de Soluções

## Stack

- React para UI.
- TypeScript para tipagem estática.
- Vite para desenvolvimento e build.
- Tailwind CSS para estilos.
- React Router para navegação.
- Supabase preparado como camada futura de persistência/autenticação.
- GitHub Actions para CI e deploy.
- GitHub Pages para hospedagem estática.

## Estrutura de diretórios

```text
src/
  components/      Componentes reutilizáveis de UI
  data/            Dados mockados e categorias do MVP
  pages/           Páginas roteadas
  services/        Clientes e adaptadores externos
  types/           Tipos compartilhados
  utils/           Funções utilitárias
```

## Modelo de domínio

### Problem

Representa um desafio real com contexto, categoria, urgência e público impactado.

### Solution

Representa uma proposta prática relacionada a um problema, com impacto esperado, dificuldade e passos de implementação.

### Category

Agrupa problemas e soluções por temas: sociedade, empresas, tecnologia, educação, saúde, meio ambiente e empreendedorismo.

## Dados no MVP

O MVP usa dados mockados em `src/data`. Essa decisão permite validar experiência, navegação, design e conteúdo antes da integração com banco.

## Preparação para Supabase

A integração futura deve ficar isolada em `src/services/supabase.ts`. A UI não deve depender diretamente da SDK em múltiplos pontos. Isso reduz acoplamento e facilita testes.

Tabelas previstas:

- `profiles`
- `categories`
- `problems`
- `solutions`
- `problem_solutions`
- `comments`
- `votes`

## Roteamento

Rotas planejadas:

- `/` — landing page
- `/solucoes` — explorar soluções
- `/solucoes/:id` — detalhe da solução
- `/problemas` — explorar problemas
- `/problemas/:id` — detalhe do problema
- `/nova-solucao` — cadastro de solução
- `/novo-problema` — cadastro de problema

## Deploy

O build gera arquivos estáticos em `dist`. O workflow de GitHub Pages publica esse diretório após `npm run build`.

## Evolução esperada

1. Trocar dados mockados por consultas Supabase.
2. Adicionar autenticação e permissões.
3. Implementar moderação e colaboração.
4. Criar testes automatizados.
5. Medir uso e impacto das soluções publicadas.
