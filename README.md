# Personal Expenses API

## Descrição 

API REST para gerenciamento de despesas pessoais, permitindo registrar, listar, atualizar e remover despesas.

> Desenvolvimento Back-End - 3º Fase  

> Natalia S. Rodrigues 

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- Persistência em memória

---

## Rotas da API

| Método | Rota                  | Descrição                               |
|--------|-----------------------|-----------------------------------------|
| GET    | `/api/expenses`       | Lista todas as despesas cadastradas     |
| GET    | `/api/expenses/:id`   | Busca despesa por ID                    |
| POST   | `/api/expenses`       | Cria uma nova despesa                   |
| PUT    | `/api/expenses/:id`   | Atualiza uma despesa pelo ID informado  |
| DELETE | `/api/expenses/:id`   | Deleta uma despesa pelo ID informado    |

---

## Como Executar

```bash
# Clonar o repositório
git clone https://github.com/nataliarodrigues2/Personal-Expenses-API.git

# Entrar na pasta
cd personal-expenses-api

# Instalar dependências
npm install

# Rodar a aplicação
npm start
```

A API estará disponível em `http://localhost:3000`.

---

## Como Testar

A API é testada utilizando o [Postman](https://www.postman.com/).

Com a aplicação rodando, é possível testar as rotas enviando requisições para os endpoints listados acima.

### Exemplo de requisição

**POST** `/api/expenses`

```json
{
  "title": "Supermercado",
  "amount": 150.5,
  "category": "Alimentação",
  "date": "2026-03-10",
  "description": "Compra semanal"
}
```

**Resposta:**

```json
{
  "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "title": "Supermercado",
  "amount": 150.5,
  "category": "Alimentação",
  "date": "2026-03-10",
  "description": "Compra semanal",
  "createdAt": "2026-03-11T12:00:00.000Z"
}
```

---

## Regras de Negócio

- O campo `title` é obrigatório
- O campo `amount` deve ser maior que zero
- O `id` deve ser gerado automaticamente
- Caso uma despesa não exista, retorna `404`

---

## Estrutura do Projeto

```
personal-expenses-api/
├── src/
│   ├── controllers/
│   │   └── expense.js
│   ├── data/
│   │   └── expenses.json
│   ├── models/
│   │   └── expense.js
│   ├── views/
│   │   └── expense.js
│   └── app.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```