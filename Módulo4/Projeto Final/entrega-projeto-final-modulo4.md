# Projeto Final — Módulo 4: Refatoração da aplicação para Vue.js

**Aluno:** Felipe Duarte
**Unidade Curricular:** 4 — Introdução ao Vue.js e Desenvolvimento de Componentes

🔗 **Aplicação publicada:** https://philodu.github.io/ProjetoFinal_Modulo4/
📁 **Código-fonte:** https://github.com/philoDu/ProjetoFinal_Modulo4

**Conta de teste:** `alexandre@exemplo.com` · senha `123456`

---

## Resumo

O Sistema Gerenciador de Tarefas entregue no Módulo 3 (HTML5 e CSS3 estáticos) foi refeito do zero como uma aplicação Vue.js. Em vez de partir do código base disponibilizado, o projeto foi criado com o `create-vue` e construído componente a componente, resultando no **TaskFlow**: um gerenciador de tarefas inspirado no Jira, com autenticação, quadro Kanban, persistência de dados no navegador e layout responsivo.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **Vue.js 3** | Componentes de arquivo único com `<script setup>` (Composition API) |
| **Vite** | Servidor de desenvolvimento com HMR e build de produção |
| **Vue Router** | Navegação entre as seis telas e guarda de autenticação |
| **Pinia** | Store com os dados do usuário e das tarefas (ver justificativa) |
| **Tailwind CSS 4** | Estilização *mobile-first* (ver justificativa) |
| **ESLint e Prettier** | Padronização e qualidade do código |
| **Git, GitHub e GitHub Actions** | Versionamento e publicação automática no GitHub Pages |
| **Node.js (via nvm)** | Ambiente de execução, instalado no Ubuntu (WSL) |

## Ambiente de desenvolvimento

Todo o desenvolvimento foi feito em **Linux (Ubuntu) no WSL 2**, o subsistema Linux do Windows:

- **Projeto no sistema de arquivos do Linux** (`~/projetos`), e não no disco do Windows, para garantir o desempenho e o *hot reload* do Vite.
- **Node.js e npm instalados no Ubuntu com o nvm** (gerenciador de versões do Node), na versão LTS. Isso evitou um conflito em que o WSL executava, sem aviso, o npm instalado no Windows.
- **Docker Desktop integrado ao WSL**, usado nos exercícios do módulo: cada encontro rodou em um container próprio, a partir de uma imagem Vue + Vite, com o código montado por *bind mount* e as portas expostas para o navegador do Windows. No projeto final, a aplicação foi executada diretamente com o Node do Ubuntu.
- **VS Code conectado ao WSL** (extensão WSL), com as extensões Vue (Official), Prettier e Tailwind CSS IntelliSense.
- **Git com autenticação por chave SSH** entre o Ubuntu e o GitHub.

## Etapas de desenvolvimento

Cada etapa foi concluída, testada e registrada em *commit* antes do início da seguinte.

1. **Configuração inicial:** criação do projeto com `create-vue` (Vue Router, Pinia, ESLint e Prettier) e instalação do Tailwind CSS 4 com o plugin oficial do Vite.
2. **Stores:** criação dos stores `auth` (usuários, login, cadastro e logout) e `tarefas` (criar, buscar, atualizar e excluir), com persistência automática no `localStorage` e dados de exemplo.
3. **Layout base:** rotas das seis telas, cabeçalho com navegação e logout, e moldura da aplicação (`App.vue`) com link de acessibilidade "Pular para o conteúdo".
4. **Autenticação:** telas de login e cadastro com layout compartilhado (componente com *slot*) e guarda de rota que protege as páginas internas.
5. **Dashboard:** quadro Kanban com quatro colunas de status, busca por título e filtro "Só minhas tarefas".
6. **Detalhes da tarefa:** descrição, responsáveis, datas, tarefas vinculadas, troca rápida de status e exclusão.
7. **Criar e editar:** formulário único compartilhado entre as duas telas.
8. **Documentação e publicação:** README, configuração do `base` do Vite e workflow do GitHub Actions para o GitHub Pages.

## Publicação no GitHub Pages

Como o Vite exige uma etapa de *build*, a publicação é feita por uma automação do **GitHub Actions**, que gera e publica o site a cada `push` na branch `main`:

1. **`base` no `vite.config.js`:** definido como `'/ProjetoFinal_Modulo4/'`, pois o site fica numa subpasta do domínio (`philodu.github.io/ProjetoFinal_Modulo4/`). O Vue Router lê esse valor automaticamente por meio de `import.meta.env.BASE_URL`.
2. **Fonte do Pages:** em *Settings → Pages* do repositório, a origem da publicação foi configurada como **GitHub Actions**.
3. **Workflow `.github/workflows/deploy.yml`**, baseado no modelo oficial da documentação do Vite: instala as dependências (`npm ci`), gera o build (`npm run build`) e publica a pasta `dist`.
4. **Fallback para as rotas do Vue Router:** um passo extra no workflow copia o `index.html` para `404.html`. Como as rotas existem apenas no navegador, abrir um endereço interno diretamente (ou recarregar a página) faria o Pages responder com erro; com a cópia, a "página de erro" é a própria aplicação, que lê a URL e exibe a tela correta.

## Especificações implementadas

**Telas exigidas no projeto original:**

| Tela | Rota |
|---|---|
| Login (e-mail e senha) | `/login` |
| Cadastro (nome, e-mail e senha) | `/cadastro` |
| Dashboard / listagem de tarefas | `/` |
| Detalhes da tarefa | `/tarefas/:id` |
| Criar tarefa | `/tarefas/nova` |
| Edição de tarefa | `/tarefas/:id/editar` |

