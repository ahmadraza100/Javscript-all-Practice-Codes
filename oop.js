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


function generalCar(name , speed){
    this.myName = name ; 
    this.topspeed = speed ; 
    this.run = function (){
        console.log(`${this.myName} is running`);  
    }

}
 let car1 = new generalCar("Suzuki" , 170);
 let car2 = new generalCar("Tyota" , 190);
 let car3 = new generalCar("Hyundai" , 200);

console.log(car1.run());

// -------------<End of 27 video>----------------------
