
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

The 'App Component' ends up containing a lot of data logic (eg, making Ajax requests,
storing it in its state, processing it, passing this data downwards to child components etc..).
The result is, the web application looses it's maintainability.

Now, a lot of this gobbly goop code can be eliminated with Flux, Redux and taking advantage of
the observer pattern but it can also be eliminated with a MVC pattern.

## Implementation

Every controller in RadMVC must implement an **index** method which returns a react component or element.
We'll refer to methods which return components or elements as *view methods*.

RadMVC will always maintain a single instance of your controllers which you can interact with via
Rad.*YourController*.*ControllerMethod*.

eg.
```javascript
class YourController extends Rad.Controller{
    constructor(){
        super();
    }
    
    index(){
        return <div>Hello World</div>
    }
    
    differentView(){
        return <div>Different VieW</div>
    }
}

Rad.YourController.index() //updates view with react component returned by method
Rad.YourController.differentView() //updates view with react component returned by the differentView method
```

A controller is bound to a DOMElement and will treat the dom element as it's view port.

```html
<div controller="YourController"></div>
```

When calling methods on your controller via Rad, those methods are automatically bound to the instance of the controller.
Allowing you to access members defined in your controllers contructor.

eg.
```javascript
class YourController extends Rad.Controller{
    constructor(){
        super();
        this.x = 5;
    }
    
    index(){
        return <div>value of x is {this.x}</div>;
    }
}
```

This makes controllers useful for storing the **state** of the controllers area of concern.
