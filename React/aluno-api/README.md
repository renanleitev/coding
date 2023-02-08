# Projeto experimental com React

Projeto criado apenas para testes, usando [Create React App](https://github.com/facebook/create-react-app).

## Para instalar as dependências (package.json)

`npm install`

Adicionar em package.json (se não estiver):

    "proxy": "http://localhost:3001",

## Iniciando o projeto 

No terminal, insira o comando:

`npm start`

Acesse [http://localhost:3000](http://localhost:3000) para visualizar no browser.

## Banco de Dados

O banco de dados utilizado foi o MariaDB, em formato Docker.

Para instalar:

    sudo docker run --restart always -d --name bdmariadb1 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=abc mariadb

Obs: É preciso iniciar o banco de dados antes de rodar a aplicação React.


