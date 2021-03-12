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
exports.usersController = void 0;
const database_1 = __importDefault(require("../database"));
class UsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // 'SELECT * FROM USER WHERE RUT NOT IN (?) AND DV NOT IN (?)'
            const users = yield database_1.default.query("SELECT * from user");
            res.json(users);
        });
    }
    user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            const user = yield database_1.default.query('SELECT * FROM user WHERE rut = ?', [rut]);
            if (user.length > 0) {
                return res.json({ user });
            }
            res.status(404).json({ text: 'usuario no existe' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT id_user FROM user WHERE rut = ? AND user_password = ?', [req.body.rut, req.body.user_password]);
            res.json(user);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield database_1.default.query('INSERT INTO user set ?', [req.body]);
            res.json(response);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query('UPDATE user set ? WHERE rut = ?', [req.body, rut]);
            res.json({ text: "usuario actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query("DELETE FROM user WHERE rut = ?", [rut]);
            res.json({ text: "El usuario ha sido eliminado" });
        });
    }
}
exports.usersController = new UsersController();
