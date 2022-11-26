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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import App from "next/app";
// import type { AppProps /*, AppContext */ } from 'next/app'


// import PropTypes from "prop-types";


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

// NodeBird.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_2__["default"].withRedux(NodeBird));

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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

// (이전상태, 액션) => 다음상태
// combineReducers로 user, post 합쳐준다
const rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  // hydrate를 넣기 위해 index reducer 추가 (서버사이드 렌더링을 위해서)
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'TaeIl'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    // 대문자는 서버에서 주는 애들
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'hero'
      },
      content: '얼른 사고싶어요~'
    }]
  }],
  imagePaths: [],
  hasMorePosts: true,
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
// 변수로 지정해주면 편하다
// as const를 지정하면 타입이 아니라 실제 값을 가리키게 됨
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
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});

// 동적 액션 크리에이터
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const dummyPost = data => ({
  // shortId를 넣으면 더미데이터 Encountered two children with the same key에러는 해결이 되지만
  // Failed prop type에러가 뜬다. 나중에 실제 데이터 넣어서 해결해야 할 듯
  id: data.id,
  // 게시글
  content: data.content,
  User: {
    id: 1,
    nickname: 'Violet'
  },
  Images: [],
  Comments: []
});
const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'Violet'
  }
});

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) => {
  // 불변성을 지키면서 코드 작성하는게 어려우니까 도와주는 라이브러리 immer
  // immer 사용
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
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
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content));
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

/***/ }),

