"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var User =
/*#__PURE__*/
function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
    this.users = [{
      id: '001',
      email: 'mhdsemps@gmail.com',
      first_name: 'muhammad',
      last_name: 'ssempala',
      password: 'password',
      address: 'kigali,Rwanda',
      is_admin: true
    }, {
      id: '002',
      email: 'mhdsemps@gmail.com',
      first_name: 'mummad',
      last_name: 'smpala',
      password: 'passw212ord',
      address: 'kigali,Rwanda',
      is_admin: false
    }];
  }

  (0, _createClass2["default"])(User, [{
    key: "checkUser",
    value: function checkUser(email) {
      var knownUser = this.users.find(function (user) {
        return user.email === email;
      });
      return knownUser;
    }
  }, {
    key: "addUser",
    value: function addUser(user) {
      console.log(user);
      this.users.push(user);
      return this.users;
    }
  }]);
  return User;
}();

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=user.js.map