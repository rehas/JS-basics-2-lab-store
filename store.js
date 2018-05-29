// TODO: User should be able to select a product by its referenceNumber and it will be added to the shopping cart.
// X 1. Create an inputfield to enter referenceNumber -> used window.prompt, checked with console log

// X 2. Create ok button when clicked it calls a function addToCart -> console.log('I got clicked')
// X Note -> Plan changed, we used window.prompt instead of a button
// X 2a. addToCart should be able to log the userinput (referenceNumber)
// X Note -> We are already able to log the userinput by using window.prompt
// X 2b. addToCart should be able to log the shoppingCart // addToCart not complete -> leave for now
// X Note -> We can log the shoppingcart in shopFromStore, we can access it 

// 3. Write a separate function: findProduct(referenceNumber) -> returns the product we want 
// 3. findProduct(1231) should return { referenceNumber: 1231, name: "Super Lite Mat", price: 10 }
// 3. Note: Use array method Array.find -> test

// 4. Add the product we want using findProduct to the cart in the addToCart function -> check with log
// 5. Print the cart to the screen
// 5a. Format printing to the screen in a nice way
// 6. Have beer, celebrate

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = []
// Declare `products`, the different that you will be selling under each of the departments.
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

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart

  console.log(refNr, 'reference number from userinput');
  console.log(shoppingCart, 'shoppingCart');
  

  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The variable holding the totol price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  return window.prompt('What product would you like?')
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
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
