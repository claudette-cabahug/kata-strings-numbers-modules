/* eslint-disable no-unused-vars */

function getType (thing) {
  return typeof thing
}

function isNumber (thing) {
  return typeof thing === "number"
}

function toNumber (str) {
  return Number(str)
}

function isStringNumber (str) {
  let num = Number(str)
  let isNumber = typeof num === "number"
  let isNotNan = !isNaN(num)
  return isNumber && isNotNan
}

function add (a, b) {
}

function addStrings (a, b) {
}

function addStringsOrNumbers (a, b) {
}

function isEmail (str) {
}

function countIf (array, fn) {
}

function filterStringsWithCommas (str) {
}

function splitStringByCommas (str) {
}

module.exports = {
  getType,
  isNumber,
  toNumber,
  isStringNumber
}