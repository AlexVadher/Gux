import reservaModel from "../model/reservaModel.js";

export class reservaController {
        //Método para crear una nueva reserva
    static async createReserva(req, res) {
        try {
            const { id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva } = req.body;

            // Validar datos obligatorios
            if (!id_usuario || !id_parqueadero || !fecha_reserva || !hora_entrada || !hora_salida || !estado_reserva) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                });
            }

            const reserva = { id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva };
            const result = await reservaModel.createReserva(reserva);

            res.status(201).json({
                message: 'Reserva creada exitosamente',
                id_reserva: result,
            });
        } catch (error) {
            console.error('Error al crear la reserva:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

        //Método para actualizar una reserva existente
    static async updateReserva(req, res) {
        try {
            const { id_reserva } = req.params; //id desde la URL
            const { id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva } = req.body;

                //Validar datos obligatorios
            if (!id_usuario || !id_parqueadero || !fecha_reserva || !hora_entrada || !hora_salida || !estado_reserva) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                });
            }

            const result = await reservaModel.updateReserva(id_reserva, {
                id_usuario,
                id_parqueadero,
                fecha_reserva,
                hora_entrada,
                hora_salida,
                estado_reserva,
            });

            if (result === 0) {
                return res.status(404).json({ message: 'Reserva no encontrada' });
            }

            res.json({ message: 'Reserva actualizada con éxito' });
        } catch (error) {
            console.error('Error al actualizar la reserva:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

        //Método para eliminar una reserva
    static async deleteReserva(req, res) {
        try {
            const { id_reserva } = req.params;

            const result = await reservaModel.deleteReserva(id_reserva);

            if (result === 0) {
                return res.status(404).json({ message: 'Reserva no encontrada' });
            }

            res.json({ message: 'Reserva eliminada con éxito' });
        } catch (error) {
            console.error('Error al eliminar la reserva:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

export default reservaController;
