console.log("HELLO");

// console.log(myClassName.length);
// console.log(myClassName.indexOf("m"));
// console.log(myName.search("Raza"));
// console.log(myClassName.slice(1,4))
// comment.substring(0,29);
// showComment = comment.substring(30,-3); 
// str.substr(13,-4);
// // let repalceData = myName.replace('Raza','RAMZI' );


// A JavaScript string is zero or more characters written inside quotes.
// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes and backticks

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor


let myName = "Ahmad Raza"; 
let myClass = '2nd Semester';

let myClassName = new String("Second Semester");
    myClassName = "Complex Semester"
// console.log(myName);
// console.log(myClassName);

        // Finding length

// console.log(myClassName.length);


            //  Escape Characters

// myClassName = " Complex\n Semester";
// console.log(myClassName);


// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex])
// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...


// console.log(myClassName.indexOf("m")); //2
// console.log(myClassName.indexOf("m" ,1 )); //2
// console.log(myClassName.indexOf("m" ,3 )); //10


//                Searching for a String in a String
// The search() method searches a string for a specified 
// value and returns the position of the match

//String.prototype.search

// console.log(myName.search("Raza"));   6


// Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)



// The slice() Method 
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// console.log(myClassName.slice(1,4));   omp
// console.log(myClassName.slice(myClassName.length-4));   ster



// Test 

    // let comment = "I am ahmad raza . I am student of Bs it in the gc";
    // let showComment = comment.slice(0,30);
    // let showComment = comment.slice(30, -5); 
    
    // console.log(comment);
    // console.log(showComment);



    // The substring() Method 🙋‍♂️
    // substring() is similar to slice().
    
    // The difference is that substring() cannot accept 
    // negative indexes.
    
    // let comment = "I am ahmad raza . I am student of Bs it in the gc";
    // let showComment = comment.substring(0,29);
    

    // console.log(showComment);
    
    // // If we give negative value then the characters are
    //  counted from the 0th pos 
    
    //  showComment = comment.substring(30,-3); 
    // console.log(showComment);

    
    // The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// let res = str.substr(13,-4);
// // let res = str.substr(-4);
// console.log(res);
    
//     let comment = "I am ahmad raza . I am student of Bs it in the gc";



// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 

// The replace() method replaces a specified value 
// with another value in a string.


// let repalceData = myName.replace('Raza','RAMZI' );
// let repalceData2 = myName.replace("Ahmad" , "Emi");
// console.log(repalceData +""+  replaceData2); 


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing Ahmad (with upper-case) will not work


//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// console.log(myName.charAt(2));



// if((myName.charAt(3))=== "a"){
//    let result =  myName.replace(myName.charAt(3) , "\n")
//     console.log(result);
// }




// console.log(myName.charCodeAt(4));


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[5]);



// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


        // Concat method

        // console.log("My name is ".concat(myName));
        // console.log(`My name is ${myName} "\n" MY class is ${myClass}` );
        // console.log("My name is ".concat(myName) + "\n" +"MY class is ".concat(myClass) );



// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());

// var txt = "a, b,c d,e";   // String
// // console.log(txt.split(","));           // Split on commas
// // console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|")); 


