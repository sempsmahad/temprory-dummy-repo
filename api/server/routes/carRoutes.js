import { Router } from 'express';
import CarController from '../controllers/carController';

const router = Router();

router.get('/cars', CarController.getAllCars);
router.get('/cars/:min_price/:max_price', CarController.getAllRangeCars);
router.get('/cars/admin', CarController.getAllAdminCars);
router.post('/cars', CarController.addCar);
router.get('/cars/state=value', CarController.getAllStateCars);
router.get('/cars/body_type=value', CarController.getAllBodyTypeCars);
router.put('/cars/:id/:status', CarController.markAsSold);
router.put('/cars/:id/:price', CarController.updatePrice);
// router.get('/cars/:id', CarController.viewCar);
router.delete('/cars/:id', CarController.deleteCar);

export default router;
