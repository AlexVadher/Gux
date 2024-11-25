const authMiddleware = (req, res, next) => {
    //obtener token de la cookie o del header de la peticion
    const token = req.cookies.token || req.headers.authorization;

    //si no hay token, retornar un error
    if (!token) {
        return res.status(401).json({message: 'No hay token'});
    }
};
