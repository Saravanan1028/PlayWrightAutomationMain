//Basic Sample

function add(a:number,b:number){
    return a+b;
}

let c=add(5,10);
console.log(c);


//Interface

interface User{
    name:string;
    age:number;
}

let user:User={
    name:"Alice",
    age:30
};
console.log(user);
//Task 1

interface User1{
    name:string;
    age:number;
    isActive:boolean;
}

let user1:User1={
    name:"Saravanan",
    age:29,
    isActive:true
};

console.log(user1);

//Task 2

function add1(a:number,b:number){
return a+b;
}
let d=add1(3,8);
console.log(d);


