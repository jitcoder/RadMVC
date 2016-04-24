# RadMVC

RadMVC is the MC for React. It's an MVC framework which uses React for it's view. I enjoy using React every day, however, one
thing that's always bothered me, eventhough React is the 'V' in MVC, I felt an emptiness in my life without the rest of the letters.

The goal of this framework is to provide a **simple** and **concise** way to seperate your presentation, business and data layers with the **smallest learning curve** possible.

Please feel free to view the 'Sales' sample app in the examples directory.

#### Hello World Example
###### homecontroller.js
```javascript
import {Rad,React} from 'radmvc';
class HomeController extends Rad.Controller{
    constructor(){
        super();
    }
    
    index(){
        return <div>Hello World <button onClick={this.goodbye}>Bye!</button></div>
    }
    
    goodbye(){
        return <div>Good Bye!</div>
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
</html>
```

### Contents

- Hello World Example
- Installation
- Controllers
- Models
- [Advanced Example](http://github.com/jitcoder/radmvc/advanced.md)
- Philosophy

#### Installation

##### NPM
```sh
npm install radmvc --save
```

##### Minified File
```sh
https://ComingSoon.com/from/a/cdn.min.js
```

##### Bower
```sh
Also Coming Soon
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

##### SocketModel
Allows you to perform Web Socket backed I/O for your model

*coming soon*
##### WebSQLModel
Allows you to perform WebSQL backed I/O for your model

*coming soon*
##### IndexedModel
Allows you to perform IndexedDB backed I/O for your model

*coming soon*
##### WebStorageModel
Allows you to perform localStorage backed I/O for your model

*coming soon*
