"use strict";
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x ;
    this.y = y ;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x <= 505) {
        this.x += 160*dt;
    }

    else {
        this.x = Math.random() * -200;
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {
    if (this.y < 40) {
        this.reset();
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function(key) {
    if(key == 'left' && this.x > 0) {
        this.x -= 100;
    }
    if(key == 'right' && this.x < 400) {
        this.x += 100;
    }
    if(key == 'up' && this.y > 0) {
        this.y -= 90;
    }
    if(key == 'down' && this.y < 400) {
        this.y += 90;
    }
};

var checkCollisions = function() {
    allEnemies.forEach(function(enemy) {
    if(Math.abs(player.x-enemy.x) <= 50 && player.y==enemy.y) {
        player.reset();
    }
    });
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy (-150 , 40);
var enemy2 = new Enemy (-200 , 130);
var enemy3 = new Enemy (-300 , 220);
var enemy4 = new Enemy (-400 , 40);
var enemy5 = new Enemy (-500 , 130);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

var player = new Player (200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
