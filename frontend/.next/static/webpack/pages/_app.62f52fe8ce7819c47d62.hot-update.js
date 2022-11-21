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
  post: {
    mainPosts: []
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwicGF5bG9hZCIsImlzTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQVFBLElBQU1BLFlBQVksR0FBRztFQUNqQkMsSUFBSSxFQUFFLENBRU4sQ0FBQztFQUNEQyxJQUFJLEVBQUU7SUFDRkMsU0FBUyxFQUFFO0VBQ2Y7QUFDSixDQUFDO0FBRU0sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsSUFBUyxFQUFLO0VBQ3RDLE9BQU87SUFDSEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQsSUFBSSxFQUFKQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBQ00sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztFQUM5QixPQUFPO0lBQ0hELElBQUksRUFBRTtFQUNWLENBQUM7QUFDTCxDQUFDOztBQUVEO0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQVcsR0FBcUM7RUFBQSxJQUFqQ0MsS0FBSyx1RUFBR1QsWUFBWTtFQUFBLElBQUVVLE1BQU07RUFDN0MsUUFBUUEsTUFBTSxDQUFDSixJQUFJO0lBQ2YsS0FBS0ssMERBQU87TUFDUix1Q0FBWUYsS0FBSyxHQUFLQyxNQUFNLENBQUNFLE9BQU87SUFDeEMsS0FBSyxRQUFRO01BQ1QsdUNBQ09ILEtBQUs7UUFDUlIsSUFBSSxrQ0FDR1EsS0FBSyxDQUFDUixJQUFJO1VBQ2JZLFVBQVUsRUFBRSxJQUFJO1VBQ2hCWixJQUFJLEVBQUVTLE1BQU0sQ0FBQ0w7UUFBSTtNQUNwQjtJQUVULEtBQUssU0FBUztNQUNWLHVDQUNPSSxLQUFLO1FBQ1JSLElBQUksa0NBQ0dRLEtBQUssQ0FBQ1IsSUFBSTtVQUNiWSxVQUFVLEVBQUUsS0FBSztVQUNqQlosSUFBSSxFQUFFO1FBQUk7TUFDYjtJQUVUO01BQ0ksT0FBT1EsS0FBSztFQUFDO0FBRXpCLENBQUM7QUFFY0QsMEVBQVcsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjYyZjUyZmU4Y2U3ODE5YzQ3ZDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbmFtZTogJ3RhZWlsJyxcclxuLy8gICAgIGFnZTogMzAsXHJcbi8vICAgICBwYXNzd29yZDogJ2JhYm8nXHJcbi8vIH1cclxuXHJcbi8vIC8vIOunpOuyiCDsg4jroZwgZGF0YeulvCDrp4zrk6Qg7IiYIOyXhuq4sCDrlYzrrLjsl5Ag64+Z7KCB7Jy866GcIChhY3Rpb24gY3JlYXRvcilcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgICAgICBkYXRhLFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGNoYW5nZU5pY2tuYW1lKCdsZWUnKTtcclxuXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCduZW5lJykpXHJcblxyXG5pbnRlcmZhY2UgSVVzZXIge1xyXG4gICAgaXNMb2dnZWRJbjogYm9vbGVhbixcclxuICAgIHVzZXI6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjoge1xyXG5cclxuICAgIH0sXHJcbiAgICBwb3N0OiB7XHJcbiAgICAgICAgbWFpblBvc3RzOiBbXSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuICAgIH1cclxufVxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9