const getCollection = require('./shared/getCollection')

async function example () {
  const movies = await getCollection('https://swapi.co/api/films/?format=json')
  const marathonGeneratorInstance = marathonGenerator(movies)

  console.log('\nFirst marathon\n')
  let firstMarathon = 3
  for (const movie of marathonGeneratorInstance) {
    console.log(movie.title)
    firstMarathon--
    if (firstMarathon === 0) break
  }

  console.log('\n\nSecond marathon\n')
  let secondMarathon = 4
  for (const movie of marathonGeneratorInstance) {
    console.log(movie.title)
    secondMarathon--
    if (secondMarathon === 0) break
  }
}

function * marathonGenerator (movies) {
  let lastFilmIndex = 0
  while (true) {
    yield movies.results[lastFilmIndex % movies.count]
    lastFilmIndex++
  }
}

example()
