"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersController_1.usersController.list);
        this.router.get('/:rut', usersController_1.usersController.user);
        this.router.post('/login', usersController_1.usersController.login);
        this.router.post('/', usersController_1.usersController.create);
        this.router.put('/:rut', usersController_1.usersController.update);
        this.router.delete('/:rut', usersController_1.usersController.delete);
    }
}
const usersRoutes = new UsersRoutes;
exports.default = usersRoutes.router;
