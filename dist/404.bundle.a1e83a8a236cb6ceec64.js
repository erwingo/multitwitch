/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var streamNames = window.location.pathname.split('/')
    .filter(function (name) { return name !== '' && name !== 'multitwitch'; });
var numberOfStreams = streamNames.length;
var bodyEl = document.getElementsByTagName('body')[0];
var streams = streamNames.map(function (stream) {
    var container = document.createElement('div');
    container.style.position = 'absolute';
    var playerContainer = document.createElement('div');
    playerContainer.style.position = 'absolute';
    var player = document.createElement('object');
    player.data = "https://player.twitch.tv/?channel=" + stream;
    var chatContainer = document.createElement('div');
    chatContainer.style.position = 'absolute';
    chatContainer.style.bottom = '0';
    var chat = document.createElement('object');
    chat.data = "https://www.twitch.tv/" + stream + "/chat?popout=";
    chatContainer.appendChild(chat);
    playerContainer.appendChild(player);
    container.appendChild(playerContainer);
    container.appendChild(chatContainer);
    bodyEl.appendChild(container);
    return { container: container, playerContainer: playerContainer, chatContainer: chatContainer };
});
function generateGrid(numberOfBoxes, dimensions) {
    var w = dimensions.w, h = dimensions.h;
    var containerWidth = w / numberOfBoxes;
    var containers = [];
    for (var i = 0; i < numberOfBoxes; i++) {
        var container = {
            width: containerWidth,
            height: h,
            left: containerWidth * i,
            chatContainer: {
                width: containerWidth,
                top: containerWidth * 9 / 16,
            },
            playerContainer: {
                width: containerWidth,
                height: containerWidth * 9 / 16
            }
        };
        containers[i] = container;
    }
    return containers;
}
function setStreamSizes(grid, streams) {
    if (grid.length !== streams.length) {
        throw new Error('# of streams dont match # grid els');
    }
    grid.forEach(function (grid, idx) {
        var stream = streams[idx];
        stream.container.style.width = grid.width + 'px';
        stream.container.style.height = grid.height + 'px';
        stream.container.style.left = grid.left + 'px';
        stream.playerContainer.style.width = grid.playerContainer.width + 'px';
        stream.playerContainer.style.height = grid.playerContainer.height + 'px';
        stream.chatContainer.style.width = grid.chatContainer.width + 'px';
        stream.chatContainer.style.top = grid.chatContainer.height + 'px';
    });
}
window.onresize = function () {
    var grid = generateGrid(numberOfStreams, { w: window.innerWidth, h: window.innerHeight });
    setStreamSizes(grid, streams);
};
var grid = generateGrid(numberOfStreams, { w: window.innerWidth, h: window.innerHeight });
setStreamSizes(grid, streams);
document.title = "MultiTwitch - " + streamNames.join(' - ');


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=404.bundle.a1e83a8a236cb6ceec64.js.map