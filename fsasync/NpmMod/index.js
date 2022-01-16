
const validator = require("validator")

const email = 'rohitbarche99@gmail.com'
const res = validator.isEmail(email)
console.log(res);