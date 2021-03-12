"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaController_1 = require("../controllers/cuentaController");
class CuentaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cuentaController_1.cuentaController.listAll);
        this.router.get('/:rut', cuentaController_1.cuentaController.findCuenta);
        this.router.post('/', cuentaController_1.cuentaController.create);
        this.router.put('/:rut', cuentaController_1.cuentaController.update);
        this.router.delete('/:rut', cuentaController_1.cuentaController.delete);
    }
}
const cuentaRoute = new CuentaRoutes;
exports.default = cuentaRoute.router;
