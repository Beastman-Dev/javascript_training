let player = {
    age: 99, 
    name: 'Bob',
    isActive: true,
    outfit: {
        color: 'blue',
        size: 'M',
        cost: 100,
        isNew: true
    }
};

console.log(player);

console.log(player.name);
console.log(player['name']);

player.isActive = false;
console.log(player.isActive);

player.health = 100;
console.log(player.health);

delete player.health;
console.log(player.health);

console.log(player.outfit.color);

// Challenge = modify size of outfit to L
player.outfit.size = 'L';
console.log(player.outfit.size);