/* eslint-disable */
/*! 
 * weui.js.magic v1.2.2 (https://github.com/xzhih/weui.js.magic)
 * Copyright 2020, wechat ui team & xzhih
 * MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weui"] = factory();
	else
		root["weui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
	var $ = (function(document, s_addEventListener, s_querySelectorAll) {
	function $(s, context, bala) {
		bala = Object.create($.fn);

		s && bala.push.apply(bala, // if s is truly then push the following
			s[s_addEventListener] // if arg is node or window,
				? [s] // then pass [s]
				: "" + s === s // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'addEventListener' (HTMLUnknownElement) if context is not presented
						? ((context = document.createElement(context)).innerHTML = s
							, context.children)
						: context // else if context is truly
							? ((context = $(context)[0]) // if context element is found
								? context[s_querySelectorAll](s) // then select element from context
								: bala) // else pass [] (context isn't found)
							: document[s_querySelectorAll](s) // else select elements globally
					: s); // else guessing that s variable is array-like Object

		return bala;
	}

	$.fn = [];

	$.one = function(s, context) {
		return $(s, context)[0] || null;
	};

	return $;
})(document, 'addEventListener', 'querySelectorAll');
;

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return $;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(this);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div class=\"<%=className%>\"> <div class=weui-mask></div> <div class=\"weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>\"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class=\"weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>\"><%=buttons[i]['label']%></a> <% } %> </div> </div> </div> ";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<% if(icon !== 'none'){ %> <div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast <%= icon %>\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> <% } %> <% if(icon === 'none'){ %> <div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast style=min-height:0> <p class=weui-toast__content style=\"margin:15px 0\"><%=content%></p> </div> </div> <% } %> ";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-loading_toast <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=\"<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>\"> <div class=weui-mask></div> <div class=weui-actionsheet> <% if(!isAndroid && title){ %> <div class=weui-actionsheet__title> <p class=weui-actionsheet__title-text><%= title %></p> </div> <% } %> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> ";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = " <div class=\"<%= className %>\"> <div class=weui-mask></div> <div class=\"weui-half-screen-dialog weui-picker\"> <div class=weui-half-screen-dialog__hd> <div class=weui-half-screen-dialog__hd__side> <button class=\"weui-icon-btn weui-icon-btn_close weui-picker__btn closetext\">关闭</button> </div> <div class=weui-half-screen-dialog__hd__main> <strong class=weui-half-screen-dialog__title>标题</strong> </div> </div> <div class=weui-half-screen-dialog__bd> <div class=weui-picker__bd></div> </div> <div class=weui-half-screen-dialog__ft> <a href=javascript:; class=\"weui-btn weui-btn_primary weui-picker__btn primarytext\" id=weui-picker-confirm data-action=select>确定</a> </div> </div> </div> ";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-gallery <%= className %>\"> <span class=weui-gallery__img style=\"background-image:url(<%= url %>)\"></span> <% if(showDel){ %> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class=\"weui-icon-delete weui-icon_gallery-delete\"></i> </a> </div> <% } %> </div> ";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div> ";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<li class=\"weui-uploader__file weui-uploader__file_status\" data-id=\"<%= id %>\"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> ";

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "dialog", function() { return /* reexport */ src_dialog_dialog; });
__webpack_require__.d(__webpack_exports__, "toast", function() { return /* reexport */ src_toast_toast; });
__webpack_require__.d(__webpack_exports__, "loading", function() { return /* reexport */ src_loading_loading; });
__webpack_require__.d(__webpack_exports__, "actionSheet", function() { return /* reexport */ src_actionSheet_actionSheet; });
__webpack_require__.d(__webpack_exports__, "picker", function() { return /* reexport */ picker_picker; });
__webpack_require__.d(__webpack_exports__, "datePicker", function() { return /* reexport */ datePicker; });
__webpack_require__.d(__webpack_exports__, "gallery", function() { return /* reexport */ src_gallery_gallery; });
__webpack_require__.d(__webpack_exports__, "alert", function() { return /* reexport */ src_alert_alert; });
__webpack_require__.d(__webpack_exports__, "confirm", function() { return /* reexport */ src_confirm_confirm; });
__webpack_require__.d(__webpack_exports__, "topTips", function() { return /* reexport */ src_topTips_topTips; });
__webpack_require__.d(__webpack_exports__, "searchBar", function() { return /* reexport */ searchBar_searchBar; });
__webpack_require__.d(__webpack_exports__, "tab", function() { return /* reexport */ tab_tab; });
__webpack_require__.d(__webpack_exports__, "form", function() { return /* reexport */ form_form; });
__webpack_require__.d(__webpack_exports__, "uploader", function() { return /* reexport */ uploader_uploader; });
__webpack_require__.d(__webpack_exports__, "slider", function() { return /* reexport */ slider_slider; });

// CONCATENATED MODULE: ./node_modules/element-closest/index.mjs
function polyfill(window) {
  var ElementPrototype = window.Element.prototype;

  if (typeof ElementPrototype.matches !== 'function') {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }

  if (typeof ElementPrototype.closest !== 'function') {
    ElementPrototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    };
  }
}

/* harmony default export */ var element_closest = (polyfill);
//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__(1);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/balajs/es5/bala.umd.js
var bala_umd = __webpack_require__(0);
var bala_umd_default = /*#__PURE__*/__webpack_require__.n(bala_umd);

// CONCATENATED MODULE: ./src/util/util.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Tencent is pleased to support the open source community by making WeUI.js available.
 *
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *       http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */


 // 其实，$ 的原型就是一个数组，拥有数组的各种方法
// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

/* 判断系统 */

function detect(ua) {
  var os = {};
  var android = ua.match(/(Android);?[\s/]+([\d.]+)?/);

  if (android) {
    os.android = true;
    os.version = android[2];
  }

  this.os = os;
}

detect.call(bala_umd_default.a, navigator.userAgent);
object_assign_default()(bala_umd_default.a.fn, {
  /**
   * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
   * @param {Element|Element[]} $child
   * @returns {append}
   */
  append: function append($child) {
    if (!($child instanceof HTMLElement)) {
      $child = $child[0];
    }

    this.forEach(function ($element) {
      $element.appendChild($child);
    });
    return this;
  },

  /**
   *
   * @returns {remove}
   */
  remove: function remove() {
    this.forEach(function ($element) {
      $element.parentNode.removeChild($element);
    });
    return this;
  },

  /**
   *
   * @param selector
   * @returns {HTMLElement}
   */
  find: function find(selector) {
    return bala_umd_default()(selector, this);
  },

  /**
   *
   * @param {String} className
   * @returns {addClass}
   */
  addClass: function addClass(className) {
    this.forEach(function ($element) {
      // http://caniuse.com/#search=classList
      $element.classList.add(className);
    });
    return this;
  },

  /**
   *
   * @param {String} className
   * @returns {removeClass}
   */
  removeClass: function removeClass(className) {
    this.forEach(function ($element) {
      // http://caniuse.com/#search=classList
      $element.classList.remove(className);
    });
    return this;
  },

  /**
   *
   * @param index
   * @returns {*|jQuery|HTMLElement}
   */
  eq: function eq(index) {
    return bala_umd_default()(this[index]);
  },

  /**
   *
   * @returns {show}
   */
  show: function show() {
    this.forEach(function ($element) {
      $element.style.display = 'block';
    });
    return this;
  },

  /**
   *
   * @returns {hide}
   */
  hide: function hide() {
    this.forEach(function ($element) {
      $element.style.display = 'none';
    });
    return this;
  },

  /**
   *
   * @param html 目前只能接受字符串
   * @returns {html}
   */
  html: function html(_html) {
    this.forEach(function ($element) {
      $element.innerHTML = _html;
    });
    return this;
  },

  /**
   *
   * @param {Object} obj 目前只能接受object
   * @returns {css}
   */
  css: function css(obj) {
    var _this = this;

    Object.keys(obj).forEach(function (key) {
      _this.forEach(function ($element) {
        $element.style[key] = obj[key];
      });
    });
    return this;
  },

  /**
   *
   * @param eventType
   * @param selector
   * @param handler
   */
  on: function on(eventType, selector, handler) {
    var isDelegate = typeof selector === 'string' && typeof handler === 'function';

    if (!isDelegate) {
      handler = selector;
    }

    this.forEach(function ($element) {
      eventType.split(' ').forEach(function (event) {
        // eslint-disable-next-line func-names
        $element.addEventListener(event, function (evt) {
          if (isDelegate) {
            // http://caniuse.com/#search=closest
            if (this.contains(evt.target.closest(selector))) {
              handler.call(evt.target, evt);
            }
          } else {
            handler.call(this, evt);
          }
        });
      });
    });
    return this;
  },

  /**
   *
   * @param {String} eventType
   * @param {String|Function} selector
   * @param {Function=} handler
   * @returns {off}
   */
  off: function off(eventType, selector, handler) {
    if (typeof selector === 'function') {
      handler = selector;
      selector = null;
    }

    this.forEach(function ($element) {
      eventType.split(' ').forEach(function (event) {
        if (typeof selector === 'string') {
          $element.querySelectorAll(selector).forEach(function ($element) {
            $element.removeEventListener(event, handler);
          });
        } else {
          $element.removeEventListener(event, handler);
        }
      });
    });
    return this;
  },

  /**
   *
   * @returns {Number}
   */
  index: function index() {
    var $element = this[0];
    var $parent = $element.parentNode;
    return Array.prototype.indexOf.call($parent.children, $element);
  },

  /**
   * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
   * @returns {offAll}
   */
  offAll: function offAll() {
    var _this2 = this;

    this.forEach(function ($element, index) {
      var clone = $element.cloneNode(true);
      $element.parentNode.replaceChild(clone, $element);
      _this2[index] = clone;
    });
    return this;
  },

  /**
   *
   * @returns {*}
   */
  val: function val() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length) {
      this.forEach(function ($element) {
        $element.value = args[0];
      });
      return this;
    }

    return this[0].value;
  },

  /**
   *
   * @returns {*}
   */
  attr: function attr() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (_typeof(args[0]) === 'object') {
      var attrsObj = args[0];
      var that = this;
      Object.keys(attrsObj).forEach(function (attr) {
        that.forEach(function ($element) {
          $element.setAttribute(attr, attrsObj[attr]);
        });
      });
      return this;
    }

    if (typeof args[0] === 'string' && args.length < 2) {
      return this[0].getAttribute(args[0]);
    }

    this.forEach(function ($element) {
      $element.setAttribute(args[0], args[1]);
    });
    return this;
  }
});
object_assign_default()(bala_umd_default.a, {
  extend: object_assign_default.a,

  /**
   * noop
   */
  noop: function noop() {},

  /**
   * render
   * 取值：<%= variable %>
   * 表达式：<% if {} %>
   * 例子：
   *  <div>
   *    <div class="weui-mask"></div>
   *    <div class="weui-dialog">
   *    <% if(typeof title === 'string'){ %>
   *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
   *    <% } %>
   *    <div class="weui-dialog__bd"><%=content%></div>
   *    <div class="weui-dialog__ft">
   *    <% for(var i = 0; i < buttons.length; i++){ %>
   *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
   *    <% } %>
   *    </div>
   *    </div>
   *  </div>
   * A very simple template engine
   * @param {String} tpl
   * @param {Object=} data
   * @returns {String}
   */
  render: function render(tpl, data) {
    var code = "var p=[];with(this){p.push('".concat(tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\''), "');}return p.join('');"); // eslint-disable-next-line no-new-func

    return Function(code).apply(data);
  },

  /**
   * getStyle 获得元素计算后的样式值
   * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
   */
  getStyle: function getStyle(el, styleProp) {
    var value;
    var defaultView = (el.ownerDocument || document).defaultView; // W3C standard way:

    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }

    if (el.currentStyle) {
      // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp]; // convert other units to pixels on IE

      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return function (value) {
          var oldLeft = el.style.left;
          var oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = "".concat(el.style.pixelLeft, "px");
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        }(value);
      }

      return value;
    }
  }
});
/* harmony default export */ var util = (bala_umd_default.a);
// EXTERNAL MODULE: ./src/dialog/dialog.html
var dialog = __webpack_require__(2);
var dialog_default = /*#__PURE__*/__webpack_require__.n(dialog);

