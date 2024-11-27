// routes/usuarioRoutes.js
import {Router} from 'express';
import {authController} from '../controllers/authController.js';
import {userController} from '../controllers/userController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/login', authController.login);
router.post('/register', userController.registerUser);
router.put(
    '/updateProfile/:id_usuario',
    authMiddleware,
    userController.updateUser,
);
router.put(
    '/updatePassword/:id_usuario',
    authMiddleware,
    userController.updatePassword,
);
router.get('/protected-route', authMiddleware, (req, res) => {
    res.json({message: 'Acceso autorizado', user: req.user});
});

export default router;
