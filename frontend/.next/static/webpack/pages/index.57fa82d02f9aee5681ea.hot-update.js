webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.tsx":
/*!**********************************!*\
  !*** ./components/LoginForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");


var _templateObject,
  _templateObject2,
  _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\LoginForm.tsx",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








// div 태그가 됨
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    margin-top: 10px;\n"])));
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 10px;\n"])));
_c2 = FormWrapper;
var LoginForm = function LoginForm() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    id = _useInput2[0],
    onChangeId = _useInput2[1];
  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
    _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
    password = _useInput4[0],
    onChangePassword = _useInput4[1];

  //컴포넌트에 props로 받아진 함수는 useCallback을 사용해야 최적화가 된다.
  // const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //     setId(e.target.value)
  // }, [])

  // const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(e.target.value)
  // }, [])

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(id, password);
    // reducers 안꺼를 가져옴
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginAction"])({
      id: id,
      password: password
    }));
  }, [id, password]);
  return __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx(ButtonWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 38
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 41
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};
_s(LoginForm, "n/CGE5NEGjUy/lrkg80J4K1I2hg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});
_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var _c, _c2, _c3;
$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
false,

/***/ "./reducers/index.tsx":
false,

/***/ "./reducers/user.tsx":
/*!***************************!*\
  !*** ./reducers/user.tsx ***!
  \***************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: action.data
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLnRzeCJdLCJuYW1lcyI6WyJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiTG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwibG9naW5BY3Rpb24iLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidXNlciIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNHO0FBQ0k7QUFDbEI7QUFDYTtBQUNDO0FBQ0s7O0FBRS9DO0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLHdLQUUvQjtBQUFBLEtBRktGLGFBQWE7QUFJbkIsSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBSSxDQUFDLHVLQUUvQjtBQUFBLE1BRktELFdBQVc7QUFJakIsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBUztFQUFBO0VBQ3BCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixnQkFBeUJDLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBOUJDLEVBQUU7SUFBRUMsVUFBVTtFQUNyQixpQkFBcUNGLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBMUNHLFFBQVE7SUFBRUMsZ0JBQWdCOztFQUVqQztFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7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TyxHQUFHLFNBQVZBLE9BQU8sR0FBcUM7RUFBQSxJQUFqQ0MsS0FBSyx1RUFBR1QsWUFBWTtFQUFBLElBQUVVLE1BQU07RUFDekMsUUFBUUEsTUFBTSxDQUFDSixJQUFJO0lBQ2YsS0FBSyxRQUFRO01BQ1QsdUNBQ09HLEtBQUs7UUFDUlIsVUFBVSxFQUFFLElBQUk7UUFDaEJDLElBQUksRUFBRVEsTUFBTSxDQUFDTDtNQUFJO0lBRXpCLEtBQUssU0FBUztNQUNWLHVDQUNPSSxLQUFLO1FBQ1JSLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxJQUFJLEVBQUU7TUFBSTtJQUVsQjtNQUNJLE9BQU9PLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTdmYTgyZDAyZjlhZWU1NjgxZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dpbkFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gZGl2IO2DnOq3uOqwgCDrkKhcclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtpZCwgb25DaGFuZ2VJZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICAgIC8v7Lu07Y+s64SM7Yq47JeQIHByb3Bz66GcIOuwm+yVhOynhCDtlajsiJjripQgdXNlQ2FsbGJhY2vsnYQg7IKs7Jqp7ZW07JW8IOy1nOygge2ZlOqwgCDrkJzri6QuXHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAvLyAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKVxyXG4gICAgICAgIC8vIHJlZHVjZXJzIOyViOq6vOulvCDqsIDsoLjsmLRcclxuICAgICAgICBkaXNwYXRjaChsb2dpbkFjdGlvbih7IGlkLCBwYXNzd29yZCB9KSk7XHJcbiAgICB9LCBbaWQsIHBhc3N3b3JkXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLWlkJz7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtmYWxzZX0+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7LyogbGlua+yXkCBocmVm64Sj6rOgIGJ1dHRvbuyXkOuKlCDslYjrhKPripTqsowg7KKL64ukICovfVxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIHVzZXI6IG51bGwsXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==