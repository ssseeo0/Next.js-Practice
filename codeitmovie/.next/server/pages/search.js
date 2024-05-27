"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SearchForm({ initialValue =\"\"  }) {\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialValue);\n    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleChange(e) {\n        setValue(e.target.value);\n    }\n    function handleSubmit(e) {\n        e.preventDefault();\n        if (!value) {\n            query.push(\"/\");\n            return;\n        }\n        query.push(`/search?q=${value}`);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"q\",\n                onChange: handleChange,\n                value: value\n            }, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\components\\\\SearchForm.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"검색\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\components\\\\SearchForm.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\components\\\\SearchForm.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUDtBQUVsQixTQUFTRSxXQUFXLEVBQUVDLGNBQWUsR0FBRSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDRTtJQUNuQyxNQUFNRyxRQUFRTixzREFBU0E7SUFFdkIsU0FBU08sYUFBYUMsQ0FBQyxFQUFFO1FBQ3ZCSCxTQUFTRyxFQUFFQyxNQUFNLENBQUNMLEtBQUs7SUFDekI7SUFFQSxTQUFTTSxhQUFhRixDQUFDLEVBQUU7UUFDdkJBLEVBQUVHLGNBQWM7UUFDaEIsSUFBSSxDQUFDUCxPQUFPO1lBQ1ZFLE1BQU1NLElBQUksQ0FBQztZQUNYO1FBQ0YsQ0FBQztRQUNETixNQUFNTSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUVSLE1BQU0sQ0FBQztJQUNqQztJQUVBLHFCQUNFLDhEQUFDUztRQUFLQyxVQUFVSjs7MEJBQ2QsOERBQUNLO2dCQUFNQyxNQUFLO2dCQUFJQyxVQUFVVjtnQkFBY0gsT0FBT0E7Ozs7OzswQkFDL0MsOERBQUNjOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluay1jb21wb25lbnQvLi9jb21wb25lbnRzL1NlYXJjaEZvcm0uanM/NjVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBpbml0aWFsVmFsdWUgPSBcIlwiIH0pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgY29uc3QgcXVlcnkgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHF1ZXJ5LnB1c2goXCIvXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBxdWVyeS5wdXNoKGAvc2VhcmNoP3E9JHt2YWx1ZX1gKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGlucHV0IG5hbWU9XCJxXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e3ZhbHVlfSAvPlxyXG4gICAgICA8YnV0dG9uPuqygOyDiTwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiU2VhcmNoRm9ybSIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJxdWVyeSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm5hbWUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchForm.js\n");

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Search)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Search() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { q  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"watchit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\pages\\\\search.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                initialValue: q\n            }, void 0, false, {\n                fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\pages\\\\search.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    q,\n                    \" 검색 결과\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Programming\\\\Next.js\\\\Next.js-Practice\\\\codeitmovie\\\\pages\\\\search.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUNUO0FBRXpCLFNBQVNFLFNBQVM7SUFDL0IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUcsRUFBQyxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFMUIscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDTiw4REFBVUE7Z0JBQUNPLGNBQWNIOzs7Ozs7MEJBQzFCLDhEQUFDSTs7b0JBQUlKO29CQUFFOzs7Ozs7Ozs7QUFHYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluay1jb21wb25lbnQvLi9wYWdlcy9zZWFyY2guanM/OTIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHEgfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+d2F0Y2hpdDwvaDE+XG4gICAgICA8U2VhcmNoRm9ybSBpbml0aWFsVmFsdWU9e3F9IC8+XG4gICAgICA8aDI+e3F9IOqygOyDiSDqsrDqs7w8L2gyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNlYXJjaEZvcm0iLCJ1c2VSb3V0ZXIiLCJTZWFyY2giLCJyb3V0ZXIiLCJxIiwicXVlcnkiLCJoMSIsImluaXRpYWxWYWx1ZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search.js"));
module.exports = __webpack_exports__;

})();