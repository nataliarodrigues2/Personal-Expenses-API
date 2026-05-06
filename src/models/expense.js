class ExpenseModel { // cria a classe de modelo de despesa
  constructor() {
    this.expenses = [];
    this.idCounter = 1;
  }

  getAll() { // retorna todas as despesas
    return this.expenses;
  }

  getById(id) { // retorna a despesa com o id correspondente
    return this.expenses.find((e) => e.id === id); // {}
  }

  create(title, amount, category, date, description) { // cria uma nova despesa
    const newExpense = {
      id: this.idCounter++, 
      title,
      amount,
      category,
      date,
      description,
      createdAt: new Date().toISOString()
    };
    this.expenses.push(newExpense);

    return newExpense;
  }

  update(id, title, amount, category, date, description) { // atualiza a despesa com o id correspondente  
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

  delete(id) { // deleta a despesa com o id correspondente
    const index = this.expenses.findIndex((e) => e.id === id);

    if (index === -1) {
      return null;
    }

    this.expenses.splice(index, 1);

    return null;
  }

  existsExpense(id) { // verifica se a despesa existe
    const index = this.expenses.findIndex((e) => e.id === id);

    if (index === -1) {
      return false;
    }
    return true;
  }

}

module.exports = ExpenseModel;