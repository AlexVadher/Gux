import pool from "../config/dbConfig.js";

export class vehiculoModel {
    // Método para crear un vehiculo
    static async createVehiculo({ placa, marca, modelo, id_tipovehiculo, id_usuario }) {
    const [result] = await pool.query(
      `INSERT INTO vehiculo (placa, marca, modelo, id_tipovehiculo, id_usuario) 
       VALUES (?, ?, ?, ?, ?)`,
      [placa, marca, modelo, id_tipovehiculo, id_usuario]
    );
    return result.insertId;
  }
    // Método para actualizar un vehiculo
  static async updateVehiculo(id, { placa, marca, modelo, id_tipovehiculo, id_usuario }) {
    const [result] = await pool.query(
      `UPDATE vehiculo 
       SET placa = ?, marca = ?, modelo = ?, id_tipovehiculo = ?, id_usuario = ?
       WHERE id_vehiculo = ?`,
      [placa, marca, modelo, id_tipovehiculo, id_usuario, id]
    );
    return result.affectedRows; //filas afectadas xd
  }

    // Método para eliminar un vehiculo
    static async deleteVehiculo(id) {
        const [result] = await pool.query(
          `DELETE FROM vehiculo WHERE id_vehiculo = ?`,
          [id]
        );
        return result.affectedRows; // filas afectadas xd
      }
      
}

export default vehiculoModel;
