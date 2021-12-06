class Chef {
  constructor(name, restaurant, customer) {
    this.name = name;
    this.restaurant = restaurant;
    this.customer = customer;
  };
  greetCustomer(customer, morning) {
    if (morning === undefined) {
      return `Hello, ${customer}!`
    } else if (morning === true) {
      return `Good morning, ${customer}!`
    } else if (morning === false) {
      return `Hello, ${customer}!`
    };
  };
  addMenuItem(foodItem) {
    restaurant = [];
    restaurant.push(foodItem);
  };
  checkForFood(foodItem) {
    chef.restaurant = restaurant;
    var foodConfirmation = `Sorry, we aren't serving ${foodItem} today.`;
    for (var i = 0; i < chef.restaurant.length; i++) {
      if (chef.restaurant[i] === foodItem) {
        foodConfirmation = `Yes, we're serving ${chef.restaurant[i]} today!`;
      };
    };
    return foodConfirmation;
  };
};

module.exports = Chef;
