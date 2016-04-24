var AjaxModel = require('./api/ajaxmodel');
var Controller = require('./api/controller');
var React = require('react');
var ReactDOM = require('react-dom');

var Rad = {
    AjaxModel:AjaxModel,
    Controller:Controller,
    Controllers:{},
    React:null,
    ReactDOM:null,
    Initialize:function(){

        for(var controllerName in Rad.Controllers){
            var instance = new Rad.Controllers[controllerName]();
            
            var controllerInterface = {};
            var controllerMethods = Object.getOwnPropertyNames(Rad.Controllers[controllerName].prototype);
            for(var i = 0; i < controllerMethods.length; i++){
                controllerInterface[controllerMethods[i]] = function(method,controller){
                    var args = [].slice.call(arguments, 2);
                    var result = this[method].apply(this,args);
                    if(result && result['$$typeof'] && result['props']){
                        //ReactDOM.unmountComponentAtNode(Rad[controller].instance.viewElement);
                        ReactDOM.render(result,Rad[controller].instance.viewElement);
                        //ReactDOM.render(React.createElement(Rad.ControllerView,null,result),Rad[controllerName].instance.viewElement);
                    }
                    
                }.bind(instance,controllerMethods[i],controllerName);
            }
            controllerInterface.instance = new Rad.Controllers[controllerName]();
            
            Rad[controllerName] = controllerInterface;
            Rad[controllerName].instance.viewElement = document.querySelector('[controller="' + controllerName + '"]');
            if(Rad[controllerName].instance.viewElement){
                //ReactDOM.render(React.createElement(Rad.ControllerView,null,Rad[controllerName].instance.index()),Rad[controllerName].instance.viewElement);
                ReactDOM.render(Rad[controllerName].instance.index(),Rad[controllerName].instance.viewElement);
            }
            else{
                throw 'Controller found with no view to attach itself to ('+controllerName+')';
            }
        }
    }
};

// Rad.ControllerView = React.createClass({
//     displayName: 'ControllerView',
//     render: function() {
//         return React.createElement('div', {}, this.props.children);
//     }
// });

exports.Rad = Rad;
exports.React = React;
exports.ReactDOM = ReactDOM;

if(window){
    window.Rad = Rad;
}

document.addEventListener('DOMContentLoaded',function(){
    Rad.Initialize();
});
