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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

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
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    // ant design의 onSubmit = onFinish
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: onSubmitComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Textarea, {
      value: commentText,
      onChange: onChangeCommentText,
      rows: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, "\uC090\uC57D")))
  );
};
_s(CommentForm, "/kIsd8zoAAhDPmXMZv00ID9lumU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS50c3giXSwibmFtZXMiOlsiQ29tbWVudEZvcm0iLCJwb3N0IiwidXNlSW5wdXQiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0Iiwib25TdWJtaXRDb21tZW50IiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiaWQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRDtBQUNEO0FBQ047QUFFbkMsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVcsT0FBaUI7RUFBQTtFQUFBLElBQVhDLElBQUksUUFBSkEsSUFBSTtFQUN2QixnQkFBc0NDLCtEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE7SUFBM0NDLFdBQVc7SUFBRUMsY0FBYztFQUNsQyxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNQLElBQUksQ0FBQ1EsRUFBRSxFQUFFTixXQUFXLENBQUM7RUFDckMsQ0FBQyxFQUFFLENBQUNBLFdBQVcsQ0FBQyxDQUFDO0VBQ2pCO0lBQ0k7SUFDQSxNQUFDLHlDQUFJO01BQUMsUUFBUSxFQUFFRSxlQUFnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQzVCLE1BQUMseUNBQUksQ0FBQyxJQUFJO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDTixNQUFDLDBDQUFLLENBQUMsUUFBUTtNQUFDLEtBQUssRUFBRUYsV0FBWTtNQUFDLFFBQVEsRUFBRU8sbUJBQW9CO01BQUMsSUFBSSxFQUFFLENBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzlFLE1BQUMsMkNBQU07TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLFFBQVEsRUFBQyxRQUFRO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsa0JBQVksQ0FDNUM7RUFDVDtBQUVmLENBQUM7QUFBQSxHQWRLVixXQUFXO0VBQUEsUUFDeUJFLHVEQUFRO0FBQUE7QUFBQSxLQUQ1Q0YsV0FBVztBQWdCakJBLFdBQVcsQ0FBQ1csU0FBUyxHQUFHO0VBQ3BCVixJQUFJLEVBQUVXLGlEQUFTLENBQUNDLE1BQU0sQ0FBQ0M7QUFDM0IsQ0FBQztBQUVjZCwwRUFBVyxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNjc2MGNlZGI1ZmZlNWIxNzkzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KVxyXG4gICAgfSwgW2NvbW1lbnRUZXh0XSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gYW50IGRlc2lnbuydmCBvblN1Ym1pdCA9IG9uRmluaXNoXHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dGFyZWEgdmFsdWU9e2NvbW1lbnRUZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50VGV4dH0gcm93cz17NH0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT0nc3VibWl0Jz7sgpDslb08L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5Db21tZW50Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=