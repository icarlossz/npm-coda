var random = require('random-item-in-array')
var api = require('./example.json')

module.exports = {
  all: api,
  random: random(api)
}

console.log(api)
console.log(random(api))
