require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/sendMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sendMessage;\n\nvar _nodemailer = __webpack_require__(3);\n\nvar _nodemailer2 = _interopRequireDefault(_nodemailer);\n\nvar _nodemailerMailgunTransport = __webpack_require__(4);\n\nvar _nodemailerMailgunTransport2 = _interopRequireDefault(_nodemailerMailgunTransport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sender = {\n  auth: {\n    api_key: process.env.KEY,\n    domain: process.env.DOMAIN\n  }\n};\n\nvar dest = {\n  username: process.env.EMAIL_DEST_USER\n};\n\nvar transporter = _nodemailer2.default.createTransport((0, _nodemailerMailgunTransport2.default)(sender));\n\nfunction sendMessage(subject, message, user) {\n\n  var email = {\n    from: user,\n    to: dest.username,\n    subject: subject,\n    html: message\n  };\n\n  return new Promise(function (resolve, reject) {\n\n    transporter.sendMail(email, function (err, info) {\n\n      if (err) {\n        return reject(err);\n      }\n\n      return resolve(info);\n    });\n  });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9zZW5kTWVzc2FnZS5qcz9kYTg2Il0sIm5hbWVzIjpbInNlbmRNZXNzYWdlIiwic2VuZGVyIiwiYXV0aCIsImFwaV9rZXkiLCJwcm9jZXNzIiwiZW52IiwiS0VZIiwiZG9tYWluIiwiRE9NQUlOIiwiZGVzdCIsInVzZXJuYW1lIiwiRU1BSUxfREVTVF9VU0VSIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzdWJqZWN0IiwibWVzc2FnZSIsInVzZXIiLCJlbWFpbCIsImZyb20iLCJ0byIsImh0bWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbmRNYWlsIiwiZXJyIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBZ0J3QkEsVzs7QUFoQnhCOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFNBQVM7QUFDYkMsUUFBTTtBQUNKQyxhQUFTQyxRQUFRQyxHQUFSLENBQVlDLEdBRGpCO0FBRUpDLFlBQVFILFFBQVFDLEdBQVIsQ0FBWUc7QUFGaEI7QUFETyxDQUFmOztBQU9BLElBQU1DLE9BQU87QUFDWEMsWUFBVU4sUUFBUUMsR0FBUixDQUFZTTtBQURYLENBQWI7O0FBSUEsSUFBTUMsY0FBYyxxQkFBV0MsZUFBWCxDQUEyQiwwQ0FBUVosTUFBUixDQUEzQixDQUFwQjs7QUFFZSxTQUFTRCxXQUFULENBQXNCYyxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0NDLElBQXhDLEVBQThDOztBQUUzRCxNQUFNQyxRQUFRO0FBQ1pDLFVBQU1GLElBRE07QUFFWkcsUUFBSVYsS0FBS0MsUUFGRztBQUdaSSxvQkFIWTtBQUlaTSxVQUFNTDtBQUpNLEdBQWQ7O0FBT0EsU0FBTyxJQUFJTSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCOztBQUV0Q1gsZ0JBQVlZLFFBQVosQ0FBcUJQLEtBQXJCLEVBQTRCLFVBQUNRLEdBQUQsRUFBTUMsSUFBTixFQUFlOztBQUV6QyxVQUFHRCxHQUFILEVBQVE7QUFBRSxlQUFPRixPQUFPRSxHQUFQLENBQVA7QUFBb0I7O0FBRTlCLGFBQU9ILFFBQVFJLElBQVIsQ0FBUDtBQUVELEtBTkQ7QUFRRCxHQVZNLENBQVA7QUFXRCIsImZpbGUiOiIuL3NyYy9oZWxwZXJzL3NlbmRNZXNzYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5pbXBvcnQgbWFpbGd1biBmcm9tICdub2RlbWFpbGVyLW1haWxndW4tdHJhbnNwb3J0J1xuXG5jb25zdCBzZW5kZXIgPSB7XG4gIGF1dGg6IHtcbiAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5LRVksXG4gICAgZG9tYWluOiBwcm9jZXNzLmVudi5ET01BSU5cbiAgfVxufVxuXG5jb25zdCBkZXN0ID0ge1xuICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuRU1BSUxfREVTVF9VU0VSXG59XG5cbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQobWFpbGd1bihzZW5kZXIpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kTWVzc2FnZSAoc3ViamVjdCwgbWVzc2FnZSwgdXNlcikge1xuXG4gIGNvbnN0IGVtYWlsID0ge1xuICAgIGZyb206IHVzZXIsXG4gICAgdG86IGRlc3QudXNlcm5hbWUsXG4gICAgc3ViamVjdCxcbiAgICBodG1sOiBtZXNzYWdlXG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKGVtYWlsLCAoZXJyLCBpbmZvKSA9PiB7XG5cbiAgICAgIGlmKGVycikgeyByZXR1cm4gcmVqZWN0KGVycikgfVxuXG4gICAgICByZXR1cm4gcmVzb2x2ZShpbmZvKVxuXG4gICAgfSk7XG5cbiAgfSlcbn07XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMvc2VuZE1lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./src/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _micro = __webpack_require__(1);\n\nvar _micro2 = _interopRequireDefault(_micro);\n\nvar _sendMessage = __webpack_require__(\"./src/helpers/sendMessage.js\");\n\nvar _sendMessage2 = _interopRequireDefault(_sendMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar server = (0, _micro2.default)(function () {\n  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {\n    var _ref2, subject, message, senderEmail;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _micro2.default.json(req);\n\n          case 2:\n            _ref2 = _context.sent;\n            subject = _ref2.subject;\n            message = _ref2.message;\n            senderEmail = _ref2.senderEmail;\n            _context.next = 8;\n            return (0, _sendMessage2.default)(subject, message, senderEmail);\n\n          case 8:\n            return _context.abrupt('return', 'Successfully sent!');\n\n          case 9:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\nserver.listen(process.env.PORT || 3000, function () {\n  return console.log('Listening...');\n});\n\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbInNlcnZlciIsInJlcSIsInJlcyIsImpzb24iLCJzdWJqZWN0IiwibWVzc2FnZSIsInNlbmRlckVtYWlsIiwibGlzdGVuIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFNBQVM7QUFBQSx1REFFYixpQkFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFa0QsZ0JBQU1DLElBQU4sQ0FBV0YsR0FBWCxDQUZsRDs7QUFBQTtBQUFBO0FBRVVHLG1CQUZWLFNBRVVBLE9BRlY7QUFFbUJDLG1CQUZuQixTQUVtQkEsT0FGbkI7QUFFNEJDLHVCQUY1QixTQUU0QkEsV0FGNUI7QUFBQTtBQUFBLG1CQUlRLDJCQUFLRixPQUFMLEVBQWNDLE9BQWQsRUFBdUJDLFdBQXZCLENBSlI7O0FBQUE7QUFBQSw2Q0FNUyxvQkFOVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUZhOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWY7O0FBY0FOLE9BQU9PLE1BQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWxDLEVBQXdDO0FBQUEsU0FBTUMsUUFBUUMsR0FBUixDQUFZLGNBQVosQ0FBTjtBQUFBLENBQXhDOztrQkFFZVosTSIsImZpbGUiOiIuL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pY3JvIGZyb20gJ21pY3JvJ1xuaW1wb3J0IHNlbmQgZnJvbSAnLi9oZWxwZXJzL3NlbmRNZXNzYWdlJ1xuXG5jb25zdCBzZXJ2ZXIgPSBtaWNybyhcblxuICBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcblxuICAgIGNvbnN0IHsgc3ViamVjdCwgbWVzc2FnZSwgc2VuZGVyRW1haWwgfSA9IGF3YWl0IG1pY3JvLmpzb24ocmVxKVxuXG4gICAgYXdhaXQgc2VuZChzdWJqZWN0LCBtZXNzYWdlLCBzZW5kZXJFbWFpbClcblxuICAgIHJldHVybiAnU3VjY2Vzc2Z1bGx5IHNlbnQhJ1xuXG4gIH1cblxuKVxuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCwgKCkgPT4gY29uc29sZS5sb2coJ0xpc3RlbmluZy4uLicpKVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiP2QwZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

eval("module.exports = require(\"micro\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtaWNyb1wiP2FmNjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1pY3JvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibWljcm9cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__("./src/main.js");


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCI/OWM0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGVtYWlsZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer-mailgun-transport\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyLW1haWxndW4tdHJhbnNwb3J0XCI/NTRkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlci1tYWlsZ3VuLXRyYW5zcG9ydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGVtYWlsZXItbWFpbGd1bi10cmFuc3BvcnRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });