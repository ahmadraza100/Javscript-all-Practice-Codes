console.log("hello");

const students = [
    { name: "faiq", subject: "Javascript" },
    { name: "faiq", subject: "Machine Learning" },
    { name: "Sami", subject: "Digital Marketing" }
]

function enrollStudent(student) {

    setTimeout(function (){
        students.push(student)
      
        console.log("Enrolled")
        let studentt = Object.values(student)
        studentt.forEach(function (value){
            console.log(value);
                })
    },3000)
}


function getStudents(){
    setTimeout(function (){

        students.forEach(function(students){
        console.log(students.name , students.subject )
      
        });
         
    }, 1000)
}

let stu1 = enrollStudent({Name : "Emi " , Subject : "English"} , );
// getStudents();