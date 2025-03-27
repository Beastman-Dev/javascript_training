let item = 'engine';

if(item != 'engine') {
    console.log('not engine');
}

let score = 50;

if(score > 60) {
    console.log('You passed!');
}
else {
    console.log('You failed!');
}

let isEngine = item == 'engine';
console.log(isEngine);

// Challenge
let balance = 100;
let itemPrice = 10;

// 1. Check balance
let hasMoney = balance >= itemPrice;
if(hasMoney) {
    console.log('You can buy the item');
    balance -= itemPrice;
    console.log('New balance: ' + balance);
}
else {
    console.log('You don\'t have enough money');
}
// 2. If they buy, update balance