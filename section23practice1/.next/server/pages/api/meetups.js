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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/meetups.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/meetups.js":
/*!******************************!*\
  !*** ./pages/api/meetups.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// api/meetups\n\n\nasync function handler(req, res) {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://luiferna2:12345@cluster0.dktuh.mongodb.net/meetups?retryWrites=true&w=majority\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const result = await meetupsCollection.find().toArray();\n  const dataValue = result.map(meetup => ({\n    title: meetup.title,\n    address: meetup.address,\n    image: meetup.image,\n    description: meetup.description,\n    id: meetup._id.toString()\n  }));\n  client.close();\n  res.status(201).json({\n    message: \"Get method Succesfully\",\n    data: dataValue\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVldHVwcy5qcz9iNmQ1Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImZpbmQiLCJ0b0FycmF5IiwiZGF0YVZhbHVlIiwibWFwIiwibWVldHVwIiwidGl0bGUiLCJhZGRyZXNzIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsOEZBRG1CLENBQXJCO0FBR0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFsQixHQUF5QkMsT0FBekIsRUFBckI7QUFDQSxRQUFNQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFZQyxNQUFELEtBQWE7QUFDeENDLFNBQUssRUFBRUQsTUFBTSxDQUFDQyxLQUQwQjtBQUV4Q0MsV0FBTyxFQUFFRixNQUFNLENBQUNFLE9BRndCO0FBR3hDQyxTQUFLLEVBQUVILE1BQU0sQ0FBQ0csS0FIMEI7QUFJeENDLGVBQVcsRUFBRUosTUFBTSxDQUFDSSxXQUpvQjtBQUt4Q0MsTUFBRSxFQUFFTCxNQUFNLENBQUNNLEdBQVAsQ0FBV0MsUUFBWDtBQUxvQyxHQUFiLENBQVgsQ0FBbEI7QUFPQWxCLFFBQU0sQ0FBQ21CLEtBQVA7QUFDQXBCLEtBQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUUsd0JBQVg7QUFBcUNDLFFBQUksRUFBRWQ7QUFBM0MsR0FBckI7QUFDRDs7QUFDY1osc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWVldHVwcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwaS9tZWV0dXBzXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vbHVpZmVybmEyOjEyMzQ1QGNsdXN0ZXIwLmRrdHVoLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcbiAgY29uc3QgZGF0YVZhbHVlID0gcmVzdWx0Lm1hcCgobWVldHVwKSA9PiAoe1xuICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXG4gICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uLFxuICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gIH0pKTtcbiAgY2xpZW50LmNsb3NlKCk7XG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJHZXQgbWV0aG9kIFN1Y2Nlc2Z1bGx5XCIsIGRhdGE6IGRhdGFWYWx1ZSB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/meetups.js\n");

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