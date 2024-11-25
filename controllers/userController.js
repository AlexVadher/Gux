import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt';
import verifyToken from '../utils/tokenUtil.js';

export class userController {
    // Método para registro de usuario nuevo
    static async registerUser(req, res) {
        try {
            const {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = req.body;

            if (
                !nombre ||
                !apellido ||
                !usuario ||
                !documento ||
                !telefono ||
                !clave ||
                !id_rol
            ) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }

            // const userName = await userModel.getUserByUsername(usuario);
            // if (userName.length > 0) {
            //     return res.status(400).json({message: 'El usuario ya existe'});
            // }

            console.log('Datos recibidos de la solicitud: ', req.body); // depurar estilo junior XD

            const user = {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            };

            const result = await userModel.createUser(user);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar un usuario
    static async updateUser(req, res) {
        try {
            const {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
            } = req.body;

            if (
                !nombre ||
                !apellido ||
                !usuario ||
                !documento ||
                !telefono ||
                !clave ||
                !id_rol
            ) {
                return res.status(400).json({
                    message: 'Faltan datos obligatorios',
                    data: req.body,
                });
            }

            const {id_usuario} = req.params;

            console.log('Datos recibidos de la solicitud: ', req.body);

            const user = {
                nombre,
                apellido,
                documento,
                telefono,
                usuario,
                clave,
                id_rol,
                id_usuario,
            };
            const result = await userModel.updateUser(user);
            res.json({message: 'Usuario actualizado con éxito', result});
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar la contraseña de un usuario
    static async updatePassword(req, res) {
        try {
            const {password, newpassword} = req.body;
            const {id_usuario} = req.params;

            console.log('Datos recibidos de la solicitud: ', req.body); // depurar estilo junior XD

            if (!password || !newpassword) {
                return res.status(400).json({
                    message:
                        'Debes proporcionar la contraseña actual y la nueva contraseña',
                });
            }

            // Verificar que la nueva contraseña no sea igual a la actual
            if (password === newpassword) {
                return res.status(400).json({
                    message:
                        'La nueva contraseña no puede ser la misma que la actual',
                });
            }

            // Consultar la contraseña actual del usuario
            const user = await userModel.getUserById(id_usuario);
            if (!user) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            }

            // Verificar si la contraseña actual coincide
            const isPasswordCorrect = await bcrypt.compare(
                password,
                user.clave,
            );
            if (!isPasswordCorrect) {
                return res
                    .status(401)
                    .json({message: 'La contraseña actual es incorrecta'});
            }
            //Encriptar la nueva contraseña antes de actualizarla
            const result = await userModel.updatePassword(
                id_usuario,
                newpassword,
            );
            console.log('Contraseña actualizada con éxito'); // depurar estilo junior XD

            res.json({
                message: 'Contraseña actualizada con éxito',
                result,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al actualizar la contraseña',
            });
        }
    }
    // Método para solicitar la eliminación de un usuario
    static async deleteUser(req, res) {
        try {
            const {id} = req.body;
            const result = await userModel.deleteUser(id);
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para obtener el perfil de un usuario autenticado por token
    static async getUserProfile(req, res) {
        try {
            const {authorization} = req.headers;
            const {id_usuario} = req.params;

            if (!authorization) {
                return res.status(401).json({message: 'No hay token'});
            }

            const user = await userModel.getUserById(id_usuario);
            if (!user) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            }
            res.json(user);
        } catch (error) {
            console.error(error);
        }
    }
}

export default userController;
