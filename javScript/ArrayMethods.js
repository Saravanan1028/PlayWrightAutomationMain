//Array Methods

//Push

let numbers=[1,2,3,4];
numbers.push(5);
console.log(numbers);

//Pop

let numbers1=[1,2,3,4];
numbers1.pop();
console.log(numbers1);

//Shift

let numbers2=[1,2,3,4];
numbers2.shift();
console.log(numbers2);

//UnShift

let numbers3=[1,2,3,4];
numbers3.unshift(0);
console.log(numbers3);


//Splice

let numbers4=[1,2,3,4];
numbers4.splice(0,1,6);
console.log(numbers4);

let fruits=["Apple","bannana","mango"];
fruits.splice(0,1,"Orange");
console.log(fruits);

//slice

let fruitss=["Apple","bannana","mango","grapes"];
let citrus=fruitss.slice(1,3);
console.log(citrus);

//Concat

let table=[1,2];
let ntable=[3,4];

let arr3 = table.concat(ntable);
console.log(arr3);

//indexof

let fruitsss=["apple","bannan","mango"];
console.log(fruitsss.indexOf("bannan"));
console.log(fruitsss.indexOf("grapes"));

//Includes

let fruitss2=["apple","bannan","mango"];
console.log(fruitss2.includes("bannan"));
console.log(fruitss2.includes("grapes"));

//Sort

let names = ["Saravanan","Srimathi","Liya"];
names.sort();
console.log(names);

//Reverse

let namez = ["Saravanan","Srimathi","Liya"];
namez.reverse();
console.log(namez);


//foreach

let numx=[1,2,3];
numx.forEach(n=>console.log(n*2));


//Some

let age = [15,20,28];
let res = age.some(age=>age>=18);
console.log(res);


//Every

let ages = [15,20,28];
let ress = ages.every(ages=>ages>=18);
console.log(ress);



//Task

//Single digit numbers Passing
let tasknum = [8,5,3,6,9,1];
tasknum.sort();
console.log(tasknum);
tasknum.reverse();
console.log(tasknum);

//Double digit numbers Failing

let tasknum2 = [81,5,13,9,90,1];
tasknum2.sort((a,b)=>a-b);
console.log(tasknum2);
tasknum2.reverse();
console.log(tasknum2);

