function Model(){}

Model.prototype.serialize = function(){
    var props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    var result = {};
    for(var i = 0; i < props.length; i++){
        result[props[i]] = this[props[i]] ;
    }
    
    return result;
}

module.exports = Model;