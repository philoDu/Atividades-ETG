# Controle de Versionamento com Git e GitHub

A forma mais segura de desenvolver uma aplicação é utilizando **controle de versionamento**. Para isso, existe o **Git**, um sistema que registra o histórico de alterações do projeto, permitindo acompanhar mudanças, restaurar versões anteriores e trabalhar de forma organizada.

Quando o desenvolvimento é realizado em equipe, é recomendado utilizar um **repositório remoto**, hospedado na internet ou na rede da instituição. Plataformas como **GitHub** e **GitLab** centralizam o versionamento, facilitando a colaboração entre desenvolvedores.

## Principais conceitos

- **Origin**: nome padrão atribuído ao repositório remoto.
- **Staging Area**: área intermediária onde ficam os arquivos preparados para o próximo commit.
- **Git Directory (`.git`)**: diretório oculto onde o Git armazena o histórico de versões e demais informações do repositório.
- **Commit**: registro permanente de um conjunto de alterações no projeto.
- **Branch**: linha de desenvolvimento independente, utilizada para criar funcionalidades ou corrigir problemas sem afetar a versão principal.
- **Merge**: processo de unir as alterações de uma branch em outra.
- **Push**: envia as alterações do repositório local para o repositório remoto.
- **Pull**: baixa e integra as alterações do repositório remoto ao repositório local.

## Comandos básicos

```bash
git clone <url>   # Clona um repositório remoto
git add .         # Adiciona arquivos à Staging Area
git commit -m ""  # Registra as alterações no histórico
git push          # Envia commits para o repositório remoto
git pull          # Atualiza o repositório local com as alterações remotas
```

O uso de Git em conjunto com plataformas como GitHub ou GitLab torna o desenvolvimento colaborativo mais seguro, organizado e eficiente, permitindo que vários desenvolvedores trabalhem simultaneamente no mesmo projeto.
