import {Request, Response} from 'express';
import db from '../database';

class UsersController{

    public async list(req: Request, res: Response){
       // 'SELECT * FROM USER WHERE RUT NOT IN (?) AND DV NOT IN (?)'
       const users = await db.query("SELECT * from user");
        res.json(users);
    }

    public async user(req: Request, res: Response){
        const {rut} = req.params;
        const user = await db.query('SELECT * FROM user WHERE rut = ?', [rut]);
        if(user.length > 0){
            return res.json({user});
        }
        res.status(404).json({text: 'usuario no existe'});
    }

    public async login(req: Request, res: Response){

        const user = await db.query('SELECT id_user FROM user WHERE rut = ? AND user_password = ?', [req.body.rut, req.body.user_password]);
        res.json(user);
    }

    public async create(req: Request, res: Response){
        const response = await db.query('INSERT INTO user set ?', [req.body])
        res.json(response);
    }

    public async update(req: Request, res: Response){
        const {rut} = req.params;
        await db.query('UPDATE user set ? WHERE rut = ?', [req.body, rut]);
        res.json({text: "usuario actualizado"});
    }

    public async delete(req: Request, res: Response){
        const {rut} = req.params;
        await db.query("DELETE FROM user WHERE rut = ?", [rut]);
        res.json({text: "El usuario ha sido eliminado"});
    }
}

export const usersController = new UsersController();