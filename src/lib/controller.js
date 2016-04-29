function Controller(){
    
    this.ß = {
        element:null,
        view:null,
        actions:[]
    }
    
    var proto = Object.getPrototypeOf(this);
    var props = Object.getOwnPropertyNames(proto);
    for(var i = 0; i < props.length; i++){
        if(props[i] === 'constructor'){
            continue;
        }
        else{
            var desc = Object.getOwnPropertyDescriptor(proto,props[i]);
            if(desc.value && typeof desc.value === 'function'){
                this.ß.actions.push(props[i]);
            }
        }
    }

    window.Rad.Controllers[proto.name] = proto;
}

module.exports = Controller;
