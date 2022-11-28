webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

// import shortId from 'shortid';
// import { faker } from '@faker-js/faker';

var initialState = {
  //     {
  //     id: 1,
  //     User: {
  //         id: 1,
  //         nickname: 'TaeIl'
  //     },
  //     content: '첫 번째 게시글 #해시태그 #익스프레스',
  //     Images: [{
  //         id: shortId.generate(),
  //         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  //     }, {
  //         id: shortId.generate(),
  //         src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
  //     }, {
  //         id: shortId.generate(),
  //         src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
  //     }],
  //     // 대문자는 서버에서 주는 애들
  //     Comments: [{
  //         id: shortId.generate(),
  //         User: {
  //             id: shortId.generate(),
  //             nickname: 'nero',
  //         },
  //         content: '우와 개정판이 나왔군요~',
  //     }, {
  //         id: shortId.generate(),
  //         User: {
  //             id: shortId.generate(),
  //             nickname: 'hero',
  //         },
  //         content: '얼른 사고싶어요~',
  //     }]
  // }
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  // infinite scroll
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};

// infinite scrolling
// export const generateDummyPost = (number) => Array(number).fill(undefined).map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.internet.userName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.internet.userName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }));

// 변수로 지정해주면 편하다
// as const를 지정하면 타입이 아니라 실제 값을 가리키게 됨

// 화면 로딩하면
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};

// 동적 액션 크리에이터
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

