# Documentação da API de Carros

## Introdução

A `API de Carros` é um serviço que permite a manipulação de informações relacionadas a carros, incluindo operações como a recuperação de todos os carros, a obtenção de detalhes de um carro específico, a inserção de novos carros, a atualização de registros de carros existentes e a exclusão de carros do sistema.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```dotenv
Root
│   .env
│   .gitignore
│   package-lock.json
│   package.json
|	readme.md
│
└───src
    │   server.js
    │
    ├───config
    │       db.js
    │
    ├───controllers
    │   │   carController.js
    │   │
    │   └───utils
    │           formatCarData.js
    │
    ├───database
    │       db.js
    │       handleDbError.js
    │
    ├───routes
    │       carRoutes.js
    │
    ├───services
    │       carServices.js
    │
    └───utils
            printMessage.js

```

### Descrição dos Diretórios

- **config**: Contém a configuração de conexão com o banco de dados.
- **controllers**: Responsável pela lógica de controle da aplicação, manipula dados e interage com os serviços.
- **controllers/utils**: Contém utilitários específicos para os controladores.
- **database**: Gerencia a conexão com o banco de dados e lida com erros de banco de dados.
- **routes**: Define as rotas da API e associa cada rota a uma função no controlador.
- **services**: Lida com a lógica de negócios e interage diretamente com o banco de dados.
- **utils**: Contém utilitários genéricos, como funções para imprimir mensagens no console.

## Configuração do Projeto

### Arquivo: `.env`

O arquivo `.env` contém as configurações sensíveis do projeto, como credenciais do banco de dados e a porta do servidor.

Exemplo:

### 1. `DB_HOST`:

- **Descrição:** Especifica o host do banco de dados MySQL onde os dados extraídos serão armazenados.
- **Como Preencher:** Forneça o endereço do host do seu banco de dados MySQL. Se estiver sendo executado localmente, use "localhost".
- **Exemplo:** `DB_HOST=localhost`

### 2. `DB_USER`:

- **Descrição:** Define o usuário que será utilizado para acessar o banco de dados MySQL.
- **Como Preencher:** Insira o nome de usuário associado ao seu banco de dados MySQL.
- **Exemplo:** `DB_USER=usuario_exemplo`

### 3. `DB_PASSWORD`:

- **Descrição:** Indica a senha associada ao usuário do banco de dados MySQL.
- **Como Preencher:** Insira a senha correspondente ao usuário do seu banco de dados MySQL.
- **Exemplo:** `DB_PASSWORD=senha_segura`

### 4. `DB_DATABASE`:

- **Descrição:** Especifica o nome do banco de dados onde os dados extraídos serão armazenados.
- **Como Preencher:** Insira o nome do banco de dados onde deseja armazenar os dados extraídos.
- **Exemplo:** `DB_DATABASE=banco_dados_exemplo`

### 5. `DB_CONNECTION_LIMIT`:

- **Descrição:** Define o limite máximo de conexões simultâneas permitidas ao banco de dados.
- **Como Preencher:** Insira o número máximo de conexões simultâneas permitidas para interações com o banco de dados.
- **Exemplo:** `DB_CONNECTION_LIMIT=10`

### 6. `SERVER_PORT`

- **Descrição:** Define a porta em que o servidor da aplicação estará escutando por solicitações.
- **Como Preencher:** Insira o número 3000.
- **Exemplo:** `SERVER_PORT=3000`

### Arquivo: `package.json`

O arquivo `package.json` descreve as dependências do projeto e os scripts associados.

```json
{
  "name": "apiCar",
  "version": "1.0.0",
  "description": "",
  "main": "./src/server.js",
  "scripts": {
    "start": "nodemon ./src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mysql2": "^3.6.5"
  }
}
```

## Funcionalidades da API

### Arquivo: `./src/server.js`

Este arquivo é responsável por iniciar o servidor Express, configurar middlewares como CORS e `body-parser`, e definir as rotas associadas aos controladores.

### Arquivo: `./src/config/db.js`

Este arquivo estabelece a conexão com o banco de dados MySQL usando as configurações fornecidas no arquivo `.env`.

### Arquivo: `./src/controllers/carController.js`

O controlador de carros contém funções que lidam com solicitações HTTP relacionadas a carros, como recuperar todos os carros, obter detalhes de um carro, inserir, atualizar e excluir carros.

### Arquivo: `./src/controllers/utils/formatCarData.js`

Este utilitário auxiliar formata os dados dos carros para uma estrutura específica antes de serem enviados como resposta HTTP.

### Arquivo: `./src/database/db.js`

Este arquivo gerencia a conexão com o banco de dados, usando as configurações definidas em `./src/config/db.js`.

### Arquivo: `./src/database/handleDbError.js`

Este utilitário lida com diferentes erros que podem ocorrer durante a conexão ou operações no banco de dados.

### Arquivo: `./src/routes/carRoutes.js`

As rotas associadas à API de carros são definidas neste arquivo, mapeando as solicitações HTTP para funções correspondentes no controlador.

### Arquivo: `./src/services/carServices.js`

O serviço de carros contém funções que encapsulam a lógica de negócios associada a carros, interagindo diretamente com o banco de dados.

### Arquivo: `./src/utils/printMessage.js`

Este utilitário fornece funções para imprimir mensagens formatadas no console, como mensagens de sucesso ou erro.

## Estrutura da Tabela

A tabela `car` é responsável por armazenar informações relacionadas aos carros.

```sql
CREATE TABLE car (
    id bigint AUTO_INCREMENT,
    modelo varchar(255) NOT NULL,
    placa varchar(10) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY placa (placa)
);
```

## Uso da API

**API** pode ser acessada através das seguintes rotas:

- `GET /api/cars`: Recupera todos os carros.

```json
{
    "result": [
        {
            "id": 1,
            "modelo": "Toyota Corolla",
            "placa": "ABC123"
        },
        {
            "id": 2,
            "modelo": "Honda Civic",
            "placa": "XYZ789"
        },
        {
            "id": 3,
            "modelo": "Ford Focus",
            "placa": "123XYZ"
        },
        ...
        {
            "id": 18,
            "modelo": "Chevrolet Cruze",
            "placa": "456ABC"
        },
        {
            "id": 19,
            "modelo": "Volkswagen Golf",
            "placa": "789DEF"
        },
        {
            "id": 20,
            "modelo": "Honda Fit",
            "placa": "GJG3535"
        }
    ]
}
```

- `GET /api/car/:id`: Recupera detalhes de um carro específico.

```json
{
  "result": {
    "id": 1,
    "modelo": "Toyota Corolla",
    "placa": "ABC123"
  }
}
```

- `POST /api/car`: Insere um novo carro.

**body:**

```json
"modelo":"Jeep Renage",
"placa" : "fvv7j80"
```

**resposta:**

```json
{
  "result": "Registro adicionado com sucesso."
}
```

- `PUT /api/car/:id`: Atualiza os detalhes de um carro existente.

**body:**

```json
"modelo":"Jeep Renage",
"placa" : "fvv7j87"
```

**resposta:**

```json
{
  "result": "Registro atualizado com sucesso."
}
```

- `DELETE /api/car/:id`: Exclui um carro pelo ID.

**resposta:**

```json
{
  "result": "Registro deletado com sucesso."
}
```
