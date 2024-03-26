const marvel_heros = ["thor", "Ironman", "Spidermen"]
const dc_heros = ["supermen", "flash", "batman"]

marvel_heros.push(dc_heros)
// when push any thing in array, array take as one value
console.log(marvel_heros); //O/P: [ 'thor', 'Ironman', 'Spidermen', [ 'supermen', 'flash', 'batman' ] ]


console.log(marvel_heros[3][1]); //O/P: flash // to access the value of array inside array

// concat combines 2 or more arrays and returns a new array without modifying any existing arrays.
all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros); //O/P: [ 'thor', 'Ironman', 'Spidermen', 'supermen', 'flash', 'batman' ]

// Spread operator: it gives value in individual elements from the array without modifying existing arrays. 
const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros) //O/P: [ 'thor', 'Ironman', 'Spidermen', 'supermen', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)// enter number for to check in depth array to remove all inside array.Infinity give all array
console.log(real_another_array); //O/P: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Hitesh")); //O/P: false
console.log(Array.from("Hitesh")); //O/P: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from ({name: "hitesh"})); //O/P: [] // return empty array, don't have actual instruction for the Object.

let score1 = 100
let score2 = 200
let score3 = 300
// .of returns new array from set of elements(which can be array, variable, const)
console.log(Array.of(score1, score2, score3)); //O/P: [ 100, 200, 300 ]