module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

function nameMenuItem(name) {
  return (`Delicious ${name}`);
}

nameMenuItem("Pizza");

nameMenuItem("Burrito");
nameMenuItem("Taco");

var menuItemName = nameMenuItem("French Toast");

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

createMenuItem(menuItemName, 10.99, "breakfast");

var ingredients = [];

function addIngredients(ingredient, anyArray) {
  if (anyArray.includes(ingredient) === true) {
    return anyArray
  } else {
  anyArray.push(ingredient);
  return anyArray;
  };
};

addIngredients("cheese", ingredients);
addIngredients("peppers", ingredients);
addIngredients("peppers", ingredients);
addIngredients("onions", ingredients);



function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};

formatPrice("10.99");
formatPrice("5.99");



function decreasePrice(initialPrice) {
  var decreasedPrice = (initialPrice - (initialPrice * 0.1));
  return `${decreasedPrice}`
};

decreasePrice(6.00);



function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe
}

createRecipe("Delicious Eggs & Bacon", ["eggs", "bacon"], "breakfast");

createRecipe("Delicious Grilled Cheese", ["bread", "cheese", "butter"], "lunch");
