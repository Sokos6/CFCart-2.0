"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recievePhones = recievePhones;
exports.RECEIVE_PHONES = void 0;
var RECEIVE_PHONES = 'RECEIVE_PHONES';
exports.RECEIVE_PHONES = RECEIVE_PHONES;

function recievePhones(phones) {
  return {
    type: RECEIVE_PHONES,
    phones: phones
  };
}