"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = require("../controllers/accountController");
class CuentaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', accountController_1.accountController.listAll);
        this.router.get('/:id_user', accountController_1.accountController.findCuenta);
        this.router.post('/', accountController_1.accountController.create);
        this.router.put('/:id_user', accountController_1.accountController.update);
        this.router.delete('/:rut', accountController_1.accountController.delete);
    }
}
const cuentaRoute = new CuentaRoutes;
exports.default = cuentaRoute.router;
