const expenseModel = require("../models/expense.js"); // pega o modelo de despesa
const expense = new expenseModel();

class ExpenseController { // cria a classe de controle de despesa
    constructor() { }

    getAll() {
        return expense.getAll();
    }

    getById(id) {
        return expense.getById(id);
    }

    create(title, amount, category, date, description) {
        
        return expense.create(title, amount, category, date, description);
    }

    update(id, title, amount, category, date, description) {
        return expense.update(id, title, amount, category, date, description);
    }

    delete(id) {
        return expense.delete(id);
    }

    existsExpense(id) {
        return expense.existsExpense(id);
    }
}

module.exports = new ExpenseController();