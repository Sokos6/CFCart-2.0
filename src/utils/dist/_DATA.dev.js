"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getPhones = _getPhones;
exports.setInCart = setInCart;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var phones = {
  Techno: {
    brand: 'Techno',
    inCart: 'false' // or "in"

  },
  Apple: {
    brand: 'Iphone',
    inCart: 'false'
  },
  Samsung: {
    brand: 'Samsung',
    inCart: 'false'
  },
  Hauwei: {
    brand: 'Hauwei',
    inCart: 'true'
  },
  HTC: {
    brand: 'HTC',
    inCart: 'true'
  }
};

function _getPhones() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      return res(_objectSpread({}, phones));
    }, 1000);
    console.log(_getPhones());
  });
}

function setInCart(_ref) {
  var id = _ref.id,
      inCart = _ref.inCart;
  return new Promise(function (res, rej) {
    setTimeout(function () {
      phones = _objectSpread({}, phones, _defineProperty({}, id, _objectSpread({}, phones[id], {
        inCart: inCart
      })));
      res();
    }, 500);
  });
}