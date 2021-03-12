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
exports.cuentaController = void 0;
const database_1 = __importDefault(require("../database"));
class CuentaController {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //    const cuenta = await db.query("SELECT * from cuenta");
            //     res.json(cuenta);
            res.json({ text: 'asd' });
        });
    }
    findCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {rut} = req.params;
            // const cuenta = await db.query('SELECT * FROM cuenta WHERE rut = ?', [rut]);
            // if(cuenta.length > 0){
            //     return res.json({cuenta});
            // }
            res.status(404).json({ text: 'cuenta no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cuenta set ?', [req.body]);
            res.json({ text: "create cuenta" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query('UPDATE cuenta set ? WHERE rut = ?', [req.body, rut]);
            res.json({ text: "cuenta actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rut } = req.params;
            yield database_1.default.query("DELETE FROM cuenta WHERE rut = ?", [rut]);
            res.json({ text: "la cuenta ha sido eliminada" });
        });
    }
}
exports.cuentaController = new CuentaController();
