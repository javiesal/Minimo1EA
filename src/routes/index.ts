import {Router} from 'express';
import ColectivoRouter from './Rcolectivo';

const router:Router = Router();

router.use('/app/colectivos',ColectivoRouter);

export default router;