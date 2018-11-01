const Utils = require('../utils')
const data = [31,28,31,30,31,30,31,31,30,31,30,31]
module.exports = function (format, minAge, maxAge) {
  if (minAge > maxAge) throw new Error('Max age must be grater than min age')
  const now = new Date()
  const age = Utils.randomBetween(minAge, maxAge)
  const month = Utils.randomBetween(0, 11)
  const year = now.getFullYear() - age
  if (isLeapYear(year)) {
    data[1] = 29
  }
  const day = Utils.randomBetween(1, data[month])
  return format.toLowerCase()
    .replace(/dd/g, Utils.padString(day))
    .replace(/mm/g, Utils.padString(month))
    .replace(/yyyy/g, year)
}

function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}