import Order from '../models/order';
import Util from '../utils/Utils';

const util = new Util();

class orderController {
  static async updatePrice(req, res) {
    try {
      const order = await Order.getOrder(req.params.id);
      if (order) {
        order.setAmount(req.params.amount);
        util.setSuccess(201, 'changed successfully', order);
      } else {
        util.setError(401, 'changing order price failed');
      }
      return util.send(res);
    } catch (error) {
      util.setError(401, error);
      return util.send(res);
    }
  }

  static async addOrder(req, res) {
    if (!req.body.email || !req.body.amount || !req.body.status) {
      util.setError(401, 'Please provide complete details');
      return util.send(res);
    }
    const newOrder = req.body;
    try {
      const createdUser = await Order.addOrder(newOrder);
      util.setSuccess(201, 'successfully posted your order', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(401, error.message);
      return util.send(res);
    }
  }
}

export default orderController;
