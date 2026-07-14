# PRD — Banco de Soluções

## Visão

O Banco de Soluções é uma plataforma open source para registrar, descobrir e evoluir soluções para problemas reais da sociedade, empresas, tecnologia, educação, saúde, meio ambiente e empreendedorismo.

A proposta é criar um repositório público, navegável e colaborativo, onde qualquer pessoa possa:

- publicar problemas relevantes;
- propor soluções práticas;
- pesquisar referências por categoria;
- conectar problemas e soluções;
- contribuir com melhorias de forma aberta.

## Problema

Boas ideias e soluções aplicáveis costumam ficar dispersas em posts, documentos, conversas, repositórios e apresentações. Isso dificulta descoberta, reutilização, comparação e evolução colaborativa.

## Público-alvo

- Pessoas empreendedoras buscando problemas reais para resolver.
- Comunidades open source procurando impacto social.
- Empresas e organizações querendo mapear desafios.
- Estudantes, educadores e pesquisadores.
- ONGs, coletivos e governos interessados em inovação aberta.

## Objetivos do produto

1. Organizar problemas e soluções em um acervo público.
2. Facilitar descoberta por busca, categoria e páginas detalhadas.
3. Permitir submissão simples de problemas e soluções.
4. Preparar base técnica para autenticação, persistência e colaboração via Supabase.
5. Publicar o MVP de forma estática via GitHub Pages.

## Escopo do MVP

### Incluído

- Landing page com proposta de valor.
- Listagem para explorar soluções.
- Listagem para explorar problemas.
- Página de detalhe da solução.
- Página de detalhe do problema.
- Cadastro local de solução.
- Cadastro local de problema.
- Pesquisa textual.
- Filtro por categorias.
- Dados mockados tipados.
- Estrutura preparada para Supabase.
- GitHub Actions para build e deploy em GitHub Pages.

### Fora do MVP

- Login e perfis de usuário.
- Votação, comentários e favoritos.
- Persistência real no Supabase.
- Moderação administrativa.
- Uploads e anexos.
- Internacionalização.

## Métricas iniciais de sucesso

- Usuário entende a proposta em menos de 30 segundos.
- Usuário consegue encontrar problemas e soluções por busca/categoria.
- Usuário consegue visualizar detalhes de um item.
- Usuário consegue preencher formulários de cadastro com feedback local.
- Projeto roda localmente com `npm install`, `npm run dev` e `npm run build`.

## Princípios de design

- Minimalista e editorial, inspirado em Notion, Linear, GitHub e Vercel.
- Interface clara, com cartões, tipografia limpa, bastante respiro e contraste consistente.
- Mobile-first.
- Componentes reutilizáveis.
- Sem dependências visuais pesadas no MVP.

## Requisitos funcionais

### Landing Page

- Explicar a missão da plataforma.
- Destacar categorias e estatísticas iniciais.
- Levar para exploração e cadastro.

### Explorar Soluções

- Listar soluções cadastradas/mockadas.
- Permitir filtro por busca e categoria.
- Exibir título, resumo, categoria, dificuldade, impacto e problema relacionado.

### Explorar Problemas

- Listar problemas cadastrados/mockados.
- Permitir filtro por busca e categoria.
- Exibir título, resumo, categoria, urgência e público impactado.

### Página da Solução

- Exibir descrição completa, passos de implementação, métricas de impacto e problema relacionado.

### Página do Problema

- Exibir descrição completa, contexto, público impactado e soluções relacionadas.

### Cadastro

- Formulários para solução e problema.
- Validação HTML básica.
- Feedback de envio no cliente.
- Preparação para integração futura com Supabase.

## Requisitos não funcionais

- React + TypeScript + Vite.
- Tailwind CSS.
- Código modular e tipado.
- Build estático compatível com GitHub Pages.
- CI com GitHub Actions.
- Acessibilidade básica: labels, foco visível, semântica HTML.

## Decisões importantes

- O MVP usa dados mockados para reduzir risco e validar navegação antes da persistência.
- A camada `services/supabase` fica isolada para permitir troca de mock para banco sem reescrever UI.
- O roteamento usa `react-router-dom` para páginas reais e deep links no GitHub Pages.
- Formulários são client-side no MVP, com feedback local, porque autenticação e moderação virão depois.
