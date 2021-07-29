/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproblem_starter"] = self["webpackChunkproblem_starter"] || []).push([["client_source_components_gameplay_GameResults_jsx"],{

/***/ "./client/source/components/gameplay/GameResults.jsx":
/*!***********************************************************!*\
  !*** ./client/source/components/gameplay/GameResults.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar GameResults = function GameResults(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      formSubmitted = _useState2[0],\n      setFormSubmitted = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      username = _useState4[0],\n      setUsername = _useState4[1];\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault(); // console.log(username);\n\n    setFormSubmitted(true);\n    var scoreObject = {};\n    scoreObject.name = username;\n    scoreObject.score = props.score;\n    scoreObject.questionsAnswered = props.questionsAnswered;\n    scoreObject.questionsCorrect = props.questionsCorrect;\n    scoreObject.accuracy = props.accuracy + \"%\";\n    scoreObject.totalScore = props.totalScore; // console.log(scoreObject);\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/scores\", scoreObject) // .then((response) => {\n    //   console.log(\"hi, you made a successful post\", response);\n    // })\n    [\"catch\"](function (error) {\n      console.log(\"Error sending data\", error);\n    });\n  };\n\n  if (formSubmitted) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"score-summary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Final Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, props.totalScore, \" total points\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.score, \" points\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.accuracy, \"% accuracy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.accuracyBonus, \" accuracy bonus points\")), \"Thanks for playing, \", username, \"! Want to play again?\");\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"score-summary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, \"Final Score\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", null, props.totalScore, \" total points\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.score, \" points\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.accuracy, \"% accuracy\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, props.accuracyBonus, \" accuracy bonus points\")), \"Enter a username to save your score: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n      className: \"save-score\",\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      className: \"save-input\",\n      type: \"text\",\n      required: \"required\",\n      value: username,\n      onChange: function onChange(event) {\n        return setUsername(event.target.value);\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      className: \"save-button\"\n    }, \"Save Score\")));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameResults);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9ibGVtLXN0YXJ0ZXIvLi9jbGllbnQvc291cmNlL2NvbXBvbmVudHMvZ2FtZXBsYXkvR2FtZVJlc3VsdHMuanN4PzI2MTciXSwibmFtZXMiOlsiR2FtZVJlc3VsdHMiLCJwcm9wcyIsInVzZVN0YXRlIiwiZm9ybVN1Ym1pdHRlZCIsInNldEZvcm1TdWJtaXR0ZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNjb3JlT2JqZWN0IiwibmFtZSIsInNjb3JlIiwicXVlc3Rpb25zQW5zd2VyZWQiLCJxdWVzdGlvbnNDb3JyZWN0IiwiYWNjdXJhY3kiLCJ0b3RhbFNjb3JlIiwiYXhpb3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhY2N1cmFjeUJvbnVzIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QixrQkFBMENDLCtDQUFRLENBQUMsS0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQWdDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCQSxTQUFLLENBQUNDLGNBQU4sR0FEOEIsQ0FFOUI7O0FBQ0FMLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQSxRQUFNTSxXQUFXLEdBQUcsRUFBcEI7QUFDQUEsZUFBVyxDQUFDQyxJQUFaLEdBQW1CTixRQUFuQjtBQUNBSyxlQUFXLENBQUNFLEtBQVosR0FBb0JYLEtBQUssQ0FBQ1csS0FBMUI7QUFDQUYsZUFBVyxDQUFDRyxpQkFBWixHQUFnQ1osS0FBSyxDQUFDWSxpQkFBdEM7QUFDQUgsZUFBVyxDQUFDSSxnQkFBWixHQUErQmIsS0FBSyxDQUFDYSxnQkFBckM7QUFDQUosZUFBVyxDQUFDSyxRQUFaLEdBQXVCZCxLQUFLLENBQUNjLFFBQU4sR0FBaUIsR0FBeEM7QUFDQUwsZUFBVyxDQUFDTSxVQUFaLEdBQXlCZixLQUFLLENBQUNlLFVBQS9CLENBVjhCLENBVzlCOztBQUNBQyxxREFBQSxDQUNRLFNBRFIsRUFDbUJQLFdBRG5CLEVBRUU7QUFDQTtBQUNBO0FBSkYsY0FLUyxVQUFDUSxLQUFELEVBQVc7QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixLQUFsQztBQUNELEtBUEg7QUFRRCxHQXBCRDs7QUFzQkEsTUFBSWYsYUFBSixFQUFtQjtBQUNqQix3QkFDRSxpSEFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLDJFQURGLGVBRUUsNkRBQUtGLEtBQUssQ0FBQ2UsVUFBWCxrQkFGRixlQUdFLDREQUFJZixLQUFLLENBQUNXLEtBQVYsWUFIRixlQUlFLDREQUFJWCxLQUFLLENBQUNjLFFBQVYsZUFKRixlQUtFLDREQUFJZCxLQUFLLENBQUNvQixhQUFWLDJCQUxGLENBREYsMEJBUXVCaEIsUUFSdkIsMEJBREY7QUFZRCxHQWJELE1BYU87QUFDTCx3QkFDRSxpSEFDRTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNFLDJFQURGLGVBRUUsNkRBQUtKLEtBQUssQ0FBQ2UsVUFBWCxrQkFGRixlQUdFLDREQUFJZixLQUFLLENBQUNXLEtBQVYsWUFIRixlQUlFLDREQUFJWCxLQUFLLENBQUNjLFFBQVYsZUFKRixlQUtFLDREQUFJZCxLQUFLLENBQUNvQixhQUFWLDJCQUxGLENBREYsd0RBUXVDLDREQVJ2QyxlQVNFO0FBQU0sZUFBUyxFQUFDLFlBQWhCO0FBQTZCLGNBQVEsRUFBRWQ7QUFBdkMsb0JBRUU7QUFDRSxlQUFTLEVBQUMsWUFEWjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsY0FBUSxFQUFDLFVBSFg7QUFJRSxXQUFLLEVBQUVGLFFBSlQ7QUFLRSxjQUFRLEVBQUUsa0JBQUNHLEtBQUQ7QUFBQSxlQUFXRixXQUFXLENBQUNFLEtBQUssQ0FBQ2MsTUFBTixDQUFhQyxLQUFkLENBQXRCO0FBQUE7QUFMWixNQUZGLGVBVUU7QUFBUSxlQUFTLEVBQUM7QUFBbEIsb0JBVkYsQ0FURixDQURGO0FBd0JEO0FBQ0YsQ0FqRUQ7O0FBbUVBLGlFQUFldkIsV0FBZiIsImZpbGUiOiIuL2NsaWVudC9zb3VyY2UvY29tcG9uZW50cy9nYW1lcGxheS9HYW1lUmVzdWx0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBHYW1lUmVzdWx0cyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbZm9ybVN1Ym1pdHRlZCwgc2V0Rm9ybVN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gICAgc2V0Rm9ybVN1Ym1pdHRlZCh0cnVlKTtcbiAgICBjb25zdCBzY29yZU9iamVjdCA9IHt9O1xuICAgIHNjb3JlT2JqZWN0Lm5hbWUgPSB1c2VybmFtZTtcbiAgICBzY29yZU9iamVjdC5zY29yZSA9IHByb3BzLnNjb3JlO1xuICAgIHNjb3JlT2JqZWN0LnF1ZXN0aW9uc0Fuc3dlcmVkID0gcHJvcHMucXVlc3Rpb25zQW5zd2VyZWQ7XG4gICAgc2NvcmVPYmplY3QucXVlc3Rpb25zQ29ycmVjdCA9IHByb3BzLnF1ZXN0aW9uc0NvcnJlY3Q7XG4gICAgc2NvcmVPYmplY3QuYWNjdXJhY3kgPSBwcm9wcy5hY2N1cmFjeSArIFwiJVwiO1xuICAgIHNjb3JlT2JqZWN0LnRvdGFsU2NvcmUgPSBwcm9wcy50b3RhbFNjb3JlO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjb3JlT2JqZWN0KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCIvc2NvcmVzXCIsIHNjb3JlT2JqZWN0KVxuICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaGksIHlvdSBtYWRlIGEgc3VjY2Vzc2Z1bCBwb3N0XCIsIHJlc3BvbnNlKTtcbiAgICAgIC8vIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igc2VuZGluZyBkYXRhXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmIChmb3JtU3VibWl0dGVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtc3VtbWFyeVwiPlxuICAgICAgICAgIDxoMj5GaW5hbCBTY29yZTwvaDI+XG4gICAgICAgICAgPGgyPntwcm9wcy50b3RhbFNjb3JlfSB0b3RhbCBwb2ludHM8L2gyPlxuICAgICAgICAgIDxwPntwcm9wcy5zY29yZX0gcG9pbnRzPC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5hY2N1cmFjeX0lIGFjY3VyYWN5PC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5hY2N1cmFjeUJvbnVzfSBhY2N1cmFjeSBib251cyBwb2ludHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBUaGFua3MgZm9yIHBsYXlpbmcsIHt1c2VybmFtZX0hIFdhbnQgdG8gcGxheSBhZ2Fpbj9cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmUtc3VtbWFyeVwiPlxuICAgICAgICAgIDxoMj5GaW5hbCBTY29yZTwvaDI+XG4gICAgICAgICAgPGgyPntwcm9wcy50b3RhbFNjb3JlfSB0b3RhbCBwb2ludHM8L2gyPlxuICAgICAgICAgIDxwPntwcm9wcy5zY29yZX0gcG9pbnRzPC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5hY2N1cmFjeX0lIGFjY3VyYWN5PC9wPlxuICAgICAgICAgIDxwPntwcm9wcy5hY2N1cmFjeUJvbnVzfSBhY2N1cmFjeSBib251cyBwb2ludHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBFbnRlciBhIHVzZXJuYW1lIHRvIHNhdmUgeW91ciBzY29yZTogPGJyPjwvYnI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNhdmUtc2NvcmVcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICB7LyogPGxhYmVsPiAqL31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNhdmUtaW5wdXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIHsvKiA8L2xhYmVsPiAqL31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNhdmUtYnV0dG9uXCI+U2F2ZSBTY29yZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lUmVzdWx0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/source/components/gameplay/GameResults.jsx\n");

/***/ })

}]);