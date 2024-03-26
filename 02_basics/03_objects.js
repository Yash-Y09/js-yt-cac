// singleton : when object made with constructor
// Object.create // this is constructor method 

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh", // system take name as string "name", but we don't have to write that way
    "Full Name" : "Hitesh Chudhary",
    [mySym]: "mykey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// How to access Object 
console.log(JsUser.email); // O/P: hitesh@google.com
// access through [] for the access full string values.
console.log(JsUser["email"]); // O/P: hitesh@google.com

//console.log(JsUser.Full Name); // O/P: can't access that value 
console.log(JsUser['Full Name']); // O/P: Hitesh Chudhary

//console.log(typeof JsUser.mySym); // O/P: string // when written in mySym:"mykey1" for symbol, it won't work that way.
console.log(typeof JsUser[mySym]); // O/P: string // for symbol, write in [] notaion
console.log(JsUser); 
// O/P: {
//   name: 'Hitesh',
//   'Full Name': 'Hitesh Chudhary',
//   age: 18,
//   location: 'Jaipur',
//   email: 'hitesh@google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

JsUser.email = "hitesh@chatgtp.com"
Object.freeze(JsUser) // use to freeze object, cannot change value 
JsUser.email = "hitesh@go.com"
console.log(JsUser); 
// O/P: {
//     name: 'Hitesh',
//     'Full Name': 'Hitesh Chudhary',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@chatgtp.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

//Object have function
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // "this" used for to access the object property of its own.
}

console.log(JsUser.greeting) // O/P: [Function (anonymous)]
console.log(JsUser.greeting()) // O/P: Hello JS User  undefined// this also show in browser because it run execution by own
console.log(JsUser.greetingTwo()) // O/P: Hello JS User, Hitesh  undefined

