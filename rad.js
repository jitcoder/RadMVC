var AjaxModel = require('./api/ajaxmodel');
var Controller = require('./api/controller');

var Rad = {
    AjaxModel:AjaxModel,
    Controller:Controller,
    Controllers:{},
    ReactDOM:null,
    Initialize:function(){

        for(var controllerName in Rad.Controllers){
            var instance = new Rad.Controllers[controllerName]();
            
            var controllerInterface = {};
            var controllerMethods = Object.getOwnPropertyNames(Rad.Controllers[controllerName].prototype);
            for(var i = 0; i < controllerMethods.length; i++){
                controllerInterface[controllerMethods[i]] = function(method,controller){
                    var args = {};
                    for(var i = 2; i < arguments.length;i++){
                        args[i] = arguments[i];
                    }
                    
                    var result = this[method].apply(this,args);
                    
                    if(result && result['$$typeof'] && result['props']){
                        Rad.ReactDOM.render(result,Rad[controller].instance.viewElement);
                    }
                    
                }.bind(instance,controllerMethods[i],controllerName);
            }
            controllerInterface.instance = new Rad.Controllers[controllerName]();
            
            Rad[controllerName] = controllerInterface;
            Rad[controllerName].instance.viewElement = document.querySelector('[controller="' + controllerName + '"]');
            if(Rad[controllerName].instance.viewElement){
                Rad.ReactDOM.render(Rad[controllerName].instance.index(),Rad[controllerName].instance.viewElement);
                //Rad[controllerName].currentView = Rad[controllerName].index;
            }
            else{
                throw 'Controller found with no view to attach itself to ('+controllerName+')';
            }
        }
    }
};

if(window.ReactDOM){
    Rad.ReactDOM = window.ReactDOM;
}
else if(require){
    Rad.ReactDOM = require('react-dom');
}
else{
    throw "Unable to locate dependency ReactDOM";
}

module.exports = Rad;
if(window){
    window.Rad = Rad;
}

document.addEventListener('DOMContentLoaded',function(){
    Rad.Initialize();
});
