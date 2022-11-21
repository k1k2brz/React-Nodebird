webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var PostCard = function PostCard() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};
_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/PostForm.tsx":
/*!*********************************!*\
  !*** ./components/PostForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostForm.tsx",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostForm = function PostForm() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.post;
    }),
    imagePaths = _useSelector.imagePaths;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
    text = _useState[0],
    onChangeText = _useState[1];
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, imagePaths.map(function (v) {
    return __jsx("div", {
      key: v,
      style: {
        display: 'inline-block'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: v,
      style: {
        width: '200px'
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, "\uC81C\uAC70")));
  })));
};
_s(PostForm, "YmSaZCxGmGQV2hVpNasgIrqbbS8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);
var _c;
$RefreshReg$(_c, "PostForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.tsx");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.tsx");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\pages\\index.tsx",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Next.js는 import React from 'react' 구문이 필요없음





var Home = function Home() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
      return state.user;
    }),
    isLoggedIn = _useSelector.isLoggedIn;
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
      return state.post;
    }),
    mainPosts = _useSelector2.mainPosts;
  return (
    // 다른 컴포넌트로 감싸줄 경우 다른 컴포넌트 사용 가능
    __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }
    }, isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 22
      }
    }), mainPosts.map(function (post) {
      return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: post.id,
        post: post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 32
        }
      });
    }))
  );
};
_s(Home, "yViitBsbbl69mW3t/o7jzus6gBQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdEZvcm0udHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiUG9zdENhcmQiLCJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsInVzZVN0YXRlIiwidGV4dCIsIm9uQ2hhbmdlVGV4dCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJtYXJnaW4iLCJtYXAiLCJ2IiwiZGlzcGxheSIsIndpZHRoIiwiSG9tZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwibWFpblBvc3RzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQVM7RUFDbkIsT0FDSSxrRUFBSztBQUViLENBQUM7QUFBQSxLQUpLQSxRQUFRO0FBTUNBLHVFQUFRLEVBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1CO0FBQ0c7QUFDSjtBQUUxQyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQUE7RUFDbkIsbUJBQXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQVU7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQXREQyxVQUFVLGdCQUFWQSxVQUFVO0VBQ2xCLGdCQUE2QkMsc0RBQVEsQ0FBTSxFQUFFLENBQUM7SUFBdkNDLElBQUk7SUFBRUMsWUFBWTtFQUN6QixJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTSxDQUVuQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sT0FDSSxNQUFDLHlDQUFJO0lBQUMsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFB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QUNaQSx1REFBVztBQUFBO0FBQUEsS0FGN0JjLElBQUk7QUFZS0EsbUVBQUksRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGMzNjFhNGM0OGIyZjZlMWRjZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBvc3RDYXJkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PjwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dF0gPSB1c2VTdGF0ZTxhbnk+KCcnKVxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJyBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyIsIi8vIE5leHQuanPripQgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JyDqtazrrLjsnbQg7ZWE7JqU7JeG7J2MXHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIOuLpOuluCDsu7Ttj6zrhIztirjroZwg6rCQ7Iu47KSEIOqyveyasCDri6Trpbgg7Lu07Y+s64SM7Yq4IOyCrOyaqSDqsIDriqVcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIHtpc0xvZ2dlZEluICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9