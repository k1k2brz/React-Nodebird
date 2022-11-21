webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// const initialState = {
//     name: 'taeil',
//     age: 30,
//     password: 'babo'
// }

// // 매번 새로 data를 만들 수 없기 때문에 동적으로 (action creator)
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// }
// changeNickname('lee');

// store.dispatch(changeNickname('nene'))

var initialState = {
  user: {},
  post: {}
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

// (이전상태, 액션) => 다음상태
var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: true,
          user: action.data
        })
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          isLoggedIn: false,
          user: null
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJwb3N0IiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsImlzTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQVFBLElBQU1BLFlBQVksR0FBRztFQUNqQkMsSUFBSSxFQUFFLENBRU4sQ0FBQztFQUNEQyxJQUFJLEVBQUUsQ0FFTjtBQUNKLENBQUM7QUFFTSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxJQUFTLEVBQUs7RUFDdEMsT0FBTztJQUNIQyxJQUFJLEVBQUUsUUFBUTtJQUNkRCxJQUFJLEVBQUpBO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFDTSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFTO0VBQzlCLE9BQU87SUFDSEQsSUFBSSxFQUFFO0VBQ1YsQ0FBQztBQUNMLENBQUM7O0FBRUQ7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHUixZQUFZO0VBQUEsSUFBRVMsTUFBTTtFQUM3QyxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDZixLQUFLSywwREFBTztNQUNSLHVDQUFZRixLQUFLLEdBQUtDLE1BQU0sQ0FBQ0UsT0FBTztJQUN4QyxLQUFLLFFBQVE7TUFDVCx1Q0FDT0gsS0FBSztRQUNSUCxJQUFJLGtDQUNHTyxLQUFLLENBQUNQLElBQUk7VUFDYlcsVUFBVSxFQUFFLElBQUk7VUFDaEJYLElBQUksRUFBRVEsTUFBTSxDQUFDTDtRQUFJO01BQ3BCO0lBRVQsS0FBSyxTQUFTO01BQ1YsdUNBQ09JLEtBQUs7UUFDUlAsSUFBSSxrQ0FDR08sS0FBSyxDQUFDUCxJQUFJO1VBQ2JXLFVBQVUsRUFBRSxLQUFLO1VBQ2pCWCxJQUFJLEVBQUU7UUFBSTtNQUNiO0lBRVQ7TUFDSSxPQUFPTyxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUVjRCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTNmMWQwNjJmMWQ0ZTM0YjlhOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBuYW1lOiAndGFlaWwnLFxyXG4vLyAgICAgYWdlOiAzMCxcclxuLy8gICAgIHBhc3N3b3JkOiAnYmFibydcclxuLy8gfVxyXG5cclxuLy8gLy8g66ek67KIIOyDiOuhnCBkYXRh66W8IOunjOuTpCDsiJgg7JeG6riwIOuVjOusuOyXkCDrj5nsoIHsnLzroZwgKGFjdGlvbiBjcmVhdG9yKVxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgICAgIGRhdGEsXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gY2hhbmdlTmlja25hbWUoJ2xlZScpO1xyXG5cclxuLy8gc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ25lbmUnKSlcclxuXHJcbmludGVyZmFjZSBJVXNlciB7XHJcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuLFxyXG4gICAgdXNlcjogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiB7XHJcblxyXG4gICAgfSxcclxuICAgIHBvc3Q6IHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX09VVCcsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdMT0dfT1VUJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==