// CONCATENATED MODULE: ./src/dialog/dialog.js
/* eslint-disable func-names */

/*
 * Tencent is pleased to support the open source community by making WeUI.js available.
 *
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *       http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */


var sington;
/**
 * dialog，弹窗，alert和confirm的父类
 *
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.content 弹窗的内容
 * @param {string=} options.className 弹窗的自定义类名
 * @param {array=} options.buttons 按钮配置项
 *
 * @param {string} [options.buttons[].label=确定] 按钮的文字
 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
 *
 * @example
 * weui.dialog({
 *   title: 'dialog标题',
 *   content: 'dialog内容',
 *   className: 'custom-classname',
 *   buttons: [{
 *     label: '取消',
 *     type: 'default',
 *     onClick: function () { alert('取消') }
 *   }, {
 *     label: '确定',
 *     type: 'primary',
 *     onClick: function () { alert('确定') }
 *   }]
 * });
 *
 * // 主动关闭
 * var $dialog = weui.dialog({...});
 * $dialog.hide(function() {
 *   console.log('`dialog` has been hidden');
 * });
 */

function dialog_dialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (sington) return sington;
  var isAndroid = util.os.android;
  options = util.extend({
    title: null,
    content: '',
    className: '',
    buttons: [{
      label: '确定',
      type: 'primary',
      onClick: util.noop
    }],
    isAndroid: isAndroid
  }, options);
  var $dialogWrap = util(util.render(dialog_default.a, options));
  var $dialog = $dialogWrap.find('.weui-dialog');
  var $mask = $dialogWrap.find('.weui-mask');

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $mask.addClass('weui-animate-fade-out');
    $dialog.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $dialogWrap.remove();
      sington = false;
      if (callback) callback();
    });
  }

  function hide(callback) {
    nHide(callback);
  }

  util('body').append($dialogWrap); // 不能直接把.weui-animate-fade-in加到$dialog，会导致mask的z-index有问题

  $mask.addClass('weui-animate-fade-in');
  $dialog.addClass('weui-animate-fade-in');
  $dialogWrap.on('click', '.weui-dialog__btn', function (evt) {
    var index = util(this).index();

    if (options.buttons[index].onClick) {
      if (options.buttons[index].onClick.call(this, evt) !== false) hide();
    } else {
      hide();
    }
  }).on('touchmove', function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
  });
  sington = $dialogWrap[0];
  sington.hide = hide;
  return sington;
}

/* harmony default export */ var src_dialog_dialog = (dialog_dialog);
// EXTERNAL MODULE: ./src/toast/toast.html
var toast = __webpack_require__(3);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// CONCATENATED MODULE: ./src/toast/toast.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var toast_sington;
/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 * @param {string=} options.icon 自定义图标, 默认 none
 *
 * @example
 * weui.toast('操作成功', 3000);
 * weui.toast('操作成功', {
 *   duration: 3000,
 *   className: 'custom-classname',
 *   icon: 'none',
 *   callback: function(){ console.log('close') }
 * });
 */

function toast_toast() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (toast_sington) return toast_sington;

  if (typeof options === 'number') {
    options = {
      duration: options
    };
  }

  if (typeof options === 'function') {
    options = {
      callback: options
    };
  }

  if (options.icon === 'success') {
    options.icon = 'weui-icon-success-no-circle';
  }

  if (options.icon === 'warn') {
    options.icon = 'weui-icon-warn weui-icon_msg';
  }

  if (options.icon === 'waiting') {
    options.icon = 'weui-icon-waiting weui-icon_msg';
  }

  options = util.extend({
    content: content,
    duration: 3000,
    callback: util.noop,
    className: '',
    icon: 'none'
  }, options);
  var $toastWrap = util(util.render(toast_default.a, options));
  var $toast = $toastWrap.find('.weui-toast');
  var $mask = $toastWrap.find('.weui-mask');
  util('body').append($toastWrap);
  $toast.addClass('weui-animate-fade-in');
  $mask.addClass('weui-animate-fade-in');
  setTimeout(function () {
    $mask.addClass('weui-animate-fade-out');
    $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $toastWrap.remove();
      toast_sington = false;
      options.callback();
    });
  }, options.duration);
  toast_sington = $toastWrap[0];
  return $toastWrap[0];
}

/* harmony default export */ var src_toast_toast = (toast_toast);
// EXTERNAL MODULE: ./src/loading/loading.html
var loading = __webpack_require__(4);
var loading_default = /*#__PURE__*/__webpack_require__.n(loading);

// CONCATENATED MODULE: ./src/loading/loading.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var loading_sington;
/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} [options.onShow] 在loading显示的时候回调
 *
 * @example
 * var loading = weui.loading('loading', {
 *   className: 'custom-classname',
 *     onShow: () => console.log('show')
 * });
 * setTimeout(function () {
 *   loading.hide(function() {
 *     console.log('`loading` has been hidden');
 *   });
 * }, 3000);
 */

function loading_loading() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (loading_sington) return loading_sington;
  options = util.extend({
    content: content,
    className: '',
    onShow: util.noop
  }, options);
  var $loadingWrap = util(util.render(loading_default.a, options));
  var $loading = $loadingWrap.find('.weui-toast');
  var $mask = $loadingWrap.find('.weui-mask');

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $mask.addClass('weui-animate-fade-out');
    $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $loadingWrap.remove();
      loading_sington = false;
      if (callback) callback();
    });
  }

  function hide(callback) {
    nHide(callback);
  }

  util('body').append($loadingWrap);
  $loading.addClass('weui-animate-fade-in').on('animationend webkitAnimationEnd', function () {
    options.onShow();
  });
  $mask.addClass('weui-animate-fade-in');
  loading_sington = $loadingWrap[0];
  loading_sington.hide = hide;
  return loading_sington;
}

/* harmony default export */ var src_loading_loading = (loading_loading);
// EXTERNAL MODULE: ./src/actionSheet/actionSheet.html
var actionSheet = __webpack_require__(5);
var actionSheet_default = /*#__PURE__*/__webpack_require__.n(actionSheet);

// CONCATENATED MODULE: ./src/actionSheet/actionSheet.js
/* eslint-disable func-names */

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var actionSheet_sington;
/**
 * actionsheet 弹出式菜单
 * @param {array} menus 上层的选项
 * @param {string} menus[].label 选项的文字
 * @param {function} menus[].onClick 选项点击时的回调
 *
 * @param {array} actions 下层的选项
 * @param {string} actions[].label 选项的文字
 * @param {function} actions[].onClick 选项点击时的回调
 *
 * @param {object=} options 配置项
 * @param {string=} options.title actionSheet的title，如果isAndroid=true，则不会显示
 * @param {string=} options.className 自定义类名
 * @param {function=} [options.onClose] actionSheet关闭后的回调
 *
 * @example
 * weui.actionSheet([
 *   {
 *     label: '拍照',
 *     onClick: function () {
 *       console.log('拍照');
 *     }
 *   }, {
 *     label: '从相册选择',
 *       onClick: function () {
 *         console.log('从相册选择');
 *       }
 *   }, {
 *     label: '其他',
 *       onClick: function () {
 *         console.log('其他');
 *     }
 *   }
 * ], [
 *   {
 *     label: '取消',
 *       onClick: function () {
 *         console.log('取消');
 *       }
 *   }
 * ], {
 *   className: 'custom-classname',
 *   onClose: function(){
 *     console.log('关闭');
 *   }
 * });
 */

function actionSheet_actionSheet() {
  var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (actionSheet_sington) return actionSheet_sington;
  var isAndroid = util.os.android;
  options = util.extend({
    menus: menus,
    actions: actions,
    title: '',
    className: '',
    isAndroid: isAndroid,
    onClose: util.noop
  }, options);
  var $actionSheetWrap = util(util.render(actionSheet_default.a, options));
  var $actionSheet = $actionSheetWrap.find('.weui-actionsheet');
  var $actionSheetMask = $actionSheetWrap.find('.weui-mask');

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-out' : 'weui-animate-slide-down');
    $actionSheetMask.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $actionSheetWrap.remove();
      actionSheet_sington = false;
      options.onClose();
      if (callback) callback();
    });
  }

  function hide(callback) {
    nHide(callback);
  }

  util('body').append($actionSheetWrap); // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题

  util.getStyle($actionSheet[0], 'transform');
  $actionSheet.addClass(options.isAndroid ? 'weui-animate-fade-in' : 'weui-animate-slide-up');
  $actionSheetMask.addClass('weui-animate-fade-in').on('click', function () {
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__menu').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(this).index();
    menus[index].onClick.call(this, evt);
    hide();
  });
  $actionSheetWrap.find('.weui-actionsheet__action').on('click', '.weui-actionsheet__cell', function (evt) {
    var index = util(this).index();
    actions[index].onClick.call(this, evt);
    hide();
  });
  actionSheet_sington = $actionSheetWrap[0];
  actionSheet_sington.hide = hide;
  return actionSheet_sington;
}

