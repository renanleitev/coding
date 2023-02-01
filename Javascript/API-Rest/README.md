# Projeto experimental com API

Projeto criado apenas para testes, usando:

 1. [Insomnia](https://insomnia.rest/download).
 2. [MariaDB em Container Docker](https://hub.docker.com/_/mariadb).
 3. [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

## Iniciando o banco de dados

Pré-requisito: [Docker instalado](https://docs.docker.com/get-docker/).

No terminal, insira o comando:

1. Linux:

    `sudo docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc mariadb`

2. Windows:

    `docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc mariadb`

Obs: A senha e o nome do container podem ser alterados, mas é necessário alterar também as variáveis de ambiente (arquivo .env).

## Instalando as dependências (package.json)

`npm install`

## Iniciando o projeto

No terminal, insira o comando:

`npm run dev`

Acesse [http://localhost:3001](http://localhost:3000) para visualizar no browser ou no Insomnia.


