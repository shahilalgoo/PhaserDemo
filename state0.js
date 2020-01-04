var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var bob, speed = 8;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('bob', 'assets/spritesheets/bobSheet.png', 250, 250);
        game.load.image('tree', 'assets/backgrounds/treebg.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#89ff80';
        

        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2500, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var treeBG = game.add.sprite(0, 0, 'tree');

        bob = game.add.sprite(centerX, centerY, 'bob');
        bob.anchor.setTo(0.5, 0.5);

        game.physics.enable(bob);
        bob.body.collideWorldBounds = true;
        bob.animations.add('walk', [0, 1, 2, 3]);

        game.camera.follow(bob);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
        
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            bob.scale.setTo(1, 1);
            bob.x += speed;
            bob.animations.play('walk', 7, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            bob.scale.setTo(-1, 1);
            bob.x -= speed;
            bob.animations.play('walk', 7, true);
        } else {
            bob.animations.stop('walk');
            bob.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            bob.y += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            bob.y -= speed;
            if (bob.y < 340) {
                bob.y = 340;
            }
        }

    }
};

function changeState(i, StateNum) {
    console.log('state' + StateNum);
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