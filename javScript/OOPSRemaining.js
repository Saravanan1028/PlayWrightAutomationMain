//Encapsulation

//# (Private Variable)

class BankAccount{
    #balance=200; //Private Variable Declared
    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited: ${amount}`);
    }
    getBalance(){
        console.log(`Current Balance: ${this.#balance}`)
    }
}
const acc =new BankAccount();
acc.deposit(5000);
acc.getBalance();


//Inheritance

class Vehicle{
    start(){
        console.log("Vehicle started");
    }
}

class Bike extends Vehicle{
    ride(){
        console.log("Bike is being riding");
    }
}

const B = new Bike();
B.start();
B.ride();

//Polymorphism

//Method Overloading
class Animal{
    sound(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Dog Barks");
    }
}4

class cat extends Animal{
    sound(){
        console.log("cats Meows");
    }
}

const A =[new Animal(),new Dog(),new cat()];
A.forEach(ani=>ani.sound());

//or

const A1= new Animal();
A1.sound();

const A2= new Dog();
A2.sound();

const A3= new cat();
A3.sound();

//Abstraction


//Sample 1
class Payment{

    makePayments(){
        console.log("Payment is sucess");
    }


    //Hiding Data
    #paymentdetails(){
        console.log("payment reference no");
    }

}

const P = new Payment();
P.makePayments();

//Sample 2

class Mobile{
    
    turnOn(){
        console.log("Switching ON");
        //this.#bootLogs();
    }
      #bootLogs(){
        console.log("Boot Logs...");    
    }
    }
    const display = new Mobile();
    display.turnOn();


    //Task

    //Concrete Method

   class Restaurant{

    // #checkAbstract(){

    // }; //private method declaration

    constructor() {
        this.#checkAbstract(); //calling private method
    }

    #checkAbstract(){  //private helper method

        if(this.constructor === Restaurant){
            
            console.log("Abstract class cannot be instantiated directly");

        }
    }

        prepareFood(){
            console.log("Method 'prepareFood()' must be implemented.");
        }

        openRestaurant(){
            console.log("Restaurant is Open");
        }
    }

    const r1 = new Restaurant();
    r1.prepareFood();
    r1.openRestaurant(); 

    //Encapsulation
    class Order{
            #orderID=0;
            #amount=0; //Private Variable Declared
            #gst=20;
    orderInfo(orderID,amount){
        this.#orderID=orderID;
        this.#amount=amount; 
        this.#gst+=amount;   
        console.log(`Table No 21: OderID is ${this.#orderID} and Amount is ${this.#amount}, ${this.#gst} including GST`);
    }
    }
    let od = new Order();
    od.orderInfo("R4566",400);

    //Inheritance

    class PizzaRestaurant extends Restaurant{

        prepareFood(){
            console.log("Cook Pizza");
        }
 }

   class BurgerRestaurant extends Restaurant{
    prepareFood(){
         console.log("Cook Burger");
    }
   }
 
   let res = new PizzaRestaurant();
   let res1 = new BurgerRestaurant();
   res.openRestaurant();
   res.prepareFood();
   res1.openRestaurant();
   res1.prepareFood();
   
//Polymorphism

function startCooking(restaurant){
    restaurant.prepareFood();
}

let pizza = new PizzaRestaurant();
let burger = new BurgerRestaurant();

startCooking(pizza);
startCooking(burger);