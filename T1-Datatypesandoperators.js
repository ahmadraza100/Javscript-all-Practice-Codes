console.log("hello world");

// console.log("10" +30)   // concat
// console.log(30 -"5"); // Minus means bug   
// console.log(30 -"5");    
// console.log("Ahmad" + "Raza");    //CONCAT
// console.log("Ahmad" - "Raza");   //NaN 
// console.log("0" - "Raza");   //NaN 
// console.log(true + true);   //2
// console.log(true + false);   //1 
// console.log(true - false);   //1 
// console.log((true+true) / true);   //2
// console.log((true+true) * (true+true +true));   //6 
// console.log(true - false);   //1 
// console.log(false + true);   //1 
// console.log(false - true);   //-1

// ------------<Difference b/w null and undefined>-----------

//Null is declared and Defined
// var empty = null ; 
// console.log(empty , typeof(empty));  // null , object

//Undefined is declared but not assigned values

// var undef; 
// console.log(undef , typeof(undef)); //undefined , undefined


// ------------<Concept of NaN>-----------

// 1 : Its property of global object
// 2 : Its a variable in global Scope
// 3 : Its initial value is not a number

// var numf = "Ahmad";
// console.log(isNaN(numf) , typeof(numf));  //true , string
// console.log(isNaN(numt) , typeof(numt));  // false

// var numt = "1234";
// if(isNaN(numt)){
//     console.log("Please Enter Valid Number ") ; 
// }



// ------------------<Arithmatic Operators>--------------

// it would act like concat operator or error

// var a = 20;
// var b = 4;
// console.log("The Sum is " + a+b);
// console.log("The multiplication is " + a*b);
// console.log("The subtraction is " + a-b);
// console.log("The division  is " + a/b);
// console.log("The remainder  is " + a%b);


// So we hav to enclose this in bracket

// console.log("The Sum is " + (a + b));
// console.log("The multiplication is " + (a * b));
// console.log("The subtraction is " + (a - b));
// console.log("The division  is " + (a / b));
// console.log("The remainder  is " + (a % b));



// output
// The Sum is 24
// The multiplication is 80
// The subtraction is 16
// The division  is 5
// The remainder  is 0


// ------------------<Increment and Decrement operator>--------------

//   types 
//   1 : postfix (d++ , d--)
//   2 : prefix  (--d , ++d)

// postfix

// var d = 10 ; 
// var opt = d++ + 5;
// console.log(opt);   // op:15

// var opt = d-- + 5;
// console.log(opt);    //op : 16

// prefix


// d = 10 ; 
// var opt = ++d + 5;
// console.log(opt);    //16

// var opt = --d + 5;
// console.log(opt);    //15


// ------------------<Comparison Operators>-----------



// var e = 5; 
// var f = 10; 

// //Equal 
// console.log(e==f);

// //Not Equal (!=)
// console.log(e!=f);

// //Greater than ( > ) 
// console.log(e > f);

// //Less than ( < ) 
// console.log(e<f);

// //Greater than or equal ( >= ) 
// console.log(e > f);

// //Less than or equal ( <= ) 
// console.log(e<f);


// ------------------<Logical Operator>-----------

 //Defination : They are usually use with boolean values
//  when result is true or false 


var g  = 40 ; 
var h = -30 ; 

// 1: Logical And (&&)

// It returns true when the result of all operands is true
// console.log(g>h && h>-50 && h<0); //true
// console.log(g>h && h>-30 && h<0); //false
// console.log(g==h && h>-50 && h<0); //false

// 1: Logical OR (||)

// It returns true if only  one expression's true
// console.log(g>h || h>-50 || h<0); //true
// console.log(g>h || h>-30 || h<0); //true
// console.log(g==h || h>-50 || h<0); //true
// console.log(g==h || h>-20 || h==0); //false


// 1: Logical NOT (||)

// It NEGATES THE VARIABLE , I CONVERT TRUE INTO FALSE AND VICE VERSA
//  console.log(!(g>h || h>-50 || h<0));   //fasle(true) = false
//     console.log(!(g=0));




// ----------------<Square Logic>---------------

// a**n= a^n;

// console.log(4**3);    // 4x4x4 = 64
// console.log(4**4);    // 4x4x4x4 = 256
// console.log(4**5);    // 4x4x4x4x4 = 1024   
// console.log(4**6);     // 4x4x4x4x4x4 = 4096

// console.log(4 ** -1 );     1/4
// console.log(2 ** -10 );  


// ------------------<Swapping Numbers>------------

// var x  = 10  ; 
// var y  = 20 ; 
// var z = x ; 
// x=y ; 
// y=z;
// console.log(x ,y);


//  x  = 100 ; 
//  y  = 80 ;
 
//  x = x + y ;  //100+80 = 180
//  y = x - y ;  //180-80 = 100
//  x = x - y ;  //180 -100 = 80 ;
 
// console.log(x , y) ; 


/* <_________________________________________________> */}



