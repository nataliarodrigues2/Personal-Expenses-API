const expenseModel = require('../models/expense.js')

class ExpenseController {
    constructor() {

    }

    getAll() {
        return expenseModel.getAll();
    }

    getById(id) {
        return expenseModel.getById(id);
    }

    create(title, amount, category, date, description) {
        return expenseModel.create(title, amount, category, date, description);
    }

    update(id, title, amount, category, date, description) {
        return expenseModel.update(id, title, amount, category, date, description);
    }

    delete(id) {
        return expenseModel.delete(id);
    }
}

module.exports = new ExpenseController();