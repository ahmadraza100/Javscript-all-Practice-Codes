console.log("Hello");

// -----------------<Arrays>-----------------------

// Used for collection of values

// let arr  = ["ahmad" ,20 ,true ,"Raza"];
// console.log(arr);

// -----------------<Traversal in Arrays>-----------------------
//Navigate through an array

// console.log(arr[2]);
// console.log(arr[arr.length -2 ]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);


let arr  = ["ahmad" ,20 ,true ,"Raza" , "Shafi"];


 //We use for loop to navigate into Array
 
// for(let i=0 ; i<arr.length ; i++){
    //     console.log(arr[i]);
// }


            // After ES6 we have for in and for of loop
            
//For in 
// for(let elements in arr){
//     console.log(elements);     it gives number of elements 
// }



// for(let elements of arr){
//     console.log(elements);  it gives values in array
// }


//Array.prototype.forEach

//Calls a function for each element in array

// arr.forEach(function(element , index , array){
    //     // console.log(`element ${element} "Index :" ${index}" " ${array}`);  
    //     console.log(`The index of ${element} is =${index} \n ${array}`);  
    // })
    
    

    //Searching and filter in Array
    
                // Returns the FIrst element index in array 
                // Returns the -1 if it is not found
                

                // console.log(arr.indexOf("AHMAD")); CASE SENSITIVE error
                // console.log(arr.indexOf("ahmad")); 
                // console.log(arr.indexOf("ami")); 

                

                // arr.prototype.lastIndexOf()
                
// IT RETURNS LAST INDEX OF ARRAY . It means it searches same as indexof but from last

// console.log(arr.lastIndexOf("Raza"));



//array.prototype.includes()

//It determines whether it contains of not


// console.log(arr.includes("Raza"));  true
// console.log(arr.includes("Raa"));   false


   //Array.prototype.find()
//    it only shows 1 value when its found in
//    When not found it returns undifined
    
//    const findElem = arr.find((currVal) => currVal ==="Raza");
//    console.log(findElem);

const arr2 = [200 , 400 , 600 , 800 , 1000];
   
//    const findElem = arr2.find((currVal) => currVal < 400);
//    console.log(findElem);


  //Array.prototype.findIndex()
  //   const findElem = arr2.findIndex((currVal) => currVal > 400);
    //   console.log(findElem);
    


    
    //Array.prototype.filter()
    // Returns new array contaiing all calling element
    //array for which provided function is returned true
    

    // const price = arr2.filter((elem , index) =>{

    //     //  return elem< 400;
    //      return elem> 400;
    //     });
    
    //     console.log(price);   //[ 600, 800, 1000 ]


        

        // -----------------<Sort Arrays>-----------------------

        //Array.prototype.sort()
        // The sort method sorts the elements of an array in place and
        // returns the sorted array . The default sort order is Ascending
        //It is built upon after convirting elem3nt into string 
        //Then comparing their sequence of UTF-16 code unit values.

// console.log(arr2.sort()); [ 1000, 200, 400, 600, 800 ]
// console.log(arr.sort());  [ 20, 'Raza', 'Shafi', 'ahmad', true ]

    // Hence it Produce wrong result


    // Sorting Method

    //Ascending Order

    // arr2.sort(function(a,b){
    //     console.log(a,b);
    //     if(a>b){
    //         return 1;
    //     }
    //     if(b>a){
    //         return -1;
    //     }
    //     if(a==b){
    //         return 0 ;
    //     }
    // });

//    Descending order
    
    // arr2.sort(function(a,b){
    //     console.log(a,b);
    //     if(a>b){
    //         return -1;
    //     }
    //     if(b>a){
    //         return 1;
    //     }
    //     if(a==b){
    //         return 0 ;
    //     }
    // });
    

    //Array.Reverse()
     // console.log(arr2);
    // console.log(arr2.reverse());

    // [ 200, 400, 600, 800, 1000 ]
// [ 1000, 800, 600, 400, 200 ]

    // console.log(arr2);



    // --------------<Perform CURD>--------------

    //CREATE , Read , Modify , Delete


    // Array.prototype.push();
// It is used to add one or more element on the end of array
//It returns new length of array
    // let pushh = arr2.push(1300);
    // console.log(pushh);  
    // console.log(arr2);   [ 200, 400, 600, 800, 1000, 1300 ]


    // Array.prototype.pop();
    // it removes the last element from array and return that element
    // it returns new length of array

    // console.log(arr2.pop());  
    // console.log(arr2);





    // Array.prototype.unshift();
    // The unshift() method adds one or more elemets on the beganning of 
    // array and returns the new length of array

    // console.log(arr2.unshift(50));  //6
    // console.log(arr2);   [ 50, 200, 400, 600, 800, 1000 ]
    
    
    // Array.prototype.shift();
    // it removes the first element from array and return that element
    // it returns new length of array

    //  console.log(arr2.shift());  
    //  console.log(arr2);

    

    // const inn =  arr2.indexOf(400);
    // if(inn!=0){
    //     const update = arr2.slice(inn , 4 ) ;
    //     console.log(arr2);
    //     console.log(update);
    // }
    // else
    // {
    //     console.log("No such data found");
    // }


   
//   var myBest = arr2.slice(-3 ,-1 );
//   console.log(myBest);

//   var myBest = arr2.slice(1 ,4 );
//   console.log(myBest);



    //   --------------<Map and Reduce Method>-----------------

    //Aray.prototype.map();

    //Returns new array containing the boolean results of callinf
    //function on each element

    // let arr3 = arr2.map((curElem , index , arrr)=>{
    //     return curElem <600 ; 
    // });

    // console.log(arr2);
    // console.log(arr3);


    // let arr4 = arr2.forEach((curElm , index , arrr) => {
    //     return `Index no = ${index} and the value is ${curElm} belong to ${arrr}`
    // }).reduce();

    // console.log(arr4);

     //Finding Sqaure root of each element in array

//      let sqr  = arr2.map((curElm)=> Math.sqrt(curElm));
//     console.log(sqr);

//   14.142135623730951,
//   20,
//   24.49489742783178,
//   28.284271247461902,
//   31.622776601683793


    // ---------------<Reduce Method>----------------

    // Flattan: flattan an array means to convert 3d array into
    //  single dimensional array


    //The reduce method executes a reducer function that you prvide
    //   on each element of array , resulring in singal output value

    // The reducer function contains 4 elements

    //Accumulator
    //Current value 
    //current index 
    // source array


    // let sum = arr2.reduce((accumulator , curElem) => {
    //     debugger; 
    //     return accumulator+=curElem;
    // });

    // console.log(sum);


    // Flatten Array

    // const E = [[1,2] , [3,4] ,[5,6] , [7,8] , [9,10]];

    // let flatArr = E.reduce((accum , currVal) =>{
    //     return accum.concat(currVal);

    // });
    
    // console.log(flatArr);