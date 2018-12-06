const get = require('./get')

module.exports = function (endpoint) {
  return get(endpoint)
    .then(response => makeResponseIterable(response))
}

function makeResponseIterable (response) {
  response[Symbol.iterator] = function () {
    let step = 0
    return {
      next: function () {
        const resultItem = response.results[step++]
        if (resultItem) {
          return { value: resultItem, done: false }
        }

        return { value: undefined, done: true }
      }
    }
  }
  return response
}
