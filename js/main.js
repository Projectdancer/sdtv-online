/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/legacy.js":
/*!*****************************!*\
  !*** ./source/js/legacy.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* $(document).ready(function () {\n    var mob_moving = false;\n    $(window).scroll(function() {\n\n        if(!mob_moving && $('.block-mod-description-title').offset().top - 50 < pos_x*10){\n            mob_moving = true;\n            $('#block-mod-description-text').animate({'height': '100px'}, 500);\n        }\n\n        var block_fides = $('.block-fide');\n        var h = screen.height;\n        console.log(h);\n        for(var i=0; i<block_fides.length; i++){\n            var block_fide = block_fides.get(i);\n            if($(block_fide).offset().top < pos_x*10+h){\n                $(block_fide).animate({'opacity': 1}, 1000);\n            }\n        }\n    });\n})\n\n$('.block-mod-description-menu-link').click(function(){\n    $('.block-mod-description-menu-link').attr('class', 'block-mod-description-menu-link');\n    $(this).attr('class', 'block-mod-description-menu-link active');\n})\nvar block_styles_left = 0;\n\n\nfunction resize() {\n    if($(window).width() <= 768){\n        $('.block-style-item').width($(window).width());\n        $('.block-styles').css('left', block_styles_left*$(window).width());\n    }else{\n        $('.block-style-item').width(\"\");\n    }\n}\nresize();\n$(window).resize(function(){\n    resize();\n})\n\n$('.block-style-left').click(function () {\n    block_styles_left ++;\n    if(block_styles_left > 0){\n        block_styles_left = $('.block-style-item').length*-1+1;\n    }\n    $('.block-styles').animate({left: block_styles_left*$(window).width()}, 500);\n})\n\n$('.block-style-right').click(function () {\n    block_styles_left --;\n    var count = $('.block-style-item').length*-1+1;\n    if(block_styles_left < count){\n        block_styles_left = 0;\n    }\n    $('.block-styles').animate({left: block_styles_left*$(window).width()}, 500);\n})\n */\n\n//# sourceURL=webpack://sdtv/./source/js/legacy.js?");

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_initSomething_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/initSomething.js */ \"./source/js/utils/initSomething.js\");\n/* harmony import */ var _utils_initSlider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/initSlider.js */ \"./source/js/utils/initSlider.js\");\n/* harmony import */ var _utils_initTabList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/initTabList.js */ \"./source/js/utils/initTabList.js\");\n/* harmony import */ var _utils_navInit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/navInit.js */ \"./source/js/utils/navInit.js\");\n/* harmony import */ var _utils_animateWhenOnView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/animateWhenOnView.js */ \"./source/js/utils/animateWhenOnView.js\");\n\n\n\n\n\n(0,_utils_navInit_js__WEBPACK_IMPORTED_MODULE_3__.navInit)();\n(0,_utils_initSomething_js__WEBPACK_IMPORTED_MODULE_0__.initSomething)(\".slider\", _utils_initSlider_js__WEBPACK_IMPORTED_MODULE_1__.initSlider);\n(0,_utils_initSomething_js__WEBPACK_IMPORTED_MODULE_0__.initSomething)(\".tablist\", _utils_initTabList_js__WEBPACK_IMPORTED_MODULE_2__.initTabList);\n(0,_utils_initSomething_js__WEBPACK_IMPORTED_MODULE_0__.initSomething)(\"[data-animation]\", _utils_animateWhenOnView_js__WEBPACK_IMPORTED_MODULE_4__.animateWhenOnView);\ndocument.addEventListener(\"scroll\", moveClasses);\n\nfunction moveClasses() {\n  var pos_x = window.scrollY / 10;\n  var row1 = document.querySelector('#classes-row-first');\n  var row2 = document.querySelector('#classes-row-second');\n  row1.style.left = \"\".concat(pos_x - 700, \"px\");\n  row2.style.left = \"\".concat(-pos_x - 700, \"px\");\n}\n\n//# sourceURL=webpack://sdtv/./source/js/main.js?");

/***/ }),

