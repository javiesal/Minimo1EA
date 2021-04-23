import { Router } from 'express';
import ColectivoController from '../controllers/colectivoController'

const router: Router = Router();


router.get('/',ColectivoController.getAllColectivo); //Listar TODOS los colectivos
router.post('/',ColectivoController.addColectivo); //Añadir colectivo
router.delete('/del',ColectivoController.delColectivo); //Borrar colectivo

export default router;