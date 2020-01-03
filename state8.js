demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#6b32a8';
        console.log("state8");
        addChangeStateEventListeners();
    },
    update: function(){}
};