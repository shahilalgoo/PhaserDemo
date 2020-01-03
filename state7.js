demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#3283a8';
        console.log("state7");
        addChangeStateEventListeners();
    },
    update: function(){}
};