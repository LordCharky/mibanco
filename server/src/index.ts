import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/usersRoutes';
import accountRoutes from './routes/accountRoutes';
import movementRoutes from './routes/movementRoutes';

class Server{

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000); 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
/*         this.app.use((req,res,next) => {
            res.status(404).send('Unable to find the requested resource!');
        }); */
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/users',userRoutes);
        this.app.use('/api/account', accountRoutes);
        this.app.use('/api/movement', movementRoutes);
    }

    validate(){
        this.app.use()
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server. start();