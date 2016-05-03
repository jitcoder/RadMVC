var AjaxModel = require('./lib/ajaxmodel');
var Model = require('./lib/model');
var Controller = require('./lib/controller');
var React = require('react');
var ReactDOM = require('react-dom');

var Rad = (function(){
    
    var instances = {};
    var controllers = {};
    var controllerStates = {};
    
    //todo:add support to memoize arguments
    function invoke(controller,method){
        var args = [].slice.call(arguments, 2);
        var instance = instances[controller];
        var result = instances[method].apply(instances,args);
        //todo: figure out way to do type check rather than using properties
        //to determine whether result is a react component;
        //note: babel determines by checking if object has a render method
        if(result && result['$$typeof'] && result['props']){
            ReactDOM.render(result,controllerStates.view);
            controllerStates[controller].view = method;
        }
    }
    
    //add support to memoize arguments
    function refresh(controller){
        var args = [].slice.call(arguments, 1);
        controllers[controller][controllerStates[controller].view].apply(instances[controller],args);
    }
    
    function generateControllerInterface(controller){
        var instance = new controllers[controller]();
        var methods = Object.getOwnPropertyNames(controllers[controller].prototype);
        var icontroller = {};
        
        controllerStates[controller] = {
            element: document.querySelector('[controller="' + controllerName + '"]'),
            view: 'index'
        }
        
        for(var i = 0; i < methods.length; i++){
            icontroller[methods[i]] = invoke.bind(instance,controller,methods[i]);
        }
        
        icontroller.refresh = refresh.bind(null,controller);
    }
    
    return {
        Mode:Model,
        AjaxMode:AjaxModel,
        Controller:Controller,
        Initialize:function(){
            
        }
    }
    
})();

var Rad = {
    Model:Model,
    AjaxModel:AjaxModel,
    Controller:Controller,
    Controllers:{},
    React:null,
    ReactDOM:null,
    invokeAction:function(method,controller){
        var args = [].slice.call(arguments, 2);
        var result = this[method].apply(Rad[controller].instance,args);
        if(result && result['$$typeof'] && result['props']){
            ReactDOM.render(result,Rad[controller].instance.viewElement);
            Rad[controller].activeView = method;
        }
    },
    Initialize:function(){

        for(var controllerName in Rad.Controllers){
            var instance = new Rad.Controllers[controllerName]();
            
            var controllerInterface = {};
            var controllerMethods = Object.getOwnPropertyNames(Rad.Controllers[controllerName].prototype);
            for(var i = 0; i < controllerMethods.length; i++){
                controllerInterface[controllerMethods[i]] = Rad.invokeAction.bind(instance,controllerMethods[i],controllerName);
            }
            controllerInterface.controllerName = controllerName;
            controllerInterface.refresh = function(){
                Rad[this.controllerName][this.activeView]();
            }.bind(controllerInterface);
            
            controllerInterface.instance = new Rad.Controllers[controllerName]();
            
            Rad[controllerName] = controllerInterface;
            Rad[controllerName].instance.viewElement = document.querySelector('[controller="' + controllerName + '"]');
            if(Rad[controllerName].instance.viewElement){
                Rad[controllerName].index();
            }
            else{
                throw 'Controller found with no view to attach itself to ('+controllerName+')';
            }
        }
    }
};

module.exports = Rad;

if(window){
    window.Rad = Rad;
}

document.addEventListener('DOMContentLoaded',function(){
    Rad.Initialize();
});