/* harmony default export */ var src_actionSheet_actionSheet = (actionSheet_actionSheet);
// CONCATENATED MODULE: ./src/picker/cron.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-bitwise */

/* eslint-disable no-continue */

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
var regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g;
var constraints = [[1, 31], [1, 12], [0, 6]];
/**
 * Schedule
 */

var Schedule = /*#__PURE__*/function () {
  function Schedule(fields, start, end) {
    _classCallCheck(this, Schedule);

    /**
         * dayOfMonth
         * @type {Array}
         */
    this.nDates = fields[0];
    /**
         * month
         * @type {Array}
         */

    this.nMonths = fields[1];
    /**
         * dayOfWeek
         * @type {Array}
         */

    this.nDays = fields[2];
    /**
         * start
         * @type {Date}
         */

    this.nStart = start;
    /**
         * end
         * @type {Date}
         */

    this.nEnd = end;
    /**
         * cursor
         * @type {Date}
         * @private
         */

    this.nPointer = start;
  }

  _createClass(Schedule, [{
    key: "nFindNext",
    value: function nFindNext() {
      var next;

      for (;;) {
        if (this.nEnd.getTime() - this.nPointer.getTime() < 0) {
          throw new Error("out of range, end is ".concat(this.nEnd, ", current is ").concat(this.nPointer));
        }

        var month = this.nPointer.getMonth();
        var date = this.nPointer.getDate();
        var day = this.nPointer.getDay();

        if (this.nMonths.indexOf(month + 1) === -1) {
          this.nPointer.setMonth(month + 1);
          this.nPointer.setDate(1);
          continue;
        }

        if (this.nDates.indexOf(date) === -1) {
          this.nPointer.setDate(date + 1);
          continue;
        }

        if (this.nDays.indexOf(day) === -1) {
          this.nPointer.setDate(date + 1);
          continue;
        }

        next = new Date(this.nPointer);
        break;
      }

      return next;
    }
    /**
       * fetch next data
       */

  }, {
    key: "next",
    value: function next() {
      var value = this.nFindNext(); // move next date

      this.nPointer.setDate(this.nPointer.getDate() + 1);
      return {
        value: value,
        done: !this.hasNext()
      };
    }
    /**
       * has next
       * @returns {boolean}
       */

  }, {
    key: "hasNext",
    value: function hasNext() {
      try {
        this.nFindNext();
        return true;
      } catch (e) {
        return false;
      }
    }
  }]);

  return Schedule;
}();

function parseField(field, constraints) {
  var low = constraints[0];
  var high = constraints[1];
  var result = []; // * 号等于最低到最高

  field = field.replace(/\*/g, "".concat(low, "-").concat(high)); // 处理 1,2,5-9 这种情况

  var fields = field.split(',');

  for (var i = 0, len = fields.length; i < len; i++) {
    var f = fields[i];

    if (f.match(regex)) {
      f.replace(regex, function (_$0, lower, upper, step) {
        // ref to `cron-parser`
        step = parseInt(step) || 1; // Positive integer higher than constraints[0]

        lower = Math.min(Math.max(low, ~~Math.abs(lower)), high); // Positive integer lower than constraints[1]

        upper = upper ? Math.min(high, ~~Math.abs(upper)) : lower; // Count from the lower barrier to the upper

        for (var pointer = lower; pointer <= upper; pointer += step) {
          result.push(pointer);
        }
      });
    }
  }

  return result;
}
/**
 *
 * @param expr
 * @param start
 * @param end
 * @returns {*}
 */


function parse(expr, start, end) {
  var atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/);
  var fields = [];
  atoms.forEach(function (atom, index) {
    var constraint = constraints[index];
    fields.push(parseField(atom, constraint));
  });
  return new Schedule(fields, start, end);
}

/* harmony default export */ var cron = ({
  parse: parse
});
// CONCATENATED MODULE: ./src/picker/scroll.js
function scroll_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { scroll_typeof = function _typeof(obj) { return typeof obj; }; } else { scroll_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return scroll_typeof(obj); }

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * set transition
 * @param $target
 * @param time
 */

var setTransition = function setTransition($target, time) {
  return $target.css({
    '-webkit-transition': "all ".concat(time, "s"),
    transition: "all ".concat(time, "s")
  });
};
/**
 * set translate
 */


var setTranslate = function setTranslate($target, diff) {
  return $target.css({
    '-webkit-transform': "translate3d(0, ".concat(diff, "px, 0)"),
    transform: "translate3d(0, ".concat(diff, "px, 0)")
  });
};
/**
 * @desc get index of middle item
 * @param items
 * @returns {number}
 */


var getDefaultIndex = function getDefaultIndex(items) {
  var current = Math.floor(items.length / 2);
  var count = 0;

  while (!!items[current] && items[current].disabled) {
    current = (current += 1) % items.length;
    count += 1;

    if (count > items.length) {
      throw new Error('No selectable item.');
    }
  }

  return current;
};

var getDefaultTranslate = function getDefaultTranslate(offset, rowHeight, items) {
  var currentIndex = getDefaultIndex(items);
  return (offset - currentIndex) * rowHeight;
};
/**
 * get max translate
 * @param offset
 * @param rowHeight
 * @returns {number}
 */


var getMax = function getMax(offset, rowHeight) {
  return offset * rowHeight;
};
/**
 * get min translate
 * @param offset
 * @param rowHeight
 * @param length
 * @returns {number}
 */


var getMin = function getMin(offset, rowHeight, length) {
  return -(rowHeight * (length - offset - 1));
};

util.fn.scroll = function scroll(options) {
  var _this = this;

  var defaults = util.extend({
    items: [],
    // 数据
    scrollable: '.weui-picker__content',
    // 滚动的元素
    offset: 2,
    // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
    rowHeight: 48,
    // 列表每一行的高度
    onChange: util.noop,
    // onChange回调
    temp: null,
    // translate的缓存
    bodyHeight: 5 * 48 // picker的高度，用于辅助点击滚动的计算

  }, options);
  var items = defaults.items.map(function (item) {
    return "<div class=\"weui-picker__item".concat(item.disabled ? ' weui-picker__item_disabled' : '', "\">").concat(scroll_typeof(item) === 'object' ? item.label : item, "</div>");
  }).join('');
  var $this = util(this);
  $this.find('.weui-picker__content').html(items);
  var $scrollable = $this.find(defaults.scrollable); // 可滚动的元素

  var start; // 保存开始按下的位置

  var end; // 保存结束时的位置

  var startTime; // 开始触摸的时间

  var translate; // 缓存 translate

  var points = []; // 记录移动点
  // 首次触发选中事件
  // 如果有缓存的选项，则用缓存的选项，否则使用中间值。

  if (defaults.temp !== null && defaults.temp < defaults.items.length) {
    var index = defaults.temp;
    defaults.onChange.call(this, defaults.items[index], index);
    translate = (defaults.offset - index) * defaults.rowHeight;
  } else {
    var _index = getDefaultIndex(defaults.items);

    defaults.onChange.call(this, defaults.items[_index], _index);
    translate = getDefaultTranslate(defaults.offset, defaults.rowHeight, defaults.items);
  }

  setTranslate($scrollable, translate);

  var stop = function stop(diff) {
    translate += diff; // 移动到最接近的那一行

    translate = Math.round(translate / defaults.rowHeight) * defaults.rowHeight;
    var max = getMax(defaults.offset, defaults.rowHeight);
    var min = getMin(defaults.offset, defaults.rowHeight, defaults.items.length); // 不要超过最大值或者最小值

    if (translate > max) {
      translate = max;
    }

    if (translate < min) {
      translate = min;
    } // 如果是 disabled 的就跳过


    var index = defaults.offset - translate / defaults.rowHeight;

    while (!!defaults.items[index] && defaults.items[index].disabled) {
      // eslint-disable-next-line no-unused-expressions
      diff > 0 ? index += 1 : index -= 1;
    }

    translate = (defaults.offset - index) * defaults.rowHeight;
    setTransition($scrollable, 0.3);
    setTranslate($scrollable, translate); // 触发选择事件

    defaults.onChange.call(_this, defaults.items[index], index);
  };

  function nStart(pageY) {
    start = pageY;
    startTime = +new Date();
  }

  function nMove(pageY) {
    end = pageY;
    var diff = end - start;
    setTransition($scrollable, 0);
    setTranslate($scrollable, translate + diff);
    startTime = +new Date();
    points.push({
      time: startTime,
      y: end
    });

    if (points.length > 40) {
      points.shift();
    }
  }

  function nEnd(pageY) {
    if (!start) return;
    /**
     * 思路:
     * 0. touchstart 记录按下的点和时间
     * 1. touchmove 移动时记录前 40个经过的点和时间
     * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
     *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
     *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
     */

    var endTime = new Date().getTime();
    var relativeY = $this[0].getBoundingClientRect().top + defaults.bodyHeight / 2;
    end = pageY; // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动

    if (endTime - startTime > 100) {
      // 如果end和start相差小于10，则视为
      if (Math.abs(end - start) > 10) {
        stop(end - start);
      } else {
        stop(relativeY - end);
      }
    } else if (Math.abs(end - start) > 10) {
      var endPos = points.length - 1;
      var startPos = endPos;

      for (var i = endPos; i > 0 && startTime - points[i].time < 100; i -= 1) {
        startPos = i;
      }

      if (startPos !== endPos) {
        var ep = points[endPos];
        var sp = points[startPos];
        var t = ep.time - sp.time;
        var s = ep.y - sp.y;
        var v = s / t; // 出手时的速度

        var diff = v * 150 + (end - start); // 滑行 150ms,这里直接影响“灵敏度”

        stop(diff);
      } else {
        stop(0);
      }
    } else {
      stop(relativeY - end);
    }

    start = null;
  }
  /**
   * 因为现在没有移除匿名函数的方法，所以先暴力移除（offAll），并且改变$scrollable。
   */


  $scrollable = $this.offAll().on('touchstart', function (evt) {
    nStart(evt.changedTouches[0].pageY);
  }).on('touchmove', function (evt) {
    nMove(evt.changedTouches[0].pageY);
    evt.preventDefault();
  }).on('touchend', function (evt) {
    nEnd(evt.changedTouches[0].pageY);
  }).find(defaults.scrollable); // 判断是否支持touch事件 https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js

  var isSupportTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

  if (!isSupportTouch) {
    $this.on('mousedown', function (evt) {
      nStart(evt.pageY);
      evt.stopPropagation();
      evt.preventDefault();
    }).on('mousemove', function (evt) {
      if (!start) return;
      nMove(evt.pageY);
      evt.stopPropagation();
      evt.preventDefault();
    }).on('mouseup mouseleave', function (evt) {
      nEnd(evt.pageY);
      evt.stopPropagation();
      evt.preventDefault();
    });
  }
};
// CONCATENATED MODULE: ./src/picker/util.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
var depthOf = function depthOf(object) {
  var depth = 1;

  if (object.children && object.children[0]) {
    depth = depthOf(object.children[0]) + 1;
  }

  return depth;
};
// EXTERNAL MODULE: ./src/picker/picker.html
var picker = __webpack_require__(6);
var picker_default = /*#__PURE__*/__webpack_require__.n(picker);

