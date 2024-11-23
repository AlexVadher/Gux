import reservaController from '../controllers/reservaController.js';
import { Router } from 'express';

const router = Router();

router.post('/reserva', reservaController.createReserva);
router.put('/updateReserva/:id_reserva', reservaController.updateReserva);
router.delete('/deleteReserva/:id_reserva', reservaController.deleteReserva);

export default router;
