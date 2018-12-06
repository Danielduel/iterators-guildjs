const getEverything = require('./shared/getEverything')

async function example () {
  const personsAsync = getEverything('https://swapi.co/api/people/?format=json')
  listNamesUsingAsyncIterable(personsAsync)
}

async function listNamesUsingAsyncIterable (personsAsync) {
  for await (const person of personsAsync) {
    console.log(person.name)
  }
}

example()
