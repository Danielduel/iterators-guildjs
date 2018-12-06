const getCollection = require('./shared/getCollection')

async function example () {
  const persons = await getCollection('https://swapi.co/api/people/?format=json')
  listNamesUsingIterator(persons)
}

function listNamesUsingIterator (persons) {
  for (const person of persons) {
    console.log(person.name)
  }
}

example()
