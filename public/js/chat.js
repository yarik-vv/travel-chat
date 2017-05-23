/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function submitOff(form) {
  form = document.querySelector(form);
  form.onsubmit = function (action) {
    action.preventDefault();
  };
}

module.exports = submitOff;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _status = __webpack_require__(5);

var _status2 = _interopRequireDefault(_status);

var _message = __webpack_require__(4);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var form = document.querySelector('form[name="chat"]');
var input = document.querySelector('form[name="chat"] input');
var sendButton = document.querySelector('button[type="submit"]');

var socket = io('', {
  'reconnectionAttempts': 30,
  'reconnectionDelay': 500
});

function websockets() {
  socket.on('message', function (username, message) {
    (0, _message2.default)(message, username);
  }).on('leave', function (username) {
    (0, _status2.default)(username + " leave the chat", "#d6f1e9");
  }).on('join', function (username) {
    (0, _status2.default)(username + " joined the chat", "#d6f1e9");
  }).on('connect', function () {
    (0, _status2.default)("Connected to the chat", "#26fa88");
    form.addEventListener('submit', send);
    input.disabled = false;
    sendButton.disabled = false;
  }).on('disconnect', function () {
    (0, _status2.default)("Waiting for network...", "#f1d6ee");
    form.removeEventListener('submit', send);
    input.disabled = true;
    sendButton.disabled = true;
  }).on('logout', function () {
    location.href = "/";
  }).on('error', function (reason) {
    if (reason == 'handshake unauthorized') {
      (0, _status2.default)("You leave the chat.");
    }
  }).on('reconnect_failed', function () {
    (0, _status2.default)("Connection lost.", "#f1d6ee");
  });

  function send() {
    var text = input.value;
    socket.emit('message', text, function (data) {
      (0, _message2.default)(data, 'you');
    });
    input.value = '';
    return false;
  }
}

module.exports = websockets;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _websockets = __webpack_require__(2);

var _websockets2 = _interopRequireDefault(_websockets);

var _shared = __webpack_require__(1);

var _shared2 = _interopRequireDefault(_shared);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _shared2.default)('form[name="chat"]');
(0, _websockets2.default)();

document.getElementById('logout').onclick = function () {
  __webpack_require__.e/* require.ensure */(0/* duplicate */).then((function (require) {
    var AJAXrequest = __webpack_require__(0);
    AJAXrequest('logout');
    location.href = "/";
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chat = document.getElementById('chat');
var scrollHeight = 999999;

function currentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  }

  return hours + ':' + minutes;
}

function printMessage(text, username) {
  var message = document.createElement('li');
  message.className = 'message';

  if (username === 'you') {
    message.style.alignSelf = 'flex-end';
    message.style.backgroundColor = '#5dd0e1';
    message.style.borderBottomRightRadius = '0';
  } else {
    message.style.alignSelf = 'flex-start';
    message.style.backgroundColor = '#fcfd45';
    message.style.borderBottomLeftRadius = '0';
  }

  message.innerHTML = text;
  chat.appendChild(message);

  var description = document.createElement('span');
  description.className = 'description';

  if (username === 'you') {
    description.style.alignSelf = 'flex-end';
  } else {
    description.style.alignSelf = 'flex-start';
  }

  description.innerHTML = username + ', ' + currentTime();
  chat.appendChild(description);
  chat.scrollTop = scrollHeight;
}

module.exports = printMessage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chat = document.getElementById('chat');
var scrollHeight = 999999;

function printStatus(status, color) {
  var statusMessage = document.createElement('li');

  statusMessage.className = 'log';
  statusMessage.style.backgroundColor = color;
  statusMessage.innerHTML = status;

  chat.appendChild(statusMessage);
  chat.scrollTop = scrollHeight;
}

module.exports = printStatus;

/***/ })
/******/ ]);