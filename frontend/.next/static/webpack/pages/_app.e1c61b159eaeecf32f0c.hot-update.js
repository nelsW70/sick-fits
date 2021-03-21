webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RemoveFromCart; });\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/nelsonwfoltz/Desktop/sick-fits/frontend/components/RemoveFromCart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\\n    deleteCartItem(id: $id) {\\n      id\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar BigButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n  displayName: \"RemoveFromCart__BigButton\",\n  componentId: \"emvtd6-0\"\n})([\"font-size:3rem;background:none;border:0;&:hover{color:red;cursor:pointer;}\"]);\n_c = BigButton;\nvar REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\nfunction RemoveFromCart(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"])(REMOVE_FROM_CART_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = Object(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useMutation, 2),\n      removeFromCart = _useMutation2[0],\n      loading = _useMutation2[1].loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(BigButton, {\n    type: \"button\",\n    title: \"Remove This Item from Cart\",\n    children: \"\\xD7\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(RemoveFromCart, \"1gobEhNNb1zJTO706ogXU/cmTeU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useMutation\"]];\n});\n\n_c2 = RemoveFromCart;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BigButton\");\n$RefreshReg$(_c2, \"RemoveFromCart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcz9iMjVlIl0sIm5hbWVzIjpbIkJpZ0J1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsIlJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04iLCJncWwiLCJSZW1vdmVGcm9tQ2FydCIsImlkIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZW1vdmVGcm9tQ2FydCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxrRkFBZjtLQUFNRixTO0FBVU4sSUFBTUcseUJBQXlCLEdBQUdDLGtEQUFILG1CQUEvQjtBQVFlLFNBQVNDLGNBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFOQyxFQUFNLFFBQU5BLEVBQU07O0FBQUEscUJBQ1BDLGtFQUFXLENBQUNKLHlCQUFELEVBQTRCO0FBQzNFSyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRGdFLEdBQTVCLENBREo7QUFBQTtBQUFBLE1BQ3RDRyxjQURzQztBQUFBLE1BQ3BCQyxPQURvQixvQkFDcEJBLE9BRG9COztBQUk3QyxzQkFDRSxxRUFBQyxTQUFEO0FBQVcsUUFBSSxFQUFDLFFBQWhCO0FBQXlCLFNBQUssRUFBQyw0QkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQVR1QkwsYztVQUNnQkUsMEQ7OztNQURoQkYsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJpZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xuICAgIGRlbGV0ZUNhcnRJdGVtKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcbiAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxCaWdCdXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVtb3ZlIFRoaXMgSXRlbSBmcm9tIENhcnRcIj5cbiAgICAgICZ0aW1lcztcbiAgICA8L0JpZ0J1dHRvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RemoveFromCart.js\n");

/***/ })

})