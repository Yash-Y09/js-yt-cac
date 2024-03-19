const number = 1000
console.log(number); // O/P: 1000

const numberOne = new Number(10234)
console.log(numberOne); // O/P: [Number: 10234]
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
console.log(numberOne.toString().length); // O/P: 5
console.log(numberOne.toFixed(2)); // O/P: 10234.00 // use after decimal point for 2 values 

const numberTwo = 123.264 
console.log(numberTwo.toPrecision(3)); // O/P: 123 // return String, pricision value give only preciescre value to that number and other will be exponational.
console.log(numberTwo.toPrecision(4)); // O/P: 123.3 
console.log(numberTwo.toPrecision(2)); // O/P: 1.2e+2 

const hundreds = 100000000
console.log(hundreds.toLocaleString()) // O/P : 10,00,00,000
console.log(hundreds.toLocaleString('en-IN')); // O/P : 10,00,00,000 // Give number in local formate