/***/ "./source/js/utils/animateWhenOnView.js":
/*!**********************************************!*\
  !*** ./source/js/utils/animateWhenOnView.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateWhenOnView\": () => (/* binding */ animateWhenOnView)\n/* harmony export */ });\n// get the element to animate\nfunction animateWhenOnView(element) {\n  var animation = element.dataset.animation;\n  var elementHeight = element.clientHeight;\n  var endVal;\n\n  switch (animation) {\n    case \"increase-number\":\n      endVal = element.innerText;\n      break;\n\n    default:\n      element.style.visibility = \"visible\";\n      element.classList.add(animation);\n      break;\n  }\n\n  document.addEventListener(\"scroll\", animate);\n\n  function animate() {\n    // is element in view?\n    if (inView(animation)) {\n      switch (animation) {\n        case \"increase-number\":\n          animateValue(element, 0, endVal, endVal / 90 * 4000);\n          document.removeEventListener(\"scroll\", animate);\n          break;\n\n        default:\n          element.style.visibility = \"visible\";\n          element.classList.add(animation);\n          break;\n      }\n    }\n  }\n\n  function inView() {\n    // get window height\n    var windowHeight = window.innerHeight; // get number of pixels that the document is scrolled\n\n    var scrollY = window.scrollY || window.pageYOffset; // get current scroll position (distance from the top of the page to the bottom of the current viewport)\n\n    var scrollPosition = scrollY + windowHeight; // get element position (distance from the top of the page to the bottom of the element)\n\n    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight / 2; // is scroll position greater than element position? (is element in view?)\n\n    if (scrollPosition > elementPosition) {\n      return true;\n    }\n\n    return false;\n  }\n}\n\nfunction animateValue(obj, start, end) {\n  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;\n  var startTimestamp = null;\n\n  var step = function step(timestamp) {\n    if (!startTimestamp) startTimestamp = timestamp;\n    var progress = Math.min((timestamp - startTimestamp) / duration, 1);\n    obj.innerHTML = Math.floor(progress * (end - start) + start);\n\n    if (progress < 1) {\n      window.requestAnimationFrame(step);\n    }\n  };\n\n  window.requestAnimationFrame(step);\n}\n\n//# sourceURL=webpack://sdtv/./source/js/utils/animateWhenOnView.js?");

/***/ }),

/***/ "./source/js/utils/initSlider.js":
/*!***************************************!*\
  !*** ./source/js/utils/initSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSlider\": () => (/* binding */ initSlider)\n/* harmony export */ });\nfunction initSlider(slider) {\n  var wrapper = slider.querySelector(\".slider__wrapper\");\n  var slides = slider.querySelectorAll(\".slider__slide\");\n  var current = 0;\n  var startPoints = calcStartPoints();\n  var tabs = slider.querySelectorAll(\".slider__tab\");\n  var tabsMode = Boolean(tabs.length);\n  var controls = slider.querySelectorAll(\".slider__button\");\n  initControls();\n  goToSlide(0);\n\n  if (tabsMode) {\n    tabs.forEach(initTab);\n  }\n\n  wrapper.addEventListener(\"scroll\", function () {\n    if (startPoints.includes(wrapper.scrollLeft)) {\n      var newIndex = startPoints.indexOf(wrapper.scrollLeft);\n\n      if (newIndex !== current) {\n        updateCurrent(newIndex);\n      }\n    }\n  });\n\n  function goToSlide(index) {\n    wrapper.scrollLeft = startPoints[index];\n    updateCurrent(index);\n  }\n\n  function updateCurrent(index) {\n    if (tabsMode) {\n      tabs[current].removeAttribute(\"aria-selected\");\n      tabs[current].classList.remove(\"slider__tab--active\");\n      tabs[current].blur();\n    }\n\n    current = index;\n\n    if (tabsMode) {\n      tabs[current].classList.add(\"slider__tab--active\");\n      tabs[current].setAttribute(\"aria-selected\", \"true\");\n      tabs[current].focus();\n    }\n  }\n\n  function initTab(tab, index) {\n    tab.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      goToSlide(index);\n    });\n  }\n\n  function prevSlide() {\n    current === 0 ? goToSlide(startPoints.length - 1) : goToSlide(current - 1);\n  }\n\n  function nextSlide() {\n    current === startPoints.length - 1 ? goToSlide(0) : goToSlide(current + 1);\n  }\n\n  function calcStartPoints() {\n    var startPoints = [];\n    var wrapperStartPoint = wrapper.getBoundingClientRect().x;\n    var endPoint = wrapper.scrollWidth - wrapper.offsetWidth;\n    slides.forEach(function (slide) {\n      var currentSlideStart = slide.getBoundingClientRect().x - wrapperStartPoint;\n\n      if (currentSlideStart < endPoint) {\n        startPoints.push(currentSlideStart);\n      }\n    });\n    startPoints.push(endPoint);\n    return startPoints;\n  }\n\n  function initControls() {\n    if (Boolean(controls.length)) {\n      controls.forEach(function (control) {\n        control.addEventListener(\"click\", function (evt) {\n          evt.preventDefault();\n\n          switch (control.dataset.direction) {\n            case \"prev\":\n              prevSlide();\n              break;\n\n            case \"next\":\n              nextSlide();\n              break;\n          }\n        });\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://sdtv/./source/js/utils/initSlider.js?");

/***/ }),

