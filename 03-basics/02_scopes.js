// let a = 500
// const b = 20
// var c = 30

// { } are the Scopes, inside { }  is known as local scope, without any { } is Global Scope. except object

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner:", a ); // O/P: Inner: 10
}
// console.log(a); // O/P: ReferenceError: a is not defined
// console.log(b); // O/P: ReferenceError: b is not defined
// console.log(c); // O/P: 30 // it works as a global variable, called in any scope. Give the last given value as Output. This is not preferred to use

// Global scope value is available in local scope, but local scope value is not available outside that scope.
let a = 100 
// console.log(a); // O/P: 100 // Global Scope

function one() {
    const username = "Hitesh"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website); // O/P: ReferenceError: website is not defined
    two()  //O/P: Hitesh
}
one()
//here first one() run then two() run and two() function give output.

// Child function can access the parent function but Parent functions cannot access the child function.

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // O/P: ReferenceError: website is not defined
}
// console.log(username); // O/P: ReferenceError: username is not defined
// O/P: hitesh youtube


//++++++++++++++++ Interesting +++++++++++++++++ Hoisting +++++++++++++
addone(5)
function addone(num){
    return num + 1;
}

console.log(addone(5)); // O/P: 6
// when you store a function in Variable and call before initialization then it throws an error,

// but you can call only the function before initialization. It works because functions are not stored in variables.
//This is called Hoisting about how functions are called, stored in trees.



// addTwo(1) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 22;
}
console.log(addTwo(1)); // O/P: 23