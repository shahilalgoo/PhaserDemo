demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#a88b32';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};
