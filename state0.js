var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var bob, speed = 8;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('bob', 'assets/sprites/bob.png');
    },
    create: function(){
        game.stage.backgroundColor = '#89ff80';
        console.log("state0");

        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        bob = game.add.sprite(centerX, centerY, 'bob');
        bob.anchor.setTo(0.5, 0.5);
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            bob.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            bob.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            bob.y += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            bob.y -= speed;
        }

    }
};

function changeState(i, StateNum) {
    game.state.start('state' + StateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}