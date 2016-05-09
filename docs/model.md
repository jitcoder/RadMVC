# Model

Base class for all model types.
Provides two methods
- serialize
- deserialize


### Model.serialize

returns an object literal representation of your model.

eg.
```javascript
class MyModel extends Rad.Model{
    constructor(){
        this._x = 5;
    }
    
    get x(){
        return this._x;
    }
    
    set x(value){
        this._x = value;
    }
}

MyModel.serialize() //returns {x:5}
```

### Model.deserialize

accepts one argument which is the object we're 'reading' from.
All properties on the object are assigned to properties of equal property name
which have setters on the model.

```javascript
class MyModel extends Rad.Model{
    constructor(){
        this._x = 0;
    }
    
    get x(){
        return this._x;
    }
    
    set x(value){
        this._x = value;
    }
}

var model = new MyModel();
model.deserialize({x:5});

console.log(model.x); //outputs 5
```

