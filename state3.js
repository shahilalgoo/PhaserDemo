demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#7fa832';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};