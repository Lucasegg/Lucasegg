# Contribuindo com o Banco de Soluções

Obrigado por considerar contribuir.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Scripts principais

```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção
npm run preview   # preview local do build
npm run lint      # lint do código
```

## Fluxo de contribuição

1. Abra uma issue descrevendo problema, melhoria ou proposta.
2. Crie uma branch curta e descritiva.
3. Faça mudanças pequenas e coesas.
4. Rode `npm run lint` e `npm run build`.
5. Abra um pull request explicando contexto, decisões e testes.

## Padrões de código

- Use TypeScript em todo código de aplicação.
- Prefira componentes pequenos e reutilizáveis.
- Mantenha dados e tipos em arquivos separados da UI.
- Evite dependências novas sem justificativa.
- Use Tailwind para estilos.
- Preserve acessibilidade básica em formulários, botões e links.

## Commits

Use mensagens claras, preferencialmente no formato:

```text
tipo: resumo curto
```

Exemplos:

- `docs: add product vision`
- `feat: add solution explorer`
- `ci: add github pages workflow`

## Segurança

Nunca envie chaves reais para o repositório. Use `.env.local` para variáveis locais e mantenha `.env.example` atualizado.
