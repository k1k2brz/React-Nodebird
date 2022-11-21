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
          columnNumber: 37
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwibWFpblBvc3RzIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFMEM7QUFDTTtBQUNGO0FBQ0E7QUFFOUMsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUksR0FBUztFQUFBO0VBQ2pCLG1CQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFVO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF0REMsVUFBVSxnQkFBVkEsVUFBVTtFQUNsQixvQkFBc0JILCtEQUFXLENBQUMsVUFBQ0MsS0FBVTtNQUFBLE9BQUtBLEtBQUssQ0FBQ0csSUFBSTtJQUFBLEVBQUM7SUFBckRDLFNBQVMsaUJBQVRBLFNBQVM7RUFDakI7SUFDRTtJQUNBLE1BQUMsNkRBQVM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNQRixVQUFVLElBQUksTUFBQyw0REFBUTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDMUJFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQUNGLElBQVM7TUFBQSxPQUFLLE1BQUMsNERBQVE7UUFBQyxHQUFHLEVBQUVBLElBQUksQ0FBQ0csRUFBRztRQUFDLElBQUksRUFBRUgsSUFBSztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUc7SUFBQSxFQUFDO0VBQzNEO0FBRWhCLENBQUM7QUFBQyxHQVZJTCxJQUFJO0VBQUEsUUFDZUMsdURBQVcsRUFDWkEsdURBQVc7QUFBQTtBQUFBLEtBRjdCRCxJQUFJO0FBWUtBLG1FQUFJLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhZDM0MzUxMTFkMWFmODU5YzA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0Lmpz64qUIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcg6rWs66y47J20IO2VhOyalOyXhuydjFxyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBvc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICAvLyDri6Trpbgg7Lu07Y+s64SM7Yq466GcIOqwkOyLuOykhCDqsr3smrAg64uk66W4IOy7tO2PrOuEjO2KuCDsgqzsmqkg6rCA64qlXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7aXNMb2dnZWRJbiAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKChwb3N0OiBhbnkpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9