import { Router } from 'express';
import OrderController from '../controllers/orderController';

const router = Router();

router.post('/', OrderController.addOrder);
router.put('/:id/:price', OrderController.updatePrice);

export default router;
