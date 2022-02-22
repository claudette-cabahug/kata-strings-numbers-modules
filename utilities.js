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

// function isEmail (str) {
//   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(str);
// }

function isEmail (str) {
  const atPosition = str.indexOf('@')
  const dotPosition = str.lastIndexOf('.')
  return atPosition > 0 && dotPosition > atPosition
}

function countIf (array, fn) {
  let count = 0
  for (let item of array) {
    if (fn(item)) {
      count++
    }
  }  
  return count
}

function filterStringsWithCommas (str) {
  return str.includes(',')
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
  addStringsOrNumbers,
  isEmail,
  countIf,
  filterStringsWithCommas
}