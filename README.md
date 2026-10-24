# AUGEO

Protótipo da landing em React, TypeScript e Vite. Use **Bun 1.4.0** para instalar dependências e executar as ferramentas do projeto.

Website informado pelo usuário: [www.augeocreative.com](https://www.augeocreative.com). Estado do código, publicação e pendências estão no [backlog](docs/BACKLOG.md#current-state); requisitos e entrada comercial estão na [especificação](docs/02-WEBSITE_SPEC.md).

## Instalação e desenvolvimento

```sh
bun install --frozen-lockfile
bun run dev
```

Abra `http://localhost:5173`. A demonstração independente da matriz fica em `http://localhost:5173/?demo=matrix`.

## Build e preview

```sh
bun run build
bun run preview
```

## Testes

Procedimento vigente em [WORKFLOW](docs/WORKFLOW.md#bun-and-validation): `agent-browser` é o padrão de verificação no navegador. A suíte Playwright existente é cobertura legada e só deve ser executada a pedido explícito do Luca.

O `bunfig.toml` força o runtime Bun nos scripts e nos executáveis chamados por eles. Os tipos `@types/node` e o import `node:url` atendem às APIs compatíveis usadas pelo Vite; não exigem um runtime Node.js separado. `bun.lock` é o único lockfile do projeto.

## Organização e continuidade

- `src/`: aplicação, estilos e assets; `components/` e `lib/`: matriz compartilhada, demo e utilitários.
- `tests/`: regressões da matriz, layout do hero e triângulos.
- `docs/`: fontes por responsabilidade — contexto do website, resumo do produto, requisitos, hero, procedimentos e fila.
- `docs/archive/`: evidências históricas e auditoria original, consultadas por necessidade.
- `docs/refs/`: ZIP e captura histórica; PNGs Figma locais ainda não rastreados. Moodboard e estudos da marca ficam em `src/assets/`.

Comece por [AGENTS.md](AGENTS.md) para o mapa de fontes, ou pelo [backlog](docs/BACKLOG.md) para a fila. O resumo da skill permanece em `docs/PRODUCT.md`. O protótipo anterior HTML/JavaScript foi retirado; aplicação e demo são as entradas atuais. Guia pessoal e `.codex/` continuam locais e ignorados pelo Git.

A integração vigente Antigravity/Codex está em [ORCHESTRATION](docs/ORCHESTRATION.md); referências arquiteturais conceituais não acrescentam ferramentas adotadas. A skill local [augeo-project-output](.agents/skills/augeo-project-output/SKILL.md), roteada por AGENTS, organiza documentação e artefatos das próximas entregas sem instalação global por sessão.
