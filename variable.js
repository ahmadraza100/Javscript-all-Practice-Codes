console.log('tut3');

// Variables in js
// var, let, const

var firstName = "Ahmad" ; 
var lastName = `Raza's` ; 
var namee = firstName + "  " + lastName ; 
console.log("my name is ",  namee);

// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Lahore';
console.log(city);

const ownersName = 'Hari Ram';

console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
arr1.push("Ahmad");
console.log(arr1);

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces