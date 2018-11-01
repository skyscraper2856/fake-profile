const Utils = require('../utils')
module.exports = function (region, gender) {
  const dictionary = require('../region/' + region).names
  if (!dictionary) throw new Error('Dictionary is not found for region ' + region)
  return {
    firstName: dictionary.firstName[gender][Utils.randomBetween(0, dictionary.firstName[gender].length - 1)],
    lastName: dictionary.lastName[gender][Utils.randomBetween(0, dictionary.lastName[gender].length - 1)]
  }
}