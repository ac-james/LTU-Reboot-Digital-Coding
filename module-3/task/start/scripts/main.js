/*console.log('Hello World');
document.write('Hello World');*/
// This is a single line comment
/*
This 
is a multiple 
line 
comment
*/

const productName = 'Baked Beans'; //const = a variable name that doesn't change
let price = 1.50;
let quantity = 3;

let inStock = true;
let discountAmount = 0.20;

// console.log(productName);
// console.log(price);

function showProductName() { // declaring (creating) a function
  console.log(productName);
}

showProductName(); // using a function /invoke a function (call the function)

let firstName = 'Elin';

function greeting( name ) {
  console.log(name);
}

greeting('Ann');
greeting(firstName);

/*function totalPrice( productPrice, productQuantity ) {
  console.log( productPrice * productQuantity );
}

totalPrice( price, quantity ); */

let totalPrice = ( productPrice, productQuantity ) => {
    console.log( productPrice * productQuantity );
  }

  totalPrice( price, quantity );

// let greeting = name => console.log( name );
// the above code is using ES6 arrow function (the new method)
  
let checkAvailability = productInStock => console.log( productInStock );


// checkAvailability( inStock );

let num = 40;

if ( num === 50 ) {
  console.log('number is higher than 50');
} else {
    console.log('number is less than 50');
}