import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/signin', UserController.checkUser);
router.post('/signup', UserController.addUser);

export default router;
