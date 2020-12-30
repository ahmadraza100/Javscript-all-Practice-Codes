console.log("Loops");

for (let i = 0; i <10 ; i++){
    console.log(i);
   
}



let i = 0 ; 

while (i<10){
    console.log("Ahmad");
    console.log("\n");
    i++;
}

let i = 0 ; 

do{
    if(i%2==0){
    console.log(i);
    console.log("\n");}

    i+=1;
}while(i<10);




             //For Each 

let arr = [ 2,4,6,8,15,8,67,89,87];


arr.forEach(function(element , array) {

    console.log(element , array);
});



let object = {
    name:"Ahmad", 
    age:19, 
    male:true 
}

for(let key in object){
    console.log(key , object[key]);
    console.log(`the ${key} of object is ${object[key]}`)
}