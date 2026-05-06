const express = require("express");
const expenseView = require("./views/expense.js"); // traz a view de despesa para o app.js

const app = express();
const expenses = new expenseView();

app.use(express.json());

// rotas existentes
app.get("/api/expenses", expenses.getAll); 
app.get("/api/expenses/:id", expenses.getById);
app.post("/api/expenses", expenses.create);
app.put("/api/expenses/:id", expenses.update);
app.delete("/api/expenses/:id", expenses.delete);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta: http://localhost:${3000}`);
});