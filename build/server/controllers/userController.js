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

var _user = _interopRequireDefault(require("../src/models/user"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();
var UserModel = new _user["default"]();

var userController =
/*#__PURE__*/
function () {
  function userController() {
    (0, _classCallCheck2["default"])(this, userController);
  }

  (0, _createClass2["default"])(userController, null, [{
    key: "checkUser",
    value: function () {
      var _checkUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return UserModel.checkUser(req.body.email);

              case 3:
                user = _context.sent;

                if (user) {
                  util.setSuccess(200, 'user exists', user);
                } else {
                  util.setError(400, 'user not found Try creating an Account');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function checkUser(_x, _x2) {
        return _checkUser.apply(this, arguments);
      }

      return checkUser;
    }()
  }, {
    key: "addUser",
    value: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var newUser, createdUser;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!req.body.email || !req.body.first_name || !req.body.last_name || !req.body.password || !req.body.address)) {
                  _context2.next = 3;
                  break;
                }

                util.setError(401, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 3:
                newUser = req.body;
                _context2.prev = 4;
                _context2.next = 7;
                return UserModel.addUser(newUser);

              case 7:
                createdUser = _context2.sent;
                console.log(createdUser);
                util.setSuccess(201, 'successfully created new account', createdUser);
                return _context2.abrupt("return", util.send(res));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 13]]);
      }));

      function addUser(_x3, _x4) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }]);
  return userController;
}();

var _default = userController;
exports["default"] = _default;
//# sourceMappingURL=userController.js.map