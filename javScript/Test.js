class Restaurant {
    constructor() {
        if (new.target === Restaurant) {
            throw new Error("Abstract class cannot be instantiated");
        }
    }

    prepareFood() {
        throw new Error("Method 'prepareFood()' must be implemented");
    }

    openRestaurant() {
        console.log("Restaurant is open");
    }
}

class PizzaRestaurant extends Restaurant {
    prepareFood() {
        console.log("Preparing pizza 🍕");
    }
}

// ❌ Error
// const r = new Restaurant();

// ✅ Works
const p = new PizzaRestaurant();
p.openRestaurant();
p.prepareFood();
