const userModel = require('../models/user.js');
const user = new userModel();

class UserController {
    constructor() { }

    async login(email, password) {
        return user.login(email, password);
    }

    async getAll() {
        return user.getAll();
    }

    async create(email, password, name) {
        return user.create(email, password, name);
    }

    async getById(id) {
        return user.getById(id);
    }
}

module.exports = new UserController();