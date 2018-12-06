const getCollection = require('./getCollection')

module.exports = async function * getEverything (endpoint) {
  const collection = await getCollection(endpoint)
  for (const item of collection) {
    yield item
  }
  if (collection.next) {
    yield * getEverything(collection.next)
  }
}
