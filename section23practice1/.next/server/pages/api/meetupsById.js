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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/meetupsById.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/meetupsById.js":
/*!**********************************!*\
  !*** ./pages/api/meetupsById.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bson */ \"bson\");\n/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_1__);\n// api/meetups\n\n\n\nasync function handler(req, res) {\n  const data = req.body;\n  const {\n    meetupId\n  } = data;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://luiferna2:12345@cluster0.dktuh.mongodb.net/meetups?retryWrites=true&w=majority\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const result = await meetupsCollection.findOne({\n    _id: Object(bson__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(meetupId)\n  });\n  client.close();\n  console.log(result);\n  res.status(201).json({\n    message: \"Get method Succesfully\",\n    data: {\n      id: result._id.toString(),\n      title: result.title,\n      description: result.description,\n      address: result.address,\n      image: result.image\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWVldHVwc0J5SWQuanM/OGI0MyJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsImJvZHkiLCJtZWV0dXBJZCIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiZmluZE9uZSIsIl9pZCIsIk9iamVjdElkIiwiY2xvc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpZCIsInRvU3RyaW5nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJpbWFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsUUFBTUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQWpCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWVGLElBQXJCO0FBQ0EsUUFBTUcsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsOEZBRG1CLENBQXJCO0FBR0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxPQUFsQixDQUEwQjtBQUFFQyxPQUFHLEVBQUVDLHFEQUFRLENBQUNWLFFBQUQ7QUFBZixHQUExQixDQUFyQjtBQUNBQyxRQUFNLENBQUNVLEtBQVA7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVo7QUFDQVYsS0FBRyxDQUNBaUIsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQ0pDLFdBQU8sRUFBRSx3QkFETDtBQUVKbEIsUUFBSSxFQUFFO0FBQ0ptQixRQUFFLEVBQUVWLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXUyxRQUFYLEVBREE7QUFFSkMsV0FBSyxFQUFFWixNQUFNLENBQUNZLEtBRlY7QUFHSkMsaUJBQVcsRUFBRWIsTUFBTSxDQUFDYSxXQUhoQjtBQUlKQyxhQUFPLEVBQUVkLE1BQU0sQ0FBQ2MsT0FKWjtBQUtKQyxXQUFLLEVBQUVmLE1BQU0sQ0FBQ2U7QUFMVjtBQUZGLEdBRlI7QUFZRDs7QUFDYzNCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL21lZXR1cHNCeUlkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBpL21lZXR1cHNcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcImJzb25cIjtcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICBjb25zdCB7IG1lZXR1cElkIH0gPSBkYXRhO1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9sdWlmZXJuYTI6MTIzNDVAY2x1c3RlcjAuZGt0dWgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSk7XG4gIGNsaWVudC5jbG9zZSgpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIHJlc1xuICAgIC5zdGF0dXMoMjAxKVxuICAgIC5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2V0IG1ldGhvZCBTdWNjZXNmdWxseVwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogcmVzdWx0Ll9pZC50b1N0cmluZygpLFxuICAgICAgICB0aXRsZTogcmVzdWx0LnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uLFxuICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IHJlc3VsdC5pbWFnZVxuICAgICAgfSxcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/meetupsById.js\n");

/***/ }),

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bson\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJic29uXCI/MDY4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJic29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bson\n");

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