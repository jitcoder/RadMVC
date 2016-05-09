# AjaxModel

Extends Rad.Model and provides get,post,put,delete ajax methods.

eg.
```javascript
class MyModel extends Rad.AjaxModel{
    constructor(){
        super();
        this._x = 5
    }
    
    get x(){
        return this._x;
    }
    
    set x(value){
        this._x = value;
    }
    
    save(){
        this.post('/mymodel',this)
        .then(()=>{
            console.log('done');
        });
    }
```