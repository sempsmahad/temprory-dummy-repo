"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.js"));

var _car = _interopRequireDefault(require("./car.js"));

var _flag = _interopRequireDefault(require("./flag.js"));

var _order = _interopRequireDefault(require("./order.js"));

var _default = {
  User: _user["default"],
  Car: _car["default"],
  Flag: _flag["default"],
  Order: _order["default"]
};
exports["default"] = _default;
console.log('Executing Model: index.js ...');
//# sourceMappingURL=index.js.map