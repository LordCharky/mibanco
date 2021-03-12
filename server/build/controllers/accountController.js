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
exports.accountController = void 0;
const database_1 = __importDefault(require("../database"));
class AccountController {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield database_1.default.query("SELECT * from account");
            res.json(account);
        });
    }
    findCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            const cuenta = yield database_1.default.query('SELECT * FROM account WHERE id_user = ?', [id_user]);
            res.json(cuenta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO account set ?', [req.body]);
            res.json({ text: "create account" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user } = req.params;
            const cuenta = yield database_1.default.query('UPDATE account set ? WHERE id_user = ?', [req.body, id_user]);
            res.json(cuenta);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {rut} = req.params;
            // await db.query("DELETE FROM account WHERE rut = ?", [rut]);
            res.json({ text: "la cuenta ha sido eliminada" });
        });
    }
}
exports.accountController = new AccountController();
