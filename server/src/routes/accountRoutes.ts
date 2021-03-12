import { Router} from 'express';
import {accountController} from '../controllers/accountController'

class CuentaRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', accountController.listAll);
        this.router.get('/:id_user', accountController.findCuenta);
        this.router.post('/', accountController.create);
        this.router.put('/:id_user', accountController.update);
        this.router.delete('/:rut', accountController.delete);
    }
}

const cuentaRoute = new CuentaRoutes;
export default cuentaRoute.router;