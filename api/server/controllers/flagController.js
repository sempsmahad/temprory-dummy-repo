import Flag from '../models/flag';
import Util from '../utils/Utils';

const util = new Util();
const flagModel = new Flag();

class flagController {
  static async addFlag(req, res) {
    if (!req.body.reason || !req.body.description) {
      util.setError(401, 'Please provide complete details');
      return util.send(res);
    }
    const newFlag = req.body;
    try {
      const createdFlag = await flagModel.addFlag(newFlag);
      util.setSuccess(201, 'successfully reported', createdFlag);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default flagController;
