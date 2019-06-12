"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _orderController = _interopRequireDefault(require("../controllers/orderController"));

var router = (0, _express.Router)();
router.post('/', _orderController["default"].addOrder);
router.put('/:id/:price', _orderController["default"].updatePrice);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=orderRoutes.js.map