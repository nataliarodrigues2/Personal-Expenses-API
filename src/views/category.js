const categoryController = require('../controllers/category.js');

class CategoryView {
    constructor() { }

    getAll(req, res) {
        const categories = categoryController.getAll();

        if (!categories) {
            return res.status(404).send("Nenhuma categoria encontrada");
        }

        res.json(categories);
    }

    create(req, res) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send("O campo 'name' é obrigatório");
        }
}