// EXTERNAL MODULE: ./src/picker/group.html
var group = __webpack_require__(7);
var group_default = /*#__PURE__*/__webpack_require__.n(group);

// CONCATENATED MODULE: ./src/picker/picker.js
var picker_this = undefined;

function picker_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { picker_typeof = function _typeof(obj) { return typeof obj; }; } else { picker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return picker_typeof(obj); }

/*
 * Tencent is pleased to support the open source community by making WeUI.js available.
 *
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *       http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */







function Result(item) {
  if (picker_typeof(item) !== "object") {
    item = {
      label: item,
      value: item
    };
  }

  util.extend(this, item);
}

Result.prototype.toString = function () {
  return picker_this.value;
};

Result.prototype.valueOf = function () {
  return picker_this.value;
};

var picker_sington;
var temp = {}; // temp 存在上一次滑动的位置

/**
 * picker 多列选择器。
 * @param {array} items picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。
 * @param {Object} options 配置项
 * @param {number=} [options.depth] picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。
 * @param {string=} [options.id=default] 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分）
 * @param {string=} [options.className] 自定义类名
 * @param {string=} [options.title] 自定义标题
 * @param {string=} [options.desc] 自定义描述
 * @param {string=} [options.container] 指定容器
 * @param {array=} [options.defaultValue] 默认选项的value数组
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 * @param {function=} [options.onClose] picker关闭后的回调
 *
 * @example
 * // 单列picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     disabled: true // 不可用
 * },
 * {
 *     label: '火车票',
 *     value: 1
 * },
 * {
 *     label: '汽车票',
 *     value: 3
 * },
 * {
 *     label: '公车票',
 *     value: 4,
 * }
 * ], {
 *    className: 'custom-classname',
 *    container: 'body',
 *    defaultValue: [3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'singleLinePicker'
 * });
 *
 * @example
 * // 多列picker
 * weui.picker([
 *     {
 *         label: '1',
 *         value: '1'
 *     }, {
 *         label: '2',
 *         value: '2'
 *     }, {
 *         label: '3',
 *         value: '3'
 *     }
 * ], [
 *     {
 *         label: 'A',
 *         value: 'A'
 *     }, {
 *         label: 'B',
 *         value: 'B'
 *     }, {
 *         label: 'C',
 *         value: 'C'
 *     }
 * ], {
 *     defaultValue: ['3', 'A'],
 *     onChange: function (result) {
 *         console.log(result);
 *     },
 *     onConfirm: function (result) {
 *         console.log(result);
 *     },
 *     id: 'multiPickerBtn'
 * });
 *
 * @example
 * // 级联picker
 * weui.picker([
 * {
 *     label: '飞机票',
 *     value: 0,
 *     children: [
 *         {
 *             label: '经济舱',
 *             value: 1
 *         },
 *         {
 *             label: '商务舱',
 *             value: 2
 *         }
 *     ]
 * },
 * {
 *     label: '火车票',
 *     value: 1,
 *     children: [
 *         {
 *             label: '卧铺',
 *             value: 1,
 *             disabled: true // 不可用
 *         },
 *         {
 *             label: '坐票',
 *             value: 2
 *         },
 *         {
 *             label: '站票',
 *             value: 3
 *         }
 *     ]
 * },
 * {
 *     label: '汽车票',
 *     value: 3,
 *     children: [
 *         {
 *             label: '快班',
 *             value: 1
 *         },
 *         {
 *             label: '普通',
 *             value: 2
 *         }
 *     ]
 * }
 * ], {
 *    className: 'custom-classname',
 *    container: 'body',
 *    defaultValue: [1, 3],
 *    onChange: function (result) {
 *        console.log(result)
 *    },
 *    onConfirm: function (result) {
 *        console.log(result)
 *    },
 *    id: 'doubleLinePicker'
 * });
 */

function picker_picker() {
  var _ref;

  if (picker_sington) return picker_sington; // 配置项

  var options = (_ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]);
  var defaults = util.extend({
    id: "default",
    className: "",
    container: "body",
    title: "",
    desc: "",
    primarytext: "",
    closetext: "",
    onChange: util.noop,
    onConfirm: util.noop,
    onClose: util.noop
  }, options); // 数据处理

  var items;
  var isMulti = false; // 是否多列的类型

  if (arguments.length > 2) {
    var i = 0;
    items = [];

    while (i < arguments.length - 1) {
      var _i;

      items.push((_i = i++, _i < 0 || arguments.length <= _i ? undefined : arguments[_i]));
    }

    isMulti = true;
  } else {
    items = arguments.length <= 0 ? undefined : arguments[0];
  } // 获取缓存


  temp[defaults.id] = temp[defaults.id] || [];
  var result = [];
  var lineTemp = temp[defaults.id];
  var $picker = util(util.render(picker_default.a, defaults));
  var depth = options.depth || (isMulti ? items.length : depthOf(items[0]));
  var groups = ""; // 显示与隐藏的方法

  function show() {
    util(defaults.container).append($picker); // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题

    util.getStyle($picker[0], "transform"); // 更改标题

    $picker.find(".weui-half-screen-dialog__title").html(defaults.title);
    $picker.find(".primarytext").html(defaults.primarytext);
    $picker.find(".closetext").html(defaults.closetext);
    $picker.find(".weui-mask").addClass("weui-animate-fade-in");
    $picker.find(".weui-picker").addClass("weui-animate-slide-up");
  }

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $picker.find(".weui-mask").addClass("weui-animate-fade-out");
    $picker.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd", function () {
      $picker.remove();
      picker_sington = false;
      defaults.onClose();
      if (callback) callback();
    });
  }

  function hide(callback) {
    nHide(callback);
  } // 初始化滚动的方法


  function scroll(items, level) {
    if (lineTemp[level] === undefined && defaults.defaultValue && defaults.defaultValue[level] !== undefined) {
      // 没有缓存选项，而且存在defaultValue
      var defaultVal = defaults.defaultValue[level];
      var index = 0;
      var len = items.length;

      if (picker_typeof(items[index]) === "object") {
        for (; index < len; ++index) {
          if (defaultVal === items[index].value) break;
        }
      } else {
        for (; index < len; ++index) {
          if (defaultVal === items[index]) break;
        }
      }

      if (index < len) {
        lineTemp[level] = index;
      } else {
        console.warn("Picker has not match defaultValue: ".concat(defaultVal));
      }
    }

    $picker.find(".weui-picker__group").eq(level).scroll({
      items: items,
      temp: lineTemp[level],
      onChange: function onChange(item, index) {
        // 为当前的result赋值。
        if (item) {
          result[level] = new Result(item);
        } else {
          result[level] = null;
        }

        lineTemp[level] = index;

        if (isMulti) {
          if (result.length === depth) {
            defaults.onChange(result);
          }
        } else {
          /**
           * @子列表处理
           * 1. 在没有子列表，或者值列表的数组长度为0时，隐藏掉子列表。
           * 2. 滑动之后发现重新有子列表时，再次显示子列表。
           *
           * @回调处理
           * 1. 因为滑动实际上是一层一层传递的：父列表滚动完成之后，会call子列表的onChange，从而带动子列表的滑动。
           * 2. 所以，使用者的传进来onChange回调应该在最后一个子列表滑动时再call
           */
          // eslint-disable-next-line no-lonely-if
          if (item.children && item.children.length > 0) {
            $picker.find(".weui-picker__group").eq(level + 1).show(); // 不是多列的情况下才继续处理children

            if (!isMulti) scroll(item.children, level + 1);
          } else {
            // 如果子列表test不通过，子孙列表都隐藏。
            var $items = $picker.find(".weui-picker__group");
            $items.forEach(function (ele, index) {
              if (index > level) {
                util(ele).hide();
              }
            });
            result.splice(level + 1);
            defaults.onChange(result);
          }
        }
      },
      onConfirm: defaults.onConfirm
    });
  }

  for (var index = depth; index > 0; index -= 1) {
    groups += group_default.a;
  }

  $picker.find(".weui-picker__bd").html(groups);
  show();

  if (isMulti) {
    items.forEach(function (item, index) {
      scroll(item, index);
    });
  } else {
    scroll(items, 0);
  }

  $picker.on("click", ".weui-mask", function () {
    hide();
  }).on("click", ".weui-picker__btn", function () {
    hide();
  }).on("click", "#weui-picker-confirm", function () {
    defaults.onConfirm(result);
  });
  picker_sington = $picker[0];
  picker_sington.hide = hide;
  return picker_sington;
}
/**
 * datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。
 * @param options 配置项
 * @param {string=} [options.id=datePicker] 作为picker的唯一标识
 * @param {number=|string|Date} [options.start=2000] 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date
 * @param {number=|string|Date} [options.end=2030] 结束年份，同上
 * @param {string=} [options.cron=* * *] cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六）
 * @param {string=} [options.className] 自定义类名
 * @param {array=} [options.defaultValue] 默认选项的value数组, 如 [1991, 6, 9]
 * @param {function=} [options.onChange] 在picker选中的值发生变化的时候回调
 * @param {function=} [options.onConfirm] 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。
 *
 *@example
 * // 示例1：
 * weui.datePicker({
 *     start: 1990,
 *     end: 2000,
 *     defaultValue: [1991, 6, 9],
 *     onChange: function(result){
 *         console.log(result);
 *     },
 *     onConfirm: function(result){
 *         console.log(result);
 *     },
 *     id: 'datePicker'
 * });
 *
 * // 示例2：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      defaultValue: [2020, 6, 9],
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 *
 *  // 示例3：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      cron: '* * 0,6',  // 每逢周日、周六
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 *
 *  // 示例4：
 * weui.datePicker({
 *      start: new Date(), // 从今天开始
 *      end: 2030,
 *      cron: '1-10 * *',  // 每月1日-10日
 *      onChange: function(result){
 *          console.log(result);
 *      },
 *      onConfirm: function(result){
 *          console.log(result);
 *      },
 *      id: 'datePicker'
 *  });
 */


