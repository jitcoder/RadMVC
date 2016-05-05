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

var _radmvc2 = _interopRequireDefault(_radmvc);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
            return _react2.default.createElement(
                'div',
                { className: 'todoentry' },
                _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('input', { type: 'text', ref: 'item', onKeyPress: this.onKeyPress })
                ),
                _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = TodoEntry;


TodoEntry.propTypes = {
    onAddItem: _react2.default.PropTypes.func.isRequired
};

},{"models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","react":"react","sass/todoentry.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoentry.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoitem.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _radmvc2 = _interopRequireDefault(_radmvc);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
            return _react2.default.createElement(
                'div',
                { className: 'todoitem' },
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.model.item
                ),
                _react2.default.createElement('input', {
                    ref: 'completed',
                    type: 'checkbox',
                    onChange: this.onCompletedChanged,
                    checked: this.props.model.completed }),
                _react2.default.createElement('img', { src: '/imgs/delete.png', onClick: this.onRemoveItem })
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
}(_react2.default.Component);

exports.default = TodoItem;


TodoItem.propTypes = {
    model: _react2.default.PropTypes.instanceOf(_itemmodel2.default),
    onRemoveItem: _react2.default.PropTypes.func.isRequired,
    onItemChanged: _react2.default.PropTypes.func.isRequired
};

},{"models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","react":"react","sass/todoitem.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\todoitem.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todolist.jsx":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _radmvc2 = _interopRequireDefault(_radmvc);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
                result.push(_react2.default.createElement(_todoitem2.default, {
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
            return _react2.default.createElement(
                'div',
                { className: 'todolist' },
                this.renderChildren()
            );
        }
    }]);

    return TodoList;
}(_react2.default.Component);

exports.default = TodoList;


TodoList.propTypes = {
    items: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.instanceOf(_itemmodel2.default)).isRequired,
    onRemoveItem: _react2.default.PropTypes.func.isRequired,
    onItemChanged: _react2.default.PropTypes.func.isRequired
};

},{"components/todoitem":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoitem.jsx","models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","react":"react"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\controllers\\todocontroller.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _radmvc = require('radmvc');

var _radmvc2 = _interopRequireDefault(_radmvc);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
            _radmvc2.default.TodoController.refresh();
        });
        return _this;
    }

    _createClass(TodoController, [{
        key: 'index',
        value: function index() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_todoentry2.default, { onAddItem: _radmvc2.default.TodoController.addItem }),
                _react2.default.createElement('div', { className: 'separator' }),
                _react2.default.createElement(_todolist2.default, {
                    items: this.items,
                    onRemoveItem: _radmvc2.default.TodoController.removeItem,
                    onItemChanged: _radmvc2.default.TodoController.updateItem
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

            _radmvc2.default.TodoController.refresh();
        }
    }, {
        key: 'updateItem',
        value: function updateItem(model) {
            model.update();
            _radmvc2.default.TodoController.refresh();
        }
    }, {
        key: 'addItem',
        value: function addItem(newItem) {
            newItem.create();
            this.items.push(newItem);
            _radmvc2.default.TodoController.refresh();
        }
    }]);

    return TodoController;
}(_radmvc2.default.Controller);

exports.default = TodoController;


