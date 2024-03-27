// const tinderUser = new Object() // Singleton Object
const tinderUser = {} // Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // O/P: { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // O/P: [ 'id', 'name', 'isLoggedIn' ] // return array with the objects keys elements
console.log(Object.values(tinderUser)); // O/P: [ '123abc', 'Sammy', false ] // return array with the objects value element
console.log(Object.entries(tinderUser)); // O/P: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] // return array with the objects Key & value both in inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // O/P: true // use to view property in object 

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "hitesh" ,
            lastname: "choudhary" 
        }
    }
}
console.log(regularUser) //O/P: { fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } } }
console.log(regularUser.fullname) //O/P: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
console.log(regularUser.fullname.userfullname) //O/P: { firstname: 'hitesh', lastname: 'choudhary' }
console.log(regularUser.fullname.userfullname.firstname) //O/P: hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1, obj2}
console.log(obj4); //O/P: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } // this will give obj with two separate object.

const obj5 = Object.assign({}, obj1, obj2, obj3 ) // assign return new object , so here first empty object {}, add other object values in there, without {} all value store in first object, here obj1 in there all object value will added & return the object
console.log(obj5); //O/P: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2}
console.log(obj6) // O/P: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// When Data comes from the DataBase
const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
    {
        id:4,
        email:"h@gmail.com"
    }
]

console.log(users[1].email); // O/P: h@gmail.com


//Object De-structure
const course = {
    coursename : "Is in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // to call value we have to call individual, but using de-structure you can call in one go.
const{courseInstructor, price: P} = course // here we can call multiple keys and also assign to a variable with a different name.
console.log(courseInstructor); //O/P: hitesh
console.log(P); //O/P: 999