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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.onload = function () {

    window.setInterval(refreshTime, 1000);

    document.getElementById('single').onclick = function () {
        popup();
    };

    document.getElementById('music').onclick = function () {
        var audio = document.getElementById('bgmusic');
        if (audio !== null) {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    };
};

/**
 * 弹出info
 */

function popup() {

    var info = document.getElementById('info');

    if (info.classList.contains('hidden')) {
        window.setInterval(function () {
            info.innerHTML = getSingleTime();
        }, 1000);
        info.classList.remove("hidden");
    } else {
        info.classList.add('hidden');
    }
}

/**
 * ....
 */
function getSingleTime() {

    var begin = new Date();
    var year = begin.getFullYear();
    var end = new Date(year + 1, 10, 11, 0, 0, 0);

    return getDiff(begin, end);
}

/**
 * 更新底部时间差
 */
function refreshTime() {

    var begin = new Date(2017, 11, 6, 0, 0, 0);
    var time = getDiff(begin, new Date());
    document.getElementById('mainTime').innerHTML = time;
}

/**
 * 获取某一个时间到现在的时间差
 * @param {*} begin 
 * @param {*} end 
 */
function getDiff(begin, end) {

    var total_seconds = end - begin;

    var days = Math.floor(total_seconds / (24 * 3600 * 1000));

    var dayLeave = total_seconds % (24 * 3600 * 1000);
    var hours = Math.floor(dayLeave / (3600 * 1000));

    var hourLeave = dayLeave % (3600 * 1000);
    var minutes = Math.floor(hourLeave / (60 * 1000));

    var minLeave = hourLeave % (60 * 1000);
    var seconds = Math.round(minLeave / 1000);

    return days + " 天 " + hours + " 小时 " + minutes + " 分 " + seconds + " 秒 ";
}

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map