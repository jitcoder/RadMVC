(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\cssify\\browser.js":[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\sassify\\lib\\sassify-browser.js":[function(require,module,exports){
module.exports = require('cssify');
},{"cssify":"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\cssify\\browser.js"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoentry.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _itemmodel = require('models/itemmodel');

var _itemmodel2 = _interopRequireDefault(_itemmodel);

require('sass/todoentry.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoEntry = function (_React$Component) {
    _inherits(TodoEntry, _React$Component);

    function TodoEntry(props) {
        _classCallCheck(this, TodoEntry);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoEntry).call(this, props));

        _this.onAddClick = _this.onAddClick.bind(_this);
        _this.onKeyPress = _this.onKeyPress.bind(_this);
        return _this;
    }

    _createClass(TodoEntry, [{
        key: 'render',
        value: function render() {
            return _radmvc.React.createElement(
                'div',
                { className: 'todoentry' },
                _radmvc.React.createElement(
                    'span',
                    null,
                    _radmvc.React.createElement('input', { type: 'text', ref: 'item', onKeyPress: this.onKeyPress })
                ),
                _radmvc.React.createElement(
                    'button',
                    { onClick: this.onAddClick },
                    'Add'
                )
            );
        }
    }, {
        key: 'onKeyPress',
        value: function onKeyPress(e) {
            if (e.key === 'Enter') {
                this.onAddClick();
            }
        }
    }, {
        key: 'onAddClick',
        value: function onAddClick(e) {
            this.props.onAddItem(new _itemmodel2.default(this.refs.item.value, false));
            this.refs.item.value = '';
        }
    }]);

    return TodoEntry;
}(_radmvc.React.Component);

exports.default = TodoEntry;


TodoEntry.propTypes = {
    onAddItem: _radmvc.React.PropTypes.func.isRequired
};

},{"models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","sass/todoentry.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoentry.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoitem.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

require('sass/todoitem.scss');

var _itemmodel = require('models/itemmodel');

var _itemmodel2 = _interopRequireDefault(_itemmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoItem = function (_React$Component) {
    _inherits(TodoItem, _React$Component);

    function TodoItem(props) {
        _classCallCheck(this, TodoItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).call(this, props));

        _this.onCompletedChanged = _this.onCompletedChanged.bind(_this);
        _this.onRemoveItem = _this.onRemoveItem.bind(_this);
        return _this;
    }

    _createClass(TodoItem, [{
        key: 'render',
        value: function render() {
            return _radmvc.React.createElement(
                'div',
                { className: 'todoitem' },
                _radmvc.React.createElement(
                    'span',
                    null,
                    this.props.model.item
                ),
                _radmvc.React.createElement('input', {
                    ref: 'completed',
                    type: 'checkbox',
                    onChange: this.onCompletedChanged,
                    checked: this.props.model.completed }),
                _radmvc.React.createElement('img', { src: '/imgs/delete.png', onClick: this.onRemoveItem })
            );
        }
    }, {
        key: 'onCompletedChanged',
        value: function onCompletedChanged(e) {
            this.props.model.completed = e.target.checked;
            this.props.onItemChanged(this.props.model);
        }
    }, {
        key: 'onRemoveItem',
        value: function onRemoveItem(e) {
            this.props.onRemoveItem(this.props.model);
        }
    }]);

    return TodoItem;
}(_radmvc.React.Component);

exports.default = TodoItem;


TodoItem.propTypes = {
    model: _radmvc.React.PropTypes.instanceOf(_itemmodel2.default),
    onRemoveItem: _radmvc.React.PropTypes.func.isRequired,
    onItemChanged: _radmvc.React.PropTypes.func.isRequired
};

},{"models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","sass/todoitem.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoitem.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todolist.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _todoitem = require('components/todoitem');

var _todoitem2 = _interopRequireDefault(_todoitem);

var _itemmodel = require('models/itemmodel');

var _itemmodel2 = _interopRequireDefault(_itemmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).call(this, props));

        _this.renderChildren = _this.renderChildren.bind(_this);
        return _this;
    }

    _createClass(TodoList, [{
        key: 'renderChildren',
        value: function renderChildren() {
            var result = [];

            for (var i = 0; i < this.props.items.length; i++) {
                result.push(_radmvc.React.createElement(_todoitem2.default, {
                    key: 'todoitem_' + i,
                    model: this.props.items[i],
                    onItemChanged: this.props.onItemChanged,
                    onRemoveItem: this.props.onRemoveItem }));
            }

            return result;
        }
    }, {
        key: 'render',
        value: function render() {
            return _radmvc.React.createElement(
                'div',
                { className: 'todolist' },
                this.renderChildren()
            );
        }
    }]);

    return TodoList;
}(_radmvc.React.Component);

exports.default = TodoList;


TodoList.propTypes = {
    items: _radmvc.React.PropTypes.arrayOf(_radmvc.React.PropTypes.instanceOf(_itemmodel2.default)).isRequired,
    onRemoveItem: _radmvc.React.PropTypes.func.isRequired,
    onItemChanged: _radmvc.React.PropTypes.func.isRequired
};

},{"components/todoitem":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoitem.jsx","models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\controllers\\todocontroller.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _todoentry = require('components/todoentry');

var _todoentry2 = _interopRequireDefault(_todoentry);

var _todolist = require('components/todolist');

var _todolist2 = _interopRequireDefault(_todolist);

var _itemmodel = require('models/itemmodel');

var _itemmodel2 = _interopRequireDefault(_itemmodel);

require('sass/separator.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoController = function (_Rad$Controller) {
    _inherits(TodoController, _Rad$Controller);

    function TodoController() {
        _classCallCheck(this, TodoController);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoController).call(this));

        _this.items = [];

        _itemmodel2.default.fetchAll(function (data) {
            _this.items = data;
            _radmvc.Rad.TodoController.refresh();
        });
        return _this;
    }

    _createClass(TodoController, [{
        key: 'index',
        value: function index() {
            return _radmvc.React.createElement(
                'div',
                null,
                _radmvc.React.createElement(_todoentry2.default, { onAddItem: _radmvc.Rad.TodoController.addItem }),
                _radmvc.React.createElement('div', { className: 'separator' }),
                _radmvc.React.createElement(_todolist2.default, {
                    items: this.items,
                    onRemoveItem: _radmvc.Rad.TodoController.removeItem,
                    onItemChanged: _radmvc.Rad.TodoController.updateItem
                })
            );
        }
    }, {
        key: 'removeItem',
        value: function removeItem(model) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].item === model.item) {
                    this.items.splice(i, 1);
                    model.remove();
                    break;
                }
            }

            _radmvc.Rad.TodoController.refresh();
        }
    }, {
        key: 'updateItem',
        value: function updateItem(model) {
            model.update();
            _radmvc.Rad.TodoController.refresh();
        }
    }, {
        key: 'addItem',
        value: function addItem(newItem) {
            newItem.create();
            this.items.push(newItem);
            _radmvc.Rad.TodoController.refresh();
        }
    }]);

    return TodoController;
}(_radmvc.Rad.Controller);

exports.default = TodoController;


_radmvc.Rad.Controllers.TodoController = TodoController;

},{"components/todoentry":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoentry.jsx","components/todolist":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todolist.jsx","models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","sass/separator.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\separator.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _radmvc = require("radmvc");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//create ajax backed model

var ItemModel = function (_Rad$AjaxModel) {
    _inherits(ItemModel, _Rad$AjaxModel);

    //during instantiation require item string and completed boolean

    function ItemModel(item, completed) {
        _classCallCheck(this, ItemModel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemModel).call(this));

        _this._item = item;
        _this._completed = completed;
        return _this;
    }

    _createClass(ItemModel, [{
        key: "update",


        //real world scenario we'd probably just use an upsert..
        //update an existing todo item
        value: function update() {
            return _get(Object.getPrototypeOf(ItemModel.prototype), "put", this).call(this, '/todo', this);
        }

        //add a new todo item

    }, {
        key: "create",
        value: function create() {
            return _get(Object.getPrototypeOf(ItemModel.prototype), "post", this).call(this, '/todo', this);
        }
    }, {
        key: "remove",
        value: function remove() {
            return _get(Object.getPrototypeOf(ItemModel.prototype), "delete", this).call(this, '/todo', this);
        }
    }, {
        key: "item",
        get: function get() {
            return this._item;
        },
        set: function set(value) {
            if (!value || typeof value !== "string") throw "value assigned to item must be a string";else this._item = value;
        }
    }, {
        key: "completed",
        get: function get() {
            return this._completed;
        },
        set: function set(value) {
            if (typeof value !== "boolean") throw "value assigned to completed must be a boolean";else this._completed = value;
        }

        //get all todo items from server

    }], [{
        key: "fetchAll",
        value: function fetchAll(callback) {

            if (!callback || typeof callback !== "function") throw "fetch requires a callback function to be provided";

            //this is a static method, so there is no base class method.
            //we will use the static ajax methods RadMVC provides.
            _radmvc.Rad.AjaxModel.get('/todo').then(function (data) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    result.push(new ItemModel(data[i].item, data[i].completed));
                }
                callback(result);
            });
        }
    }]);

    return ItemModel;
}(_radmvc.Rad.AjaxModel);