_radmvc2.default.Controllers.TodoController = TodoController;

},{"components/todoentry":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todoentry.jsx","components/todolist":"D:\\Projects\\radmvc\\examples\\todolist\\src\\components\\todolist.jsx","models/itemmodel":"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js","radmvc":"radmvc","react":"react","sass/separator.scss":"D:\\Projects\\radmvc\\examples\\todolist\\src\\sass\\separator.scss"}],"D:\\Projects\\radmvc\\examples\\todolist\\src\\models\\itemmodel.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _radmvc = require("radmvc");

var _radmvc2 = _interopRequireDefault(_radmvc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            _radmvc2.default.AjaxModel.get('/todo').then(function (data) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    result.push(new ItemModel(data[i].item, data[i].completed));
                }
                callback(result);
            });
        }
    }]);

    return ItemModel;
}(_radmvc2.default.AjaxModel);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY3NzaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvc2Fzc2lmeS9saWIvc2Fzc2lmeS1icm93c2VyLmpzIiwic3JjXFxjb21wb25lbnRzXFx0b2RvZW50cnkuanN4Iiwic3JjXFxjb21wb25lbnRzXFx0b2RvaXRlbS5qc3giLCJzcmNcXGNvbXBvbmVudHNcXHRvZG9saXN0LmpzeCIsInNyY1xcY29udHJvbGxlcnNcXHRvZG9jb250cm9sbGVyLmpzIiwic3JjXFxtb2RlbHNcXGl0ZW1tb2RlbC5qcyIsInNyYy9zYXNzL3NlcGFyYXRvci5zY3NzIiwic3JjL3Nhc3MvdG9kb2VudHJ5LnNjc3MiLCJzcmMvc2Fzcy90b2RvaXRlbS5zY3NzIiwic3JjXFx0b2RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQixTOzs7QUFFakIsdUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLGlHQUNSLEtBRFE7O0FBR2QsY0FBSyxVQUFMLEdBQWtCLE1BQUssVUFBTCxDQUFnQixJQUFoQixPQUFsQjtBQUNBLGNBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEI7QUFKYztBQUtqQjs7OztpQ0FFTztBQUNKLG1CQUFPO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFdBQWY7Z0JBQ0g7QUFBQTtvQkFBQTtvQkFDSSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsS0FBSSxNQUF2QixFQUE4QixZQUFZLEtBQUssVUFBL0M7QUFESixpQkFERztnQkFJSDtBQUFBO29CQUFBLEVBQVEsU0FBUyxLQUFLLFVBQXRCO29CQUFBO0FBQUE7QUFKRyxhQUFQO0FBTUg7OzttQ0FFVSxDLEVBQUU7QUFDVCxnQkFBRyxFQUFFLEdBQUYsS0FBVSxPQUFiLEVBQXFCO0FBQ2pCLHFCQUFLLFVBQUw7QUFDSDtBQUNKOzs7bUNBRVUsQyxFQUFFO0FBQ1QsaUJBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsd0JBQWMsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQTdCLEVBQW1DLEtBQW5DLENBQXJCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFmLEdBQXVCLEVBQXZCO0FBQ0g7Ozs7RUEzQmtDLGdCQUFNLFM7O2tCQUF4QixTOzs7QUE4QnJCLFVBQVUsU0FBVixHQUFzQjtBQUNsQixlQUFVLGdCQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUI7QUFEYixDQUF0Qjs7Ozs7Ozs7Ozs7QUNuQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ2pCLHNCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxnR0FDUixLQURROztBQUdkLGNBQUssa0JBQUwsR0FBMEIsTUFBSyxrQkFBTCxDQUF3QixJQUF4QixPQUExQjtBQUNBLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFKYztBQUtqQjs7OztpQ0FFTztBQUNKLG1CQUFPO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFVBQWY7Z0JBQ0g7QUFBQTtvQkFBQTtvQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCO0FBQXhCLGlCQURHO2dCQUVIO0FBQ0kseUJBQUksV0FEUjtBQUVJLDBCQUFLLFVBRlQ7QUFHSSw4QkFBVSxLQUFLLGtCQUhuQjtBQUlJLDZCQUFTLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsU0FKOUIsR0FGRztnQkFPSCx1Q0FBSyxLQUFJLGtCQUFULEVBQTRCLFNBQVMsS0FBSyxZQUExQztBQVBHLGFBQVA7QUFTSDs7OzJDQUVrQixDLEVBQUU7QUFDakIsaUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsU0FBakIsR0FBNkIsRUFBRSxNQUFGLENBQVMsT0FBdEM7QUFDQSxpQkFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLEtBQUwsQ0FBVyxLQUFwQztBQUNIOzs7cUNBRVksQyxFQUFFO0FBQ1gsaUJBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBSyxLQUFMLENBQVcsS0FBbkM7QUFDSDs7OztFQTNCaUMsZ0JBQU0sUzs7a0JBQXZCLFE7OztBQStCckIsU0FBUyxTQUFULEdBQXFCO0FBQ2pCLFdBQU0sZ0JBQU0sU0FBTixDQUFnQixVQUFoQixxQkFEVztBQUVqQixrQkFBYSxnQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLFVBRmpCO0FBR2pCLG1CQUFjLGdCQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUI7QUFIbEIsQ0FBckI7Ozs7Ozs7Ozs7O0FDcENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ2pCLHNCQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxnR0FDUixLQURROztBQUdkLGNBQUssY0FBTCxHQUFzQixNQUFLLGNBQUwsQ0FBb0IsSUFBcEIsT0FBdEI7QUFIYztBQUlqQjs7Ozt5Q0FFZTtBQUNaLGdCQUFJLFNBQVMsRUFBYjs7QUFFQSxpQkFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixNQUFwQyxFQUE0QyxHQUE1QyxFQUFnRDtBQUM1Qyx1QkFBTyxJQUFQLENBQVk7QUFDSix5QkFBSyxjQUFZLENBRGI7QUFFSiwyQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLENBQWpCLENBRkg7QUFHSixtQ0FBZSxLQUFLLEtBQUwsQ0FBVyxhQUh0QjtBQUlKLGtDQUFjLEtBQUssS0FBTCxDQUFXLFlBSnJCLEdBQVo7QUFLSDs7QUFFRCxtQkFBTyxNQUFQO0FBQ0g7OztpQ0FFTztBQUNKLG1CQUFPO0FBQUE7Z0JBQUEsRUFBSyxXQUFVLFVBQWY7Z0JBQ0YsS0FBSyxjQUFMO0FBREUsYUFBUDtBQUdIOzs7O0VBekJpQyxnQkFBTSxTOztrQkFBdkIsUTs7O0FBNEJyQixTQUFTLFNBQVQsR0FBcUI7QUFDakIsV0FBTSxnQkFBTSxTQUFOLENBQWdCLE9BQWhCLENBQXdCLGdCQUFNLFNBQU4sQ0FBZ0IsVUFBaEIscUJBQXhCLEVBQStELFVBRHBEO0FBRWpCLGtCQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsVUFGakI7QUFHakIsbUJBQWMsZ0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQjtBQUhsQixDQUFyQjs7Ozs7Ozs7Ozs7QUNqQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLGM7OztBQUVqQiw4QkFBYTtBQUFBOztBQUFBOztBQUdULGNBQUssS0FBTCxHQUFhLEVBQWI7O0FBRUEsNEJBQVUsUUFBVixDQUFtQixVQUFDLElBQUQsRUFBUTtBQUN4QixrQkFBSyxLQUFMLEdBQWMsSUFBZDtBQUNBLDZCQUFJLGNBQUosQ0FBbUIsT0FBbkI7QUFDRixTQUhEO0FBTFM7QUFTWjs7OztnQ0FFTTtBQUNILG1CQUFPO0FBQUE7Z0JBQUE7Z0JBQ0gscURBQVcsV0FBVyxpQkFBSSxjQUFKLENBQW1CLE9BQXpDLEdBREc7Z0JBRUgsdUNBQUssV0FBVSxXQUFmLEdBRkc7Z0JBR0g7QUFDQSwyQkFBTyxLQUFLLEtBRFo7QUFFQSxrQ0FBYyxpQkFBSSxjQUFKLENBQW1CLFVBRmpDO0FBR0EsbUNBQWUsaUJBQUksY0FBSixDQUFtQjtBQUhsQztBQUhHLGFBQVA7QUFTSDs7O21DQUVVLEssRUFBTTtBQUNiLGlCQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUE5QixFQUFzQyxHQUF0QyxFQUEwQztBQUN0QyxvQkFBRyxLQUFLLEtBQUwsQ0FBVyxDQUFYLEVBQWMsSUFBZCxLQUF1QixNQUFNLElBQWhDLEVBQXFDO0FBQ2pDLHlCQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCLEVBQW9CLENBQXBCO0FBQ0EsMEJBQU0sTUFBTjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCw2QkFBSSxjQUFKLENBQW1CLE9BQW5CO0FBQ0g7OzttQ0FFVSxLLEVBQU07QUFDYixrQkFBTSxNQUFOO0FBQ0EsNkJBQUksY0FBSixDQUFtQixPQUFuQjtBQUNIOzs7Z0NBRU8sTyxFQUFRO0FBQ1osb0JBQVEsTUFBUjtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLE9BQWhCO0FBQ0EsNkJBQUksY0FBSixDQUFtQixPQUFuQjtBQUNIOzs7O0VBOUN1QyxpQkFBSSxVOztrQkFBM0IsYzs7O0FBaURyQixpQkFBSSxXQUFKLENBQWdCLGNBQWhCLEdBQWlDLGNBQWpDOzs7Ozs7Ozs7Ozs7O0FDeERBOzs7Ozs7Ozs7Ozs7OztJQUdxQixTOzs7OztBQUVqQix1QkFBWSxJQUFaLEVBQWlCLFNBQWpCLEVBQTJCO0FBQUE7O0FBQUE7O0FBR3ZCLGNBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxjQUFLLFVBQUwsR0FBa0IsU0FBbEI7QUFKdUI7QUFLMUI7Ozs7Ozs7O2lDQTZDTztBQUNKLDRGQUFpQixPQUFqQixFQUF5QixJQUF6QjtBQUNIOzs7Ozs7aUNBR087QUFDSiw2RkFBa0IsT0FBbEIsRUFBMEIsSUFBMUI7QUFDSDs7O2lDQUVPO0FBQ0osK0ZBQW9CLE9BQXBCLEVBQTRCLElBQTVCO0FBQ0g7Ozs0QkF0RFM7QUFDTixtQkFBTyxLQUFLLEtBQVo7QUFDSCxTOzBCQUVRLEssRUFBTTtBQUNYLGdCQUFHLENBQUMsS0FBRCxJQUFVLE9BQU8sS0FBUCxLQUFpQixRQUE5QixFQUNJLE1BQU0seUNBQU4sQ0FESixLQUdJLEtBQUssS0FBTCxHQUFhLEtBQWI7QUFDUDs7OzRCQUVjO0FBQ1gsbUJBQU8sS0FBSyxVQUFaO0FBQ0gsUzswQkFFYSxLLEVBQU07QUFDaEIsZ0JBQUcsT0FBTyxLQUFQLEtBQWlCLFNBQXBCLEVBQ0ksTUFBTSwrQ0FBTixDQURKLEtBR0ksS0FBSyxVQUFMLEdBQWtCLEtBQWxCO0FBQ1A7Ozs7OztpQ0FHZSxRLEVBQVM7O0FBRXJCLGdCQUFHLENBQUMsUUFBRCxJQUFhLE9BQU8sUUFBUCxLQUFvQixVQUFwQyxFQUNJLE1BQU0sbURBQU47Ozs7QUFJSiw2QkFBSSxTQUFKLENBQWMsR0FBZCxDQUFrQixPQUFsQixFQUNDLElBREQsQ0FDTSxVQUFDLElBQUQsRUFBUTtBQUNWLG9CQUFJLFNBQVMsRUFBYjtBQUNBLHFCQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLE1BQXhCLEVBQWdDLEdBQWhDLEVBQW9DO0FBQ2hDLDJCQUFPLElBQVAsQ0FBWSxJQUFJLFNBQUosQ0FBYyxLQUFLLENBQUwsRUFBUSxJQUF0QixFQUEyQixLQUFLLENBQUwsRUFBUSxTQUFuQyxDQUFaO0FBQ0g7QUFDRCx5QkFBUyxNQUFUO0FBQ0gsYUFQRDtBQVFIOzs7O0VBL0NrQyxpQkFBSSxTOztrQkFBdEIsUzs7O0FDSHJCOztBQ0FBOztBQ0FBOzs7O0FDQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzLCBjdXN0b21Eb2N1bWVudCkge1xuICB2YXIgZG9jID0gY3VzdG9tRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gIGlmIChkb2MuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHZhciBzaGVldCA9IGRvYy5jcmVhdGVTdHlsZVNoZWV0KClcbiAgICBzaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIHJldHVybiBzaGVldC5vd25lck5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgc3R5bGUgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuYnlVcmwgPSBmdW5jdGlvbih1cmwpIHtcbiAgaWYgKGRvY3VtZW50LmNyZWF0ZVN0eWxlU2hlZXQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCh1cmwpLm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBsaW5rO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdjc3NpZnknKTsiLCJpbXBvcnQgUmFkIGZyb20gJ3JhZG12Yyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJdGVtTW9kZWwgZnJvbSAnbW9kZWxzL2l0ZW1tb2RlbCc7XHJcbmltcG9ydCAnc2Fzcy90b2RvZW50cnkuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gdGhpcy5vbkFkZENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbktleVByZXNzID0gdGhpcy5vbktleVByZXNzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRvZG9lbnRyeVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj1cIml0ZW1cIiBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQWRkQ2xpY2t9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25LZXlQcmVzcyhlKXtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgICAgICAgIHRoaXMub25BZGRDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb25BZGRDbGljayhlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQWRkSXRlbShuZXcgSXRlbU1vZGVsKHRoaXMucmVmcy5pdGVtLnZhbHVlLGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5yZWZzLml0ZW0udmFsdWUgPSAnJztcclxuICAgIH1cclxufVxyXG5cclxuVG9kb0VudHJ5LnByb3BUeXBlcyA9IHtcclxuICAgIG9uQWRkSXRlbTpSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn0iLCJpbXBvcnQgUmFkIGZyb20gJ3JhZG12Yyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnc2Fzcy90b2RvaXRlbS5zY3NzJztcclxuaW1wb3J0IEl0ZW1Nb2RlbCBmcm9tICdtb2RlbHMvaXRlbW1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlZENoYW5nZWQgPSB0aGlzLm9uQ29tcGxldGVkQ2hhbmdlZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25SZW1vdmVJdGVtID0gdGhpcy5vblJlbW92ZUl0ZW0uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidG9kb2l0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMubW9kZWwuaXRlbX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHJlZj1cImNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ29tcGxldGVkQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMubW9kZWwuY29tcGxldGVkfSAvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWdzL2RlbGV0ZS5wbmdcIiBvbkNsaWNrPXt0aGlzLm9uUmVtb3ZlSXRlbX0vPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Db21wbGV0ZWRDaGFuZ2VkKGUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMubW9kZWwuY29tcGxldGVkID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICB0aGlzLnByb3BzLm9uSXRlbUNoYW5nZWQodGhpcy5wcm9wcy5tb2RlbCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uUmVtb3ZlSXRlbShlKXtcclxuICAgICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlSXRlbSh0aGlzLnByb3BzLm1vZGVsKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5Ub2RvSXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgICBtb2RlbDpSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihJdGVtTW9kZWwpLFxyXG4gICAgb25SZW1vdmVJdGVtOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkl0ZW1DaGFuZ2VkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCBSYWQgZnJvbSAncmFkbXZjJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZG9JdGVtIGZyb20gJ2NvbXBvbmVudHMvdG9kb2l0ZW0nO1xyXG5pbXBvcnQgSXRlbU1vZGVsIGZyb20gJ21vZGVscy9pdGVtbW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlckNoaWxkcmVuKCl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goPFRvZG9JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXsndG9kb2l0ZW1fJytpfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsPXt0aGlzLnByb3BzLml0ZW1zW2ldfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSXRlbUNoYW5nZWQ9e3RoaXMucHJvcHMub25JdGVtQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICBvblJlbW92ZUl0ZW09e3RoaXMucHJvcHMub25SZW1vdmVJdGVtfSAvPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRvZG9saXN0XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5Ub2RvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpdGVtczpSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihJdGVtTW9kZWwpKS5pc1JlcXVpcmVkLFxyXG4gICAgb25SZW1vdmVJdGVtOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkl0ZW1DaGFuZ2VkOlJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufSIsImltcG9ydCBSYWQgZnJvbSAncmFkbXZjJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZG9FbnRyeSBmcm9tICdjb21wb25lbnRzL3RvZG9lbnRyeSc7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tICdjb21wb25lbnRzL3RvZG9saXN0JztcclxuaW1wb3J0IEl0ZW1Nb2RlbCBmcm9tICdtb2RlbHMvaXRlbW1vZGVsJztcclxuaW1wb3J0ICdzYXNzL3NlcGFyYXRvci5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9Db250cm9sbGVyIGV4dGVuZHMgUmFkLkNvbnRyb2xsZXJ7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgSXRlbU1vZGVsLmZldGNoQWxsKChkYXRhKT0+e1xyXG4gICAgICAgICAgIHRoaXMuaXRlbXMgPSAgZGF0YTtcclxuICAgICAgICAgICBSYWQuVG9kb0NvbnRyb2xsZXIucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbmRleCgpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8VG9kb0VudHJ5IG9uQWRkSXRlbT17UmFkLlRvZG9Db250cm9sbGVyLmFkZEl0ZW19Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPFRvZG9MaXN0IFxyXG4gICAgICAgICAgICBpdGVtcz17dGhpcy5pdGVtc31cclxuICAgICAgICAgICAgb25SZW1vdmVJdGVtPXtSYWQuVG9kb0NvbnRyb2xsZXIucmVtb3ZlSXRlbX1cclxuICAgICAgICAgICAgb25JdGVtQ2hhbmdlZD17UmFkLlRvZG9Db250cm9sbGVyLnVwZGF0ZUl0ZW19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVJdGVtKG1vZGVsKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaV0uaXRlbSA9PT0gbW9kZWwuaXRlbSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBSYWQuVG9kb0NvbnRyb2xsZXIucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVJdGVtKG1vZGVsKXtcclxuICAgICAgICBtb2RlbC51cGRhdGUoKTtcclxuICAgICAgICBSYWQuVG9kb0NvbnRyb2xsZXIucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRJdGVtKG5ld0l0ZW0pe1xyXG4gICAgICAgIG5ld0l0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgIFJhZC5Ub2RvQ29udHJvbGxlci5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblJhZC5Db250cm9sbGVycy5Ub2RvQ29udHJvbGxlciA9IFRvZG9Db250cm9sbGVyOyIsImltcG9ydCBSYWQgZnJvbSAncmFkbXZjJztcclxuXHJcbi8vY3JlYXRlIGFqYXggYmFja2VkIG1vZGVsXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Nb2RlbCBleHRlbmRzIFJhZC5BamF4TW9kZWx7XHJcbiAgICAvL2R1cmluZyBpbnN0YW50aWF0aW9uIHJlcXVpcmUgaXRlbSBzdHJpbmcgYW5kIGNvbXBsZXRlZCBib29sZWFuXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtLGNvbXBsZXRlZCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9pdGVtID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBpdGVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBpdGVtKHZhbHVlKXtcclxuICAgICAgICBpZighdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICB0aHJvdyBcInZhbHVlIGFzc2lnbmVkIHRvIGl0ZW0gbXVzdCBiZSBhIHN0cmluZ1wiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5faXRlbSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgY29tcGxldGVkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGNvbXBsZXRlZCh2YWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlICE9PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgdGhyb3cgXCJ2YWx1ZSBhc3NpZ25lZCB0byBjb21wbGV0ZWQgbXVzdCBiZSBhIGJvb2xlYW5cIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2dldCBhbGwgdG9kbyBpdGVtcyBmcm9tIHNlcnZlclxyXG4gICAgc3RhdGljIGZldGNoQWxsKGNhbGxiYWNrKXtcclxuICAgICAgICBcclxuICAgICAgICBpZighY2FsbGJhY2sgfHwgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHRocm93IFwiZmV0Y2ggcmVxdWlyZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBwcm92aWRlZFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcyBpcyBhIHN0YXRpYyBtZXRob2QsIHNvIHRoZXJlIGlzIG5vIGJhc2UgY2xhc3MgbWV0aG9kLlxyXG4gICAgICAgIC8vd2Ugd2lsbCB1c2UgdGhlIHN0YXRpYyBhamF4IG1ldGhvZHMgUmFkTVZDIHByb3ZpZGVzLlxyXG4gICAgICAgIFJhZC5BamF4TW9kZWwuZ2V0KCcvdG9kbycpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IEl0ZW1Nb2RlbChkYXRhW2ldLml0ZW0sZGF0YVtpXS5jb21wbGV0ZWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vcmVhbCB3b3JsZCBzY2VuYXJpbyB3ZSdkIHByb2JhYmx5IGp1c3QgdXNlIGFuIHVwc2VydC4uXHJcbiAgICAvL3VwZGF0ZSBhbiBleGlzdGluZyB0b2RvIGl0ZW1cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5wdXQoJy90b2RvJyx0aGlzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9hZGQgYSBuZXcgdG9kbyBpdGVtXHJcbiAgICBjcmVhdGUoKXtcclxuICAgICAgICByZXR1cm4gc3VwZXIucG9zdCgnL3RvZG8nLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5kZWxldGUoJy90b2RvJyx0aGlzKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnc2Fzc2lmeScpKCcuc2VwYXJhdG9yIHsgICBoZWlnaHQ6IDFweDsgICB3aWR0aDogODAlOyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJmMGYyOyAgIGRpc3BsYXk6IGJsb2NrOyAgIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bzsgfSAgLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxld29KSW5abGNuTnBiMjRpT2lBekxBb0pJbVpwYkdVaU9pQWljMlZ3WVhKaGRHOXlMbk5qYzNNaUxBb0pJbk52ZFhKalpYTWlPaUJiQ2drSkluTmxjR0Z5WVhSdmNpNXpZM056SWdvSlhTd0tDU0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZJRnNLQ1FraUxuTmxjR0Z5WVhSdmNudGNjbHh1SUNBZ0lHaGxhV2RvZERveGNIZzdYSEpjYmlBZ0lDQjNhV1IwYURvNE1DVTdYSEpjYmlBZ0lDQmliM0prWlhJdFltOTBkRzl0T2pGd2VDQnpiMnhwWkNBalpXSm1NR1l5TzF4eVhHNGdJQ0FnWkdsemNHeGhlVHBpYkc5amF6dGNjbHh1SUNBZ0lHMWhjbWRwYmpveE1IQjRJR0YxZEc4Z01UQndlQ0JoZFhSdk8xeHlYRzU5SWdvSlhTd0tDU0p0WVhCd2FXNW5jeUk2SUNKQlFVRkJMRUZCUVVFc1ZVRkJWU3hEUVVGQk8wVkJRMDRzVFVGQlRTeEZRVUZETEVkQlFVazdSVUZEV0N4TFFVRkxMRVZCUVVNc1IwRkJTVHRGUVVOV0xHRkJRV0VzUlVGQlF5eHBRa0ZCYTBJN1JVRkRhRU1zVDBGQlR5eEZRVUZETEV0QlFVMDdSVUZEWkN4TlFVRk5MRVZCUVVNc2JVSkJRVzlDTEVkQlF6bENJaXdLQ1NKdVlXMWxjeUk2SUZ0ZENuMD0gKi8nKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdzYXNzaWZ5JykoJy50b2RvZW50cnkgeyAgIGhlaWdodDogMS41ZW07ICAgZGlzcGxheTogdGFibGU7ICAgd2lkdGg6IDEwMCU7IH0gICAudG9kb2VudHJ5IHNwYW4geyAgICAgbWFyZ2luLXJpZ2h0OiAxZW07ICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyAgICAgcGFkZGluZy1yaWdodDogMTBweDsgICAgIHdpZHRoOiAxMDAlOyB9ICAgICAudG9kb2VudHJ5IHNwYW4gaW5wdXQgeyAgICAgICBmb250LXNpemU6IDFlbTsgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAgICAgICBjb2xvcjogYmxhY2s7ICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7ICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzLCBib3JkZXIgMC4zczsgICAgICAgaGVpZ2h0OiAxLjVlbTsgICAgICAgb3V0bGluZTogbm9uZTsgICAgICAgd2lkdGg6IDEwMCU7IH0gICAgICAgLnRvZG9lbnRyeSBzcGFuIGlucHV0OmZvY3VzIHsgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjYjViNWI1OyAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwODhGRjsgICAgICAgICBvdXRsaW5lOiBub25lOyB9ICAgICAgIC50b2RvZW50cnkgc3BhbiBpbnB1dDpob3ZlciB7ICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNEZBREZGOyAgICAgICAgIG91dGxpbmU6IG5vbmU7IH0gICAudG9kb2VudHJ5IGJ1dHRvbiB7ICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYzNDVjOyAgICAgYm9yZGVyLXJhZGl1czogM3B4OyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NUZBODsgICAgIGZvbnQtc2l6ZTogMWVtOyAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAgICAgY29sb3I6ICNmZmY7ICAgICBvdXRsaW5lOiBub25lOyAgICAgd2lkdGg6IDEwZW07ICAgICBoZWlnaHQ6IDEuNWVtOyAgICAgZGlzcGxheTogdGFibGUtY2VsbDsgfSAgICAgLnRvZG9lbnRyeSBidXR0b246aG92ZXIgeyAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI0OTgyOyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzNDVjOyAgICAgICBvdXRsaW5lOiBub25lOyB9ICAvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV3b0pJblpsY25OcGIyNGlPaUF6TEFvSkltWnBiR1VpT2lBaWRHOWtiMlZ1ZEhKNUxuTmpjM01pTEFvSkluTnZkWEpqWlhNaU9pQmJDZ2tKSW5SdlpHOWxiblJ5ZVM1elkzTnpJaXdLQ1FraWJXbDRhVzV6TDE5MFpYaDBZbTk0TG5OamMzTWlMQW9KQ1NKdGFYaHBibk12WDJKMWRIUnZiaTV6WTNOeklnb0pYU3dLQ1NKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2SUZzS0NRa2lRR2x0Y0c5eWRDQW5iV2w0YVc1ekwzUmxlSFJpYjNnbk8xeHlYRzVBYVcxd2IzSjBJQ2R0YVhocGJuTXZZblYwZEc5dUp6dGNjbHh1WEhKY2JpNTBiMlJ2Wlc1MGNubDdYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lHaGxhV2RvZERveExqVmxiVHRjY2x4dUlDQWdJR1JwYzNCc1lYazZkR0ZpYkdVN1hISmNiaUFnSUNCM2FXUjBhRG94TURBbE8xeHlYRzRnSUNBZ1hISmNiaUFnSUNCemNHRnVlMXh5WEc0Z0lDQWdJQ0FnSUcxaGNtZHBiaTF5YVdkb2REb3haVzA3WEhKY2JpQWdJQ0FnSUNBZ1pHbHpjR3hoZVRwMFlXSnNaUzFqWld4c08xeHlYRzRnSUNBZ0lDQWdJSEJoWkdScGJtY3RjbWxuYUhRNk1UQndlRHRjY2x4dUlDQWdJQ0FnSUNCM2FXUjBhRG94TURBbE8xeHlYRzRnSUNBZ0lDQWdJRnh5WEc0Z0lDQWdJQ0FnSUdsdWNIVjBlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQkFhVzVqYkhWa1pTQjBaWGgwWW05NEtERmxiU3dqWlRobE9HVTRLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNk1UQXdKVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdZblYwZEc5dWUxeHlYRzRnSUNBZ0lDQWdJRUJwYm1Oc2RXUmxJR0oxZEhSdmJpZ3haVzBzSXpNNE5VWkJPQ3dqWm1abUtUdGNjbHh1SUNBZ0lDQWdJQ0IzYVdSMGFEb3hNR1Z0TzF4eVhHNGdJQ0FnSUNBZ0lHaGxhV2RvZERveExqVmxiVHRjY2x4dUlDQWdJQ0FnSUNCa2FYTndiR0Y1T25SaFlteGxMV05sYkd3N1hISmNiaUFnSUNCOVhISmNibHh5WEc1OUlpd0tDUWtpUUcxcGVHbHVJSFJsZUhSaWIzZ29KSE5wZW1Vc0pHSnZjbVJsY2kxamIyeHZjaWw3WEhKY2JpQWdJQ0JjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9rYzJsNlpUdGNjbHh1SUNBZ0lHWnZiblF0Wm1GdGFXeDVPaUJXWlhKa1lXNWhMQ0JIWlc1bGRtRXNJRlJoYUc5dFlTd2djMkZ1Y3kxelpYSnBaanRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdZMjlzYjNJNllteGhZMnM3WEhKY2JpQWdJQ0JpYjNKa1pYSTZNWEI0SUhOdmJHbGtJQ1JpYjNKa1pYSXRZMjlzYjNJN1hISmNiaUFnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUF6Y0hnN1hISmNiaUFnSUNCMGNtRnVjMmwwYVc5dU9pQmliM2d0YzJoaFpHOTNJREF1TTNNc0lHSnZjbVJsY2lBd0xqTnpPMXh5WEc0Z0lDQWdhR1ZwWjJoME9qRXVOV1Z0TzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0J2ZFhSc2FXNWxPbTV2Ym1VN1hISmNiaUFnSUNCY2NseHVJQ0FnSUNZNlptOWpkWE43WEhKY2JpQWdJQ0FnSUNBZ1ltOTRMWE5vWVdSdmR6b2dNQ0F3SURWd2VDQXhjSGdnWkdGeWEyVnVLQ1JpYjNKa1pYSXRZMjlzYjNJc01qQWxLVHRjY2x4dUlDQWdJQ0FnSUNCaWIzSmtaWEl0WTI5c2IzSTZJekF3T0RoR1JqdGNjbHh1SUNBZ0lDQWdJQ0J2ZFhSc2FXNWxPbTV2Ym1VN1hISmNiaUFnSUNBZ0lDQWdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQmNjbHh1SUNBZ0lDWTZhRzkyWlhKN1hISmNiaUFnSUNBZ0lDQWdZbTl5WkdWeUxXTnZiRzl5T2lNMFJrRkVSa1k3WEhKY2JpQWdJQ0FnSUNBZ2IzVjBiR2x1WlRwdWIyNWxPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd0tDUWtpUUcxcGVHbHVJR0oxZEhSdmJpZ2tjMmw2WlN3Z0pHSjFkSFJ2YmkxamIyeHZjaXdnSkhSbGVIUXRZMjlzYjNJcGUxeHlYRzRnSUNBZ1hISmNiaUFnSUNCaWIzSmtaWEk2TVhCNElITnZiR2xrSUdSaGNtdGxiaWdrWW5WMGRHOXVMV052Ykc5eUxESXdKU2s3WEhKY2JpQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9qTndlRHRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2tZblYwZEc5dUxXTnZiRzl5TzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SkhOcGVtVTdYSEpjYmlBZ0lDQm1iMjUwTFdaaGJXbHNlVG9nVm1WeVpHRnVZU3dnUjJWdVpYWmhMQ0JVWVdodmJXRXNJSE5oYm5NdGMyVnlhV1k3WEhKY2JseHlYRzRnSUNBZ1kyOXNiM0k2SkhSbGVIUXRZMjlzYjNJN1hISmNibHh5WEc0Z0lDQWdiM1YwYkdsdVpUcHViMjVsTzF4eVhHNGdJQ0FnWEhKY2JpQWdJQ0FtT21odmRtVnllMXh5WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjam94Y0hnZ2MyOXNhV1FnWkdGeWEyVnVLQ1JpZFhSMGIyNHRZMjlzYjNJc01UQWxLVHRjY2x4dUlDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T21SaGNtdGxiaWdrWW5WMGRHOXVMV052Ykc5eUxESXdKU2s3WEhKY2JpQWdJQ0FnSUNBZ2IzVjBiR2x1WlRwdWIyNWxPMXh5WEc0Z0lDQWdmVnh5WEc1OUlnb0pYU3dLQ1NKdFlYQndhVzVuY3lJNklDSkJRVWRCTEVGQlFVRXNWVUZCVlN4RFFVRkJPMFZCUlU0c1RVRkJUU3hGUVVGRExFdEJRVTA3UlVGRFlpeFBRVUZQTEVWQlFVTXNTMEZCVFR0RlFVTmtMRXRCUVVzc1JVRkJReXhKUVVGTExFZEJjVUprTzBWQmVrSkVMRUZCVFVrc1ZVRk9UU3hEUVUxT0xFbEJRVWtzUTBGQlFUdEpRVU5CTEZsQlFWa3NSVUZCUXl4SFFVRkpPMGxCUTJwQ0xFOUJRVThzUlVGQlF5eFZRVUZYTzBsQlEyNUNMR0ZCUVdFc1JVRkJReXhKUVVGTE8wbEJRMjVDTEV0QlFVc3NSVUZCUXl4SlFVRkxMRWRCVFdRN1NVRm9Ra3dzUVVGWlVTeFZRVnBGTEVOQlRVNHNTVUZCU1N4RFFVMUJMRXRCUVVzc1EwRkJRVHROUTJKVUxGTkJRVk1zUlVSalowSXNSMEZCUnp0TlEySTFRaXhYUVVGWExFVkJRVVVzYlVOQlFXOURPMDFCUldwRUxFdEJRVXNzUlVGQlF5eExRVUZOTzAxQlExb3NUVUZCVFN4RlFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkVWV0VzVDBGQlR6dE5RMVJ3UXl4aFFVRmhMRVZCUVVVc1IwRkJTVHROUVVOdVFpeFZRVUZWTEVWQlFVVXNORUpCUVRaQ08wMUJRM3BETEUxQlFVMHNSVUZCUXl4TFFVRk5PMDFCUldJc1QwRkJUeXhGUVVGRExFbEJRVXM3VFVSTlRDeExRVUZMTEVWQlFVTXNTVUZCU3l4SFFVTmtPMDFCWmxRc1FVRlpVU3hWUVZwRkxFTkJUVTRzU1VGQlNTeERRVTFCTEV0QlFVc3NRVU5HVWl4TlFVRk5MRU5CUVVFN1VVRkRTQ3hWUVVGVkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVTA3VVVGRE9VSXNXVUZCV1N4RlFVRkRMRTlCUVZFN1VVRkRja0lzVDBGQlR5eEZRVUZETEVsQlFVc3NSMEZGYUVJN1RVUm1UQ3hCUVZsUkxGVkJXa1VzUTBGTlRpeEpRVUZKTEVOQlRVRXNTMEZCU3l4QlEwdFNMRTFCUVUwc1EwRkJRVHRSUVVOSUxGbEJRVmtzUlVGQlF5eFBRVUZSTzFGQlEzSkNMRTlCUVU4c1JVRkJReXhKUVVGTExFZEJRMmhDTzBWRWNFSk1MRUZCYTBKSkxGVkJiRUpOTEVOQmEwSk9MRTFCUVUwc1EwRkJRVHRKUlc1Q1RpeE5RVUZOTEVWQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGTk8wbEJRM1pDTEdGQlFXRXNSVUZCUXl4SFFVRkpPMGxCUld4Q0xHZENRVUZuUWl4RlJtbENVU3hQUVVGUE8wbEZaaTlDTEZOQlFWTXNSVVpsVnl4SFFVRkhPMGxGWkhaQ0xGZEJRVmNzUlVGQlJTeHRRMEZCYjBNN1NVRkZha1FzUzBGQlN5eEZSbGt5UWl4SlFVRkpPMGxGVm5CRExFOUJRVThzUlVGQlF5eEpRVUZMTzBsR1YxUXNTMEZCU3l4RlFVRkRMRWxCUVVzN1NVRkRXQ3hOUVVGTkxFVkJRVU1zUzBGQlRUdEpRVU5pTEU5QlFVOHNSVUZCUXl4VlFVRlhMRWRCUTNSQ08wbEJka0pNTEVGQmEwSkpMRlZCYkVKTkxFTkJhMEpPTEUxQlFVMHNRVVZRVEN4TlFVRk5MRU5CUVVFN1RVRkRTQ3hOUVVGTkxFVkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRk5PMDFCUTNaQ0xHZENRVUZuUWl4RlFVRkRMRTlCUVUwN1RVRkRka0lzVDBGQlR5eEZRVUZETEVsQlFVc3NSMEZEYUVJaUxBb0pJbTVoYldWeklqb2dXMTBLZlE9PSAqLycpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3Nhc3NpZnknKSgnLnRvZG9pdGVtIHsgICBoZWlnaHQ6IDEuMmVtOyAgIG1hcmdpbjogMC4xZW07ICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyOyAgIHRleHQtYWxpZ246IGxlZnQ7ICAgZGlzcGxheTogYmxvY2s7IH0gICAudG9kb2l0ZW0gc3BhbiB7ICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmOyAgICAgbWFyZ2luLXJpZ2h0OiAxZW07ICAgICBtYXJnaW4tbGVmdDogMWVtOyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9ICAgLnRvZG9pdGVtIGlucHV0IHsgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7ICAgICBtYXJnaW4tcmlnaHQ6IDFlbTsgfSAgIC50b2RvaXRlbSBpbWcgeyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgICAgIGhlaWdodDogMWVtOyAgICAgd2lkdGg6IDFlbTsgICAgIG1hcmdpbi10b3A6IDJweDsgICAgIG1hcmdpbi1yaWdodDogMnB4OyAgICAgZmxvYXQ6IHJpZ2h0OyAgICAgY3Vyc29yOiBwb2ludGVyOyB9ICAvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV3b0pJblpsY25OcGIyNGlPaUF6TEFvSkltWnBiR1VpT2lBaWRHOWtiMmwwWlcwdWMyTnpjeUlzQ2draWMyOTFjbU5sY3lJNklGc0tDUWtpZEc5a2IybDBaVzB1YzJOemN5SUtDVjBzQ2draWMyOTFjbU5sYzBOdmJuUmxiblFpT2lCYkNna0pJaTUwYjJSdmFYUmxiWHRjY2x4dUlDQWdJRnh5WEc0Z0lDQWdhR1ZwWjJoME9qRXVNbVZ0TzF4eVhHNGdJQ0FnYldGeVoybHVPakF1TVdWdE8xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvalpqVm1OV1kxTzF4eVhHNGdJQ0FnWW05eVpHVnlPakZ3ZUNCemIyeHBaQ0JrWVhKclpXNG9JMlkxWmpWbU5Td3lNQ1VwTzF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ2JHVm1kRHRjY2x4dUlDQWdJR1JwYzNCc1lYazZZbXh2WTJzN1hISmNibHh5WEc0Z0lDQWdjM0JoYm50Y2NseHVJQ0FnSUNBZ0lDQjJaWEowYVdOaGJDMWhiR2xuYmpvZ2JXbGtaR3hsTzF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0Wm1GdGFXeDVPaUJXWlhKa1lXNWhMQ0JIWlc1bGRtRXNJRlJoYUc5dFlTd2djMkZ1Y3kxelpYSnBaanRjY2x4dUlDQWdJQ0FnSUNCdFlYSm5hVzR0Y21sbmFIUTZNV1Z0TzF4eVhHNGdJQ0FnSUNBZ0lHMWhjbWRwYmkxc1pXWjBPakZsYlR0Y2NseHVJQ0FnSUNBZ0lDQmthWE53YkdGNU9tbHViR2x1WlMxaWJHOWphenRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJRnh5WEc0Z0lDQWdhVzV3ZFhSN1hISmNiaUFnSUNBZ0lDQWdkbVZ5ZEdsallXd3RZV3hwWjI0NklHMXBaR1JzWlR0Y2NseHVJQ0FnSUNBZ0lDQm1iMjUwTFdaaGJXbHNlVG9nVm1WeVpHRnVZU3dnUjJWdVpYWmhMQ0JVWVdodmJXRXNJSE5oYm5NdGMyVnlhV1k3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1TFhKcFoyaDBPakZsYlR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUZ4eVhHNGdJQ0FnYVcxbmUxeHlYRzRnSUNBZ0lDQWdJSFpsY25ScFkyRnNMV0ZzYVdkdU9pQnRhV1JrYkdVN1hISmNiaUFnSUNBZ0lDQWdhR1ZwWjJoME9qRmxiVHRjY2x4dUlDQWdJQ0FnSUNCM2FXUjBhRG94WlcwN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG95Y0hnN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYSnBaMmgwT2pKd2VEdGNjbHh1SUNBZ0lDQWdJQ0JtYkc5aGREcHlhV2RvZER0Y2NseHVJQ0FnSUNBZ0lDQmpkWEp6YjNJNmNHOXBiblJsY2p0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUZ4eVhHNTlJZ29KWFN3S0NTSnRZWEJ3YVc1bmN5STZJQ0pCUVVGQkxFRkJRVUVzVTBGQlV5eERRVUZCTzBWQlJVd3NUVUZCVFN4RlFVRkRMRXRCUVUwN1JVRkRZaXhOUVVGTkxFVkJRVU1zUzBGQlRUdEZRVU5pTEdkQ1FVRm5RaXhGUVVGRExFOUJRVkU3UlVGRGVrSXNUVUZCVFN4RlFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlRUdEZRVU4yUWl4VlFVRlZMRVZCUVVVc1NVRkJTenRGUVVOcVFpeFBRVUZQTEVWQlFVTXNTMEZCVFN4SFFUQkNha0k3UlVGcVEwUXNRVUZUU1N4VFFWUkxMRU5CVTB3c1NVRkJTU3hEUVVGQk8wbEJRMEVzWTBGQll5eEZRVUZGTEUxQlFVODdTVUZEZGtJc1YwRkJWeXhGUVVGRkxHMURRVUZ2UXp0SlFVTnFSQ3haUVVGWkxFVkJRVU1zUjBGQlNUdEpRVU5xUWl4WFFVRlhMRVZCUVVNc1IwRkJTVHRKUVVOb1FpeFBRVUZQTEVWQlFVTXNXVUZCWVN4SFFVTjRRanRGUVdaTUxFRkJhVUpKTEZOQmFrSkxMRU5CYVVKTUxFdEJRVXNzUTBGQlFUdEpRVU5FTEdOQlFXTXNSVUZCUlN4TlFVRlBPMGxCUTNaQ0xGZEJRVmNzUlVGQlJTeHRRMEZCYjBNN1NVRkRha1FzV1VGQldTeEZRVUZETEVkQlFVa3NSMEZEY0VJN1JVRnlRa3dzUVVGMVFra3NVMEYyUWtzc1EwRjFRa3dzUjBGQlJ5eERRVUZCTzBsQlEwTXNZMEZCWXl4RlFVRkZMRTFCUVU4N1NVRkRka0lzVFVGQlRTeEZRVUZETEVkQlFVazdTVUZEV0N4TFFVRkxMRVZCUVVNc1IwRkJTVHRKUVVOV0xGVkJRVlVzUlVGQlF5eEhRVUZKTzBsQlEyWXNXVUZCV1N4RlFVRkRMRWRCUVVrN1NVRkRha0lzUzBGQlN5eEZRVUZETEV0QlFVMDdTVUZEV2l4TlFVRk5MRVZCUVVNc1QwRkJVU3hIUVVOc1FpSXNDZ2tpYm1GdFpYTWlPaUJiWFFwOSAqLycpOzsiLCJpbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSAnY29udHJvbGxlcnMvdG9kb2NvbnRyb2xsZXInO1xyXG4iXX0=
