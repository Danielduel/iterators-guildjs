const getCollection = require('./shared/getCollection')

async function example () {
  const planets = await getCollection('https://swapi.co/api/planets/?format=json')
  describePlanetsUsingIterator(planets)
}

function describePlanetsUsingIterator (planets) {
  for (const planet of planets) {
    const {name, terrain, climate, population} = planet
    console.log(
      `\n
      Planet ${name}
is inhabited by ${population} creatures
terrain is described as ${terrain}
and on the surface it is ${climate} climate.
      `)
  }
}

example()