function datePicker(options) {
  var nowDate = new Date();
  var defaults = util.extend({
    id: "datePicker",
    onChange: util.noop,
    onConfirm: util.noop,
    start: nowDate.getFullYear() - 20,
    end: nowDate.getFullYear() + 20,
    defaultValue: [nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate()],
    cron: "* * *"
  }, options); // 兼容原来的 start、end 传 Number 的用法

  if (typeof defaults.start === "number") {
    defaults.start = new Date("".concat(defaults.start, "/01/01"));
  } else if (typeof defaults.start === "string") {
    defaults.start = new Date(defaults.start.replace(/-/g, "/"));
  }

  if (typeof defaults.end === "number") {
    defaults.end = new Date("".concat(defaults.end, "/12/31"));
  } else if (typeof defaults.end === "string") {
    defaults.end = new Date(defaults.end.replace(/-/g, "/"));
  }

  var findBy = function findBy(array, key, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      var _obj = array[i];

      if (_obj[key] === value) {
        return _obj;
      }
    }
  };

  var date = [];
  var interval = cron.parse(defaults.cron, defaults.start, defaults.end);
  var obj;

  do {
    obj = interval.next();
    var year = obj.value.getFullYear();
    var month = obj.value.getMonth() + 1;
    var day = obj.value.getDate();
    var Y = findBy(date, "value", year);

    if (!Y) {
      Y = {
        label: "".concat(year, "\u5E74"),
        value: year,
        children: []
      };
      date.push(Y);
    }

    var M = findBy(Y.children, "value", month);

    if (!M) {
      M = {
        label: "".concat(month, "\u6708"),
        value: month,
        children: []
      };
      Y.children.push(M);
    }

    M.children.push({
      label: "".concat(day, "\u65E5"),
      value: day
    });
  } while (!obj.done);

  return picker_picker(date, defaults);
}


// EXTERNAL MODULE: ./src/gallery/gallery.html
var gallery = __webpack_require__(8);
var gallery_default = /*#__PURE__*/__webpack_require__.n(gallery);

// CONCATENATED MODULE: ./src/gallery/gallery.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var gallery_sington;
/**
 * gallery 带删除按钮的图片预览，主要是配合图片上传使用
 * @param {string} url gallery显示的图片的url
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} options.onDelete 点击删除图片时的回调
 *
 * @example
 * var gallery = weui.gallery(url, {
 *   className: 'custom-classname',
 *   onDelete: function() {
 *     if (confirm('确定删除该图片？')){ console.log('删除'); }
 *       gallery.hide(function() {
 *         console.log('`gallery` has been hidden');
 *       });
 *     }
 * });
 */

function gallery_gallery(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (gallery_sington) return gallery_sington;
  options = util.extend({
    url: url,
    className: '',
    showDel: false,
    onDelete: util.noop
  }, options); // const $gallery = $($.render(tpl, $.extend({
  //     url: url
  // }, options)));

  var $gallery = util(util.render(gallery_default.a, options));

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $gallery.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
      $gallery.remove();
      gallery_sington = false;
      if (callback) callback();
    });
  }

  function hide(callback) {
    nHide(callback);
  }

  util('body').append($gallery);
  $gallery.find('.weui-gallery__img').on('click', function () {
    hide();
  });
  $gallery.find('.weui-gallery__del').on('click', function (e) {
    var self = e.target;
    options.onDelete.call(self, url);
  });
  $gallery.show().addClass('weui-animate-fade-in');
  gallery_sington = $gallery[0];
  gallery_sington.hide = hide;
  return gallery_sington;
}

/* harmony default export */ var src_gallery_gallery = (gallery_gallery);
// CONCATENATED MODULE: ./src/alert/alert.js
function alert_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { alert_typeof = function _typeof(obj) { return typeof obj; }; } else { alert_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return alert_typeof(obj); }

/*
 * Tencent is pleased to support the open source community by making WeUI.js available.
 *
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *       http://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * alert 警告弹框，功能类似于浏览器自带的 alert 弹框，用于提醒、警告用户简单扼要的信息，只有一个“确认”按钮，点击“确认”按钮后关闭弹框。
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * weui.alert('普通的alert');
 *
 * weui.alert('带回调的alert', function () {
 *   console.log('ok')
 * });
 *
 * var alertDom = weui.alert('手动关闭的alert', function () {
 *   return false; // 不关闭弹窗，可用alertDom.hide()来手动关闭
 * });
 *
 * weui.alert('自定义标题的alert', {
 *   title: '自定义标题'
 * });
 *
 * weui.alert('带回调的自定义标题的alert', function () {
 *   console.log('ok')
 * }, {
 *   title: '自定义标题'
 * });
 *
 * weui.alert('自定义按钮的alert', {
 *   title: '自定义按钮的alert',
 *   buttons: [{
 *     label: 'OK',
 *     type: 'primary',
 *     onClick: function () {
 *       console.log('ok')
 *     }
 *   }]
 * });
 *
 * // 多次使用
 * var alert = weui.alert('hello');
 * alert.hide(function () {
 *   weui.alert('world');
 * });
 */

function alert_alert() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util.noop;
  var options = arguments.length > 2 ? arguments[2] : undefined;

  if (alert_typeof(yes) === 'object') {
    options = yes;
    yes = util.noop;
  }

  options = util.extend({
    content: content,
    buttons: [{
      label: '确定',
      type: 'primary',
      onClick: yes
    }]
  }, options);
  return src_dialog_dialog(options);
}

/* harmony default export */ var src_alert_alert = (alert_alert);
// CONCATENATED MODULE: ./src/confirm/confirm.js
function confirm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { confirm_typeof = function _typeof(obj) { return typeof obj; }; } else { confirm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return confirm_typeof(obj); }

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


/**
 * 确认弹窗
 * @param {string} content 弹窗内容
 * @param {function=} yes 点击确定按钮的回调
 * @param {function=} no  点击取消按钮的回调
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.className 自定义类名
 * @param {array=} options.buttons 按钮配置项，详情参考dialog
 *
 * @example
 * weui.confirm('普通的confirm');
 * weui.confirm('自定义标题的confirm', { title: '自定义标题' });
 * weui.confirm('带回调的confirm', function(){ console.log('yes') }, function(){ console.log('no') });
 * var confirmDom = weui.confirm('手动关闭的confirm', function(){
 *   return false; // 不关闭弹窗，可用confirmDom.hide()来手动关闭
 * });
 * weui.confirm('带回调的自定义标题的confirm', function(){ console.log('yes') }, function(){ console.log('no') }, {
 *   title: '自定义标题'
 * });
 * weui.confirm('自定义按钮的confirm', {
 *   title: '自定义按钮的confirm',
 *   buttons: [{
 *     abel: 'NO',
 *     type: 'default',
 *     onClick: function(){ console.log('no') }
 *   }, {
 *     label: 'YES',
 *     type: 'primary',
 *     onClick: function(){ console.log('yes') }
 *   }]
 * });
 */

function confirm_confirm() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util.noop;
  var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : util.noop;
  var options = arguments.length > 3 ? arguments[3] : undefined;

  if (confirm_typeof(yes) === 'object') {
    options = yes;
    yes = util.noop;
  } else if (confirm_typeof(no) === 'object') {
    options = no;
    no = util.noop;
  }

  options = util.extend({
    content: content,
    buttons: [{
      label: '取消',
      type: 'default',
      onClick: no
    }, {
      label: '确定',
      type: 'primary',
      onClick: yes
    }]
  }, options);
  return src_dialog_dialog(options);
}

/* harmony default export */ var src_confirm_confirm = (confirm_confirm);
// EXTERNAL MODULE: ./src/topTips/topTips.html
var topTips = __webpack_require__(9);
var topTips_default = /*#__PURE__*/__webpack_require__.n(topTips);

// CONCATENATED MODULE: ./src/topTips/topTips.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/


var nToptips = null;
/**
 * toptips 顶部报错提示
 * @param {string} content 报错的文字
 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
 * @param {number=} [options.duration=3000] 多少毫秒后消失
 * @param {string=} options.className 自定义类名
 * @param {function=} options.callback 消失后的回调
 *
 * @example
 * weui.topTips('请填写正确的字段');
 * weui.topTips('请填写正确的字段', 3000);
 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
 * weui.topTips('请填写正确的字段', {
 *   duration: 3000,
 *   className: 'custom-classname',
 *   callback: function(){ console.log('close') }
 * });
 *
 * // 主动关闭
 * var $topTips = weui.topTips('请填写正确的字段');
 * $topTips.hide(function() {
 *    console.log('`topTips` has been hidden');
 * });
 */

function topTips_topTips(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'number') {
    options = {
      duration: options
    };
  }

  if (typeof options === 'function') {
    options = {
      callback: options
    };
  }

  options = util.extend({
    content: content,
    duration: 3000,
    callback: util.noop,
    className: ''
  }, options);
  var $topTips = util(util.render(topTips_default.a, options));

  function nHide(callback) {
    // eslint-disable-next-line no-func-assign
    nHide = util.noop; // 防止二次调用导致报错

    $topTips.remove();
    if (callback) callback();
    options.callback();
    nToptips = null;
  }

  function hide(callback) {
    nHide(callback);
  }

  util('body').append($topTips);

  if (nToptips) {
    clearTimeout(nToptips.timeout);
    nToptips.hide();
  }

  nToptips = {
    hide: hide
  };
  nToptips.timeout = setTimeout(hide, options.duration);
  $topTips[0].hide = hide;
  return $topTips[0];
}

