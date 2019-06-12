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

var _flag = _interopRequireDefault(require("../src/models/flag"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();
var flagModel = new _flag["default"]();

var flagController =
/*#__PURE__*/
function () {
  function flagController() {
    (0, _classCallCheck2["default"])(this, flagController);
  }

  (0, _createClass2["default"])(flagController, null, [{
    key: "addFlag",
    value: function () {
      var _addFlag = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var newFlag, createdFlag;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!req.body.reason || !req.body.description)) {
                  _context.next = 3;
                  break;
                }

                util.setError(401, 'Please provide complete details');
                return _context.abrupt("return", util.send(res));

              case 3:
                newFlag = req.body;
                _context.prev = 4;
                _context.next = 7;
                return flagModel.addFlag(newFlag);

              case 7:
                createdFlag = _context.sent;
                util.setSuccess(201, 'successfully reported', createdFlag);
                return _context.abrupt("return", util.send(res));

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }));

      function addFlag(_x, _x2) {
        return _addFlag.apply(this, arguments);
      }

      return addFlag;
    }()
  }]);
  return flagController;
}();

var _default = flagController;
exports["default"] = _default;
//# sourceMappingURL=flagController.js.map