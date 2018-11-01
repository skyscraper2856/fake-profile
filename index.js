const Utils = require('./utils')
module.exports = function (options) {
  const config = Object.assign(require('./config'), options)
  const gender = require('./fns/gender')
  const birthday = require('./fns/birthday')(config.birthdayFormat, config.minAge, config.maxAge)
  const {firstName, lastName} = require('./fns/name')(config.region, gender)
  return {
    firstName, lastName, gender, birthday,
    email: require('./fns/email')(firstName + ' '+ lastName, config.emailDomain),
    password: Utils.randomChars(config.passwordLength)
  }
}