// const dummyPost = (data) => ({
//     // shortId를 넣으면 더미데이터 Encountered two children with the same key에러는 해결이 되지만
//     // Failed prop type에러가 뜬다. 나중에 실제 데이터 넣어서 해결해야 할 듯
//     id: data.id,
//     // 게시글
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: 'Violet',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({ // 더미 코멘트
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: 'Violet',
//     },
// });

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  // 불변성을 지키면서 코드 작성하는게 어려우니까 도와주는 라이브러리 immer
  // immer 사용
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      // return {
      //     ...state,
      // 맨 앞에 dummyPost추가해야 맨 위에 게시글 올라간다.
      // sagas의 post에서 넘어온 게시글 action.data
      // mainPosts: [dummyPost(action.data), ...state.mainPosts],
      //     addPostLoading: true,
      //     addPostDone: true,
      // }
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = true;
        draft.removePostDone = true;
        // 앞에서 dummyPost추가해야 맨 위
        // sagas의 post에서 넘어온 게시글 action.data
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
          // action.data.content, postId, userId가 action.data에 들어있는 상태
          // 불변성을 지키는 코드 (immer 라이브러리 사용하면 더 간단하게 가능)
          // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyComment(action.data.content), ...post.Comments]
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;
          // return {
          //     ...state,
          //     // 앞에서 dummyPost추가해야 맨 위
          //     mainPosts: [dummyPost, ...state.mainPosts],
          //     addCommentLoading: true,
          //     addCommentDone: true,
          // }
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC50c3giXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImlkIiwicG9zdCIsImZpbmQiLCJQb3N0SWQiLCJDb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDNUI7QUFDQTs7QUFvQk8sSUFBTUEsWUFBc0Is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O0VBRWxCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFY1Asc0VBQU8sRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY0ZjBmNDVmNzE5MWY2YWMxZDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG4vLyBpbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XHJcblxyXG5leHBvcnQgdHlwZSBtYWluUG9zdCA9IHtcclxuICAgIG1haW5Qb3N0czogYW55LFxyXG4gICAgaW1hZ2VQYXRoczogb2JqZWN0W10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzogYm9vbGVhbixcclxuICAgIGFkZFBvc3REb25lOiBib29sZWFuLFxyXG4gICAgYWRkUG9zdEVycm9yOiBib29sZWFuLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBhZGRDb21tZW50RG9uZTogYm9vbGVhbixcclxuICAgIGFkZENvbW1lbnRFcnJvcjogYm9vbGVhbixcclxuICAgIGhhc01vcmVQb3N0czogYm9vbGVhbixcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBsb2FkUG9zdHNEb25lOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IGJvb2xlYW4sXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogYm9vbGVhbixcclxuICAgIHJlbW92ZVBvc3REb25lOiBib29sZWFuLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBtYWluUG9zdCA9IHtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAvLyAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICBpZDogMSxcclxuICAgIC8vICAgICAgICAgbmlja25hbWU6ICdUYWVJbCdcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgLy8gICAgIEltYWdlczogW3tcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgIC8vICAgICB9LCB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAvLyAgICAgfV0sXHJcbiAgICAvLyAgICAgLy8g64yA66y47J6Q64qUIOyEnOuyhOyXkOyEnCDso7zripQg7JWg65OkXHJcbiAgICAvLyAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgIC8vICAgICB9LCB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalH4nLFxyXG4gICAgLy8gICAgIH1dXHJcbiAgICAvLyB9XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsIC8vIGluZmluaXRlIHNjcm9sbFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcblxyXG4vLyBpbmZpbml0ZSBzY3JvbGxpbmdcclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKHVuZGVmaW5lZCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgbmlja25hbWU6IGZha2VyLmludGVybmV0LnVzZXJOYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5pbnRlcm5ldC51c2VyTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyB9KSk7XHJcblxyXG5cclxuLy8g67OA7IiY66GcIOyngOygle2VtOyjvOuptCDtjrjtlZjri6RcclxuLy8gYXMgY29uc3Trpbwg7KeA7KCV7ZWY66m0IO2DgOyeheydtCDslYTri4jrnbwg7Iuk7KCcIOqwkuydhCDqsIDrpqztgqTqsowg65CoXHJcblxyXG4vLyDtmZTrqbQg66Gc65Sp7ZWY66m0XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG4vLyDrj5nsoIEg7JWh7IWYIO2BrOumrOyXkOydtO2EsFxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIC8vIHNob3J0SWTrpbwg64Sj7Jy866m0IOuNlOuvuOuNsOydtO2EsCBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCB0aGUgc2FtZSBrZXnsl5Drn6zripQg7ZW06rKw7J20IOuQmOyngOunjFxyXG4vLyAgICAgLy8gRmFpbGVkIHByb3AgdHlwZeyXkOufrOqwgCDrnKzri6QuIOuCmOykkeyXkCDsi6TsoJwg642w7J207YSwIOuEo+yWtOyEnCDtlbTqsrDtlbTslbwg7ZWgIOuTr1xyXG4vLyAgICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgICAvLyDqsozsi5zquIBcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ1Zpb2xldCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHsgLy8g642U66+4IOy9lOupmO2KuFxyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IG1haW5Qb3N0ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgLy8g67aI67OA7ISx7J2EIOyngO2CpOuptOyEnCDsvZTrk5wg7J6R7ISx7ZWY64qU6rKMIOyWtOugpOyasOuLiOq5jCDrj4TsmYDso7zripQg65287J2067iM65+s66asIGltbWVyXHJcbiAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyDrp6gg7JWe7JeQIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyE7JeQIOqyjOyLnOq4gCDsmKzrnbzqsITri6QuXHJcbiAgICAgICAgICAgIC8vIHNhZ2Fz7J2YIHBvc3Tsl5DshJwg64SY7Ja07JioIOqyjOyLnOq4gCBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAvLyBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOyVnuyXkOyEnCBkdW1teVBvc3TstpTqsIDtlbTslbwg66eoIOychFxyXG4gICAgICAgICAgICAgICAgLy8gc2FnYXPsnZggcG9zdOyXkOyEnCDrhJjslrTsmKgg6rKM7Iuc6riAIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZOqwgCBhY3Rpb24uZGF0YeyXkCDrk6TslrTsnojripQg7IOB7YOcXHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk64qUIOy9lOuTnCAoaW1tZXIg65287J2067iM65+s66asIOyCrOyaqe2VmOuptCDrjZQg6rCE64uo7ZWY6rKMIOqwgOuKpSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=