// TODO:
// var products = []
// var products = []
var totalPrice = 0;

var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
let shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  console.log(`Reference number is ${refNr}`);
  console.log(shoppingCart);
  // Add the product with the matching referenceNumber to the shoppingCart

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(totalPrice);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
  //let shopMore = parseInt(window.prompt("Do you want to contiue? Enter 1 for yes and 2 for no", "1 or 2"));

};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents
  for(var product of shoppingCart){
    totalPrice = 0;
    console.log("Were in shoppingCart iteration");
    console.log(product);
    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('shopping-cart').appendChild(productElement);

    totalPrice += product.price;
    console.log(totalPrice);

  }
  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
  var refNum = parseInt(window.prompt("Please Enter the reference Number of the product you want to buy", "Only numbers please"));
  shoppingCart.push(products[products.findIndex(x => x.referenceNumber ===refNum)]);
  return refNum
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
  console.log(document.getElementById('total-price').innerText);
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
