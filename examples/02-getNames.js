const get = require('./shared/get')

async function example () {
  const persons = await get('https://swapi.co/api/people/?format=json')

  console.log(persons)
  listNamesUsingForEach(persons)
}

function listNamesUsingForEach (persons) {
  persons.results.forEach(
    person => console.log(person.name)
  )
}

example()
