
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
};

var deliveryOrders = [];

function takeOrder(order, takeOutOrdersArray) {
  if (takeOutOrdersArray.length < 3) {
    takeOutOrdersArray.push(order);
  };
  return takeOutOrdersArray
};

function refundOrder(number, takeOutOrdersArray) {
  for (var i = 0; i < takeOutOrdersArray.length; i++) {
    if (takeOutOrdersArray[i].orderNumber === number) {
      takeOutOrdersArray.splice(i, 1);
    }
  }
  return takeOutOrdersArray;
};

function listItems(takeOutOrdersArray) {
  var items;
  items = takeOutOrdersArray[0].item;
  for (var i = 1; i < takeOutOrdersArray.length; i++) {
    items = items + ", " + takeOutOrdersArray[i].item
  };
  return items
};

function searchOrder(takeOutOrdersArray, searchItem) {
  var output = false;
  for (var i = 0; i < takeOutOrdersArray.length; i++) {
    if (takeOutOrdersArray[i].item === searchItem) {
      output = true
    };
  };
  return output
};


































// function takeOrder(orderNumber) {
//   var deliveryOrders = [];
//   var order1 = {
//     orderNumber: 1,
//     item: "burger",
//     price: "8.99",
//     orderType: "delivery",
//     status: "accepted"
//   };
//
//   var order2 = {
//     orderNumber: 2,
//     item: "blt sandwich",
//     price: "5.99",
//     orderType: "delivery",
//     status: "accepted"
//   };
//
//   deliveryOrders.push(order1);
//   deliveryOrders.push(order2);
//
//   return deliveryOrders[orderNumber];
// };
//
// takeOrder(0);
