"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movementController_1 = require("../controllers/movementController");
class MovementRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', movementController_1.movementController.listAll);
        this.router.get('/:id_account', movementController_1.movementController.findMovement);
        this.router.post('/', movementController_1.movementController.create);
        this.router.put('/:id_user', movementController_1.movementController.update);
        this.router.delete('/:id', movementController_1.movementController.delete);
    }
}
const movementRoutes = new MovementRoutes;
exports.default = movementRoutes.router;
