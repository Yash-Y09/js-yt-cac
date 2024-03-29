// // Premitive Data Types

// //String 
// let name = "DonotKnow"

// //Number
// const score = 100
// const scoreValue = 100.30 // also same for float

// //BigInt
// const bigNumber = 3432235634532n
// console.log(typeof bigNumber) // O/P: bigint

// // Boolean
// const isLoggedIn = false

// // null
// const outSideTemp = null

// // undefined
// let userEmail;

// // Symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId) // O/P : false

// // Reference (Non primitive) Data Types:

// //Array
// const heros = ["shatiman","Hatim", "Bheem"]
// console.log(typeof heros) // O/P: object

// //Objects
// let myObj = {
//     name : "King",
//     age : 20 ,
// }
// console.log(typeof myObj) // O/P: object

// //Functions

// let myFunction = function(){
//     console.log("hello world")
// }
// console.log(typeof myFunction) // O/P: function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); // O/P: hiteshdotcom
console.log(anothername); // O/P: chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@mail.com"

console.log(userOne.email); // O/P: user2@mail.com
console.log(userTwo.email); // O/P: user2@mail.com