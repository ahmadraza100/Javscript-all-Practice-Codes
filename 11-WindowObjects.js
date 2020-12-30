console.log("Js Windows Object")

properties 

console.log(window.width);
console.log(window.innerWidth);
console.log(window.scrollbars);
console.log(window.top);
console.log(window.document.head.onclick);

methods

console.log(window.alert("This is Ahmad"));
console.log(window.blur());
console.log(window.close());
console.log(window.confirm("Are you sure you want to"));
console.log(window.focus("Are you sure you want to"));
console.log(window.moveTo(50,20));
console.log(window.close("https://www.w3schools.com"));

function get(){
// window.open("https://www.w3schools.com")
document.getElementById("headd").style.color = "red";
document.getElementById("headd").style.transform = "translateX(20px)";
document.getElementById("headd").style.transition = "1s";
document.getElementById("headd").style.fontSize = "4rem";
window.print();
}

function abort(){
    // window.open("https://www.w3schools.com")
    document.getElementById("headd").style.color = "black";

    
}

console.log("window.stop");
