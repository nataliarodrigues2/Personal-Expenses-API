const expenseModel = require("../models/expense.js");

const expense = new expenseModel();

class ExpenseController {
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
}

module.exports = new ExpenseController();