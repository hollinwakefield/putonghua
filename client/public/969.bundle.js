(self.webpackChunkproblem_starter=self.webpackChunkproblem_starter||[]).push([[969],{969:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar LoadingTimer = function LoadingTimer(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState2 = _slicedToArray(_useState, 2),\n      minutes = _useState2[0],\n      setMinutes = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10),\n      _useState4 = _slicedToArray(_useState3, 2),\n      seconds = _useState4[0],\n      setSeconds = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(seconds),\n      _useState6 = _slicedToArray(_useState5, 2),\n      displayTime = _useState6[0],\n      setDisplayTime = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = null;\n    interval = setInterval(function () {\n      setSeconds(function (seconds) {\n        return seconds - 1;\n      });\n      setDisplayTime(seconds);\n      props.onChange(seconds);\n    }, 1000);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [seconds]);\n\n  var countdown = function countdown() {\n    // console.log(timer);\n    setTimer(timer - 1);\n    return timer;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "timer-div"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n    className: "timer"\n  }, seconds, "s"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingTimer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ibGVtLXN0YXJ0ZXIvLi9jbGllbnQvc291cmNlL2NvbXBvbmVudHMvTG9hZGluZ1RpbWVyLmpzeD82MmI0Il0sIm5hbWVzIjpbIkxvYWRpbmdUaW1lciIsInByb3BzIiwidXNlU3RhdGUiLCJtaW51dGVzIiwic2V0TWludXRlcyIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiZGlzcGxheVRpbWUiLCJzZXREaXNwbGF5VGltZSIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJvbkNoYW5nZSIsImNsZWFySW50ZXJ2YWwiLCJjb3VudGRvd24iLCJzZXRUaW1lciIsInRpbWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QixrQkFBOEJDLCtDQUFRLENBQUMsQ0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBOEJGLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBT0csT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBc0NKLCtDQUFRLENBQUNHLE9BQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9FLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFFBQVEsR0FBRyxJQUFmO0FBRUFBLFlBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDM0JMLGdCQUFVLENBQUMsVUFBQ0QsT0FBRDtBQUFBLGVBQWFBLE9BQU8sR0FBRyxDQUF2QjtBQUFBLE9BQUQsQ0FBVjtBQUNBRyxvQkFBYyxDQUFDSCxPQUFELENBQWQ7QUFDQUosV0FBSyxDQUFDVyxRQUFOLENBQWVQLE9BQWY7QUFDRCxLQUpxQixFQUluQixJQUptQixDQUF0QjtBQU1BLFdBQU87QUFBQSxhQUFNUSxhQUFhLENBQUNILFFBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FWUSxFQVVOLENBQUNMLE9BQUQsQ0FWTSxDQUFUOztBQVlBLE1BQU1TLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEI7QUFDQUMsWUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFSO0FBQ0EsV0FBT0EsS0FBUDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUF5QlgsT0FBekIsTUFERixDQURGO0FBS0QsQ0E1QkQ7O0FBOEJBLGlFQUFlTCxZQUFmIiwiZmlsZSI6Ijk2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IExvYWRpbmdUaW1lciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMTApO1xuICBjb25zdCBbZGlzcGxheVRpbWUsIHNldERpc3BsYXlUaW1lXSA9IHVzZVN0YXRlKHNlY29uZHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGludGVydmFsID0gbnVsbDtcblxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Vjb25kcygoc2Vjb25kcykgPT4gc2Vjb25kcyAtIDEpO1xuICAgICAgc2V0RGlzcGxheVRpbWUoc2Vjb25kcyk7XG4gICAgICBwcm9wcy5vbkNoYW5nZShzZWNvbmRzKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3NlY29uZHNdKTtcblxuICBjb25zdCBjb3VudGRvd24gPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2codGltZXIpO1xuICAgIHNldFRpbWVyKHRpbWVyIC0gMSk7XG4gICAgcmV0dXJuIHRpbWVyO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lci1kaXZcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVyXCI+e3NlY29uZHN9czwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdUaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///969\n')}}]);