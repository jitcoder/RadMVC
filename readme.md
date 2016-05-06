# RadMVC

RadMVC is the MC for React. It's an MVC framework which uses React for it's view.

Essentially, RadMVC provides you with models and controllers to give you a complete MVC experience when using React.

The goal of this framework is to provide a **simple** and **concise** way to separate your presentation, business and data layers with the **smallest learning curve** possible.

Please feel free to view the 'TodoList' sample app in the examples directory.

*(note: the library currently builds fine, the examples and docs are currently being worked on.)*

```
npm install radmvc
```


#### Hello World Example
###### homecontroller.js
```javascript
import Rad from 'radmvc';
import React from 'react';

class HomeController extends Rad.Controller{
    
    constructor(){
        super();
    }
    
    index(){
        return <div>Hello World <button onClick={Rad.HomeController.goodbye}>Bye!</button></div>;
    }
    
    goodbye(){
        return <div>Good Bye!</div>;
    }
    
}
//register HomeController with RadMVC
Rad.Controllers.HomeController = HomeController;
```
###### index.html
```html
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <div controller="HomeController"></div>
    </body>
    <script src="/radmvc.min.js"></script>
</html>
```

### Contents of this Readme
- Examples
- Documentation
- Installation
- Controllers
- Models
- Guidelines

### Examples
- [Todo List](https://github.com/jitcoder/RadMVC/tree/master/examples/todolist)

### Documentation
- [RadMVC](https://github.com/jitcoder/RadMVC/blob/master/docs/radmvc.md)
- [Controller](https://github.com/jitcoder/radmvc/docs/controller.md)
- [Model](https://github.com/jitcoder/radmvc/docs/model.md)
- [AjaxModel](https://github.com/jitcoder/radmvc/docs/ajaxmodel.md)
- DbModel (*coming soon*)

#### Installation

##### NPM
```sh
npm install radmvc --save
```

##### Minified File
```sh
https://ComingSoon.com/from/a/cdn.min.js
```

### Controller

To create a controller, create a class which extends Rad.Controller
```javascript
class MyController extends Rad.Controller
```

RadMVC maintains a single instance of your controller  class and will call the controller's **index** method to display the intial view.
```javascript
class MyController extends Rad.Controller{
    constructor(){
        super();
    }
    
    index(){
        return <div>sup</div>
    }
}
```

The last step is to register the controller with RadMVC. This is done outside of the class definition, similar to how propTypes are defined with React using ES6.

```javascript
Rad.Controllers.MyController = MyController;
```

In order for RadMVC to know which DOM element to use as the 'View Port', you must assign a DOM element with an attribute **controller=NAME-OF-YOUR-CONTROLLER**.

```html
<div controller="MyController"></div>
```

The purpose of the controller is to contain your 'state' as well as all of your business logic. One way to look at it would be: your controller class is going to be your Root react component. Your React components should technically be stateless (unless unavoidable) and only concern themselves with rendering using props the controller passes to them. For an example of this please view the 'Sales Example'

You will notice in the Sales Example that the controller's methods aren't bounded to the controller instance in the constructor. This is because RadMVC will automagically bind all controller methods to the instance of the controller that it maintains.

### Models
##### AjaxModel
The AjaxModels exposes RESTful ajax methods to the inheriting class, enabling that class to utilize web api's as it's datasource.
Methods which are exposed are get,post,put,delete. Each method has the same signature: (url,data,contentType,additionalHeaders)

- **url** type:string - required
- **data** type:any - required for post and put
- **contentType** type:string - optional *defaults to application/json*
- **additionalHeaders** type:array - optional

##### eg.
```javascript
post('/someurl',{hello:"world"})
.then(()=>{

})
.catch((e)=>{

};
```
or
```javascript
try{
 data = await post('/someurl',{hello:"world"});
}
catch(e){

}
```

All methods return a **Promise**