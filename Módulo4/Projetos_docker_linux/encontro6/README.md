# Hello Vue + Vite + Router + Vuex + Axios

Projeto-base do curso de **Programador Web**, desenvolvido com Vue.js 3, Vite, Vue Router, Vuex e Axios.

É possível executar o projeto **com Docker** ou **sem Docker**. Escolha apenas uma das opções abaixo.

- **Com Docker:** para computadores que já possuem Docker Desktop funcionando.
- **Sem Docker:** para computadores que não conseguem utilizar Docker. O VS Code já está instalado; será necessário instalar o Node.js.

## Opção 1 — Executar com Docker

**Pré-requisito:** Docker Desktop instalado e em execução.

1. Baixe o projeto em **Code → Download ZIP**, nesta página, e extraia os arquivos.
2. Abra a pasta extraída no VS Code.
3. Abra um Command Prompt (CMD) nessa pasta e execute:

   ```bash
   docker compose up
   ```

4. Aguarde o servidor iniciar e abra **http://localhost:5173** no navegador.

Também é possível utilizar o arquivo `compose-up.cmd` incluído neste repositório (no Windows).

Para encerrar, pressione **Ctrl + C** no terminal.

> O Docker utiliza as configurações do arquivo `compose.yml`. Não é necessário instalar Node.js no Windows para utilizar essa opção.

## Opção 2 — Executar sem Docker (Windows)

### Passo 1 — Instalar o Node.js (somente uma vez)

1. Acesse **https://nodejs.org/en/download**.
2. Escolha o instalador do **Node.js 22 LTS para Windows x64**.
3. Execute o instalador, mantendo as opções padrão.
4. Feche e abra novamente o VS Code (se necessário, reinicie o Windows).
5. Abra o **Prompt de Comando (CMD)** e execute:

   ```cmd
   node -v
   npm -v
   ```

O primeiro comando deverá mostrar uma versão iniciada por `v22`; o segundo deverá mostrar a versão do npm. Se algum comando não for reconhecido, peça ajuda ao professor antes de prosseguir.

**Importante:** o Node.js é instalado apenas uma vez no computador e serve para todas as 10 tarefas. Não é necessário instalar Vue ou Vite separadamente.

### Passo 2 — Criar as pastas das 10 tarefas

No Explorador de Arquivos do Windows, crie `C:\ProgramadorWeb` e, dentro dela, as pastas:

```text
C:\ProgramadorWeb\
├── Tarefa01\
├── Tarefa02\
├── Tarefa03\
├── Tarefa04\
├── Tarefa05\
├── Tarefa06\
├── Tarefa07\
├── Tarefa08\
├── Tarefa09\
└── Tarefa10\
```

Cada tarefa será desenvolvida **somente em sua própria pasta**, para não misturar os códigos.

### Passo 3 — Copiar o projeto-base para cada tarefa

1. Nesta página do GitHub, clique em **Code → Download ZIP**.
2. No Windows, clique com o botão direito no arquivo baixado e escolha **Extrair Tudo**.
3. Abra a pasta extraída (`hellow-vue-main`).
4. Copie **todo o conteúdo dessa pasta** para `C:\ProgramadorWeb\Tarefa01`.
5. Repita a cópia para as demais pastas (`Tarefa02` até `Tarefa10`).

Dentro de **cada** pasta `TarefaXX` deverão aparecer os arquivos `package.json`, `package-lock.json`, `index.html`, `vite.config.js` e a pasta `src`. Não coloque a pasta `hellow-vue-main` inteira *dentro* de `Tarefa01`: copie seu **conteúdo**.

> Para economizar espaço e tempo, também é possível copiar o projeto-base para uma nova pasta somente quando a tarefa correspondente for iniciada. Não copie a pasta `node_modules` entre tarefas.

### Passo 4 — Preparar cada nova tarefa

1. Abra o VS Code.
2. Clique em **Arquivo → Abrir Pasta** e escolha, por exemplo, `C:\ProgramadorWeb\Tarefa01`.
3. Confira se `package.json` está visível na raiz da pasta aberta.
4. Acesse **Terminal → Novo Terminal**. Se o terminal estiver no PowerShell, escolha o perfil **Command Prompt / Prompt de Comando (CMD)**.
5. Execute:

   ```cmd
   npm ci
   ```

6. Aguarde terminar **sem erros**.

Esse comando instala as dependências na pasta `node_modules` da tarefa atual. **Execute `npm ci` uma vez para cada tarefa nova** (ou novamente quando o professor solicitar atualização de dependências).

### Passo 5 — Iniciar a tarefa

No mesmo terminal, execute:

```cmd
npm run dev
```

Abra no navegador: **http://localhost:5173**.

Mantenha o terminal aberto enquanto programa. Ao salvar alterações (`Ctrl + S`), o Vite normalmente atualiza a página automaticamente.

Para encerrar o servidor, volte ao terminal e pressione **Ctrl + C**.

### Passo 6 — Passar para outra tarefa

Por exemplo, ao sair da Tarefa01 e começar a Tarefa02:

1. Encerre o servidor da Tarefa01 com **Ctrl + C**.
2. No VS Code, abra a pasta `C:\ProgramadorWeb\Tarefa02`.
3. Na primeira vez nessa pasta, execute `npm ci`.
4. Execute `npm run dev` e acesse **http://localhost:5173**.

**Execute apenas uma tarefa por vez**, pois todas utilizam a porta 5173.

### Nas próximas aulas

Para continuar uma tarefa **já preparada**, basta:

1. Abrir sua pasta no VS Code.
2. Abrir um terminal CMD nessa pasta.
3. Executar `npm run dev`.
4. Abrir **http://localhost:5173**.

Não é necessário reinstalar o Node.js nem executar `npm ci` em toda aula.

## Problemas comuns (sem Docker)

| Problema | O que fazer |
| --- | --- |
| `node` ou `npm` não é reconhecido | Feche e reabra o terminal; confira a instalação do Node.js. |
| Erro `ENOENT` ou `package.json` não encontrado | Abra a pasta correta da tarefa; o arquivo `package.json` precisa estar nela. |
| `vite` não é reconhecido | Execute `npm ci` dentro da pasta da tarefa. |
| Porta `5173` ocupada | Encerre o servidor da outra tarefa com `Ctrl + C`. |
| A página não abre | Confira se `npm run dev` continua executando sem erros e use o endereço mostrado no terminal. |
| `npm ci` apresenta erro | Não apague arquivos nem use `--force`. Mostre a mensagem ao professor. |

**Em caso de erro:** faça uma captura de tela do terminal e mostre ao professor. Evite alterar configurações do Windows ou excluir arquivos para tentar corrigir o problema.

## Resumo

| | Com Docker | Sem Docker |
| --- | --- | --- |
| Instalação no Windows | Docker Desktop | Node.js 22 LTS |
| Preparação inicial | `docker compose up` | `npm ci` em cada nova tarefa |
| Execução | `docker compose up` | `npm run dev` |
| Acesso no navegador | http://localhost:5173 | http://localhost:5173 |
| Encerramento | `Ctrl + C` | `Ctrl + C` |

**Todos os alunos utilizam o mesmo código do projeto, independentemente da opção escolhida.**
