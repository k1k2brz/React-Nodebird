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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.tsx":
/*!**********************************!*\
  !*** ./components/AppLayout.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.tsx");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\AppLayout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




// ant-design css불러오기






// ant design을 styled component로
// styled component가 싫으면 useMemo(() => ({ css }), [])
// const SearchInput = styled(Input.Search)`
//     vertical-align: middle;
// `;

// gutter때문에 x축 스크롤바 생기는 현상 해겨
const Global = styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"]`
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child {
        padding-left: 0 !important;
    }
    .ant-col:last-child {
        padding-right: 0 !important;
    }
`;
const menuItems = [{
  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 16
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 31
    }
  }, "\uB178\uB4DC\uBC84\uB4DC")),
  key: "home"
}, {
  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 16
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 38
    }
  }, "\uD504\uB85C\uD544")),
  key: "profile"
}, {
  label: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search, {
    enterButton: true,
    style: {
      verticalAlign: 'middle'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 16
    }
  }),
  key: "search"
}, {
  label: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 16
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "\uD68C\uC6D0\uAC00\uC785")),
  key: "signup"
}];
const AppLayout = ({
  children
}) => {
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("home");
  // redux로 관리하기 때문에 필요 없어짐
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  // const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const onMenu = e => {
    setCurrent(e.key);
  };
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(Global, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    onClick: onMenu,
    selectedKeys: [current],
    items: menuItems,
    mode: "horizontal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, me ? __jsx(_components_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }) : __jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 43
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 24,
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://github.com/k1k2brz",
    target: "_blank",
    rel: "noreferrer noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Made by TaeIl"))));
};
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/CommentForm.tsx":
/*!************************************!*\
  !*** ./components/CommentForm.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\CommentForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







// 게시글 props로 받음
const CommentForm = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  // 내 아이디 가져옴
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentDone,
    addCommentLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  // commentText에 댓글 -> submit하면 content, postId, userId를 실어보냄
  const onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      // dispatch해서 ADD_COMMENT_REQUEST에 올려준다.
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [commentText, id]);
  return (
    // ant design의 onSubmit = onFinish
    __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
      onFinish: onSubmitComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      style: {
        position: 'relative',
        margin: 0
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
      value: commentText,
      onChange: onChangeCommentText,
      rows: 4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      style: {
        position: 'absolute',
        right: 0,
        bottom: -40,
        zIndex: 1
      },
      type: "primary",
      htmlType: "submit",
      loading: addCommentLoading,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, "\uC090\uC57D")))
  );
};
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/FollowButton.tsx":
/*!*************************************!*\
  !*** ./components/FollowButton.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\FollowButton.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const FollowButton = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    followLoading,
    unfollowLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  // post 작성자의 아이디라면
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);

  // 내가 쓴 글 팔로잉 안보이게
  // return을 hooks보다 위에 쓰면 에러남
  if (post.User.id === me.id) {
    return null;
  }
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }, isFollowing ? '언팔로우' : '팔로우');
};
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

/***/ }),

/***/ "./components/ImagesZoom/index.tsx":
/*!*****************************************!*\
  !*** ./components/ImagesZoom/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/ImagesZoom/styles.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\ImagesZoom\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Global"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
    onClick: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialSlide: 0,
    beforeChange: (slide, newSlide) => setCurrentSlide(newSlide),
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, images.map(v => __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
    key: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v.src}`,
    alt: v.src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, currentSlide + 1, ' ', "/", images.length)))));
};
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

/***/ }),

/***/ "./components/ImagesZoom/styles.tsx":
/*!******************************************!*\
  !*** ./components/ImagesZoom/styles.tsx ***!
  \******************************************/
/*! exports provided: Global, Overlay, Header, SlickWrapper, CloseBtn, Indicator, ImgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickWrapper", function() { return SlickWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseBtn", function() { return CloseBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWrapper", function() { return ImgWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);



// 이미 만들어져 있는 style을 바꿀 수 있게 지원
// transform 해제를 위해 ant-card-cover 바꿔줌
const Global = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`;
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  height: calc(100% - 44px);
  background: #090909;
`;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CloseOutlined"])`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 32px;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

/***/ }),

/***/ "./components/LoginForm.tsx":
/*!**********************************!*\
  !*** ./components/LoginForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\LoginForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








// div 태그가 됨
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    margin-top: 10px;
`;
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Form"])`
    padding: 10px;
`;
const LoginForm = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    logInLoading,
    logInError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');

  // 로그인 실패 이유 알 수 있게
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  //컴포넌트에 props로 받아진 함수는 useCallback을 사용해야 최적화가 된다.
  // const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //     setId(e.target.value)
  // }, [])

  // const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(e.target.value)
  // }, [])

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(email, password);
    // reducers 안꺼를 가져옴
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["loginRequestAction"])({
      email,
      password
    }));
  }, [email, password]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(FormWrapper, {
    onFinish: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "user-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "\uC774\uBA54\uC77C"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-email",
    value: email,
    onChange: onChangeEmail,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  })), __jsx(ButtonWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 42
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 45
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.tsx");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.tsx");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// import { Comment } from '@ant-design/compatible';








const PostCard = ({
  post
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  // const [liked, setLiked] = useState<boolean>(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  // state.user.me && state.user.me.id 를 옵셔널 체이닝으로 줄여서
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["UNLIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    setCommentFormOpened(prev => !prev);
  }, [id]);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  const onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["RETWEET_REQUEST"],
      data: post.id
    });
  }, [id]);

  // 게시글 좋아요 누른 사람중에 내가 있는지
  const liked = post.Likers.find(v => v.id === id);
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: post.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 42
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {
      key: "retweet",
      onClick: onRetweet,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onUnLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
      key: "heart",
      onClick: onLike,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
      key: "message",
      onClick: onToggleComment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "ellipsis",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 29
        }
      }, id && post.UserId === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 45
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 45
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 39
        }
      }, "\uC2E0\uACE0")),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }))]
    // 누가 리트윗 했는지
    ,
    title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      post: post,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 30
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, post.RetweetId && post.Retweet ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Retweet.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: post.Retweet.Images,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 54
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 52
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 33
      }
    }, post.Retweet.User.nickname[0]),
    title: post.Retweet.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.Retweet.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 38
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 38
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })), commentFormOpened && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: `${post.Comments.length}개의 댓글`,
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: item => __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
      author: item.User.nickname,
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 45
        }
      }, item.User.nickname[0]),
      content: item.content,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  })));
};
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object),
    RetweetId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    Retweet: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./components/PostCardContent.tsx":
/*!****************************************!*\
  !*** ./components/PostCardContent.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostCardContent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostCardContent = ({
  postData
}) => {
  //첫 번째 게시글 #해시태그
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, postData.split(/(#[^\s#]+)/g).map((v, i) => {
    // 해쉬태그 추출
    if (v.match(/(#[^\s#]+)/)) {
      // 바뀔 일(리렌더링)이 없다면 i를 써도 된다.
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/hashtag/${v.slice(1)}`,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 28
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 74
        }
      }, v));
    }
    return v;
  }));
};
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

/***/ }),

