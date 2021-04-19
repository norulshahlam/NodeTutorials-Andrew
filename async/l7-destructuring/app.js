/*
1. obj property shorthand
2. destructuring obj in global scope
3. destructuring obj as param input

whole goal of  structuring is to extract object properties and their values into individual variables so instead of calling a 'product.price', we could have 'price' variable with the value of 3.

*/

//1.
const food = "fish";
const drink = "soda";
const dessert = "cake";

const takeout = {
  //w/o shorthand
  food: food,

  //w shorthand. note: both name must be the same to do this
  drink,
  dessert,
};

const product = {
  name: "shah",
  price: 3,
  address: "bedok",
  status: "single",
  employed: true,
};

//without destructuring
// const name = product.name;
// const address = product.address;

//2. with destructuring
//we can also rename the variable
const { name, address: myAdd } = product;

console.log(name, myAdd);

//3. destruc obj as param in func. in case the obj returns undefined, then this will set its value to null. else the app will crash cos u cant destructure undefined
const transac = (type, { status, employed } = {}) => {
  console.log(type, status, employed);
};
transac("info: ", product);
