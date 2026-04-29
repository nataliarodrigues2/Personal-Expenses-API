const expenseController = require('../controllers/expense.js')

class ExpenseView {
    constructor() {

    }

    getAll(req, res) {
        const expenses = expenseController.getAll();
        res.status(200).json(expenses);
    }

    getById(req, res) {
        const id = Number(req.params.id);
        const expense = expenseController.getById(id);
        res.send(200).json(expense);
    }

    create(req, res) {
        const {title, amount, category, date, description} = req.body;
        const expense = expenseController.create(title, amount, category, date, description);
        res.send(201).json(expense);
    }

    update(req, res) {
        const id = Number(req.params.id);
        const {title, amount, category, date, description} = req.body;
        const expense = expenseController.update(title, amount, category, date, description);
        res.send(200).json(expense);
    }

    delete(req, res) {
        const id = Numer(req.params.id);
        const expense = expenseController.delete(id);
        res.send(204);
    }
} 