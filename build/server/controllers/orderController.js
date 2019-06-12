"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _order = _interopRequireDefault(require("../src/models/order"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var orderController =
/*#__PURE__*/
function () {
  function orderController() {
    (0, _classCallCheck2["default"])(this, orderController);
  }

  (0, _createClass2["default"])(orderController, null, [{
    key: "updatePrice",
    value: function () {
      var _updatePrice = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var order;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _order["default"].getOrder(req.params.id);

              case 3:
                order = _context.sent;

                if (order) {
                  order.setAmount(req.params.amount);
                  util.setSuccess(201, 'changed successfully', order);
                } else {
                  util.setError(401, 'changing order price failed');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(401, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function updatePrice(_x, _x2) {
        return _updatePrice.apply(this, arguments);
      }

      return updatePrice;
    }()
  }, {
    key: "addOrder",
    value: function () {
      var _addOrder = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newOrder, createdUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.email || !req.body.amount || !req.body.status)) {
                  _context2.next = 3;
                  break;
                }

                util.setError(401, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 3:
                newOrder = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return _order["default"].addOrder(newOrder);

              case 7:
                createdUser = _context2.sent;
                util.setSuccess(201, 'successfully posted your order', createdUser);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(401, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      function addOrder(_x3, _x4) {
        return _addOrder.apply(this, arguments);
      }

      return addOrder;
    }()
  }]);
  return orderController;
}();

var _default = orderController;
exports["default"] = _default;
//# sourceMappingURL=orderController.js.map