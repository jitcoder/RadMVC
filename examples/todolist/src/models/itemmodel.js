import Rad from 'radmvc';

//create ajax backed model
export default class ItemModel extends Rad.AjaxModel{
    //during instantiation require item string and completed boolean
    constructor(item,completed){
        super();
        
        this._item = item;
        this._completed = completed;
    }
    
    get item(){
        return this._item;
    }
    
    set item(value){
        if(!value || typeof value !== "string")
            throw "value assigned to item must be a string";
        else
            this._item = value;
    }
    
    get completed(){
        return this._completed;
    }
    
    set completed(value){
        if(typeof value !== "boolean")
            throw "value assigned to completed must be a boolean";
        else
            this._completed = value;
    }
    
    //get all todo items from server
    static fetchAll(callback){
        
        if(!callback || typeof callback !== "function")
            throw "fetch requires a callback function to be provided";
        
        //this is a static method, so there is no base class method.
        //we will use the static ajax methods RadMVC provides.
        Rad.AjaxModel.get('/todo')
        .then((data)=>{
            let result = [];
            for(let i = 0; i < data.length; i++){
                result.push(new ItemModel(data[i].item,data[i].completed));
            }
            callback(result);
        });
    }
    
    
    //real world scenario we'd probably just use an upsert..
    //update an existing todo item
    update(){
        return super.put('/todo',this);
    }
    
    //add a new todo item
    create(){
        return super.post('/todo',this);
    }

    remove(){
        return super.delete('/todo',this);
    }
}