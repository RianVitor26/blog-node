# Blog com Node.js

## Em desenvolvimento...

### Finalidade do projeto
Conhecer o server-side e aprender os passos para fazer um blog simples

### Tecnologias e ferramentas usadas
* Node.js, para trabalhar com javascript no back-end
* Express.js, para facilitar a criação do servidor
* Sequelize, para facilitar a criação de um banco de dados
* MySQL, mas, pode ser outro database, tipo: SQLite, SQL Server, PostgreSQL...
* EJS, para dar usar javascript no html e deixar as páginas dinâmicas
* BodyParser, para trabalhar com os dados vindo do seu cliente. Quando o cliente manda dados via form payload, esse pacote ele formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req. body.

### Passos para a construção

1. npm init, para guardas as versões dos meus pacotes e registrar a inicialização do meu projeto
2. instalação dos aquivos para o uso (express, mysql2(ou outro database), sequelize, ejs(ou outro template engine), bodyparser)
3. criar as configurações do app (Criar o server com express, configurar o bodyParser, EJS, )
4. criar um arquivo para gerenciar as rotas e configurá-lo
5. criar as pastas para o padrão de arquitetura MVC
6. criar uma pasta para o banco de dados
7. configurar o sequelize com o database na pasta do banco de dados
8. criar um arquivo para para os posts
9. criar um model para o post na pasta models
10. criar as views com extenção ejs
