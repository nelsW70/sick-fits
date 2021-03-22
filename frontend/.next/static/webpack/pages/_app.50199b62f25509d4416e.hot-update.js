webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Checkout\", function() { return Checkout; });\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/nelsonwfoltz/Desktop/sick-fits/frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"Checkout__CheckoutFormStyles\",\n  componentId: \"sc-10mtoy5-0\"\n})([\"box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;\"]);\n_c = CheckoutFormStyles;\nvar stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__[\"loadStripe\"])(\"pk_test_51IXnWsKJMZ5hXDYc38U8G40FixbteW9YwFRbN3aeeR1gYVKhBEVpm8uRbGWyytlKGLQePFXhuM34pHZEsACOISPi001EMNt3DN\");\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useStripe\"])();\n  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useElements\"])();\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _yield$stripe$createP, error, paymentMethod;\n\n      return _Users_nelsonwfoltz_Desktop_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // 1. Stop the form from submitting and turn the loader one\n              e.preventDefault();\n              setLoading(true);\n              console.log('We gotta do some work..'); // 2. Start the page transition\n\n              nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start(); // 3. Create the payment method via stripe (Token comes back here if successful)\n\n              _context.next = 6;\n              return stripe.createPaymentMethod({\n                type: 'card',\n                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"CardElement\"])\n              });\n\n            case 6:\n              _yield$stripe$createP = _context.sent;\n              error = _yield$stripe$createP.error;\n              paymentMethod = _yield$stripe$createP.paymentMethod;\n              console.log(paymentMethod); // 4. Handle any errors from stripe\n\n              if (error) {\n                setError(error);\n              } // 5. Send the token from step 3 to our keystone server, via a custom mutation!\n              // 6. Change the page to view the order\n              // 7. Close the cart\n              // 8. turn the loader off\n\n\n              setLoading(false);\n              nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done();\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      style: {\n        fontSize: 12\n      },\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"CardElement\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_styles_SickButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      children: \"Check Out Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"/GTcQkkNlUgykvoAY6A4l3RHUP4=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useStripe\"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"useElements\"]];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__[\"Elements\"], {\n    stripe: stripeLib,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJuUHJvZ3Jlc3MiLCJzdGFydCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInBheW1lbnRNZXRob2QiLCJkb25lIiwiZm9udFNpemUiLCJtZXNzYWdlIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsOElBQXhCO0tBQU1GLGtCO0FBU04sSUFBTUcsU0FBUyxHQUFHQyxvRUFBVSxDQUFDQyw2R0FBRCxDQUE1Qjs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLEVBRFo7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFZkcsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLE1BQU0sR0FBR0MseUVBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLDJFQUFXLEVBQTVCOztBQUpzQixXQUtQQyxZQUxPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtWQUt0QixpQkFBNEJDLENBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNBQSxlQUFDLENBQUNDLGNBQUY7QUFDQVAsd0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVEscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBSkYsQ0FLRTs7QUFDQUMsOERBQVMsQ0FBQ0MsS0FBVixHQU5GLENBT0U7O0FBUEY7QUFBQSxxQkFReUNWLE1BQU0sQ0FBQ1csbUJBQVAsQ0FBMkI7QUFDaEVDLG9CQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLG9CQUFJLEVBQUVYLFFBQVEsQ0FBQ1ksVUFBVCxDQUFvQkMsbUVBQXBCO0FBRjBELGVBQTNCLENBUnpDOztBQUFBO0FBQUE7QUFRVW5CLG1CQVJWLHlCQVFVQSxLQVJWO0FBUWlCb0IsMkJBUmpCLHlCQVFpQkEsYUFSakI7QUFZRVQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZUSxhQUFaLEVBWkYsQ0FhRTs7QUFDQSxrQkFBSXBCLEtBQUosRUFBVztBQUNUQyx3QkFBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxlQWhCSCxDQWlCRTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0FHLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FVLDhEQUFTLENBQUNRLElBQVY7O0FBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHNCO0FBQUE7QUFBQTs7QUErQnRCLHNCQUNFLHFFQUFDLGtCQUFEO0FBQW9CLFlBQVEsRUFBRWIsWUFBOUI7QUFBQSxlQUNHUixLQUFLLGlCQUFJO0FBQUcsV0FBSyxFQUFFO0FBQUVzQixnQkFBUSxFQUFFO0FBQVosT0FBVjtBQUFBLGdCQUE2QnRCLEtBQUssQ0FBQ3VCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWixlQUVFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0F0Q1F6QixZO1VBR1FPLGlFLEVBQ0VFLG1FOzs7TUFKVlQsWTs7QUF3Q1QsU0FBUzBCLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0UscUVBQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUU3QixTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztNQU5RNkIsUTtBQVFUIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGVja291dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcbmltcG9ydCB7XG4gIENhcmRFbGVtZW50LFxuICBFbGVtZW50cyxcbiAgdXNlRWxlbWVudHMsXG4gIHVzZVN0cmlwZSxcbn0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tICcuL3N0eWxlcy9TaWNrQnV0dG9uJztcblxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMXJlbTtcbmA7XG5cbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgLy8gMS4gU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gdGhlIGxvYWRlciBvbmVcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zb2xlLmxvZygnV2UgZ290dGEgZG8gc29tZSB3b3JrLi4nKTtcbiAgICAvLyAyLiBTdGFydCB0aGUgcGFnZSB0cmFuc2l0aW9uXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XG4gICAgLy8gMy4gQ3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlIChUb2tlbiBjb21lcyBiYWNrIGhlcmUgaWYgc3VjY2Vzc2Z1bClcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XG4gICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcbiAgICAvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICAvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXG4gICAgLy8gNi4gQ2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXG4gICAgLy8gNy4gQ2xvc2UgdGhlIGNhcnRcblxuICAgIC8vIDguIHR1cm4gdGhlIGxvYWRlciBvZmZcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tvdXRGb3JtU3R5bGVzIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57ZXJyb3IubWVzc2FnZX08L3A+fVxuICAgICAgPENhcmRFbGVtZW50IC8+XG4gICAgICA8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxuICAgIDwvQ2hlY2tvdXRGb3JtU3R5bGVzPlxuICApO1xufVxuXG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgIDwvRWxlbWVudHM+XG4gICk7XG59XG5cbmV4cG9ydCB7IENoZWNrb3V0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

})