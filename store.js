// TODO:
// var products = []
// var products = []
var totalPrice = 0;


var products = [
  {department:"mats", referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  {department:"mats", referenceNumber: 1232, name: "Power Mat", price: 20 },
  {department:"props", referenceNumber: 1233, name: "Block", price: 30 },
  {department:"props", referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  {department:"clothes", referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  {department:"clothes", referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  {department:"books", referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  {department:"books", referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
let shoppingCart = [];
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {
  totalPrice = 0;

  var refNr = askUserForReferenceNumber();
  if(refNr === undefined){
    return
  }
  shoppingCart.push(products[products.findIndex(x => x.referenceNumber ===refNr)]);

  //console.log(`Reference number is ${refNr}`);
  console.log(shoppingCart);
  // Add the product with the matching referenceNumber to the shoppingCart

  displayProductsFromShoppingCart();
  // debugger;
  // calculate the total price of your cart, and use it:
  displayTotalPrice(totalPrice);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
  //let shopMore = parseInt(window.prompt("Do you want to contiue? Enter 1 for yes and 2 for no", "1 or 2"));

};

var displayProductsFromShoppingCart = function() {
  //Empty the shopping list
  // debugger;
  var shopListElement = document.getElementById('shopping-cart');
  while (shopListElement.childElementCount > 1){
    //console.log(shopListElement.firstChild.id);
    if(shopListElement.lastChild.id !== "shopCartHeader"){
      shopListElement.removeChild(shopListElement.lastChild);
    }
  }

  // iterate over the shoppingCart and display the contents

  if(shoppingCart.length === 0){
    return
  }

  for(var product of shoppingCart){
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

var filterProducts = function(){

  var departments = [
    "mats",
    "props",
    "clothes",
    "books"
  ]  

  var userPrompt = `Please enter the name of the category you want to be displayed!
    mats
    props
    clothes
    books
    all
  `
  
  

  let query = window.prompt(userPrompt).toLowerCase();
  console.log(query);

  if(query === "all" || departments.includes(query)){

  printProductsOnScreen(query)
  }else{
    alert("Please enter a valid filter");
    return
  }
  
}

var askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
  var refNum = parseInt(window.prompt("Please Enter the reference Number of the product you want to buy", "Only numbers please"));
  if (isNaN(refNum)){
    alert("Please enter a number");
    return 
  }
  // debugger;
  
  console.log("here in wrong ref num" + products.findIndex(x => x.referenceNumber ===refNum));

  if(products.findIndex(x => x.referenceNumber ===refNum) === -1){
    alert("No such item in list");
    return
  }
  return refNum

};
var finishShopping = function(){
  alert(`Thanks for shopping please pay ${totalPrice} Euros on your way out!!`);
}
//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
  console.log(document.getElementById('total-price').innerText);
};

var printProductsOnScreen = function (query = "all") {

  var productListElement = document.getElementById('product-overview');
  while (productListElement.childElementCount > 1){
    //console.log(shopListElement.firstChild.id);
    if(productListElement.lastChild.id !== "productList"){
       productListElement.removeChild(productListElement.lastChild);
    }
  }  
  

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
    if (query === "all" || query === product.department){
    document.getElementById('product-overview').appendChild(productElement);
    }
  }
};

var runApp = function () {
  printProductsOnScreen();

  //shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
