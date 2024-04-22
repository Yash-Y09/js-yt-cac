// if 
// if(condition){
// 
// } // condition true then only code run which is insie of { }

// if(false){} // it will never run code because condition is false already.

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log(`welcome`);
}

// Comparision Oprator
// <, >, <=, >=, ==, !=, ===(Check Data Types Also), !==

// && -> and, || -> or, 

const temperature = 55

if (temperature < 50 ){
    console.log("temperature less than 50");
} else{ 
    console.log("temperature greater than 50");
}


// const score = 200
// if (score >100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// // O/P: ReferenceError: power is not defined

const score = 200
if (score >100){
    var power = "fly"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`);
// O/P:   User power: fly
//        User power: fly
// When We use var to define the power variable it have global scope.


// Short Hand Notation
const balance = 1000
// implicite scope, in this code write in one line and end with ";"
if (balance > 500) console.log("test"); // O/P: test


// you can write with multiple line using "," (not recommended for code readability )
if (balance > 500) console.log("test"),
console.log("test1"); // O/P: test    test1

// Nested
if (balance < 500) {
    console.log("less than 500");
}else if (balance < 750) {
    console.log("less than 750")
}else if (balance < 900) {
    console.log("less than 900")
}else {
    console.log("less than 1200")
}