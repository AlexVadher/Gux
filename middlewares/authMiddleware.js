import {validateToken} from '../utils/tokenUtil.js';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res
            .status(401)
            .json({message: 'No se proporcionó un token de autorización'});
    }
    console.log(authHeader); // depurando como junior

    const token = authHeader.split(' ')[1]; // Extrae el token de la cabecera de autorización "Bearer <token de autorización>"

    try {
        const payload = await validateToken(token);
        req.user = payload; // Adjunta el payload del token al objeto de solicitud
        next(); // Pasa al siguiente middleware o controlador
    } catch (error) {
        return res.status(401).json({message: 'Token inválido o expirado'});
    }
};

export default authMiddleware;
