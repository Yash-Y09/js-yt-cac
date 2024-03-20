// const number = 1000
// console.log(number); // O/P: 1000

// const numberOne = new Number(10234)
// console.log(numberOne); // O/P: [Number: 10234]
/*
Number {10234}
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]: 10234 */

//Use this method 
// console.log(numberOne.toString().length); // O/P: 5
// console.log(numberOne.toFixed(2)); // O/P: 10234.00 // use after decimal point for 2 values 

// const numberTwo = 123.264 
// console.log(numberTwo.toPrecision(3)); // O/P: 123 // return String, precision value gives only precise value to that number and others will be exponential.
// console.log(numberTwo.toPrecision(4)); // O/P: 123.3 
// console.log(numberTwo.toPrecision(2)); // O/P: 1.2e+2 

// const hundreds = 100000000
// console.log(hundreds.toLocaleString()) // O/P : 10,00,00,000
// console.log(hundreds.toLocaleString('en-IN')); // O/P : 10,00,00,000 // Give number in local format

//================================Maths================================
console.log(Math); // O/P: Object [Math] {}
/*
Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
Symbol(Symbol.toStringTag): "Math"
[[Prototype]]: Object
*/

// Math is buitl in JS object , To view method you can view in browser console that have may methods.

console.log(Math.abs(-4.3)); // O/P: 4.3 // give values in absolute, make to positive number
console.log(Math.abs(-5)); // O/P: 5 // give values in absolute, make to positive number

console.log(Math.round(4.6)); // O/P: 5 // Give Standeard round of value of number.
console.log(Math.round(4.4)); // O/P: 4
console.log(Math.ceil(4.4)); // O/P: 5 // return max round of value
console.log(Math.floor(4.4)); // O/P: 4 // return Min round of value

console.log(Math.min(4, 2, 5, 1)); //O/P: 1 // to find min value from the array
console.log(Math.max(4, 2, 5, 1)); //O/P: 5 // to find max value from the array

console.log(Math.random()); // O/P: 0.16701418867988682 // give random value in between 0 to 1.
console.log(Math.random() * 10); // O/P: 5.9264926361188675 // give random value in between 0 to 9.
console.log((Math.random() * 10) + 1); // O/P: 8.949507367860003 // give random value in between 1 to 9.
console.log((Math.floor(Math.random() * 10) + 1)); // O/P: 9 // give random value in between 1 to 9 in INT type

// to find random value in between min and max number.
const min = 10
const max = 20
// Here the formula for the random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// O/P: 17
