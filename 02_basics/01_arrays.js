// Array

const myArr = [10, 1, 2, 4, 3, 5]
console.log(myArr[0]); // O/P: 10 // start index from 0

const myHeros = ["hero1", "hero2"] // in browser you get the length & prototype, property
// prototype expand object

const myArr2 = new Array(1, 2, 3, 4) // in this syntax you don't have to write in [ ],

// Array Methods

myArr.push(6)
myArr.push(7)
console.log(myArr);
// O/P: [10, 1, 2, 4, 3, 5, 6, 7]
myArr.pop()
console.log(myArr);
// O/P:[10, 1, 2, 4, 3, 5, 6]

myArr.unshift(9)// enter value in argument you want to add
console.log(myArr)// add value at start of array, not good for optimization
// O/P: [9, 10, 1, 2, 4,  3, 5, 6]

console.log(myArr.shift()) // O/P:9 // remove first value from the array
console.log(myArr) // O/P: [10, 1, 2, 4, 3, 5, 6 ]
  
console.log(myArr.includes(9)); // O/P: false
console.log(myArr.indexOf(9)); // O/P: -1 for not in array value
console.log(myArr.indexOf(10)); // O/P: 0

//const myArr = [10, 1, 2, 4, 3, 5]
const newArr = myArr.join()

console.log(myArr); // O/P: [ 10, 1, 2, 4, 3, 5 ]
console.log(newArr); // O/P: 10,1,2,4,3,5 // give string type

// slice, splice. const myArr = [10, 1, 2, 4, 3, 5]
console.log("A", myArr);  // O/P: A [ 10, 1, 2, 4, 3, 5 ]
const myn1 = myArr.slice(1,4) // give section of array, from index 1 to 3, 4 is not included
console.log(myn1); // O/P: [ 1, 2, 4 ]
console.log("B", myArr)  // O/P: B [ 10, 1, 2, 4, 3, 5 ]

const myn2 = myArr.splice(1,4) // give section of array, from index 1 to 3, 4 is not included
console.log(myn2); // O/P:[ 1, 2, 4, 3 ]
console.log("C",myArr); // O/P: C [ 10, 5 ]