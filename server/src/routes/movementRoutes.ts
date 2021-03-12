import { Router} from 'express';
import {movementController} from '../controllers/movementController'

class MovementRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', movementController.listAll);
        this.router.get('/:id_account', movementController.findMovement);
        this.router.post('/', movementController.create);
        this.router.put('/:id_user', movementController.update);
        this.router.delete('/:id', movementController.delete);
    }
}

const movementRoutes = new MovementRoutes;
export default movementRoutes.router;