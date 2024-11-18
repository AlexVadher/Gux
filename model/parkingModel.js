import pool from '../config/dbConfig.js';

export class parkingModel {
    // Método para crear un parqueadero
    static async createParking(parking) {
        try {
            const {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
            } = parking;

            console.log('Datos recibidos del controller: ', parking); // depurar estilo junior XD

            const result = await pool.query(
                'INSERT INTO parqueadero (nombre_parqueadero, ubicacion_geografica, direccion, capacidad, horario, tarifa, id_administrador) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    nombre_parqueadero,
                    ubicacion_geografica,
                    direccion,
                    capacidad,
                    horario,
                    tarifa,
                    id_administrador,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar un parqueadero
    static async updateParking(parking) {
        try {
            const {
                nombre_parqueadero,
                ubicacion_geografica,
                direccion,
                capacidad,
                horario,
                tarifa,
                id_administrador,
                id_parqueadero,
            } = parking;

            console.log('Datos recibidos del controller: ', parking); // depurar estilo junior XD

            const result = await pool.query(
                'UPDATE parqueadero SET nombre_parqueadero = ?, ubicacion_geografica = ?, direccion = ?, capacidad = ?, horario = ?, tarifa = ?, id_administrador = ? WHERE id_parqueadero = ?',
                [
                    nombre_parqueadero,
                    ubicacion_geografica,
                    direccion,
                    capacidad,
                    horario,
                    tarifa,
                    id_administrador,
                    id_parqueadero,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para obtener todos los parqueaderos
    static async getParkings() {
        try {
            const result = await pool.query('SELECT * FROM parqueadero');
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para eliminar un parqueadero
    static async deleteParking(id) {
        try {
            const result = await pool.query(
                'DELETE FROM parqueadero WHERE id_parqueadero = ?',
                [id],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}

export default parkingModel;
