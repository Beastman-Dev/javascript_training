player = {
    health: 100,
    fun: 0,
    play: function() {
        console.log('have fun');
        this.fun += 10;
        console.log(this.fun);
    },
    eat: function(food) {
        if(food == 'apple') {
            this.health += 10;
        }
        else if(food == 'candy') {
            this.health -= 5;
            this.fun += 5;
        }
        else {
            console.log('invalid food');
        console.log(this.health);
        console.log(this.fun);
        }
        return this;
    }
};

player.eat('apple');
console.log(player);
player.eat('candy');
console.log(player);
player.play();
console.log(player);