
function sayMyName() {
    console.log("h");
    console.log("e");
    console.log("e");
    console.log("y");
}
sayMyName // this is only reference to a function
sayMyName() // with () you call the function, execution
// O/P: h
// e 
// e 
// y 

function addTwoNumber(number1,number2){ // when you make function definition, its called parameters
    console.log(number1 + number2);
}

addTwoNumber() // O/P:NaN

addTwoNumber(3, 4) // O/P:7 // you have to pass arguments
addTwoNumber(3, "4") // O/P:34
addTwoNumber(3, null) // O/P: 3
addTwoNumber(3, "a") // O/P: 3a

const result = addTwoNumber(4,5)
console.log("Result: ", result); //O/P: Result:  undefined //because here function return nothing, console log is different & return value is different

function addTwoNumberR(number1,number2){ // when you make function definition then is called parameters
    let result = number1 + number2;
    return result // after return, no code execute after this
}
const resultR = addTwoNumberR(4,5)
console.log("Result: ", resultR); // O/P: Result:  9

function loginUserMessage(username){
    if(username ===  undefined){   // (!username) is also known as undefined, any string value is true and ! convert into false so it is undefined
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
}
// here you have to console this because function DON'T have console in there
console.log(loginUserMessage("King")) // O/P: King just logged in 
console.log(loginUserMessage()) // O/P: undefined just logged in // if there is no value there 

//Pass default value in function 
function loginUserMessage(username = "sam"){ // here default value is sam , but user enters a value than is overrides it.
    if(username ===  undefined){   
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
} // O/P: sam just logged in 


// When user want to pass multiple parameter then we use rest operator
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2)) // O/P: 2

function calculateCartPriceRest(...num1){// here you say rest operator
    return num1
}
console.log(calculateCartPriceRest(200, 5000, 60)) // O/P: [ 200, 5000, 60 ] // return array with help of rest operator

function calculateCartPriceRest1(val1, val2, ...num1){// here you say rest operator
    return num1
}
console.log(calculateCartPriceRest1(200, 5000, 60)) // O/P: [ 60 ] // first two value assigned to the val1 & val2

// call objects in function

const user ={
    username: "hitesh",
    price: 199
}
function handelObject(anyobject){ // here anyobject can take any object as arguments
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handelObject(user) // we call the function with user object 
// O/P: Username is hitesh and price is 199 // if object values not match with function call then it return undefined 
// for instance, anyobject.prices is different then object user price then return undefined

handelObject({
    username: "same",
    price: 399
}) // you can diraect pass the object 
// O/P: Username is same and price is 399 

// call Array in function 
const myNewArray = [100, 200, 400]

function handelArray(anyArray){
    return anyArray[0]
}

//Passing with Array variable
console.log(handelArray(myNewArray)); // O/P: 100

//Passing Diract Array 
console.log(handelArray([1000,2000,3000,4000])); // O/P: 1000 