const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to Website`);// this refer to the current context
    }

}

user.welcomeMessage //O/P:     // give nothing in output 
user.welcomeMessage() //O/P: hitesh Welcome to Website

user.username = "sam";
user.welcomeMessage() //O/P: sam Welcome to Website // this refer to the current context, after change of username it return updated value

console.log(this); //O/P: {} //give blank Object but in Browser refer to the Window object.
// Browser Global Object is Window Object, which have many methods 

function chai(){


    console.log(this);
}
 
// chai() // when call this in function
// O/P: <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }

function chai1(){
    let username = "hitesh"
    console.log(this.username)
}
// chai1() // When you call "this" in function it return undefined, not work in function

const chai2 = () =>{
    let username = "hitesh"
    console.log(this.username)
}
// chai2()// When you call "this" in the Arrow function it returns undefined, not working in the Arrow function too.

// Arrow Function

const addTwo = (num1, num2) => { // num1, num2 are the parameters 
    return num1 + num2
} // basic syntax 

console.log(addTwo(3,4)); // O/P: 7 

// when you use { } , then you have to use the "return" keyword, () don't write the "return" keyword.

// implicit return arrow function
const addTwo1 = (num1, num2) => num1 + num2 
console.log(addTwo1(3,4)); // O/P: 7 


const addTwo2 = (num1, num2) => (num1 + num2) // short you can write () => () for one line function
console.log(addTwo2(3,4));  // O/P: 7 

// when you need to return Object in implicit return arrow function
const addTwo3 = (num1, num2) => ({username: "hitesh"}) // short you can write () => () for one line function
console.log(addTwo3(num1,num2));  // O/P: { username: 'hitesh' }
console.log(addTwo3());  // O/P: { username: 'hitesh' }

// use arrow function in loop for Array

const myArray = [2,4,6,3,2]
// How to write in different syntax for Array
myArray.forEach(function () {})
myArray.forEach(() => {})
// myArray.forEach(() => ()) 