webpackHotUpdate_N_E("pages/index",{

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
        lineNumber: 11,
        columnNumber: 5
      }
    }, isLoggedIn && __jsx(PostForm, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 22
      }
    }), mainPosts.map(function (post) {
      return __jsx(PostCard, {
        key: post.id,
        post: post,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwibWFpblBvc3RzIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRTBDO0FBQ007QUFFaEQsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUksR0FBUztFQUFBO0VBQ2pCLG1CQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFVO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF0REMsVUFBVSxnQkFBVkEsVUFBVTtFQUNsQixvQkFBc0JILCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0csSUFBSTtJQUFBLEVBQUM7SUFBaERDLFNBQVMsaUJBQVRBLFNBQVM7RUFDakI7SUFDRTtJQUNBLE1BQUMsNkRBQVM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNQRixVQUFVLElBQUksTUFBQyxRQUFRO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUMxQkUsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBQ0YsSUFBSTtNQUFBLE9BQUssTUFBQyxRQUFRO1FBQUMsR0FBRyxFQUFFQSxJQUFJLENBQUNHLEVBQUc7UUFBQyxJQUFJLEVBQUVILElBQUs7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQUFHO0lBQUEsRUFBQztFQUN0RDtBQUVoQixDQUFDO0FBQUMsR0FWSUwsSUFBSTtFQUFBLFFBQ2VDLHVEQUFXLEVBQ1pBLHVEQUFXO0FBQUE7QUFBQSxLQUY3QkQsSUFBSTtBQVlLQSxtRUFBSSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOTljZWNkZWVkMjQ5NGY3YzE2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qc+uKlCBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnIOq1rOusuOydtCDtlYTsmpTsl4bsnYxcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICByZXR1cm4gKFxyXG4gICAgLy8g64uk66W4IOy7tO2PrOuEjO2KuOuhnCDqsJDsi7jspIQg6rK97JqwIOuLpOuluCDsu7Ttj6zrhIztirgg7IKs7JqpIOqwgOuKpVxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=