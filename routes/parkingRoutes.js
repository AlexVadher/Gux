import {Router} from 'express';
import parkingController from '../controllers/parkingController.js';

const routerParking = Router();

// Endpoints para parqueaderos

// Obtener todos los parqueaderos (GET)
routerParking.get('/parking', parkingController.getParkings);
// Obtener un parqueadero por ID (GET)
routerParking.get('/parking/:id', parkingController.getParkingById);
// Crear un nuevo parqueadero (POST)
routerParking.post('/registerParking', parkingController.createParking);
// Actualizar un parqueadero (PUT)
routerParking.put('/updateParking', parkingController.updateParking);
// Eliminar un parqueadero (DELETE)
routerParking.delete('/parkingDelete/:id', parkingController.deleteParking);

export default routerParking;