/***/ "./reducers/user.tsx":
/*!***************************!*\
  !*** ./reducers/user.tsx ***!
  \***************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// redux-thunk (한번에 dispatch를 여러번 할 수 있게 해준다) 여기선 안씀


const initialState = {
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
  me: null,
  signUpData: {},
  loginData: {}
};

// 다른 파일에서도 써야하니까 export
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

// user reducer 상태를 바꿀 수 있는 action
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// Sequelize에서 합쳐준다
// 중복되는 더미데이터 함수로 묶음
const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: 'Violet',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: 'dummy1'
  }, {
    nickname: 'dummy2'
  }, {
    nickname: 'dummy333'
  }],
  Followers: [{
    nickname: 'dummy1'
  }, {
    nickname: 'dummy2'
  }, {
    nickname: 'dummy333'
  }]
});
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});
const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data
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
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
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
      draft.me = dummyUser(action.data);
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
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.tsx");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.tsx");
// *은 제너레이터
// yield는 중단점 next()는 다음 넘어감
// const gen = function*() {
// while (true) {
//     yield '무한';
//  } < yield가 중단점이라 무한으로 안돌고 유효한 코드가 됨
// }




function* rootSaga() {
  // all은 배열안에 든 걸 한번에 실행해준다.
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([
  // user와 post로 분리
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");





function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);
}
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      // action.data에 작성한 글이 들어있음
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete('/api/post', data);
}
function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    // POST reducer 상태랑 user reducer상태랑 동시에 바꿀 수 없기 때문에 action이 2개가 나온다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      // action.data에 작성한 글이 들어있음
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}
function addCommentAPI(data) {
  // return axios.post(`/api/post/${data.postId}/comment`, data)
}
function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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




// login 할때 받아와야 하는 data
function logInAPI(data) {
  // API는 제너레이터가 아님 주의할 것 
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
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

    // const result = yield call(logInAPI, action.data)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // 서버가 아직 없기 때문에
    // call(logInAPI, action.data)처럼 작성해야 테스트하기 쉽다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}
function* logOut() {
  try {
    // const result = yield call(logOutAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
      // data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}
function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}
function* signUp() {
  try {
    // const result = yield call(signUpAPI)
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
      // data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

// 한 번 밖에 받지 않는다 (1번 받고나면 이벤트 리스너 사라짐)
// 1. takeEvery를 사용하거나 (while문 대체) 2. while로 감싸서 무한으로 실행되게 해준다. (잘 안씀)
function* watchLogIn() {
  // LOG_IN이란 액션이 실행될 때 까지 기다리겠다.
  // 어차피 Login이 request 되는 순간에 실행되니까
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
  // 만약 takeLatest를 사용하면 2회 이상 연속으로 눌렀을 때 마지막꺼만 실행 (마우스 고장 등으로)
  // 그러나 프론트에서만 마지막꺼 사용하는거고 백엔드에서는 두번 요청 보냄 (서버에는 두번 저장된다)
  // throttle로 시간제한을 둬서 제한시간 이내 여러번 클릭시 한번만 요청하게 함

  // 첫번째꺼만 실행하는 방법도 있음 takeReading?
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}
function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}
function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QudHN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIudHN4Iiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwidiIsImZpbmQiLCJwb3N0SWQiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInB1c2giLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImF4aW9zIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoQWRkUG9zdCIsInRha2VFdmVyeSIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFFNkI7QUFDN0I7O0FBRThDO0FBTTlDLE1BQU1BLFFBQXlCLEdBQUcsQ0FBQztFQUFFQztBQUFV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QUFDRixjQUFjLEVBQUVQLGdCQUFnQixDQUFDO0VBQ3RELE1BQU1VLFFBQVEsR0FBRyxRQUNiQyxTQUF3QztFQUMxQztFQUFBLEVBQ0VDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQVcsQ0FBQyxDQUFDO0VBQ3hELE1BQU1LLEtBQVUsR0FBR0MsZ0VBQVcsQ0FBQ3BHLGlEQUFPLEVBQVMrRixRQUFRLENBQUM7RUFDeERJLEtBQUssQ0FBQ0UsUUFBUSxHQUFHVCxjQUFjLENBQUNVLEdBQUcsQ0FBQzdDLDhDQUFRLENBQUM7RUFDN0M7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQUFPMEMsS0FBSztBQUNkLENBQUM7QUFFRCxNQUFNekosT0FBTyxHQUFHNkosd0VBQWEsQ0FBQ1osY0FBYyxFQUFFO0VBQzVDYSxLQUFLO0FBQ1AsQ0FBQyxDQUFDO0FBRWE5SixzRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdEIsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbi8vIGltcG9ydCB0eXBlIHsgQXBwUHJvcHMgLyosIEFwcENvbnRleHQgKi8gfSBmcm9tICduZXh0L2FwcCdcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIENvbXBvbmVudDogYW55XHJcbn1cclxuXHJcbmNvbnN0IE5vZGVCaXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4vLyAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIG5hbWU6ICd0YWVpbCcsXHJcbi8vICAgICBhZ2U6IDMwLFxyXG4vLyAgICAgcGFzc3dvcmQ6ICdiYWJvJ1xyXG4vLyB9XHJcblxyXG4vLyAvLyDrp6Trsogg7IOI66GcIGRhdGHrpbwg66eM65OkIOyImCDsl4bquLAg65WM66y47JeQIOuPmeyggeycvOuhnCAoYWN0aW9uIGNyZWF0b3IpXHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdHlwZTogJ0NIQU5HRV9OSUNLTkFNRScsXHJcbi8vICAgICAgICAgZGF0YSxcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBjaGFuZ2VOaWNrbmFtZSgnbGVlJyk7XHJcblxyXG4vLyBzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgnbmVuZScpKVxyXG5cclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbi8vIGNvbWJpbmVSZWR1Y2Vyc+uhnCB1c2VyLCBwb3N0IO2VqeyzkOykgOuLpFxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAvLyBoeWRyYXRl66W8IOuEo+q4sCDsnITtlbQgaW5kZXggcmVkdWNlciDstpTqsIAgKOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7JyE7ZW07IScKVxyXG4gICAgaW5kZXg6IChzdGF0ZTogT2JqZWN0ID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCB0eXBlIG1haW5Qb3N0ID0ge1xyXG4gICAgbWFpblBvc3RzOiBhbnksXHJcbiAgICBpbWFnZVBhdGhzOiBvYmplY3RbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgYWRkUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICBhZGRQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogYm9vbGVhbixcclxuICAgIGFkZENvbW1lbnREb25lOiBib29sZWFuLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBib29sZWFuLFxyXG4gICAgaGFzTW9yZVBvc3RzOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogYm9vbGVhbixcclxuICAgIGxvYWRQb3N0c0RvbmU6IGJvb2xlYW4sXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogYm9vbGVhbixcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGJvb2xlYW4sXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IG1haW5Qb3N0ID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnVGFlSWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIC8vIOuMgOusuOyekOuKlCDshJzrsoTsl5DshJwg7KO864qUIOyVoOuTpFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUficsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpR+JyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG4vLyDrs4DsiJjroZwg7KeA7KCV7ZW07KO866m0IO2OuO2VmOuLpFxyXG4vLyBhcyBjb25zdOulvCDsp4DsoJXtlZjrqbQg7YOA7J6F7J20IOyVhOuLiOudvCDsi6TsoJwg6rCS7J2EIOqwgOumrO2CpOqyjCDrkKhcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbi8vIOuPmeyggSDslaHshZgg7YGs66as7JeQ7J207YSwXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgLy8gc2hvcnRJZOulvCDrhKPsnLzrqbQg642U66+4642w7J207YSwIEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHRoZSBzYW1lIGtleeyXkOufrOuKlCDtlbTqsrDsnbQg65CY7KeA66eMXHJcbiAgICAvLyBGYWlsZWQgcHJvcCB0eXBl7JeQ65+s6rCAIOucrOuLpC4g64KY7KSR7JeQIOyLpOygnCDrjbDsnbTthLAg64Sj7Ja07IScIO2VtOqysO2VtOyVvCDtlaAg65OvXHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIC8vIOqyjOyLnOq4gFxyXG4gICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnVmlvbGV0JyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IG1haW5Qb3N0ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgLy8g67aI67OA7ISx7J2EIOyngO2CpOuptOyEnCDsvZTrk5wg7J6R7ISx7ZWY64qU6rKMIOyWtOugpOyasOuLiOq5jCDrj4TsmYDso7zripQg65287J2067iM65+s66asIGltbWVyXHJcbiAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vIOunqCDslZ7sl5AgZHVtbXlQb3N07LaU6rCA7ZW07JW8IOunqCDsnITsl5Ag6rKM7Iuc6riAIOyYrOudvOqwhOuLpC5cclxuICAgICAgICAgICAgLy8gc2FnYXPsnZggcG9zdOyXkOyEnCDrhJjslrTsmKgg6rKM7Iuc6riAIGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIC8vIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgIC8vICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyBzYWdhc+ydmCBwb3N07JeQ7IScIOuEmOyWtOyYqCDqsozsi5zquIAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZOqwgCBhY3Rpb24uZGF0YeyXkCDrk6TslrTsnojripQg7IOB7YOcXHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk64qUIOy9lOuTnCAoaW1tZXIg65287J2067iM65+s66asIOyCrOyaqe2VmOuptCDrjZQg6rCE64uo7ZWY6rKMIOqwgOuKpSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vIHJlZHV4LXRodW5rICjtlZzrsojsl5AgZGlzcGF0Y2jrpbwg7Jes65+s67KIIO2VoCDsiJgg7J6I6rKMIO2VtOykgOuLpCkg7Jes6riw7ISgIOyViOyUgFxyXG5cclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbi8vIOuLpOuluCDtjIzsnbzsl5DshJzrj4Qg7I2o7JW87ZWY64uI6rmMIGV4cG9ydFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG4vLyB1c2VyIHJlZHVjZXIg7IOB7YOc66W8IOuwlOq/gCDsiJgg7J6I64qUIGFjdGlvblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnIGFzIGNvbnN0O1xyXG5cclxuLy8gU2VxdWVsaXpl7JeQ7IScIO2VqeyzkOykgOuLpFxyXG4vLyDspJHrs7XrkJjripQg642U66+4642w7J207YSwIO2VqOyImOuhnCDrrLbsnYxcclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ2R1bW15MScgfSwgeyBuaWNrbmFtZTogJ2R1bW15MicgfSwgeyBuaWNrbmFtZTogJ2R1bW15MzMzJyB9XSxcclxuICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICdkdW1teTEnIH0sIHsgbmlja25hbWU6ICdkdW1teTInIH0sIHsgbmlja25hbWU6ICdkdW1teTMzMycgfV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIGltbWVyIOyggeyaqSDsnbTsoIRcclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsIi8vICrsnYAg7KCc64SI66CI7J207YSwXHJcbi8vIHlpZWxk64qUIOykkeuLqOygkCBuZXh0KCnripQg64uk7J2MIOuEmOyWtOqwkFxyXG4vLyBjb25zdCBnZW4gPSBmdW5jdGlvbiooKSB7XHJcbi8vIHdoaWxlICh0cnVlKSB7XHJcbi8vICAgICB5aWVsZCAn66y07ZWcJztcclxuLy8gIH0gPCB5aWVsZOqwgCDspJHri6jsoJDsnbTrnbwg66y07ZWc7Jy866GcIOyViOuPjOqzoCDsnKDtmqjtlZwg7L2U65Oc6rCAIOuQqFxyXG4vLyB9XHJcblxyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgLy8gYWxs7J2AIOuwsOyXtOyViOyXkCDrk6Ag6rG4IO2VnOuyiOyXkCDsi6TtlontlbTspIDri6QuXHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIC8vIHVzZXLsmYAgcG9zdOuhnCDrtoTrpqxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIGRlbGF5LCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gYWN0aW9uLmRhdGHsl5Ag7J6R7ISx7ZWcIOq4gOydtCDrk6TslrTsnojsnYxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICAvLyBQT1NUIHJlZHVjZXIg7IOB7YOc656RIHVzZXIgcmVkdWNlcuyDge2DnOuekSDrj5nsi5zsl5Ag67CU6r+AIOyImCDsl4bquLAg65WM66y47JeQIGFjdGlvbuydtCAy6rCc6rCAIOuCmOyYqOuLpC5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvLyBhY3Rpb24uZGF0YeyXkCDsnpHshLHtlZwg6riA7J20IOuTpOyWtOyeiOydjFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKVxyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgZGVsYXksIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGxvZ2luIO2VoOuVjCDrsJvslYTsmYDslbwg7ZWY64qUIGRhdGFcclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgLy8gQVBJ64qUIOygnOuEiOugiOydtO2EsOqwgCDslYTri5gg7KO87J2Y7ZWgIOqygyBcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcclxufVxyXG5cclxuLy8gY2FsbOydhCDsgqzsmqntlZjrqbQg7J2066CH6rKMIO2OvOyzkOyEnCDsoIHslrTspJjslbwg7ZWoXHJcbi8vIGxvZ0luQVBJKGFjdGlvbi5kYXRhKTtcclxuLy8gY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuLy8gYWN0aW9uLnR5cGUg7ZWY66m0IExvZ2luIHJlcXVlc3TqsIAg64KY7Jik6rOgIGFjdGlvbi5kYXRh7ZWY66m0IOuhnOq3uOyduCDrjbDsnbTthLDqsIAg65Ok7Ja07J6I7J2MXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIC8vIOyalOyyreydmCDqsrDqs7zrpbwg67Cb64qU64ukLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJjtmLjstpwgKOqysOqzvOqwkiDsg4HqtIDsl4bsnbQg67CU66GcIOyLpO2WiSlcclxuICAgICAgICAvLyBjYWxs7J2AIOuPmeq4sCDtlajsiJjtmLjstpwgKOqysOqzvOqwkiDrsJvslYTsmKwg65WMIOq5jOyngCDquLDri6TrprwgKGV4KXRoZW4oKCkgPT4gKeulvCDrsJvslYTsmKTrk68pXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApOyAvLyDshJzrsoTqsIAg7JWE7KeBIOyXhuq4sCDrlYzrrLjsl5BcclxuICAgICAgICAvLyBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSnsspjrn7wg7J6R7ISx7ZW07JW8IO2FjOyKpO2KuO2VmOq4sCDsib3ri6QuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvL+yEseqzteydgCByZXN1bHQuZGF0YSDsi6TtjKjripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06ri064ukXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSlcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIO2VnCDrsogg67CW7JeQIOuwm+yngCDslYrripTri6QgKDHrsogg67Cb6rOg64KY66m0IOydtOuypO2KuCDrpqzsiqTrhIgg7IKs65287KeQKVxyXG4vLyAxLiB0YWtlRXZlcnnrpbwg7IKs7Jqp7ZWY6rGw64KYICh3aGlsZeusuCDrjIDssrQpIDIuIHdoaWxl66GcIOqwkOyLuOyEnCDrrLTtlZzsnLzroZwg7Iuk7ZaJ65CY6rKMIO2VtOykgOuLpC4gKOyemCDslYjslIApXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgLy8gTE9HX0lO7J20656AIOyVoeyFmOydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6QuXHJcbiAgICAvLyDslrTssKjtlLwgTG9naW7snbQgcmVxdWVzdCDrkJjripQg7Iic6rCE7JeQIOyLpO2WieuQmOuLiOq5jFxyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbiAgICAvLyDrp4zslb0gdGFrZUxhdGVzdOulvCDsgqzsmqntlZjrqbQgMu2ajCDsnbTsg4Eg7Jew7IaN7Jy866GcIOuIjOuggOydhCDrlYwg66eI7KeA66eJ6rq866eMIOyLpO2WiSAo66eI7Jqw7IqkIOqzoOyepSDrk7HsnLzroZwpXHJcbiAgICAvLyDqt7jrn6zrgpgg7ZSE66Gg7Yq47JeQ7ISc66eMIOuniOyngOunieq6vCDsgqzsmqntlZjripTqsbDqs6Ag67Cx7JeU65Oc7JeQ7ISc64qUIOuRkOuyiCDsmpTssq0g67O064OEICjshJzrsoTsl5DripQg65GQ67KIIOyggOyepeuQnOuLpClcclxuICAgIC8vIHRocm90dGxl66GcIOyLnOqwhOygnO2VnOydhCDrkazshJwg7KCc7ZWc7Iuc6rCEIOydtOuCtCDsl6zrn6zrsogg7YG066at7IucIO2VnOuyiOunjCDsmpTssq3tlZjqsowg7ZWoXHJcblxyXG4gICAgLy8g7LKr67KI7Ke46rq866eMIOyLpO2Wie2VmOuKlCDrsKnrspXrj4Qg7J6I7J2MIHRha2VSZWFkaW5nP1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59XHJcbiIsIi8vIGNvbmZpZ3VyZVN0b3JlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbilcclxufVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8g642w67iM7Yi0IOyXsOqysFxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgY29uc3Qgc3RvcmU6IGFueSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIgYXMgYW55LCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIC8vIHN0b3JlLmRpc3BhdGNoKHtcclxuICAvLyAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gIC8vICAgZGF0YTogJ2xlZScsXHJcbiAgLy8gfSlcclxuICByZXR1cm4gc3RvcmVcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=