/***/ "./components/PostForm.tsx":
/*!*********************************!*\
  !*** ./components/PostForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.tsx");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PostForm = () => {
  const {
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addPostDone) {
      // onSubmit에서 초기화 하면 에러 났을 때 게시글 작성된게 전부 날아감
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    // 게시글 없음
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }
    const formData = new FormData();
    imagePaths.forEach(p => {
      // req.body.image가 됨
      formData.append('image', p);
    });
    // req.body.content가 됨
    formData.append('content', text);
    // dispatch자리에는 객체가 들어감
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
    // imageInput.current로 접근
  }, [imageInput.current]);
  const onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('images', e.target.files);
    // FormData()를 사용하면 multipart형식으로 서버로 보냄
    const imageFormData = new FormData();
    // forEach 메서드가 이벤트에 없기 때문에 [].의 forEach메서드를 빌려쓰는 방식으로 작성
    [].forEach.call(e.target.files, f => {
      // key(라우터의 upload값과 일치해야함), 값
      imageFormData.append('image', f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_IMAGE"],
      data: index
    });
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onClickImageUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      float: 'right'
    },
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, imagePaths.map((v, i) => __jsx("div", {
    key: v,
    style: {
      display: 'inline-block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: `http://localhost:3065/${v}`,
    style: {
      width: '200px'
    },
    alt: v,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onRemoveImage(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "\uC81C\uAC70"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

/***/ }),

