"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movementController = void 0;
const database_1 = __importDefault(require("../database"));
class MovementController {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query("SELECT * from movement");
            res.json(users);
        });
    }
    findMovement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_account } = req.params;
            const response = yield database_1.default.query('SELECT * FROM movement WHERE id_account = ? ORDER BY id_movement DESC', [id_account]);
            if (response.length > 0) {
                return res.json(response);
            }
            res.status(404).json({ text: 'usuario no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO movement set ?', [req.body]);
            res.json({ text: "create user" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_account } = req.params;
            yield database_1.default.query('UPDATE account set ? WHERE id_user = ?', [req.body, id_account]);
            res.json({ text: "usuario actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_account } = req.params;
            yield database_1.default.query("DELETE FROM movement WHERE id_account = ?", [id_account]);
            res.json({ text: "El usuario ha sido eliminado" });
        });
    }
}
exports.movementController = new MovementController();
