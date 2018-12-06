const inspect = require('util').inspect
const get = require('./shared/get')

// const obj = {
//   books: {
//     scifi: [
//       'sw1',
//       'sw2',
//       'sw3'
//     ],
//     fastasy: [
//       'lotr1',
//       'lotr2'
//     ],
//     adventure: [
//       'coś od cejrowskiego'
//     ]
//   },
// get booksArray() {
//   return Object.values(this.books).reduce((prev, curr) => [
//     ...prev,
//     ...curr
//   ], [])
// },
//   [Symbol.iterator]: function () {
//     let step = 0
//     const arr = this.booksArray
//     this.booksArray.push('sth')
//     return {
//       next: function () {
//         const item = arr[step++]

//         if (item) {
//           return {value: item, done: false}
//         }

//         return {value: undefined, done: true}
//       }
//     }
//   }
// }

async function example () {
  const res = await get('https://swapi.co/api/people/?format=json')

  console.log(inspect(res))

  // for (const book of obj) {
  //   console.log(book)
  // }
  // for (const book of obj) {
  //   console.log(book)
  // }
  // console.log(obj.booksArray)
}

example()
