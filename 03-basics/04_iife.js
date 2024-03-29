// Immediately INvoked function Expressions (IIFE)
// 1. when you don't want to pollute your function with global scope
// 2. when you want to run immediately after function

(function chai() {  // this is call named IIFE which have name chai
    console.log(`DB CONNECTED`);
})();   // O/P: DB CONNECTED // make sure to end iife with ";" so another iife can run
// ";" help function to stop contex 

// ()(); // in first () you write your function definition, and in second () you write your execution call
chai() // when you call by this way but when you wrap function in () and after write () then you are call execution call

// IIFE with arrow function
( () => {
    console.log(`DB CONNECTED TWO`);
}) (); // O/P: DB CONNECTED TWO

// IIFE with passing parameter in function
( (name) => {  // this is simple IIFE, No name for this function
    console.log(`DB CONNECTED TWO ${name}`);
}) ("hitesh"); // O/P: DB CONNECTED TWO hitesh

