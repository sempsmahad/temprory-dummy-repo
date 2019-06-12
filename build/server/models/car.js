"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Car =
/*#__PURE__*/
function () {
  function Car() {
    (0, _classCallCheck2["default"])(this, Car);
    this.cars = [];
  }

  (0, _createClass2["default"])(Car, [{
    key: "getAllCars",
    value: function getAllCars() {
      return this.cars.filter(function (car) {
        return car.status === 'available';
      });
    }
  }, {
    key: "getCar",
    value: function getCar(id) {
      return this.cars.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: "getAllRangeCars",
    value: function getAllRangeCars(max, min) {
      var cars = this.getAllCars();
      return cars.filter(function (car) {
        return car.price >= min && car.price <= max;
      });
    }
  }, {
    key: "getAllAdminCars",
    value: function getAllAdminCars() {
      return this.cars;
    }
  }, {
    key: "addCar",
    value: function addCar(car) {
      this.cars.push(car);
      return car;
    }
  }, {
    key: "getAllStateCars",
    value: function getAllStateCars(state) {
      return this.cars.filter(function (car) {
        return car.state === state;
      });
    }
  }, {
    key: "getAllBodyTypeCars",
    value: function getAllBodyTypeCars(bodyType) {
      var cars = this.getAllCars();
      return cars.filter(function (car) {
        return car.body_type === bodyType;
      });
    }
  }, {
    key: "markAsSold",
    value: function markAsSold(id) {
      var car = this.getCar(id);
      car.status = 'sold';
      return this.getCar(id);
    }
  }, {
    key: "updatePrice",
    value: function updatePrice(id, price) {
      var car = this.getCar(id);
      car.price = price;
      return this.getCar(id);
    }
  }, {
    key: "deleteCar",
    value: function deleteCar(id) {
      var car = this.getCar(id);
      var temp = car;
      var index = this.cars.indexOf(car);
      delete this.cars[index];
      return temp;
    }
  }]);
  return Car;
}();

var _default = Car;
exports["default"] = _default;
//# sourceMappingURL=car.js.map