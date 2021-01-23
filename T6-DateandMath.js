/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let date = new Date();
// console.log(date);   //2021-01-18T19:59:53.428Z
// console.log(date.toLocaleString()); //1/19/2021, 12:59:53 AM
// console.log(date.toLocaleDateString());  //1/19/2021
// console.log(date.toLocaleTimeString());  //12:59:53 AM
// console.log(date.toString()); // Tue Jan 19 2021 00:59:53 GMT+0500 (Pakistan Standard Time)


// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());   //1610999993478


// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

//  var d = new Date(2019 , 0);
//  console.log(d.toLocaleString());

//new Date(dateString) 
// new Date(dateString) creates a new date object from a date string

// var d = new Date("June 29, 1999 , 11:13:00");
// console.log(d.toLocaleString());  //6/29/1999, 11:13:00 AM
// console.log(d.toString());     //Tue Jun 29 1999 11:13:00 GMT+0500 (Pakistan Standard Time)

// var d = new Date(845345653424);    
// console.log(d.toLocaleString());   //10/15/1996, 7:14:13 AM


var date = new Date();

// console.log(date.toLocaleString());       //1/19/2021, 1:09:33 AM
// console.log(date.getFullYear());         //2021
// console.log(date.getMonth());           //0 Means January
// console.log(date.getDate());           //19
// console.log(date.getDay());           //2
// console.log(date.getHours());        //1
// console.log(date.getMinutes());     //13


// let curTime = new Date();

// // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));








    //    _________________<Math Object>_________________


console.log(Math.PI);   //3.141592653589793

//   let num  = 3.141592;
//   console.log(Math.round(num));   // 3

// console.log(Math.pow(3,4));  //81
// console.log(2**3);      //8

console.log(Math.sqrt(36));    //6



// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-36));    //36

// Math.ceil() 
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(36.341));  // 37
// console.log(Math.round(36.341));  //36

// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer
// console.log(Math.floor(36.341));  // 36

// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));  //200

// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));  //150

// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.ceil(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9


// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(56.45));   //56

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().








