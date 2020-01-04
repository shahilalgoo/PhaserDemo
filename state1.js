demo.state1 = function(){};

var cursors, vel = 1000, rocks;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassTiles.png');
        game.load.image('rockTiles', 'assets/tilemaps/rockTiles.png');
        game.load.image('bob', 'assets/sprites/bob.png');
    },
    create: function(){
        //game.stage.backgroundColor = '#329ba8';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        addChangeStateEventListeners();

        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');

        var grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');

        map.setCollision(0, true, 'rocks');

        bob = game.add.sprite(200, 200, 'bob');
        bob.scale.setTo(0.5, 0.5);
        game.physics.enable(bob);

        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(bob, rocks, function(){console.log("hitting rocks!");});

        if (cursors.up.isDown) {
            bob.body.velocity.y = -vel;
        }
        else if (cursors.down.isDown) {
            bob.body.velocity.y = vel;
        }
        else {
            bob.body.velocity.y = 0;
        }

        if (cursors.left.isDown) {
            bob.body.velocity.x = -vel;
        }
        else if (cursors.right.isDown) {
            bob.body.velocity.x = vel;
        }
        else {
            bob.body.velocity.x = 0;
        }

    }
};
