import { Router} from 'express';
import {usersController} from '../controllers/usersController'

class UsersRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', usersController.list);
        this.router.get('/:rut', usersController.user);
        this.router.post('/login', usersController.login);
        this.router.post('/', usersController.create);
        this.router.put('/:rut', usersController.update);
        this.router.delete('/:rut', usersController.delete);
    }
}

const usersRoutes = new UsersRoutes;
export default usersRoutes.router;