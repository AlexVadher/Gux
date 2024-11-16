// routes/usuarioRoutes.js
import {userController} from '../controllers/userController.js';
import {Router} from 'express';

const router = Router();

router.post('/register', userController.registerUser);
router.put('/updateProfile/:id_usuario', userController.updateUser);
router.put('/updatePassword/:id_usuario', userController.updatePassword);
//router.post('/login', userController.loginUser);
// router.get('/consult', userController.consultUser);

export default router;
