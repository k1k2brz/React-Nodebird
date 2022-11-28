webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
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
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
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
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
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
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;
      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;
      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
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
        draft.removePostLoading = false;
        draft.removePostDone = true;
        // 앞에서 dummyPost추가해야 맨 위
        // sagas의 post에서 넘어온 게시글 action.data
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          _post2.Comments.unshift(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC50c3giXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJwb3N0IiwiZmluZCIsInYiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJlcnJvciIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsInVuc2hpZnQiLCJDb21tZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDNUI7QUFDQTs7QUEwQk8sSUFBTUEsWUFBc0IsR0FBRztFQUNsQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBQyxTQUFTLEVBQUUsRUFBRTtFQUNiQyxVQUFVLEVBQUUsRUFBRTtFQUNkQyxZQUFZLEVBQUUsSUFBSTtFQUFFO0VBQ3BCQyxlQUFlLEVBQUUsS0FBSztFQUN0QkMsWUFBWSxFQUFFLEtBQUs7RUFDbkJDLGFBQWEsRUFBRSxJQUFJO0VBQ25CQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFjLEVBQUUsS0FBSztFQUNyQkMsZUFBZSxFQUFFLElBQUk7RUFDckJDLGdCQUFnQixFQUFFLEtBQUs7RUFDdkJDLGFBQWEsRUFBRSxLQUFLO0VBQ3BCQyxjQUFjLEVBQUUsSUFBSTtFQUNwQkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLFdBQVcsRUFBRSxLQUFLO0VBQ2xCQyxZQUFZLEVBQUUsSUFBSTtFQUNsQkMsaUJBQWlCLEVBQUUsS0FBSztFQUN4QkMsY0FBYyxFQUFFLEtBQUs7RUFDckJDLGVBQWUsRUFBRSxJQUFJO0VBQ3JCQyxpQkFBaUIsRUFBRSxLQUFLO0VBQ3hCQyxjQUFj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LEtBQUs7UUFDcEM7TUFDSjtRQUNJO0lBQU07RUFFbEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVjYixzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5NmE5ZmU0ZDUyOWNlYTNiNGJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG4vLyBpbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XHJcblxyXG5leHBvcnQgdHlwZSBtYWluUG9zdCA9IHtcclxuICAgIG1haW5Qb3N0czogYW55LFxyXG4gICAgaW1hZ2VQYXRoczogb2JqZWN0W10sXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBsaWtlUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICBsaWtlUG9zdEVycm9yOiBib29sZWFuLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogYm9vbGVhbixcclxuICAgIHVubGlrZVBvc3RFcnJvcjogYm9vbGVhbixcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgYWRkUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICBhZGRQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogYm9vbGVhbixcclxuICAgIGFkZENvbW1lbnREb25lOiBib29sZWFuLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBib29sZWFuLFxyXG4gICAgaGFzTW9yZVBvc3RzOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogYm9vbGVhbixcclxuICAgIGxvYWRQb3N0c0RvbmU6IGJvb2xlYW4sXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogYm9vbGVhbixcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IG1haW5Qb3N0ID0ge1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICBpZDogMSxcclxuICAgIC8vICAgICBVc2VyOiB7XHJcbiAgICAvLyAgICAgICAgIGlkOiAxLFxyXG4gICAgLy8gICAgICAgICBuaWNrbmFtZTogJ1RhZUlsJ1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAvLyAgICAgSW1hZ2VzOiBbe1xyXG4gICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLy8gICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAvLyAgICAgfSwge1xyXG4gICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLy8gICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgIC8vICAgICB9XSxcclxuICAgIC8vICAgICAvLyDrjIDrrLjsnpDripQg7ISc67KE7JeQ7IScIOyjvOuKlCDslaDrk6RcclxuICAgIC8vICAgICBDb21tZW50czogW3tcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUficsXHJcbiAgICAvLyAgICAgfV1cclxuICAgIC8vIH1cclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSwgLy8gaW5maW5pdGUgc2Nyb2xsXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbi8vIGluZmluaXRlIHNjcm9sbGluZ1xyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwodW5kZWZpbmVkKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIuaW50ZXJuZXQudXNlck5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIEltYWdlczogW3tcclxuLy8gICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgICB9XSxcclxuLy8gICAgIENvbW1lbnRzOiBbe1xyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLmludGVybmV0LnVzZXJOYW1lKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vIH0pKTtcclxuXHJcblxyXG4vLyDrs4DsiJjroZwg7KeA7KCV7ZW07KO866m0IO2OuO2VmOuLpFxyXG4vLyBhcyBjb25zdOulvCDsp4DsoJXtlZjrqbQg7YOA7J6F7J20IOyVhOuLiOudvCDsi6TsoJwg6rCS7J2EIOqwgOumrO2CpOqyjCDrkKhcclxuXHJcbi8vIO2ZlOuptCDroZzrlKntlZjrqbRcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuLy8g64+Z7KCBIOyVoeyFmCDtgazrpqzsl5DsnbTthLBcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAvLyBzaG9ydElk66W8IOuEo+ycvOuptCDrjZTrr7jrjbDsnbTthLAgRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggdGhlIHNhbWUga2V57JeQ65+s64qUIO2VtOqysOydtCDrkJjsp4Drp4xcclxuLy8gICAgIC8vIEZhaWxlZCBwcm9wIHR5cGXsl5Drn6zqsIAg65ys64ukLiDrgpjspJHsl5Ag7Iuk7KCcIOuNsOydtO2EsCDrhKPslrTshJwg7ZW06rKw7ZW07JW8IO2VoCDrk69cclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgLy8g6rKM7Iuc6riAXHJcbi8vICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW10sXHJcbi8vICAgICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7IC8vIOuNlOuvuCDsvZTrqZjtirhcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBkYXRhLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAnVmlvbGV0JyxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBtYWluUG9zdCA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwg7L2U65OcIOyekeyEse2VmOuKlOqyjCDslrTroKTsmrDri4jquYwg64+E7JmA7KO864qUIOudvOydtOu4jOufrOumrCBpbW1lclxyXG4gICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8g66eoIOyVnuyXkCBkdW1teVBvc3TstpTqsIDtlbTslbwg66eoIOychOyXkCDqsozsi5zquIAg7Jis65286rCE64ukLlxyXG4gICAgICAgICAgICAvLyBzYWdhc+ydmCBwb3N07JeQ7IScIOuEmOyWtOyYqCDqsozsi5zquIAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgLy8gbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgLy8gICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyBzYWdhc+ydmCBwb3N07JeQ7IScIOuEmOyWtOyYqCDqsozsi5zquIAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZOqwgCBhY3Rpb24uZGF0YeyXkCDrk6TslrTsnojripQg7IOB7YOcXHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk64qUIOy9lOuTnCAoaW1tZXIg65287J2067iM65+s66asIOyCrOyaqe2VmOuptCDrjZQg6rCE64uo7ZWY6rKMIOqwgOuKpSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=