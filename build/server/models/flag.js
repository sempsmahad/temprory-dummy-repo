"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Flag =
/*#__PURE__*/
function () {
  function Flag() {
    (0, _classCallCheck2["default"])(this, Flag);
    this.flags = [];
  }

  (0, _createClass2["default"])(Flag, [{
    key: "addFlag",
    value: function addFlag(flag) {
      this.flags.push(flag);
    }
  }]);
  return Flag;
}();

var _default = Flag;
exports["default"] = _default;
//# sourceMappingURL=flag.js.map