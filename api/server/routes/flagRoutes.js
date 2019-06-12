import { Router } from 'express';
import FlagController from '../controllers/flagController';

const router = Router();

router.post('/', FlagController.addFlag);

export default router;
