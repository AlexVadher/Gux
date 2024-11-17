import pool from '../config/dbConfig.js';
import bcrypt from 'bcrypt';

export class userModel {
    // Método para crear un usuario
    static async createUser(user) {
        try {
            const {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = user;

            const password = await bcrypt.hash(clave, 10);

            console.log('Datos recibidos del controller: ', user); // depurar estilo junior XD

            const result = await pool.query(
                'INSERT INTO usuario (nombre, apellido, documento, telefono, usuario, clave, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    nombre,
                    apellido,
                    documento,
                    telefono,
                    usuario,
                    password,
                    id_rol,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar un usuario
    static async updateUser(user) {
        try {
            const {
                id_usuario,
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = user;
            console.log('Datos recibidos del controller: ', user); // depurar estilo junior XD
            const result = await pool.query(
                'UPDATE usuario SET nombre = ?, apellido = ?, documento = ?, telefono = ?, usuario = ?, clave = ?, id_rol = ? WHERE id_usuario = ?',
                [
                    nombre,
                    apellido,
                    documento,
                    telefono,
                    usuario,
                    clave,
                    id_rol,
                    id_usuario,
                ],
            );
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Actualizar la contraseña del usuario
    static async updatePassword(id_usuario, newpassword) {
        try {
            console.log(
                'Datos recibidos del controller: ',
                id_usuario,
                newpassword,
            ); // depurar estilo junior XD

            const hashedPassword = await bcrypt.hash(newpassword, 10);
            console.log('Contraseña nueva encriptada: ', hashedPassword);
            const query = 'UPDATE usuario SET clave = ? WHERE id_usuario = ?';
            const values = [hashedPassword, id_usuario];
            const result = await pool.query(query, values);
            return result;
        } catch (error) {
            console.error('Error al actualizar la contraseña: ', error);
            throw new Error('Error al actualizar la contraseña');
        }
    }
    //obtener id (contraseña)
    static async getUserById(id_usuario) {
        try {
            const query = 'SELECT * FROM usuario WHERE id_usuario = ?';
            const values = [id_usuario];
            const [result] = await pool.query(query, values);
            return result[0];
        } catch (error) {
            console.error('Error al actualizar la contraseña: ', error);
            throw new Error('Error al actualizar la contraseña');
        }
    }
    // Método para obtener todos los usuarios
    static async getUsers() {
        try {
            const result = await pool.query(''); // ST por definir
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    // Método para consultar un usuario por nombre de usuario
    static async getUserByUsername(username) {
        try {
            console.log('Usuario recibidos del controlador: ', username);
            const result = await pool.query(
                'SELECT * FROM usuario WHERE usuario = ?',
                [username],
            ); // ST por definir
            return result[0];
        } catch (error) {
            console.error(error);
        }
        console.log('Usuario encontrado: ', result);
    }
}
export default userModel;
