# RadMVC

RadMVC is the MC for React. It's an MVC framework which uses React for it's view. I enjoy using React every day, however, one
thing that's always bothered me, eventhough React is the 'V' in MVC, I felt an emptiness in my life without the rest of the letters.

The goal of this framework is to provide a **simple** and **concise** way to seperate your presentation, business and data layers with the **smallest learning curve** possible.

Please feel free to view the 'Sales' sample app in the examples directory.

#### Hello World Example
###### homecontroller.js
```javascript
import {Rad} from 'radmvc';
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
- Advanced Example
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

The last step is to make RadMVC aware of the extistence of the controller. This is done outside of the class definition, similar to when defining propTypes.

```javascript
Rad.Controllers.MyController = MyController;
```

In order for RadMVC to know which DOM element to use as the 'View Port', you must assign a DOM element with an attribute **controller=NAME-OF-YOUR-CONTROLLER**.

```html
<div controller="MyController"></div>
```

The purpose of the controller is to contain your 'state' as well as all of your business logic. One way to look at it would be: your controller class is going to be your Root react component. Your React components should technically be stateless (unless unavoidable) and only concern themselves with rendering with props the controller passes to them. For an example of this please view the 'Sales Example'

You will notice in the Sales Example that the controller's methods aren't bounded to the controller instance in the constructor. This is because RadMVC will automagically bind all controller methods to the instance of the controller that it maintains.



Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Version
3.2.7

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [Marked] - a super fast port of Markdown to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [keymaster.js] - awesome keyboard handler lib by [@thomasfuchs]
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone [git-repo-url] dillinger
$ cd dillinger
$ npm i -d
$ gulp build --prod
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins

* Dropbox
* Github
* Google Drive
* OneDrive

Readmes, how to use them in your own application can be found here:

* [plugins/dropbox/README.md] [PlDb]
* [plugins/github/README.md] [PlGh]
* [plugins/googledrive/README.md] [PlGd]
* [plugins/onedrive/README.md] [PlOd]

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma start
```

### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:latest .
```
This will create the dillinger image and pull in the necessary dependencies. Once done, run the Docker and map the port to whatever you wish on your host. In this example, we simply map port 80 of the host to port 80 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 80:80 --restart="always" <youruser>/dillinger:latest
```

Verify the deployment by navigating to your server address in your preferred browser.

### N|Solid and NGINX

More details coming soon.

#### docker-compose.yml

Change the path for the nginx conf mounting path to your full path, not mine!

### Todos

 - Write Tests
 - Rethink Github Save
 - Add Code Comments
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [@thomasfuchs]: <http://twitter.com/thomasfuchs>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [marked]: <https://github.com/chjj/marked>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
