import User from '../models/user';
import Util from '../utils/Utils';


// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../utils/key');

const util = new Util();
const UserModel = new User();

class userController {
  static async checkUser(req, res) {
    try {
      const user = await UserModel.checkUser(req.body.email, req.body.password);
      if (user) {
        util.setSuccess(200, 'user exists', user);
      } else {
        util.setError(400, 'user not found Try creating an Account');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (
      !req.body.email
      || !req.body.first_name
      || !req.body.last_name
      || !req.body.password
      || !req.body.address
    ) {
      util.setError(401, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;

    try {
      // console.log(newUser);
      const createdUser = await UserModel.addUser(newUser);
      console.log(createdUser);
      // add a token here in the response message.
      const token = jwt.sign({ id: createdUser.id }, key.tokenKey);
      // break down the user object and add a jwt token
      createdUser[token] = token;
      util.setSuccess(201, 'successfully created new account', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default userController;
