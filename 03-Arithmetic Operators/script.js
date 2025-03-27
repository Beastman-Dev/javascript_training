// addition
let a = 1 + 1;
console.log(a); // 2

let b = 10;
let c = a + b;
console.log(c); // 12

// b = b + 1;
b += 1;
console.log(b); // 11

// subtraction
let x = 10 -5;
console.log(x); // 5

let y = b + x;
console.log(y); // 16

// x = x - 1;
x -= 1;
console.log(x); // 4

// multiplication
let unitPrice = 2;
let units = 10;
let total = unitPrice * units;
console.log(total); // 20

// division
let n = 10;
let result = n / 2;
console.log(result); // 5

// modulus
let r = 5 % 2;
console.log(r); // 1

// Challenge
let baseWeight = 10000;
let foodWeight = 100;
let passengerWeight = 10;

let fuelUnitWeight = 2; // weight of 1 unit of fuel
let fuelUnits = 100; // number of units of fuel needed

let totalWeight = baseWeight + foodWeight + passengerWeight + fuelUnitWeight * fuelUnits;
console.log(totalWeight); // 10310