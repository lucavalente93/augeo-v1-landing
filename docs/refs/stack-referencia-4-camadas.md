# 🏛️ Referência de Arquitetura de Stack Agêntica (4 Camadas)

> ⚠️ **AVISO DE REFERÊNCIA EXTERNA:**\
> Esta estrutura foi concebida por um terceiro não associado (com base no modelo de fluxo de trabalho do ecossistema Anthropic/Claude) e deve ser utilizada **apenas como referência conceitual e benchmark de arquitetura**. Ajustes e adaptações devem ser feitos conforme a realidade operacional do seu ecossistema.

---

## 📌 Convenção de Diretórios e Escopo (Global vs. Local)

Para evitar duplicação de dados e garantir reutilização de contexto entre projetos, a arquitetura separa a **Camada de Contexto Global** do **Repositório Local de Código**:

```text
~ (Home Directory)
├── ~/global-context-store/                <-- 🌍 Camadas 1 e 2 (Global / Cross-Project)
│   ├── index.md                           <-- Mapa global de contexto e roteamento
│   ├── skills/                            <-- SOPs e instruções executáveis (.md)
│   ├── entities/                          <-- Perfis (Clientes, Parceiros, Equipe)
│   ├── business/                          <-- Tabelas de Preços e Ofertas Comercializadas
│   └── brandings/                         <-- Brand Guidelines, Tom de Voz e Visual Specs
│
└── ~/projects/                            <-- 💻 Repositórios Locais de Código
    └── <project-repo>/                    <-- Projeto específico (ex: landing page, bot)
        ├── AGENTS.md                      <-- Ponto de entrada do agente local
        └── src/                           <-- Código-fonte (React, Bun, Vite, etc.)
```

---

## 📐 As 4 Camadas da Arquitetura

### Camada 1: Global Context Store & Grounding Layer
- **Conceito:** Repositório centralizado de memória persistente e base de conhecimento estruturada para *grounding* (alinhamento situacional e contextual dos agentes).
- **Mecanismo:** Arquivos Markdown locais indexados por um arquivo mestre de rotas (`index.md`).
- **Objetivo:** Fornecer diretrizes de marca, personas, dados comerciais e contexto de clientes sem inflar a janela de contexto principal.
- **Subdiretórios:**
  - `brandings/`: Guias visuais, paletas de cores, tipografia e tom de voz.
  - `entities/`: Fichas técnicas de clientes, parceiros e equipe.
  - `business/`: Tabela de preços, pacotes de serviços e escopos operacionais.

### Camada 2: Standardized Skills & SOPs Layer
- **Conceito:** Procedimentos Operacionais Padronizados (SOPs) encapsulados em arquivos de instrução executáveis (`skill.md`).
- **Diretriz:** Tarefas repetidas manualmente mais de 3 vezes devem ser codificadas em uma *Skill*.
- **Estrutura:**
  - `skills/<nome-da-skill>/skill.md`: Passo a passo, regras condicionais, restrições e ponteiros para os diretórios de contexto da Camada 1.

### Camada 3: Multi-Agent Orchestration & Target Executors
- **Conceito:** Roteamento dinâmico de demandas e distribuição de carga de trabalho entre agentes especializados e modelos focados em execução de código.
- **Topologia de Agentes:**
  - **Target Main Executor:** **Codex** (focado no desenvolvimento, geração e manutenção de código nos repositórios locais).
  - **Orquestrador / Juiz:** Modelo de alto raciocínio responsável por decompor a demanda em subtarefas, delegar para os executores e validar a entrega (*Quality Gate*).
  - *Nota de Evolução:* A integração do **Antigravity** será estruturada e adicionada em camada/ambiente dedicado posteriormente.

### Camada 4: External Tooling & Integrations (MCP / APIs / CLI)
- **Conceito:** Conectores que permitem aos agentes atuar diretamente nos softwares e infraestruturas externas.
- **Exemplos de Ferramentas da Referência:**
  - **Comunicação:** Evolution API (WhatsApp)
  - **Banco de Dados Operacional:** Supabase
  - **Automação de Fluxos:** n8n / Make
  - **Transcrições e Reuniões:** Fathom, NotebookLM
  - **Deploy & Hospedagem:** Vercel

---

## English Migration Notes (Consolidated from `docs/architecture-reference.md`)

> Consolidated on 2026-10-30 from the duplicate `docs/architecture-reference.md` file to keep `docs/` root reserved for active canonical project sources. The actual adopted orchestration contract for `augeo-website` lives in [`docs/ORCHESTRATION.md`](../ORCHESTRATION.md).

When operating on a pre-existing codebase under this conceptual reference:
1. **Preserve Existing Code Integrity:** Do not destroy or break existing working code during migration. Incrementally refactor modules to align with Layer 2 skills and Layer 1 context.
2. **Context Resolution Path:** Look for local configuration in `AGENTS.md` and resolve global references via `~/global-context-store/index.md` (`augeo-orchestrator context <project-id>`).
3. **Incremental Skill Codification:** Document recurring refactoring or workflow routines as `SKILL.md` files in the shared store or `.agents/skills/`.
4. **Code-First Target:** Execute code generation, component creation, and build checks directly within the local project repository.
