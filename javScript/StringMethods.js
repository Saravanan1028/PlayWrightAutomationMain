//String Methods

//Length
let names="saravanan";
console.log(names.length);

//CharAt
let namez="saravanan";
console.log(namez.charAt(5));

//ToUpperCase
let text="saravanan";
console.log(text.toUpperCase());

//ToLowerCase
let text1="SaravanAn";
console.log(text1.toLowerCase());

//Replace
let msg="saravanan Ravi";
console.log(msg.replace("saravanan","Saravanan"));

//Trim
let aadhar="     99633425522   ";
console.log(aadhar.trim());

//Slice
let lang="JavaScript";
console.log(lang.slice(0,4));

//SubString
let lang1="JavaScript";
console.log(lang1.substring(4,10));

//IndexOf
let place ="Chennai TamilNadu";
console.log(place.indexOf("Tamil"));

//LastIndexOf
let place1 ="Chennai TamilNadu";
console.log(place1.indexOf("a"));

//Includes
let place3 ="Chennai TamilNadu";
console.log(place3.includes("Tamil"));


//Split
let fruits ="Apple,Orange,Mango";
console.log(fruits.split(","));

//Concat
let a ="Hello";
let b="World";
console.log(a.concat(" ",b));

//Task

let username = " Saravanan ";
let minimumlimit =5;
console.log(username.trim());
let userlength=username.length;
console.log(userlength);

if(userlength>=minimumlimit){
    console.log("Valid Username");
}

else{
    console.log("username should be minimum "+ minimumlimit +" characters");
}