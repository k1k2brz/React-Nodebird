webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.tsx":
/*!************************************!*\
  !*** ./components/UserProfile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\UserProfile.tsx",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserProfile = function UserProfile() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 35
      }
    }), "0"), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 42
      }
    }), "0"), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 41
      }
    }), "0")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, "ZC"),
    title: "TaeIl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};
_s(UserProfile, "p2rV2pF7Z3i2g3xG5rtZsnlyA64=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});
_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);
var _c;
$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS50c3giXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25Mb2dPdXQiLCJ1c2VDYWxsYmFjayIsImxvZ291dEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFDTTtBQUNPO0FBRWhELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFBQTtFQUN0QixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0JILFFBQVEsQ0FBQ0ksbUVBQVksRUFBRSxDQUFDO0VBQzVCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixPQUNJLE1BQUMseUNBQUk7SUFDRCxPQUFPLEVBQUUsQ0FDTDtNQUFLLEdBQUcsRUFBQyxNQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsbUJBQUc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFNLE1BQU8sRUFDL0I7TUFBSyxHQUFHLEVBQUMsWUFBWTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLHlCQUFJO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBTSxNQUFPLEVBQ3RDO01BQUssR0FBRyxFQUFDLFdBQVc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSx5QkFBSTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sTUFBTyxDQUN2QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRUYsTUFBQyx5Q0FBSSxDQUFDLElBQUk7SUFDTixNQUFNLEVBQUUsTUFBQywyQ0FBTTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLFFBQWE7SUFDNUIsS0FBSyxFQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNmLEVBQ0YsTUFBQywyQ0FBTTtJQUFDLE9BQU8sRUFBRUYsUUFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFjLENBQ3JDO0FBRWYsQ0FBQztBQUFBLEdBcEJLSCxXQUFXO0VBQUEsUUFDSUUsdURBQVc7QUFBQTtBQUFBLEtBRDFCRixXQUFXO0FBc0JGQSwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMDdmOGIyYmRkYzQzOWVlMDM1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsb2dvdXRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0QWN0aW9uKCkpO1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynueynuTxiciAvPjA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsnok8YnIgLz4wPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj7tjJTroZzsm4w8YnIgLz4wPC9kaXY+LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPlpDPC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJUYWVJbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==