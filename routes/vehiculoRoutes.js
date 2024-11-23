import vehiculoController from '../controllers/vehiculoController.js';
import { Router } from 'express';

const router = Router();

router.post('/vehiculos', vehiculoController.createVehiculo); // Crear vehículo
router.put('/updateVehiculos/:id_vehiculo', vehiculoController.updateVehiculo); // Actualizar vehículo
router.delete('/deleteVehiculos/:id_vehiculo', vehiculoController.deleteVehiculo); // Eliminar vehículo

export default router;
