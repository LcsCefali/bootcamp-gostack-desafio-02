import { Router } from 'express';
import User from './app/models/User';
import UserContoller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/users', UserContoller.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // middleware global -- executa em tudo que esta após dele

routes.put('/users', UserContoller.update);

export default routes;
