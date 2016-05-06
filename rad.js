var Rad = (function(window,document){
    
    var React = require('react');
    var ReactDOM = require('react-dom');    
    
    var instances = {};
    var controllers = {};
    var controllerStates = {};

    function Controller(){}
    
    function Model(){}

    Model.prototype.serialize = function(){
        var props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        var result = {};
        for(var i = 0; i < props.length; i++){
            result[props[i]] = this[props[i]] ;
        }
        
        return result;
    }

    var api = {
        Model:Model,
        AjaxModel:null,
        Controller:Controller,
        Initialize:initialize,
        Controllers:controllers
    };
    
    api.AjaxModel = require('./lib/ajaxmodel')(api)
    
    function invoke(controller,method){
        var args = [].slice.call(arguments, 2);
        var instance = instances[controller];
        var result = instance[method].apply(instance,args);
        //todo: figure out way to do type check rather than using properties
        //to determine whether result is a react component;
        //note: babel determines by checking if object has a render method
        if(result && result['$$typeof'] && result['props']){
            if(!controllerStates[controller].element){
                controllerStates[controller].element = document.querySelector('[controller="' + controller + '"]');
            }
            
            if(!controllerStates[controller].element){
                console.warn("A view was returned by the controller, but RadMVC could not find a DOM element linked with the controller '" + controller + "'");
            }
            
            ReactDOM.render(result,controllerStates[controller].element);
            controllerStates[controller].view = method;
        }
    }

    function refresh(controller){
        var args = [].slice.call(arguments, 1);
        api[controller][controllerStates[controller].view].apply(instances[controller],args);
    }
    
    function generateControllerInterface(controller){
        var instance = instances[controller];
        var proto = controllers[controller].prototype;
        var props = Object.getOwnPropertyNames(proto);
        var icontroller = {};
        
        controllerStates[controller] = {
            element: document.querySelector('[controller="' + controller + '"]'),
            view: 'index'
        }
        
        for(var i = 0; i < props.length; i++){
            var desc = Object.getOwnPropertyDescriptor(proto,props[i]);
            if(desc.value && typeof desc.value === 'function'){
                icontroller[props[i]] = invoke.bind(instance,controller,props[i]);
            }
            
        }
        
        icontroller.refresh = refresh.bind(null,controller);
        
        return icontroller;
    }
    
    function initialize(){
        for(var controller in controllers){
            var instance = instances[controller] = new controllers[controller]();
            api[controller] = generateControllerInterface(controller);
            if(controllerStates[controller].element){
                api[controller].index();
            }
        }
    }

    if(window){
        window.Rad = Rad;
    }

    if(document){
        document.addEventListener('DOMContentLoaded',function(){
            initialize();
        });
    }

    return api;
    
})(window,document);

module.exports = Rad;


