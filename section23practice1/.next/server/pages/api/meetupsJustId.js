module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/meetupsJustId.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/meetupsJustId.js":
/*!************************************!*\
  !*** ./pages/api/meetupsJustId.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// api/meetups\n\n\nasync function handler(req, res) {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://luiferna2:12345@cluster0.dktuh.mongodb.net/meetups?retryWrites=true&w=majority\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const result = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  const dataValue = result.map(meetup => ({\n    params: {\n      meetupId: meetup._id.toString()\n    }\n  }));\n  client.close();\n  res.status(201).json({\n    message: \"Get method Succesfully\",\n    data: dataValue\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVldHVwc0p1c3RJZC5qcz8xMDA0Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiZGF0YVZhbHVlIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQiw4RkFEbUIsQ0FBckI7QUFHQSxRQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLElBQWxCLENBQXVCLEVBQXZCLEVBQTJCO0FBQUVDLE9BQUcsRUFBRTtBQUFQLEdBQTNCLEVBQXVDQyxPQUF2QyxFQUFyQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0osTUFBTSxDQUFDSyxHQUFQLENBQVlDLE1BQUQsS0FBYTtBQUN4Q0MsVUFBTSxFQUFFO0FBQ05DLGNBQVEsRUFBRUYsTUFBTSxDQUFDSixHQUFQLENBQVdPLFFBQVg7QUFESjtBQURnQyxHQUFiLENBQVgsQ0FBbEI7QUFLQWYsUUFBTSxDQUFDZ0IsS0FBUDtBQUNBakIsS0FBRyxDQUFDa0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRSx3QkFBWDtBQUFxQ0MsUUFBSSxFQUFFVjtBQUEzQyxHQUFyQjtBQUNEOztBQUNjYixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9tZWV0dXBzSnVzdElkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpL21lZXR1cHNcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9sdWlmZXJuYTI6MTIzNDVAY2x1c3RlcjAuZGt0dWgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG4gIGNvbnN0IGRhdGFWYWx1ZSA9IHJlc3VsdC5tYXAoKG1lZXR1cCkgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgfSxcbiAgfSkpO1xuICBjbGllbnQuY2xvc2UoKTtcbiAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIkdldCBtZXRob2QgU3VjY2VzZnVsbHlcIiwgZGF0YTogZGF0YVZhbHVlIH0pO1xufVxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/meetupsJustId.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });