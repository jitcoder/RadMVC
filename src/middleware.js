import { express } from 'exress';
import * as pug from 'pug';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

const router = express.Router();
const radmvc = {};

radmvc.isServer = typeof window !== 'undefined';

const View = function (path, state, component) {
  this.state = state;
  this.component = component;

  if (radmvc.isServer) {
    this.scripts = [];
    this.styles = [];
    this.template = pug.compileFile(path);
    this.render = () => {
      return template({
        scripts: this.scripts,
        styles: this.styles,
        state: this.state,
        rendering: ReactDOMServer.renderToString(React.createElement(this.component, this.state))
      });
    }
  } else {
    this.render = () => React.createElement(this.component, this.state);
  }

  return this;
}


class Store {
  constructor(type) {
    this.type = type;
    this.isServer = typeof window === 'undefined';
    if (radmvc.isServer) {
      this.state = {};
    } else {
      this.state = window.__INITIAL_STATE__[type] || {};
    }
    this.listeners = [];
  }

  addSource(method, path, method) {
    if (method in this) {
      this[method] = this.sources[method] || {};
      this[method][path] = () => {
        return method()
      }
    }


  }

  store(item, data) {

  }
}

class UserStore extends Store {
  constructor() {
    super('users');

    super.action('users_updated', this.getUsers);


  }

  getUsers() {
    return new Promise((resolve, reject) => {
      if (this.isServer) {
        resolve(db.users.all());
      } else {

      }
    });
  }

}

class HomeController {
  constructor() {
    this.users = new UserStore();
    this.users.on('users_updated', this.usersUpdated);
  }

  usersUpdated(users) {
    radmvc.controllers.home.refresh();
  }

  index() {
    this.users.get.list().then((users) => {
      return View('templates/users', { users }, React.createElement('', { users }));
    });

  }
}
