webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleProduct; });\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\n\nvar _jsxFileName = \"/Users/nelsonwfoltz/Desktop/sick-fits/frontend/components/SingleProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query SINGLE_ITEM_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      name\\n      price\\n      description\\n      id\\n      photo {\\n        altText\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());\nfunction SingleProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(SINGLE_ITEM_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      loading = _useQuery.loading,\n      error = _useQuery.error;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 21\n  }, this);\n  var Product = data.Product;\n  console.log(Product);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: [\"Sick Fits | \", Product.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      src: Product.photo.image.publicUrlTransformed,\n      alt: Product.photo.altText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"details\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        children: Product.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: Product.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SingleProduct, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n_c = SingleProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzP2Q5MWQiXSwibmFtZXMiOlsiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJTaW5nbGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJhbHRUZXh0IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQWlCZSxTQUFTQyxhQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNOztBQUFBLGtCQUNYQywrREFBUSxDQUFDSixpQkFBRCxFQUFvQjtBQUMzREssYUFBUyxFQUFFO0FBQ1RGLFFBQUUsRUFBRkE7QUFEUztBQURnRCxHQUFwQixDQURHO0FBQUEsTUFDcENHLElBRG9DLGFBQ3BDQSxJQURvQztBQUFBLE1BQzlCQyxPQUQ4QixhQUM5QkEsT0FEOEI7QUFBQSxNQUNyQkMsS0FEcUIsYUFDckJBLEtBRHFCOztBQU01QyxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTyxxRUFBQyxxREFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUGlDLE1BUXBDQyxPQVJvQyxHQVF4QkgsSUFSd0IsQ0FRcENHLE9BUm9DO0FBUzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLG1DQUFvQkEsT0FBTyxDQUFDRyxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUNFLFNBQUcsRUFBRUgsT0FBTyxDQUFDSSxLQUFSLENBQWNDLEtBQWQsQ0FBb0JDLG9CQUQzQjtBQUVFLFNBQUcsRUFBRU4sT0FBTyxDQUFDSSxLQUFSLENBQWNHO0FBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVFFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFBLGtCQUFLUCxPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUgsT0FBTyxDQUFDUTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQXpCdUJmLGE7VUFDV0UsdUQ7OztLQURYRixhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaW5nbGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuY29uc3QgU0lOR0xFX0lURU1fUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9JVEVNX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgaWRcbiAgICAgIHBob3RvIHtcbiAgICAgICAgYWx0VGV4dFxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH0pO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XG4gIGNvbnN0IHsgUHJvZHVjdCB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coUHJvZHVjdCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2ljayBGaXRzIHwge1Byb2R1Y3QubmFtZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e1Byb2R1Y3QucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgIGFsdD17UHJvZHVjdC5waG90by5hbHRUZXh0fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICA8aDI+e1Byb2R1Y3QubmFtZX08L2gyPlxuICAgICAgICA8cD57UHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ })

})