const Utils = require('../utils')
const data = ['male', 'female']
module.exports = (function () {
  return data[Utils.randomBetween(0, 1)]
})()