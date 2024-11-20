import bcrypt from 'bcrypt';
import userModel from '../model/userModel.js';
import generateToken from '../utils/tokenUtil.js';

export class authController {
    static async login(req, res) {
        try {
            const {usuario, clave} = req.body;

            if (!usuario || !clave) {
                return res
                    .status(400)
                    .json({message: 'Faltan datos obligatorios'});
            }

            const user = await userModel.getUserByUsername(usuario);

            if (!user) {
                return res.status(404).json({message: 'Usuario no encontrado'});
            }

            console.log('clave', clave, 'user.clave', user.clave);

            // Verificar que user.clave no sea undefined
            if (!user.clave) {
                return res.status(400).json({
                    message: 'Clave no encontrada en la base de datos',
                    user,
                });
            }

            // Comparar la clave ingresada con la clave encriptada de la base de datos
            const match = await bcrypt.compare(clave, user.clave);

            // Si las claves no coinciden, retornar un error
            if (!match) {
                return res.status(400).json({message: 'Clave incorrecta'});
            }

            console.log('Usuario logueado correctamente', user);

            // payload cargado en la cabecera del token con el usuario y el id
            const payload = {
                usuario: user.usuario,
                id: user.id_usuario,
            };

            // Generar el token con el metodo de utilidad generateToken y el payload(usuario, id)
            const token = await generateToken(payload);

            console.log('Token generado', token);

            return res.json({message: 'Usuario logueado correctamente', token});
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({message: 'Error al loguear el usuario'});
        }
    }
}

export default authController;
