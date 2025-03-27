let distance = 150;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let engineDamaged = true;

if(engineDamaged || distance > 200) {
    console.log('won\'t make it');
}

else if(distanceCondition && fuel >= 100) {
    console.log('will make it');
}

else if(distance < 100 && fuel >= 25) {
    console.log('will make it');
}

