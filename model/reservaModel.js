import pool from "../config/dbConfig.js";

export class reservaModel {
    //Método para crear una reserva
  static async createReserva({ id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva }) {
    const [result] = await pool.query(
      `INSERT INTO reserva (id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva]
    );
    return result.insertId; // devuelve el id
  }

    //Método para actualizar una reserva
  static async updateReserva(id, { id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva }) {
    const [result] = await pool.query(
      `UPDATE reserva 
       SET id_usuario = ?, id_parqueadero = ?, fecha_reserva = ?, hora_entrada = ?, hora_salida = ?, estado_reserva = ?
       WHERE id_reserva = ?`,
      [id_usuario, id_parqueadero, fecha_reserva, hora_entrada, hora_salida, estado_reserva, id]
    );
    return result.affectedRows; // Devuelve las filas afectadas
  }

    //Método para eliminar una reserva
  static async deleteReserva(id) {
    const [result] = await pool.query(
      `DELETE FROM reserva WHERE id_reserva = ?`,
      [id]
    );
    return result.affectedRows; // Devuelve las filas afectadas
}
  
}

export default reservaModel;
