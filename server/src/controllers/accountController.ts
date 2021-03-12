import {Request, Response} from 'express';
import db from '../database';

class AccountController{

    public async listAll(req: Request, res: Response){
        const account = await db.query("SELECT * from account");
        res.json(account);
    }

    public async findCuenta(req: Request, res: Response){
        const {id_user} = req.params;
        const cuenta = await db.query('SELECT * FROM account WHERE id_user = ?', [id_user]);
        res.json(cuenta);
    }

    public async create(req: Request, res: Response){
        await db.query('INSERT INTO account set ?', [req.body])
        res.json({text: "create account"});
    }

    public async update(req: Request, res: Response){
        const {id_user} = req.params;
        const cuenta = await db.query('UPDATE account set ? WHERE id_user = ?', [req.body, id_user]);
        res.json(cuenta);
    }

    public async delete(req: Request, res: Response){
        // const {rut} = req.params;
        // await db.query("DELETE FROM account WHERE rut = ?", [rut]);
        res.json({text: "la cuenta ha sido eliminada"});
    }
}

export const accountController = new AccountController();