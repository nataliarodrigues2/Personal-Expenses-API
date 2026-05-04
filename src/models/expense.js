class ExpenseModel {
  constructor() {
    this.expenses = [];
    this.idCounter = 1;
    this.createAt = new Date().toISOString;
  }

  getAll() {
    return this.expenses;
  }

  getById(id) {
    return this.expenses.find((e) => e.id === id); // {}
  }

  create(title, amount, category, date, description) {
    const newExpense = {
      id: this.idCounter++,
      title,
      amount,
      category,
      date,
      description,
      createAt: this.createAt,
    };
    this.expenses.push(newExpense);

    return newExpense;
  }

  update(id, title, amount, category, date, description) {
    const index = this.expenses.findIndex((e) => e.id === id);

    if (index === -1) {
      return null;
    }

    this.expenses[index] = {
      ...this.expenses[index],
      title,
      amount,
      category,
      date,
      description,
    };

    return this.expenses[index];
  }

  delete(id) {
    const index = this.expenses.findIndex((e) => e.id === id);

    if (index === -1) {
      return null;
    }

    this.expenses.splice(index, 1);

    return null;
  }
}

module.exports = ExpenseModel;