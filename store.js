// TODO: 2. Every time that user buys a new product, the current shopping cart should be printed out. 
// Don't forget to update the total price to be paid

// X 1. Make a 'shop' button that the user can click that will call a function
// X 1a. Check if the function gets called with console log
// X 2. Make the shop button call shopFromStore button
// X 2a. Check with console log if the cart gets updated correctly
// X 3. Print out the contents of the shoppingCart -> reuse displayProductsFromShoppingCart
// X 3. Note: Had to write some code to clear the items that are currently displayed
// X 4. Write a function calculateTotalPrice that calculates the total amount the user needs to pay
// X 4a. Try to use Array.reduce()
// X 4b. Check with console log if it's working
// X 5. Display the new total price that we calculated -> reuse displayTotalPrice
// X 6. Do victory dance 

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

var findProduct = function(userInput) {
  var foundProduct = products.find(function(product){
    return product.referenceNumber === userInput
  })

  return foundProduct
}

function getSum(total, product) {
  console.log(total.price, product);
  return total + product.price;
}
var calculateTotalPrice = function(productsArray){
  return productsArray.reduce(getSum, 0)
} 

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Find the product with the matching referenceNumber
  var productSelected = findProduct(parseInt(refNr))
  // Add the selectedProduct to the shoppingCart
  shoppingCart.push(productSelected)

  console.log(refNr, 'reference number from userinput');
  console.log(shoppingCart, 'shoppingCart');
  console.log(productSelected, 'product selected by user');
  

  displayProductsFromShoppingCart();

  var totalPrice = calculateTotalPrice(shoppingCart)
  // calculate the total price of your cart, and use it:
  displayTotalPrice(totalPrice);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {
  var shoppingCartElement = document.getElementById('shopping-cart');

  // Clear the items that are currently displayed
  while (shoppingCartElement.firstChild) {
      shoppingCartElement.removeChild(shoppingCartElement.firstChild);
  }

  // iterate over the shoppingCart and display the contents
  for(var product of shoppingCart){
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
    shoppingCartElement.appendChild(productElement);
  }
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
