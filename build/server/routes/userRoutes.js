"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = _interopRequireDefault(require("../controllers/userController"));

var router = (0, _express.Router)();
router.post('/signin', _userController["default"].checkUser);
router.post('/signup', _userController["default"].addUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.js.map