/***/ "./source/js/utils/initSomething.js":
/*!******************************************!*\
  !*** ./source/js/utils/initSomething.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSomething\": () => (/* binding */ initSomething)\n/* harmony export */ });\nfunction initSomething(selector, callback) {\n  var array = document.querySelectorAll(selector);\n\n  if (array.length) {\n    array.forEach(function (item) {\n      callback(item);\n    });\n  }\n}\n\n//# sourceURL=webpack://sdtv/./source/js/utils/initSomething.js?");

/***/ }),

/***/ "./source/js/utils/initTabList.js":
/*!****************************************!*\
  !*** ./source/js/utils/initTabList.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTabList\": () => (/* binding */ initTabList)\n/* harmony export */ });\nfunction initTabList(tablist) {\n  var tabs = tablist.querySelectorAll(\".tablist__tab\");\n  var current = 0;\n  tabs.forEach(function (tab, index) {\n    tab.addEventListener(\"click\", function (evt) {\n      evt.preventDefault();\n      var prevElement = document.querySelector(tabs[current].getAttribute(\"href\"));\n      tabs[current].removeAttribute(\"aria-selected\");\n      tabs[current].classList.remove(\"tablist__tab--active\");\n      prevElement.hidden = true;\n      var nextElement = document.querySelector(tab.getAttribute(\"href\"));\n      nextElement.hidden = false;\n      tab.classList.add(\"tablist__tab--active\");\n      tab.setAttribute(\"aria-selected\", \"true\");\n      current = index;\n    });\n  });\n}\n\n//# sourceURL=webpack://sdtv/./source/js/utils/initTabList.js?");

/***/ }),

/***/ "./source/js/utils/navInit.js":
/*!************************************!*\
  !*** ./source/js/utils/navInit.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navInit\": () => (/* binding */ navInit)\n/* harmony export */ });\nvar menuButton = document.querySelector(\".page-header__toggler\");\nvar menuList = document.querySelector(\".main-nav\");\nvar links = menuList.querySelectorAll(\".main-nav__link\");\nfunction navInit() {\n  menuButton.addEventListener(\"click\", changeNavState);\n  links.forEach(function (link) {\n    link.addEventListener(\"click\", function () {\n      changeNavState();\n      var target = link.getAttribute(\"href\");\n\n      if (target[0] === \"#\") {\n        var element = document.querySelector(target);\n        element.scrollIntoView();\n      }\n    });\n  });\n}\n\nfunction changeNavState() {\n  var expanded = menuButton.getAttribute(\"aria-expanded\") === \"true\";\n  menuButton.setAttribute(\"aria-expanded\", !expanded);\n  menuButton.classList.toggle(\"page-header__toggler--opened\");\n  menuList.classList.toggle(\"main-nav--hide\");\n  document.body.classList.toggle(\"scroll-lock\");\n}\n\n//# sourceURL=webpack://sdtv/./source/js/utils/navInit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./source/js/legacy.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/main.js");
/******/ 	
/******/ })()
;