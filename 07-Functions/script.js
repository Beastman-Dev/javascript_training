// 1 hour = 60 minutes
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(5);

let dayToHours = function(days) {
    return days * 24;
};

let c = dayToHours(2);
console.log(c);

// Variables declaration
let balance = 100;
let stock = 50;
let price = 5;

// 1. Check if we have stock
// 2. Reduce stock, increase balance

function sellItem(quantity) {
    if(quantity <= stock) {
        stock -= quantity;
        balance += price * quantity;
        console.log("purchase completed", balance, stock)
    }
    else {
        console.log("not enough stock")
    }
}

sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
