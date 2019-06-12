"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _carRoutes = _interopRequireDefault(require("./server/routes/carRoutes"));

var _flagRoutes = _interopRequireDefault(require("./server/routes/flagRoutes"));

var _userRoutes = _interopRequireDefault(require("./server/routes/userRoutes"));

var _orderRoutes = _interopRequireDefault(require("./server/routes/orderRoutes"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/api/v1', _carRoutes["default"]);
app.use('/api/v1/flags', _flagRoutes["default"]);
app.use('/api/v1/auth', _userRoutes["default"]);
app.use('/api/v1/orders', _orderRoutes["default"]); // when a random route is inputed

app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to this API.'
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map