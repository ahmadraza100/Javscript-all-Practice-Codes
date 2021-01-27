// console.log("Hello");

// class student{
    
//     constructor(stuName,stuEmail,stuMarks){
//     this.name = stuName;
//     this.email = stuEmail;
//     this.marks = stuMarks;

//         if(this.marks>=60){
//         console.log(`Dear ${this.name} , Congratulations to hae A+ Grade in Exam`);
//     }
    
//     if(this.marks>=40 && this.marks<60){
//         console.log(`Dear ${this.name} , You got B Grade in Exam`);
//     }
//     else{
//         console.log(`Dear ${this.name} , Work hard you are below avarage`);
        
//         }
// }
// }

//  stu1  = new student("Ahmad" , "ahmadrazashafi@gmail.com" , 40);
//  stu2  = new student("Raza" , "ahmadrazashafi@gmail.com" , 60);
//  stu3  = new student("Saad" , "ahmadrazashafi@gmail.com" , 20);
//  stu4  = new student("Bilal" , "ahmadrazashafi@gmail.com" , 80);
//  stu5  = new student("Sami" , "ahmadrazashafi@gmail.com" , 100);
//  stu6  = new student("Faiq" , "ahmadrazashafi@gmail.com" , 30);
//  stu7  = new student("Imran" , "ahmadrazashafi@gmail.com" , 30);
//  stu8  = new student("Abdullah" , "ahmadrazashafi@gmail.com" , 40);
//  stu9  = new student("Azeem" , "ahmadrazashafi@gmail.com" , 40);
//  stu10  = new student("Ali" , "ahmadrazashafi@gmail.com" , 40);




class student{
    
    constructor(stuName,stuEmail,stuMarks){
    this.name = stuName;
    this.email = stuEmail;
    this.marks = stuMarks;

        if(this.marks>=60){
       return this.marks;
    }
    
    if(this.marks>=40 && this.marks<60){
        return this.marks;
    }
    else{
        return this.marks;
        
        }
}
}

class Employee extends student{
    constructor(stuName,stuEmail,stuMarks , UniGpa ){
        super(stuName,stuEmail,stuMarks)
        this.gpa = UniGpa;
       

        if(this.gpa >3.8){
            console.log( ` Dear ${this.name} Your Performance is great and GPA is ${this.gpa} , We hire you "Senior" ` ); 
        }

        if(this.gpa >3 && this.gpa <3.9){
            console.log( ` Dear ${this.name} Your Performance was fine you scored ${this.gpa} GPA , We hire you "Employee" `) ; 
        }


        if(this.gpa <3){
            console.log( ` Dear ${this.name} Your Performance was poor and GPA is ${this.gpa} , We hire you "Sweeper" `) ; 
        }


}

}

faiq = new Employee("Faiq" , "Faiqbutt@gmail.com" , 70 , 3.7);
abdullah = new Employee("Abdullah" , "Faiqbutt@gmail.com" , 70 , 3);
saad =  new Employee("Saad" , "Faiqbutt@gmail.com" , 70 , 2.9);
faiq1 = new Employee("Hassan" , "Faiqbutt@gmail.com" , 70 , 4);
faiq2 = new Employee("Muneer" , "Faiqbutt@gmail.com" , 70 , 1.5);
faiq3 = new Employee("Ali" , "Faiqbutt@gmail.com" , 70 , 3.4);
faiq4 = new Employee("Imran" , "Faiqbutt@gmail.com" , 70 , 4);
faiq5 = new Employee("Sami" , "Faiqbutt@gmail.com" , 70 , 3.5);
faiq6 = new Employee("Ahmad" , "Faiqbutt@gmail.com" , 70 , 3.3);

let faiqq = Object.values(faiq);
let saadd = Object.values(saad);
let faiqq1 = Object.values(faiq1);

faiqq1.forEach(function(value){
    console.log(value);
})

faiqq.forEach(function(value){
    console.log(value);
})

saadd.forEach(function(value){
    console.log(value);
})