/* harmony default export */ var src_topTips_topTips = (topTips_topTips);
// CONCATENATED MODULE: ./src/searchBar/searchBar.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * searchbar 搜索框，主要实现搜索框组件一些显隐逻辑
 * @param {string} selector searchbar的selector
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-search-bar" id="searchBar">
 *     <form class="weui-search-bar__form">
 *         <div class="weui-search-bar__box">
 *             <i class="weui-icon-search"></i>
 *             <input type="search" class="weui-search-bar__input" placeholder="搜索" required="">
 *             <a href="javascript:" class="weui-icon-clear"></a>
 *         </div>
 *         <label class="weui-search-bar__label">
 *             <i class="weui-icon-search"></i>
 *             <span>搜索</span>
 *         </label>
 *     </form>
 *     <a href="javascript:" class="weui-search-bar__cancel-btn">取消</a>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.searchBar('#searchBar');
 * ```
 */

function searchBar(selector) {
  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $searchBar = util(ele);
    var $searchLabel = $searchBar.find('.weui-search-bar__label');
    var $searchInput = $searchBar.find('.weui-search-bar__input');
    var $searchClear = $searchBar.find('.weui-icon-clear');
    var $searchCancel = $searchBar.find('.weui-search-bar__cancel-btn');

    function cancelSearch() {
      $searchInput.val('');
      $searchBar.removeClass('weui-search-bar_focusing');
    }

    $searchLabel.on('click', function () {
      $searchBar.addClass('weui-search-bar_focusing');
      $searchInput[0].focus();
    });
    $searchInput.on('blur', function (e) {
      var self = e.target;
      if (!self.value.length) cancelSearch();
    });
    $searchClear.on('click', function () {
      $searchInput.val('');
      $searchInput[0].focus();
    });
    $searchCancel.on('click', function () {
      cancelSearch();
      $searchInput[0].blur();
    });
  });
  return $eles;
}

/* harmony default export */ var searchBar_searchBar = (searchBar);
// CONCATENATED MODULE: ./src/tab/tab.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * tab tab导航栏
 * @param {string} selector tab的selector
 * @param {object=} options 配置项
 * @param {number=} [options.defaultIndex=0] 初始展示的index
 * @param {function=} options.onChange 点击tab时，返回对应的index
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-tab" id="tab">
 *     <div class="weui-navbar">
 *         <div class="weui-navbar__item">反馈</div>
 *         <div class="weui-navbar__item">表单</div>
 *         <div class="weui-navbar__item">上传</div>
 *         <div class="weui-navbar__item">其它</div>
 *     </div>
 *     <div class="weui-tab__panel">
 *         <div class="weui-tab__content">反馈页</div>
 *         <div class="weui-tab__content">表单页</div>
 *         <div class="weui-tab__content">上传页</div>
 *         <div class="weui-tab__content">其它页</div>
 *     </div>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.tab('#tab',{
 *   defaultIndex: 0,
 *   onChange: function(index){
 *     console.log(index);
 *   }
 * });
 * ```
 */

function tab(selector) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $eles = util(selector);
  options = util.extend({
    defaultIndex: 0,
    onChange: util.noop
  }, options);
  $eles.forEach(function (ele) {
    var $tab = util(ele);
    var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
    var $tabContents = $tab.find('.weui-tab__content');
    $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
    $tabContents.eq(options.defaultIndex).show();
    $tabItems.on('click', function (e) {
      var self = e.target;
      var $this = util(self);
      var index = $this.index();
      $tabItems.removeClass('weui-bar__item_on');
      $this.addClass('weui-bar__item_on');
      $tabContents.hide();
      $tabContents.eq(index).show();
      options.onChange.call(_this, index);
    });
  });
  return this;
}

/* harmony default export */ var tab_tab = (tab);
// CONCATENATED MODULE: ./src/form/form.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/



function nFindCellParent(ele) {
  if (!ele || !ele.classList) return null;
  if (ele.classList.contains('weui-cell')) return ele;
  return nFindCellParent(ele.parentNode);
}

function nValidate($input, $form, regexp) {
  var input = $input[0];
  var val = $input.val();

  if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') {
    var reg = input.getAttribute('pattern') || '';

    if (input.type === 'radio') {
      var radioInputs = $form.find("input[type=\"radio\"][name=\"".concat(input.name, "\"]"));

      for (var i = 0, len = radioInputs.length; i < len; i++) {
        if (radioInputs[i].checked) return null;
      }

      return 'empty';
    }

    if (input.type === 'checkbox') {
      if (reg) {
        var checkboxInputs = $form.find("input[type=\"checkbox\"][name=\"".concat(input.name, "\"]"));
        var regs = reg.replace(/[{\s}]/g, '').split(',');
        var count = 0;

        if (regs.length !== 2) {
          throw new Error("".concat(input.outerHTML, " regexp is wrong."));
        }

        checkboxInputs.forEach(function (checkboxInput) {
          if (checkboxInput.checked) count += 1;
        });

        if (regs[1] === '') {
          // {0,}
          if (count >= parseInt(regs[0])) {
            return null;
          }

          return count === 0 ? 'empty' : 'notMatch';
        } // {0,2}


        if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
          return null;
        }

        return count === 0 ? 'empty' : 'notMatch';
      }

      return input.checked ? null : 'empty';
    }

    if (reg) {
      if (/^REG_/.test(reg)) {
        if (!regexp) throw new Error("RegExp ".concat(reg, " is empty."));
        reg = reg.replace(/^REG_/, '');
        if (!regexp[reg]) throw new Error("RegExp ".concat(reg, " has not found."));
        reg = regexp[reg];
      }

      var valueMatch = !$input.val().length ? 'empty' : 'notMatch';
      return new RegExp(reg).test(val) ? null : valueMatch;
    }

    if (!$input.val().length) {
      return 'empty';
    }

    return null;
  }

  if (val.length) {
    // 有输入值
    return null;
  }

  return 'empty';
}
/**
 * 表单校验
 * @param {string} selector 表单的selector
 * @param {function} callback 校验后的回调
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * ##### 普通input的HTML
 * ```html
 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
 * ```
 * - required 表示需要校验
 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
 * <br>
 *
 * ##### radio
 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
 * ```html
 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
 * <input type="radio" value="female" name="sex" />
 * ```
 * <br>
 *
 * ##### checkbox
 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
 * pattern 规定选择个数，用法与正则一致，例如：
 * ```html
 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
 * <input type="checkbox" name="assistance" value="欧阳锋" />
 * <input type="checkbox" name="assistance" value="段智兴" />
 * <input type="checkbox" name="assistance" value="洪七公" />
 * ```
 * - {1,}   至少选择1个
 * - {1,2}  选择1-2个
 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
 * <br>
 *
 * ``` js
 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
 * weui.form.validate('#form', function (error) {
 *   if (!error) {
 *     var loading = weui.loading('提交中...');
 *     setTimeout(function () {
 *       loading.hide();
 *       weui.toast('提交成功', 3000);
 *     }, 1500);
 *   }
 *   // return true; // 当return true时，不会显示错误
 * }, {
 *   regexp: {
 *     IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *     VCODE: /^.{4}$/
 *   }
 * });
 * ```
 */


function validate(selector) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : util.noop;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $form = util(ele);
    var $requireds = $form.find('[required]');
    if (typeof callback !== 'function') callback = showErrorTips;

    for (var i = 0, len = $requireds.length; i < len; i++) {
      var $required = $requireds.eq(i);
      var errorMsg = nValidate($required, $form, options.regexp);
      var error = {
        ele: $required[0],
        msg: errorMsg
      };

      if (errorMsg) {
        if (!callback(error)) showErrorTips(error);
        return;
      }
    }

    callback(null);
  });
  return this;
}
/**
 * checkIfBlur 当表单的input失去焦点时校验
 * @param {string} selector 表单的selector
 * @param {Object=} options 配置项
 * @param {object=} options.regexp 表单所需的正则表达式
 *
 * @example
 * weui.form.checkIfBlur('#form', {
 *   regexp: {
 *     IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
 *     VCODE: /^.{4}$/
 *   }
 * });
 */


function checkIfBlur(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $eles = util(selector);
  $eles.forEach(function (ele) {
    var $form = util(ele);
    $form.find('[required]').on('blur', function (e) {
      var self = e.target; // checkbox 和 radio 不做blur检测，以免误触发

      if (self.type === 'checkbox' || self.type === 'radio') return;
      var $this = util(self);
      if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

      var errorMsg = nValidate($this, $form, options.regexp);

      if (errorMsg) {
        showErrorTips({
          ele: $this[0],
          msg: errorMsg
        });
      }
    }).on('focus', function (e) {
      var self = e.target;
      hideErrorTips(self);
    });
  });
  return this;
}
/**
 * showErrorTips 显示错误提示
 * @param {Object} error 错误数据
 * @param {string} error.ele 出错了的dom元素
 * @param {string} error.msg 出错了的msg。会根据此`msg`找到对应的`Tips`（比如`msg`是`empty`），那么`ele`上的`emptyTips`就会以`topTips`显示
 *
 * @example
 * weui.form.showErrorTips({
 *   ele: document.getElementById("xxxInput")
 *   msg: 'empty'
 * });
 */


function showErrorTips(error) {
  if (error) {
    var $ele = util(error.ele);
    var msg = error.msg;
    var tips = $ele.attr("".concat(msg, "Tips")) || $ele.attr('tips') || $ele.attr('placeholder');
    if (tips) src_topTips_topTips(tips);
    if (error.ele.type === 'checkbox' || error.ele.type === 'radio') return;
    var cellParent = nFindCellParent(error.ele);
    if (cellParent) cellParent.classList.add('weui-cell_warn');
  }
}
/**
 * hideErrorTips 隐藏错误提示
 * @param {Object} ele dom元素
 *
 * @example
 * weui.form.hideErrorTips(document.getElementById("xxxInput"));
 */


function hideErrorTips(ele) {
  var cellParent = nFindCellParent(ele);
  if (cellParent) cellParent.classList.remove('weui-cell_warn');
}

