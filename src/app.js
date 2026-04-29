const express = require('express');
const expenseView = require('./views/expense.js');

const app = express();

app.use(express.json());

app.get('/expenses', expenseView.getAll());
app.get('/expense/:id', expenseView.getById());
app.post('/expense', expenseView.create());
app.put('/expense/:id', expenseView.update());
app.delete('/expense/:id', expenseView.delete());

app.listen(3000, () => {
    console.log(`Servidor rodando na porta: http://localhost:${3000}`);
});