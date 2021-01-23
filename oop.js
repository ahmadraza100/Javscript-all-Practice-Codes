// Object Literals, Constructors and Object Oriented JavaScript 
console.log("welcome");
// var name = "Ahmad";
// var name  = "Raza";
// console.log(name);


// What are objects ?
//     Objects can contain related code and data, representing information about 
//     the thing we are trying to model, and functionality that we want it to have.Object 
//     data is stored neatly inside an object package, making it easy to structure and access.

//    JavaScript is a powerful programming language that supports Object - Oriented Programming(OOP).
//    In JavaScript, objects created using object literal are singletons.This means when we made a 
//    change in an object, it affects the object entire the script.Whereas if an object is created 
//    using the constructor function, then the change will not affect the object throughout the script.
//     In this tutorial,

// var car = {
//     name: prompt('Enter car name'),
//     topspeed: 100,
//     run:function (){
//         var ip  = car.name.toLowerCase();
        
//         if(ip==="suzuki")
//         {
//             car.topspeed=100;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );
//         }

//         if(ip==="toyota")
//         {
//             car.topspeed=300;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );
//         }

//         if(ip==="nissan")
//         {
//             car.topspeed=200;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );

//         }
//         if(ip===""){
//             car.stop();
//         }

//         console.log(car.name.split(","));
// },
// stop: function (){
//     alert("Get out from here");
// }
// }
// car.run();


// var car = {
//     name: prompt('Enter car name'),
//     topspeed: 100,
//     run:function (){
//         var ip  = car.name.toLowerCase();
        
//         if(ip.includes('mehran'))
//         {
//             car.topspeed=100;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );
//         }

//         if(ip.includes("toyota"))
//         {
//             car.topspeed=300;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );
//         }

//         if(ip.includes("nissan"))
//         {
//             car.topspeed=200;
//     alert( ` ${car.name.toLowerCase()} is running on speed of ${car.topspeed}` );

//         }
//         if(ip===""){
//             car.stop();
//         }

//         console.log(car.name.split(","));
//         let str  = car.name.split(",");
//         str = str.toString();
//         console.log(str);
// },
// stop: function (){
//     alert("Get out from here");
// }
// }
// car.run();


// function generalCar(name , speed){
//     this.myName = name ; 
//     this.topspeed = speed ; 
//     this.run = function (){
//         console.log(`${this.myName} is running`);  
//     }

// }
//  let car1 = new generalCar("Suzuki" , 170);
//  let car2 = new generalCar("Tyota" , 190);
//  let car3 = new generalCar("Hyundai" , 200);

// console.log(car1.run());

// -------------<End of 27>----------------------



// -------------<Start of 28>------------------
// Object Prototype In javascript

//Object literall object 
 
// let obj = {
//     name:"ahmad",
//     class:"5",
//     youtubeChannel:"Techtalks with Ahmad"
// }
// console.log(obj);


 
// function generalCar(name , speed){
//     this.myName = name ; 
//     this.topspeed = speed ; 

// }

//  let car1 = new generalCar("Suzuki" , 170);
//  let car2 = new generalCar("Tyota" , 190);
//  let car3 = new generalCar("Hyundai" , 200);

//  console.log(car2);

//  generalCar.prototype.setName = function(carName){
//      this.myName = carName;
//  }
//  car2.setName = prompt("Enter input");


// -------------<End of 28>----------------------

// function food(name, cat , price){
    
//     this.Myname = name ; 
//     this.Mycat = cat ; 
//     this.Myprice = price ; 
    

// }

function food (name , price , cat){
    this.Myname = name ;
    this.Myprice = price ;
    this.Mycat = cat ;
}  


let foodie  = new food("Qourma" , "Arabic" , 1000);

console.log(foodie);
console.log(` The price of ${foodie.Myname} is ${foodie.Myprice}  The catergory is ${foodie.Mycat} ` );
food.prototype.Chefname = function (chef){
    this.Myname = chef;
   }
   foodie.Chefname(prompt("Enter your name")) ;
   console.log(foodie);
   console.log(` The chef name is ${foodie.Myname} is ${foodie.Myprice}  The catergory is ${foodie.Mycat} ` );


   let prop  = Object.entries(foodie);
   console.log(prop);
// prop.forEach(([key, value]) ,()=> {
//     console.log(value);


// });




// function result( name, classs , marks ){
    
//     this.Name = name ; 
//     this.Class = classs ; 
//     this.Marks = marks ; 
    
// }

  
// function student(name , classs, marks){
//    result.call(this, name, classs , marks);
// }

// let student1 = new student("Ahmad" , "Matric" , 80);
// let student2 = new student("Raza" , "Matric" , 70);
// let student3 = new student("Shafi" , "Matric" , 40);
// console.log(student1);
// console.log( `Your name is ${student1.Name} and your class is ${student1.Class} you got ${student1.Marks} marks`);
// console.log(student2);
// console.log( `Your name is ${student2.Name} and your class is ${student2.Class} you got ${student2.Marks} marks`);
// console.log(student3);
// console.log( `Your name is ${student3.Name} and your class is ${student3.Class} you got ${student3.Marks} marks`);
// console.log(student1);
