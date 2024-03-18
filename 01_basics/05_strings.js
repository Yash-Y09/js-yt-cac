const name = "Name of Yours"
const repoCount = 7

console.log(name +" "+ repoCount + " OnGITHub");// this is not Good way or this is old methods
// O/P: Name of Yours 7 OnGITHub

console.log(`Name:${name.toUpperCase()}, Your RepoCount: ${repoCount}`)// this is called String Interpolation, in this we can use method on the go...
// O/P: Name:NAME OF YOURS, Your RepoCount: 7


// another way to write string 
 const gameName = new String('Kingmaker') // Using this in browser we can get key value pair string object, also we can get methods with this

console.log(gameName[0]); // to view 0 position value in string // O/P: K
console.log(gameName.__proto__);//we get the object with lots of method, but you can see in browser console. // O/P: {} 
console.log(gameName.length); // to see length of string  // O/P: 9
console.log(gameName.toLowerCase()); // to convert all string in to Lower Case  // O/P: kingmaker
console.log(gameName.charAt(0)); // To view character at the last position in string  // O/P: K
console.log(gameName.charAt(8)); // to view char at 8 position  // O/P: r
console.log(gameName.indexOf('a')); // to view index number of char "a"  // O/P: 5

// few method on strings

const newString = gameName.substring(0,6) // give new string from 0 to 5, last number is not included, obey negative value and start from Zero
console.log(newString); // O/P: Kingma

const anotherString = gameName.slice(-9,9); //  give value '-9 is length but in reverse form', 9 is give 8 char 
console.log(anotherString); // O/P: Kingmaker

const newStringOne = "    Name   "
console.log(newStringOne)// O/P :    Name   
console.log(newStringOne.trim())// remove blank spaces from front and back both // O/P : Name

const url = "https://hitesh.com//hitesh%20choudhary"

console.log(url.replace('%20', '-')); // O/P: https://hitesh.com//hitesh-choudhary
//replace char with another , here %20 replacing with '-'.

console.log(url.includes('hitesh')); // O/P: true
// to check string include this part of string in the string, return Boolean value true, false.

const gameNameOne = "yash-king-maker"
console.log(gameNameOne.split('-')); // O/P: [ 'yash', 'king', 'maker' ]

