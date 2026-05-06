const expenseController = require("../controllers/expense.js"); // traz o controlador de despesa para a view

class ExpenseView { // cria a classe de view de despesa
  constructor() { }

  getAll(req, res) { // retorna todas as despesas, ou um erro caso não tenha nenhuma despesa cadastrada
    const expenses = expenseController.getAll();

    if (!expenses) {
      return res.status(404).send("Nenhuma despesa encontrada");
    }

    res.status(200).send(expenses);
  }

  getById(req, res) { // retorna a despesa com o id correspondente, ou um erro caso não tenha nenhuma despesa com o id correspondente
    const id = Number(req.params.id);
    const expense = expenseController.getById(id);

    if (!expense) {
      return res.status(404).send("Despesa não encontrada");
    }
    res.status(200).send(expense);
  }

  create(req, res) { // cria uma nova despesa, ou um erro caso algum campo não seja preenchido
    const { title, amount, category, date, description } = req.body;
    const expense = expenseController.create(
      title,
      amount,
      category,
      date,
      description,
    );

    if (!title || !amount || !category || !date) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    res.status(201).send(expense);
  }

  update(req, res) { // atualiza a despesa com o id correspondente, ou um erro caso não tenha nenhuma despesa com o id correspondente ou algum campo sem preencher
    const id = Number(req.params.id);
    const { title, amount, category, date, description } = req.body;
    const expense = expenseController.update(
      id,
      title,
      amount,
      category,
      date,
      description,
    );

    if (!expenseController.existsExpense(id)) { // verifica se a despesa existe antes de tentar atualizar
      return res.status(404).send("Despesa não encontrada");
    }

    if (!title || !amount || !category || !date) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }

    res.status(200).send(expense);
  }

  delete(req, res) { // deleta a despesa com o id correspondente, ou um erro caso não tenha nenhuma despesa com o id correspondente
    const id = Number(req.params.id);
    const expense = expenseController.delete(id);

    if (!expenseController.existsExpense(id)) { // verifica se a despesa existe antes de tentar deletar
      return res.status(404).send("Despesa não encontrada");
    }

    res.status(204).end();

  }
}

module.exports = ExpenseView;