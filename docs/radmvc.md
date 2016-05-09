
#RadMVC

## Philosophy

MVC is a loosely defined pattern with a multitude of different implementations.
eg. AngularJS' implementation of it, ASP.NET MVC's implementation of it, etc...

Regardless of whether it's being implemented in the front-end or the back-end, it
provides a unique way to separate your applications areas of concern.

The **view** should only be concerned with presentation, the **controller** with 
business logic, and the **model** with data logic.

This separation of concerns makes your application very maintainable and scalable.

![MVC Pattern](https://jitcoder.github.io/RadMVC/images/mvc_diagram.png)

## React

I personally absolutely love ReactJS. Combined with ES2015 and JSX it delivers
an extremely satisfying development experience.

However, (unfortunately) it is very common to see applications with a *Root Component*
which functions as the 'App.'

The 'App Component' ends up containing a lot of data & business logic (eg, making Ajax requests,
storing it in its state, processing it, passing this data downwards to child components etc..).
The result is, the web application looses it's maintainability.

Now, a lot of this gobbly goop code can be eliminated with Flux, Redux and taking advantage of
the observer pattern but it can also be eliminated with a MVC pattern.

## API

### Controller
<a href="controller.md">More details</a>
    - Controller.Refresh()
        Re-renders previously 

Usage
```javascript
class MyController extends Rad.Controller{
    constructor(){
        super();
    }
    
    index(){
        return <div>hello</div>;
    }
}
Rad.Controllers.MyController = MyController;

Rad.MyController.refresh();
```

### Model
<a href="model.md">More Details</a>
    - Model.serialize()
        Iterates all properties of the derived class an returns an object literal representation

    - Model.deserialize(*object*)
        Iterates all properties of *object* and assigns equally named properties
        in the derived class which have property setters.

Usage
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
var m = new MyModel();
var s = m.serialize();
s.x = 6;
MyModel.deserialize(s)
```

### ModelArray
Helper class when dealing with arrays of your models (extends Array.prototype).
Contains the same *serialize*, *deserialize* methods but handle arrays.

Usage
```javascript
class MyModelArray extends Rad.Model.arrayOf(MyModel){
    constructor(){
        super();
    }
}

var mydata = [
    {x:5},
    {x:1}
]

var myModelArray = new MyModelArray();

myModelArray.deserialize(mydata);

for(var i = 0; i < myModelArray.length; i++){
    console.log(myModelArray[i].x)
}
```

