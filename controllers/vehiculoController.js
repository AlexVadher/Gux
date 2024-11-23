import vehiculoModel from "../model/vehiculoModel.js";

export class vehiculoController {
    // Método para crear un nuevo vehículo
    static async createVehiculo(req, res) {
        try {
            const { placa, marca, modelo, id_tipovehiculo, id_usuario } = req.body;

            if (!placa || !marca || !modelo || !id_tipovehiculo || !id_usuario) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                });
            }

            const vehiculo = { placa, marca, modelo, id_tipovehiculo, id_usuario };
            const result = await vehiculoModel.createVehiculo(vehiculo);

            res.status(201).json({
                message: 'Vehículo creado exitosamente',
                id_vehiculo: result,
            });
        } catch (error) {
            console.error('Error al crear el vehículo:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    // Método para actualizar un vehículo existente
    static async updateVehiculo(req, res) {
        try {
            const { id_vehiculo } = req.params; //id desde la URL
            const { placa, marca, modelo, id_tipovehiculo, id_usuario } = req.body;

            if (!placa || !marca || !modelo || !id_tipovehiculo || !id_usuario) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                });
            }

            const result = await vehiculoModel.updateVehiculo(id_vehiculo, {
                placa,
                marca,
                modelo,
                id_tipovehiculo,
                id_usuario,
            });

            if (result === 0) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.json({ message: 'Vehículo actualizado con éxito' });
        } catch (error) {
            console.error('Error al actualizar el vehículo:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    // Método para eliminar un vehículo
    static async deleteVehiculo(req, res) {
        try {
            const { id_vehiculo } = req.params;

            const result = await vehiculoModel.deleteVehiculo(id_vehiculo);

            if (result === 0) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.json({ message: 'Vehículo eliminado con éxito' });
        } catch (error) {
            console.error('Error al eliminar el vehículo:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

export default vehiculoController;