exports.default = ItemModel;

},{"radmvc":"radmvc"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\separator.scss":[function(require,module,exports){
module.exports = require('sassify')('.separator {   height: 1px;   width: 80%;   border-bottom: 1px solid #ebf0f2;   display: block;   margin: 10px auto 10px auto; }  /*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAic2VwYXJhdG9yLnNjc3MiLAoJInNvdXJjZXMiOiBbCgkJInNlcGFyYXRvci5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiLnNlcGFyYXRvcntcclxuICAgIGhlaWdodDoxcHg7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJmMGYyO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1hcmdpbjoxMHB4IGF1dG8gMTBweCBhdXRvO1xyXG59IgoJXSwKCSJtYXBwaW5ncyI6ICJBQUFBLEFBQUEsVUFBVSxDQUFBO0VBQ04sTUFBTSxFQUFDLEdBQUk7RUFDWCxLQUFLLEVBQUMsR0FBSTtFQUNWLGFBQWEsRUFBQyxpQkFBa0I7RUFDaEMsT0FBTyxFQUFDLEtBQU07RUFDZCxNQUFNLEVBQUMsbUJBQW9CLEdBQzlCIiwKCSJuYW1lcyI6IFtdCn0= */');;
},{"sassify":"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\sassify\\lib\\sassify-browser.js"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoentry.scss":[function(require,module,exports){
module.exports = require('sassify')('.todoentry {   height: 1.5em;   display: table;   width: 100%; }   .todoentry span {     margin-right: 1em;     display: table-cell;     padding-right: 10px;     width: 100%; }     .todoentry span input {       font-size: 1em;       font-family: Verdana, Geneva, Tahoma, sans-serif;       color: black;       border: 1px solid #e8e8e8;       border-radius: 3px;       transition: box-shadow 0.3s, border 0.3s;       height: 1.5em;       outline: none;       width: 100%; }       .todoentry span input:focus {         box-shadow: 0 0 5px 1px #b5b5b5;         border-color: #0088FF;         outline: none; }       .todoentry span input:hover {         border-color: #4FADFF;         outline: none; }   .todoentry button {     border: 1px solid #1f345c;     border-radius: 3px;     background-color: #385FA8;     font-size: 1em;     font-family: Verdana, Geneva, Tahoma, sans-serif;     color: #fff;     outline: none;     width: 10em;     height: 1.5em;     display: table-cell; }     .todoentry button:hover {       border: 1px solid #2b4982;       background-color: #1f345c;       outline: none; }  /*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAidG9kb2VudHJ5LnNjc3MiLAoJInNvdXJjZXMiOiBbCgkJInRvZG9lbnRyeS5zY3NzIiwKCQkibWl4aW5zL190ZXh0Ym94LnNjc3MiLAoJCSJtaXhpbnMvX2J1dHRvbi5zY3NzIgoJXSwKCSJzb3VyY2VzQ29udGVudCI6IFsKCQkiQGltcG9ydCAnbWl4aW5zL3RleHRib3gnO1xyXG5AaW1wb3J0ICdtaXhpbnMvYnV0dG9uJztcclxuXHJcbi50b2RvZW50cnl7XHJcbiAgICBcclxuICAgIGhlaWdodDoxLjVlbTtcclxuICAgIGRpc3BsYXk6dGFibGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDoxZW07XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0ZXh0Ym94KDFlbSwjZThlOGU4KTtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbigxZW0sIzM4NUZBOCwjZmZmKTtcclxuICAgICAgICB3aWR0aDoxMGVtO1xyXG4gICAgICAgIGhlaWdodDoxLjVlbTtcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICB9XHJcblxyXG59IiwKCQkiQG1peGluIHRleHRib3goJHNpemUsJGJvcmRlci1jb2xvcil7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTokc2l6ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIFxyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJvcmRlciAwLjNzO1xyXG4gICAgaGVpZ2h0OjEuNWVtO1xyXG4gICAgXHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggZGFya2VuKCRib3JkZXItY29sb3IsMjAlKTtcclxuICAgICAgICBib3JkZXItY29sb3I6IzAwODhGRjtcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiM0RkFERkY7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG59IiwKCQkiQG1peGluIGJ1dHRvbigkc2l6ZSwgJGJ1dHRvbi1jb2xvciwgJHRleHQtY29sb3Ipe1xyXG4gICAgXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGRhcmtlbigkYnV0dG9uLWNvbG9yLDIwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOjNweDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYnV0dG9uLWNvbG9yO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6JHNpemU7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgY29sb3I6JHRleHQtY29sb3I7XHJcblxyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgZGFya2VuKCRidXR0b24tY29sb3IsMTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtlbigkYnV0dG9uLWNvbG9yLDIwJSk7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG59IgoJXSwKCSJtYXBwaW5ncyI6ICJBQUdBLEFBQUEsVUFBVSxDQUFBO0VBRU4sTUFBTSxFQUFDLEtBQU07RUFDYixPQUFPLEVBQUMsS0FBTTtFQUNkLEtBQUssRUFBQyxJQUFLLEdBcUJkO0VBekJELEFBTUksVUFOTSxDQU1OLElBQUksQ0FBQTtJQUNBLFlBQVksRUFBQyxHQUFJO0lBQ2pCLE9BQU8sRUFBQyxVQUFXO0lBQ25CLGFBQWEsRUFBQyxJQUFLO0lBQ25CLEtBQUssRUFBQyxJQUFLLEdBTWQ7SUFoQkwsQUFZUSxVQVpFLENBTU4sSUFBSSxDQU1BLEtBQUssQ0FBQTtNQ2JULFNBQVMsRURjZ0IsR0FBRztNQ2I1QixXQUFXLEVBQUUsbUNBQW9DO01BRWpELEtBQUssRUFBQyxLQUFNO01BQ1osTUFBTSxFQUFDLEdBQUcsQ0FBQyxLQUFLLENEVWEsT0FBTztNQ1RwQyxhQUFhLEVBQUUsR0FBSTtNQUNuQixVQUFVLEVBQUUsNEJBQTZCO01BQ3pDLE1BQU0sRUFBQyxLQUFNO01BRWIsT0FBTyxFQUFDLElBQUs7TURNTCxLQUFLLEVBQUMsSUFBSyxHQUNkO01BZlQsQUFZUSxVQVpFLENBTU4sSUFBSSxDQU1BLEtBQUssQUNGUixNQUFNLENBQUE7UUFDSCxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU07UUFDOUIsWUFBWSxFQUFDLE9BQVE7UUFDckIsT0FBTyxFQUFDLElBQUssR0FFaEI7TURmTCxBQVlRLFVBWkUsQ0FNTixJQUFJLENBTUEsS0FBSyxBQ0tSLE1BQU0sQ0FBQTtRQUNILFlBQVksRUFBQyxPQUFRO1FBQ3JCLE9BQU8sRUFBQyxJQUFLLEdBQ2hCO0VEcEJMLEFBa0JJLFVBbEJNLENBa0JOLE1BQU0sQ0FBQTtJRW5CTixNQUFNLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFNO0lBQ3ZCLGFBQWEsRUFBQyxHQUFJO0lBRWxCLGdCQUFnQixFRmlCUSxPQUFPO0lFZi9CLFNBQVMsRUZlVyxHQUFHO0lFZHZCLFdBQVcsRUFBRSxtQ0FBb0M7SUFFakQsS0FBSyxFRlkyQixJQUFJO0lFVnBDLE9BQU8sRUFBQyxJQUFLO0lGV1QsS0FBSyxFQUFDLElBQUs7SUFDWCxNQUFNLEVBQUMsS0FBTTtJQUNiLE9BQU8sRUFBQyxVQUFXLEdBQ3RCO0lBdkJMLEFBa0JJLFVBbEJNLENBa0JOLE1BQU0sQUVQTCxNQUFNLENBQUE7TUFDSCxNQUFNLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFNO01BQ3ZCLGdCQUFnQixFQUFDLE9BQU07TUFDdkIsT0FBTyxFQUFDLElBQUssR0FDaEIiLAoJIm5hbWVzIjogW10KfQ== */');;
},{"sassify":"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\sassify\\lib\\sassify-browser.js"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoitem.scss":[function(require,module,exports){
module.exports = require('sassify')('.todoitem {   height: 1.2em;   margin: 0.1em;   background-color: #f5f5f5;   border: 1px solid #c2c2c2;   text-align: left;   display: block; }   .todoitem span {     vertical-align: middle;     font-family: Verdana, Geneva, Tahoma, sans-serif;     margin-right: 1em;     margin-left: 1em;     display: inline-block; }   .todoitem input {     vertical-align: middle;     font-family: Verdana, Geneva, Tahoma, sans-serif;     margin-right: 1em; }   .todoitem img {     vertical-align: middle;     height: 1em;     width: 1em;     margin-top: 2px;     margin-right: 2px;     float: right;     cursor: pointer; }  /*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAidG9kb2l0ZW0uc2NzcyIsCgkic291cmNlcyI6IFsKCQkidG9kb2l0ZW0uc2NzcyIKCV0sCgkic291cmNlc0NvbnRlbnQiOiBbCgkJIi50b2RvaXRlbXtcclxuICAgIFxyXG4gICAgaGVpZ2h0OjEuMmVtO1xyXG4gICAgbWFyZ2luOjAuMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBkYXJrZW4oI2Y1ZjVmNSwyMCUpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjFlbTtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjFlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgaGVpZ2h0OjFlbTtcclxuICAgICAgICB3aWR0aDoxZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDoycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjJweDtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG59IgoJXSwKCSJtYXBwaW5ncyI6ICJBQUFBLEFBQUEsU0FBUyxDQUFBO0VBRUwsTUFBTSxFQUFDLEtBQU07RUFDYixNQUFNLEVBQUMsS0FBTTtFQUNiLGdCQUFnQixFQUFDLE9BQVE7RUFDekIsTUFBTSxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTTtFQUN2QixVQUFVLEVBQUUsSUFBSztFQUNqQixPQUFPLEVBQUMsS0FBTSxHQTBCakI7RUFqQ0QsQUFTSSxTQVRLLENBU0wsSUFBSSxDQUFBO0lBQ0EsY0FBYyxFQUFFLE1BQU87SUFDdkIsV0FBVyxFQUFFLG1DQUFvQztJQUNqRCxZQUFZLEVBQUMsR0FBSTtJQUNqQixXQUFXLEVBQUMsR0FBSTtJQUNoQixPQUFPLEVBQUMsWUFBYSxHQUN4QjtFQWZMLEFBaUJJLFNBakJLLENBaUJMLEtBQUssQ0FBQTtJQUNELGNBQWMsRUFBRSxNQUFPO0lBQ3ZCLFdBQVcsRUFBRSxtQ0FBb0M7SUFDakQsWUFBWSxFQUFDLEdBQUksR0FDcEI7RUFyQkwsQUF1QkksU0F2QkssQ0F1QkwsR0FBRyxDQUFBO0lBQ0MsY0FBYyxFQUFFLE1BQU87SUFDdkIsTUFBTSxFQUFDLEdBQUk7SUFDWCxLQUFLLEVBQUMsR0FBSTtJQUNWLFVBQVUsRUFBQyxHQUFJO0lBQ2YsWUFBWSxFQUFDLEdBQUk7SUFDakIsS0FBSyxFQUFDLEtBQU07SUFDWixNQUFNLEVBQUMsT0FBUSxHQUNsQiIsCgkibmFtZXMiOiBbXQp9 */');;
},{"sassify":"D:\\Projects\\radmvc\\examples\\todolist\\node_modules\\sassify\\lib\\sassify-browser.js"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\todo.js":[function(require,module,exports){
'use strict';

var _todocontroller = require('controllers/todocontroller');

var _todocontroller2 = _interopRequireDefault(_todocontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"controllers/todocontroller":"D:\\Projects\\radmvc\\examples\\todolist\\src\\controllers\\todocontroller.js"}]},{},["D:\\Projects\\radmvc\\examples\\todolist\\src\\todo.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY3NzaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvc2Fzc2lmeS9saWIvc2Fzc2lmeS1icm93c2VyLmpzIiwic3JjXFxjb21wb25lbnRzXFx0b2RvZW50cnkuanN4Iiwic3JjXFxjb21wb25lbnRzXFx0b2RvaXRlbS5qc3giLCJzcmNcXGNvbXBvbmVudHNcXHRvZG9saXN0LmpzeCIsInNyY1xcY29udHJvbGxlcnNcXHRvZG9jb250cm9sbGVyLmpzIiwic3JjXFxtb2RlbHNcXGl0ZW1tb2RlbC5qcyIsInNyYy9zYXNzL3NlcGFyYXRvci5zY3NzIiwic3JjL3Nhc3MvdG9kb2VudHJ5LnNjc3MiLCJzcmMvc2Fzcy90b2RvaXRlbS5zY3NzIiwic3JjXFx0b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLFM7OztBQUVqQix1QkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsaUdBQ1IsS0FEUTs7QUFHZCxjQUFLLFVBQUwsR0FBa0IsTUFBSyxVQUFMLENBQWdCLElBQWhCLE9BQWxCO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQjtBQUpjO0FBS2pCOzs7O2lDQUVPO0FBQ0osbUJBQU87QUFBQTtnQkFBQSxFQUFLLFdBQVUsV0FBZjtnQkFDSDtBQUFBO29CQUFBO29CQUNJLHVDQUFP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R0ksS0FBSyxVQUFMLEdBQWtCLEtBQWxCO0FBQ1A7Ozs7OztpQ0FHZSxRLEVBQVM7O0FBRXJCLGdCQUFHLENBQUMsUUFBRCxJQUFhLE9BQU8sUUFBUCxLQUFvQixVQUFwQyxFQUNJLE1BQU0sbURBQU47Ozs7QUFJSix3QkFBSSxTQUFKLENBQWMsR0FBZCxDQUFrQixPQUFsQixFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBUTtBQUNWLG9CQUFJLFNBQVMsRUFBYjtBQUNBLHFCQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLE1BQXhCLEVBQWdDLEdBQWhDLEVBQW9DO0FBQ2hDLDJCQUFPLElBQVAsQ0FBWSxJQUFJLFNBQUosQ0FBYyxLQUFLLENBQUwsRUFBUSxJQUF0QixFQUEyQixLQUFLLENBQUwsRUFBUSxTQUFuQyxDQUFaO0FBQ0g7QUFDRCx5QkFBUyxNQUFUO0FBQ0gsYUFQRDtBQVFIOzs7O0VBL0NrQyxZQUFJLFM7O2tCQUF0QixTOzs7QUNIckI7O0FDQUE7O0FDQUE7Ozs7QUNBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MsIGN1c3RvbURvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBjdXN0b21Eb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgaWYgKGRvYy5jcmVhdGVTdHlsZVNoZWV0KSB7XG4gICAgdmFyIHNoZWV0ID0gZG9jLmNyZWF0ZVN0eWxlU2hlZXQoKVxuICAgIHNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgcmV0dXJuIHNoZWV0Lm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5ieVVybCA9IGZ1bmN0aW9uKHVybCkge1xuICBpZiAoZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KHVybCkub3duZXJOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2Nzc2lmeScpOyIsImltcG9ydCB7UmFkLFJlYWN0fSBmcm9tICdyYWRtdmMnO1xyXG5pbXBvcnQgSXRlbU1vZGVsIGZyb20gJ21vZGVscy9pdGVtbW9kZWwnO1xyXG5pbXBvcnQgJ3Nhc3MvdG9kb2VudHJ5LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IHRoaXMub25BZGRDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25LZXlQcmVzcyA9IHRoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0b2RvZW50cnlcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJpdGVtXCIgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkFkZENsaWNrfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uS2V5UHJlc3MoZSl7XHJcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xyXG4gICAgICAgICAgICB0aGlzLm9uQWRkQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQWRkQ2xpY2soZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkFkZEl0ZW0obmV3IEl0ZW1Nb2RlbCh0aGlzLnJlZnMuaXRlbS52YWx1ZSxmYWxzZSkpO1xyXG4gICAgICAgIHRoaXMucmVmcy5pdGVtLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcblRvZG9FbnRyeS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbkFkZEl0ZW06UmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59IiwiaW1wb3J0IHtSYWQsIFJlYWN0fSBmcm9tICdyYWRtdmMnO1xyXG5pbXBvcnQgJ3Nhc3MvdG9kb2l0ZW0uc2Nzcyc7XHJcbmltcG9ydCBJdGVtTW9kZWwgZnJvbSAnbW9kZWxzL2l0ZW1tb2RlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZWRDaGFuZ2VkID0gdGhpcy5vbkNvbXBsZXRlZENoYW5nZWQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUmVtb3ZlSXRlbSA9IHRoaXMub25SZW1vdmVJdGVtLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRvZG9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLm1vZGVsLml0ZW19PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICByZWY9XCJjb21wbGV0ZWRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNvbXBsZXRlZENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLm1vZGVsLmNvbXBsZXRlZH0gLz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1ncy9kZWxldGUucG5nXCIgb25DbGljaz17dGhpcy5vblJlbW92ZUl0ZW19Lz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uQ29tcGxldGVkQ2hhbmdlZChlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm1vZGVsLmNvbXBsZXRlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkl0ZW1DaGFuZ2VkKHRoaXMucHJvcHMubW9kZWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblJlbW92ZUl0ZW0oZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZUl0ZW0odGhpcy5wcm9wcy5tb2RlbCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuVG9kb0l0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgbW9kZWw6UmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoSXRlbU1vZGVsKSxcclxuICAgIG9uUmVtb3ZlSXRlbTpSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgb25JdGVtQ2hhbmdlZDpSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQge1JhZCxSZWFjdH0gZnJvbSAncmFkbXZjJztcclxuaW1wb3J0IFRvZG9JdGVtIGZyb20gJ2NvbXBvbmVudHMvdG9kb2l0ZW0nO1xyXG5pbXBvcnQgSXRlbU1vZGVsIGZyb20gJ21vZGVscy9pdGVtbW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlckNoaWxkcmVuKCl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goPFRvZG9JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXsndG9kb2l0ZW1fJytpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLml0ZW1zW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSXRlbUNoYW5nZWQ9e3RoaXMucHJvcHMub25JdGVtQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMucHJvcHMub25SZW1vdmVJdGVtfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRvZG9saXN0XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczpSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihJdGVtTW9kZWwpKS5pc1JlcXVpcmVkLFxyXG4gICAgb25SZW1vdmVJdGVtOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkl0ZW1DaGFuZ2VkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCB7UmFkLFJlYWN0fSBmcm9tICdyYWRtdmMnO1xyXG5pbXBvcnQgVG9kb0VudHJ5IGZyb20gJ2NvbXBvbmVudHMvdG9kb2VudHJ5JztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJ2NvbXBvbmVudHMvdG9kb2xpc3QnO1xyXG5pbXBvcnQgSXRlbU1vZGVsIGZyb20gJ21vZGVscy9pdGVtbW9kZWwnO1xyXG5pbXBvcnQgJ3Nhc3Mvc2VwYXJhdG9yLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0NvbnRyb2xsZXIgZXh0ZW5kcyBSYWQuQ29udHJvbGxlcntcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBJdGVtTW9kZWwuZmV0Y2hBbGwoKGRhdGEpPT57XHJcbiAgICAgICAgICAgdGhpcy5pdGVtcyA9ICBkYXRhO1xyXG4gICAgICAgICAgIFJhZC5Ub2RvQ29udHJvbGxlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGluZGV4KCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxUb2RvRW50cnkgb25BZGRJdGVtPXtSYWQuVG9kb0NvbnRyb2xsZXIuYWRkSXRlbX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8VG9kb0xpc3QgXHJcbiAgICAgICAgICAgIGl0ZW1zPXt0aGlzLml0ZW1zfVxyXG4gICAgICAgICAgICBvblJlbW92ZUl0ZW09e1JhZC5Ub2RvQ29udHJvbGxlci5yZW1vdmVJdGVtfVxyXG4gICAgICAgICAgICBvbkl0ZW1DaGFuZ2VkPXtSYWQuVG9kb0NvbnRyb2xsZXIudXBkYXRlSXRlbX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZUl0ZW0obW9kZWwpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpXS5pdGVtID09PSBtb2RlbC5pdGVtKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFJhZC5Ub2RvQ29udHJvbGxlci5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUl0ZW0obW9kZWwpe1xyXG4gICAgICAgIG1vZGVsLnVwZGF0ZSgpO1xyXG4gICAgICAgIFJhZC5Ub2RvQ29udHJvbGxlci5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZEl0ZW0obmV3SXRlbSl7XHJcbiAgICAgICAgbmV3SXRlbS5jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgICAgUmFkLlRvZG9Db250cm9sbGVyLnJlZnJlc2goKTtcclxuICAgIH1cclxufVxyXG5cclxuUmFkLkNvbnRyb2xsZXJzLlRvZG9Db250cm9sbGVyID0gVG9kb0NvbnRyb2xsZXI7IiwiaW1wb3J0IHtSYWR9IGZyb20gJ3JhZG12Yyc7XHJcblxyXG4vL2NyZWF0ZSBhamF4IGJhY2tlZCBtb2RlbFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtTW9kZWwgZXh0ZW5kcyBSYWQuQWpheE1vZGVse1xyXG4gICAgLy9kdXJpbmcgaW5zdGFudGlhdGlvbiByZXF1aXJlIGl0ZW0gc3RyaW5nIGFuZCBjb21wbGV0ZWQgYm9vbGVhblxyXG4gICAgY29uc3RydWN0b3IoaXRlbSxjb21wbGV0ZWQpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgaXRlbSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgaXRlbSh2YWx1ZSl7XHJcbiAgICAgICAgaWYoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgdGhyb3cgXCJ2YWx1ZSBhc3NpZ25lZCB0byBpdGVtIG11c3QgYmUgYSBzdHJpbmdcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGNvbXBsZXRlZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBjb21wbGV0ZWQodmFsdWUpe1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSAhPT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgIHRocm93IFwidmFsdWUgYXNzaWduZWQgdG8gY29tcGxldGVkIG11c3QgYmUgYSBib29sZWFuXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9nZXQgYWxsIHRvZG8gaXRlbXMgZnJvbSBzZXJ2ZXJcclxuICAgIHN0YXRpYyBmZXRjaEFsbChjYWxsYmFjayl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICB0aHJvdyBcImZldGNoIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgcHJvdmlkZWRcIjtcclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMgaXMgYSBzdGF0aWMgbWV0aG9kLCBzbyB0aGVyZSBpcyBubyBiYXNlIGNsYXNzIG1ldGhvZC5cclxuICAgICAgICAvL3dlIHdpbGwgdXNlIHRoZSBzdGF0aWMgYWpheCBtZXRob2RzIFJhZE1WQyBwcm92aWRlcy5cclxuICAgICAgICBSYWQuQWpheE1vZGVsLmdldCgnL3RvZG8nKVxyXG4gICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBJdGVtTW9kZWwoZGF0YVtpXS5pdGVtLGRhdGFbaV0uY29tcGxldGVkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvL3JlYWwgd29ybGQgc2NlbmFyaW8gd2UnZCBwcm9iYWJseSBqdXN0IHVzZSBhbiB1cHNlcnQuLlxyXG4gICAgLy91cGRhdGUgYW4gZXhpc3RpbmcgdG9kbyBpdGVtXHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIucHV0KCcvdG9kbycsdGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vYWRkIGEgbmV3IHRvZG8gaXRlbVxyXG4gICAgY3JlYXRlKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBvc3QoJy90b2RvJyx0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZGVsZXRlKCcvdG9kbycsdGhpcyk7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3Nhc3NpZnknKSgnLnNlcGFyYXRvciB7ICAgaGVpZ2h0OiAxcHg7ICAgd2lkdGg6IDgwJTsgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZjBmMjsgICBkaXNwbGF5OiBibG9jazsgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87IH0gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXdvSkluWmxjbk5wYjI0aU9pQXpMQW9KSW1acGJHVWlPaUFpYzJWd1lYSmhkRzl5TG5OamMzTWlMQW9KSW5OdmRYSmpaWE1pT2lCYkNna0pJbk5sY0dGeVlYUnZjaTV6WTNOeklnb0pYU3dLQ1NKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2SUZzS0NRa2lMbk5sY0dGeVlYUnZjbnRjY2x4dUlDQWdJR2hsYVdkb2REb3hjSGc3WEhKY2JpQWdJQ0IzYVdSMGFEbzRNQ1U3WEhKY2JpQWdJQ0JpYjNKa1pYSXRZbTkwZEc5dE9qRndlQ0J6YjJ4cFpDQWpaV0ptTUdZeU8xeHlYRzRnSUNBZ1pHbHpjR3hoZVRwaWJHOWphenRjY2x4dUlDQWdJRzFoY21kcGJqb3hNSEI0SUdGMWRHOGdNVEJ3ZUNCaGRYUnZPMXh5WEc1OUlnb0pYU3dLQ1NKdFlYQndhVzVuY3lJNklDSkJRVUZCTEVGQlFVRXNWVUZCVlN4RFFVRkJPMFZCUTA0c1RVRkJUU3hGUVVGRExFZEJRVWs3UlVGRFdDeExRVUZMTEVWQlFVTXNSMEZCU1R0RlFVTldMR0ZCUVdFc1JVRkJReXhwUWtGQmEwSTdSVUZEYUVNc1QwRkJUeXhGUVVGRExFdEJRVTA3UlVGRFpDeE5RVUZOTEVWQlFVTXNiVUpCUVc5Q0xFZEJRemxDSWl3S0NTSnVZVzFsY3lJNklGdGRDbjA9ICovJyk7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnc2Fzc2lmeScpKCcudG9kb2VudHJ5IHsgICBoZWlnaHQ6IDEuNWVtOyAgIGRpc3BsYXk6IHRhYmxlOyAgIHdpZHRoOiAxMDAlOyB9ICAgLnRvZG9lbnRyeSBzcGFuIHsgICAgIG1hcmdpbi1yaWdodDogMWVtOyAgICAgZGlzcGxheTogdGFibGUtY2VsbDsgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICAgICB3aWR0aDogMTAwJTsgfSAgICAgLnRvZG9lbnRyeSBzcGFuIGlucHV0IHsgICAgICAgZm9udC1zaXplOiAxZW07ICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgICAgICAgY29sb3I6IGJsYWNrOyAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4OyAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7ICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcywgYm9yZGVyIDAuM3M7ICAgICAgIGhlaWdodDogMS41ZW07ICAgICAgIG91dGxpbmU6IG5vbmU7ICAgICAgIHdpZHRoOiAxMDAlOyB9ICAgICAgIC50b2RvZW50cnkgc3BhbiBpbnB1dDpmb2N1cyB7ICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggI2I1YjViNTsgICAgICAgICBib3JkZXItY29sb3I6ICMwMDg4RkY7ICAgICAgICAgb3V0bGluZTogbm9uZTsgfSAgICAgICAudG9kb2VudHJ5IHNwYW4gaW5wdXQ6aG92ZXIgeyAgICAgICAgIGJvcmRlci1jb2xvcjogIzRGQURGRjsgICAgICAgICBvdXRsaW5lOiBub25lOyB9ICAgLnRvZG9lbnRyeSBidXR0b24geyAgICAgYm9yZGVyOiAxcHggc29saWQgIzFmMzQ1YzsgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODVGQTg7ICAgICBmb250LXNpemU6IDFlbTsgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgICAgIGNvbG9yOiAjZmZmOyAgICAgb3V0bGluZTogbm9uZTsgICAgIHdpZHRoOiAxMGVtOyAgICAgaGVpZ2h0OiAxLjVlbTsgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH0gICAgIC50b2RvZW50cnkgYnV0dG9uOmhvdmVyIHsgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJiNDk4MjsgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzQ1YzsgICAgICAgb3V0bGluZTogbm9uZTsgfSAgLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxld29KSW5abGNuTnBiMjRpT2lBekxBb0pJbVpwYkdVaU9pQWlkRzlrYjJWdWRISjVMbk5qYzNNaUxBb0pJbk52ZFhKalpYTWlPaUJiQ2drSkluUnZaRzlsYm5SeWVTNXpZM056SWl3S0NRa2liV2w0YVc1ekwxOTBaWGgwWW05NExuTmpjM01pTEFvSkNTSnRhWGhwYm5NdlgySjFkSFJ2Ymk1elkzTnpJZ29KWFN3S0NTSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNklGc0tDUWtpUUdsdGNHOXlkQ0FuYldsNGFXNXpMM1JsZUhSaWIzZ25PMXh5WEc1QWFXMXdiM0owSUNkdGFYaHBibk12WW5WMGRHOXVKenRjY2x4dVhISmNiaTUwYjJSdlpXNTBjbmw3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR2hsYVdkb2REb3hMalZsYlR0Y2NseHVJQ0FnSUdScGMzQnNZWGs2ZEdGaWJHVTdYSEpjYmlBZ0lDQjNhV1IwYURveE1EQWxPMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQnpjR0Z1ZTF4eVhHNGdJQ0FnSUNBZ0lHMWhjbWRwYmkxeWFXZG9kRG94WlcwN1hISmNiaUFnSUNBZ0lDQWdaR2x6Y0d4aGVUcDBZV0pzWlMxalpXeHNPMXh5WEc0Z0lDQWdJQ0FnSUhCaFpHUnBibWN0Y21sbmFIUTZNVEJ3ZUR0Y2NseHVJQ0FnSUNBZ0lDQjNhV1IwYURveE1EQWxPMXh5WEc0Z0lDQWdJQ0FnSUZ4eVhHNGdJQ0FnSUNBZ0lHbHVjSFYwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JBYVc1amJIVmtaU0IwWlhoMFltOTRLREZsYlN3alpUaGxPR1U0S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZNVEF3SlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnWW5WMGRHOXVlMXh5WEc0Z0lDQWdJQ0FnSUVCcGJtTnNkV1JsSUdKMWRIUnZiaWd4Wlcwc0l6TTROVVpCT0N3alptWm1LVHRjY2x4dUlDQWdJQ0FnSUNCM2FXUjBhRG94TUdWdE8xeHlYRzRnSUNBZ0lDQWdJR2hsYVdkb2REb3hMalZsYlR0Y2NseHVJQ0FnSUNBZ0lDQmthWE53YkdGNU9uUmhZbXhsTFdObGJHdzdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNTlJaXdLQ1FraVFHMXBlR2x1SUhSbGVIUmliM2dvSkhOcGVtVXNKR0p2Y21SbGNpMWpiMnh2Y2lsN1hISmNiaUFnSUNCY2NseHVJQ0FnSUdadmJuUXRjMmw2WlRva2MybDZaVHRjY2x4dUlDQWdJR1p2Ym5RdFptRnRhV3g1T2lCV1pYSmtZVzVoTENCSFpXNWxkbUVzSUZSaGFHOXRZU3dnYzJGdWN5MXpaWEpwWmp0Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnWTI5c2IzSTZZbXhoWTJzN1hISmNiaUFnSUNCaWIzSmtaWEk2TVhCNElITnZiR2xrSUNSaWIzSmtaWEl0WTI5c2IzSTdYSEpjYmlBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBemNIZzdYSEpjYmlBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJpYjNndGMyaGhaRzkzSURBdU0zTXNJR0p2Y21SbGNpQXdMak56TzF4eVhHNGdJQ0FnYUdWcFoyaDBPakV1TldWdE8xeHlYRzRnSUNBZ1hISmNiaUFnSUNCdmRYUnNhVzVsT201dmJtVTdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDWTZabTlqZFhON1hISmNiaUFnSUNBZ0lDQWdZbTk0TFhOb1lXUnZkem9nTUNBd0lEVndlQ0F4Y0hnZ1pHRnlhMlZ1S0NSaWIzSmtaWEl0WTI5c2IzSXNNakFsS1R0Y2NseHVJQ0FnSUNBZ0lDQmliM0prWlhJdFkyOXNiM0k2SXpBd09EaEdSanRjY2x4dUlDQWdJQ0FnSUNCdmRYUnNhVzVsT201dmJtVTdYSEpjYmlBZ0lDQWdJQ0FnWEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JjY2x4dUlDQWdJQ1k2YUc5MlpYSjdYSEpjYmlBZ0lDQWdJQ0FnWW05eVpHVnlMV052Ykc5eU9pTTBSa0ZFUmtZN1hISmNiaUFnSUNBZ0lDQWdiM1YwYkdsdVpUcHViMjVsTzF4eVhHNGdJQ0FnZlZ4eVhHNTlJaXdLQ1FraVFHMXBlR2x1SUdKMWRIUnZiaWdrYzJsNlpTd2dKR0oxZEhSdmJpMWpiMnh2Y2l3Z0pIUmxlSFF0WTI5c2IzSXBlMXh5WEc0Z0lDQWdYSEpjYmlBZ0lDQmliM0prWlhJNk1YQjRJSE52Ykdsa0lHUmhjbXRsYmlna1luVjBkRzl1TFdOdmJHOXlMREl3SlNrN1hISmNiaUFnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPak53ZUR0Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9rWW5WMGRHOXVMV052Ykc5eU8xeHlYRzRnSUNBZ1hISmNiaUFnSUNCbWIyNTBMWE5wZW1VNkpITnBlbVU3WEhKY2JpQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1ZtVnlaR0Z1WVN3Z1IyVnVaWFpoTENCVVlXaHZiV0VzSUhOaGJuTXRjMlZ5YVdZN1hISmNibHh5WEc0Z0lDQWdZMjlzYjNJNkpIUmxlSFF0WTI5c2IzSTdYSEpjYmx4eVhHNGdJQ0FnYjNWMGJHbHVaVHB1YjI1bE8xeHlYRzRnSUNBZ1hISmNiaUFnSUNBbU9taHZkbVZ5ZTF4eVhHNGdJQ0FnSUNBZ0lHSnZjbVJsY2pveGNIZ2djMjlzYVdRZ1pHRnlhMlZ1S0NSaWRYUjBiMjR0WTI5c2IzSXNNVEFsS1R0Y2NseHVJQ0FnSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9tUmhjbXRsYmlna1luVjBkRzl1TFdOdmJHOXlMREl3SlNrN1hISmNiaUFnSUNBZ0lDQWdiM1YwYkdsdVpUcHViMjVsTzF4eVhHNGdJQ0FnZlZ4eVhHNTlJZ29KWFN3S0NTSnRZWEJ3YVc1bmN5STZJQ0pCUVVkQkxFRkJRVUVzVlVGQlZTeERRVUZCTzBWQlJVNHNUVUZCVFN4RlFVRkRMRXRCUVUwN1JVRkRZaXhQUVVGUExFVkJRVU1zUzBGQlRUdEZRVU5rTEV0QlFVc3NSVUZCUXl4SlFVRkxMRWRCY1VKa08wVkJla0pFTEVGQlRVa3NWVUZPVFN4RFFVMU9MRWxCUVVrc1EwRkJRVHRKUVVOQkxGbEJRVmtzUlVGQlF5eEhRVUZKTzBsQlEycENMRTlCUVU4c1JVRkJReXhWUVVGWE8wbEJRMjVDTEdGQlFXRXNSVUZCUXl4SlFVRkxPMGxCUTI1Q0xFdEJRVXNzUlVGQlF5eEpRVUZMTEVkQlRXUTdTVUZvUWt3c1FVRlpVU3hWUVZwRkxFTkJUVTRzU1VGQlNTeERRVTFCTEV0QlFVc3NRMEZCUVR0TlEySlVMRk5CUVZNc1JVUmpaMElzUjBGQlJ6dE5RMkkxUWl4WFFVRlhMRVZCUVVVc2JVTkJRVzlETzAxQlJXcEVMRXRCUVVzc1JVRkJReXhMUVVGTk8wMUJRMW9zVFVGQlRTeEZRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5FVldFc1QwRkJUenROUTFSd1F5eGhRVUZoTEVWQlFVVXNSMEZCU1R0TlFVTnVRaXhWUVVGVkxFVkJRVVVzTkVKQlFUWkNPMDFCUTNwRExFMUJRVTBzUlVGQlF5eExRVUZOTzAxQlJXSXNUMEZCVHl4RlFVRkRMRWxCUVVzN1RVUk5UQ3hMUVVGTExFVkJRVU1zU1VGQlN5eEhRVU5rTzAxQlpsUXNRVUZaVVN4VlFWcEZMRU5CVFU0c1NVRkJTU3hEUVUxQkxFdEJRVXNzUVVOR1VpeE5RVUZOTEVOQlFVRTdVVUZEU0N4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVUwN1VVRkRPVUlzV1VGQldTeEZRVUZETEU5QlFWRTdVVUZEY2tJc1QwRkJUeXhGUVVGRExFbEJRVXNzUjBGRmFFSTdUVVJtVEN4QlFWbFJMRlZCV2tVc1EwRk5UaXhKUVVGSkxFTkJUVUVzUzBGQlN5eEJRMHRTTEUxQlFVMHNRMEZCUVR0UlFVTklMRmxCUVZrc1JVRkJReXhQUVVGUk8xRkJRM0pDTEU5QlFVOHNSVUZCUXl4SlFVRkxMRWRCUTJoQ08wVkVjRUpNTEVGQmEwSkpMRlZCYkVKTkxFTkJhMEpPTEUxQlFVMHNRMEZCUVR0SlJXNUNUaXhOUVVGTkxFVkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRk5PMGxCUTNaQ0xHRkJRV0VzUlVGQlF5eEhRVUZKTzBsQlJXeENMR2RDUVVGblFpeEZSbWxDVVN4UFFVRlBPMGxGWmk5Q0xGTkJRVk1zUlVabFZ5eEhRVUZITzBsRlpIWkNMRmRCUVZjc1JVRkJSU3h0UTBGQmIwTTdTVUZGYWtRc1MwRkJTeXhGUmxreVFpeEpRVUZKTzBsRlZuQkRMRTlCUVU4c1JVRkJReXhKUVVGTE8wbEdWMVFzUzBGQlN5eEZRVUZETEVsQlFVczdTVUZEV0N4TlFVRk5MRVZCUVVNc1MwRkJUVHRKUVVOaUxFOUJRVThzUlVGQlF5eFZRVUZYTEVkQlEzUkNPMGxCZGtKTUxFRkJhMEpKTEZWQmJFSk5MRU5CYTBKT0xFMUJRVTBzUVVWUVRDeE5RVUZOTEVOQlFVRTdUVUZEU0N4TlFVRk5MRVZCUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZOTzAxQlEzWkNMR2RDUVVGblFpeEZRVUZETEU5QlFVMDdUVUZEZGtJc1QwRkJUeXhGUVVGRExFbEJRVXNzUjBGRGFFSWlMQW9KSW01aGJXVnpJam9nVzEwS2ZRPT0gKi8nKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdzYXNzaWZ5JykoJy50b2RvaXRlbSB7ICAgaGVpZ2h0OiAxLjJlbTsgICBtYXJnaW46IDAuMWVtOyAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7ICAgYm9yZGVyOiAxcHggc29saWQgI2MyYzJjMjsgICB0ZXh0LWFsaWduOiBsZWZ0OyAgIGRpc3BsYXk6IGJsb2NrOyB9ICAgLnRvZG9pdGVtIHNwYW4geyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjsgICAgIG1hcmdpbi1yaWdodDogMWVtOyAgICAgbWFyZ2luLWxlZnQ6IDFlbTsgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSAgIC50b2RvaXRlbSBpbnB1dCB7ICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAgICAgbWFyZ2luLXJpZ2h0OiAxZW07IH0gICAudG9kb2l0ZW0gaW1nIHsgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICBoZWlnaHQ6IDFlbTsgICAgIHdpZHRoOiAxZW07ICAgICBtYXJnaW4tdG9wOiAycHg7ICAgICBtYXJnaW4tcmlnaHQ6IDJweDsgICAgIGZsb2F0OiByaWdodDsgICAgIGN1cnNvcjogcG9pbnRlcjsgfSAgLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxld29KSW5abGNuTnBiMjRpT2lBekxBb0pJbVpwYkdVaU9pQWlkRzlrYjJsMFpXMHVjMk56Y3lJc0Nna2ljMjkxY21ObGN5STZJRnNLQ1FraWRHOWtiMmwwWlcwdWMyTnpjeUlLQ1Ywc0Nna2ljMjkxY21ObGMwTnZiblJsYm5RaU9pQmJDZ2tKSWk1MGIyUnZhWFJsYlh0Y2NseHVJQ0FnSUZ4eVhHNGdJQ0FnYUdWcFoyaDBPakV1TW1WdE8xeHlYRzRnSUNBZ2JXRnlaMmx1T2pBdU1XVnRPMXh5WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2paalZtTldZMU8xeHlYRzRnSUNBZ1ltOXlaR1Z5T2pGd2VDQnpiMnhwWkNCa1lYSnJaVzRvSTJZMVpqVm1OU3d5TUNVcE8xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2diR1ZtZER0Y2NseHVJQ0FnSUdScGMzQnNZWGs2WW14dlkyczdYSEpjYmx4eVhHNGdJQ0FnYzNCaGJudGNjbHh1SUNBZ0lDQWdJQ0IyWlhKMGFXTmhiQzFoYkdsbmJqb2diV2xrWkd4bE8xeHlYRzRnSUNBZ0lDQWdJR1p2Ym5RdFptRnRhV3g1T2lCV1pYSmtZVzVoTENCSFpXNWxkbUVzSUZSaGFHOXRZU3dnYzJGdWN5MXpaWEpwWmp0Y2NseHVJQ0FnSUNBZ0lDQnRZWEpuYVc0dGNtbG5hSFE2TVdWdE8xeHlYRzRnSUNBZ0lDQWdJRzFoY21kcGJpMXNaV1owT2pGbGJUdGNjbHh1SUNBZ0lDQWdJQ0JrYVhOd2JHRjVPbWx1YkdsdVpTMWliRzlqYXp0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUZ4eVhHNGdJQ0FnYVc1d2RYUjdYSEpjYmlBZ0lDQWdJQ0FnZG1WeWRHbGpZV3d0WVd4cFoyNDZJRzFwWkdSc1pUdGNjbHh1SUNBZ0lDQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1ZtVnlaR0Z1WVN3Z1IyVnVaWFpoTENCVVlXaHZiV0VzSUhOaGJuTXRjMlZ5YVdZN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYSnBaMmgwT2pGbGJUdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lGeHlYRzRnSUNBZ2FXMW5lMXh5WEc0Z0lDQWdJQ0FnSUhabGNuUnBZMkZzTFdGc2FXZHVPaUJ0YVdSa2JHVTdYSEpjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPakZsYlR0Y2NseHVJQ0FnSUNBZ0lDQjNhV1IwYURveFpXMDdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMWFJ2Y0RveWNIZzdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMWEpwWjJoME9qSndlRHRjY2x4dUlDQWdJQ0FnSUNCbWJHOWhkRHB5YVdkb2REdGNjbHh1SUNBZ0lDQWdJQ0JqZFhKemIzSTZjRzlwYm5SbGNqdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lGeHlYRzU5SWdvSlhTd0tDU0p0WVhCd2FXNW5jeUk2SUNKQlFVRkJMRUZCUVVFc1UwRkJVeXhEUVVGQk8wVkJSVXdzVFVGQlRTeEZRVUZETEV0QlFVMDdSVUZEWWl4TlFVRk5MRVZCUVVNc1MwRkJUVHRGUVVOaUxHZENRVUZuUWl4RlFVRkRMRTlCUVZFN1JVRkRla0lzVFVGQlRTeEZRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUVHRGUVVOMlFpeFZRVUZWTEVWQlFVVXNTVUZCU3p0RlFVTnFRaXhQUVVGUExFVkJRVU1zUzBGQlRTeEhRVEJDYWtJN1JVRnFRMFFzUVVGVFNTeFRRVlJMTEVOQlUwd3NTVUZCU1N4RFFVRkJPMGxCUTBFc1kwRkJZeXhGUVVGRkxFMUJRVTg3U1VGRGRrSXNWMEZCVnl4RlFVRkZMRzFEUVVGdlF6dEpRVU5xUkN4WlFVRlpMRVZCUVVNc1IwRkJTVHRKUVVOcVFpeFhRVUZYTEVWQlFVTXNSMEZCU1R0SlFVTm9RaXhQUVVGUExFVkJRVU1zV1VGQllTeEhRVU40UWp0RlFXWk1MRUZCYVVKSkxGTkJha0pMTEVOQmFVSk1MRXRCUVVzc1EwRkJRVHRKUVVORUxHTkJRV01zUlVGQlJTeE5RVUZQTzBsQlEzWkNMRmRCUVZjc1JVRkJSU3h0UTBGQmIwTTdTVUZEYWtRc1dVRkJXU3hGUVVGRExFZEJRVWtzUjBGRGNFSTdSVUZ5UWt3c1FVRjFRa2tzVTBGMlFrc3NRMEYxUWt3c1IwRkJSeXhEUVVGQk8wbEJRME1zWTBGQll5eEZRVUZGTEUxQlFVODdTVUZEZGtJc1RVRkJUU3hGUVVGRExFZEJRVWs3U1VGRFdDeExRVUZMTEVWQlFVTXNSMEZCU1R0SlFVTldMRlZCUVZVc1JVRkJReXhIUVVGSk8wbEJRMllzV1VGQldTeEZRVUZETEVkQlFVazdTVUZEYWtJc1MwRkJTeXhGUVVGRExFdEJRVTA3U1VGRFdpeE5RVUZOTEVWQlFVTXNUMEZCVVN4SFFVTnNRaUlzQ2draWJtRnRaWE1pT2lCYlhRcDkgKi8nKTs7IiwiaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gJ2NvbnRyb2xsZXJzL3RvZG9jb250cm9sbGVyJztcclxuIl19
