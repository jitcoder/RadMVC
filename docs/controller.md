#Controller

*jump to the <a href="#summary">summary</a> for a quick skim*

Every controller in RadMVC must implement an **index** method which returns a react component or element.
We'll refer to methods which return components or elements as **view methods**.

Controllers are also *bound* to a DOM Element. This is achived by specifying a controller attribute on a DOM Element.

Required naming convention for your controller: *Controller. ie. your controller classes must contain **Controller** as a suffix.

```html
<div controller="MyController"></div>
```

#### Behaviour

RadMVC will always maintain a **single instance of your controllers** which you can interact with via an interface RadMVC will generate for you.
The interface for each controller is exposed on the Rad object and can be accessed via: Rad.*YourController*.*ControllerMethod*.

If a view method is invoked via the interface, **RadMVC will attempt to locate the appropriate DOM Element** if none was available at the time of DOMContentLoaded.
This can be seen as a sort of 'lazy mounting'.

**All methods invoked on a controller via the interface provided are bound to the instance of the controller**.
This means that you don't have to manually bind all your methods in your controller's constructor as long as you are accessing them via the interface.

eg.
```javascript
class YourController extends Rad.Controller{
    constructor(){
        super();
        this.x = 5;
    }
    
    index(){
        return <div>Hello World, x is {this.x}</div>
    }
    
    differentView(){
        return <div>Different View, x is {this.x}</div>
    }
}

//register your controller with RadMVC
Rad.Controllers.YourController = YourController;

Rad.YourController.index() //updates view with react component returned by method
Rad.YourController.differentView() //updates view with react component returned by the differentView method
```

It is highly recommended to store your **state** in the controller.

#### API

Controller interface has a **refresh** method which can be used to rerender the last view returned by the controller.

eg.

```javascript
class YourController extends Rad.Controller{
    constructor(){
        super();
        this.x = Math.random()
    }
    
    index(){
        return <div>
            <button onClick={Rad.YourController.randomize}>Generate Random</button>
            <span>The value of x is {this.x}</span>
        </div>
    }
    
    randomize(){
        this.x = Math.random();
        Rad.YourController.refresh();
    }
}
```

Clicking on the 'Generate Random' button will cause the value of this.x to be updated with a new random value, and the last view which was index is refreshed.


#### Communication between controllers

Let's say we have two controllers, NumbersController and SumController.
The NumbersController will maintain a list of numbers in an array, which when changed will let the SumController to update its view.

The SumController simply displays the sum of the array<number> given to it.

```html
<div controller="NumbersController"></div>
<div controller="SumController"></div>
```

```javascript
class NumbersController extends Rad.Controller{
    constructor(){
        super();
        this.numbers = [];
    }
    
    index(){
        return <div>Open your devtools and type in Rad.NumbersController.add(5) in console</div>;
    }
    
    add(value){
        this.numbers.push(value);
        Rad.SumController.refresh(this.numbers);
        //or Rad.SumController.index(this.numbers);
    }
}


class SumController extends Rad.Controller{
    constructor(){
        super();
    }
    
    index(numbers){
        if(!numbers){
            numbers = [];
        }
        
        var sum = 0;
        for(var i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }
        
        return <div>Sum of numbers is {sum}</div>
    }
}
```


<h2 id="summary">Summary</h2>

- Extend your controller class from Rad.Controller
- Make sure to have an **index** method.
- Attach your controller to a DOM Element by defining a controller property on the element, eg. controller="MyController"
- Call your view methods via RadMVC, eg. Rad.MyController.Method()
- Use Rad.MyController.refresh() to re-render the current view
- Keep your state and business logic in your controller.
- After defining your controller class, add the line Rad.Controllers.MyController = MyController to register it with RadMVC
- Always name your controller classes -> CLASSNAME*Controller*