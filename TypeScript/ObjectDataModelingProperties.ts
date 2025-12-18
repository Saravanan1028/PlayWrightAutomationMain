//Interface Object

interface User3{
    id:number;
    name:string;
    email:any;
}

let user2:User3={
    id:1,
    name:"saravanan",
    email:"sarava756@gmail.com"
}

//Properties

//Optional Properties ?

interface Employee1{
    id:number;
    name:string;
    email?:any;
}

let employee1:Employee1={
    id:4928,
    name:"Saravanan",
}

console.log(employee1);

//Read only properties

interface Employee{
    id:number;
    name:string;
    readonly email2:any;
}

let employee2:Employee={
    id:4928,
    name:"Saravanan",
    email2:"sarava233@gmail.com"
}
//employee2.email2="dfddf"; (throwing error as expected)

//Nested Object

interface User5{
    id:number;
    name:string;
    address:{
        city:string;
        pincode:number;
    };
}

let user5:User5={
    id:4556,
    name:"sarav",
    address:{
        city:"chennai",
        pincode:678799
    }
}

console.log(user5);