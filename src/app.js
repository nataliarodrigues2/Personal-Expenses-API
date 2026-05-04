const express = require("express");
const expenseView = require("./views/expense.js");

const app = express();
const expenses = new expenseView();

app.use(express.json());

app.get("/expenses", expenses.getAll);
app.get("/expense/:id", expenses.getById);
app.post("/expense", expenses.create);
app.put("/expense/:id", expenses.update);
app.delete("/expense/:id", expenses.delete);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta: http://localhost:${3000}`);
});