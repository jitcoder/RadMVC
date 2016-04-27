var AjaxModel = require('./lib/ajaxmodel');
var Controller = require('./lib/controller');
var React = require('react');
var ReactDOM = require('react-dom');

var Rad = {
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

exports.Rad = Rad;
exports.React = React;
exports.ReactDOM = ReactDOM;

if(window){
    window.Rad = Rad;
}

document.addEventListener('DOMContentLoaded',function(){
    Rad.Initialize();
});
