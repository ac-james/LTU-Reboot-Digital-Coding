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

//let firstName = 'Elin';

function greeting( name ) {
  console.log(name);
}

/*greeting('Ann');
greeting(firstName);
*/
/*function totalPrice( productPrice, productQuantity ) {
  console.log( productPrice * productQuantity );
}

totalPrice( price, quantity ); */

/*let totalPrice = ( productPrice, productQuantity ) => {
    console.log( productPrice * productQuantity );
  }

  totalPrice( price, quantity );

// let greeting = name => console.log( name );
// the above code is using ES6 arrow function (the new method)
  
let checkAvailability = productInStock => console.log( productInStock );


// checkAvailability( inStock );

/*let num = 40;

if ( num === 50 ) {
  console.log('number is higher than 50');
} else {
    console.log('number is less than 50');
}
*/
/*
function productDiscount() {

  if(quantity > 2 ) {
    let newPrice = ( price * quantity ) - discountAmount; //BODMAS
    console.log( newPrice );
  } else {
    console.log( price * quanitity );
  }

}

productDiscount();
*/
/*switch (colour) {
    case 'grey':
      console.log('Correct');
      break;
    case 'orange':
      console.log('Correct');
      break;
    case 'blue':
      console.log('Correct');
      break;
    default:
      console.log('Incorrect');
      break;
}
*/

/*function drinkOrder(drink, size) {

  switch(drink) {
    case 'cola' :
      console.log(drink, size);
      break;
    case 'lemonade' :
      console.log(drink, size);
      break;
    default:
      //console.log("We don't currently have a " + size + " " + drink");
      console.log(`We don't currently have a ${size} ${drink}, apologies`);
      break;
  }

}*/


/*drinkOrder('cola', 'X-Large');
drinkOrder('lemonade', 'Medium');
drinkOrder('orangeade', 'Small')

function calculator(num1, num2, operator) {

  switch(operator) {
    case ' + ' :
      console.log( `${num1 + num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log( `${num1 - num2} = ${num1 - num2}`);
    case '*':
        console.log( `${num1 * num2} = ${num1 * num2}`);
    default :
      console.log(`${operator} does not exist`);
      break;
  }

}*/

/*calculator(1, 1, '+');
calculator(10, 2, '-');
calculator(5, 5, '*');

let firstName = 'Ann';
let lastName = 'James';

let fullName = firstName + lastName;

console.log( fullName);

let num = 55;

let word = '65';

let numWord = `${num} ${word}`;

console.log(numWord);

let temperature = 30;
let season = 'Spring';

if( temperature >= 30 || season === 'Spring') {
  console.log('You should wear just a T-shirt and shorts');
} else {
  console.log('You should wear trousers and a jumper');
}
*/
/*
let product = [  //this is an array
  productName,
  price,
  quantity,
  inStock,
  discountAmount
];

let firstItem = product[0];
let secondItem = product [1]
let lastItem = product[4];
*/

let product = {
  productName : 'Apples',
  price: 1.29,
  quantity: 6,
  inStock: true,
  discountAmount: 0.35,
  coloursAvailable: ['Green', 'Red', 'Yellow', 'Pink'],
};

product.price = 2.09;

/*
 console.log( product.price ); //Dot notation
 console.log( product ['price']); //Square Bracket notation

 console.log( product.quantity );
 console.log( product['quantity']);
 */

 //let nameofProduct = product.productName;
 //let discount = product['discountAmount'];

//let yellow = product['coloursAvailable'][2]);

// delete product.price;  //How to delete a property from an object

product.shape = 'sphere';

// console.log( product );