/***/ "./components/PostImages.tsx":
/*!***********************************!*\
  !*** ./components/PostImages.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostImages.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setShowImagesZoom(false);
  }, []);
  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 36
      }
    }));
  }
  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `http://localhost:3065/${images[0].src}`,
      alt: images[0].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block'
      },
      src: `http://localhost:3065/${images[1].src}`,
      alt: images[1].src,
      onClick: onZoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
      images: images,
      onClose: onClose,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 36
      }
    }));
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("img", {
    role: "presentation",
    style: {
      width: '50%'
    },
    src: `http://localhost:3065/${images[0].src}`,
    alt: images[0].src,
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    onClick: onZoom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && __jsx(_ImagesZoom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: images,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 32
    }
  }));
};
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ }),

/***/ "./components/UserProfile.tsx":
/*!************************************!*\
  !*** ./components/UserProfile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\UserProfile.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserProfile = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me,
    logOutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_4__["logoutRequestAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/user/${me.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }), me.Posts.length))), __jsx("div", {
      key: "followings",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 42
      }
    }), me.Followings.length), __jsx("div", {
      key: "followers",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 41
      }
    }), me.Followers.length)],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, me.nickname[0]),
    title: me.nickname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    loading: logOutLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./hooks/useInput.tsx":
/*!****************************!*\
  !*** ./hooks/useInput.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initialValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.tsx");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.tsx");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.tsx");
var _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Next.js는 import React from 'react' 구문이 필요없음









const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);

  // 리렌더링 에러로 상위에 올린 것
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //   });
  // }, []);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_USER_REQUEST,
  //   })
  // }, [])

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      // scrollY: 얼마나 내렸는지, clientHeight: 화면 보이는 길이, scrollHeight: 총 길이
      // scrollY + clientHeight해서 끝까지 내렸는지 확인 가능
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        // 로딩중에도 실행 안되게 막아준다. (Throttle만으로는 request여러번 가는 것 까지 못 막기 때문)
        // 만약 모바일로 수천번 무한스크롤 게시글을 로딩한다면 메모리가 터져버릴 수 있기 때문에
        // react-virtualized를 사용하면 좋다. (구현해볼것)
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;
          // 마지막 게시글의 id // &&와 같음
          // 주소창 쿼리 스트링이 없을 경우 대비
          const lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
            lastId
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  return (
    // 다른 컴포넌트로 감싸줄 경우 다른 컴포넌트 사용 가능
    __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 14
      }
    }), mainPosts.map(post => __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 37
      }
    })))
  );
};

// Next js
// HOME 보다 먼저 실행된다.
const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"].getServerSideProps(store => async ({
  req
}) => {
  // const cookie = req ? req.headers.cookie : '';
  // axios.defaults.headers.Cookie = '';
  // if (req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_USER_REQUEST"]
  });
  // Next - redux 사용방법
  store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await store.sagaTask.toPromise(); // store에 sagaTask
  // 실행된 결과 HYDRATE로 보낸다 (reducer index)
});

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
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
  addCommentError: null,
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
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // 로딩이 밑에 무한로딩이 추가되어야 하니까 action.data를 뒤에 추가
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
  userInfo: null,
  signUpData: {},
  loginData: {}
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
      draft.me = action.data;
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
function* watchLoadPosts() {
  // 무한스크롤 이벤트 대량발생 방지
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}
function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}
function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}
function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}
function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvbGxvd0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlc1pvb20vc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0Q2FyZENvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEZvcm0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEltYWdlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QudHN4Iiwid2VicGFjazovLy8uL3NhZ2FzL3VzZXIudHN4Iiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiR2xvYmFsIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJtZW51SXRlbXMiLCJsYWJlbCIsImtleSIsInZlcnRpY2FsQWxpZ24iLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwib25NZW51IiwiZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiQ29tbWVudEZvcm0iLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50TG9hZGluZyIsImNvbW1lbnRUZXh0Iiwib25DaGFuZ2VDb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwidXNlSW5wdXQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJwb3NpdGlvbiIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4Iiwib2JqZWN0IiwiRm9sbG93QnV0dG9uIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJVTkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJJbWFnZXNab29tIiwiaW1hZ2VzIiwib25DbG9zZSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNsaWRlIiwibmV3U2xpZGUiLCJtYXAiLCJzcmMiLCJsZW5ndGgiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJmdW5jIiwiT3ZlcmxheSIsInN0eWxlZCIsImRpdiIsIkhlYWRlciIsImhlYWRlciIsIlNsaWNrV3JhcHBlciIsIkNsb3NlQnRuIiwiQ2xvc2VPdXRsaW5lZCIsIkluZGljYXRvciIsIkltZ1dyYXBwZXIiLCJCdXR0b25XcmFwcGVyIiwiRm9ybVdyYXBwZXIiLCJGb3JtIiwiTG9naW5Gb3JtIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsImxvZ2luUmVxdWVzdEFjdGlvbiIsIlBvc3RDYXJkIiwicmVtb3ZlUG9zdExvYWRpbmciLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwib25MaWtlIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2Iiwib25SZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIm9uUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsImxpa2VkIiwiTGlrZXJzIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlcklkIiwiUmV0d2VldElkIiwibmlja25hbWUiLCJSZXR3ZWV0IiwiQ29tbWVudHMiLCJpdGVtIiwibnVtYmVyIiwiY3JlYXRlZEF0IiwiYW55Iiwib2JqZWN0T2YiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0RGF0YSIsInNwbGl0IiwiaSIsIm1hdGNoIiwic2xpY2UiLCJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsIm9uU3VibWl0IiwidHJpbSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicCIsImFwcGVuZCIsIkFERF9QT1NUX1JFUVVFU1QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwidGFyZ2V0IiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiY2FsbCIsImYiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJmbG9hdCIsImRpc3BsYXkiLCJ3aWR0aCIsIlBvc3RJbWFnZXMiLCJzaG93SW1hZ2VzWm9vbSIsInNldFNob3dJbWFnZXNab29tIiwib25ab29tIiwidGV4dEFsaWduIiwiVXNlclByb2ZpbGUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiUG9zdHMiLCJGb2xsb3dlcnMiLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZW50cnkiLCJoYXMiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJlcnJvciIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0Iiwid2FybiIsImNoaWxkRWxtIiwic2V0Q2hpbGRFbG0iLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwicHVzaCIsIm9mZiIsInNwbGljZSIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsInNvbWUiLCJyZSIsInRlc3QiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNlYXJjaCIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwcmVwYXJlRGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwiY29tcGlsZSIsInZhbGlkYXRlIiwibmV3VXJsIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJIb21lIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJldHdlZXRFcnJvciIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsInN0b3JlIiwicmVxIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3QiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsIlBvc3RJZCIsImNvbmNhdCIsInVuc2hpZnQiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsInVzZXJJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJwdXQiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsInVwbG9hZEltYWdlcyIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwiYWRkUG9zdEFQSSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsIndhdGNoUmV0d2VldCIsInRha2VMYXRlc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJjaGFuZ2VOaWNrbmFtZUFQSSIsImNoYW5nZU5pY2tuYW1lIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZ2V0U3RhdGUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUVOO0FBQzJCO0FBQzVCO0FBQzVCO0FBQzBDO0FBQ1k7QUFFRjtBQUNKO0FBQ2Y7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLG1FQUFrQjtBQUNqQztB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bEN0Qiw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgSW5wdXQsIE1lbnUsIFJvdywgQ29sLCBNZW51UHJvcHMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuLy8gYW50LWRlc2lnbiBjc3Prtojrn6zsmKTquLBcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBhbnQgZGVzaWdu7J2EIHN0eWxlZCBjb21wb25lbnTroZxcclxuLy8gc3R5bGVkIGNvbXBvbmVudOqwgCDsi6vsnLzrqbQgdXNlTWVtbygoKSA9PiAoeyBjc3MgfSksIFtdKVxyXG4vLyBjb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZChJbnB1dC5TZWFyY2gpYFxyXG4vLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gYDtcclxuXHJcbi8vIGd1dHRlcuuVjOusuOyXkCB47LaVIOyKpO2BrOuhpOuwlCDsg53quLDripQg7ZiE7IOBIO2VtOqyqFxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5hbnQtcm93IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5gXHJcblxyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn07XHJcblxyXG5jb25zdCBtZW51SXRlbXM6IE1lbnVQcm9wc1tcIml0ZW1zXCJdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiA8TGluayBocmVmPVwiL1wiPjxhPuuFuOuTnOuyhOuTnDwvYT48L0xpbms+LFxyXG4gICAgICAgIGtleTogXCJob21lXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT7tlITroZztlYQ8L2E+PC9MaW5rPixcclxuICAgICAgICBrZXk6IFwicHJvZmlsZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYWJlbDogPElucHV0LlNlYXJjaCBlbnRlckJ1dHRvbiBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fSAvPixcclxuICAgICAgICBrZXk6IFwic2VhcmNoXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhYmVsOiA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+LFxyXG4gICAgICAgIGtleTogXCJzaWdudXBcIixcclxuICAgIH0sXHJcbl1cclxuXHJcbmNvbnN0IEFwcExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJob21lXCIpO1xyXG4gICAgLy8gcmVkdXjroZwg6rSA66as7ZWY6riwIOuVjOusuOyXkCDtlYTsmpQg7JeG7Ja07KeQXHJcbiAgICAvLyBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICAgIC8vIGNvbnN0IGlzTG9nZ2VkSW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUudXNlci5pc0xvZ2dlZEluKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCBvbk1lbnU6IE1lbnVQcm9wc1tcIm9uQ2xpY2tcIl0gPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnQoZS5rZXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgICAgICAgPE1lbnUgb25DbGljaz17b25NZW51fSBzZWxlY3RlZEtleXM9e1tjdXJyZW50XX0gaXRlbXM9e21lbnVJdGVtc30gbW9kZT1cImhvcml6b250YWxcIiAvPlxyXG4gICAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyUHJvZmlsZSAvPiA6IDxMb2dpbkZvcm0gLz59XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgey8qIHRhcmdldCBfYmxhY2vrpbwg7ZWgIOuVkCBub3JlZmVycmVyIG5vb3BlbmVy66W8IO2VtOykmOyVvCDrs7TslYgg7JyE7ZiR7J20IOyggeyWtOynkCAqL31cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHJlZmVycmVyIOydtOyghO2OmOydtOyngCBvcGVuZXIg64iE6rCAIOyXtOyYgOuCmCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2sxazJicnpcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hZGUgYnkgVGFlSWxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuLy8g6rKM7Iuc6riAIHByb3Bz66GcIOuwm+ydjFxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8g64K0IOyVhOydtOuUlCDqsIDsoLjsmLRcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIubWU/LmlkKVxyXG4gICAgY29uc3QgeyBhZGRDb21tZW50RG9uZSwgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5wb3N0KVxyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhZGRDb21tZW50RG9uZSkge1xyXG4gICAgICAgICAgICBzZXRDb21tZW50VGV4dCgnJylcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWRkQ29tbWVudERvbmVdKVxyXG5cclxuICAgIC8vIGNvbW1lbnRUZXh07JeQIOuMk+q4gCAtPiBzdWJtaXTtlZjrqbQgY29udGVudCwgcG9zdElkLCB1c2VySWTrpbwg7Iuk7Ja067O064OEXHJcbiAgICBjb25zdCBvblN1Ym1pdENvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAvLyBkaXNwYXRjaO2VtOyEnCBBRERfQ09NTUVOVF9SRVFVRVNU7JeQIOyYrOugpOykgOuLpC5cclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogeyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH0sXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtjb21tZW50VGV4dCwgaWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gYW50IGRlc2lnbuydmCBvblN1Ym1pdCA9IG9uRmluaXNoXHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCwgYm90dG9tOiAtNDAsIHpJbmRleDogMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgPuyCkOyVvTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbkNvbW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07IiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIC8vIHBvc3Qg7J6R7ISx7J6Q7J2YIOyVhOydtOuUlOudvOuptFxyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXIuaWQpXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNGb2xsb3dpbmddKVxyXG5cclxuICAgIC8vIOuCtOqwgCDsk7Qg6riAIO2MlOuhnOyeiSDslYjrs7TsnbTqsoxcclxuICAgIC8vIHJldHVybuydhCBob29rc+uztOuLpCDsnITsl5Ag7JOw66m0IOyXkOufrOuCqFxyXG4gICAgaWYgKHBvc3QuVXNlci5pZCA9PT0gbWUuaWQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ30gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgIDwvQnV0dG9uPlxyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgSGVhZGVyLCBDbG9zZUJ0biwgU2xpY2tXcmFwcGVyLCBJbWdXcmFwcGVyLCBJbmRpY2F0b3IsIEdsb2JhbCB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE92ZXJsYXk+XHJcbiAgICAgICAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT7sg4HshLgg7J2066+47KeAPC9oMT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFNsaWNrV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlQ2hhbmdlPXsoc2xpZGUsIG5ld1NsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUobmV3U2xpZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7di5zcmN9YH0gYWx0PXt2LnNyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5kaWNhdG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRTbGlkZSArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5kaWNhdG9yPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2xpY2tXcmFwcGVyPlxyXG4gICAgICAgIDwvT3ZlcmxheT5cclxuICAgICk7XHJcbn07XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSkuaXNSZXF1aXJlZCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZXNab29tOyIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG4vLyDsnbTrr7gg66eM65Ok7Ja07KC4IOyeiOuKlCBzdHlsZeydhCDrsJTqv4Ag7IiYIOyeiOqyjCDsp4Dsm5BcclxuLy8gdHJhbnNmb3JtIO2VtOygnOulvCDsnITtlbQgYW50LWNhcmQtY292ZXIg67CU6r+U7KSMXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuYW50LWNhcmQtY292ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGhlaWdodDogNDRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgJiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgYmFja2dyb3VuZDogIzA5MDkwOTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUJ0biA9IHN0eWxlZChDbG9zZU91dGxpbmVkKWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICYgPiBkaXYge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAmIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuYDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGRpdiDtg5zqt7jqsIAg65CoXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgLy8g66Gc6re47J24IOyLpO2MqCDsnbTsnKAg7JWMIOyImCDsnojqsoxcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICAvL+y7tO2PrOuEjO2KuOyXkCBwcm9wc+uhnCDrsJvslYTsp4Qg7ZWo7IiY64qUIHVzZUNhbGxiYWNr7J2EIOyCrOyaqe2VtOyVvCDstZzsoIHtmZTqsIAg65Cc64ukLlxyXG4gICAgLy8gY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gfSwgW10pXHJcblxyXG4gICAgLy8gY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgICAvLyByZWR1Y2VycyDslYjqurzrpbwg6rCA7KC47Ji0XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkIH0pKTtcclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1lbWFpbCc+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLXBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+66Gc6re47J24PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGxpbmvsl5AgaHJlZuuEo+qzoCBidXR0b27sl5DripQg7JWI64Sj64qU6rKMIOyii+uLpCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJpbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgTGlzdCwgUG9wb3ZlciwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG4vLyBpbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnQGFudC1kZXNpZ24vY29tcGF0aWJsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSAnLi9Qb3N0Q2FyZENvbnRlbnQnO1xyXG5pbXBvcnQge1xyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRVRXRUVUX1JFUVVFU1RcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbic7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgLy8gY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIC8vIHN0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZCDrpbwg7Ji17IWU64SQIOyytOydtOuLneycvOuhnCDspITsl6zshJxcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIubWU/LmlkKVxyXG5cclxuICAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW2lkXSlcclxuICAgIGNvbnN0IG9uVW5MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtpZF0pXHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KVxyXG4gICAgfSwgW2lkXSlcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW2lkXSlcclxuXHJcbiAgICBjb25zdCBvblJldHdlZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbaWRdKVxyXG5cclxuICAgIC8vIOqyjOyLnOq4gCDsoovslYTsmpQg64iE66W4IOyCrOuejOykkeyXkCDrgrTqsIAg7J6I64qU7KeAXHJcbiAgICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgICAgey8qIGNvdmVyLCBhY3Rpb25z64qUIGFudGTquLDriqUgKi99XHJcbiAgICAgICAgICAgIHsvKiDrsLDsl7Qg7JWI7JeQIGpzeOulvCDrhKPsnYQg65WQIGtleSAqL31cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiBvbkNsaWNrPXtvblJldHdlZXR9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblVuTGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJtZXNzYWdlXCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJlbGxpcHNpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlcklkID09PSBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAvLyDriITqsIAg66as7Yq47JyXIO2WiOuKlOyngFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldElkID8gYCR7cG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydtCDrpqztirjsnJftlZjshajsirXri4jri6QuYCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldCA/ICg8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5SZXR3ZWV0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOqyjOyLnOq4gOydmCBpZOulvCBjb21tZW50Rm9ybeydtCDrsJvslYTslbwg7ZWY6riwIOuVjOusuOyXkCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIFVzZXJJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgICAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7IHBvc3REYXRhIH0pID0+IHsgLy/ssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiByZWdleHIuY29tICovfVxyXG4gICAgICAgICAgICB7LyogI+uLpOydjCAuKyDquIDsnpAg7KCE67aAIGcgLSDsl6zrn6zqsJwgW15dIC0g7KCE67aAIFxccyAtIOqzteuwsSovfVxyXG4gICAgICAgICAgICB7Lyog7KCV6rec7IudIOuwsOyXtCDsoITrtoAgcmV0dXJuICovfVxyXG4gICAgICAgICAgICB7cG9zdERhdGEuc3BsaXQoLygjW15cXHMjXSspL2cpLm1hcCgodjogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIO2VtOyJrO2DnOq3uCDstpTstpxcclxuICAgICAgICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g67CU64CUIOydvCjrpqzroIzrjZTrp4Ep7J20IOyXhuuLpOuptCBp66W8IOyNqOuPhCDrkJzri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2AvaGFzaHRhZy8ke3Yuc2xpY2UoMSl9YH0ga2V5PXtpfT48YT57dn08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblBvc3RDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7IHBvc3REYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDsiLCJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBSRU1PVkVfSU1BR0UsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWY8YW55PigpO1xyXG4gICAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgICAgICAgICAvLyBvblN1Ym1pdOyXkOyEnCDstIjquLDtmZQg7ZWY66m0IOyXkOufrCDrgqzsnYQg65WMIOqyjOyLnOq4gCDsnpHshLHrkJzqsowg7KCE67aAIOuCoOyVhOqwkFxyXG4gICAgICAgICAgICBzZXRUZXh0KCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFthZGRQb3N0RG9uZV0pXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgLy8g6rKM7Iuc6riAIOyXhuydjFxyXG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlcS5ib2R5LmltYWdl6rCAIOuQqFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyByZXEuYm9keS5jb250ZW506rCAIOuQqFxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIHRleHQpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNo7J6Q66as7JeQ64qUIOqwneyytOqwgCDrk6TslrTqsJBcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSlcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgLy8gaW1hZ2VJbnB1dC5jdXJyZW5066GcIOygkeq3vFxyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZXMnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICAgICAgLy8gRm9ybURhdGEoKeulvCDsgqzsmqntlZjrqbQgbXVsdGlwYXJ07ZiV7Iud7Jy866GcIOyEnOuyhOuhnCDrs7Trg4RcclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy8gZm9yRWFjaCDrqZTshJzrk5zqsIAg7J2067Kk7Yq47JeQIOyXhuq4sCDrlYzrrLjsl5AgW10u7J2YIGZvckVhY2jrqZTshJzrk5zrpbwg67mM66Ck7JOw64qUIOuwqeyLneycvOuhnCDsnpHshLFcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGtleSjrnbzsmrDthLDsnZggdXBsb2Fk6rCS6rO8IOydvOy5mO2VtOyVvO2VqCksIOqwklxyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAyMHB4JyB9fSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJyBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIHsvKiAy6rCcIOydtOyDgeydvOyLnCBmaWxscyAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2UyXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCI+7Ke57Ke5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIG1hcOyViOyXkCDsvZzrsLHtlajsiJjrpbwg64Sj6rOg7Iu27Jy866m0IOqzoOywqO2VqOyImOulvCDsgqzsmqntlbTslbztlZzri6QuICovfVxyXG4gICAgICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2OiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDMwNjDsnLzroZwg67O064K066m0IOyXkeuwlSA0MDQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2VzWm9vbSc7XHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0ltYWdlc1pvb20oZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gYWx0PXtpbWFnZXNbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0ltYWdlc1pvb20gJiYgPEltYWdlc1pvb20gaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCIgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IGFsdD17aW1hZ2VzWzFdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPXt7IHdpZHRoOiAnNTAlJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IGFsdD17aW1hZ2VzWzBdLnNyY30gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCAtIDF9XHJcbiAgICAgICAgICAgICAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7IiwiaW1wb3J0IHsgQ2FyZCwgQXZhdGFyLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsb2dvdXRSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZS5Qb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2luZ3NcIj7tjJTroZzsnok8YnIgLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj7tjJTroZzsm4w8YnIgLz57bWUuRm9sbG93ZXJzLmxlbmd0aH08L2Rpdj4sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV1cclxufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyBOZXh0Lmpz64qUIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCcg6rWs66y47J20IO2VhOyalOyXhuydjFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIHJldHdlZXRFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAvLyDrpqzroIzrjZTrp4Eg7JeQ65+s66GcIOyDgeychOyXkCDsmKzrprAg6rKDXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXR3ZWV0RXJyb3IpIHtcclxuICAgICAgYWxlcnQocmV0d2VldEVycm9yKVxyXG4gICAgfVxyXG4gIH0sIFtyZXR3ZWV0RXJyb3JdKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goe1xyXG4gIC8vICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaCh7XHJcbiAgLy8gICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gIC8vICAgfSlcclxuICAvLyB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAvLyBzY3JvbGxZOiDslrzrp4jrgpgg64K066C464qU7KeALCBjbGllbnRIZWlnaHQ6IO2ZlOuptCDrs7TsnbTripQg6ri47J20LCBzY3JvbGxIZWlnaHQ6IOy0nSDquLjsnbRcclxuICAgICAgLy8gc2Nyb2xsWSArIGNsaWVudEhlaWdodO2VtOyEnCDrgZ3quYzsp4Ag64K066C464qU7KeAIO2ZleyduCDqsIDriqVcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICAvLyDroZzrlKnspJHsl5Drj4Qg7Iuk7ZaJIOyViOuQmOqyjCDrp4nslYTspIDri6QuIChUaHJvdHRsZeunjOycvOuhnOuKlCByZXF1ZXN07Jes65+s67KIIOqwgOuKlCDqsoMg6rmM7KeAIOuquyDrp4nquLAg65WM66y4KVxyXG4gICAgICAgIC8vIOunjOyVvSDrqqjrsJTsnbzroZwg7IiY7LKc67KIIOustO2VnOyKpO2BrOuhpCDqsozsi5zquIDsnYQg66Gc65Sp7ZWc64uk66m0IOuplOuqqOumrOqwgCDthLDsoLjrsoTrprQg7IiYIOyeiOq4sCDrlYzrrLjsl5BcclxuICAgICAgICAvLyByZWFjdC12aXJ0dWFsaXplZOulvCDsgqzsmqntlZjrqbQg7KKL64ukLiAo6rWs7ZiE7ZW067O86rKDKVxyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIC8vIOuniOyngOuniSDqsozsi5zquIDsnZggaWQgLy8gJibsmYAg6rCZ7J2MXHJcbiAgICAgICAgICAvLyDso7zshozssL0g7L+866asIOyKpO2KuOungeydtCDsl4bsnYQg6rK97JqwIOuMgOu5hFxyXG4gICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyDri6Trpbgg7Lu07Y+s64SM7Yq466GcIOqwkOyLuOykhCDqsr3smrAg64uk66W4IOy7tO2PrOuEjO2KuCDsgqzsmqkg6rCA64qlXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdDogYW55KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuLy8gTmV4dCBqc1xyXG4vLyBIT01FIOuztOuLpCDrqLzsoIAg7Iuk7ZaJ65Cc64ukLlxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IGNvb2tpZSA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIC8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgLy8gaWYgKHJlcSAmJiBjb29raWUpIHtcclxuICAvLyAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIC8vIH1cclxuICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICB9KTtcclxuICAvLyBOZXh0IC0gcmVkdXgg7IKs7Jqp67Cp67KVXHJcbiAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTsgLy8gc3RvcmXsl5Agc2FnYVRhc2tcclxuICAvLyDsi6TtlonrkJwg6rKw6rO8IEhZRFJBVEXroZwg67O064K464ukIChyZWR1Y2VyIGluZGV4KVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIG5hbWU6ICd0YWVpbCcsXHJcbi8vICAgICBhZ2U6IDExMSxcclxuLy8gICAgIHBhc3N3b3JkOiAnYmFibydcclxuLy8gfVxyXG5cclxuLy8gLy8g66ek67KIIOyDiOuhnCBkYXRh66W8IOunjOuTpCDsiJgg7JeG6riwIOuVjOusuOyXkCDrj5nsoIHsnLzroZwgKGFjdGlvbiBjcmVhdG9yKVxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgICAgICAgIGRhdGEsXHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gY2hhbmdlTmlja25hbWUoJ2xlZScpO1xyXG5cclxuLy8gc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ25lbmUnKSlcclxuXHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG4vLyBjb21iaW5lUmVkdWNlcnProZwgdXNlciwgcG9zdCDtlanss5DspIDri6RcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgLy8gaHlkcmF0ZeulvCDrhKPquLAg7JyE7ZW0IGluZGV4IHJlZHVjZXIg7LaU6rCAICjshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOychO2VtOyEnClcclxuLy8gICAgIGluZGV4OiAoc3RhdGU6IE9iamVjdCA9IHt9LCBhY3Rpb24pID0+IHtcclxuLy8gICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyAgICAgICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sXHJcbi8vICAgICB1c2VyLFxyXG4vLyAgICAgcG9zdCxcclxuLy8gfSlcclxuXHJcbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIC8vIOyghOyytOulvCDrja7slrQg7JSM7Jq4IOyImCDsnojqsowg66eM65Ok7Ja07KO86riwIOychO2VtCDrsJTqvrwg7L2U65OcXHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEVEFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuLy8gaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbi8vIGltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcclxuXHJcbmV4cG9ydCB0eXBlIG1haW5Qb3N0ID0ge1xyXG4gICAgbWFpblBvc3RzOiBhbnksXHJcbiAgICBpbWFnZVBhdGhzOiBvYmplY3RbXSxcclxuICAgIGxpa2VQb3N0TG9hZGluZzogYm9vbGVhbixcclxuICAgIGxpa2VQb3N0RG9uZTogYm9vbGVhbixcclxuICAgIGxpa2VQb3N0RXJyb3I6IGJvb2xlYW4sXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogYm9vbGVhbixcclxuICAgIHVubGlrZVBvc3REb25lOiBib29sZWFuLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBib29sZWFuLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICBhZGRQb3N0RG9uZTogYm9vbGVhbixcclxuICAgIGFkZFBvc3RFcnJvcjogYm9vbGVhbixcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGJvb2xlYW4sXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IGJvb2xlYW4sXHJcbiAgICBoYXNNb3JlUG9zdHM6IGJvb2xlYW4sXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBib29sZWFuLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogYm9vbGVhbixcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBib29sZWFuLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICByZW1vdmVQb3N0RG9uZTogYm9vbGVhbixcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogYm9vbGVhbixcclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGJvb2xlYW4sXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBib29sZWFuLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6IGJvb2xlYW4sXHJcbiAgICByZXR3ZWV0TG9hZGluZzogYm9vbGVhbixcclxuICAgIHJldHdlZXREb25lOiBib29sZWFuLFxyXG4gICAgcmV0d2VldEVycm9yOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBtYWluUG9zdCA9IHtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAvLyAgICAgVXNlcjoge1xyXG4gICAgLy8gICAgICAgICBpZDogMSxcclxuICAgIC8vICAgICAgICAgbmlja25hbWU6ICdUYWVJbCdcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgLy8gICAgIEltYWdlczogW3tcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgIC8vICAgICB9LCB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICAvLyAgICAgfV0sXHJcbiAgICAvLyAgICAgLy8g64yA66y47J6Q64qUIOyEnOuyhOyXkOyEnCDso7zripQg7JWg65OkXHJcbiAgICAvLyAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgIC8vICAgICB9LCB7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalH4nLFxyXG4gICAgLy8gICAgIH1dXHJcbiAgICAvLyB9XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsIC8vIGluZmluaXRlIHNjcm9sbFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59XHJcblxyXG4vLyBpbmZpbml0ZSBzY3JvbGxpbmdcclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKHVuZGVmaW5lZCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgbmlja25hbWU6IGZha2VyLmludGVybmV0LnVzZXJOYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5pbnRlcm5ldC51c2VyTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyB9KSk7XHJcblxyXG5cclxuLy8g67OA7IiY66GcIOyngOygle2VtOyjvOuptCDtjrjtlZjri6RcclxuLy8gYXMgY29uc3Trpbwg7KeA7KCV7ZWY66m0IO2DgOyeheydtCDslYTri4jrnbwg7Iuk7KCcIOqwkuydhCDqsIDrpqztgqTqsowg65CoXHJcblxyXG4vLyDtmZTrqbQg66Gc65Sp7ZWY66m0XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuLy8g64+Z6riwIOyVoeyFmOydgCDtlZjrgpjrp4wg66eM65Ok66m0IOuQnOuLpFxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG4vLyDrj5nsoIEg7JWh7IWYIO2BrOumrOyXkOydtO2EsFxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIC8vIHNob3J0SWTrpbwg64Sj7Jy866m0IOuNlOuvuOuNsOydtO2EsCBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCB0aGUgc2FtZSBrZXnsl5Drn6zripQg7ZW06rKw7J20IOuQmOyngOunjFxyXG4vLyAgICAgLy8gRmFpbGVkIHByb3AgdHlwZeyXkOufrOqwgCDrnKzri6QuIOuCmOykkeyXkCDsi6TsoJwg642w7J207YSwIOuEo+yWtOyEnCDtlbTqsrDtlbTslbwg7ZWgIOuTr1xyXG4vLyAgICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgICAvLyDqsozsi5zquIBcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ1Zpb2xldCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHsgLy8g642U66+4IOy9lOupmO2KuFxyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICdWaW9sZXQnLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG4vLyDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IG1haW5Qb3N0ID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgLy8g67aI67OA7ISx7J2EIOyngO2CpOuptOyEnCDsvZTrk5wg7J6R7ISx7ZWY64qU6rKMIOyWtOugpOyasOuLiOq5jCDrj4TsmYDso7zripQg65287J2067iM65+s66asIGltbWVyXHJcbiAgICAvLyBpbW1lciDsgqzsmqlcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIOyEnOuyhOyXkOyEnCDsnbTrr7jsp4Drpbwg7KeA7Jqw6rOgIOyLtuycvOuptCDruYTrj5nquLDroZwg66eM65Ok7Ja07KSY7JW8IO2VnOuLpC5cclxuICAgICAgICAgICAgLy8g7ISc67KE7JeQ7IScIOydtOuvuOyngOulvCDslYjsp4DsmrDripQg7J207Jyg64qUIOuouOyLoOufrOuLnSDrk7HsnYQg7JyE7ZW0IOuNsOydtO2EsCDsiJjsp5HsnYQg7ZWgIOyImOuPhCDsnojslrTshJxcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIC8vIOuNsOydtO2EsOuTpCDsl6zquLAg7KCA7J6lXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g66Gc65Sp7J20IOuwkeyXkCDrrLTtlZzroZzrlKnsnbQg7LaU6rCA65CY7Ja07JW8IO2VmOuLiOq5jCBhY3Rpb24uZGF0YeulvCDrkqTsl5Ag7LaU6rCAXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLy8g66eoIOyVnuyXkCBkdW1teVBvc3TstpTqsIDtlbTslbwg66eoIOychOyXkCDqsozsi5zquIAg7Jis65286rCE64ukLlxyXG4gICAgICAgICAgICAvLyBzYWdhc+ydmCBwb3N07JeQ7IScIOuEmOyWtOyYqCDqsozsi5zquIAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgLy8gbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgLy8gICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyBzYWdhc+ydmCBwb3N07JeQ7IScIOuEmOyWtOyYqCDqsozsi5zquIAgYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBhY3Rpb24uZGF0YS5jb250ZW50LCBwb3N0SWQsIHVzZXJJZOqwgCBhY3Rpb24uZGF0YeyXkCDrk6TslrTsnojripQg7IOB7YOcXHJcbiAgICAgICAgICAgICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk64qUIOy9lOuTnCAoaW1tZXIg65287J2067iM65+s66asIOyCrOyaqe2VmOuptCDrjZQg6rCE64uo7ZWY6rKMIOqwgOuKpSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAgICAgICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g7JWe7JeQ7IScIGR1bW15UG9zdOy2lOqwgO2VtOyVvCDrp6gg7JyEXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCIvLyByZWR1eC10aHVuayAo7ZWc67KI7JeQIGRpc3BhdGNo66W8IOyXrOufrOuyiCDtlaAg7IiYIOyeiOqyjCDtlbTspIDri6QpIOyXrOq4sOyEoCDslYjslIBcclxuXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhOykkVxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuLy8g64uk66W4IO2MjOydvOyXkOyEnOuPhCDsjajslbztlZjri4jquYwgZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnIGFzIGNvbnN0O1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJyBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCcgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRScgYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUycgYXMgY29uc3Q7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnIGFzIGNvbnN0O1xyXG5cclxuLy8gdXNlciByZWR1Y2VyIOyDge2DnOulvCDrsJTqv4Ag7IiYIOyeiOuKlCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJyBhcyBjb25zdDtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJyBhcyBjb25zdDtcclxuXHJcbi8vIFNlcXVlbGl6ZeyXkOyEnCDtlanss5DspIDri6RcclxuLy8g7KSR67O165CY64qUIOuNlOuvuOuNsOydtO2EsCDtlajsiJjroZwg66y27J2MXHJcbi8vIGNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgLi4uZGF0YSxcclxuLy8gICAgIG5pY2tuYW1lOiAnVmlvbGV0JyxcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4vLyAgICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICdkdW1teTEnIH0sIHsgbmlja25hbWU6ICdkdW1teTInIH0sIHsgbmlja25hbWU6ICdkdW1teTMzMycgfV0sXHJcbi8vICAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAnZHVtbXkxJyB9LCB7IG5pY2tuYW1lOiAnZHVtbXkyJyB9LCB7IG5pY2tuYW1lOiAnZHVtbXkzMzMnIH1dLFxyXG4vLyB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIOyWuO2MlO2VnCDsgqzrnowg7KCc7Jm4XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBpbW1lciDsoIHsmqkg7J207KCEXHJcbiAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC8vICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1lOiB7XHJcbiAgICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCIvLyAq7J2AIOygnOuEiOugiOydtO2EsFxyXG4vLyB5aWVsZOuKlCDspJHri6jsoJAgbmV4dCgp64qUIOuLpOydjCDrhJjslrTqsJBcclxuLy8gY29uc3QgZ2VuID0gZnVuY3Rpb24qKCkge1xyXG4vLyB3aGlsZSAodHJ1ZSkge1xyXG4vLyAgICAgeWllbGQgJ+ustO2VnCc7XHJcbi8vICB9IDwgeWllbGTqsIAg7KSR64uo7KCQ7J206528IOustO2VnOycvOuhnCDslYjrj4zqs6Ag7Jyg7Zqo7ZWcIOy9lOuTnOqwgCDrkKhcclxuLy8gfVxyXG5cclxuaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG4vKiog7L+g7YKk66W8IOqwmeydtCDsoITri6wg7ZW07KSA64ukICjrj4TrqZTsnbjsnbQg64uk66W066m0IOy/oO2CpOuPhCDsoITri6zsnbQg7JWI65CY64uI6rmMIGJhY2tlbmTsnZggY29yc+yZgCDsl6zquLApXHJcbiAgICAgc2FnYeyXkOyEnCDrs7TrgrTripQgYXhpb3PripQgd2l0aENyZWRlbnRpYWxzOiB0cnVl66GcIOy/oO2CpOyghOuLrCDtl4jsmqnsnYQg6rO17Ya17KCB7Jy866GcIOuTpOyWtOqwgOqyjCDtlbTspIwgKi9cclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIC8vIGFsbOydgCDrsLDsl7TslYjsl5Ag65OgIOqxuCDtlZzrsojsl5Ag7Iuk7ZaJ7ZW07KSA64ukLlxyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICAvLyB1c2Vy7JmAIHBvc3TroZwg67aE66asXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBkZWxheSwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLCBVTkxJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIC8vIGZvcm1EYXRh64qUIHsgZGF0YSB97J2065+w7Iud7Jy866GcIOqwkOyLuOuyhOumrOuptCBqc29u7J20IOuQmOuLiOq5jCB7feyggeyngCDrp5Ag6rKDXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgLy8gZm9ybURhdGHripQgeyBkYXRhIH3snbTrn7Dsi53snLzroZwg6rCQ7Iu467KE66as66m0IGpzb27snbQg65CY64uI6rmMIHt97KCB7KeAIOunkCDqsoNcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyBkYXRh6rCAICR7feyViOyXkCDrk6TslrTqsIDquLAg65WM66y47JeQIOq1s+ydtCDslYjrhKPslrTrj4Qg65CoXHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gICAgLy8gZ2V07J2YIOuRkOuyiOynuCDsnpDrpqzripQgd2l0aGNyZWRlbnRpYWxzXHJcbiAgICAvLyBHRVQg7L+866asIOyKpO2KuOungeycvOuhnCDso7zshozsl5Ag642w7J207YSwIO2PrO2VqOyLnO2CpOuKlCDrsKnrspUgKOyjvOyGjCDsupDsi7EpXHJcbiAgICAvLyDso7zshozssL0g7L+866asIOyKpO2KuOungeydtCDsl4bsnLzrqbQgMFxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIC8vIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSwgLy8gcmVkdWNlcuyXkOyEnCDrp4zrk6Ag7ZWo7IiYXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyAy67KI7Ke4IOyekOumrOyXkCByZXEuYm9keS5jb250ZW5066GcIOuwm+ydhCDsiJgg7J6I64+E66GdIHsgY29udGVudDogZGF0YSB97LKY65+8IOydtOumhOydhCDrtpnsl6zspIQg7IiYIOyeiOuLpC5cclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAvLyBhY3Rpb24uZGF0YeyXkCDsnpHshLHtlZwg6riA7J20IOuTpOyWtOyeiOydjCAo642U66+4642w7J207YSwKVxyXG4gICAgICAgICAgICAvLyBkYXRhOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZCxcclxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgLy8gZGVsZXRl64qUIDLrsojsp7gg7J6Q66as7JeQIGRhdGEg66q7IOuEo+uKlOuLpFxyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICAvLyBQT1NUIHJlZHVjZXIg7IOB7YOc656RIHVzZXIgcmVkdWNlcuyDge2DnOuekSDrj5nsi5zsl5Ag67CU6r+AIOyImCDsl4bquLAg65WM66y47JeQIGFjdGlvbuydtCAy6rCc6rCAIOuCmOyYqOuLpC5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvLyBhY3Rpb24uZGF0YeyXkCDsnpHshLHtlZwg6riA7J20IOuTpOyWtOyeiOydjFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICAvKiog7L+g7YKk66W8IOqwmeydtCDsoITri6wg7ZW07KSA64ukICjrj4TrqZTsnbjsnbQg64uk66W066m0IOy/oO2CpOuPhCDsoITri6zsnbQg7JWI65CY64uI6rmMIGJhY2tlbmTsnZggY29yc+yZgCDsl6zquLApXHJcbiAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVl66GcIOy/oO2CpOyghOuLrCDtl4jsmqlcclxuICAgICAqL1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKSAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICAvLyDrrLTtlZzsiqTtgazroaQg7J2067Kk7Yq4IOuMgOufieuwnOyDnSDrsKnsp4BcclxuICAgIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKVxyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgZGVsYXksIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIEZPTExPV19SRVFVRVNULCBVTkZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIEZPTExPV19GQUlMVVJFLCBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gU0FHQeulvCDthrXtlbQg67Cx7JeU65OcIChwb3J0IDMwNjXsl5Ag7JqU7LKtKVxyXG4vLyBheGlvc+uztOuCvCBodHRwc+yjvOyGjCBzYWdh7Y+0642UIGluZGV47JeQIOykkeuzteuQmOuKlCDrtoDrtoQg67OA7IiY66GcIOustuyWtOykjFxyXG4vLyB3aXRoQ3JlZGVudGlhbHMg6rO17Ya17ISk7KCVIO2VtOykmOyEnCDsnpDrj5nsnLzroZwg65Ok7Ja06rCQXHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTsg642U66+4642w7J207YSw7JqpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gbG9naW4g7ZWg65WMIOuwm+yVhOyZgOyVvCDtlZjripQgZGF0YVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICAvLyBBUEnripQg7KCc64SI66CI7J207YSw6rCAIOyVhOuLmCDso7zsnZjtlaAg6rKDIFxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSlcclxufVxyXG5cclxuLy8gY2FsbOydhCDsgqzsmqntlZjrqbQg7J2066CH6rKMIO2OvOyzkOyEnCDsoIHslrTspJjslbwg7ZWoXHJcbi8vIGxvZ0luQVBJKGFjdGlvbi5kYXRhKTtcclxuLy8gY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuLy8gYWN0aW9uLnR5cGUg7ZWY66m0IExvZ2luIHJlcXVlc3TqsIAg64KY7Jik6rOgIGFjdGlvbi5kYXRh7ZWY66m0IOuhnOq3uOyduCDrjbDsnbTthLDqsIAg65Ok7Ja07J6I7J2MXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIC8vIOyalOyyreydmCDqsrDqs7zrpbwg67Cb64qU64ukLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBmb3Jr64qUIOu5hOuPmeq4sCDtlajsiJjtmLjstpwgKOqysOqzvOqwkiDsg4HqtIDsl4bsnbQg67CU66GcIOyLpO2WiSlcclxuICAgICAgICAvLyBjYWxs7J2AIOuPmeq4sCDtlajsiJjtmLjstpwgKOqysOqzvOqwkiDrsJvslYTsmKwg65WMIOq5jOyngCDquLDri6TrprwgKGV4KXRoZW4oKCkgPT4gKeulvCDrsJvslYTsmKTrk68pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApOyAvLyDshJzrsoTqsIAg7JWE7KeBIOyXhuq4sCDrlYzrrLjsl5BcclxuICAgICAgICAvLyBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSnsspjrn7wg7J6R7ISx7ZW07JW8IO2FjOyKpO2KuO2VmOq4sCDsib3ri6QuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICAvLyBkYXRhOiBhY3Rpb24uZGF0YSwg642U66+47JqpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvL+yEseqzteydgCByZXN1bHQuZGF0YSDsi6TtjKjripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06ri064ukXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgLy8gZGF0YeuKlCBlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lIChzaWduVXDsl5DshJwg64SY7Ja07Ji0KVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGFjdGlvbi5kYXRhIOuEo+yWtOyjvOuptCBzaWduVXBBUEnsl5DshJwgZGF0Yeuwm+q4sCDqsIDriqVcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgbG9hZEZvbGxvd2Vycyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG4vLyDtlZwg67KIIOuwluyXkCDrsJvsp4Ag7JWK64qU64ukICgx67KIIOuwm+qzoOuCmOuptCDsnbTrsqTtirgg66as7Iqk64SIIOyCrOudvOynkClcclxuLy8gMS4gdGFrZUV2ZXJ566W8IOyCrOyaqe2VmOqxsOuCmCAod2hpbGXrrLgg64yA7LK0KSAyLiB3aGlsZeuhnCDqsJDsi7jshJwg66y07ZWc7Jy866GcIOyLpO2WieuQmOqyjCDtlbTspIDri6QuICjsnpgg7JWI7JSAKVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIC8vIExPR19JTuydtOuegCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG4gICAgLy8g7Ja07LCo7ZS8IExvZ2lu7J20IHJlcXVlc3Qg65CY64qUIOyInOqwhOyXkCDsi6TtlonrkJjri4jquYxcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxuICAgIC8vIOunjOyVvSB0YWtlTGF0ZXN066W8IOyCrOyaqe2VmOuptCAy7ZqMIOydtOyDgSDsl7Dsho3snLzroZwg64iM66CA7J2EIOuVjCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJICjrp4jsmrDsiqQg6rOg7J6lIOuTseycvOuhnClcclxuICAgIC8vIOq3uOufrOuCmCDtlITroaDtirjsl5DshJzrp4wg66eI7KeA66eJ6rq8IOyCrOyaqe2VmOuKlOqxsOqzoCDrsLHsl5Trk5zsl5DshJzripQg65GQ67KIIOyalOyyrSDrs7Trg4QgKOyEnOuyhOyXkOuKlCDrkZDrsogg7KCA7J6l65Cc64ukKVxyXG4gICAgLy8gdGhyb3R0bGXroZwg7Iuc6rCE7KCc7ZWc7J2EIOuRrOyEnCDsoJztlZzsi5zqsIQg7J2064K0IOyXrOufrOuyiCDtgbTrpq3si5wg7ZWc67KI66eMIOyalOyyre2VmOqyjCDtlahcclxuXHJcbiAgICAvLyDssqvrsojsp7jqurzrp4wg7Iuk7ZaJ7ZWY64qUIOuwqeuyleuPhCDsnojsnYwgdGFrZVJlYWRpbmc/XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKVxyXG59XHJcbiIsIi8vIGNvbmZpZ3VyZVN0b3JlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbilcclxufVxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgLy8g642w67iM7Yi0IOyXsOqysFxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgY29uc3Qgc3RvcmU6IGFueSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIgYXMgYW55LCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIC8vIHN0b3JlLmRpc3BhdGNoKHtcclxuICAvLyAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gIC8vICAgZGF0YTogJ2xlZScsXHJcbiAgLy8gfSlcclxuICByZXR1cm4gc3RvcmVcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9