const getCollection = require('./shared/getCollection')

async function example () {
  const starships = await getCollection('https://swapi.co/api/starships/?format=json')
  // ↓↓↓ Error ↓↓↓
  // starships.map(ship => ship.model)
  //
  // "TypeError: starships.map is not a function" 😿

  // Hacky way:
  const starshipsArray = [...starships]
  const starshipModels = starshipsArray.map(ship => ship.model)
  console.log(starshipModels)

  // or
  const starshipModels2 = [...starships].map(ship => ship.model)
  console.log(starshipModels2)

  // Alternative without iterator:
  // starships.results.map(ship => ship.model)
}

example()
