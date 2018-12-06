const https = require('https')

module.exports = function (endpoint) {
  return new Promise((resolve, reject) => {
    try {
      https.get(endpoint, response => {
        let data = ''
        response.on('data', (chunk) => {
          data += chunk
        })
        response.on('end', () => {
          resolve(JSON.parse(data))
        })
      })
    } catch (e) {
      reject(e)
    }
  })
}
