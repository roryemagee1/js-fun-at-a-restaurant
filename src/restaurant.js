

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
};


function createRestaurant(chosenName) {
  var typeRestaurant = {};
  typeRestaurant.name = chosenName;
  typeRestaurant.menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  };
  return typeRestaurant;
};


function addMenuItem(restaurant, item) {
  var switchTest = false;
  var placeholderRestaurant = restaurant;
  if (item.type === "breakfast") {
    for (var i = 0; i < placeholderRestaurant.menus.breakfast.length; i++) {
      if (placeholderRestaurant.menus.breakfast[i] === item) {
        switchTest = true;
      };
    };
    if (switchTest !== true) {
        placeholderRestaurant.menus.breakfast.push(item);
        switchTest = false;
    };
  } else if (item.type === "lunch") {
    for (var i = 0; i < placeholderRestaurant.menus.lunch.length; i++) {
      if (placeholderRestaurant.menus.lunch[i] === item) {
        switchTest = true;
      };
    };
    if (switchTest !== true) {
        placeholderRestaurant.menus.lunch.push(item);
        switchTest = false;
    };
  } else if (item.type === "dinner") {
    for (var i = 0; i < placeholderRestaurant.menus.dinner.length; i++) {
      if (placeholderRestaurant.menus.dinner[i] === item) {
        switchTest  = true;
      };
    };
    if (switchTest !== true) {
        placeholderRestaurant.menus.dinner.push(item);
        switchTest = false;
    };
  };
  return placeholderRestaurant;
};


// function removeMenuItem(restaurant, item) {
//   var placeholderRestaurant = restaurant;
//   var statement = "";
//   if (item.type === "breakfast" && placeholderRestaurant.menus.breakfast.includes(item) === true) {
//     for (var i = 0; i < placeholderRestaurant.menus.breakfast.length; i++) {
//       if (placeholderRestaurant.menus.breakfast[i] === item) {
//         statement = `No one is eating our ${placeholderRestaurant.menus.breakfast[i]} - it has been removed from the breakfast menu!`;
//         placeholderRestaurant.menus.breakfast[i].splice(i, 1);
//       };
//     };
//     return statement;
//   } else if (item.type === "lunch" && placeholderRestaurant.menus.lunch.includes(item) === true) {
//     for (var i = 0; i < placeholderRestaurant.menus.lunch.length; i++) {
//       if (placeholderRestaurant.menus.lunch[i] === item) {
//         statement = `No one is eating our ${placeholderRestaurant.menus.lunch[i]} - it has been removed from the lunch menu!`;
//         placeholderRestaurant.menus.lunch[i].splice(i, 1);
//       };
//     };
//     return statement;
//   } else if (item.type === "dinner" && placeholderRestaurant.menus.dinner.includes(item) === true) {
//     for (var i = 0; i < placeholderRestaurant.menus.dinner.length; i++) {
//       if (placeholderRestaurant.menus.dinner[i] === item) {
//         statement = `No one is eating our ${placeholderRestaurant.menus.dinner[i]} - it has been removed from the dinner menu!`;
//         placeholderRestaurant.menus.dinner[i].splice(i, 1);
//       };
//     };
//     return statement;
//   };
// };


function removeMenuItem(restaurant, itemName, itemType) {
  var statement = `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (restaurant.menus[itemType][i].name === itemName) {
      statement = `No one is eating our ${restaurant.menus[itemType][i].name} - it has been removed from the ${itemType} menu!`
      restaurant.menus[itemType].splice(i, 1);
    };
  };
  return statement;
};