/* harmony default export */ var form_form = ({
  showErrorTips: showErrorTips,
  hideErrorTips: hideErrorTips,
  validate: validate,
  checkIfBlur: checkIfBlur
});
// EXTERNAL MODULE: ./src/uploader/item.html
var uploader_item = __webpack_require__(10);
var item_default = /*#__PURE__*/__webpack_require__.n(uploader_item);

// CONCATENATED MODULE: ./src/uploader/image.js
/* eslint-disable no-bitwise */

/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * 检查图片是否有被压扁，如果有，返回比率
 * ref to http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 */
function detectVerticalSquash(img) {
  // 拍照在IOS7或以下的机型会出现照片被压扁的bug
  var data;
  var ih = img.naturalHeight;
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  try {
    data = ctx.getImageData(0, 0, 1, ih).data;
  } catch (err) {
    console.error('Cannot check verticalSquash: CORS?');
    return 1;
  }

  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1; // py = parseInt((ey + sy) / 2)
  }

  var ratio = py / ih;
  return ratio === 0 ? 1 : ratio;
}
/**
 * dataURI to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 */


function dataURItoBuffer(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var buffer = new ArrayBuffer(byteString.length);
  var view = new Uint8Array(buffer);

  for (var i = 0; i < byteString.length; i++) {
    view[i] = byteString.charCodeAt(i);
  }

  return buffer;
}

function dataURItoBlob(dataURI) {
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var buffer = dataURItoBuffer(dataURI);
  return new Blob([buffer], {
    type: mimeString
  });
}
/**
 * 获取图片的orientation
 * ref to http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
 */


function getOrientation(buffer) {
  var view = new DataView(buffer);
  if (view.getUint16(0, false) !== 0xFFD8) return -2;
  var length = view.byteLength;
  var offset = 2;

  while (offset < length) {
    var marker = view.getUint16(offset, false);
    offset += 2;

    if (marker === 0xFFE1) {
      var getUnit = view.getUint32(offset += 2, false);
      if (getUnit !== 0x45786966) return -1;
      var little = view.getUint16(offset += 6, false) === 0x4949;
      offset += view.getUint32(offset + 4, little);
      var tags = view.getUint16(offset, little);
      offset += 2;

      for (var i = 0; i < tags; i++) {
        if (view.getUint16(offset + i * 12, little) === 0x0112) {
          return view.getUint16(offset + i * 12 + 8, little);
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) break;else offset += view.getUint16(offset, false);
  }

  return -1;
}
/**
 * 修正拍照时图片的方向
 * ref to http://stackoverflow.com/questions/19463126/how-to-draw-photo-with-correct-orientation-in-canvas-after-capture-photo-by-usin
 */


function orientationHelper(canvas, ctx, orientation) {
  var w = canvas.width;
  var h = canvas.height;

  if (orientation > 4) {
    canvas.width = h;
    canvas.height = w;
  }

  switch (orientation) {
    case 2:
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      break;

    case 3:
      ctx.translate(w, h);
      ctx.rotate(Math.PI);
      break;

    case 4:
      ctx.translate(0, h);
      ctx.scale(1, -1);
      break;

    case 5:
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;

    case 6:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -h);
      break;

    case 7:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(w, -h);
      ctx.scale(-1, 1);
      break;

    case 8:
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-w, 0);
      break;

    default:
      break;
  }
}
/**
 * 压缩图片
 */


function compress(file, options, callback) {
  var reader = new FileReader();

  reader.onload = function onload(evt) {
    if (options.compress === false) {
      // 不启用压缩 & base64上传 的分支，不做任何处理，直接返回文件的base64编码
      file.base64 = evt.target.result;
      callback(file);
      return;
    } // 启用压缩的分支


    var img = new Image();

    img.onload = function onload() {
      var ratio = detectVerticalSquash(img);
      var orientation = getOrientation(dataURItoBuffer(img.src));
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var maxW = options.compress.width;
      var maxH = options.compress.height;
      var w = img.width;
      var h = img.height;
      var dataURL;

      if (w < h && h > maxH) {
        w = parseInt(maxH * img.width / img.height);
        h = maxH;
      } else if (w >= h && w > maxW) {
        h = parseInt(maxW * img.height / img.width);
        w = maxW;
      }

      canvas.width = w;
      canvas.height = h;

      if (orientation > 0) {
        orientationHelper(canvas, ctx, orientation);
      }

      ctx.drawImage(img, 0, 0, w, h / ratio);

      if (/image\/jpeg/.test(file.type) || /image\/jpg/.test(file.type)) {
        dataURL = canvas.toDataURL('image/jpeg', options.compress.quality);
      } else {
        dataURL = canvas.toDataURL(file.type);
      }

      if (options.type === 'file') {
        if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
          // 压缩出错，以文件方式上传的，采用原文件上传
          console.warn("Compress fail, dataURL is ".concat(dataURL, ". Next will use origin file to upload."));
          callback(file);
        } else {
          var blob = dataURItoBlob(dataURL);
          blob.id = file.id;
          blob.name = file.name;
          blob.lastModified = file.lastModified;
          blob.lastModifiedDate = file.lastModifiedDate;
          callback(blob);
        }
      } else if (/;base64,null/.test(dataURL) || /;base64,$/.test(dataURL)) {
        // 压缩失败，以base64上传的，直接报错不上传
        options.onError(file, new Error("Compress fail, dataURL is ".concat(dataURL, ".")));
        callback();
      } else {
        file.base64 = dataURL;
        callback(file);
      }
    };

    img.src = evt.target.result;
  };

  reader.readAsDataURL(file);
}

/* harmony default export */ var uploader_image = (compress);
// CONCATENATED MODULE: ./src/uploader/upload.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/
function upload(options) {
  var url = options.url,
      file = options.file,
      fileVal = options.fileVal,
      onBeforeSend = options.onBeforeSend,
      onProgress = options.onProgress,
      onError = options.onError,
      onSuccess = options.onSuccess,
      xhrFields = options.xhrFields;
  var name = file.name,
      type = file.type,
      lastModifiedDate = file.lastModifiedDate;
  var data = {
    name: name,
    type: type,
    size: options.type === 'file' ? file.size : file.base64.length,
    lastModifiedDate: lastModifiedDate
  };
  var headers = {};
  if (onBeforeSend(file, data, headers) === false) return;
  file.status = 'progress';
  onProgress(file, 0);
  var formData = new FormData();
  var xhr = new XMLHttpRequest();
  file.xhr = xhr; // 设置参数

  Object.keys(data).forEach(function (key) {
    formData.append(key, data[key]);
  });

  if (options.type === 'file') {
    formData.append(fileVal, file, name);
  } else {
    formData.append(fileVal, file.base64);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        try {
          // 只支持json
          var ret = JSON.parse(xhr.responseText);
          onSuccess(file, ret);
        } catch (err) {
          onError(file, err);
        }
      } else {
        onError(file, new Error("XMLHttpRequest response status is ".concat(xhr.status)));
      }
    }
  };

  xhr.upload.addEventListener('progress', function (evt) {
    if (evt.total === 0) return;
    var percent = Math.ceil(evt.loaded / evt.total) * 100;
    onProgress(file, percent);
  }, false);
  xhr.open('POST', url);
  Object.keys(xhrFields).forEach(function (key) {
    xhr[key] = xhrFields[key];
  }); // 设置头部信息

  Object.keys(headers).forEach(function (key) {
    xhr.setRequestHeader(key, headers[key]);
  });
  xhr.send(formData);
}
// CONCATENATED MODULE: ./src/uploader/uploader.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*        http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/




var nId = 0;
/**
 * uploader 上传组件
 * @param {string} selector 上传组件的selector
 * @param {object} options 配置项
 * @param {string} [options.url] 上传的url，返回值需要使用json格式
 * @param {boolean} [options.auto=true] 设置为`true`后，不需要手动调用上传，有文件选择即开始上传。用this.upload()来上传，详情请看example
 * @param {string} [options.type=file] 上传类型, `file`为文件上传; `base64`为以base64上传
 * @param {string=} [options.fileVal=file] 文件上传域的name
 * @param {object=} [options.compress] 压缩配置, `false`则不压缩
 * @param {number=} [options.compress.width=1600] 图片的最大宽度
 * @param {number=} [options.compress.height=1600] 图片的最大高度
 * @param {number=} [options.compress.quality=.8] 压缩质量, 取值范围 0 ~ 1
 * @param {function=} [options.onBeforeQueued] 文件添加前的回调，return false则不添加
 * @param {function=} [options.onQueued] 文件添加成功的回调
 * @param {function=} [options.onBeforeSend] 文件上传前调用，具体参数看example
 * @param {function=} [options.onSuccess] 上传成功的回调
 * @param {function=} [options.onProgress] 上传进度的回调
 * @param {function=} [options.onError] 上传失败的回调
 *
 * @example
 * #### html
 * ```html
 <div class="weui-cells weui-cells_form" id="uploader">
     <div class="weui-cell">
         <div class="weui-cell__bd">
             <div class="weui-uploader">
                 <div class="weui-uploader__hd">
                     <p class="weui-uploader__title">图片上传</p>
                     <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
                 </div>
                 <div class="weui-uploader__bd">
                     <ul class="weui-uploader__files" id="uploaderFiles"></ul>
                     <div class="weui-uploader__input-box">
                         <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 * ```
 *
 * #### js
 * ```javascript
 * var uploadCount = 0;
 * weui.uploader('#uploader', {
 *   url: 'http://localhost:8081',
 *   auto: true,
 *   type: 'file',
 *   fileVal: 'fileVal',
 *   compress: {
 *     width: 1600,
 *     height: 1600,
 *     quality: .8
 *   },
 *   onBeforeQueued: function(files) {
 *     // `this` 是轮询到的文件, `files` 是所有文件
 *     if (["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
 *       weui.alert('请上传图片');
 *         return false; // 阻止文件添加
 *       }
 *       if (this.size > 10 * 1024 * 1024){
 *         weui.alert('请上传不超过10M的图片');
 *         return false;
 *       }
 *       if (files.length > 5) { // 防止一下子选择过多文件
 *         weui.alert('最多只能上传5张图片，请重新选择');
 *         return false;
 *       }
 *       if (uploadCount + 1 > 5) {
 *         weui.alert('最多只能上传5张图片');
 *         return false;
 *       }
 *
 *       ++uploadCount;
 *
 *       // return true; // 阻止默认行为，不插入预览图的框架
 *   },
 *   onQueued: function(){
 *     console.log(this);
 *
 *     // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
 *     // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64
 *
 *     // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
 *     // this.stop(); // 中断上传
 *
 *     // return true; // 阻止默认行为，不显示预览图的图像
 *   },
 *   onBeforeSend: function(data, headers){
 *     console.log(this, data, headers);
 *     // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
 *     // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部
 *
 *     // return false; // 阻止文件上传
 *   },
 *   onProgress: function(percent){
 *     console.log(this, percent);
 *     // return true; // 阻止默认行为，不使用默认的进度显示
 *   },
 *   onSuccess: function (ret) {
 *     console.log(this, ret);
 *     // return true; // 阻止默认行为，不使用默认的成功态
 *   },
 *   onError: function(err){
 *     console.log(this, err);
 *     // return true; // 阻止默认行为，不使用默认的失败态
 *   }
 * });
 * ```
 */

