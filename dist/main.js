/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/fn/promise'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n // if exporting multi objects from same file // importing\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var clickMap = document.querySelector(\"div.canvas\");\n  var canEl = document.querySelector(\"canvas#mycanvas\");\n  var ctx = canEl.getContext('2d');\n  ctx.canvas.width = window.width * 0.6;\n  ctx.canvas.height = window.height * 0.4; // window.addEventListener(resolve)\n  // ctx.scale(1,0.75);\n\n  var firstGame = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__.Game(ctx);\n  firstGame.print();\n  console.log(ctx);\n  var chopPoint = {\n    x: null,\n    y: null\n  };\n  clickMap.addEventListener('click', function (e) {\n    chopPoint.x = e.x;\n    chopPoint.y = e.y;\n    console.log(chopPoint); // requestAnimationFrame\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHBjaHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja01hcCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW5FbCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXMiLCJ3aWR0aCIsIndpbmRvdyIsImhlaWdodCIsImZpcnN0R2FtZSIsIkdhbWUiLCJwcmludCIsImNvbnNvbGUiLCJsb2ciLCJjaG9wUG9pbnQiLCJ4IiwieSIsImUiXSwibWFwcGluZ3MiOiI7OztBQUFBO0NBRUE7O0FBS0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FFRSxrQkFGRixFQUVzQixZQUFNO0FBRXhCLE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWQ7QUFFQSxNQUFNRSxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsVUFBTixDQUFpQixJQUFqQixDQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsTUFBSixDQUFXQyxLQUFYLEdBQW1CQyxNQUFNLENBQUNELEtBQVAsR0FBZSxHQUFsQztBQUNBSCxLQUFHLENBQUNFLE1BQUosQ0FBV0csTUFBWCxHQUFvQkQsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLEdBQXBDLENBUHdCLENBU3hCO0FBQ0E7O0FBRUEsTUFBSUMsU0FBUyxHQUFHLElBQUlDLCtDQUFKLENBQVNQLEdBQVQsQ0FBaEI7QUFDQU0sV0FBUyxDQUFDRSxLQUFWO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixHQUFaO0FBQ0EsTUFBTVcsU0FBUyxHQUFHO0FBQ2hCQyxLQUFDLEVBQUUsSUFEYTtBQUVoQkMsS0FBQyxFQUFFO0FBRmEsR0FBbEI7QUFJQWhCLFVBQVEsQ0FBQ0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU2tCLENBQVQsRUFBYTtBQUM5Q0gsYUFBUyxDQUFDQyxDQUFWLEdBQWNFLENBQUMsQ0FBQ0YsQ0FBaEI7QUFDQUQsYUFBUyxDQUFDRSxDQUFWLEdBQWNDLENBQUMsQ0FBQ0QsQ0FBaEI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosRUFIOEMsQ0FJOUM7QUFDRCxHQUxEO0FBTUQsQ0EzQkgiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcImNvcmUtanMvZm4vcHJvbWlzZVwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuLy8gaWYgZXhwb3J0aW5nIG11bHRpIG9iamVjdHMgZnJvbSBzYW1lIGZpbGUgLy8gaW1wb3J0aW5nXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXJcbihcbiAgXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjbGlja01hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2FudmFzXCIpO1xuICAgIGNvbnN0IGNhbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhcyNteWNhbnZhc1wiKTsgXG4gICAgXG4gICAgY29uc3QgY3R4ID0gY2FuRWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHguY2FudmFzLndpZHRoID0gd2luZG93LndpZHRoICogMC42O1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmhlaWdodCAqIDAuNDtcbiAgICBcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihyZXNvbHZlKVxuICAgIC8vIGN0eC5zY2FsZSgxLDAuNzUpO1xuICAgIFxuICAgIGxldCBmaXJzdEdhbWUgPSBuZXcgR2FtZShjdHgpO1xuICAgIGZpcnN0R2FtZS5wcmludCgpO1xuICAgIGNvbnNvbGUubG9nKGN0eCk7XG4gICAgY29uc3QgY2hvcFBvaW50ID0ge1xuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGxcbiAgICB9O1xuICAgIGNsaWNrTWFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkgIHtcbiAgICAgIGNob3BQb2ludC54ID0gZS54O1xuICAgICAgY2hvcFBvaW50LnkgPSBlLnk7XG4gICAgICBjb25zb2xlLmxvZyhjaG9wUG9pbnQgKTtcbiAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIH0pO1xuICB9XG4pO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/animates/board.js":
/*!***************************************!*\
  !*** ./src/scripts/animates/board.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFace\": function() { return /* binding */ renderFace; },\n/* harmony export */   \"Board\": function() { return /* binding */ Board; }\n/* harmony export */ });\n// class board constructor\n// style = optional later\n// texture instantiate with texture loaded \n// clean = boolean = when board has been used it accumulates debris\n// set to false after 2 cuts\n// contents = array of objects on surface \n// const POS = [x,y];\nfunction renderFace(c) {\n  c.moveTo(100, 0);\n  c.lineTo(100, 700);\n  c.moveTo(200, 0);\n  c.lineTo(200, 700);\n  c.moveTo(300, 0);\n  c.lineTo(300, 700);\n  c.moveTo(400, 0);\n  c.lineTo(400, 700);\n  c.moveTo(500, 0);\n  c.lineTo(500, 700);\n  c.moveTo(600, 0);\n  c.lineTo(600, 700);\n  c.moveTo(700, 0);\n  c.lineTo(700, 700);\n  c.moveTo(800, 0);\n  c.lineTo(800, 700);\n  c.moveTo(0, 100);\n  c.lineTo(900, 100);\n  c.moveTo(0, 200);\n  c.lineTo(900, 200);\n  c.moveTo(0, 300);\n  c.lineTo(900, 300);\n  c.moveTo(0, 400);\n  c.lineTo(900, 400);\n  c.moveTo(0, 500);\n  c.lineTo(900, 500);\n  c.moveTo(0, 600);\n  c.lineTo(900, 600);\n  c.strokeStyle = \"black\";\n  c.stroke(); // board mock \n  // c.fillStyle = \"rgba(229,136,38)\";\n  // c.fillRect(100,600,650,133);\n  // c.moveTo(100,600);\n  // c.strokeStyle = \"rgba(229,136,38)\";\n  // c.lineTo(300, 300);\n  // c.lineTo(900, 300);\n  // c.lineTo(750,600);\n  // c.stroke();\n  // c.fill();\n  // c.lineTo(750,733);\n  // c.lineTo(900,433);\n  // c.lineTo(900, 300);\n  // c.stroke();\n  // c.fill();\n  // c.clearRect(160,160, 167.5, 105);\n  //\t\t\tx  y width height\n  // c.beginPath();\n  // c.arc(0, 0, 20, 0, 2*Math.PI, true);\n  // c.strokeStyle = \"blue\";\n  // c.lineWidth = 3;\n  // c.stroke();\n  // c.fillStyle = \"grey\";\n  // c.fill();\n  // // c.clear();\n  // c.strokeStyle = \"black\";\n  // c.strokeRect(160,160,167.5,105);\n}\nfunction Board(c) {\n  // this.pos = POS;\n  this.contents = [];\n  this.clean = true;\n  this.c = c;\n  this.face = renderFace(c);\n}\n\nBoard.prototype.chopDrop = function (pos) {}; // clean method \n// empty surface array\n// collect method\n// upon cuts generates smootz object//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHBjaHAvLi9zcmMvc2NyaXB0cy9hbmltYXRlcy9ib2FyZC5qcz8xNGZkIl0sIm5hbWVzIjpbInJlbmRlckZhY2UiLCJjIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJCb2FyZCIsImNvbnRlbnRzIiwiY2xlYW4iLCJmYWNlIiwicHJvdG90eXBlIiwiY2hvcERyb3AiLCJwb3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtBQUU1QkEsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsR0FBVCxFQUFhLENBQWI7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEdBQVg7QUFDQUQsR0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFhLEdBQWI7QUFDQUYsR0FBQyxDQUFDRyxXQUFGLEdBQWUsT0FBZjtBQUNBSCxHQUFDLENBQUNJLE1BQUYsR0EvQjRCLENBZ0M1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRDtBQUVNLFNBQVNDLEtBQVQsQ0FBZUwsQ0FBZixFQUFrQjtBQUVyQjtBQUNBLE9BQUtNLFFBQUwsR0FBZ0IsRUFBaEI7QUFFQSxPQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLE9BQUtQLENBQUwsR0FBU0EsQ0FBVDtBQUNBLE9BQUtRLElBQUwsR0FBWVQsVUFBVSxDQUFDQyxDQUFELENBQXRCO0FBR0g7O0FBQ0RLLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkMsUUFBaEIsR0FBMkIsVUFBU0MsR0FBVCxFQUFjLENBRXhDLENBRkQsQyxDQUlBO0FBRUU7QUFJRjtBQUNFIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvYW5pbWF0ZXMvYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY2xhc3MgYm9hcmQgY29uc3RydWN0b3JcblxuLy8gc3R5bGUgPSBvcHRpb25hbCBsYXRlclxuXG5cbi8vIHRleHR1cmUgaW5zdGFudGlhdGUgd2l0aCB0ZXh0dXJlIGxvYWRlZCBcbi8vIGNsZWFuID0gYm9vbGVhbiA9IHdoZW4gYm9hcmQgaGFzIGJlZW4gdXNlZCBpdCBhY2N1bXVsYXRlcyBkZWJyaXNcbi8vIHNldCB0byBmYWxzZSBhZnRlciAyIGN1dHNcbi8vIGNvbnRlbnRzID0gYXJyYXkgb2Ygb2JqZWN0cyBvbiBzdXJmYWNlIFxuLy8gY29uc3QgUE9TID0gW3gseV07XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRmFjZShjKSB7XG4gIFxuICBjLm1vdmVUbygxMDAsMCk7XG4gIGMubGluZVRvKDEwMCw3MDApO1xuICBjLm1vdmVUbygyMDAsMCk7XG4gIGMubGluZVRvKDIwMCw3MDApO1xuICBjLm1vdmVUbygzMDAsMCk7XG4gIGMubGluZVRvKDMwMCw3MDApO1xuICBjLm1vdmVUbyg0MDAsMCk7XG4gIGMubGluZVRvKDQwMCw3MDApO1xuICBjLm1vdmVUbyg1MDAsMCk7XG4gIGMubGluZVRvKDUwMCw3MDApO1xuICBjLm1vdmVUbyg2MDAsMCk7XG4gIGMubGluZVRvKDYwMCw3MDApO1xuICBjLm1vdmVUbyg3MDAsMCk7XG4gIGMubGluZVRvKDcwMCw3MDApO1xuICBjLm1vdmVUbyg4MDAsMCk7XG4gIGMubGluZVRvKDgwMCw3MDApO1xuICBjLm1vdmVUbygwLDEwMCk7XG4gIGMubGluZVRvKDkwMCwxMDApO1xuICBjLm1vdmVUbygwLDIwMCk7XG4gIGMubGluZVRvKDkwMCwyMDApO1xuICBjLm1vdmVUbygwLDMwMCk7XG4gIGMubGluZVRvKDkwMCwzMDApO1xuICBjLm1vdmVUbygwLDQwMCk7XG4gIGMubGluZVRvKDkwMCw0MDApO1xuICBjLm1vdmVUbygwLDUwMCk7XG4gIGMubGluZVRvKDkwMCw1MDApO1xuICBjLm1vdmVUbygwLDYwMCk7XG4gIGMubGluZVRvKDkwMCw2MDApO1xuICBjLnN0cm9rZVN0eWxlPSBcImJsYWNrXCI7XG4gIGMuc3Ryb2tlKCk7XG4gIC8vIGJvYXJkIG1vY2sgXG4gIC8vIGMuZmlsbFN0eWxlID0gXCJyZ2JhKDIyOSwxMzYsMzgpXCI7XG4gIC8vIGMuZmlsbFJlY3QoMTAwLDYwMCw2NTAsMTMzKTtcbiAgLy8gYy5tb3ZlVG8oMTAwLDYwMCk7XG4gIC8vIGMuc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjI5LDEzNiwzOClcIjtcbiAgLy8gYy5saW5lVG8oMzAwLCAzMDApO1xuICAvLyBjLmxpbmVUbyg5MDAsIDMwMCk7XG4gIC8vIGMubGluZVRvKDc1MCw2MDApO1xuICAvLyBjLnN0cm9rZSgpO1xuXG4gIC8vIGMuZmlsbCgpO1xuICAvLyBjLmxpbmVUbyg3NTAsNzMzKTtcbiAgLy8gYy5saW5lVG8oOTAwLDQzMyk7XG4gIC8vIGMubGluZVRvKDkwMCwgMzAwKTtcbiAgLy8gYy5zdHJva2UoKTtcbiAgLy8gYy5maWxsKCk7XG4gIC8vIGMuY2xlYXJSZWN0KDE2MCwxNjAsIDE2Ny41LCAxMDUpO1xuICAvL1x0XHRcdHggIHkgd2lkdGggaGVpZ2h0XG4gIC8vIGMuYmVnaW5QYXRoKCk7XG4gIC8vIGMuYXJjKDAsIDAsIDIwLCAwLCAyKk1hdGguUEksIHRydWUpO1xuICAvLyBjLnN0cm9rZVN0eWxlID0gXCJibHVlXCI7XG4gIC8vIGMubGluZVdpZHRoID0gMztcbiAgLy8gYy5zdHJva2UoKTtcbiAgLy8gYy5maWxsU3R5bGUgPSBcImdyZXlcIjtcbiAgLy8gYy5maWxsKCk7XG4gIC8vIC8vIGMuY2xlYXIoKTtcbiAgLy8gYy5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgLy8gYy5zdHJva2VSZWN0KDE2MCwxNjAsMTY3LjUsMTA1KTtcbiAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCb2FyZChjKSB7XG4gIFxuICAgIC8vIHRoaXMucG9zID0gUE9TO1xuICAgIHRoaXMuY29udGVudHMgPSBbXTtcbiAgICBcbiAgICB0aGlzLmNsZWFuID0gdHJ1ZTtcbiAgICB0aGlzLmMgPSBjO1xuICAgIHRoaXMuZmFjZSA9IHJlbmRlckZhY2UoYyk7IFxuICBcbiAgXG59XG5Cb2FyZC5wcm90b3R5cGUuY2hvcERyb3AgPSBmdW5jdGlvbihwb3MpIHtcbiAgICBcbn07XG5cbi8vIGNsZWFuIG1ldGhvZCBcblxuICAvLyBlbXB0eSBzdXJmYWNlIGFycmF5XG5cblxuXG4vLyBjb2xsZWN0IG1ldGhvZFxuICAvLyB1cG9uIGN1dHMgZ2VuZXJhdGVzIHNtb290eiBvYmplY3RcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/animates/board.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _animates_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animates/board */ \"./src/scripts/animates/board.js\");\n\nvar Game = function Game(ctx) {\n  this.board = new _animates_board__WEBPACK_IMPORTED_MODULE_0__.Board(ctx);\n}; // export const Board = function () {\n// };\n\nGame.prototype.print = function () {}; // export default Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHBjaHAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwibmFtZXMiOlsiR2FtZSIsImN0eCIsImJvYXJkIiwiQm9hcmQiLCJwcm90b3R5cGUiLCJwcmludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVVDLEdBQVYsRUFBZTtBQUNqQyxPQUFLQyxLQUFMLEdBQWEsSUFBSUMsa0RBQUosQ0FBVUYsR0FBVixDQUFiO0FBRUQsQ0FITSxDLENBSVA7QUFFQTs7QUFDQUQsSUFBSSxDQUFDSSxTQUFMLENBQWVDLEtBQWYsR0FBdUIsWUFBVyxDQUVqQyxDQUZELEMsQ0FPQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvYXJkLCByZW5kZXJGYWNlfSBmcm9tIFwiLi9hbmltYXRlcy9ib2FyZFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZSA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjdHgpO1xuXG59O1xuLy8gZXhwb3J0IGNvbnN0IEJvYXJkID0gZnVuY3Rpb24gKCkge1xuXG4vLyB9O1xuR2FtZS5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbigpIHtcblxufTtcblxuXG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHBjaHAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3NyYy9pbmRleC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;