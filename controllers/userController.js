import userModel from '../model/userModel.js';

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
            res.json(result);
        } catch (error) {
            console.error(error);
        }
    }
    // Método para actualizar la contraseña de un usuario
    static async updatePassword(req, res) {
        try {
            const {password, newpassword} = req.body;
            const result = await userModel.updatePassword(id, password);
            res.json(result);
        } catch (error) {
            console.error(error);
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
}

export default userController;
