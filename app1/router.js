import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController } from './controller/testcontroller.js';

const router = new Router();

const defaultRouter = combineRouters( router);

router.get('/student_data', selectController);

router.post('/insert_data', insertController);

export default defaultRouter;
//http://localhost:3000/student_data?name=gauree