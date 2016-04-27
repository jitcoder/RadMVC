# RadMVC

RadMVC is the MC for React. It's an MVC framework which uses React for it's view.

Essentially, RadMVC provides you with models and controllers to give you a complete MVC experience when using React.

The goal of this framework is to provide a **simple** and **concise** way to separate your presentation, business and data layers with the **smallest learning curve** possible.

Please visit the [github page](https://github.com/jitcoder/radmvc) to view **documentation** & **examples**. 

#### Hello World Example
###### homecontroller.js
```javascript
import {Rad,React} from 'radmvc';

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
</html>
```