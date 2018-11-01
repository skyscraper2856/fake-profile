const Utils = require('../utils')
module.exports = function (name, mailDomain) {
  name = Utils.translateVN(name.toLowerCase()).replace(/ /g, '')
  let randomNumber = Utils.randomBetween(5000, 999999)
  randomNumber = Utils.padString(randomNumber, 5)
  return name + randomNumber + '@' + mailDomain
}