# Agendamento API Node.js

API desenvolvida com Node.js, Express e TypeScript, com foco na construção de um sistema de agendamento.

## Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- Zod
- dotenv
- CORS
- tsx

## Requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- npm
- Git

## Instalação

Clone o repositório:

```bash
git clone https://github.com/blackStormktl/Agendamento_Api_node.git
```

Entre na pasta do projeto:

```bash
cd Agendamento_Api_node
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto, caso necessário:

```env
PORT=3001
```

O servidor utiliza a variável `PORT` para definir a porta de execução. Quando ela não está configurada, a porta padrão é `3001`.

**Importante:** não compartilhe senhas, tokens ou outras informações confidenciais no repositório.

## Executar o projeto

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor utiliza `tsx watch` para executar o arquivo TypeScript e observar alterações durante o desenvolvimento.

Com a configuração padrão, o endereço local é:

```text
http://localhost:3001
```

## Validação de dados

O projeto utiliza Zod para validar os dados recebidos pela API.

O schema de usuário define validações para:

- Nome: texto com pelo menos três caracteres, aceitando letras e espaços.
- E-mail: validação do formato do endereço.
- Senha: mínimo de quatro caracteres.

## Rota disponível

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/` | Recebe dados de usuário e aplica as validações definidas no projeto. |

### Exemplo de requisição

Envie uma requisição `POST` para:

```text
http://localhost:3001/
```

Corpo JSON:

```json
{
  "name": "Joao Silva",
  "email": "joao@example.com",
  "password": "1234"
}
```

## Estrutura do projeto

```text
Agendamento_Api_node/
├── src/
│   ├── controller/
│   ├── interface/
│   ├── middleware/
│   ├── schemas/
│   ├── service/
│   ├── route.ts
│   └── server.ts
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Status do projeto

**Em desenvolvimento.**

O projeto possui a estrutura inicial da API, configuração do servidor Express, validação de dados com Zod e organização do código em controllers, middleware, schemas e serviços.

## Autor

Desenvolvido por [blackStormktl](https://github.com/blackStormktl).

## Repositório

[Agendamento_Api_node no GitHub](https://github.com/blackStormktl/Agendamento_Api_node)
