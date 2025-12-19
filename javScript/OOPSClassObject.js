//Class with constructor

class car{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayDetails(){
        console.log(`Carname: ${this.name}, price: ${this.price}`);

    }
}

const car1= new car("Audi R8",45000);
const car2= new car("RollsRoyce",70000);

car1.displayDetails();
car2.displayDetails();

//Simple program

let name1="Maha";
function greet(){
    console.log(`${name1}`);
}
greet();


//Task

class students{
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    displayStudentDetails(){
        console.log(`Student Name: ${this.name} Student age: ${this.age} Student Course ${this.course}`);
    }
}

const student1 = new students("Saravanan",18,"Mech");
const student2 = new students("Srimathi",18,"CSE");

student1.displayStudentDetails();
student2.displayStudentDetails();