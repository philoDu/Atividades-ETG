# Trabalho Colaborativo no GitHub

O GitHub facilita o desenvolvimento em equipe por meio do controle de versões com Git. Cada integrante trabalha em sua própria *branch*, registra alterações com *commits* e, ao concluir uma funcionalidade, envia suas mudanças para revisão antes da integração ao projeto principal.

## Boas práticas

- Crie uma **branch** para cada funcionalidade ou correção.
- Faça **commits pequenos e descritivos**.
- Mantenha sua branch atualizada com a principal (`main`).
- Revise o código antes de criar um Pull Request.
- Resolva conflitos de forma cuidadosa antes do merge.

## Fluxo básico

1. Criar uma nova branch:
   ```bash
   git checkout -b minha-feature
   ```

2. Adicionar e registrar alterações:
   ```bash
   git add .
   git commit -m "Implementa nova funcionalidade"
   ```

3. Enviar a branch para o GitHub:
   ```bash
   git push origin minha-feature
   ```

4. Abrir um **Pull Request (PR)** no GitHub para solicitar a revisão e integração do código.

5. Após a aprovação, realizar o **Merge** da branch na `main`.

## Comandos úteis

```bash
git clone <url>        # Clona um repositório
git pull               # Atualiza o repositório local
git push               # Envia alterações ao GitHub
git branch             # Lista branches
git checkout <branch>  # Troca de branch
git merge <branch>     # Mescla uma branch na atual
git status             # Exibe o estado dos arquivos
git log                # Mostra o histórico de commits
```

O uso disciplinado de branches, commits bem documentados e Pull Requests contribui para um histórico organizado, facilita revisões de código e reduz conflitos durante o desenvolvimento colaborativo.
