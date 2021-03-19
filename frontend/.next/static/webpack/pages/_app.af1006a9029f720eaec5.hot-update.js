webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\nvar _jsxFileName = \"/Users/nelsonwfoltz/Desktop/sick-fits/frontend/components/Cart.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 1rem 0;\\n  border-bottom: 1px solid var(--lightGrey);\\n  display: grid;\\n  grid-template-columns: auto 1fr auto;\\n  img {\\n    margin-right: 1rem;\\n  }\\n  h3,\\n  p {\\n    margin: 0;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li(_templateObject());\n_c = CartItemStyles;\n\nfunction CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  var product = cartItem.product;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CartItemStyles, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      src: product.image.publicUrlTransformed,\n      alt: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = CartItem;\nfunction Cart() {\n  _s();\n\n  var _this = this;\n\n  var me = Object(_User__WEBPACK_IMPORTED_MODULE_5__[\"useUser\"])();\n  if (!me) return null;\n  console.log(me);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    open: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [me.name, \"'s Cart\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: me.cart.map(function (cartItem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CartItem, {\n          cartItem: cartItem\n        }, cartItem.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Cart, \"Z98rfMCuMoVDW8LRyFv7Prn3FZ8=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_5__[\"useUser\"]];\n});\n\n_c3 = Cart;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n$RefreshReg$(_c3, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJsaSIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsImNhcnQiLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWLG1CQUFwQjtLQUFNRixjOztBQWNOLFNBQVNHLFFBQVQsT0FBZ0M7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFBQSxNQUN0QkMsT0FEc0IsR0FDVkQsUUFEVSxDQUN0QkMsT0FEc0I7QUFHOUIsc0JBQ0UscUVBQUMsY0FBRDtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0Msb0JBQXhCO0FBQThDLFNBQUcsRUFBRUYsT0FBTyxDQUFDRztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O01BUlFMLFE7QUFVTSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MscURBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFBUyxPQUFPLElBQVA7QUFDVEUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSxzQkFDRSxxRUFBQywwREFBRDtBQUFZLFFBQUksTUFBaEI7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQUEsbUJBQVVBLEVBQUUsQ0FBQ0YsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLGdCQUNHRSxFQUFFLENBQUNJLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUFYLFFBQVE7QUFBQSw0QkFDbkIscUVBQUMsUUFBRDtBQUE0QixrQkFBUSxFQUFFQTtBQUF0QyxXQUFlQSxRQUFRLENBQUNZLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FoQnVCUCxJO1VBQ1hFLDZDOzs7TUFEV0YsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xuXG5jb25zdCBDYXJ0SXRlbVN0eWxlcyA9IHN0eWxlZC5saWBcbiAgcGFkZGluZzogMXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuICBoMyxcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBjYXJ0SXRlbTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cbiAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cbiAgICA8L0NhcnRJdGVtU3R5bGVzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XG4gIGNvbnNvbGUubG9nKG1lKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FydFN0eWxlcyBvcGVuPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFN1cHJlbWU+e21lLm5hbWV9J3MgQ2FydDwvU3VwcmVtZT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPHVsPlxuICAgICAgICB7bWUuY2FydC5tYXAoY2FydEl0ZW0gPT4gKFxuICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0NhcnRTdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})