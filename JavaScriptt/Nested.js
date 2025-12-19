//Nested object
let bio_data ={
    name:"saravanan",
    age:15,
    dob:"10-06-2010",
    parentsdetails:{
        fathername:"ravi",
        mothername:"koti",
        siblingsdetails:{
            sistername:"lavanya",
            brothername:"naveen"
        }
    }
    }
console.log(bio_data.parentsdetails.fathername);
console.log(bio_data.parentsdetails.siblingsdetails.sistername);

//Nested Array

let Amozan_products = ["pen",
    ["phone",["samsung","oneplus","oppo","vivo"]],
    ["laptop",["Asus","hp","lenovo","dell"]],
    "Airconditioner",
     "Headphones"];

     //Test line