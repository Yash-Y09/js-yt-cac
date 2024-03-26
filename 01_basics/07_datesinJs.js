// Date represent a single moment in plateform from Jan 1 1970, UTC arbitary date. 
// Calclute in milli second from that date

let myDate = new Date()
console.log(typeof(myDate)); // O/P: object
console.log(myDate); // O/P: 2024-03-20T15:18:09.195Z
console.log(myDate.toString()); // O/P: Wed Mar 20 2024 20:50:39 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // O/P: Wed Mar 20 2024
console.log(myDate.toJSON()); // O/P: 2024-03-20T15:20:39.830Z
console.log(myDate.toLocaleDateString()); // O/P: 20/3/2024
console.log(myDate.toLocaleString()); // O/P: 20/3/2024, 8:50:39 pm
console.log(myDate.toLocaleTimeString()); // O/P: 8:50:39 pm
console.log(myDate.toTimeString()); // O/P: 20:50:39 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); // O/P: Wed, 20 Mar 2024 15:20:39 GMT

let myCreatedDate = new Date(2023, 0, 23)// in js month start from 0.
console.log(myCreatedDate); // O/P: 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toString()); // O/P: Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate1 = new Date(2023, 0, 23, 5 ,3)
console.log(myCreatedDate1.toString()); // O/P: Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date("01-14-2024") // write in mm-dd-yyyy in this format month start at 01
console.log(myCreatedDate2.toLocaleString()); // O/P:14/1/2024, 12:00:00 am

let myCreatedDate3 = new Date("2024-02-15") // write in yyyy-mm-dd in this format month start at 01
console.log(myCreatedDate3.toLocaleString()); // O/P:15/2/2024, 5:30:00 am
//let myCreatedDate3 = new Date("2024-02-30") // O/P: 1/3/2024, 5:30:00 am

let myTimeStamp = Date.now()
// time stamp use in poll, quiz
console.log(myTimeStamp); // O/P:1710949451387 // value in milli second
console.log(myCreatedDate3.getTime()); // O/P:1707955200000 to compare the date with time stamp we can use any other date with .getTime()

//to get value in second
console.log(Math.floor(Date.now()/1000))// O/P:1710949823

let newDate = new Date()
console.log(newDate); // O/P:2024-03-20T15:55:01.591Z
console.log(newDate.getMonth() + 1); // O/P: 3 // to get actual month add 1 because month start from 0
console.log(newDate.getDay());// get Wednesday by number
console.log(`${newDate.getFullYear()} and the time`) // O/P: 2024 and the time

// to get costomized time
console.log(newDate.toLocaleDateString('default',{
    weekday: "long",
})) // O/P: Wednesday // you can get suggestion by ctrl + space 
