const expenseController = require("../controllers/expense.js");

class ExpenseView {
  constructor() {}

  getAll(req, res) {
    const expenses = expenseController.getAll();
    res.status(200).send(expenses);
  }

  getById(req, res) {
    const id = Number(req.params.id);
    const expense = expenseController.getById(id);

    if (!expense) {
      return res.status(404).send("id não encontrado");
    }
    res.status(200).send(expense);
  }

  create(req, res) {
    const { title, amount, category, date, description } = req.body;
    const expense = expenseController.create(
      title,
      amount,
      category,
      date,
      description,
    );
    res.status(201).send(expense);
  }

  update(req, res) {
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
    res.status(200).send(expense);
  }

  delete(req, res) {
    const id = Number(req.params.id);
    const expense = expenseController.delete(id);
    res.status(204).end();
  }
}

module.exports = ExpenseView;