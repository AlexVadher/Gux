// routes/usuarioRoutes.js
import {authController} from '../controllers/authController.js';
import {userController} from '../controllers/userController.js';
import {Router} from 'express';

const router = Router();

router.post('/login', authController.login);
router.post('/register', userController.registerUser);
router.put('/updateProfile/:id_usuario', userController.updateUser);
router.patch('/updatePassword/:id_usuario', userController.updatePassword);

export default router;
