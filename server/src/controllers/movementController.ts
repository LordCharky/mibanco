import {Request, Response} from 'express';
import db from '../database';

class MovementController{

    public async listAll(req: Request, res: Response){
        const users = await db.query("SELECT * from movement");
        res.json(users);
    }

    public async findMovement(req: Request, res: Response){
        const {id_account} = req.params;
        const response = await db.query('SELECT * FROM movement WHERE id_account = ? ORDER BY id_movement DESC', [id_account]);
        if(response.length > 0){
            return res.json(response);
        }
        res.status(404).json({text: 'usuario no existe'});
    }

    public async create(req: Request, res: Response){
        await db.query('INSERT INTO movement set ?', [req.body])
        res.json({text: "create user"});
    }

    public async update(req: Request, res: Response){
        const {id_account} = req.params;
        await db.query('UPDATE account set ? WHERE id_user = ?', [req.body, id_account]);
        res.json({text: "usuario actualizado"});
    }

    public async delete(req: Request, res: Response){
        const {id_account} = req.params;
        await db.query("DELETE FROM movement WHERE id_account = ?", [id_account]);
        res.json({text: "El usuario ha sido eliminado"});
    }
}

export const movementController = new MovementController();