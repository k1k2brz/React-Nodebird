module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import App from "next/app";
// import type { AppProps /*, AppContext */ } from 'next/app'




const NodeBird = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "NodeBird")), __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }));
};
NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.tsx");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.tsx");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__);





// const initialState = {
//     name: 'taeil',
//     age: 111,
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

// (이전상태, 액션) => 다음상태
// combineReducers로 user, post 합쳐준다
// const rootReducer = combineReducers({
//     // hydrate를 넣기 위해 index reducer 추가 (서버사이드 렌더링을 위해서)
//     index: (state: Object = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 return { ...state, ...action.payload };
//             default:
//                 return state;
//         }
//     },
//     user,
//     post,
// })

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  // 전체를 덮어 씌울 수 있게 만들어주기 위해 바꾼 코드
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDTATE', action);
      return action.payload;
    default:
      {
        const combinedReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

// import shortId from 'shortid';
// import { faker } from '@faker-js/faker';

const initialState = {
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
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  // 무한 스크롤
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
  addCommentError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
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
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

// 특정 유저 찾기
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';

// 동기 액션은 하나만 만들면 된다
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});

// 동적 액션 크리에이터
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

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
const reducer = (state = initialState, action) => {
  // 불변성을 지키면서 코드 작성하는게 어려우니까 도와주는 라이브러리 immer
  // immer 사용
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;
      case RETWEET_SUCCESS:
        draft.retweetLoading = false;
        draft.retweetDone = true;
        break;
      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;
      default:
        break;
      // 서버에서 이미지를 지우고 싶으면 비동기로 만들어줘야 한다.
      // 서버에서 이미지를 안지우는 이유는 머신러닝 등을 위해 데이터 수집을 할 수도 있어서
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        {
          // 데이터들 여기 저장
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;
      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
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
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        // 게시글 넘버링
        draft.singlePost = action.data;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      // 한 페이지에서 액션이 같이 사용되지 않는다면 공유 가능
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // 로딩이 밑에 무한로딩이 추가되어야 하니까 action.data를 뒤에 추가
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
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
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
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
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.tsx":
/*!***************************!*\
  !*** ./reducers/user.tsx ***!
  \***************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
// redux-thunk (한번에 dispatch를 여러번 할 수 있게 해준다) 여기선 안씀


const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  userInfo: null
  // signUpData: {},
  // loginData: {},
};

// 다른 파일에서도 써야하니까 export
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

// user reducer 상태를 바꿀 수 있는 action
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// Sequelize에서 합쳐준다
// 중복되는 더미데이터 함수로 묶음
// const dummyUser = (data) => ({
//     ...data,
//     nickname: 'Violet',
//     id: 1,
//     Posts: [{ id: 1 }],
//     Followings: [{ nickname: 'dummy1' }, { nickname: 'dummy2' }, { nickname: 'dummy333' }],
//     Followers: [{ nickname: 'dummy1' }, { nickname: 'dummy2' }, { nickname: 'dummy333' }],
// })

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;
    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;
    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;
    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;
    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;
    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;
    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;
    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;
    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;
    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;
    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;
    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;
    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;
    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      // 상대방 정보(다른사람 정보)
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;
    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      // 언팔한 사람 제외
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;
    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;
    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;
    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;
    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;
    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;
    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;
    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // immer 적용 이전
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };
    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };
    default:
      break;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.tsx":
/*!*************************!*\
  !*** ./sagas/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.tsx");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.tsx");
// *은 제너레이터
// yield는 중단점 next()는 다음 넘어감
// const gen = function*() {
// while (true) {
//     yield '무한';
//  } < yield가 중단점이라 무한으로 안돌고 유효한 코드가 됨
// }





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
/** 쿠키를 같이 전달 해준다 (도메인이 다르면 쿠키도 전달이 안되니까 backend의 cors와 여기)
     saga에서 보내는 axios는 withCredentials: true로 쿠키전달 허용을 공통적으로 들어가게 해줌 */
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  // all은 배열안에 든 걸 한번에 실행해준다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([
  // user와 post로 분리
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.tsx":
/*!************************!*\
  !*** ./sagas/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");

// import shortId from 'shortid';



function retweetAPI(data) {
  // formData는 { data }이런식으로 감싸버리면 json이 되니까 {}적지 말 것
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}
function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}
function uploadImagesAPI(data) {
  // formData는 { data }이런식으로 감싸버리면 json이 되니까 {}적지 말 것
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}
function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}
function likePostAPI(data) {
  // data가 ${}안에 들어가기 때문에 굳이 안넣어도 됨
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}
function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function loadHashtagPostsAPI(data, lastId) {
  // encodeURIComponent - 주소창에 한글 들어가서 에러나는거 방지
  // 나중에 decodeURIComponent 하면 원래대로 돌아온다.
  console.log(data, lastId);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}
function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}
function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}
function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function loadPostsAPI(lastId) {
  // get의 두번째 자리는 withcredentials
  // GET 쿼리 스트링으로 주소에 데이터 포함시키는 방법 (주소 캐싱)
  // 주소창 쿼리 스트링이 없으면 0
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    // yield delay(1000);
    // const id = shortId.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
      // data: generateDummyPost(10), // reducer에서 만든 함수
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}
function addPostAPI(data) {
  // 2번째 자리에 req.body.content로 받을 수 있도록 { content: data }처럼 이름을 붙여줄 수 있다.
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}
function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
      // action.data에 작성한 글이 들어있음 (더미데이터)
      // data: {
      //     id,
      //     content: action.data,
      // }
    });

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function removePostAPI(data) {
  // delete는 2번째 자리에 data 못 넣는다
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}
function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    // POST reducer 상태랑 user reducer상태랑 동시에 바꿀 수 없기 때문에 action이 2개가 나온다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      // action.data에 작성한 글이 들어있음
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}
function addCommentAPI(data) {
  /** 쿠키를 같이 전달 해준다 (도메인이 다르면 쿠키도 전달이 안되니까 backend의 cors와 여기)
   withCredentials: true로 쿠키전달 허용
   */
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}
function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}
function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}
function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}
function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}
function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(3000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}
function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(3000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}
function* watchLoadPosts() {
  // 무한 스크롤 이벤 대량 발생 방지
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(3000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

// function* watchUpdatePost() {
//     yield takeLatest(UPDATE_POST_REQUEST, updatePost);
//   }

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts),
  // fork(watchUpdatePost),
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.tsx":
/*!************************!*\
  !*** ./sagas/user.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");




// SAGA를 통해 백엔드 (port 3065에 요청)
// axios보낼 https주소 saga폴더 index에 중복되는 부분 변수로 묶어줌
// withCredentials 공통설정 해줘서 자동으로 들어감

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers', data);
}
function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}
function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}
function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}
function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}
function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    // yield delay(1000); 더미데이터용
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}
function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}
function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}
;
function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}
function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}
;
function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}
function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}
;
function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

// login 할때 받아와야 하는 data
function logInAPI(data) {
  // API는 제너레이터가 아님 주의할 것 
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

// call을 사용하면 이렇게 펼쳐서 적어줘야 함
// logInAPI(action.data);
// call(logInAPI, action.data);

// action.type 하면 Login request가 나오고 action.data하면 로그인 데이터가 들어있음
function* logIn(action) {
  // 요청의 결과를 받는다.
  try {
    // fork는 비동기 함수호출 (결과값 상관없이 바로 실행)
    // call은 동기 함수호출 (결과값 받아올 때 까지 기다림 (ex)then(() => )를 받아오듯)

    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    // yield delay(1000); // 서버가 아직 없기 때문에
    // call(logInAPI, action.data)처럼 작성해야 테스트하기 쉽다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
      // data: action.data, 더미용
    });
  } catch (err) {
    //성공은 result.data 실패는 err.response.data에 담긴다
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}
function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}
function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI(data) {
  // data는 email, password, nickname (signUp에서 넘어옴)
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}
function* signUp(action) {
  try {
    // action.data 넣어주면 signUpAPI에서 data받기 가능
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    // yield delay(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}
function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}
function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}
function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}
function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}
function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}
function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}
function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}
function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}
// 한 번 밖에 받지 않는다 (1번 받고나면 이벤트 리스너 사라짐)
// 1. takeEvery를 사용하거나 (while문 대체) 2. while로 감싸서 무한으로 실행되게 해준다. (잘 안씀)
function* watchLogIn() {
  // LOG_IN이란 액션이 실행될 때 까지 기다리겠다.
  // 어차피 Login이 request 되는 순간에 실행되니까
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
  // 만약 takeLatest를 사용하면 2회 이상 연속으로 눌렀을 때 마지막꺼만 실행 (마우스 고장 등으로)
  // 그러나 프론트에서만 마지막꺼 사용하는거고 백엔드에서는 두번 요청 보냄 (서버에는 두번 저장된다)
  // throttle로 시간제한을 둬서 제한시간 이내 여러번 클릭시 한번만 요청하게 함

  // 첫번째꺼만 실행하는 방법도 있음 takeReading?
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}
function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.tsx":
/*!**********************************!*\
  !*** ./store/configureStore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.tsx");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.tsx");
// configureStore.js






const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};
const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined
  // 데브툴 연결
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["legacy_createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  // store.dispatch({
  //   type: 'CHANGE_NICKNAME',
  //   data: 'lee',
  // })
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QudHN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIudHN4Iiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiQ29tbWVudHMiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIm1lIiwidXNlckluZm8iLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2VycyIsIkZvbGxvd2luZ3MiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsImxvYWRQb3N0QVBJIiwiZ2V0IiwibG9hZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwibGFzdElkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRVc2VyUG9zdHNBUEkiLCJsb2FkVXNlclBvc3RzIiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwiYWRkUG9zdEFQSSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoUmV0d2VldCIsInRha2VMYXRlc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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LENBQUM7RUFDeEQsTUFBTUssS0FBVSxHQUFHQyxnRUFBVyxDQUFDaE0saURBQU8sRUFBUzJMLFFBQVEsQ0FBQztFQUN4REksS0FBSyxDQUFDRSxRQUFRLEdBQUdULGNBQWMsQ0FBQ1UsR0FBRyxDQUFDakcsOENBQVEsQ0FBQztFQUM3QztFQUNBO0VBQ0E7RUFDQTtFQUNBLE9BQU84RixLQUFLO0FBQ2QsQ0FBQztBQUVELE1BQU1sUixPQUFPLEdBQUdzUix3RUFBYSxDQUFDWixjQUFjLEVBQUU7RUFDNUNhLEtBQUs7QUFDUCxDQUFDLENBQUM7QUFFYXZSLHNFQUFPLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEN0Qiw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuLy8gaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyAvKiwgQXBwQ29udGV4dCAqLyB9IGZyb20gJ25leHQvYXBwJ1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgQ29tcG9uZW50OiBhbnlcclxufVxyXG5cclxuY29uc3QgTm9kZUJpcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBuYW1lOiAndGFlaWwnLFxyXG4vLyAgICAgYWdlOiAxMTEsXHJcbi8vICAgICBwYXNzd29yZDogJ2JhYm8nXHJcbi8vIH1cclxuXHJcbi8vIC8vIOunpOuyiCDsg4jroZwgZGF0YeulvCDrp4zrk6Qg7IiYIOyXhuq4sCDrlYzrrLjsl5Ag64+Z7KCB7Jy866GcIChhY3Rpb24gY3JlYXRvcilcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgICAgICBkYXRhLFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGNoYW5nZU5pY2tuYW1lKCdsZWUnKTtcclxuXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCduZW5lJykpXHJcblxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuLy8gY29tYmluZVJlZHVjZXJz66GcIHVzZXIsIHBvc3Qg7ZWp7LOQ7KSA64ukXHJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuLy8gICAgIC8vIGh5ZHJhdGXrpbwg64Sj6riwIOychO2VtCBpbmRleCByZWR1Y2VyIOy2lOqwgCAo7ISc67KE7IKs7J2065OcIOugjOuNlOungeydhCDsnITtlbTshJwpXHJcbi8vICAgICBpbmRleDogKHN0YXRlOiBPYmplY3QgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgdXNlcixcclxuLy8gICAgIHBvc3QsXHJcbi8vIH0pXHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAvLyDsoITssrTrpbwg642u7Ja0IOyUjOyauCDsiJgg7J6I6rKMIOunjOuTpOyWtOyjvOq4sCDsnITtlbQg67CU6r68IOy9lOuTnFxyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFRBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG4vLyBpbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XHJcblxyXG5leHBvcnQgdHlwZSBtYWluUG9zdCA9IHtcclxuICAgIG1haW5Qb3N0czogYW55LFxyXG4gICAgc2luZ2xlUG9zdDogYW55LFxyXG4gICAgaW1hZ2VQYXRoczogb2JqZWN0W10sXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBsaWtlUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICBsaWtlUG9zdEVycm9yOiBib29sZWFuLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogYm9vbGVhbixcclxuICAgIHVubGlrZVBvc3RFcnJvcjogYm9vbGVhbixcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgYWRkUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICBhZGRQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogYm9vbGVhbixcclxuICAgIGFkZENvbW1lbnREb25lOiBib29sZWFuLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBib29sZWFuLFxyXG4gICAgaGFzTW9yZVBvc3RzOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3REb25lOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogYm9vbGVhbixcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBsb2FkUG9zdHNEb25lOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IGJvb2xlYW4sXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogYm9vbGVhbixcclxuICAgIHJlbW92ZVBvc3REb25lOiBib29sZWFuLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBib29sZWFuLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogYm9vbGVhbixcclxuICAgIHVwbG9hZEltYWdlc0RvbmU6IGJvb2xlYW4sXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogYm9vbGVhbixcclxuICAgIHJldHdlZXRMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgcmV0d2VldERvbmU6IGJvb2xlYW4sXHJcbiAgICByZXR3ZWV0RXJyb3I6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IG1haW5Qb3N0ID0ge1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICBpZDogMSxcclxuICAgIC8vICAgICBVc2VyOiB7XHJcbiAgICAvLyAgICAgICAgIGlkOiAxLFxyXG4gICAgLy8gICAgICAgICBuaWNrbmFtZTogJ1RhZUlsJ1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAvLyAgICAgSW1hZ2VzOiBbe1xyXG4gICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLy8gICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAvLyAgICAgfSwge1xyXG4gICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgLy8gICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgIC8vICAgICB9XSxcclxuICAgIC8vICAgICAvLyDrjIDrrLjsnpDripQg7ISc67KE7JeQ7IScIOyjvOuKlCDslaDrk6RcclxuICAgIC8vICAgICBDb21tZW50czogW3tcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAnaGVybycsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUficsXHJcbiAgICAvLyAgICAgfV1cclxuICAgIC8vIH1cclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBzaW5nbGVQb3N0OiBudWxsLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsIC8vIOustO2VnCDsiqTtgazroaRcclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICAgIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuLy8gaW5maW5pdGUgc2Nyb2xsaW5nXHJcbi8vIGV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCh1bmRlZmluZWQpLm1hcCgoKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5pbnRlcm5ldC51c2VyTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6IFt7XHJcbi8vICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIuaW50ZXJuZXQudXNlck5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICB9XSxcclxuLy8gfSkpO1xyXG5cclxuXHJcbi8vIOuzgOyImOuhnCDsp4DsoJXtlbTso7zrqbQg7Y647ZWY64ukXHJcbi8vIGFzIGNvbnN066W8IOyngOygle2VmOuptCDtg4DsnoXsnbQg7JWE64uI6528IOyLpOygnCDqsJLsnYQg6rCA66as7YKk6rKMIOuQqFxyXG5cclxuLy8g7ZmU66m0IOuhnOuUqe2VmOuptFxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuLy8g7Yq57KCVIOycoOyggCDssL7quLBcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbi8vIOuPmeq4sCDslaHshZjsnYAg7ZWY64KY66eMIOunjOuTpOuptCDrkJzri6RcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuLy8g64+Z7KCBIOyVoeyFmCDtgazrpqzsl5DsnbTthLBcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAvLyBzaG9ydElk66W8IOuEo+ycvOuptCDrjZTrr7jrjbDsnbTthLAgRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggdGhlIHNhbWUga2V57JeQ65+s64qUIO2VtOqysOydtCDrkJjsp4Drp4xcclxuLy8gICAgIC8vIEZhaWxlZCBwcm9wIHR5cGXsl5Drn6zqsIAg65ys64ukLiDrgpjspJHsl5Ag7Iuk7KCcIOuNsOydtO2EsCDrhKPslrTshJwg7ZW06rKw7ZW07JW8IO2VoCDrk69cclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgLy8g6rKM7Iuc6riAXHJcbi8vICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW10sXHJcbi8vICAgICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7IC8vIOuNlOuvuCDsvZTrqZjtirhcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBkYXRhLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAnVmlvbGV0JyxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxuLy8g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBtYWluUG9zdCA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwg7L2U65OcIOyekeyEse2VmOuKlOqyjCDslrTroKTsmrDri4jquYwg64+E7JmA7KO864qUIOudvOydtOu4jOufrOumrCBpbW1lclxyXG4gICAgLy8gaW1tZXIg7IKs7JqpXHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyDshJzrsoTsl5DshJwg7J2066+47KeA66W8IOyngOyasOqzoCDsi7bsnLzrqbQg67mE64+Z6riw66GcIOunjOuTpOyWtOykmOyVvCDtlZzri6QuXHJcbiAgICAgICAgICAgIC8vIOyEnOuyhOyXkOyEnCDsnbTrr7jsp4Drpbwg7JWI7KeA7Jqw64qUIOydtOycoOuKlCDrqLjsi6Drn6zri50g65Ox7J2EIOychO2VtCDrjbDsnbTthLAg7IiY7KeR7J2EIO2VoCDsiJjrj4Qg7J6I7Ja07IScXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICAvLyDrjbDsnbTthLDrk6Qg7Jes6riwIOyggOyepVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g6rKM7Iuc6riAIOuEmOuyhOungVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8g7ZWcIO2OmOydtOyngOyXkOyEnCDslaHshZjsnbQg6rCZ7J20IOyCrOyaqeuQmOyngCDslYrripTri6TrqbQg6rO17JygIOqwgOuKpVxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDroZzrlKnsnbQg67CR7JeQIOustO2VnOuhnOuUqeydtCDstpTqsIDrkJjslrTslbwg7ZWY64uI6rmMIGFjdGlvbi5kYXRh66W8IOuSpOyXkCDstpTqsIBcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyDrp6gg7JWe7JeQIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyE7JeQIOqyjOyLnOq4gCDsmKzrnbzqsITri6QuXHJcbiAgICAgICAgICAgIC8vIHNhZ2Fz7J2YIHBvc3Tsl5DshJwg64SY7Ja07JioIOqyjOyLnOq4gCBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAvLyBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBhZGRQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyDslZ7sl5DshJwgZHVtbXlQb3N07LaU6rCA7ZW07JW8IOunqCDsnIRcclxuICAgICAgICAgICAgICAgIC8vIHNhZ2Fz7J2YIHBvc3Tsl5DshJwg64SY7Ja07JioIOqyjOyLnOq4gCBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRhLmNvbnRlbnQsIHBvc3RJZCwgdXNlcklk6rCAIGFjdGlvbi5kYXRh7JeQIOuTpOyWtOyeiOuKlCDsg4Htg5xcclxuICAgICAgICAgICAgICAgIC8vIOu2iOuzgOyEseydhCDsp4DtgqTripQg7L2U65OcIChpbW1lciDrnbzsnbTruIzrn6zrpqwg7IKs7Jqp7ZWY66m0IOuNlCDqsITri6jtlZjqsowg6rCA64qlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c11cclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyDslZ7sl5DshJwgZHVtbXlQb3N07LaU6rCA7ZW07JW8IOunqCDsnIRcclxuICAgICAgICAgICAgICAgIC8vICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vIHJlZHV4LXRodW5rICjtlZzrsojsl5AgZGlzcGF0Y2jrpbwg7Jes65+s67KIIO2VoCDsiJgg7J6I6rKMIO2VtOykgOuLpCkg7Jes6riw7ISgIOyViOyUgFxyXG5cclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICAvLyBzaWduVXBEYXRhOiB7fSxcclxuICAgIC8vIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG4vLyDri6Trpbgg7YyM7J287JeQ7ISc64+EIOyNqOyVvO2VmOuLiOq5jCBleHBvcnRcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG4vLyB1c2VyIHJlZHVjZXIg7IOB7YOc66W8IOuwlOq/gCDsiJgg7J6I64qUIGFjdGlvblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnIGFzIGNvbnN0O1xyXG5cclxuLy8gU2VxdWVsaXpl7JeQ7IScIO2VqeyzkOykgOuLpFxyXG4vLyDspJHrs7XrkJjripQg642U66+4642w7J207YSwIO2VqOyImOuhnCDrrLbsnYxcclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAuLi5kYXRhLFxyXG4vLyAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbi8vICAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ2R1bW15MScgfSwgeyBuaWNrbmFtZTogJ2R1bW15MicgfSwgeyBuaWNrbmFtZTogJ2R1bW15MzMzJyB9XSxcclxuLy8gICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICdkdW1teTEnIH0sIHsgbmlja25hbWU6ICdkdW1teTInIH0sIHsgbmlja25hbWU6ICdkdW1teTMzMycgfV0sXHJcbi8vIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDsg4HrjIDrsKkg7KCV67O0KOuLpOuluOyCrOuejCDsoJXrs7QpXHJcbiAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyDslrjtjJTtlZwg7IKs656MIOygnOyZuFxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gaW1tZXIg7KCB7JqpIOydtOyghFxyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiLy8gKuydgCDsoJzrhIjroIjsnbTthLBcclxuLy8geWllbGTripQg7KSR64uo7KCQIG5leHQoKeuKlCDri6TsnYwg64SY7Ja06rCQXHJcbi8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKigpIHtcclxuLy8gd2hpbGUgKHRydWUpIHtcclxuLy8gICAgIHlpZWxkICfrrLTtlZwnO1xyXG4vLyAgfSA8IHlpZWxk6rCAIOykkeuLqOygkOydtOudvCDrrLTtlZzsnLzroZwg7JWI64+M6rOgIOycoO2aqO2VnCDsvZTrk5zqsIAg65CoXHJcbi8vIH1cclxuXHJcbmltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcidcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuLyoqIOy/oO2CpOulvCDqsJnsnbQg7KCE64usIO2VtOykgOuLpCAo64+E66mU7J247J20IOuLpOultOuptCDsv6DtgqTrj4Qg7KCE64us7J20IOyViOuQmOuLiOq5jCBiYWNrZW5k7J2YIGNvcnPsmYAg7Jes6riwKVxyXG4gICAgIHNhZ2Hsl5DshJwg67O064K064qUIGF4aW9z64qUIHdpdGhDcmVkZW50aWFsczogdHJ1ZeuhnCDsv6DtgqTsoITri6wg7ZeI7Jqp7J2EIOqzte2GteyggeycvOuhnCDrk6TslrTqsIDqsowg7ZW07KSMICovXHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICAvLyBhbGzsnYAg67Cw7Je07JWI7JeQIOuToCDqsbgg7ZWc67KI7JeQIOyLpO2Wie2VtOykgOuLpC5cclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgLy8gdXNlcuyZgCBwb3N066GcIOu2hOumrFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSwgTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBSRVRXRUVUX0ZBSUxVUkUsIFJFVFdFRVRfUkVRVUVTVCwgUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgICAvLyBmb3JtRGF0YeuKlCB7IGRhdGEgfeydtOufsOyLneycvOuhnCDqsJDsi7jrsoTrpqzrqbQganNvbuydtCDrkJjri4jquYwge33soIHsp4Ag66eQIOqyg1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIC8vIGZvcm1EYXRh64qUIHsgZGF0YSB97J2065+w7Iud7Jy866GcIOqwkOyLuOuyhOumrOuptCBqc29u7J20IOuQmOuLiOq5jCB7feyggeyngCDrp5Ag6rKDXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgLy8gZGF0YeqwgCAke33slYjsl5Ag65Ok7Ja06rCA6riwIOuVjOusuOyXkCDqtbPsnbQg7JWI64Sj7Ja064+EIOuQqFxyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCAtIOyjvOyGjOywveyXkCDtlZzquIAg65Ok7Ja06rCA7IScIOyXkOufrOuCmOuKlOqxsCDrsKnsp4BcclxuICAgIC8vIOuCmOykkeyXkCBkZWNvZGVVUklDb21wb25lbnQg7ZWY66m0IOybkOuemOuMgOuhnCDrj4zslYTsmKjri6QuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBsYXN0SWQpXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgICAvLyBnZXTsnZgg65GQ67KI7Ke4IOyekOumrOuKlCB3aXRoY3JlZGVudGlhbHNcclxuICAgIC8vIEdFVCDsv7zrpqwg7Iqk7Yq466eB7Jy866GcIOyjvOyGjOyXkCDrjbDsnbTthLAg7Y+s7ZWo7Iuc7YKk64qUIOuwqeuylSAo7KO87IaMIOy6kOyLsSlcclxuICAgIC8vIOyjvOyGjOywvSDsv7zrpqwg7Iqk7Yq466eB7J20IOyXhuycvOuptCAwXHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgLy8gY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgLy8gZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApLCAvLyByZWR1Y2Vy7JeQ7IScIOunjOuToCDtlajsiJhcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIC8vIDLrsojsp7gg7J6Q66as7JeQIHJlcS5ib2R5LmNvbnRlbnTroZwg67Cb7J2EIOyImCDsnojrj4TroZ0geyBjb250ZW50OiBkYXRhIH3sspjrn7wg7J2066aE7J2EIOu2meyXrOykhCDsiJgg7J6I64ukLlxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRh7JeQIOyekeyEse2VnCDquIDsnbQg65Ok7Ja07J6I7J2MICjrjZTrr7jrjbDsnbTthLApXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgICAgICAgLy8gICAgIGlkLFxyXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyBkZWxldGXripQgMuuyiOynuCDsnpDrpqzsl5AgZGF0YSDrqrsg64Sj64qU64ukXHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIC8vIFBPU1QgcmVkdWNlciDsg4Htg5zrnpEgdXNlciByZWR1Y2Vy7IOB7YOc656RIOuPmeyLnOyXkCDrsJTqv4Ag7IiYIOyXhuq4sCDrlYzrrLjsl5AgYWN0aW9u7J20IDLqsJzqsIAg64KY7Jio64ukLlxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5kYXRh7JeQIOyekeyEse2VnCDquIDsnbQg65Ok7Ja07J6I7J2MXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIC8qKiDsv6DtgqTrpbwg6rCZ7J20IOyghOuLrCDtlbTspIDri6QgKOuPhOuplOyduOydtCDri6TrpbTrqbQg7L+g7YKk64+EIOyghOuLrOydtCDslYjrkJjri4jquYwgYmFja2VuZOydmCBjb3Jz7JmAIOyXrOq4sClcclxuICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWXroZwg7L+g7YKk7KCE64usIO2XiOyaqVxyXG4gICAgICovXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpIC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoMzAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoMzAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICAvLyDrrLTtlZwg7Iqk7YGs66GkIOydtOuypCDrjIDrn4kg67Cc7IOdIOuwqeyngFxyXG4gICAgeWllbGQgdGhyb3R0bGUoMzAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoVXBkYXRlUG9zdCgpIHtcclxuLy8gICAgIHlpZWxkIHRha2VMYXRlc3QoVVBEQVRFX1BPU1RfUkVRVUVTVCwgdXBkYXRlUG9zdCk7XHJcbi8vICAgfVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIC8vIGZvcmsod2F0Y2hVcGRhdGVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBkZWxheSwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fUkVRVUVTVCwgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyBTQUdB66W8IO2Gte2VtCDrsLHsl5Trk5wgKHBvcnQgMzA2NeyXkCDsmpTssq0pXHJcbi8vIGF4aW9z67O064K8IGh0dHBz7KO87IaMIHNhZ2Htj7TrjZQgaW5kZXjsl5Ag7KSR67O165CY64qUIOu2gOu2hCDrs4DsiJjroZwg66y27Ja07KSMXHJcbi8vIHdpdGhDcmVkZW50aWFscyDqs7XthrXshKTsoJUg7ZW07KSY7IScIOyekOuPmeycvOuhnCDrk6TslrTqsJBcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApOyDrjZTrr7jrjbDsnbTthLDsmqlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBsb2dpbiDtlaDrlYwg67Cb7JWE7JmA7JW8IO2VmOuKlCBkYXRhXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIC8vIEFQSeuKlCDsoJzrhIjroIjsnbTthLDqsIAg7JWE64uYIOyjvOydmO2VoCDqsoMgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyBjYWxs7J2EIOyCrOyaqe2VmOuptCDsnbTroIfqsowg7Y687LOQ7IScIOyggeyWtOykmOyVvCDtlahcclxuLy8gbG9nSW5BUEkoYWN0aW9uLmRhdGEpO1xyXG4vLyBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4vLyBhY3Rpb24udHlwZSDtlZjrqbQgTG9naW4gcmVxdWVzdOqwgCDrgpjsmKTqs6AgYWN0aW9uLmRhdGHtlZjrqbQg66Gc6re47J24IOuNsOydtO2EsOqwgCDrk6TslrTsnojsnYxcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgLy8g7JqU7LKt7J2YIOqysOqzvOulvCDrsJvripTri6QuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCAo6rKw6rO86rCSIOyDgeq0gOyXhuydtCDrsJTroZwg7Iuk7ZaJKVxyXG4gICAgICAgIC8vIGNhbGzsnYAg64+Z6riwIO2VqOyImO2YuOy2nCAo6rKw6rO86rCSIOuwm+yVhOyYrCDrlYwg6rmM7KeAIOq4sOuLpOumvCAoZXgpdGhlbigoKSA9PiAp66W8IOuwm+yVhOyYpOuTrylcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7IC8vIOyEnOuyhOqwgCDslYTsp4Eg7JeG6riwIOuVjOusuOyXkFxyXG4gICAgICAgIC8vIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKeyymOufvCDsnpHshLHtlbTslbwg7YWM7Iqk7Yq47ZWY6riwIOyJveuLpC5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLCDrjZTrr7jsmqlcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8v7ISx6rO17J2AIHJlc3VsdC5kYXRhIOyLpO2MqOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TquLTri6RcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICAvLyBkYXRh64qUIGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgKHNpZ25VcOyXkOyEnCDrhJjslrTsmLQpXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEg64Sj7Ja07KO866m0IHNpZ25VcEFQSeyXkOyEnCBkYXRh67Cb6riwIOqwgOuKpVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG4vLyDtlZwg67KIIOuwluyXkCDrsJvsp4Ag7JWK64qU64ukICgx67KIIOuwm+qzoOuCmOuptCDsnbTrsqTtirgg66as7Iqk64SIIOyCrOudvOynkClcclxuLy8gMS4gdGFrZUV2ZXJ566W8IOyCrOyaqe2VmOqxsOuCmCAod2hpbGXrrLgg64yA7LK0KSAyLiB3aGlsZeuhnCDqsJDsi7jshJwg66y07ZWc7Jy866GcIOyLpO2WieuQmOqyjCDtlbTspIDri6QuICjsnpgg7JWI7JSAKVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIC8vIExPR19JTuydtOuegCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG4gICAgLy8g7Ja07LCo7ZS8IExvZ2lu7J20IHJlcXVlc3Qg65CY64qUIOyInOqwhOyXkCDsi6TtlonrkJjri4jquYxcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxuICAgIC8vIOunjOyVvSB0YWtlTGF0ZXN066W8IOyCrOyaqe2VmOuptCAy7ZqMIOydtOyDgSDsl7Dsho3snLzroZwg64iM66CA7J2EIOuVjCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJICjrp4jsmrDsiqQg6rOg7J6lIOuTseycvOuhnClcclxuICAgIC8vIOq3uOufrOuCmCDtlITroaDtirjsl5DshJzrp4wg66eI7KeA66eJ6rq8IOyCrOyaqe2VmOuKlOqxsOqzoCDrsLHsl5Trk5zsl5DshJzripQg65GQ67KIIOyalOyyrSDrs7Trg4QgKOyEnOuyhOyXkOuKlCDrkZDrsogg7KCA7J6l65Cc64ukKVxyXG4gICAgLy8gdGhyb3R0bGXroZwg7Iuc6rCE7KCc7ZWc7J2EIOuRrOyEnCDsoJztlZzsi5zqsIQg7J2064K0IOyXrOufrOuyiCDtgbTrpq3si5wg7ZWc67KI66eMIOyalOyyre2VmOqyjCDtlahcclxuXHJcbiAgICAvLyDssqvrsojsp7jqurzrp4wg7Iuk7ZaJ7ZWY64qUIOuwqeuyleuPhCDsnojsnYwgdGFrZVJlYWRpbmc/XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufVxyXG4iLCIvLyBjb25maWd1cmVTdG9yZS5qc1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUsIGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIC8vIOuNsOu4jO2ItCDsl7DqsrBcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gIGNvbnN0IHN0b3JlOiBhbnkgPSBjcmVhdGVTdG9yZShyZWR1Y2VyIGFzIGFueSwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAvLyBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgLy8gICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAvLyAgIGRhdGE6ICdsZWUnLFxyXG4gIC8vIH0pXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9