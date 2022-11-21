webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.tsx":
/*!************************************!*\
  !*** ./components/CommentForm.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.tsx");

var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\CommentForm.tsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var CommentForm = function CommentForm(_ref) {
  _s();
  var post = _ref.post;
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    commentText = _useInput2[0],
    setCommentText = _useInput2[1];
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {}, [commentText]);
  return (
    // ant design의 onSubmit = onFinish
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmitComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Textarea, {
      value: commentText,
      onChange: onChangeCommentText,
      rows: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, "\uC090\uC57D")))
  );
};
_s(CommentForm, "/kIsd8zoAAhDPmXMZv00ID9lumU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);
var _c;
$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS50c3giXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJwb3N0IiwidXNlSW5wdXQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJvbkNoYW5nZUNvbW1lbnRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRDtBQUNEO0FBRXpDLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BQWlCO0VBQUE7RUFBQSxJQUFYQyxJQUFJLFFBQUpBLElBQUk7RUFDdkIsZ0JBQXNDQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTNDQyxXQUFXO0lBQUVDLGNBQWM7RUFDbEMsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFlBQU0sQ0FFMUMsQ0FBQyxFQUFFLENBQUNILFdBQVcsQ0FBQyxDQUFDO0VBQ2pCO0lBQ0k7SUFDQSxNQUFDLHlDQUFJO01BQUMsUUFBUSxFQUFFRSxlQUFnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQzVCLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDTixNQUFDLDBDQUFLLENBQUMsUUFBUTtNQUFDLEtBQUssRUFBRUYsV0FBWTtNQUFDLFFBQVEsRUFBRUksbUJBQW9CO01BQUMsSUFBSSxFQUFFLENBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzlFLE1BQUMsMkNBQU07TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLFFBQVEsRUFBQyxRQUFRO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsa0JBQVksQ0FDNUM7RUFDVDtBQUVmLENBQUM7QUFBQSxHQWRLUCxXQUFXO0VBQUEsUUFDeUJFLHVEQUFRO0FBQUE7QUFBQSxLQUQ1Q0YsV0FBVztBQWdCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTRiODY2MTMzMWEzMjhjZDU5NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgICB9LCBbY29tbWVudFRleHRdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAvLyBhbnQgZGVzaWdu7J2YIG9uU3VibWl0ID0gb25GaW5pc2hcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0YXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPSdzdWJtaXQnPuyCkOyVvTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=