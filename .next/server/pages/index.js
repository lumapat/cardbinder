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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_fetchGraphQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/fetchGraphQL */ \"./src/fetchGraphQL.ts\");\n\n\n\nconst { useState , useEffect  } = (react__WEBPACK_IMPORTED_MODULE_1___default());\nfunction HomePage() {\n    const [response1, setResponse] = useState(null);\n    useEffect(()=>{\n        (0,_src_fetchGraphQL__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`query { hello }`, []).then((response)=>{\n            setResponse(response.data.hello);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Server returned $\",\n            response1\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/migu/Projects/cardbinder/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDcUI7QUFFL0MsTUFBTSxFQUFDRSxRQUFRLEdBQUVDLFNBQVMsR0FBQyxHQUFHSCw4Q0FBSztBQUVuQyxTQUFTSSxRQUFRLEdBQUc7SUFDaEIsTUFBTSxDQUFDQyxTQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHSixRQUFRLENBQUMsSUFBSSxDQUFDO0lBRTlDQyxTQUFTLENBQUMsSUFBTTtRQUNaRiw2REFBWSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUNNLElBQUksQ0FBQ0YsQ0FBQUEsUUFBUSxHQUFJO1lBQ2pEQyxXQUFXLENBQUNELFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztTQUNwQyxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7S0FDTixDQUFDLENBQUM7SUFFSCxxQkFBTyw4REFBQ0csS0FBRzs7WUFBQyxtQkFBaUI7WUFBQ1QsU0FBUTs7Ozs7O1lBQU8sQ0FBQztDQUNqRDtBQUVELGlFQUFlRCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hHcmFwaFFMIGZyb20gXCIuLi9zcmMvZmV0Y2hHcmFwaFFMXCI7XG5cbmNvbnN0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSA9IFJlYWN0O1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hHcmFwaFFMKGBxdWVyeSB7IGhlbGxvIH1gLCBbXSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBzZXRSZXNwb25zZShyZXNwb25zZS5kYXRhLmhlbGxvKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8ZGl2PlNlcnZlciByZXR1cm5lZCAke3Jlc3BvbnNlfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZmV0Y2hHcmFwaFFMIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lUGFnZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJ0aGVuIiwiZGF0YSIsImhlbGxvIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/fetchGraphQL.ts":
/*!*****************************!*\
  !*** ./src/fetchGraphQL.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// your-app-name/src/fetchGraphQL.ts\nasync function fetchGraphQL(text, variables) {\n    // Fetch data from GitHub's GraphQL API:\n    const response = await fetch(\"https://localhost:8080\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query: text,\n            variables\n        })\n    });\n    // Get the response as JSON\n    return await response.json();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchGraphQL);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmV0Y2hHcmFwaFFMLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMsZUFBZUEsWUFBWSxDQUFDQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTtJQUN6Qyx3Q0FBd0M7SUFDeEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyx3QkFBd0IsRUFBRTtRQUNyREMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1lBQ25CQyxLQUFLLEVBQUVULElBQUk7WUFDWEMsU0FBUztTQUNWLENBQUM7S0FDSCxDQUFDO0lBRUYsMkJBQTJCO0lBQzNCLE9BQU8sTUFBTUMsUUFBUSxDQUFDUSxJQUFJLEVBQUUsQ0FBQztDQUM5QjtBQUVELGlFQUFlWCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hHcmFwaFFMLnRzP2YyMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8geW91ci1hcHAtbmFtZS9zcmMvZmV0Y2hHcmFwaFFMLnRzXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdyYXBoUUwodGV4dCwgdmFyaWFibGVzKSB7XG4gICAgLy8gRmV0Y2ggZGF0YSBmcm9tIEdpdEh1YidzIEdyYXBoUUwgQVBJOlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbG9jYWxob3N0OjgwODAnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXJ5OiB0ZXh0LFxuICAgICAgICB2YXJpYWJsZXMsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIC8vIEdldCB0aGUgcmVzcG9uc2UgYXMgSlNPTlxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBmZXRjaEdyYXBoUUw7Il0sIm5hbWVzIjpbImZldGNoR3JhcGhRTCIsInRleHQiLCJ2YXJpYWJsZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/fetchGraphQL.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();