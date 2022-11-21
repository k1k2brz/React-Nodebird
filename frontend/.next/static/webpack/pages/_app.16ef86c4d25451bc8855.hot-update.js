webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'TaeIl'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른 사고싶어요~'
    }]
  }],
  imagePaths: [],
  postAdded: false
};
// 변수로 지정해주면 편하다
// as const를 지정하면 실제 값을 가리키게 됨
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: 'Tae-'
  },
  Images: [],
  Comments: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        // 앞에서 dummyPost추가해야 맨 위
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC50c3giXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsU0FBUyxFQUFFLENBQUM7SUFDUkMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0ZELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNkLENBQUM7SUFDREMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsTUFBTSxFQUFFLENBQUM7TUFDTEMsR0FBRyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0NBLEdBQUcsRUFBRTtJQUNULENBQUMsRUFBRTtNQUNDQSxHQUFHLEVBQUU7SUFDVCxDQUFDLENBQUM7SUFDRkMsUUFBUSxFQUFFLENBQUM7TUFDUEwsSUFBSSxFQUFFO1FBQ0ZDLFFBQVEsRUFBRTtNQUNkLENBQUM7TUFDREMsT0FBTyxFQUFFO0lBQ2IsQ0FBQyxFQUFFO01BQ0NGLElBQUksRUFBRTtRQUNGQyxRQUFRLEVBQUU7TUFDZCxDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNiLENBQUM7RUFDTCxDQUFDLENBQUM7RUFDRkksVUFBVSxFQUFFLEVBQUU7RUFDZEMsU0FBUyxFQUFFO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBbUI7QUFDN0IsSUFBTUMsT0FBTyxHQUFHO0VBQ25CQyxJQUFJLEVBQUVGO0FBQ1YsQ0FBQztBQUNELElBQU1HLFNBQVMsR0FBRztFQUNkWixFQUFFLEVBQUUsQ0FBQztFQUNMRyxPQUFPLEVBQUUsV0FBVztFQUNwQkYsSUFBSSxFQUFFO0lBQ0ZELEVBQUUsRUFBRSxDQUFDO0lBQ0xFLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFDREUsTUFBTSxFQUFFLEVBQUU7RUFDVkUsUUFBUSxFQUFFO0FBQ2QsQ0FBQztBQUVELElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQXFDO0VBQUEsSUFBakNDLEtBQUssdUVBQUdoQixZQUFZO0VBQUEsSUFBRWlCLE1BQU07RUFDekMsUUFBUUEsTUFBTSxDQUFDSixJQUFJO0lBQ2YsS0FBS0YsUUFBUTtNQUNULHVDQUNPSyxLQUFLO1FBQ1I7UUFDQWYsU0FBUyxHQUFHYSxTQUFTLHNHQUFLRSxLQUFLLENBQUNmLFNBQVMsRUFBQztRQUMxQ1MsU0FBUyxFQUFFO01BQUk7SUFFdkI7TUFDSSxPQUFPTSxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTZlZjg2YzRkMjU0NTFiYzg4NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICdUYWVJbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpR+JyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn1cclxuLy8g67OA7IiY66GcIOyngOygle2VtOyjvOuptCDtjrjtlZjri6RcclxuLy8gYXMgY29uc3Trpbwg7KeA7KCV7ZWY66m0IOyLpOygnCDqsJLsnYQg6rCA66as7YKk6rKMIOuQqFxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn1cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdUYWUtJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==