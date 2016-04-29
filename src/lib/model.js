function Model(){
    var props = Object.getOwnPropertyNames(Object.getPrototypeOf(this));

    //no-touchy
    this.ß = {
        properties: []
    }

    for(var i = 0; i < props.length; i++){
        var desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this),props[i]);
        if(desc.get){
            this.ß.properties.push(props[i]);
        }
    }

}

Model.prototype.serialize = function(){
    var result = {};
    for(var i = 0; i < this.ß.properties.length; i++){
        result[this.ß.properties[i]] = this[this.ß.properties[i]];
    }
    
    return result;
}

module.exports = Model;