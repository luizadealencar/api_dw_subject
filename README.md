# API de Gestão de Pacientes

Este é uma API de gestão de pacientes que permite executar a criação, listagem, atualização e remoção de pacientes, bem como fazer autenticação.

## Rotas

### Pacientes

- **GET /paciente**: Retorna todos os pacientes cadastrados.
- **POST /paciente**: Cria um novo paciente.
- **GET /paciente/:id**: Retorna as informações de um paciente específico.
- **PUT /paciente/:id**: Atualiza as informações de um paciente.
- **DELETE /paciente/:id**: Desativa um paciente.

### Autenticação

- **POST /auth/login**: Realiza o login de um paciente e retorna um token de autenticação.
- **POST /auth/logout**: Realiza o logout do paciente.

## Funcionalidades

- Criação de pacientes: Permite criar novos pacientes com informações como CPF, nome, e-mail, senha, telefone, endereço, plano de saúde, entre outros.
- Listagem de pacientes: Retorna uma lista de todos os pacientes cadastrados.
- Atualização de pacientes: Permite atualizar as informações de um paciente existente, incluindo nome, e-mail, senha, telefone, plano de saúde, entre outros.
- Desativação de pacientes: Desativa um paciente, mantendo o registro no sistema, mas marcando-o como inativo.
- Autenticação: Permite que os pacientes façam login no sistema para acessar recursos protegidos.

## Pontos de Melhoria

- Atualmente o sistema possui apenas Paciente, Endereco e PlanoDeSaude, falta implementar as outras entidades e pensar em como relacioná-las ao sistema.
- Documentação: Melhorar a documentação do projeto.
- Validação dos dados de entrada e saída.

## Executando o Projeto

Para executar o projeto, siga as etapas abaixo:

1. Instale as dependências do projeto executando o comando `npm install`.

2. Crie um arquivo `.env` e configure as variáveis de ambiente necessárias, estão especificadas o arquivo `.env.example`.

3. Inicie o servidor executando o comando `npm start`.

4. O servidor estará acessível na porta definida nas variáveis de ambiente.

5. Abre o Insomnia (ou software similar, como o Postman) e importe o arquivo em `docs/rotas_insomnia`

6. Clique na aba "debug" e teste a API 

## Tecnologias

O projeto de Gestão de Pacientes utiliza as seguintes tecnologias:

- **Node.js**: É uma plataforma de desenvolvimento de aplicações em JavaScript no lado do servidor. É utilizado no projeto para criar a API RESTful que gerencia os pacientes e a autenticação.

- **Express.js**: É um framework web para Node.js que simplifica o desenvolvimento de aplicações web e APIs. No projeto, o Express.js é utilizado para criar as rotas, tratar requisições e respostas HTTP, e gerenciar middlewares.

- **JWT (JSON Web Token)**: É um padrão para criação de tokens de acesso que podem ser usados para autenticação. No projeto, o JWT é utilizado para gerar tokens de autenticação para os pacientes e garantir acesso seguro às rotas protegidas.


- **Banco de Dados**: O projeto faz uso de um banco de dados para armazenar as informações dos pacientes. O tipo de banco de dados utilizado  foi um NoSQL, no caso, SQLite. Um banco muito usado para desenvolvimento de forma rápida onde as informações ficam em um arquivo no próprio projeto.

- **bcrypt**: O bcrypt é uma biblioteca de criptografia de senhas. No projeto, o bcrypt pode ser utilizado em conjunto com a função `encryptPassword` para criptografar a senha do paciente antes de armazená-la no banco de dados.

- **TypeORM**: O TypeORM é uma biblioteca de ORM (Object-Relational Mapping) que facilita a interação com o banco de dados através de objetos TypeScript. 

- **http-status-codes**: O http-status-codes é um pacote que contém constantes para os códigos de status HTTP. Ele fornece uma maneira simples de usar códigos de status padronizados em suas respostas HTTP. No projeto, essa biblioteca pode ser usada para retornar os códigos de status corretos em diferentes situações, como sucesso, erro ou redirecionamento.

- **dotenv**: O dotenv é uma biblioteca que permite carregar variáveis de ambiente a partir de um arquivo `.env`.

Essas tecnologias foram escolhidas por serem amplamente utilizadas, possuírem uma boa documentação e uma comunidade ativa de desenvolvedores. 

## Autora
[<img src="https://avatars.githubusercontent.com/u/66708154?s=96&v=4" width=115><br><sub>Luiza Alencar</sub>](https://github.com/luizadealencar)

## Licença
Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