**Requisitos do Módulo 4:**

- **Vite:** usado para o desenvolvimento com HMR e para o build de produção publicado.
- **Router:** navegação entre todas as páginas, rota dinâmica (`/tarefas/:id`), rotas nomeadas e guarda de rota (`beforeEach`) que redireciona visitantes não autenticados para o login.
- **Store com os dados do usuário e das tarefas:** implementado com Pinia, em dois stores.
- **Validações no `<script>`:** e-mail e senha obrigatórios no login; confirmação de senha, tamanho mínimo e e-mail único no cadastro; título obrigatório e data de entrega não anterior à de início nas tarefas.
- **Diretório `node_modules` fora do repositório**, via `.gitignore`.

**Recursos adicionais:**

- Campos inspirados no Jira: status, prioridade, responsáveis, datas de início e entrega, e tarefas vinculadas.
- Destaque visual para tarefas atrasadas.
- Persistência dos dados no `localStorage`.
- Layout *mobile-first*: no celular, as colunas do quadro rolam na horizontal; no desktop, formam uma grade.
- Acessibilidade: HTML semântico, rótulos em todos os campos, foco visível, mensagens de erro anunciadas por leitores de tela (`role="alert"`) e navegação completa pelo teclado.

## Testes realizados

Testes manuais, no navegador, a cada etapa:

- **Autenticação:** login com conta válida e inválida; cadastro de conta nova; tentativa de cadastro com e-mail repetido; senhas que não conferem; logout.
- **Guarda de rota:** acesso a páginas internas sem login (redireciona ao login e, após entrar, volta à página pretendida); acesso ao login já autenticado (redireciona ao quadro).
- **Tarefas:** criação, edição, cancelamento da edição sem alterações, exclusão com remoção dos vínculos em outras tarefas, troca de status pelo painel de detalhes e mudança de coluna no quadro.
- **Navegação:** troca entre tarefas vinculadas, endereço de tarefa inexistente e URL desconhecida.
- **Validações:** campos obrigatórios e data de entrega anterior à de início.
- **Persistência:** recarregamento da página mantendo os dados.
- **Responsividade:** todas as telas no modo dispositivo do DevTools (celular, tablet e desktop).
- **Publicação:** abertura das rotas diretamente pelo endereço no GitHub Pages, inclusive com recarregamento da página.

## Justificativas técnicas

### Pinia em vez de Vuex

O Pinia é hoje a **biblioteca oficial de gerenciamento de estado do Vue**, recomendada pela própria equipe do framework como sucessora do Vuex, que está em modo de manutenção. Ele cumpre o mesmo papel exigido no requisito (um store central com os dados do usuário e das tarefas, compartilhado entre as telas) com vantagens:

- **Menos código:** não há *mutations*. As *actions* alteram o estado diretamente, eliminando a cadeia `dispatch → commit → mutation`.
- **Organização por assunto:** cada domínio tem o próprio store (`auth` e `tarefas`), em vez de um store único.
- **Integração natural com o `<script setup>`:** o store é usado como uma função (`useTarefasStore()`), com o mesmo estilo dos componentes.
- **Mesmos conceitos:** *state*, *getters* e *actions* correspondem diretamente aos do Vuex, e o Pinia continua integrado ao Vue DevTools.

### Tailwind CSS

- **Mobile-first por padrão:** as classes sem prefixo valem para o celular, e os prefixos `sm:`, `md:` e `lg:` equivalem a *media queries* `min-width`, exatamente a abordagem pedida nas diretrizes do projeto.
- **Consistência visual:** espaçamentos, cores e tipografia seguem uma escala padronizada, sem valores avulsos em pixels.
- **Estilos próximos ao componente:** cada componente `.vue` carrega a própria aparência, sem arquivos CSS extensos e difíceis de manter.
- **Recursos de acessibilidade e interação prontos:** variantes como `hover:`, `focus:`, `disabled:` e a classe `sr-only` facilitam transições, foco visível e textos para leitores de tela.
- **Relevância no mercado:** é uma das ferramentas de estilização mais adotadas atualmente, com integração oficial ao Vite.
- **CSS continua presente:** classes reutilizáveis foram criadas com `@apply` e regras globais (como o foco visível) em CSS próprio.

## Uso de inteligência artificial

O projeto foi desenvolvido com o apoio do **Claude Opus 5.5** (Anthropic), em uma conversa de chat extensa, ao longo de vários dias. A IA foi usada como assistente de desenvolvimento e de estudo:

- **Planejamento:** definição do escopo, da arquitetura (rotas, stores e componentes) e da ordem de construção.
- **Configuração do ambiente:** WSL, Docker, Node via nvm, chave SSH, Git e GitHub Pages.
- **Geração e revisão de código:** parte do código foi gerada pela IA e revisada, testada e ajustada a cada etapa; outra parte foi escrita manualmente e revisada pela IA.
- **Diagnóstico de erros:** leitura de mensagens do terminal e do console do navegador para localizar e corrigir problemas.
- **Explicação de conceitos:** reatividade, Composition API, Pinia, Vue Router, Tailwind CSS, Git e acessibilidade.

## Limitações conhecidas

- A autenticação é simulada: os usuários ficam no `localStorage` do navegador, sem servidor nem *hash* de senhas.
- Os dados existem apenas no navegador em que foram criados.
- O envio de anexos não foi implementado, pois exigiria armazenamento em servidor.
