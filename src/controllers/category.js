const categoryModel = require('../models/category.js');
const category = new categoryModel();

class CategoryController {
    constructor() { }

    getAll() {
        return category.getAll();
    }

    create(name) {
        return category.create(name);
    }

    getById(id) {
        return category.getById(id);
    }

    update(id, name) {
        return category.update(id, name);
    }

    delete(id) {
        return category.delete(id);
    }


}