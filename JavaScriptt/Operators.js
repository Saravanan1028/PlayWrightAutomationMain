//Arithmetic Operators

//Addition
let x=10;
let y=-3;
z=x+y;
console.log("Arithmetic Operators" +" "+"Addition"+" "+z);

//Subraction
let x1=10;
let y1=-3;
z1=x1-y1;

console.log(z1);

//Multiplication
let x2=10;
let y2=-3;
z2=x2*y2;
console.log(z2);

//Divison
let x3=10;
let y3=-3;
z3=x3/y3;
console.log(z3);

//Moduls
let x4=10;
let y4=3;
z4=x4%y4;
console.log(z4);


//Power
let x5=10;
let y5=3;
z5=x5**y5;
console.log(z5);

//Assignment Operators

//Add and assign
let a = 5;
a+=3;
console.log(a);

//Sub and assign
let a1 = 5;
a1-=3;
console.log(a1);

//multiple and assign
let a3 = 5;
a3*=3;
console.log(a3);

//Divide and assign
let a4= 5;
a4/=3;
console.log(a4);


//Comparision operator
//Equal 
let a7=6;
let b7=7;
console.log(a7==b7);

//strict Equal
let a8=6;
let b8="6";
console.log(a8===b8);

//Not equal
let a9=6;
let b9=7;
console.log(a9!=b9);

//Strict not equal
let a0=6;
let b0="8";
console.log(a0!==b0);

//greater than
let a10=6;
let b10=7;
console.log(a10>b10);

//Lesser than
let a11=6;
let b11=7;
console.log(a11<b11);

//Logical Operator

//AND

let age = 10;
let age1 = 20;
let age2 = 21;
let age3 = 22;

console.log(age1>age&&age3<age2);


//NOT

let age4 = 10;
let age5 = 20;
let age6 = 21;
let age7 = 22;
let isStudent = false;

console.log(!age6<age7);
console.log(!isStudent);

//OR
let agee4 = 10;
let agee5 = 20;
let agee6 = 21;
let agee7 = 22;

console.log(agee6<agee7||agee4>agee5);

//Unary

//Increment and //Decrement

let w = 6;
w++;
w--;
w++;
console.log(typeof w);
console.log(w);

//Ternary

//single line method
let myage = 18;
let adultage = 18;
let result = myage>=adultage?"Adult":"minor";
console.log(result);

//If else menthod

if(myage>=adultage){
    console.log("Adult");
}
else{
    console.log("Minor");
}

//String Operator

let firstname="Saravanan";
let lastname="Ravi";
let employID=4928;

console.log(firstname+" "+lastname+" "+employID);







