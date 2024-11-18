import parkingModel from '../model/parkingModel.js';
export class parkingController {
    // Método para crear un nuevo parqueadero
    static async createParking(req, res) {
        try {
            const {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
            } = req.body;

            if (
                !nombre_parqueadero ||
                !ubicacion_geografica ||
                !direccion ||
                !capacidad ||
                !horario ||
                !tarifa ||
                !id_administrador
            ) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }

            const parking = {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
            };

            const result = await parkingModel.createParking(parking);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para listar todos los parqueaderos
    static async getParkings(req, res) {
        try {
            const parkings = await parkingModel.getParkings();
            res.json(parkings);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para obtener un parqueadero por ID
    static async getParkingById(req, res) {
        try {
            const {id} = req.params;
            const parking = await parkingModel.getParkingById(id);
            res.json(parking);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar un parqueadero
    static async updateParking(req, res) {
        try {
            const {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
            } = req.body;

            if (
                !nombre_parqueadero ||
                !ubicacion_geografica ||
                !direccion ||
                !capacidad ||
                !horario ||
                !tarifa ||
                !id_administrador
            ) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }

            const {id_parqueadero} = req.params;

            const parking = {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
                id_parqueadero,
            };
            const result = await parkingModel.updateParking(parking);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para eliminar un parqueadero
    static async deleteParking(req, res) {
        try {
            const {id} = req.params;
            const result = await parkingModel.deleteParking(id);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
}

export default parkingController;