function uploader(selector, options) {
  var _this2 = this;

  var $uploader = util(selector);
  var URL = window.URL || window.webkitURL || window.mozURL; // 找到DOM里file-content，若无，则插入一个。

  function findFileCtn($uploader, id) {
    var $file = $uploader.find("[data-id=\"".concat(id, "\"]"));
    var $fileCtn = $file.find('.weui-uploader__file-content');

    if (!$fileCtn.length) {
      $fileCtn = util('<div class="weui-uploader__file-content"></div>');
      $file.append($fileCtn);
    }

    $file.addClass('weui-uploader__file_status');
    return $fileCtn;
  } // 清除DOM里的上传状态


  function clearFileStatus($uploader, id) {
    var $file = $uploader.find("[data-id=\"".concat(id, "\"]")).removeClass('weui-uploader__file_status');
    $file.find('.weui-uploader__file-content').remove();
  } // 设置上传


  function setUploadFile(file) {
    var _this = this;

    file.url = URL.createObjectURL(file);
    file.status = 'ready';

    file.upload = function () {
      upload(util.extend({
        $uploader: $uploader,
        file: file
      }, options));
    };

    file.stop = function () {
      _this.xhr.abort();
    };

    options.onQueued(file);
    if (options.auto) file.upload();
  }

  options = util.extend({
    url: '',
    auto: true,
    type: 'file',
    fileVal: 'file',
    xhrFields: {},
    onBeforeQueued: util.noop,
    onQueued: util.noop,
    onBeforeSend: util.noop,
    onSuccess: util.noop,
    onProgress: util.noop,
    onError: util.noop
  }, options);

  if (options.compress !== false) {
    options.compress = util.extend({
      width: 1600,
      height: 1600,
      quality: 0.8
    }, options.compress);
  }

  if (options.onBeforeQueued) {
    var onBeforeQueued = options.onBeforeQueued;

    options.onBeforeQueued = function (file, files) {
      var ret = onBeforeQueued.call(file, files);

      if (ret === false) {
        return false;
      }

      if (ret === true) {
        return;
      }

      var $item = util(util.render(item_default.a, {
        id: file.id
      }));
      $uploader.find('.weui-uploader__files').append($item);
    };
  }

  if (options.onQueued) {
    var onQueued = options.onQueued;

    options.onQueued = function (file) {
      if (!onQueued.call(file)) {
        var $file = $uploader.find("[data-id=\"".concat(file.id, "\"]"));
        $file.css({
          backgroundImage: "url(\"".concat(file.base64 || file.url, "\")")
        });

        if (!options.auto) {
          clearFileStatus($uploader, file.id);
        }
      }
    };
  }

  if (options.onBeforeSend) {
    var onBeforeSend = options.onBeforeSend;

    options.onBeforeSend = function (file, data, headers) {
      var ret = onBeforeSend.call(file, data, headers);

      if (ret === false) {
        return false;
      }
    };
  }

  if (options.onSuccess) {
    var onSuccess = options.onSuccess;

    options.onSuccess = function (file, ret) {
      file.status = 'success';

      if (!onSuccess.call(file, ret)) {
        clearFileStatus($uploader, file.id);
      }
    };
  }

  if (options.onProgress) {
    var onProgress = options.onProgress;

    options.onProgress = function (file, percent) {
      if (!onProgress.call(file, percent)) {
        findFileCtn($uploader, file.id).html("".concat(percent, "%"));
      }
    };
  }

  if (options.onError) {
    var onError = options.onError;

    options.onError = function (file, err) {
      file.status = 'fail';

      if (!onError.call(file, err)) {
        findFileCtn($uploader, file.id).html('<i class="weui-icon-warn"></i>');
      }
    };
  }

  $uploader.find('input[type="file"]').on('change', function (evt) {
    var files = evt.target.files;

    if (files.length === 0) {
      return;
    }

    if (options.compress === false && options.type === 'file') {
      // 以原文件方式上传
      Array.prototype.forEach.call(files, function (file) {
        nId += 1;
        file.id = nId;
        if (options.onBeforeQueued(file, files) === false) return;
        setUploadFile(file);
      });
    } else {
      // base64上传 和 压缩上传
      Array.prototype.forEach.call(files, function (file) {
        nId += 1;
        file.id = nId;
        if (options.onBeforeQueued(file, files) === false) return;
        uploader_image(file, options, function (blob) {
          if (blob) setUploadFile(blob);
        });
      });
    }

    _this2.value = '';
  });
}

/* harmony default export */ var uploader_uploader = (uploader);
// CONCATENATED MODULE: ./src/slider/slider.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * slider slider滑块，单位是百分比。注意，因为需要获取slider的长度，所以必须要在slider可见的情况下来调用。
 * @param {string} selector slider的selector
 * @param {object=} options 配置项
 * @param {number=} options.step slider的step，每次移动的百分比，取值范围 [0-100]
 * @param {number=} [options.defaultValue=0] slider的默认百分比值，取值范围 [0-100]
 * @param {function=} options.onChange slider发生改变时返回对应的百分比，取值范围 [0-100]
 *
 * @example
 * #### html
 * ```html
 * <div class="weui-slider-box">
 *     <div id="slider" class="weui-slider">
 *         <div class="weui-slider__inner">
 *             <div class="weui-slider__track"></div>
 *             <div class="weui-slider__handler"></div>
 *         </div>
 *     </div>
 *     <div id="sliderValue" class="weui-slider-box__value"></div>
 * </div>
 * ```
 *
 * #### js
 * ```javascript
 * weui.slider('#slider', {
 *   step: 10,
 *   defaultValue: 40,
 *   onChange: function(percent){
 *     console.log(percent);
 *   }
 * });
 * ```
 */

function slider(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $eles = util(selector);
  options = util.extend({
    step: undefined,
    defaultValue: 0,
    onChange: util.noop
  }, options);

  if (options.step !== undefined) {
    options.step = parseFloat(options.step);

    if (!options.step || options.step < 0) {
      throw new Error('Slider step must be a positive number.');
    }
  }

  if (options.defaultValue !== undefined && (options.defaultValue < 0 || options.defaultValue > 100)) {
    throw new Error('Slider defaultValue must be >= 0 and <= 100.');
  }

  $eles.forEach(function (ele) {
    var $slider = util(ele);
    var $sliderInner = $slider.find('.weui-slider__inner');
    var $sliderTrack = $slider.find('.weui-slider__track');
    var $sliderHandler = $slider.find('.weui-slider__handler');
    var sliderLength = parseInt(util.getStyle($sliderInner[0], 'width')); // slider的长度

    var sliderLeft = $sliderInner[0].offsetLeft; // slider相对于页面的offset

    var handlerStartPos = 0; // handler起始位置

    var handlerStartX = 0; // handler touchstart的X

    var stepWidth; // 每个step的宽度

    function getHandlerPos() {
      var pos = util.getStyle($sliderHandler[0], 'left');

      if (/%/.test(pos)) {
        pos = sliderLength * parseFloat(pos) / 100;
      } else {
        pos = parseFloat(pos);
      }

      return pos;
    }

    function setHandler(distance) {
      var dist; // handler的目标位置

      var percent; // 所在位置的百分比

      if (options.step) {
        distance = Math.round(distance / stepWidth) * stepWidth;
      }

      dist = handlerStartPos + distance;
      var temp = dist > sliderLength ? sliderLength : dist;
      dist = dist < 0 ? 0 : temp;
      percent = 100 * dist / sliderLength;
      $sliderTrack.css({
        width: "".concat(percent, "%")
      });
      $sliderHandler.css({
        left: "".concat(percent, "%")
      });
      options.onChange.call(ele, percent);
    }

    if (options.step) {
      stepWidth = sliderLength * options.step / 100;
    }

    if (options.defaultValue) {
      setHandler(sliderLength * options.defaultValue / 100);
    }

    $slider.on('click', function (evt) {
      evt.preventDefault();
      handlerStartPos = getHandlerPos();
      setHandler(evt.pageX - sliderLeft - handlerStartPos);
    });
    $sliderHandler.on('touchstart', function (evt) {
      handlerStartPos = getHandlerPos();
      handlerStartX = evt.changedTouches[0].clientX;
    }).on('touchmove', function (evt) {
      evt.preventDefault();
      setHandler(evt.changedTouches[0].clientX - handlerStartX);
    });
  });
  return this;
}

/* harmony default export */ var slider_slider = (slider);
// CONCATENATED MODULE: ./src/weui.js
/*
* Tencent is pleased to support the open source community by making WeUI.js available.
*
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
*
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
*
*       http://opensource.org/licenses/MIT
*
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/














var weui = {
  dialog: src_dialog_dialog,
  toast: src_toast_toast,
  loading: src_loading_loading,
  actionSheet: src_actionSheet_actionSheet,
  picker: picker_picker,
  datePicker: datePicker,
  gallery: src_gallery_gallery,
  alert: src_alert_alert,
  confirm: src_confirm_confirm,
  topTips: src_topTips_topTips,
  searchBar: searchBar_searchBar,
  tab: tab_tab,
  form: form_form,
  uploader: uploader_uploader,
  slider: slider_slider
};
/* harmony default export */ var src_weui = __webpack_exports__["default"] = (weui);


/***/ })
/******/ ]);
});