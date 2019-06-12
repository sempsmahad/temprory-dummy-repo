"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _flagController = _interopRequireDefault(require("../controllers/flagController"));

var router = (0, _express.Router)();
router.post('/', _flagController["default"].addFlag);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=flagRoutes.js.map