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
  return a + b
}

function addStrings (a, b) {
  let sum = Number(a) + Number(b)
  return String(sum)
}

function addStringsOrNumbers (a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return String(Number(a) + Number(b))
  } else {
    return a + b
  }
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
  isStringNumber,
  add,
  addStrings,
  addStringsOrNumbers
}