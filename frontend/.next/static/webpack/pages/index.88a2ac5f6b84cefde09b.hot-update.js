webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.tsx":
/*!*********************************!*\
  !*** ./components/PostCard.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/compatible */ "./node_modules/@ant-design/compatible/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.tsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.tsx");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\components\\PostCard.tsx",
  _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    liked = _useState[0],
    setLiked = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    commentFormOpened = _useState2[0],
    setCommentFormOpened = _useState2[1];
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
    // false는 true true는 false toggle 코드
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  // state.user.me && state.user.me.id 를 옵셔널 체이닝으로 줄여서
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 42
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 27
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["MessageOutlined"], {
      key: "message",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "ellipsis",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }
      }, id && post.UserId === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 45
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 45
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 39
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }))]
    // extra={<FollowButton post={post} />}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content
    // <PostCardContent postData={post.content} />
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }
      }, __jsx(_ant_design_compatible__WEBPACK_IMPORTED_MODULE_3__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 45
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 33
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })));
};
_s(PostCard, "qjo02WruhXZcdwWdlG/xwVw2yKY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

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

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/comment/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/comment/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./node_modules/@ant-design/compatible/es/comment/style/index.js");
var _excluded = ["actions", "author", "avatar", "children", "className", "content", "prefixCls", "datetime"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ConfigContext = antd__WEBPACK_IMPORTED_MODULE_2__["ConfigProvider"].ConfigContext;

var Comment = function Comment(_ref) {
  var actions = _ref.actions,
      author = _ref.author,
      avatar = _ref.avatar,
      children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      customizePrefixCls = _ref.prefixCls,
      datetime = _ref.datetime,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var renderNested = function renderNested(prefixCls, nestedChildren) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-nested"))
    }, nestedChildren);
  };

  var prefixCls = getPrefixCls('comment', customizePrefixCls);

  var _useStyle = Object(_style__WEBPACK_IMPORTED_MODULE_3__["default"])(prefixCls),
      _useStyle2 = _slicedToArray(_useStyle, 2),
      wrapSSR = _useStyle2[0],
      hashId = _useStyle2[1];

  var avatarDom = avatar ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "".concat(prefixCls, "-avatar")
  }, typeof avatar === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    src: avatar,
    alt: "comment-avatar"
  }) : avatar) : null;
  var actionDom = actions && actions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
    className: "".concat(prefixCls, "-actions")
  }, actions.map(function (action, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      key: "action-".concat(index)
    }, action) // eslint-disable-line react/no-array-index-key
    ;
  })) : null;
  var authorContent = (author || datetime) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "".concat(prefixCls, "-content-author")
  }, author && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-content-author-name")
  }, author), datetime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-content-author-time")
  }, datetime));
  var contentDom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "".concat(prefixCls, "-content")
  }, authorContent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "".concat(prefixCls, "-content-detail")
  }, content), actionDom);
  var cls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, hashId);
  return wrapSSR( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, otherProps, {
    className: cls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "".concat(prefixCls, "-inner")
  }, avatarDom, contentDom), children ? renderNested(prefixCls, children) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/comment/style/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/comment/style/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/cssinjs */ "./node_modules/@ant-design/cssinjs/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_es_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/style */ "./node_modules/antd/es/style/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import '../../style/index.less';
// import './index.less';





// ============================== Export ==============================
var genSharedButtonStyle = function genSharedButtonStyle(token) {
  var _objectSpread2;

  var componentCls = token.componentCls,
      colorBgContainer = token.colorBgContainer,
      fontSize = token.fontSize,
      fontSizeSM = token.fontSizeSM,
      padding = token.padding,
      paddingXS = token.paddingXS,
      marginSM = token.marginSM,
      marginXXS = token.marginXXS,
      controlHeight = token.controlHeight,
      lineHeightSM = token.lineHeightSM,
      colorText = token.colorText,
      colorTextSecondary = token.colorTextSecondary,
      colorTextTertiary = token.colorTextTertiary,
      motionDurationSlow = token.motionDurationSlow;
  return _defineProperty({}, componentCls, _objectSpread(_objectSpread({}, Object(antd_es_style__WEBPACK_IMPORTED_MODULE_3__["resetComponent"])(token)), {}, (_objectSpread2 = {
    position: 'relative',
    backgroundColor: colorBgContainer
  }, _defineProperty(_objectSpread2, "".concat(componentCls, "-inner"), {
    display: 'flex',
    paddingBlock: padding
  }), _defineProperty(_objectSpread2, "".concat(componentCls, "-avatar"), {
    position: 'relative',
    flexShrink: 0,
    marginInlineEnd: marginSM,
    cursor: 'pointer',
    img: {
      width: controlHeight,
      height: controlHeight,
      borderRadius: '50%'
    }
  }), _defineProperty(_objectSpread2, "".concat(componentCls, "-content"), {
    position: 'relative',
    flex: 'auto',
    minWidth: 0,
    wordWrap: 'break-word',
    '&-author': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginBottom: marginXXS,
      '& > a, & > span': {
        paddingInlineEnd: paddingXS,
        fontSize: fontSizeSM,
        lineHeight: lineHeightSM
      },
      '&-name': {
        color: colorTextSecondary,
        fontSize: fontSize,
        transition: "color ".concat(motionDurationSlow),
        '> *': {
          color: colorTextSecondary,
          '&:hover': {
            color: colorTextSecondary
          }
        }
      },
      '&-time': {
        color: colorTextTertiary,
        whiteSpace: 'nowrap',
        cursor: 'auto'
      }
    },
    '&-detail p': {
      whiteSpace: 'pre-wrap',
      marginBlock: 0
    }
  }), _defineProperty(_objectSpread2, "".concat(componentCls, "-actions"), {
    marginTop: marginSM,
    marginBottom: 0,
    paddingInlineStart: 0,
    '> li': {
      display: 'inline-block',
      color: colorTextSecondary,
      '> span': {
        marginInlineEnd: marginSM,
        color: colorTextSecondary,
        fontSize: fontSizeSM,
        cursor: 'pointer',
        transition: "color ".concat(motionDurationSlow),
        userSelect: 'none',
        '&:hover': {
          color: colorText
        }
      }
    }
  }), _defineProperty(_objectSpread2, "".concat(componentCls, "-nested"), {
    marginInlineStart: 44
  }), _objectSpread2)));
};

function useStyle(prefixCls) {
  var _antdTheme$useToken = antd__WEBPACK_IMPORTED_MODULE_2__["theme"].useToken(),
      theme = _antdTheme$useToken.theme,
      token = _antdTheme$useToken.token,
      hashId = _antdTheme$useToken.hashId;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](antd__WEBPACK_IMPORTED_MODULE_2__["ConfigProvider"].ConfigContext),
      iconPrefixCls = _React$useContext.iconPrefixCls;

  return [Object(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_1__["useStyleRegister"])({
    theme: theme,
    token: token,
    hashId: hashId,
    path: ['compatible', 'Comment', prefixCls, iconPrefixCls]
  }, function () {
    var mergedToken = _objectSpread({
      componentCls: ".".concat(prefixCls)
    }, token);

    return [genSharedButtonStyle(mergedToken)];
  }), hashId];
}

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/index.js ***!
  \*********************************************************/
/*! exports provided: Comment, darkAlgorithm, defaultAlgorithm, defaultTheme, darkTheme, convertLegacyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment */ "./node_modules/@ant-design/compatible/es/comment/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./node_modules/@ant-design/compatible/es/theme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkAlgorithm", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["darkAlgorithm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultAlgorithm", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["defaultAlgorithm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["defaultTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["darkTheme"]; });

/* harmony import */ var _theme_convertLegacyToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/convertLegacyToken */ "./node_modules/@ant-design/compatible/es/theme/convertLegacyToken.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertLegacyToken", function() { return _theme_convertLegacyToken__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/theme/convertLegacyToken.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/theme/convertLegacyToken.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return convertLegacyToken; });
/* harmony import */ var antd_es_theme_util_alias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/theme/util/alias */ "./node_modules/antd/es/theme/util/alias.js");
// Source:
// https://github.com/ant-design/ant-design/blob/2c9fbc8f0c714c9de27fc2f54712acb69ac1abd8/components/style/themes/default.less

function convertLegacyToken(mapToken) {
  var token = Object(antd_es_theme_util_alias__WEBPACK_IMPORTED_MODULE_0__["default"])(mapToken);
  var raw = {
    theme: 'default',
    'ant-prefix': 'ant',
    'html-selector': 'html',
    // -------- Colors -----------
    // >>> Primary
    'primary-color': token.colorPrimary,
    'primary-color-hover': token.colorPrimaryHover,
    'primary-color-active': token.colorPrimaryActive,
    'primary-color-outline': 'fade(@primary-color, @outline-fade)',
    'processing-color': token.colorPrimary,
    // >>> Info
    'info-color': token.colorInfo,
    'info-color-deprecated-bg': token.colorInfoBg,
    'info-color-deprecated-border': token.colorInfoBorder,
    // >>> Success
    'success-color': token.colorSuccess,
    'success-color-hover': token.colorSuccessBgHover,
    'success-color-active': token.colorSuccessActive,
    'success-color-outline': 'fade(@success-color, @outline-fade)',
    'success-color-deprecated-bg': token.colorSuccessBg,
    'success-color-deprecated-border': token.colorSuccessBorder,
    // >>> Warning
    'warning-color': token.colorWarning,
    'warning-color-hover': token.colorWarningHover,
    'warning-color-active': token.colorWarningActive,
    'warning-color-outline': 'fade(@warning-color, @outline-fade)',
    'warning-color-deprecated-bg': token.colorWarningBg,
    'warning-color-deprecated-border': token.colorWarningBorder,
    // >>> Error
    'error-color': token.colorError,
    'error-color-hover': token.colorErrorHover,
    'error-color-active': token.colorErrorActive,
    'error-color-outline': 'fade(@error-color, @outline-fade)',
    'error-color-deprecated-bg': token.colorErrorBg,
    'error-color-deprecated-border': token.colorErrorBorder,
    'highlight-color': token.colorHighlight,
    'normal-color': '#d9d9d9',
    white: token.colorWhite,
    black: '#000',
    // Color used by default to control hover and active backgrounds and for
    // alert info backgrounds.
    'primary-1': token.colorPrimaryBg,
    'primary-2': token.colorPrimaryBgHover,
    'primary-3': token.colorPrimaryBorder,
    'primary-4': token.colorPrimaryBorderHover,
    'primary-5': token.colorPrimaryHover,
    'primary-6': token.colorPrimary,
    'primary-7': token.colorPrimaryActive,
    'primary-8': token.colorPrimaryTextHover,
    'primary-9': token.colorPrimaryText,
    'primary-10': token.colorPrimaryTextActive,
    // Base Scaffolding Variables
    // ---
    // Background color for `<body>`
    'body-background': token.colorBgBase,
    // Base background color for most components
    'component-background': token.colorBgContainer,
    // Popover background color
    'popover-background': token.colorBgElevated,
    'popover-customize-border-color': token.colorSplit,
    'font-family': token.fontFamily,
    'code-family': "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    'text-color': token.colorText,
    'text-color-secondary': token.colorTextSecondary,
    'text-color-inverse': token.colorWhite,
    'icon-color': token.colorIcon,
    'icon-color-hover': token.colorIconHover,
    'heading-color': token.colorTextHeading,
    'text-color-dark': 'fade(@white, 85%)',
    'text-color-secondary-dark': 'fade(@white, 65%)',
    'text-selection-bg': token.colorPrimary,
    'font-variant-base': 'tabular-nums',
    'font-feature-settings-base': 'tnum',
    'font-size-base': token.fontSize,
    'font-size-lg': token.fontSizeLG,
    'font-size-sm': token.fontSizeSM,
    'heading-1-size': token.fontSizeHeading1,
    'heading-2-size': token.fontSizeHeading2,
    'heading-3-size': token.fontSizeHeading3,
    'heading-4-size': token.fontSizeHeading4,
    'heading-5-size': token.fontSizeHeading5,
    // https://github.com/ant-design/ant-design/issues/20210
    'line-height-base': token.lineHeight,
    'border-radius-base': token.borderRadius,
    'border-radius-sm': token.borderRadiusSM,
    // control border
    'control-border-radius': token.borderRadius,
    // arrow border
    'arrow-border-radius': token.borderRadiusSM,
    //  2px;
    // vertical paddings
    'padding-lg': token.paddingLG,
    'padding-md': token.padding,
    'padding-sm': token.paddingSM,
    'padding-xs': token.paddingXS,
    'padding-xss': token.paddingXXS,
    // vertical padding for all form controls
    'control-padding-horizontal': token.paddingSM,
    //@padding-sm;
    'control-padding-horizontal-sm': token.paddingXS,
    // @padding-xs;
    // vertical margins
    'margin-lg': token.marginLG,
    'margin-md': token.margin,
    'margin-sm': token.marginSM,
    'margin-xs': token.marginXS,
    'margin-xss': token.marginXXS,
    // height rules
    'height-base': token.controlHeight,
    'height-lg': token.controlHeightLG,
    'height-sm': token.controlHeightSM,
    // The background colors for active and hover states for things like
    // list items or table cells.
    'item-active-bg': token.controlItemBgActive,
    'item-hover-bg': token.controlItemBgHover,
    // ICONFONT
    'iconfont-css-prefix': 'anticon',
    // LINK
    'link-color': token.colorLink,
    'link-hover-color': token.colorLinkHover,
    'link-active-color': token.colorLinkActive,
    'link-decoration': 'none',
    'link-hover-decoration': 'none',
    'link-focus-decoration': 'none',
    'link-focus-outline': 0,
    // Animation
    'ease-base-out': token.motionEaseOut,
    'ease-base-in': 'cubic-bezier(0.9, 0, 0.3, 0.7)',
    'ease-out': token.motionEaseOut,
    'ease-in': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    'ease-in-out': token.motionEaseInOut,
    'ease-out-back': token.motionEaseOutBack,
    'ease-in-back': 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    'ease-in-out-back': 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    'ease-out-circ': token.motionEaseOutCirc,
    'ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    'ease-in-out-circ': token.motionEaseInOutCirc,
    'ease-out-quint': token.motionEaseOutQuint,
    'ease-in-quint': token.motionEaseInQuint,
    'ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    // Border color
    'border-color-base': token.colorBorder,
    'border-color-split': token.colorSplit,
    'border-color-inverse': token.colorWhite,
    'border-width-base': token.lineWidth,
    'border-style-base': 'solid',
    // Outline
    'outline-blur-size': 0,
    'outline-width': token.controlOutlineWidth,
    'outline-color': token.controlOutline,
    'outline-fade': '20%',
    'background-color-light': 'hsv(0, 0, 98%)',
    // background of header and selected item
    'background-color-base': 'hsv(0, 0, 96%)',
    // Default grey background color
    // Disabled states
    'disabled-color': token.colorTextDisabled,
    'disabled-bg': token.colorBgContainerDisabled,
    'disabled-active-bg': token.colorBgContainerDisabled,
    // tint(@black, 90%);
    'disabled-color-dark': 'fade(#fff, 35%)',
    // Shadow
    'shadow-color': 'rgba(0, 0, 0, 0.15)',
    'shadow-color-inverse': token.colorBgContainer,
    'box-shadow-base': token.boxShadow,
    'shadow-1-up': token.boxShadowDrawerUp,
    'shadow-1-down': token.boxShadowDrawerDown,
    'shadow-1-left': token.boxShadowDrawerLeft,
    'shadow-1-right': token.boxShadowDrawerRight,
    'shadow-2': token.boxShadowSecondary,
    // ==========================================================================
    // ==                              Components                              ==
    // ==========================================================================
    // Buttons
    'btn-font-weight': '400',
    'btn-border-radius-base': '@border-radius-base',
    'btn-border-radius-sm': '@border-radius-base',
    'btn-border-width': '@border-width-base',
    'btn-border-style': '@border-style-base',
    'btn-shadow': '0 2px 0 rgba(0, 0, 0, 0.015)',
    'btn-primary-shadow': '0 2px 0 rgba(0, 0, 0, 0.045)',
    'btn-text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.12)',
    'btn-primary-color': '#fff',
    'btn-primary-bg': '@primary-color',
    'btn-default-color': '@text-color',
    'btn-default-bg': '@component-background',
    'btn-default-border': '@border-color-base',
    'btn-danger-color': '#fff',
    'btn-danger-bg': '@error-color',
    'btn-danger-border': '@error-color',
    'btn-disable-color': '@disabled-color',
    'btn-disable-bg': '@disabled-bg',
    'btn-disable-border': '@border-color-base',
    'btn-default-ghost-color': '@component-background',
    'btn-default-ghost-bg': 'transparent',
    'btn-default-ghost-border': '@component-background',
    'btn-font-size-lg': '@font-size-lg',
    'btn-font-size-sm': '@font-size-base',
    'btn-padding-horizontal-base': '@padding-md - 1px',
    'btn-padding-horizontal-lg': '@btn-padding-horizontal-base',
    'btn-padding-horizontal-sm': '@padding-xs - 1px',
    'btn-height-base': '@height-base',
    'btn-height-lg': '@height-lg',
    'btn-height-sm': '@height-sm',
    'btn-line-height': '@line-height-base',
    'btn-circle-size': '@btn-height-base',
    'btn-circle-size-lg': '@btn-height-lg',
    'btn-circle-size-sm': '@btn-height-sm',
    'btn-square-size': '@btn-height-base',
    'btn-square-size-lg': '@btn-height-lg',
    'btn-square-size-sm': '@btn-height-sm',
    'btn-square-only-icon-size': '@font-size-base + 2px',
    'btn-square-only-icon-size-sm': '@font-size-base',
    'btn-square-only-icon-size-lg': '@btn-font-size-lg + 2px',
    'btn-group-border': '@primary-5',
    'btn-link-hover-bg': 'transparent',
    'btn-text-hover-bg': 'rgba(0, 0, 0, 0.018)',
    // Checkbox
    'checkbox-size': '16px',
    'checkbox-color': '@primary-color',
    'checkbox-check-color': '#fff',
    'checkbox-check-bg': '@checkbox-check-color',
    'checkbox-border-width': '@border-width-base',
    'checkbox-border-radius': '@border-radius-base',
    'checkbox-group-item-margin-right': '8px',
    // Descriptions
    'descriptions-bg': '#fafafa',
    'descriptions-title-margin-bottom': '20px',
    'descriptions-default-padding': '@padding-md @padding-lg',
    'descriptions-middle-padding': '@padding-sm @padding-lg',
    'descriptions-small-padding': '@padding-xs @padding-md',
    'descriptions-item-padding-bottom': '@padding-md',
    'descriptions-item-trailing-colon': 'true',
    'descriptions-item-label-colon-margin-right': '8px',
    'descriptions-item-label-colon-margin-left': '2px',
    'descriptions-extra-color': '@text-color',
    // Divider
    'divider-text-padding': '1em',
    'divider-orientation-margin': '5%',
    'divider-color': 'rgba(0, 0, 0, 6%)',
    'divider-vertical-gutter': '8px',
    // Dropdown
    'dropdown-selected-color': '@primary-color',
    'dropdown-menu-submenu-disabled-bg': '@component-background',
    'dropdown-selected-bg': '@item-active-bg',
    // Empty
    'empty-font-size': '@font-size-base',
    // Radio
    'radio-size': '16px',
    'radio-top': '0.2em',
    'radio-border-width': '1px',
    'radio-dot-size': '@radio-size - 8px',
    'radio-dot-color': '@primary-color',
    'radio-dot-disabled-color': 'fade(@black, 20%)',
    'radio-solid-checked-color': '@component-background',
    // Radio buttons
    'radio-button-bg': '@btn-default-bg',
    'radio-button-checked-bg': '@btn-default-bg',
    'radio-button-color': '@btn-default-color',
    'radio-button-hover-color': '@primary-5',
    'radio-button-active-color': '@primary-7',
    'radio-button-padding-horizontal': '@padding-md - 1px',
    'radio-disabled-button-checked-bg': '@disabled-active-bg',
    'radio-disabled-button-checked-color': '@disabled-color',
    'radio-wrapper-margin-right': '8px',
    // Media queries breakpoints
    // @screen-xs and @screen-xs-min is not used in Grid
    // smallest break point is @screen-md
    'screen-xs': '480px',
    'screen-xs-min': '@screen-xs',
    // 👆 Extra small screen / phone
    // 👇 Small screen / tablet
    'screen-sm': '576px',
    'screen-sm-min': '@screen-sm',
    // Medium screen / desktop
    'screen-md': '768px',
    'screen-md-min': '@screen-md',
    // Large screen / wide desktop
    'screen-lg': '992px',
    'screen-lg-min': '@screen-lg',
    // Extra large screen / full hd
    'screen-xl': '1200px',
    'screen-xl-min': '@screen-xl',
    // Extra extra large screen / large desktop
    'screen-xxl': '1600px',
    'screen-xxl-min': '@screen-xxl',
    // provide a maximum
    'screen-xs-max': '(@screen-sm-min - 1px)',
    'screen-sm-max': '(@screen-md-min - 1px)',
    'screen-md-max': '(@screen-lg-min - 1px)',
    'screen-lg-max': '(@screen-xl-min - 1px)',
    'screen-xl-max': '(@screen-xxl-min - 1px)',
    // Grid system
    'grid-columns': '24',
    // Layout
    'layout-body-background': '#f0f2f5',
    'layout-header-background': '#001529',
    'layout-header-height': '64px',
    'layout-header-padding': '0 50px',
    'layout-header-color': '@text-color',
    'layout-footer-padding': '24px 50px',
    'layout-footer-background': '@layout-body-background',
    'layout-sider-background': '@layout-header-background',
    'layout-trigger-height': '48px',
    'layout-trigger-background': '#002140',
    'layout-trigger-color': '#fff',
    'layout-zero-trigger-width': '36px',
    'layout-zero-trigger-height': '42px',
    // Layout light theme
    'layout-sider-background-light': '#fff',
    'layout-trigger-background-light': '#fff',
    'layout-trigger-color-light': '@text-color',
    // z-index list, order by `z-index`
    'zindex-badge': 'auto',
    'zindex-table-fixed': '2',
    'zindex-affix': '10',
    'zindex-back-top': '10',
    'zindex-picker-panel': '10',
    'zindex-popup-close': '10',
    'zindex-modal': '1000',
    'zindex-modal-mask': '1000',
    'zindex-message': '1010',
    'zindex-notification': '1010',
    'zindex-popover': '1030',
    'zindex-dropdown': '1050',
    'zindex-picker': '1050',
    'zindex-popoconfirm': '1060',
    'zindex-tooltip': '1070',
    'zindex-image': '1080',
    // Animation
    'animation-duration-slow': '0.3s',
    // Modal
    'animation-duration-base': '0.2s',
    'animation-duration-fast': '0.1s',
    // Tooltip
    //CollapsePanel
    'collapse-panel-border-radius': '@border-radius-base',
    //Dropdown
    'dropdown-menu-bg': '@component-background',
    'dropdown-vertical-padding': '5px',
    'dropdown-edge-child-vertical-padding': '4px',
    'dropdown-font-size': '@font-size-base',
    'dropdown-line-height': '22px',
    // Form
    // ---
    'label-required-color': '@highlight-color',
    'label-color': '@heading-color',
    'form-warning-input-bg': '@input-bg',
    'form-item-margin-bottom': '24px',
    'form-item-trailing-colon': 'true',
    'form-vertical-label-padding': '0 0 8px',
    'form-vertical-label-margin': '0',
    'form-item-label-font-size': '@font-size-base',
    'form-item-label-height': '@input-height-base',
    'form-item-label-colon-margin-right': '8px',
    'form-item-label-colon-margin-left': '2px',
    'form-error-input-bg': '@input-bg',
    // Input
    // ---
    'input-height-base': '@height-base',
    'input-height-lg': '@height-lg',
    'input-height-sm': '@height-sm',
    'input-padding-horizontal': '@control-padding-horizontal - 1px',
    'input-padding-horizontal-base': '@input-padding-horizontal',
    'input-padding-horizontal-sm': '@control-padding-horizontal-sm - 1px',
    'input-padding-horizontal-lg': '@input-padding-horizontal',
    'input-padding-vertical-base': "max(\n  (round(((@input-height-base - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  3px\n)",
    'input-padding-vertical-sm': "max(\n  (round(((@input-height-sm - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  0\n)",
    'input-padding-vertical-lg': "(\n    ceil(((@input-height-lg - @font-size-lg * @line-height-base) / 2) * 10) / 10\n  ) - @border-width-base",
    'input-placeholder-color': 'hsv(0, 0, 75%)',
    'input-color': '@text-color',
    'input-icon-color': '@input-color',
    'input-border-color': '@border-color-base',
    'input-bg': '@component-background',
    'input-number-hover-border-color': '@input-hover-border-color',
    'input-number-handler-active-bg': '#f4f4f4',
    'input-number-handler-hover-bg': '@primary-5',
    'input-number-handler-bg': '@component-background',
    'input-number-handler-border-color': '@border-color-base',
    'input-addon-bg': '@background-color-light',
    'input-hover-border-color': '@primary-5',
    'input-disabled-bg': '@disabled-bg',
    'input-outline-offset': '0 0',
    'input-icon-hover-color': 'fade(@black, 85%)',
    'input-disabled-color': '@disabled-color',
    // Mentions
    // ---
    'mentions-dropdown-bg': '@component-background',
    'mentions-dropdown-menu-item-hover-bg': '@mentions-dropdown-bg',
    // Select
    // ---
    'select-border-color': '@border-color-base',
    'select-item-selected-color': '@text-color',
    'select-item-selected-font-weight': '600',
    'select-dropdown-bg': '@component-background',
    'select-item-selected-bg': '@primary-1',
    'select-item-active-bg': '@item-hover-bg',
    'select-dropdown-vertical-padding': '@dropdown-vertical-padding',
    'select-dropdown-font-size': '@dropdown-font-size',
    'select-dropdown-line-height': '@dropdown-line-height',
    'select-dropdown-height': '32px',
    'select-background': '@component-background',
    'select-clear-background': '@select-background',
    'select-selection-item-bg': '@background-color-base',
    'select-selection-item-border-color': '@border-color-split',
    'select-single-item-height-lg': '40px',
    'select-multiple-item-height': '@input-height-base - @input-padding-vertical-base * 2',
    // Normal 24px
    'select-multiple-item-height-lg': '32px',
    'select-multiple-item-spacing-half': 'ceil((@input-padding-vertical-base / 2))',
    'select-multiple-disabled-background': '@input-disabled-bg',
    'select-multiple-item-disabled-color': '#bfbfbf',
    'select-multiple-item-disabled-border-color': '@select-border-color',
    // Cascader
    // ---
    'cascader-bg': '@component-background',
    'cascader-item-selected-bg': '@primary-1',
    'cascader-menu-bg': '@component-background',
    'cascader-menu-border-color-split': '@border-color-split',
    // Cascader
    // ----
    'cascader-dropdown-vertical-padding': '@dropdown-vertical-padding',
    'cascader-dropdown-edge-child-vertical-padding': '@dropdown-edge-child-vertical-padding',
    'cascader-dropdown-font-size': '@dropdown-font-size',
    'cascader-dropdown-line-height': '@dropdown-line-height',
    // Anchor
    // ---
    'anchor-bg': 'transparent',
    'anchor-border-color': '@border-color-split',
    'anchor-link-top': '4px',
    'anchor-link-left': '16px',
    'anchor-link-padding': '@anchor-link-top 0 @anchor-link-top @anchor-link-left',
    // Tooltip
    // ---
    // Tooltip max width
    'tooltip-max-width': '250px',
    // Tooltip text color
    'tooltip-color': '#fff',
    // Tooltip background color
    'tooltip-bg': 'rgba(0, 0, 0, 0.75)',
    // Tooltip arrow width
    'tooltip-arrow-width': '8px * sqrt(2)',
    // Tooltip distance with trigger
    'tooltip-distance': '@tooltip-arrow-width - 1px + 4px',
    // Tooltip arrow color
    'tooltip-arrow-color': '@tooltip-bg',
    'tooltip-border-radius': '@border-radius-base',
    // Popover
    // ---
    // Popover body background color
    'popover-bg': '@component-background',
    // Popover text color
    'popover-color': '@text-color',
    // Popover maximum width
    'popover-min-width': '177px',
    'popover-min-height': '32px',
    // Popover arrow width
    'popover-arrow-width': '@tooltip-arrow-width',
    // Popover arrow color
    'popover-arrow-color': '@popover-bg',
    // Popover outer arrow width
    // Popover outer arrow color
    'popover-arrow-outer-color': '@popover-bg',
    // Popover distance with trigger
    'popover-distance': '@popover-arrow-width + 4px',
    'popover-padding-horizontal': '@padding-md',
    // Modal
    // --
    'modal-header-padding-vertical': '@padding-md',
    'modal-header-padding-horizontal': '@padding-lg',
    'modal-body-padding': '@padding-lg',
    'modal-header-bg': '@component-background',
    'modal-header-padding': '@modal-header-padding-vertical @modal-header-padding-horizontal',
    'modal-header-border-width': '@border-width-base',
    'modal-header-border-style': '@border-style-base',
    'modal-header-title-line-height': '22px',
    'modal-header-title-font-size': '@font-size-lg',
    'modal-header-border-color-split': '@border-color-split',
    'modal-header-close-size': '@modal-header-title-line-height + 2 * @modal-header-padding-vertical',
    'modal-content-bg': '@component-background',
    'modal-heading-color': '@heading-color',
    'modal-close-color': '@text-color-secondary',
    'modal-footer-bg': 'transparent',
    'modal-footer-border-color-split': '@border-color-split',
    'modal-footer-border-style': '@border-style-base',
    'modal-footer-padding-vertical': '10px',
    'modal-footer-padding-horizontal': '16px',
    'modal-footer-border-width': '@border-width-base',
    'modal-mask-bg': 'fade(@black, 45%)',
    'modal-confirm-body-padding': '32px 32px 24px',
    'modal-confirm-title-font-size': '@font-size-lg',
    'modal-border-radius': '@border-radius-base',
    // Progress
    // --
    'progress-default-color': '@processing-color',
    'progress-remaining-color': '@background-color-base',
    'progress-info-text-color': '@progress-text-color',
    'progress-radius': '100px',
    'progress-steps-item-bg': '#f3f3f3',
    'progress-text-font-size': '1em',
    'progress-text-color': '@text-color',
    // This is for circle text color, should be renamed better
    'progress-circle-text-font-size': '1em',
    // Menu
    // ---
    'menu-inline-toplevel-item-height': '40px',
    'menu-item-height': '40px',
    'menu-item-group-height': '@line-height-base',
    'menu-collapsed-width': '80px',
    'menu-bg': '@component-background',
    'menu-popup-bg': '@component-background',
    'menu-item-color': '@text-color',
    'menu-inline-submenu-bg': '@background-color-light',
    'menu-highlight-color': '@primary-color',
    'menu-highlight-danger-color': '@error-color',
    'menu-item-active-bg': '@primary-1',
    'menu-item-active-danger-bg': '@red-1',
    'menu-item-active-border-width': '3px',
    'menu-item-group-title-color': '@text-color-secondary',
    'menu-item-vertical-margin': '4px',
    'menu-item-font-size': '@font-size-base',
    'menu-item-boundary-margin': '8px',
    'menu-item-padding-horizontal': '20px',
    'menu-item-padding': '0 @menu-item-padding-horizontal',
    'menu-horizontal-line-height': '46px',
    'menu-icon-margin-right': '10px',
    'menu-icon-size': '@menu-item-font-size',
    'menu-icon-size-lg': '@font-size-lg',
    'menu-item-group-title-font-size': '@menu-item-font-size',
    // dark theme
    'menu-dark-color': '@text-color-secondary-dark',
    'menu-dark-danger-color': '@error-color',
    'menu-dark-bg': '@layout-header-background',
    'menu-dark-arrow-color': '#fff',
    'menu-dark-inline-submenu-bg': '#000c17',
    'menu-dark-highlight-color': '#fff',
    'menu-dark-item-active-bg': '@primary-color',
    'menu-dark-item-active-danger-bg': '@error-color',
    'menu-dark-selected-item-icon-color': '@white',
    'menu-dark-selected-item-text-color': '@white',
    'menu-dark-item-hover-bg': 'transparent',
    // Spin
    // ---
    'spin-dot-size-sm': '14px',
    'spin-dot-size': '20px',
    'spin-dot-size-lg': '32px',
    // Table
    // --
    'table-bg': '@component-background',
    'table-header-bg': '@background-color-light',
    'table-header-color': '@heading-color',
    'table-header-sort-bg': '@background-color-base',
    'table-body-sort-bg': '#fafafa',
    'table-row-hover-bg': '@background-color-light',
    'table-selected-row-color': 'inherit',
    'table-selected-row-bg': '@primary-1',
    'table-body-selected-sort-bg': '@table-selected-row-bg',
    'table-selected-row-hover-bg': 'darken(@table-selected-row-bg, 2%)',
    'table-expanded-row-bg': '#fbfbfb',
    'table-padding-vertical': '16px',
    'table-padding-horizontal': '16px',
    'table-padding-vertical-md': '(@table-padding-vertical * 3 / 4)',
    'table-padding-horizontal-md': '(@table-padding-horizontal / 2)',
    'table-padding-vertical-sm': '(@table-padding-vertical / 2)',
    'table-padding-horizontal-sm': '(@table-padding-horizontal / 2)',
    'table-border-color': '@border-color-split',
    'table-border-radius-base': '@border-radius-base',
    'table-footer-bg': '@background-color-light',
    'table-footer-color': '@heading-color',
    'table-header-bg-sm': '@table-header-bg',
    'table-font-size': '@font-size-base',
    'table-font-size-md': '@table-font-size',
    'table-font-size-sm': '@table-font-size',
    'table-header-cell-split-color': 'rgba(0, 0, 0, 0.06)',
    // Sorter
    // Legacy: `table-header-sort-active-bg` is used for hover not real active
    'table-header-sort-active-bg': 'rgba(0, 0, 0, 0.04)',
    'table-fixed-header-sort-active-bg': 'hsv(0, 0, 96%)',
    // Filter
    'table-header-filter-active-bg': 'rgba(0, 0, 0, 0.04)',
    'table-filter-btns-bg': 'inherit',
    'table-filter-dropdown-bg': '@component-background',
    'table-expand-icon-bg': '@component-background',
    'table-selection-column-width': '32px',
    // Sticky
    'table-sticky-scroll-bar-bg': 'fade(#000, 35%)',
    'table-sticky-scroll-bar-radius': '4px',
    // Tag
    // --
    'tag-border-radius': '@border-radius-base',
    'tag-default-bg': '@background-color-light',
    'tag-default-color': '@text-color',
    'tag-font-size': '@font-size-sm',
    'tag-line-height': '20px',
    // TimePicker
    // ---
    'picker-bg': '@component-background',
    'picker-basic-cell-hover-color': '@item-hover-bg',
    'picker-basic-cell-active-with-range-color': '@primary-1',
    'picker-basic-cell-hover-with-range-color': 'lighten(@primary-color, 35%)',
    'picker-basic-cell-disabled-bg': 'rgba(0, 0, 0, 0.04)',
    'picker-border-color': '@border-color-split',
    'picker-date-hover-range-border-color': 'lighten(@primary-color, 20%)',
    'picker-date-hover-range-color': '@picker-basic-cell-hover-with-range-color',
    'picker-time-panel-column-width': '56px',
    'picker-time-panel-column-height': '224px',
    'picker-time-panel-cell-height': '28px',
    'picker-panel-cell-height': '24px',
    'picker-panel-cell-width': '36px',
    'picker-text-height': '40px',
    'picker-panel-without-time-cell-height': '66px',
    // Calendar
    // ---
    'calendar-bg': '@component-background',
    'calendar-input-bg': '@input-bg',
    'calendar-border-color': '@border-color-inverse',
    'calendar-item-active-bg': '@item-active-bg',
    'calendar-column-active-bg': 'fade(@calendar-item-active-bg, 20%)',
    'calendar-full-bg': '@calendar-bg',
    'calendar-full-panel-bg': '@calendar-full-bg',
    // Carousel
    // ---
    'carousel-dot-width': '16px',
    'carousel-dot-height': '3px',
    'carousel-dot-active-width': '24px',
    // Badge
    // ---
    'badge-height': '20px',
    'badge-height-sm': '14px',
    'badge-dot-size': '6px',
    'badge-font-size': '@font-size-sm',
    'badge-font-size-sm': '@font-size-sm',
    'badge-font-weight': 'normal',
    'badge-status-size': '6px',
    'badge-text-color': '@component-background',
    'badge-color': '@highlight-color',
    // Rate
    // ---
    'rate-star-color': '@yellow-6',
    'rate-star-bg': '@border-color-split',
    'rate-star-size': '20px',
    'rate-star-hover-scale': 'scale(1.1)',
    // Card
    // ---
    'card-head-color': '@heading-color',
    'card-head-background': 'transparent',
    'card-head-font-size': '@font-size-lg',
    'card-head-font-size-sm': '@font-size-base',
    'card-head-padding': '16px',
    'card-head-padding-sm': '(@card-head-padding / 2)',
    'card-head-height': '48px',
    'card-head-height-sm': '36px',
    'card-inner-head-padding': '12px',
    'card-padding-base': '24px',
    'card-padding-base-sm': '(@card-padding-base / 2)',
    'card-actions-background': '@component-background',
    'card-actions-li-margin': '12px 0',
    'card-skeleton-bg': '#cfd8dc',
    'card-background': '@component-background',
    'card-shadow': "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),\n  0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    'card-radius': '@border-radius-base',
    'card-head-tabs-margin-bottom': '-17px',
    'card-head-extra-color': '@text-color',
    // Comment
    // ---
    'comment-bg': 'inherit',
    'comment-padding-base': '@padding-md 0',
    'comment-nest-indent': '44px',
    'comment-font-size-base': '@font-size-base',
    'comment-font-size-sm': '@font-size-sm',
    'comment-author-name-color': '@text-color-secondary',
    'comment-author-time-color': '#ccc',
    'comment-action-color': '@text-color-secondary',
    'comment-action-hover-color': '#595959',
    'comment-actions-margin-bottom': 'inherit',
    'comment-actions-margin-top': '@margin-sm',
    'comment-content-detail-p-margin-bottom': 'inherit',
    // Tabs
    // ---
    'tabs-card-head-background': '@background-color-light',
    'tabs-card-height': '40px',
    'tabs-card-active-color': '@primary-color',
    'tabs-card-horizontal-padding': "(\n    (@tabs-card-height - floor(@font-size-base * @line-height-base)) / 2\n  ) - @border-width-base @padding-md",
    'tabs-card-horizontal-padding-sm': '6px @padding-md',
    'tabs-card-horizontal-padding-lg': '7px @padding-md 6px',
    'tabs-title-font-size': '@font-size-base',
    'tabs-title-font-size-lg': '@font-size-lg',
    'tabs-title-font-size-sm': '@font-size-base',
    'tabs-ink-bar-color': '@primary-color',
    'tabs-bar-margin': '0 0 @margin-md 0',
    'tabs-horizontal-gutter': '32px',
    'tabs-horizontal-margin': '0 0 0 @tabs-horizontal-gutter',
    'tabs-horizontal-margin-rtl': '0 0 0 32px',
    'tabs-horizontal-padding': '@padding-sm 0',
    'tabs-horizontal-padding-lg': '@padding-md 0',
    'tabs-horizontal-padding-sm': '@padding-xs 0',
    'tabs-vertical-padding': '@padding-xs @padding-lg',
    'tabs-vertical-margin': '@margin-md 0 0 0',
    'tabs-scrolling-size': '32px',
    'tabs-highlight-color': '@primary-color',
    'tabs-hover-color': '@primary-5',
    'tabs-active-color': '@primary-7',
    'tabs-card-gutter': '2px',
    'tabs-card-tab-active-border-top': '2px solid transparent',
    // BackTop
    // ---
    'back-top-color': '#fff',
    'back-top-bg': '@text-color-secondary',
    'back-top-hover-bg': '@text-color',
    // Avatar
    // ---
    'avatar-size-base': '32px',
    'avatar-size-lg': '40px',
    'avatar-size-sm': '24px',
    'avatar-font-size-base': '18px',
    'avatar-font-size-lg': '24px',
    'avatar-font-size-sm': '14px',
    'avatar-bg': '#ccc',
    'avatar-color': '#fff',
    'avatar-border-radius': '@border-radius-base',
    'avatar-group-overlapping': '-8px',
    'avatar-group-space': '3px',
    'avatar-group-border-color': '#fff',
    // Switch
    // ---
    'switch-height': '22px',
    'switch-sm-height': '16px',
    'switch-min-width': '44px',
    'switch-sm-min-width': '28px',
    'switch-disabled-opacity': '0.4',
    'switch-color': '@primary-color',
    'switch-bg': '@component-background',
    'switch-shadow-color': 'fade(#00230b, 20%)',
    'switch-padding': '2px',
    'switch-inner-margin-min': 'ceil(@switch-height * 0.3)',
    'switch-inner-margin-max': 'ceil(@switch-height * 1.1)',
    'switch-sm-inner-margin-min': 'ceil(@switch-sm-height * 0.3)',
    'switch-sm-inner-margin-max': 'ceil(@switch-sm-height * 1.1)',
    // Pagination
    // ---
    'pagination-item-bg': '@component-background',
    'pagination-item-size': '@height-base',
    'pagination-item-size-sm': '24px',
    'pagination-font-family': '@font-family',
    'pagination-font-weight-active': '500',
    'pagination-item-bg-active': '@component-background',
    'pagination-item-link-bg': '@component-background',
    'pagination-item-disabled-color-active': '@disabled-color',
    'pagination-item-disabled-bg-active': '@disabled-active-bg',
    'pagination-item-input-bg': '@component-background',
    'pagination-mini-options-size-changer-top': '0px',
    // PageHeader
    // ---
    'page-header-padding': '@padding-lg',
    'page-header-padding-vertical': '@padding-md',
    'page-header-padding-breadcrumb': '@padding-sm',
    'page-header-content-padding-vertical': '@padding-sm',
    'page-header-back-color': '#000',
    'page-header-ghost-bg': 'inherit',
    'page-header-heading-title': '@heading-4-size',
    'page-header-heading-sub-title': '14px',
    'page-header-tabs-tab-font-size': '16px',
    // Breadcrumb
    // ---
    'breadcrumb-base-color': '@text-color-secondary',
    'breadcrumb-last-item-color': '@text-color',
    'breadcrumb-font-size': '@font-size-base',
    'breadcrumb-icon-font-size': '@font-size-base',
    'breadcrumb-link-color': '@text-color-secondary',
    'breadcrumb-link-color-hover': '@text-color',
    'breadcrumb-separator-color': '@text-color-secondary',
    'breadcrumb-separator-margin': '0 @padding-xs',
    // Slider
    // ---
    'slider-margin': '10px 6px 10px',
    'slider-rail-background-color': '@background-color-base',
    'slider-rail-background-color-hover': '#e1e1e1',
    'slider-track-background-color': '@primary-3',
    'slider-track-background-color-hover': '@primary-4',
    'slider-handle-border-width': '2px',
    'slider-handle-background-color': '@component-background',
    'slider-handle-color': '@primary-3',
    'slider-handle-color-hover': '@primary-4',
    'slider-handle-color-focus': 'tint(@primary-color, 20%)',
    'slider-handle-color-focus-shadow': 'fade(@primary-color, 12%)',
    'slider-handle-color-tooltip-open': '@primary-color',
    'slider-handle-size': '14px',
    'slider-handle-margin-top': '-5px',
    'slider-handle-margin-left': '-5px',
    'slider-handle-shadow': '0',
    'slider-dot-border-color': '@border-color-split',
    'slider-dot-border-color-active': 'tint(@primary-color, 50%)',
    'slider-disabled-color': '@disabled-color',
    'slider-disabled-background-color': '@component-background',
    // Tree
    // ---
    'tree-bg': '@component-background',
    'tree-title-height': '24px',
    'tree-child-padding': '18px',
    'tree-directory-selected-color': '#fff',
    'tree-directory-selected-bg': '@primary-color',
    'tree-node-hover-bg': '@item-hover-bg',
    'tree-node-selected-bg': '@primary-2',
    // Collapse
    // ---
    'collapse-header-padding': '@padding-sm @padding-md',
    'collapse-header-padding-extra': '40px',
    'collapse-header-bg': '@background-color-light',
    'collapse-content-padding': '@padding-md',
    'collapse-content-bg': '@component-background',
    'collapse-header-arrow-left': '16px',
    // Skeleton
    // ---
    'skeleton-color': 'rgba(190, 190, 190, 0.2)',
    'skeleton-to-color': 'shade(@skeleton-color, 5%)',
    'skeleton-paragraph-margin-top': '28px',
    'skeleton-paragraph-li-margin-top': '@margin-md',
    'skeleton-paragraph-li-height': '16px',
    'skeleton-title-height': '16px',
    'skeleton-title-paragraph-margin-top': '@margin-lg',
    // Transfer
    // ---
    'transfer-header-height': '40px',
    'transfer-item-height': '@height-base',
    'transfer-disabled-bg': '@disabled-bg',
    'transfer-list-height': '200px',
    'transfer-item-hover-bg': '@item-hover-bg',
    'transfer-item-selected-hover-bg': 'darken(@item-active-bg, 2%)',
    'transfer-item-padding-vertical': '6px',
    'transfer-list-search-icon-top': '12px',
    // Message
    // ---
    'message-notice-content-padding': '10px 16px',
    'message-notice-content-bg': '@component-background',
    // Motion
    // ---
    'wave-animation-width': '6px',
    // Alert
    // ---
    'alert-success-border-color': token.colorSuccessBorder,
    'alert-success-bg-color': token.colorSuccessBg,
    'alert-success-icon-color': token.colorSuccess,
    'alert-info-border-color': token.colorInfoBorder,
    'alert-info-bg-color': token.colorInfoBg,
    'alert-info-icon-color': token.colorInfo,
    'alert-warning-border-color': token.colorWarningBorder,
    'alert-warning-bg-color': token.colorWarningBg,
    'alert-warning-icon-color': token.colorWarning,
    'alert-error-border-color': token.colorErrorBorder,
    'alert-error-bg-color': token.colorErrorBg,
    'alert-error-icon-color': '@error-color',
    'alert-message-color': '@heading-color',
    'alert-text-color': '@text-color',
    'alert-close-color': '@text-color-secondary',
    'alert-close-hover-color': '@icon-color-hover',
    'alert-padding-vertical': '@padding-xs',
    'alert-padding-horizontal': '@padding-md - 1px',
    'alert-no-icon-padding-vertical': '@padding-xs',
    'alert-with-description-no-icon-padding-vertical': '@padding-md - 1px',
    'alert-with-description-padding-vertical': '@padding-md - 1px',
    'alert-with-description-padding': "@alert-with-description-padding-vertical 15px\n  @alert-with-description-no-icon-padding-vertical @alert-with-description-icon-size",
    'alert-icon-top': '8px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)',
    'alert-with-description-icon-size': '24px',
    // List
    // ---
    'list-header-background': 'transparent',
    'list-footer-background': 'transparent',
    'list-empty-text-padding': '@padding-md',
    'list-item-padding': '@padding-sm 0',
    'list-item-padding-sm': '@padding-xs @padding-md',
    'list-item-padding-lg': '16px 24px',
    'list-item-meta-margin-bottom': '@padding-md',
    'list-item-meta-avatar-margin-right': '@padding-md',
    'list-item-meta-title-margin-bottom': '@padding-sm',
    'list-customize-card-bg': '@component-background',
    'list-item-meta-description-font-size': '@font-size-base',
    // Statistic
    // ---
    'statistic-title-font-size': '@font-size-base',
    'statistic-content-font-size': '24px',
    'statistic-unit-font-size': '24px',
    'statistic-font-family': '@font-family',
    // Drawer
    // ---
    'drawer-header-padding': '@padding-md @padding-lg',
    'drawer-body-padding': '@padding-lg',
    'drawer-bg': '@component-background',
    'drawer-footer-padding-vertical': '@modal-footer-padding-vertical',
    'drawer-footer-padding-horizontal': '@modal-footer-padding-horizontal',
    'drawer-header-close-size': '56px',
    'drawer-title-font-size': '@font-size-lg',
    'drawer-title-line-height': '22px',
    // Timeline
    // ---
    'timeline-width': '2px',
    'timeline-color': '@border-color-split',
    'timeline-dot-border-width': '2px',
    'timeline-dot-color': '@primary-color',
    'timeline-dot-bg': '@component-background',
    'timeline-item-padding-bottom': '20px',
    // Typography
    // ---
    'typography-title-font-weight': '600',
    'typography-title-margin-top': '1.2em',
    'typography-title-margin-bottom': '0.5em',
    // Upload
    // ---
    'upload-actions-color': '@text-color-secondary',
    // Steps
    // ---
    'process-tail-color': '@border-color-split',
    'steps-nav-arrow-color': 'fade(@black, 25%)',
    'steps-background': '@component-background',
    'steps-icon-size': '32px',
    'steps-icon-custom-size': '@steps-icon-size',
    'steps-icon-custom-top': '0px',
    'steps-icon-custom-font-size': '24px',
    'steps-icon-top': '-0.5px',
    'steps-icon-font-size': '@font-size-lg',
    'steps-icon-margin': '0 8px 0 0',
    'steps-title-line-height': '@height-base',
    'steps-small-icon-size': '24px',
    'steps-small-icon-margin': '0 8px 0 0',
    'steps-dot-size': '8px',
    'steps-dot-top': '2px',
    'steps-current-dot-size': '10px',
    'steps-description-max-width': '140px',
    'steps-nav-content-max-width': 'auto',
    'steps-vertical-icon-width': '16px',
    'steps-vertical-tail-width': '16px',
    'steps-vertical-tail-width-sm': '12px',
    // Notification
    // ---
    'notification-bg': '@component-background',
    'notification-padding-vertical': '16px',
    'notification-padding-horizontal': '24px',
    // Result
    // ---
    'result-title-font-size': '24px',
    'result-subtitle-font-size': '@font-size-base',
    'result-icon-font-size': '72px',
    'result-extra-margin': '24px 0 0 0',
    // Image
    // ---
    'image-size-base': '48px',
    'image-font-size-base': '24px',
    'image-bg': '#f5f5f5',
    'image-color': '#fff',
    'image-mask-font-size': '16px',
    'image-preview-operation-size': '18px',
    'image-preview-operation-color': '@text-color-dark',
    'image-preview-operation-disabled-color': 'fade(@image-preview-operation-color, 25%)',
    // Segmented
    // ---
    'segmented-bg': 'fade(@black, 4%)',
    'segmented-hover-bg': 'fade(@black, 6%)',
    'segmented-selected-bg': '@white',
    'segmented-label-color': 'fade(@black, 65%)',
    'segmented-label-hover-color': '#262626'
  }; // Fill colors. e.g. '@red-1', '@yellow-6'

  Object.keys(token).forEach(function (key) {
    if (key !== key.toLowerCase()) {
      return;
    }

    var value = token[key];

    if (typeof value === 'string') {
      raw[key] = value;
    }
  }); // Convert to string

  var returnData = {};
  Object.keys(raw).forEach(function (key) {
    var value = raw[key];

    if (typeof value === 'function') {
      returnData[key] = value(raw);
    } else if (typeof value === 'number' && !key.includes('line-height')) {
      returnData[key] = "".concat(value, "px");
    } else {
      returnData[key] = "".concat(value);
    }
  });
  return returnData;
}

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/theme/dark.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/theme/dark.js ***!
  \**************************************************************/
/*! exports provided: getAlphaColor, getSolidColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlphaColor", function() { return getAlphaColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolidColor", function() { return getSolidColor; });
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");
/* harmony import */ var _genColorMapToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genColorMapToken */ "./node_modules/@ant-design/compatible/es/theme/genColorMapToken.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var darkAlgorithm = antd__WEBPACK_IMPORTED_MODULE_2__["theme"].darkAlgorithm;
var getAlphaColor = function getAlphaColor(baseColor, alpha) {
  return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__["TinyColor"](baseColor).setAlpha(alpha).toRgbString();
};
var getSolidColor = function getSolidColor(baseColor, brightness) {
  var instance = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__["TinyColor"](baseColor);
  return instance.lighten(brightness).toHexString();
};

var generateColorPalettes = function generateColorPalettes(baseColor) {
  var colors = Object(_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__["generate"])(baseColor, {
    theme: 'dark'
  });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
  };
};

var generateNeutralColorPalettes = function generateNeutralColorPalettes(bgBaseColor, textBaseColor) {
  var colorBgBase = bgBaseColor || '#000';
  var colorTextBase = textBaseColor || '#fff';
  return {
    colorBgBase: colorBgBase,
    colorTextBase: colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.45),
    // Different from v5
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.04),
    colorBgElevated: getSolidColor(colorBgBase, 12),
    colorBgContainer: getSolidColor(colorBgBase, 8),
    colorBgLayout: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getSolidColor(colorBgBase, 26),
    colorBorder: getSolidColor(colorBgBase, 26),
    colorBorderSecondary: getSolidColor(colorBgBase, 19),
    colorSplit: getAlphaColor(colorTextBase, 0.12)
  };
};

var derivative = function derivative(token, mapToken) {
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : darkAlgorithm(token);
  return _objectSpread(_objectSpread({}, mergedMapToken), Object(_genColorMapToken__WEBPACK_IMPORTED_MODULE_1__["default"])(mapToken !== null && mapToken !== void 0 ? mapToken : token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (derivative);

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/theme/default.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/theme/default.js ***!
  \*****************************************************************/
/*! exports provided: getAlphaColor, getSolidColor, generateColorPalettes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlphaColor", function() { return getAlphaColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSolidColor", function() { return getSolidColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateColorPalettes", function() { return generateColorPalettes; });
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");
/* harmony import */ var _genColorMapToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genColorMapToken */ "./node_modules/@ant-design/compatible/es/theme/genColorMapToken.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var defaultAlgorithm = antd__WEBPACK_IMPORTED_MODULE_2__["theme"].defaultAlgorithm;
var getAlphaColor = function getAlphaColor(baseColor, alpha) {
  return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__["TinyColor"](baseColor).setAlpha(alpha).toRgbString();
};
var getSolidColor = function getSolidColor(baseColor, brightness) {
  var instance = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__["TinyColor"](baseColor);
  return instance.darken(brightness).toHexString();
};
var generateColorPalettes = function generateColorPalettes(baseColor) {
  var colors = Object(_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__["generate"])(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
  };
};

var generateNeutralColorPalettes = function generateNeutralColorPalettes(bgBaseColor, textBaseColor) {
  var colorBgBase = bgBaseColor || '#fff';
  var colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase: colorBgBase,
    colorTextBase: colorTextBase,
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.45),
    // Different from v5
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.06),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.04),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.03),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6),
    colorSplit: getAlphaColor(colorTextBase, 0.06)
  };
};

var derivative = function derivative(token, mapToken) {
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : defaultAlgorithm(token);
  return _objectSpread(_objectSpread({}, mergedMapToken), Object(_genColorMapToken__WEBPACK_IMPORTED_MODULE_1__["default"])(mapToken !== null && mapToken !== void 0 ? mapToken : token, {
    generateColorPalettes: generateColorPalettes,
    generateNeutralColorPalettes: generateNeutralColorPalettes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (derivative);

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/theme/genColorMapToken.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/theme/genColorMapToken.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return genColorMapToken; });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function genColorMapToken(seed, _ref) {
  var generateColorPalettes = _ref.generateColorPalettes,
      generateNeutralColorPalettes = _ref.generateNeutralColorPalettes;
  var colorSuccessBase = seed.colorSuccess,
      colorWarningBase = seed.colorWarning,
      colorErrorBase = seed.colorError,
      colorInfoBase = seed.colorInfo,
      colorPrimaryBase = seed.colorPrimary,
      colorBgBase = seed.colorBgBase,
      colorTextBase = seed.colorTextBase;
  var primaryColors = generateColorPalettes(colorPrimaryBase);
  var successColors = generateColorPalettes(colorSuccessBase);
  var warningColors = generateColorPalettes(colorWarningBase);
  var errorColors = generateColorPalettes(colorErrorBase);
  var infoColors = generateColorPalettes(colorInfoBase);
  var neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  return _objectSpread(_objectSpread({}, neutralColors), {}, {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[5],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[5],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[5],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}

/***/ }),

/***/ "./node_modules/@ant-design/compatible/es/theme/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ant-design/compatible/es/theme/index.js ***!
  \***************************************************************/
/*! exports provided: defaultAlgorithm, darkAlgorithm, defaultTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./node_modules/@ant-design/compatible/es/theme/default.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultAlgorithm", function() { return _default__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark */ "./node_modules/@ant-design/compatible/es/theme/dark.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkAlgorithm", function() { return _dark__WEBPACK_IMPORTED_MODULE_1__["default"]; });

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var v4Token = {
  token: {
    borderRadius: 2,
    colorPrimary: '#1890ff',
    wireframe: true
  }
};
var defaultTheme = _objectSpread(_objectSpread({}, v4Token), {}, {
  algorithm: _default__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    Menu: {
      radiusItem: 0,
      radiusSubMenuItem: 0,
      colorItemTextHover: '#1890ff',
      colorItemTextSelected: '#1890ff',
      colorItemBgSelected: '#e6f7ff',
      colorActiveBarWidth: 3,
      itemMarginInline: 0,
      colorItemBgHover: 'transparent'
    }
  }
});
var darkTheme = _objectSpread(_objectSpread({}, v4Token), {}, {
  algorithm: _dark__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    Menu: {
      radiusItem: 0,
      radiusSubMenuItem: 0,
      colorItemTextHover: '#1890ff',
      colorItemTextSelected: '#1890ff',
      colorItemBgSelected: '#111b26',
      colorActiveBarWidth: 3,
      itemMarginInline: 0,
      colorItemBgHover: 'transparent'
    }
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL2NvbW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL2NvbW1lbnQvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY29tcGF0aWJsZS9lcy90aGVtZS9jb252ZXJ0TGVnYWN5VG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL3RoZW1lL2RhcmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL3RoZW1lL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL3RoZW1lL2dlbkNvbG9yTWFwVG9rZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jb21wYXRpYmxlL2VzL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VySWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0g7QUFDekQ7QUFDVjtBQUNQO0FBQ0o7QUFDSDtBQUNXO0FBQ047QUFFeEMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FBaUI7RUFBQTtFQUFBLElBQVhDLElBQUksUUFBSkEsSUFBSTtFQUNwQixnQkFBMEJDLHNEQUFRLENBQVUsS0FBSyxDQUFDO0lBQTNDQyxLQUFLO0lBQUVDLFFBQVE7RUFDdEIsaUJBQWtERixzREFBUSxDQUFVLEtBQUssQ0FBQztJQUFuRUcsaUJBQWlCO0lBQUVDLG9CQUFvQjtFQUM5QyxJQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNuQ0osUUFBUSxDQUFDLFVBQUNLLElBQUk7TUFBQSxPQUFLLENBQUNBLElBQUk7SUFBQSxFQUFDO0lBQ3pCO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQU1DLGVBQWUsR0FBR0YseURBQVcsQ0FBQyxZQUFNO0lBQ3RDRixvQkFBb0IsQ0FBQyxVQUFDRyxJQUFJO01BQUEsT0FBSyxDQUFDQSxJQUFJO0lBQUEsRUFBQztFQUN6QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTUUsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQVU7SUFBQTtJQUFBLHlCQUFLQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsRUFBRSxtREFBYixlQUFlSixFQUFFO0VBQUEsRUFBQztFQUN6RDtFQUNBLE9BQ0k7SUFBSyxLQUFLLEVBQUU7TUFBRUssWUFBWSxFQUFFO0lBQUcsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBRzdC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OGEyYWM1ZjZiODRjZWZkZTA5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxsaXBzaXNPdXRsaW5lZCwgSGVhcnRPdXRsaW5lZCwgSGVhcnRUd29Ub25lLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIExpc3QsIFBvcG92ZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJ0BhbnQtZGVzaWduL2NvbXBhdGlibGUnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIC8vIGZhbHNl64qUIHRydWUgdHJ1ZeuKlCBmYWxzZSB0b2dnbGUg7L2U65OcXHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS51c2VyLm1lPy5pZClcclxuICAgIC8vIHN0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZCDrpbwg7Ji17IWU64SQIOyytOydtOuLneycvOuhnCDspITsl6zshJxcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICAgICAgICB7LyogY292ZXIsIGFjdGlvbnPripQgYW50ZOq4sOuKpSAqL31cclxuICAgICAgICAgICAgey8qIOuwsOyXtCDslYjsl5AganN466W8IOuEo+ydhCDrlZAga2V5ICovfVxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwibWVzc2FnZVwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiZWxsaXBzaXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXJJZCA9PT0gaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgLy8gZXh0cmE9ezxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLy8gPFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog6rKM7Iuc6riA7J2YIGlk66W8IGNvbW1lbnRGb3Jt7J20IOuwm+yVhOyVvCDtlZjquLAg65WM66y47JeQICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIFVzZXJJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJ2YXIgX2V4Y2x1ZGVkID0gW1wiYWN0aW9uc1wiLCBcImF1dGhvclwiLCBcImF2YXRhclwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29udGVudFwiLCBcInByZWZpeENsc1wiLCBcImRhdGV0aW1lXCJdO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbnZhciBDb25maWdDb250ZXh0ID0gQ29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dDtcblxudmFyIENvbW1lbnQgPSBmdW5jdGlvbiBDb21tZW50KF9yZWYpIHtcbiAgdmFyIGFjdGlvbnMgPSBfcmVmLmFjdGlvbnMsXG4gICAgICBhdXRob3IgPSBfcmVmLmF1dGhvcixcbiAgICAgIGF2YXRhciA9IF9yZWYuYXZhdGFyLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjb250ZW50ID0gX3JlZi5jb250ZW50LFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBkYXRldGltZSA9IF9yZWYuZGF0ZXRpbWUsXG4gICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcmVuZGVyTmVzdGVkID0gZnVuY3Rpb24gcmVuZGVyTmVzdGVkKHByZWZpeENscywgbmVzdGVkQ2hpbGRyZW4pIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmVzdGVkXCIpKVxuICAgIH0sIG5lc3RlZENoaWxkcmVuKTtcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjb21tZW50JywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICB2YXIgX3VzZVN0eWxlID0gdXNlU3R5bGUocHJlZml4Q2xzKSxcbiAgICAgIF91c2VTdHlsZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3R5bGUsIDIpLFxuICAgICAgd3JhcFNTUiA9IF91c2VTdHlsZTJbMF0sXG4gICAgICBoYXNoSWQgPSBfdXNlU3R5bGUyWzFdO1xuXG4gIHZhciBhdmF0YXJEb20gPSBhdmF0YXIgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWF2YXRhclwiKVxuICB9LCB0eXBlb2YgYXZhdGFyID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICBzcmM6IGF2YXRhcixcbiAgICBhbHQ6IFwiY29tbWVudC1hdmF0YXJcIlxuICB9KSA6IGF2YXRhcikgOiBudWxsO1xuICB2YXIgYWN0aW9uRG9tID0gYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hY3Rpb25zXCIpXG4gIH0sIGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAga2V5OiBcImFjdGlvbi1cIi5jb25jYXQoaW5kZXgpXG4gICAgfSwgYWN0aW9uKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgIDtcbiAgfSkpIDogbnVsbDtcbiAgdmFyIGF1dGhvckNvbnRlbnQgPSAoYXV0aG9yIHx8IGRhdGV0aW1lKSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnQtYXV0aG9yXCIpXG4gIH0sIGF1dGhvciAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWF1dGhvci1uYW1lXCIpXG4gIH0sIGF1dGhvciksIGRhdGV0aW1lICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnQtYXV0aG9yLXRpbWVcIilcbiAgfSwgZGF0ZXRpbWUpKTtcbiAgdmFyIGNvbnRlbnREb20gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnRcIilcbiAgfSwgYXV0aG9yQ29udGVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWRldGFpbFwiKVxuICB9LCBjb250ZW50KSwgYWN0aW9uRG9tKTtcbiAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgY2xhc3NOYW1lLCBoYXNoSWQpO1xuICByZXR1cm4gd3JhcFNTUiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lclwiKVxuICB9LCBhdmF0YXJEb20sIGNvbnRlbnREb20pLCBjaGlsZHJlbiA/IHJlbmRlck5lc3RlZChwcmVmaXhDbHMsIGNoaWxkcmVuKSA6IG51bGwpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuLy8gaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5sZXNzJztcbi8vIGltcG9ydCAnLi9pbmRleC5sZXNzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0eWxlUmVnaXN0ZXIgfSBmcm9tICdAYW50LWRlc2lnbi9jc3NpbmpzJztcbmltcG9ydCB7IHRoZW1lIGFzIGFudGRUaGVtZSwgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHJlc2V0Q29tcG9uZW50IH0gZnJvbSAnYW50ZC9lcy9zdHlsZSc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFeHBvcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgZ2VuU2hhcmVkQnV0dG9uU3R5bGUgPSBmdW5jdGlvbiBnZW5TaGFyZWRCdXR0b25TdHlsZSh0b2tlbikge1xuICB2YXIgX29iamVjdFNwcmVhZDI7XG5cbiAgdmFyIGNvbXBvbmVudENscyA9IHRva2VuLmNvbXBvbmVudENscyxcbiAgICAgIGNvbG9yQmdDb250YWluZXIgPSB0b2tlbi5jb2xvckJnQ29udGFpbmVyLFxuICAgICAgZm9udFNpemUgPSB0b2tlbi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplU00gPSB0b2tlbi5mb250U2l6ZVNNLFxuICAgICAgcGFkZGluZyA9IHRva2VuLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nWFMgPSB0b2tlbi5wYWRkaW5nWFMsXG4gICAgICBtYXJnaW5TTSA9IHRva2VuLm1hcmdpblNNLFxuICAgICAgbWFyZ2luWFhTID0gdG9rZW4ubWFyZ2luWFhTLFxuICAgICAgY29udHJvbEhlaWdodCA9IHRva2VuLmNvbnRyb2xIZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0U00gPSB0b2tlbi5saW5lSGVpZ2h0U00sXG4gICAgICBjb2xvclRleHQgPSB0b2tlbi5jb2xvclRleHQsXG4gICAgICBjb2xvclRleHRTZWNvbmRhcnkgPSB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgICBjb2xvclRleHRUZXJ0aWFyeSA9IHRva2VuLmNvbG9yVGV4dFRlcnRpYXJ5LFxuICAgICAgbW90aW9uRHVyYXRpb25TbG93ID0gdG9rZW4ubW90aW9uRHVyYXRpb25TbG93O1xuICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBjb21wb25lbnRDbHMsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzZXRDb21wb25lbnQodG9rZW4pKSwge30sIChfb2JqZWN0U3ByZWFkMiA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yQmdDb250YWluZXJcbiAgfSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcIlwiLmNvbmNhdChjb21wb25lbnRDbHMsIFwiLWlubmVyXCIpLCB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdCbG9jazogcGFkZGluZ1xuICB9KSwgX2RlZmluZVByb3BlcnR5KF9vYmplY3RTcHJlYWQyLCBcIlwiLmNvbmNhdChjb21wb25lbnRDbHMsIFwiLWF2YXRhclwiKSwge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbWFyZ2luSW5saW5lRW5kOiBtYXJnaW5TTSxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBpbWc6IHtcbiAgICAgIHdpZHRoOiBjb250cm9sSGVpZ2h0LFxuICAgICAgaGVpZ2h0OiBjb250cm9sSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgIH1cbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJcIi5jb25jYXQoY29tcG9uZW50Q2xzLCBcIi1jb250ZW50XCIpLCB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZmxleDogJ2F1dG8nLFxuICAgIG1pbldpZHRoOiAwLFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gICAgJyYtYXV0aG9yJzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICBtYXJnaW5Cb3R0b206IG1hcmdpblhYUyxcbiAgICAgICcmID4gYSwgJiA+IHNwYW4nOiB7XG4gICAgICAgIHBhZGRpbmdJbmxpbmVFbmQ6IHBhZGRpbmdYUyxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplU00sXG4gICAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRTTVxuICAgICAgfSxcbiAgICAgICcmLW5hbWUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvclRleHRTZWNvbmRhcnksXG4gICAgICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICAgICAgdHJhbnNpdGlvbjogXCJjb2xvciBcIi5jb25jYXQobW90aW9uRHVyYXRpb25TbG93KSxcbiAgICAgICAgJz4gKic6IHtcbiAgICAgICAgICBjb2xvcjogY29sb3JUZXh0U2Vjb25kYXJ5LFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yVGV4dFNlY29uZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmLXRpbWUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvclRleHRUZXJ0aWFyeSxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIGN1cnNvcjogJ2F1dG8nXG4gICAgICB9XG4gICAgfSxcbiAgICAnJi1kZXRhaWwgcCc6IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICBtYXJnaW5CbG9jazogMFxuICAgIH1cbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJcIi5jb25jYXQoY29tcG9uZW50Q2xzLCBcIi1hY3Rpb25zXCIpLCB7XG4gICAgbWFyZ2luVG9wOiBtYXJnaW5TTSxcbiAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiAwLFxuICAgICc+IGxpJzoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjb2xvcjogY29sb3JUZXh0U2Vjb25kYXJ5LFxuICAgICAgJz4gc3Bhbic6IHtcbiAgICAgICAgbWFyZ2luSW5saW5lRW5kOiBtYXJnaW5TTSxcbiAgICAgICAgY29sb3I6IGNvbG9yVGV4dFNlY29uZGFyeSxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplU00sXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIFwiLmNvbmNhdChtb3Rpb25EdXJhdGlvblNsb3cpLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGNvbG9yOiBjb2xvclRleHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb2JqZWN0U3ByZWFkMiwgXCJcIi5jb25jYXQoY29tcG9uZW50Q2xzLCBcIi1uZXN0ZWRcIiksIHtcbiAgICBtYXJnaW5JbmxpbmVTdGFydDogNDRcbiAgfSksIF9vYmplY3RTcHJlYWQyKSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3R5bGUocHJlZml4Q2xzKSB7XG4gIHZhciBfYW50ZFRoZW1lJHVzZVRva2VuID0gYW50ZFRoZW1lLnVzZVRva2VuKCksXG4gICAgICB0aGVtZSA9IF9hbnRkVGhlbWUkdXNlVG9rZW4udGhlbWUsXG4gICAgICB0b2tlbiA9IF9hbnRkVGhlbWUkdXNlVG9rZW4udG9rZW4sXG4gICAgICBoYXNoSWQgPSBfYW50ZFRoZW1lJHVzZVRva2VuLmhhc2hJZDtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgaWNvblByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0Lmljb25QcmVmaXhDbHM7XG5cbiAgcmV0dXJuIFt1c2VTdHlsZVJlZ2lzdGVyKHtcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgdG9rZW46IHRva2VuLFxuICAgIGhhc2hJZDogaGFzaElkLFxuICAgIHBhdGg6IFsnY29tcGF0aWJsZScsICdDb21tZW50JywgcHJlZml4Q2xzLCBpY29uUHJlZml4Q2xzXVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lcmdlZFRva2VuID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBjb21wb25lbnRDbHM6IFwiLlwiLmNvbmNhdChwcmVmaXhDbHMpXG4gICAgfSwgdG9rZW4pO1xuXG4gICAgcmV0dXJuIFtnZW5TaGFyZWRCdXR0b25TdHlsZShtZXJnZWRUb2tlbildO1xuICB9KSwgaGFzaElkXTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XG5leHBvcnQgeyBkYXJrQWxnb3JpdGhtLCBkZWZhdWx0QWxnb3JpdGhtLCBkZWZhdWx0VGhlbWUsIGRhcmtUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnZlcnRMZWdhY3lUb2tlbiB9IGZyb20gXCIuL3RoZW1lL2NvbnZlcnRMZWdhY3lUb2tlblwiOyIsIi8vIFNvdXJjZTpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vYmxvYi8yYzlmYmM4ZjBjNzE0YzlkZTI3ZmMyZjU0NzEyYWNiNjlhYzFhYmQ4L2NvbXBvbmVudHMvc3R5bGUvdGhlbWVzL2RlZmF1bHQubGVzc1xuaW1wb3J0IGZvcm1hdFRva2VuIGZyb20gJ2FudGQvZXMvdGhlbWUvdXRpbC9hbGlhcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0TGVnYWN5VG9rZW4obWFwVG9rZW4pIHtcbiAgdmFyIHRva2VuID0gZm9ybWF0VG9rZW4obWFwVG9rZW4pO1xuICB2YXIgcmF3ID0ge1xuICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gICAgJ2FudC1wcmVmaXgnOiAnYW50JyxcbiAgICAnaHRtbC1zZWxlY3Rvcic6ICdodG1sJyxcbiAgICAvLyAtLS0tLS0tLSBDb2xvcnMgLS0tLS0tLS0tLS1cbiAgICAvLyA+Pj4gUHJpbWFyeVxuICAgICdwcmltYXJ5LWNvbG9yJzogdG9rZW4uY29sb3JQcmltYXJ5LFxuICAgICdwcmltYXJ5LWNvbG9yLWhvdmVyJzogdG9rZW4uY29sb3JQcmltYXJ5SG92ZXIsXG4gICAgJ3ByaW1hcnktY29sb3ItYWN0aXZlJzogdG9rZW4uY29sb3JQcmltYXJ5QWN0aXZlLFxuICAgICdwcmltYXJ5LWNvbG9yLW91dGxpbmUnOiAnZmFkZShAcHJpbWFyeS1jb2xvciwgQG91dGxpbmUtZmFkZSknLFxuICAgICdwcm9jZXNzaW5nLWNvbG9yJzogdG9rZW4uY29sb3JQcmltYXJ5LFxuICAgIC8vID4+PiBJbmZvXG4gICAgJ2luZm8tY29sb3InOiB0b2tlbi5jb2xvckluZm8sXG4gICAgJ2luZm8tY29sb3ItZGVwcmVjYXRlZC1iZyc6IHRva2VuLmNvbG9ySW5mb0JnLFxuICAgICdpbmZvLWNvbG9yLWRlcHJlY2F0ZWQtYm9yZGVyJzogdG9rZW4uY29sb3JJbmZvQm9yZGVyLFxuICAgIC8vID4+PiBTdWNjZXNzXG4gICAgJ3N1Y2Nlc3MtY29sb3InOiB0b2tlbi5jb2xvclN1Y2Nlc3MsXG4gICAgJ3N1Y2Nlc3MtY29sb3ItaG92ZXInOiB0b2tlbi5jb2xvclN1Y2Nlc3NCZ0hvdmVyLFxuICAgICdzdWNjZXNzLWNvbG9yLWFjdGl2ZSc6IHRva2VuLmNvbG9yU3VjY2Vzc0FjdGl2ZSxcbiAgICAnc3VjY2Vzcy1jb2xvci1vdXRsaW5lJzogJ2ZhZGUoQHN1Y2Nlc3MtY29sb3IsIEBvdXRsaW5lLWZhZGUpJyxcbiAgICAnc3VjY2Vzcy1jb2xvci1kZXByZWNhdGVkLWJnJzogdG9rZW4uY29sb3JTdWNjZXNzQmcsXG4gICAgJ3N1Y2Nlc3MtY29sb3ItZGVwcmVjYXRlZC1ib3JkZXInOiB0b2tlbi5jb2xvclN1Y2Nlc3NCb3JkZXIsXG4gICAgLy8gPj4+IFdhcm5pbmdcbiAgICAnd2FybmluZy1jb2xvcic6IHRva2VuLmNvbG9yV2FybmluZyxcbiAgICAnd2FybmluZy1jb2xvci1ob3Zlcic6IHRva2VuLmNvbG9yV2FybmluZ0hvdmVyLFxuICAgICd3YXJuaW5nLWNvbG9yLWFjdGl2ZSc6IHRva2VuLmNvbG9yV2FybmluZ0FjdGl2ZSxcbiAgICAnd2FybmluZy1jb2xvci1vdXRsaW5lJzogJ2ZhZGUoQHdhcm5pbmctY29sb3IsIEBvdXRsaW5lLWZhZGUpJyxcbiAgICAnd2FybmluZy1jb2xvci1kZXByZWNhdGVkLWJnJzogdG9rZW4uY29sb3JXYXJuaW5nQmcsXG4gICAgJ3dhcm5pbmctY29sb3ItZGVwcmVjYXRlZC1ib3JkZXInOiB0b2tlbi5jb2xvcldhcm5pbmdCb3JkZXIsXG4gICAgLy8gPj4+IEVycm9yXG4gICAgJ2Vycm9yLWNvbG9yJzogdG9rZW4uY29sb3JFcnJvcixcbiAgICAnZXJyb3ItY29sb3ItaG92ZXInOiB0b2tlbi5jb2xvckVycm9ySG92ZXIsXG4gICAgJ2Vycm9yLWNvbG9yLWFjdGl2ZSc6IHRva2VuLmNvbG9yRXJyb3JBY3RpdmUsXG4gICAgJ2Vycm9yLWNvbG9yLW91dGxpbmUnOiAnZmFkZShAZXJyb3ItY29sb3IsIEBvdXRsaW5lLWZhZGUpJyxcbiAgICAnZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1iZyc6IHRva2VuLmNvbG9yRXJyb3JCZyxcbiAgICAnZXJyb3ItY29sb3ItZGVwcmVjYXRlZC1ib3JkZXInOiB0b2tlbi5jb2xvckVycm9yQm9yZGVyLFxuICAgICdoaWdobGlnaHQtY29sb3InOiB0b2tlbi5jb2xvckhpZ2hsaWdodCxcbiAgICAnbm9ybWFsLWNvbG9yJzogJyNkOWQ5ZDknLFxuICAgIHdoaXRlOiB0b2tlbi5jb2xvcldoaXRlLFxuICAgIGJsYWNrOiAnIzAwMCcsXG4gICAgLy8gQ29sb3IgdXNlZCBieSBkZWZhdWx0IHRvIGNvbnRyb2wgaG92ZXIgYW5kIGFjdGl2ZSBiYWNrZ3JvdW5kcyBhbmQgZm9yXG4gICAgLy8gYWxlcnQgaW5mbyBiYWNrZ3JvdW5kcy5cbiAgICAncHJpbWFyeS0xJzogdG9rZW4uY29sb3JQcmltYXJ5QmcsXG4gICAgJ3ByaW1hcnktMic6IHRva2VuLmNvbG9yUHJpbWFyeUJnSG92ZXIsXG4gICAgJ3ByaW1hcnktMyc6IHRva2VuLmNvbG9yUHJpbWFyeUJvcmRlcixcbiAgICAncHJpbWFyeS00JzogdG9rZW4uY29sb3JQcmltYXJ5Qm9yZGVySG92ZXIsXG4gICAgJ3ByaW1hcnktNSc6IHRva2VuLmNvbG9yUHJpbWFyeUhvdmVyLFxuICAgICdwcmltYXJ5LTYnOiB0b2tlbi5jb2xvclByaW1hcnksXG4gICAgJ3ByaW1hcnktNyc6IHRva2VuLmNvbG9yUHJpbWFyeUFjdGl2ZSxcbiAgICAncHJpbWFyeS04JzogdG9rZW4uY29sb3JQcmltYXJ5VGV4dEhvdmVyLFxuICAgICdwcmltYXJ5LTknOiB0b2tlbi5jb2xvclByaW1hcnlUZXh0LFxuICAgICdwcmltYXJ5LTEwJzogdG9rZW4uY29sb3JQcmltYXJ5VGV4dEFjdGl2ZSxcbiAgICAvLyBCYXNlIFNjYWZmb2xkaW5nIFZhcmlhYmxlc1xuICAgIC8vIC0tLVxuICAgIC8vIEJhY2tncm91bmQgY29sb3IgZm9yIGA8Ym9keT5gXG4gICAgJ2JvZHktYmFja2dyb3VuZCc6IHRva2VuLmNvbG9yQmdCYXNlLFxuICAgIC8vIEJhc2UgYmFja2dyb3VuZCBjb2xvciBmb3IgbW9zdCBjb21wb25lbnRzXG4gICAgJ2NvbXBvbmVudC1iYWNrZ3JvdW5kJzogdG9rZW4uY29sb3JCZ0NvbnRhaW5lcixcbiAgICAvLyBQb3BvdmVyIGJhY2tncm91bmQgY29sb3JcbiAgICAncG9wb3Zlci1iYWNrZ3JvdW5kJzogdG9rZW4uY29sb3JCZ0VsZXZhdGVkLFxuICAgICdwb3BvdmVyLWN1c3RvbWl6ZS1ib3JkZXItY29sb3InOiB0b2tlbi5jb2xvclNwbGl0LFxuICAgICdmb250LWZhbWlseSc6IHRva2VuLmZvbnRGYW1pbHksXG4gICAgJ2NvZGUtZmFtaWx5JzogXCInU0ZNb25vLVJlZ3VsYXInLCBDb25zb2xhcywgJ0xpYmVyYXRpb24gTW9ubycsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2VcIixcbiAgICAndGV4dC1jb2xvcic6IHRva2VuLmNvbG9yVGV4dCxcbiAgICAndGV4dC1jb2xvci1zZWNvbmRhcnknOiB0b2tlbi5jb2xvclRleHRTZWNvbmRhcnksXG4gICAgJ3RleHQtY29sb3ItaW52ZXJzZSc6IHRva2VuLmNvbG9yV2hpdGUsXG4gICAgJ2ljb24tY29sb3InOiB0b2tlbi5jb2xvckljb24sXG4gICAgJ2ljb24tY29sb3ItaG92ZXInOiB0b2tlbi5jb2xvckljb25Ib3ZlcixcbiAgICAnaGVhZGluZy1jb2xvcic6IHRva2VuLmNvbG9yVGV4dEhlYWRpbmcsXG4gICAgJ3RleHQtY29sb3ItZGFyayc6ICdmYWRlKEB3aGl0ZSwgODUlKScsXG4gICAgJ3RleHQtY29sb3Itc2Vjb25kYXJ5LWRhcmsnOiAnZmFkZShAd2hpdGUsIDY1JSknLFxuICAgICd0ZXh0LXNlbGVjdGlvbi1iZyc6IHRva2VuLmNvbG9yUHJpbWFyeSxcbiAgICAnZm9udC12YXJpYW50LWJhc2UnOiAndGFidWxhci1udW1zJyxcbiAgICAnZm9udC1mZWF0dXJlLXNldHRpbmdzLWJhc2UnOiAndG51bScsXG4gICAgJ2ZvbnQtc2l6ZS1iYXNlJzogdG9rZW4uZm9udFNpemUsXG4gICAgJ2ZvbnQtc2l6ZS1sZyc6IHRva2VuLmZvbnRTaXplTEcsXG4gICAgJ2ZvbnQtc2l6ZS1zbSc6IHRva2VuLmZvbnRTaXplU00sXG4gICAgJ2hlYWRpbmctMS1zaXplJzogdG9rZW4uZm9udFNpemVIZWFkaW5nMSxcbiAgICAnaGVhZGluZy0yLXNpemUnOiB0b2tlbi5mb250U2l6ZUhlYWRpbmcyLFxuICAgICdoZWFkaW5nLTMtc2l6ZSc6IHRva2VuLmZvbnRTaXplSGVhZGluZzMsXG4gICAgJ2hlYWRpbmctNC1zaXplJzogdG9rZW4uZm9udFNpemVIZWFkaW5nNCxcbiAgICAnaGVhZGluZy01LXNpemUnOiB0b2tlbi5mb250U2l6ZUhlYWRpbmc1LFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzIwMjEwXG4gICAgJ2xpbmUtaGVpZ2h0LWJhc2UnOiB0b2tlbi5saW5lSGVpZ2h0LFxuICAgICdib3JkZXItcmFkaXVzLWJhc2UnOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgJ2JvcmRlci1yYWRpdXMtc20nOiB0b2tlbi5ib3JkZXJSYWRpdXNTTSxcbiAgICAvLyBjb250cm9sIGJvcmRlclxuICAgICdjb250cm9sLWJvcmRlci1yYWRpdXMnOiB0b2tlbi5ib3JkZXJSYWRpdXMsXG4gICAgLy8gYXJyb3cgYm9yZGVyXG4gICAgJ2Fycm93LWJvcmRlci1yYWRpdXMnOiB0b2tlbi5ib3JkZXJSYWRpdXNTTSxcbiAgICAvLyAgMnB4O1xuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmdzXG4gICAgJ3BhZGRpbmctbGcnOiB0b2tlbi5wYWRkaW5nTEcsXG4gICAgJ3BhZGRpbmctbWQnOiB0b2tlbi5wYWRkaW5nLFxuICAgICdwYWRkaW5nLXNtJzogdG9rZW4ucGFkZGluZ1NNLFxuICAgICdwYWRkaW5nLXhzJzogdG9rZW4ucGFkZGluZ1hTLFxuICAgICdwYWRkaW5nLXhzcyc6IHRva2VuLnBhZGRpbmdYWFMsXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyBmb3IgYWxsIGZvcm0gY29udHJvbHNcbiAgICAnY29udHJvbC1wYWRkaW5nLWhvcml6b250YWwnOiB0b2tlbi5wYWRkaW5nU00sXG4gICAgLy9AcGFkZGluZy1zbTtcbiAgICAnY29udHJvbC1wYWRkaW5nLWhvcml6b250YWwtc20nOiB0b2tlbi5wYWRkaW5nWFMsXG4gICAgLy8gQHBhZGRpbmcteHM7XG4gICAgLy8gdmVydGljYWwgbWFyZ2luc1xuICAgICdtYXJnaW4tbGcnOiB0b2tlbi5tYXJnaW5MRyxcbiAgICAnbWFyZ2luLW1kJzogdG9rZW4ubWFyZ2luLFxuICAgICdtYXJnaW4tc20nOiB0b2tlbi5tYXJnaW5TTSxcbiAgICAnbWFyZ2luLXhzJzogdG9rZW4ubWFyZ2luWFMsXG4gICAgJ21hcmdpbi14c3MnOiB0b2tlbi5tYXJnaW5YWFMsXG4gICAgLy8gaGVpZ2h0IHJ1bGVzXG4gICAgJ2hlaWdodC1iYXNlJzogdG9rZW4uY29udHJvbEhlaWdodCxcbiAgICAnaGVpZ2h0LWxnJzogdG9rZW4uY29udHJvbEhlaWdodExHLFxuICAgICdoZWlnaHQtc20nOiB0b2tlbi5jb250cm9sSGVpZ2h0U00sXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIGZvciBhY3RpdmUgYW5kIGhvdmVyIHN0YXRlcyBmb3IgdGhpbmdzIGxpa2VcbiAgICAvLyBsaXN0IGl0ZW1zIG9yIHRhYmxlIGNlbGxzLlxuICAgICdpdGVtLWFjdGl2ZS1iZyc6IHRva2VuLmNvbnRyb2xJdGVtQmdBY3RpdmUsXG4gICAgJ2l0ZW0taG92ZXItYmcnOiB0b2tlbi5jb250cm9sSXRlbUJnSG92ZXIsXG4gICAgLy8gSUNPTkZPTlRcbiAgICAnaWNvbmZvbnQtY3NzLXByZWZpeCc6ICdhbnRpY29uJyxcbiAgICAvLyBMSU5LXG4gICAgJ2xpbmstY29sb3InOiB0b2tlbi5jb2xvckxpbmssXG4gICAgJ2xpbmstaG92ZXItY29sb3InOiB0b2tlbi5jb2xvckxpbmtIb3ZlcixcbiAgICAnbGluay1hY3RpdmUtY29sb3InOiB0b2tlbi5jb2xvckxpbmtBY3RpdmUsXG4gICAgJ2xpbmstZGVjb3JhdGlvbic6ICdub25lJyxcbiAgICAnbGluay1ob3Zlci1kZWNvcmF0aW9uJzogJ25vbmUnLFxuICAgICdsaW5rLWZvY3VzLWRlY29yYXRpb24nOiAnbm9uZScsXG4gICAgJ2xpbmstZm9jdXMtb3V0bGluZSc6IDAsXG4gICAgLy8gQW5pbWF0aW9uXG4gICAgJ2Vhc2UtYmFzZS1vdXQnOiB0b2tlbi5tb3Rpb25FYXNlT3V0LFxuICAgICdlYXNlLWJhc2UtaW4nOiAnY3ViaWMtYmV6aWVyKDAuOSwgMCwgMC4zLCAwLjcpJyxcbiAgICAnZWFzZS1vdXQnOiB0b2tlbi5tb3Rpb25FYXNlT3V0LFxuICAgICdlYXNlLWluJzogJ2N1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpJyxcbiAgICAnZWFzZS1pbi1vdXQnOiB0b2tlbi5tb3Rpb25FYXNlSW5PdXQsXG4gICAgJ2Vhc2Utb3V0LWJhY2snOiB0b2tlbi5tb3Rpb25FYXNlT3V0QmFjayxcbiAgICAnZWFzZS1pbi1iYWNrJzogJ2N1YmljLWJlemllcigwLjcxLCAtMC40NiwgMC44OCwgMC42KScsXG4gICAgJ2Vhc2UtaW4tb3V0LWJhY2snOiAnY3ViaWMtYmV6aWVyKDAuNzEsIC0wLjQ2LCAwLjI5LCAxLjQ2KScsXG4gICAgJ2Vhc2Utb3V0LWNpcmMnOiB0b2tlbi5tb3Rpb25FYXNlT3V0Q2lyYyxcbiAgICAnZWFzZS1pbi1jaXJjJzogJ2N1YmljLWJlemllcigwLjYsIDAuMDQsIDAuOTgsIDAuMzQpJyxcbiAgICAnZWFzZS1pbi1vdXQtY2lyYyc6IHRva2VuLm1vdGlvbkVhc2VJbk91dENpcmMsXG4gICAgJ2Vhc2Utb3V0LXF1aW50JzogdG9rZW4ubW90aW9uRWFzZU91dFF1aW50LFxuICAgICdlYXNlLWluLXF1aW50JzogdG9rZW4ubW90aW9uRWFzZUluUXVpbnQsXG4gICAgJ2Vhc2UtaW4tb3V0LXF1aW50JzogJ2N1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKScsXG4gICAgLy8gQm9yZGVyIGNvbG9yXG4gICAgJ2JvcmRlci1jb2xvci1iYXNlJzogdG9rZW4uY29sb3JCb3JkZXIsXG4gICAgJ2JvcmRlci1jb2xvci1zcGxpdCc6IHRva2VuLmNvbG9yU3BsaXQsXG4gICAgJ2JvcmRlci1jb2xvci1pbnZlcnNlJzogdG9rZW4uY29sb3JXaGl0ZSxcbiAgICAnYm9yZGVyLXdpZHRoLWJhc2UnOiB0b2tlbi5saW5lV2lkdGgsXG4gICAgJ2JvcmRlci1zdHlsZS1iYXNlJzogJ3NvbGlkJyxcbiAgICAvLyBPdXRsaW5lXG4gICAgJ291dGxpbmUtYmx1ci1zaXplJzogMCxcbiAgICAnb3V0bGluZS13aWR0aCc6IHRva2VuLmNvbnRyb2xPdXRsaW5lV2lkdGgsXG4gICAgJ291dGxpbmUtY29sb3InOiB0b2tlbi5jb250cm9sT3V0bGluZSxcbiAgICAnb3V0bGluZS1mYWRlJzogJzIwJScsXG4gICAgJ2JhY2tncm91bmQtY29sb3ItbGlnaHQnOiAnaHN2KDAsIDAsIDk4JSknLFxuICAgIC8vIGJhY2tncm91bmQgb2YgaGVhZGVyIGFuZCBzZWxlY3RlZCBpdGVtXG4gICAgJ2JhY2tncm91bmQtY29sb3ItYmFzZSc6ICdoc3YoMCwgMCwgOTYlKScsXG4gICAgLy8gRGVmYXVsdCBncmV5IGJhY2tncm91bmQgY29sb3JcbiAgICAvLyBEaXNhYmxlZCBzdGF0ZXNcbiAgICAnZGlzYWJsZWQtY29sb3InOiB0b2tlbi5jb2xvclRleHREaXNhYmxlZCxcbiAgICAnZGlzYWJsZWQtYmcnOiB0b2tlbi5jb2xvckJnQ29udGFpbmVyRGlzYWJsZWQsXG4gICAgJ2Rpc2FibGVkLWFjdGl2ZS1iZyc6IHRva2VuLmNvbG9yQmdDb250YWluZXJEaXNhYmxlZCxcbiAgICAvLyB0aW50KEBibGFjaywgOTAlKTtcbiAgICAnZGlzYWJsZWQtY29sb3ItZGFyayc6ICdmYWRlKCNmZmYsIDM1JSknLFxuICAgIC8vIFNoYWRvd1xuICAgICdzaGFkb3ctY29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjE1KScsXG4gICAgJ3NoYWRvdy1jb2xvci1pbnZlcnNlJzogdG9rZW4uY29sb3JCZ0NvbnRhaW5lcixcbiAgICAnYm94LXNoYWRvdy1iYXNlJzogdG9rZW4uYm94U2hhZG93LFxuICAgICdzaGFkb3ctMS11cCc6IHRva2VuLmJveFNoYWRvd0RyYXdlclVwLFxuICAgICdzaGFkb3ctMS1kb3duJzogdG9rZW4uYm94U2hhZG93RHJhd2VyRG93bixcbiAgICAnc2hhZG93LTEtbGVmdCc6IHRva2VuLmJveFNoYWRvd0RyYXdlckxlZnQsXG4gICAgJ3NoYWRvdy0xLXJpZ2h0JzogdG9rZW4uYm94U2hhZG93RHJhd2VyUmlnaHQsXG4gICAgJ3NoYWRvdy0yJzogdG9rZW4uYm94U2hhZG93U2Vjb25kYXJ5LFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gPT0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPT1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEJ1dHRvbnNcbiAgICAnYnRuLWZvbnQtd2VpZ2h0JzogJzQwMCcsXG4gICAgJ2J0bi1ib3JkZXItcmFkaXVzLWJhc2UnOiAnQGJvcmRlci1yYWRpdXMtYmFzZScsXG4gICAgJ2J0bi1ib3JkZXItcmFkaXVzLXNtJzogJ0Bib3JkZXItcmFkaXVzLWJhc2UnLFxuICAgICdidG4tYm9yZGVyLXdpZHRoJzogJ0Bib3JkZXItd2lkdGgtYmFzZScsXG4gICAgJ2J0bi1ib3JkZXItc3R5bGUnOiAnQGJvcmRlci1zdHlsZS1iYXNlJyxcbiAgICAnYnRuLXNoYWRvdyc6ICcwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTUpJyxcbiAgICAnYnRuLXByaW1hcnktc2hhZG93JzogJzAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0NSknLFxuICAgICdidG4tdGV4dC1zaGFkb3cnOiAnMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgJ2J0bi1wcmltYXJ5LWNvbG9yJzogJyNmZmYnLFxuICAgICdidG4tcHJpbWFyeS1iZyc6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ2J0bi1kZWZhdWx0LWNvbG9yJzogJ0B0ZXh0LWNvbG9yJyxcbiAgICAnYnRuLWRlZmF1bHQtYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnYnRuLWRlZmF1bHQtYm9yZGVyJzogJ0Bib3JkZXItY29sb3ItYmFzZScsXG4gICAgJ2J0bi1kYW5nZXItY29sb3InOiAnI2ZmZicsXG4gICAgJ2J0bi1kYW5nZXItYmcnOiAnQGVycm9yLWNvbG9yJyxcbiAgICAnYnRuLWRhbmdlci1ib3JkZXInOiAnQGVycm9yLWNvbG9yJyxcbiAgICAnYnRuLWRpc2FibGUtY29sb3InOiAnQGRpc2FibGVkLWNvbG9yJyxcbiAgICAnYnRuLWRpc2FibGUtYmcnOiAnQGRpc2FibGVkLWJnJyxcbiAgICAnYnRuLWRpc2FibGUtYm9yZGVyJzogJ0Bib3JkZXItY29sb3ItYmFzZScsXG4gICAgJ2J0bi1kZWZhdWx0LWdob3N0LWNvbG9yJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2J0bi1kZWZhdWx0LWdob3N0LWJnJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnYnRuLWRlZmF1bHQtZ2hvc3QtYm9yZGVyJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2J0bi1mb250LXNpemUtbGcnOiAnQGZvbnQtc2l6ZS1sZycsXG4gICAgJ2J0bi1mb250LXNpemUtc20nOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlJzogJ0BwYWRkaW5nLW1kIC0gMXB4JyxcbiAgICAnYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1sZyc6ICdAYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlJyxcbiAgICAnYnRuLXBhZGRpbmctaG9yaXpvbnRhbC1zbSc6ICdAcGFkZGluZy14cyAtIDFweCcsXG4gICAgJ2J0bi1oZWlnaHQtYmFzZSc6ICdAaGVpZ2h0LWJhc2UnLFxuICAgICdidG4taGVpZ2h0LWxnJzogJ0BoZWlnaHQtbGcnLFxuICAgICdidG4taGVpZ2h0LXNtJzogJ0BoZWlnaHQtc20nLFxuICAgICdidG4tbGluZS1oZWlnaHQnOiAnQGxpbmUtaGVpZ2h0LWJhc2UnLFxuICAgICdidG4tY2lyY2xlLXNpemUnOiAnQGJ0bi1oZWlnaHQtYmFzZScsXG4gICAgJ2J0bi1jaXJjbGUtc2l6ZS1sZyc6ICdAYnRuLWhlaWdodC1sZycsXG4gICAgJ2J0bi1jaXJjbGUtc2l6ZS1zbSc6ICdAYnRuLWhlaWdodC1zbScsXG4gICAgJ2J0bi1zcXVhcmUtc2l6ZSc6ICdAYnRuLWhlaWdodC1iYXNlJyxcbiAgICAnYnRuLXNxdWFyZS1zaXplLWxnJzogJ0BidG4taGVpZ2h0LWxnJyxcbiAgICAnYnRuLXNxdWFyZS1zaXplLXNtJzogJ0BidG4taGVpZ2h0LXNtJyxcbiAgICAnYnRuLXNxdWFyZS1vbmx5LWljb24tc2l6ZSc6ICdAZm9udC1zaXplLWJhc2UgKyAycHgnLFxuICAgICdidG4tc3F1YXJlLW9ubHktaWNvbi1zaXplLXNtJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgJ2J0bi1zcXVhcmUtb25seS1pY29uLXNpemUtbGcnOiAnQGJ0bi1mb250LXNpemUtbGcgKyAycHgnLFxuICAgICdidG4tZ3JvdXAtYm9yZGVyJzogJ0BwcmltYXJ5LTUnLFxuICAgICdidG4tbGluay1ob3Zlci1iZyc6ICd0cmFuc3BhcmVudCcsXG4gICAgJ2J0bi10ZXh0LWhvdmVyLWJnJzogJ3JnYmEoMCwgMCwgMCwgMC4wMTgpJyxcbiAgICAvLyBDaGVja2JveFxuICAgICdjaGVja2JveC1zaXplJzogJzE2cHgnLFxuICAgICdjaGVja2JveC1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ2NoZWNrYm94LWNoZWNrLWNvbG9yJzogJyNmZmYnLFxuICAgICdjaGVja2JveC1jaGVjay1iZyc6ICdAY2hlY2tib3gtY2hlY2stY29sb3InLFxuICAgICdjaGVja2JveC1ib3JkZXItd2lkdGgnOiAnQGJvcmRlci13aWR0aC1iYXNlJyxcbiAgICAnY2hlY2tib3gtYm9yZGVyLXJhZGl1cyc6ICdAYm9yZGVyLXJhZGl1cy1iYXNlJyxcbiAgICAnY2hlY2tib3gtZ3JvdXAtaXRlbS1tYXJnaW4tcmlnaHQnOiAnOHB4JyxcbiAgICAvLyBEZXNjcmlwdGlvbnNcbiAgICAnZGVzY3JpcHRpb25zLWJnJzogJyNmYWZhZmEnLFxuICAgICdkZXNjcmlwdGlvbnMtdGl0bGUtbWFyZ2luLWJvdHRvbSc6ICcyMHB4JyxcbiAgICAnZGVzY3JpcHRpb25zLWRlZmF1bHQtcGFkZGluZyc6ICdAcGFkZGluZy1tZCBAcGFkZGluZy1sZycsXG4gICAgJ2Rlc2NyaXB0aW9ucy1taWRkbGUtcGFkZGluZyc6ICdAcGFkZGluZy1zbSBAcGFkZGluZy1sZycsXG4gICAgJ2Rlc2NyaXB0aW9ucy1zbWFsbC1wYWRkaW5nJzogJ0BwYWRkaW5nLXhzIEBwYWRkaW5nLW1kJyxcbiAgICAnZGVzY3JpcHRpb25zLWl0ZW0tcGFkZGluZy1ib3R0b20nOiAnQHBhZGRpbmctbWQnLFxuICAgICdkZXNjcmlwdGlvbnMtaXRlbS10cmFpbGluZy1jb2xvbic6ICd0cnVlJyxcbiAgICAnZGVzY3JpcHRpb25zLWl0ZW0tbGFiZWwtY29sb24tbWFyZ2luLXJpZ2h0JzogJzhweCcsXG4gICAgJ2Rlc2NyaXB0aW9ucy1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1sZWZ0JzogJzJweCcsXG4gICAgJ2Rlc2NyaXB0aW9ucy1leHRyYS1jb2xvcic6ICdAdGV4dC1jb2xvcicsXG4gICAgLy8gRGl2aWRlclxuICAgICdkaXZpZGVyLXRleHQtcGFkZGluZyc6ICcxZW0nLFxuICAgICdkaXZpZGVyLW9yaWVudGF0aW9uLW1hcmdpbic6ICc1JScsXG4gICAgJ2RpdmlkZXItY29sb3InOiAncmdiYSgwLCAwLCAwLCA2JSknLFxuICAgICdkaXZpZGVyLXZlcnRpY2FsLWd1dHRlcic6ICc4cHgnLFxuICAgIC8vIERyb3Bkb3duXG4gICAgJ2Ryb3Bkb3duLXNlbGVjdGVkLWNvbG9yJzogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICAnZHJvcGRvd24tbWVudS1zdWJtZW51LWRpc2FibGVkLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2Ryb3Bkb3duLXNlbGVjdGVkLWJnJzogJ0BpdGVtLWFjdGl2ZS1iZycsXG4gICAgLy8gRW1wdHlcbiAgICAnZW1wdHktZm9udC1zaXplJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgLy8gUmFkaW9cbiAgICAncmFkaW8tc2l6ZSc6ICcxNnB4JyxcbiAgICAncmFkaW8tdG9wJzogJzAuMmVtJyxcbiAgICAncmFkaW8tYm9yZGVyLXdpZHRoJzogJzFweCcsXG4gICAgJ3JhZGlvLWRvdC1zaXplJzogJ0ByYWRpby1zaXplIC0gOHB4JyxcbiAgICAncmFkaW8tZG90LWNvbG9yJzogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICAncmFkaW8tZG90LWRpc2FibGVkLWNvbG9yJzogJ2ZhZGUoQGJsYWNrLCAyMCUpJyxcbiAgICAncmFkaW8tc29saWQtY2hlY2tlZC1jb2xvcic6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgIC8vIFJhZGlvIGJ1dHRvbnNcbiAgICAncmFkaW8tYnV0dG9uLWJnJzogJ0BidG4tZGVmYXVsdC1iZycsXG4gICAgJ3JhZGlvLWJ1dHRvbi1jaGVja2VkLWJnJzogJ0BidG4tZGVmYXVsdC1iZycsXG4gICAgJ3JhZGlvLWJ1dHRvbi1jb2xvcic6ICdAYnRuLWRlZmF1bHQtY29sb3InLFxuICAgICdyYWRpby1idXR0b24taG92ZXItY29sb3InOiAnQHByaW1hcnktNScsXG4gICAgJ3JhZGlvLWJ1dHRvbi1hY3RpdmUtY29sb3InOiAnQHByaW1hcnktNycsXG4gICAgJ3JhZGlvLWJ1dHRvbi1wYWRkaW5nLWhvcml6b250YWwnOiAnQHBhZGRpbmctbWQgLSAxcHgnLFxuICAgICdyYWRpby1kaXNhYmxlZC1idXR0b24tY2hlY2tlZC1iZyc6ICdAZGlzYWJsZWQtYWN0aXZlLWJnJyxcbiAgICAncmFkaW8tZGlzYWJsZWQtYnV0dG9uLWNoZWNrZWQtY29sb3InOiAnQGRpc2FibGVkLWNvbG9yJyxcbiAgICAncmFkaW8td3JhcHBlci1tYXJnaW4tcmlnaHQnOiAnOHB4JyxcbiAgICAvLyBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXG4gICAgLy8gQHNjcmVlbi14cyBhbmQgQHNjcmVlbi14cy1taW4gaXMgbm90IHVzZWQgaW4gR3JpZFxuICAgIC8vIHNtYWxsZXN0IGJyZWFrIHBvaW50IGlzIEBzY3JlZW4tbWRcbiAgICAnc2NyZWVuLXhzJzogJzQ4MHB4JyxcbiAgICAnc2NyZWVuLXhzLW1pbic6ICdAc2NyZWVuLXhzJyxcbiAgICAvLyDwn5GGIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgLy8g8J+RhyBTbWFsbCBzY3JlZW4gLyB0YWJsZXRcbiAgICAnc2NyZWVuLXNtJzogJzU3NnB4JyxcbiAgICAnc2NyZWVuLXNtLW1pbic6ICdAc2NyZWVuLXNtJyxcbiAgICAvLyBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcFxuICAgICdzY3JlZW4tbWQnOiAnNzY4cHgnLFxuICAgICdzY3JlZW4tbWQtbWluJzogJ0BzY3JlZW4tbWQnLFxuICAgIC8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuICAgICdzY3JlZW4tbGcnOiAnOTkycHgnLFxuICAgICdzY3JlZW4tbGctbWluJzogJ0BzY3JlZW4tbGcnLFxuICAgIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIGZ1bGwgaGRcbiAgICAnc2NyZWVuLXhsJzogJzEyMDBweCcsXG4gICAgJ3NjcmVlbi14bC1taW4nOiAnQHNjcmVlbi14bCcsXG4gICAgLy8gRXh0cmEgZXh0cmEgbGFyZ2Ugc2NyZWVuIC8gbGFyZ2UgZGVza3RvcFxuICAgICdzY3JlZW4teHhsJzogJzE2MDBweCcsXG4gICAgJ3NjcmVlbi14eGwtbWluJzogJ0BzY3JlZW4teHhsJyxcbiAgICAvLyBwcm92aWRlIGEgbWF4aW11bVxuICAgICdzY3JlZW4teHMtbWF4JzogJyhAc2NyZWVuLXNtLW1pbiAtIDFweCknLFxuICAgICdzY3JlZW4tc20tbWF4JzogJyhAc2NyZWVuLW1kLW1pbiAtIDFweCknLFxuICAgICdzY3JlZW4tbWQtbWF4JzogJyhAc2NyZWVuLWxnLW1pbiAtIDFweCknLFxuICAgICdzY3JlZW4tbGctbWF4JzogJyhAc2NyZWVuLXhsLW1pbiAtIDFweCknLFxuICAgICdzY3JlZW4teGwtbWF4JzogJyhAc2NyZWVuLXh4bC1taW4gLSAxcHgpJyxcbiAgICAvLyBHcmlkIHN5c3RlbVxuICAgICdncmlkLWNvbHVtbnMnOiAnMjQnLFxuICAgIC8vIExheW91dFxuICAgICdsYXlvdXQtYm9keS1iYWNrZ3JvdW5kJzogJyNmMGYyZjUnLFxuICAgICdsYXlvdXQtaGVhZGVyLWJhY2tncm91bmQnOiAnIzAwMTUyOScsXG4gICAgJ2xheW91dC1oZWFkZXItaGVpZ2h0JzogJzY0cHgnLFxuICAgICdsYXlvdXQtaGVhZGVyLXBhZGRpbmcnOiAnMCA1MHB4JyxcbiAgICAnbGF5b3V0LWhlYWRlci1jb2xvcic6ICdAdGV4dC1jb2xvcicsXG4gICAgJ2xheW91dC1mb290ZXItcGFkZGluZyc6ICcyNHB4IDUwcHgnLFxuICAgICdsYXlvdXQtZm9vdGVyLWJhY2tncm91bmQnOiAnQGxheW91dC1ib2R5LWJhY2tncm91bmQnLFxuICAgICdsYXlvdXQtc2lkZXItYmFja2dyb3VuZCc6ICdAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kJyxcbiAgICAnbGF5b3V0LXRyaWdnZXItaGVpZ2h0JzogJzQ4cHgnLFxuICAgICdsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kJzogJyMwMDIxNDAnLFxuICAgICdsYXlvdXQtdHJpZ2dlci1jb2xvcic6ICcjZmZmJyxcbiAgICAnbGF5b3V0LXplcm8tdHJpZ2dlci13aWR0aCc6ICczNnB4JyxcbiAgICAnbGF5b3V0LXplcm8tdHJpZ2dlci1oZWlnaHQnOiAnNDJweCcsXG4gICAgLy8gTGF5b3V0IGxpZ2h0IHRoZW1lXG4gICAgJ2xheW91dC1zaWRlci1iYWNrZ3JvdW5kLWxpZ2h0JzogJyNmZmYnLFxuICAgICdsYXlvdXQtdHJpZ2dlci1iYWNrZ3JvdW5kLWxpZ2h0JzogJyNmZmYnLFxuICAgICdsYXlvdXQtdHJpZ2dlci1jb2xvci1saWdodCc6ICdAdGV4dC1jb2xvcicsXG4gICAgLy8gei1pbmRleCBsaXN0LCBvcmRlciBieSBgei1pbmRleGBcbiAgICAnemluZGV4LWJhZGdlJzogJ2F1dG8nLFxuICAgICd6aW5kZXgtdGFibGUtZml4ZWQnOiAnMicsXG4gICAgJ3ppbmRleC1hZmZpeCc6ICcxMCcsXG4gICAgJ3ppbmRleC1iYWNrLXRvcCc6ICcxMCcsXG4gICAgJ3ppbmRleC1waWNrZXItcGFuZWwnOiAnMTAnLFxuICAgICd6aW5kZXgtcG9wdXAtY2xvc2UnOiAnMTAnLFxuICAgICd6aW5kZXgtbW9kYWwnOiAnMTAwMCcsXG4gICAgJ3ppbmRleC1tb2RhbC1tYXNrJzogJzEwMDAnLFxuICAgICd6aW5kZXgtbWVzc2FnZSc6ICcxMDEwJyxcbiAgICAnemluZGV4LW5vdGlmaWNhdGlvbic6ICcxMDEwJyxcbiAgICAnemluZGV4LXBvcG92ZXInOiAnMTAzMCcsXG4gICAgJ3ppbmRleC1kcm9wZG93bic6ICcxMDUwJyxcbiAgICAnemluZGV4LXBpY2tlcic6ICcxMDUwJyxcbiAgICAnemluZGV4LXBvcG9jb25maXJtJzogJzEwNjAnLFxuICAgICd6aW5kZXgtdG9vbHRpcCc6ICcxMDcwJyxcbiAgICAnemluZGV4LWltYWdlJzogJzEwODAnLFxuICAgIC8vIEFuaW1hdGlvblxuICAgICdhbmltYXRpb24tZHVyYXRpb24tc2xvdyc6ICcwLjNzJyxcbiAgICAvLyBNb2RhbFxuICAgICdhbmltYXRpb24tZHVyYXRpb24tYmFzZSc6ICcwLjJzJyxcbiAgICAnYW5pbWF0aW9uLWR1cmF0aW9uLWZhc3QnOiAnMC4xcycsXG4gICAgLy8gVG9vbHRpcFxuICAgIC8vQ29sbGFwc2VQYW5lbFxuICAgICdjb2xsYXBzZS1wYW5lbC1ib3JkZXItcmFkaXVzJzogJ0Bib3JkZXItcmFkaXVzLWJhc2UnLFxuICAgIC8vRHJvcGRvd25cbiAgICAnZHJvcGRvd24tbWVudS1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdkcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nJzogJzVweCcsXG4gICAgJ2Ryb3Bkb3duLWVkZ2UtY2hpbGQtdmVydGljYWwtcGFkZGluZyc6ICc0cHgnLFxuICAgICdkcm9wZG93bi1mb250LXNpemUnOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnZHJvcGRvd24tbGluZS1oZWlnaHQnOiAnMjJweCcsXG4gICAgLy8gRm9ybVxuICAgIC8vIC0tLVxuICAgICdsYWJlbC1yZXF1aXJlZC1jb2xvcic6ICdAaGlnaGxpZ2h0LWNvbG9yJyxcbiAgICAnbGFiZWwtY29sb3InOiAnQGhlYWRpbmctY29sb3InLFxuICAgICdmb3JtLXdhcm5pbmctaW5wdXQtYmcnOiAnQGlucHV0LWJnJyxcbiAgICAnZm9ybS1pdGVtLW1hcmdpbi1ib3R0b20nOiAnMjRweCcsXG4gICAgJ2Zvcm0taXRlbS10cmFpbGluZy1jb2xvbic6ICd0cnVlJyxcbiAgICAnZm9ybS12ZXJ0aWNhbC1sYWJlbC1wYWRkaW5nJzogJzAgMCA4cHgnLFxuICAgICdmb3JtLXZlcnRpY2FsLWxhYmVsLW1hcmdpbic6ICcwJyxcbiAgICAnZm9ybS1pdGVtLWxhYmVsLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLWJhc2UnLFxuICAgICdmb3JtLWl0ZW0tbGFiZWwtaGVpZ2h0JzogJ0BpbnB1dC1oZWlnaHQtYmFzZScsXG4gICAgJ2Zvcm0taXRlbS1sYWJlbC1jb2xvbi1tYXJnaW4tcmlnaHQnOiAnOHB4JyxcbiAgICAnZm9ybS1pdGVtLWxhYmVsLWNvbG9uLW1hcmdpbi1sZWZ0JzogJzJweCcsXG4gICAgJ2Zvcm0tZXJyb3ItaW5wdXQtYmcnOiAnQGlucHV0LWJnJyxcbiAgICAvLyBJbnB1dFxuICAgIC8vIC0tLVxuICAgICdpbnB1dC1oZWlnaHQtYmFzZSc6ICdAaGVpZ2h0LWJhc2UnLFxuICAgICdpbnB1dC1oZWlnaHQtbGcnOiAnQGhlaWdodC1sZycsXG4gICAgJ2lucHV0LWhlaWdodC1zbSc6ICdAaGVpZ2h0LXNtJyxcbiAgICAnaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsJzogJ0Bjb250cm9sLXBhZGRpbmctaG9yaXpvbnRhbCAtIDFweCcsXG4gICAgJ2lucHV0LXBhZGRpbmctaG9yaXpvbnRhbC1iYXNlJzogJ0BpbnB1dC1wYWRkaW5nLWhvcml6b250YWwnLFxuICAgICdpbnB1dC1wYWRkaW5nLWhvcml6b250YWwtc20nOiAnQGNvbnRyb2wtcGFkZGluZy1ob3Jpem9udGFsLXNtIC0gMXB4JyxcbiAgICAnaW5wdXQtcGFkZGluZy1ob3Jpem9udGFsLWxnJzogJ0BpbnB1dC1wYWRkaW5nLWhvcml6b250YWwnLFxuICAgICdpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UnOiBcIm1heChcXG4gIChyb3VuZCgoKEBpbnB1dC1oZWlnaHQtYmFzZSAtIEBmb250LXNpemUtYmFzZSAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTApIC1cXG4gICAgQGJvcmRlci13aWR0aC1iYXNlLFxcbiAgM3B4XFxuKVwiLFxuICAgICdpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLXNtJzogXCJtYXgoXFxuICAocm91bmQoKChAaW5wdXQtaGVpZ2h0LXNtIC0gQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpIC8gMikgKiAxMCkgLyAxMCkgLVxcbiAgICBAYm9yZGVyLXdpZHRoLWJhc2UsXFxuICAwXFxuKVwiLFxuICAgICdpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWxnJzogXCIoXFxuICAgIGNlaWwoKChAaW5wdXQtaGVpZ2h0LWxnIC0gQGZvbnQtc2l6ZS1sZyAqIEBsaW5lLWhlaWdodC1iYXNlKSAvIDIpICogMTApIC8gMTBcXG4gICkgLSBAYm9yZGVyLXdpZHRoLWJhc2VcIixcbiAgICAnaW5wdXQtcGxhY2Vob2xkZXItY29sb3InOiAnaHN2KDAsIDAsIDc1JSknLFxuICAgICdpbnB1dC1jb2xvcic6ICdAdGV4dC1jb2xvcicsXG4gICAgJ2lucHV0LWljb24tY29sb3InOiAnQGlucHV0LWNvbG9yJyxcbiAgICAnaW5wdXQtYm9yZGVyLWNvbG9yJzogJ0Bib3JkZXItY29sb3ItYmFzZScsXG4gICAgJ2lucHV0LWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2lucHV0LW51bWJlci1ob3Zlci1ib3JkZXItY29sb3InOiAnQGlucHV0LWhvdmVyLWJvcmRlci1jb2xvcicsXG4gICAgJ2lucHV0LW51bWJlci1oYW5kbGVyLWFjdGl2ZS1iZyc6ICcjZjRmNGY0JyxcbiAgICAnaW5wdXQtbnVtYmVyLWhhbmRsZXItaG92ZXItYmcnOiAnQHByaW1hcnktNScsXG4gICAgJ2lucHV0LW51bWJlci1oYW5kbGVyLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2lucHV0LW51bWJlci1oYW5kbGVyLWJvcmRlci1jb2xvcic6ICdAYm9yZGVyLWNvbG9yLWJhc2UnLFxuICAgICdpbnB1dC1hZGRvbi1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1saWdodCcsXG4gICAgJ2lucHV0LWhvdmVyLWJvcmRlci1jb2xvcic6ICdAcHJpbWFyeS01JyxcbiAgICAnaW5wdXQtZGlzYWJsZWQtYmcnOiAnQGRpc2FibGVkLWJnJyxcbiAgICAnaW5wdXQtb3V0bGluZS1vZmZzZXQnOiAnMCAwJyxcbiAgICAnaW5wdXQtaWNvbi1ob3Zlci1jb2xvcic6ICdmYWRlKEBibGFjaywgODUlKScsXG4gICAgJ2lucHV0LWRpc2FibGVkLWNvbG9yJzogJ0BkaXNhYmxlZC1jb2xvcicsXG4gICAgLy8gTWVudGlvbnNcbiAgICAvLyAtLS1cbiAgICAnbWVudGlvbnMtZHJvcGRvd24tYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnbWVudGlvbnMtZHJvcGRvd24tbWVudS1pdGVtLWhvdmVyLWJnJzogJ0BtZW50aW9ucy1kcm9wZG93bi1iZycsXG4gICAgLy8gU2VsZWN0XG4gICAgLy8gLS0tXG4gICAgJ3NlbGVjdC1ib3JkZXItY29sb3InOiAnQGJvcmRlci1jb2xvci1iYXNlJyxcbiAgICAnc2VsZWN0LWl0ZW0tc2VsZWN0ZWQtY29sb3InOiAnQHRleHQtY29sb3InLFxuICAgICdzZWxlY3QtaXRlbS1zZWxlY3RlZC1mb250LXdlaWdodCc6ICc2MDAnLFxuICAgICdzZWxlY3QtZHJvcGRvd24tYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnc2VsZWN0LWl0ZW0tc2VsZWN0ZWQtYmcnOiAnQHByaW1hcnktMScsXG4gICAgJ3NlbGVjdC1pdGVtLWFjdGl2ZS1iZyc6ICdAaXRlbS1ob3Zlci1iZycsXG4gICAgJ3NlbGVjdC1kcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nJzogJ0Bkcm9wZG93bi12ZXJ0aWNhbC1wYWRkaW5nJyxcbiAgICAnc2VsZWN0LWRyb3Bkb3duLWZvbnQtc2l6ZSc6ICdAZHJvcGRvd24tZm9udC1zaXplJyxcbiAgICAnc2VsZWN0LWRyb3Bkb3duLWxpbmUtaGVpZ2h0JzogJ0Bkcm9wZG93bi1saW5lLWhlaWdodCcsXG4gICAgJ3NlbGVjdC1kcm9wZG93bi1oZWlnaHQnOiAnMzJweCcsXG4gICAgJ3NlbGVjdC1iYWNrZ3JvdW5kJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3NlbGVjdC1jbGVhci1iYWNrZ3JvdW5kJzogJ0BzZWxlY3QtYmFja2dyb3VuZCcsXG4gICAgJ3NlbGVjdC1zZWxlY3Rpb24taXRlbS1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1iYXNlJyxcbiAgICAnc2VsZWN0LXNlbGVjdGlvbi1pdGVtLWJvcmRlci1jb2xvcic6ICdAYm9yZGVyLWNvbG9yLXNwbGl0JyxcbiAgICAnc2VsZWN0LXNpbmdsZS1pdGVtLWhlaWdodC1sZyc6ICc0MHB4JyxcbiAgICAnc2VsZWN0LW11bHRpcGxlLWl0ZW0taGVpZ2h0JzogJ0BpbnB1dC1oZWlnaHQtYmFzZSAtIEBpbnB1dC1wYWRkaW5nLXZlcnRpY2FsLWJhc2UgKiAyJyxcbiAgICAvLyBOb3JtYWwgMjRweFxuICAgICdzZWxlY3QtbXVsdGlwbGUtaXRlbS1oZWlnaHQtbGcnOiAnMzJweCcsXG4gICAgJ3NlbGVjdC1tdWx0aXBsZS1pdGVtLXNwYWNpbmctaGFsZic6ICdjZWlsKChAaW5wdXQtcGFkZGluZy12ZXJ0aWNhbC1iYXNlIC8gMikpJyxcbiAgICAnc2VsZWN0LW11bHRpcGxlLWRpc2FibGVkLWJhY2tncm91bmQnOiAnQGlucHV0LWRpc2FibGVkLWJnJyxcbiAgICAnc2VsZWN0LW11bHRpcGxlLWl0ZW0tZGlzYWJsZWQtY29sb3InOiAnI2JmYmZiZicsXG4gICAgJ3NlbGVjdC1tdWx0aXBsZS1pdGVtLWRpc2FibGVkLWJvcmRlci1jb2xvcic6ICdAc2VsZWN0LWJvcmRlci1jb2xvcicsXG4gICAgLy8gQ2FzY2FkZXJcbiAgICAvLyAtLS1cbiAgICAnY2FzY2FkZXItYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnY2FzY2FkZXItaXRlbS1zZWxlY3RlZC1iZyc6ICdAcHJpbWFyeS0xJyxcbiAgICAnY2FzY2FkZXItbWVudS1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdjYXNjYWRlci1tZW51LWJvcmRlci1jb2xvci1zcGxpdCc6ICdAYm9yZGVyLWNvbG9yLXNwbGl0JyxcbiAgICAvLyBDYXNjYWRlclxuICAgIC8vIC0tLS1cbiAgICAnY2FzY2FkZXItZHJvcGRvd24tdmVydGljYWwtcGFkZGluZyc6ICdAZHJvcGRvd24tdmVydGljYWwtcGFkZGluZycsXG4gICAgJ2Nhc2NhZGVyLWRyb3Bkb3duLWVkZ2UtY2hpbGQtdmVydGljYWwtcGFkZGluZyc6ICdAZHJvcGRvd24tZWRnZS1jaGlsZC12ZXJ0aWNhbC1wYWRkaW5nJyxcbiAgICAnY2FzY2FkZXItZHJvcGRvd24tZm9udC1zaXplJzogJ0Bkcm9wZG93bi1mb250LXNpemUnLFxuICAgICdjYXNjYWRlci1kcm9wZG93bi1saW5lLWhlaWdodCc6ICdAZHJvcGRvd24tbGluZS1oZWlnaHQnLFxuICAgIC8vIEFuY2hvclxuICAgIC8vIC0tLVxuICAgICdhbmNob3ItYmcnOiAndHJhbnNwYXJlbnQnLFxuICAgICdhbmNob3ItYm9yZGVyLWNvbG9yJzogJ0Bib3JkZXItY29sb3Itc3BsaXQnLFxuICAgICdhbmNob3ItbGluay10b3AnOiAnNHB4JyxcbiAgICAnYW5jaG9yLWxpbmstbGVmdCc6ICcxNnB4JyxcbiAgICAnYW5jaG9yLWxpbmstcGFkZGluZyc6ICdAYW5jaG9yLWxpbmstdG9wIDAgQGFuY2hvci1saW5rLXRvcCBAYW5jaG9yLWxpbmstbGVmdCcsXG4gICAgLy8gVG9vbHRpcFxuICAgIC8vIC0tLVxuICAgIC8vIFRvb2x0aXAgbWF4IHdpZHRoXG4gICAgJ3Rvb2x0aXAtbWF4LXdpZHRoJzogJzI1MHB4JyxcbiAgICAvLyBUb29sdGlwIHRleHQgY29sb3JcbiAgICAndG9vbHRpcC1jb2xvcic6ICcjZmZmJyxcbiAgICAvLyBUb29sdGlwIGJhY2tncm91bmQgY29sb3JcbiAgICAndG9vbHRpcC1iZyc6ICdyZ2JhKDAsIDAsIDAsIDAuNzUpJyxcbiAgICAvLyBUb29sdGlwIGFycm93IHdpZHRoXG4gICAgJ3Rvb2x0aXAtYXJyb3ctd2lkdGgnOiAnOHB4ICogc3FydCgyKScsXG4gICAgLy8gVG9vbHRpcCBkaXN0YW5jZSB3aXRoIHRyaWdnZXJcbiAgICAndG9vbHRpcC1kaXN0YW5jZSc6ICdAdG9vbHRpcC1hcnJvdy13aWR0aCAtIDFweCArIDRweCcsXG4gICAgLy8gVG9vbHRpcCBhcnJvdyBjb2xvclxuICAgICd0b29sdGlwLWFycm93LWNvbG9yJzogJ0B0b29sdGlwLWJnJyxcbiAgICAndG9vbHRpcC1ib3JkZXItcmFkaXVzJzogJ0Bib3JkZXItcmFkaXVzLWJhc2UnLFxuICAgIC8vIFBvcG92ZXJcbiAgICAvLyAtLS1cbiAgICAvLyBQb3BvdmVyIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuICAgICdwb3BvdmVyLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgLy8gUG9wb3ZlciB0ZXh0IGNvbG9yXG4gICAgJ3BvcG92ZXItY29sb3InOiAnQHRleHQtY29sb3InLFxuICAgIC8vIFBvcG92ZXIgbWF4aW11bSB3aWR0aFxuICAgICdwb3BvdmVyLW1pbi13aWR0aCc6ICcxNzdweCcsXG4gICAgJ3BvcG92ZXItbWluLWhlaWdodCc6ICczMnB4JyxcbiAgICAvLyBQb3BvdmVyIGFycm93IHdpZHRoXG4gICAgJ3BvcG92ZXItYXJyb3ctd2lkdGgnOiAnQHRvb2x0aXAtYXJyb3ctd2lkdGgnLFxuICAgIC8vIFBvcG92ZXIgYXJyb3cgY29sb3JcbiAgICAncG9wb3Zlci1hcnJvdy1jb2xvcic6ICdAcG9wb3Zlci1iZycsXG4gICAgLy8gUG9wb3ZlciBvdXRlciBhcnJvdyB3aWR0aFxuICAgIC8vIFBvcG92ZXIgb3V0ZXIgYXJyb3cgY29sb3JcbiAgICAncG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcic6ICdAcG9wb3Zlci1iZycsXG4gICAgLy8gUG9wb3ZlciBkaXN0YW5jZSB3aXRoIHRyaWdnZXJcbiAgICAncG9wb3Zlci1kaXN0YW5jZSc6ICdAcG9wb3Zlci1hcnJvdy13aWR0aCArIDRweCcsXG4gICAgJ3BvcG92ZXItcGFkZGluZy1ob3Jpem9udGFsJzogJ0BwYWRkaW5nLW1kJyxcbiAgICAvLyBNb2RhbFxuICAgIC8vIC0tXG4gICAgJ21vZGFsLWhlYWRlci1wYWRkaW5nLXZlcnRpY2FsJzogJ0BwYWRkaW5nLW1kJyxcbiAgICAnbW9kYWwtaGVhZGVyLXBhZGRpbmctaG9yaXpvbnRhbCc6ICdAcGFkZGluZy1sZycsXG4gICAgJ21vZGFsLWJvZHktcGFkZGluZyc6ICdAcGFkZGluZy1sZycsXG4gICAgJ21vZGFsLWhlYWRlci1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdtb2RhbC1oZWFkZXItcGFkZGluZyc6ICdAbW9kYWwtaGVhZGVyLXBhZGRpbmctdmVydGljYWwgQG1vZGFsLWhlYWRlci1wYWRkaW5nLWhvcml6b250YWwnLFxuICAgICdtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoJzogJ0Bib3JkZXItd2lkdGgtYmFzZScsXG4gICAgJ21vZGFsLWhlYWRlci1ib3JkZXItc3R5bGUnOiAnQGJvcmRlci1zdHlsZS1iYXNlJyxcbiAgICAnbW9kYWwtaGVhZGVyLXRpdGxlLWxpbmUtaGVpZ2h0JzogJzIycHgnLFxuICAgICdtb2RhbC1oZWFkZXItdGl0bGUtZm9udC1zaXplJzogJ0Bmb250LXNpemUtbGcnLFxuICAgICdtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yLXNwbGl0JzogJ0Bib3JkZXItY29sb3Itc3BsaXQnLFxuICAgICdtb2RhbC1oZWFkZXItY2xvc2Utc2l6ZSc6ICdAbW9kYWwtaGVhZGVyLXRpdGxlLWxpbmUtaGVpZ2h0ICsgMiAqIEBtb2RhbC1oZWFkZXItcGFkZGluZy12ZXJ0aWNhbCcsXG4gICAgJ21vZGFsLWNvbnRlbnQtYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnbW9kYWwtaGVhZGluZy1jb2xvcic6ICdAaGVhZGluZy1jb2xvcicsXG4gICAgJ21vZGFsLWNsb3NlLWNvbG9yJzogJ0B0ZXh0LWNvbG9yLXNlY29uZGFyeScsXG4gICAgJ21vZGFsLWZvb3Rlci1iZyc6ICd0cmFuc3BhcmVudCcsXG4gICAgJ21vZGFsLWZvb3Rlci1ib3JkZXItY29sb3Itc3BsaXQnOiAnQGJvcmRlci1jb2xvci1zcGxpdCcsXG4gICAgJ21vZGFsLWZvb3Rlci1ib3JkZXItc3R5bGUnOiAnQGJvcmRlci1zdHlsZS1iYXNlJyxcbiAgICAnbW9kYWwtZm9vdGVyLXBhZGRpbmctdmVydGljYWwnOiAnMTBweCcsXG4gICAgJ21vZGFsLWZvb3Rlci1wYWRkaW5nLWhvcml6b250YWwnOiAnMTZweCcsXG4gICAgJ21vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGgnOiAnQGJvcmRlci13aWR0aC1iYXNlJyxcbiAgICAnbW9kYWwtbWFzay1iZyc6ICdmYWRlKEBibGFjaywgNDUlKScsXG4gICAgJ21vZGFsLWNvbmZpcm0tYm9keS1wYWRkaW5nJzogJzMycHggMzJweCAyNHB4JyxcbiAgICAnbW9kYWwtY29uZmlybS10aXRsZS1mb250LXNpemUnOiAnQGZvbnQtc2l6ZS1sZycsXG4gICAgJ21vZGFsLWJvcmRlci1yYWRpdXMnOiAnQGJvcmRlci1yYWRpdXMtYmFzZScsXG4gICAgLy8gUHJvZ3Jlc3NcbiAgICAvLyAtLVxuICAgICdwcm9ncmVzcy1kZWZhdWx0LWNvbG9yJzogJ0Bwcm9jZXNzaW5nLWNvbG9yJyxcbiAgICAncHJvZ3Jlc3MtcmVtYWluaW5nLWNvbG9yJzogJ0BiYWNrZ3JvdW5kLWNvbG9yLWJhc2UnLFxuICAgICdwcm9ncmVzcy1pbmZvLXRleHQtY29sb3InOiAnQHByb2dyZXNzLXRleHQtY29sb3InLFxuICAgICdwcm9ncmVzcy1yYWRpdXMnOiAnMTAwcHgnLFxuICAgICdwcm9ncmVzcy1zdGVwcy1pdGVtLWJnJzogJyNmM2YzZjMnLFxuICAgICdwcm9ncmVzcy10ZXh0LWZvbnQtc2l6ZSc6ICcxZW0nLFxuICAgICdwcm9ncmVzcy10ZXh0LWNvbG9yJzogJ0B0ZXh0LWNvbG9yJyxcbiAgICAvLyBUaGlzIGlzIGZvciBjaXJjbGUgdGV4dCBjb2xvciwgc2hvdWxkIGJlIHJlbmFtZWQgYmV0dGVyXG4gICAgJ3Byb2dyZXNzLWNpcmNsZS10ZXh0LWZvbnQtc2l6ZSc6ICcxZW0nLFxuICAgIC8vIE1lbnVcbiAgICAvLyAtLS1cbiAgICAnbWVudS1pbmxpbmUtdG9wbGV2ZWwtaXRlbS1oZWlnaHQnOiAnNDBweCcsXG4gICAgJ21lbnUtaXRlbS1oZWlnaHQnOiAnNDBweCcsXG4gICAgJ21lbnUtaXRlbS1ncm91cC1oZWlnaHQnOiAnQGxpbmUtaGVpZ2h0LWJhc2UnLFxuICAgICdtZW51LWNvbGxhcHNlZC13aWR0aCc6ICc4MHB4JyxcbiAgICAnbWVudS1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdtZW51LXBvcHVwLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ21lbnUtaXRlbS1jb2xvcic6ICdAdGV4dC1jb2xvcicsXG4gICAgJ21lbnUtaW5saW5lLXN1Ym1lbnUtYmcnOiAnQGJhY2tncm91bmQtY29sb3ItbGlnaHQnLFxuICAgICdtZW51LWhpZ2hsaWdodC1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ21lbnUtaGlnaGxpZ2h0LWRhbmdlci1jb2xvcic6ICdAZXJyb3ItY29sb3InLFxuICAgICdtZW51LWl0ZW0tYWN0aXZlLWJnJzogJ0BwcmltYXJ5LTEnLFxuICAgICdtZW51LWl0ZW0tYWN0aXZlLWRhbmdlci1iZyc6ICdAcmVkLTEnLFxuICAgICdtZW51LWl0ZW0tYWN0aXZlLWJvcmRlci13aWR0aCc6ICczcHgnLFxuICAgICdtZW51LWl0ZW0tZ3JvdXAtdGl0bGUtY29sb3InOiAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAnbWVudS1pdGVtLXZlcnRpY2FsLW1hcmdpbic6ICc0cHgnLFxuICAgICdtZW51LWl0ZW0tZm9udC1zaXplJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgJ21lbnUtaXRlbS1ib3VuZGFyeS1tYXJnaW4nOiAnOHB4JyxcbiAgICAnbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCc6ICcyMHB4JyxcbiAgICAnbWVudS1pdGVtLXBhZGRpbmcnOiAnMCBAbWVudS1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCcsXG4gICAgJ21lbnUtaG9yaXpvbnRhbC1saW5lLWhlaWdodCc6ICc0NnB4JyxcbiAgICAnbWVudS1pY29uLW1hcmdpbi1yaWdodCc6ICcxMHB4JyxcbiAgICAnbWVudS1pY29uLXNpemUnOiAnQG1lbnUtaXRlbS1mb250LXNpemUnLFxuICAgICdtZW51LWljb24tc2l6ZS1sZyc6ICdAZm9udC1zaXplLWxnJyxcbiAgICAnbWVudS1pdGVtLWdyb3VwLXRpdGxlLWZvbnQtc2l6ZSc6ICdAbWVudS1pdGVtLWZvbnQtc2l6ZScsXG4gICAgLy8gZGFyayB0aGVtZVxuICAgICdtZW51LWRhcmstY29sb3InOiAnQHRleHQtY29sb3Itc2Vjb25kYXJ5LWRhcmsnLFxuICAgICdtZW51LWRhcmstZGFuZ2VyLWNvbG9yJzogJ0BlcnJvci1jb2xvcicsXG4gICAgJ21lbnUtZGFyay1iZyc6ICdAbGF5b3V0LWhlYWRlci1iYWNrZ3JvdW5kJyxcbiAgICAnbWVudS1kYXJrLWFycm93LWNvbG9yJzogJyNmZmYnLFxuICAgICdtZW51LWRhcmstaW5saW5lLXN1Ym1lbnUtYmcnOiAnIzAwMGMxNycsXG4gICAgJ21lbnUtZGFyay1oaWdobGlnaHQtY29sb3InOiAnI2ZmZicsXG4gICAgJ21lbnUtZGFyay1pdGVtLWFjdGl2ZS1iZyc6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ21lbnUtZGFyay1pdGVtLWFjdGl2ZS1kYW5nZXItYmcnOiAnQGVycm9yLWNvbG9yJyxcbiAgICAnbWVudS1kYXJrLXNlbGVjdGVkLWl0ZW0taWNvbi1jb2xvcic6ICdAd2hpdGUnLFxuICAgICdtZW51LWRhcmstc2VsZWN0ZWQtaXRlbS10ZXh0LWNvbG9yJzogJ0B3aGl0ZScsXG4gICAgJ21lbnUtZGFyay1pdGVtLWhvdmVyLWJnJzogJ3RyYW5zcGFyZW50JyxcbiAgICAvLyBTcGluXG4gICAgLy8gLS0tXG4gICAgJ3NwaW4tZG90LXNpemUtc20nOiAnMTRweCcsXG4gICAgJ3NwaW4tZG90LXNpemUnOiAnMjBweCcsXG4gICAgJ3NwaW4tZG90LXNpemUtbGcnOiAnMzJweCcsXG4gICAgLy8gVGFibGVcbiAgICAvLyAtLVxuICAgICd0YWJsZS1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICd0YWJsZS1oZWFkZXItYmcnOiAnQGJhY2tncm91bmQtY29sb3ItbGlnaHQnLFxuICAgICd0YWJsZS1oZWFkZXItY29sb3InOiAnQGhlYWRpbmctY29sb3InLFxuICAgICd0YWJsZS1oZWFkZXItc29ydC1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1iYXNlJyxcbiAgICAndGFibGUtYm9keS1zb3J0LWJnJzogJyNmYWZhZmEnLFxuICAgICd0YWJsZS1yb3ctaG92ZXItYmcnOiAnQGJhY2tncm91bmQtY29sb3ItbGlnaHQnLFxuICAgICd0YWJsZS1zZWxlY3RlZC1yb3ctY29sb3InOiAnaW5oZXJpdCcsXG4gICAgJ3RhYmxlLXNlbGVjdGVkLXJvdy1iZyc6ICdAcHJpbWFyeS0xJyxcbiAgICAndGFibGUtYm9keS1zZWxlY3RlZC1zb3J0LWJnJzogJ0B0YWJsZS1zZWxlY3RlZC1yb3ctYmcnLFxuICAgICd0YWJsZS1zZWxlY3RlZC1yb3ctaG92ZXItYmcnOiAnZGFya2VuKEB0YWJsZS1zZWxlY3RlZC1yb3ctYmcsIDIlKScsXG4gICAgJ3RhYmxlLWV4cGFuZGVkLXJvdy1iZyc6ICcjZmJmYmZiJyxcbiAgICAndGFibGUtcGFkZGluZy12ZXJ0aWNhbCc6ICcxNnB4JyxcbiAgICAndGFibGUtcGFkZGluZy1ob3Jpem9udGFsJzogJzE2cHgnLFxuICAgICd0YWJsZS1wYWRkaW5nLXZlcnRpY2FsLW1kJzogJyhAdGFibGUtcGFkZGluZy12ZXJ0aWNhbCAqIDMgLyA0KScsXG4gICAgJ3RhYmxlLXBhZGRpbmctaG9yaXpvbnRhbC1tZCc6ICcoQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbCAvIDIpJyxcbiAgICAndGFibGUtcGFkZGluZy12ZXJ0aWNhbC1zbSc6ICcoQHRhYmxlLXBhZGRpbmctdmVydGljYWwgLyAyKScsXG4gICAgJ3RhYmxlLXBhZGRpbmctaG9yaXpvbnRhbC1zbSc6ICcoQHRhYmxlLXBhZGRpbmctaG9yaXpvbnRhbCAvIDIpJyxcbiAgICAndGFibGUtYm9yZGVyLWNvbG9yJzogJ0Bib3JkZXItY29sb3Itc3BsaXQnLFxuICAgICd0YWJsZS1ib3JkZXItcmFkaXVzLWJhc2UnOiAnQGJvcmRlci1yYWRpdXMtYmFzZScsXG4gICAgJ3RhYmxlLWZvb3Rlci1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1saWdodCcsXG4gICAgJ3RhYmxlLWZvb3Rlci1jb2xvcic6ICdAaGVhZGluZy1jb2xvcicsXG4gICAgJ3RhYmxlLWhlYWRlci1iZy1zbSc6ICdAdGFibGUtaGVhZGVyLWJnJyxcbiAgICAndGFibGUtZm9udC1zaXplJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgJ3RhYmxlLWZvbnQtc2l6ZS1tZCc6ICdAdGFibGUtZm9udC1zaXplJyxcbiAgICAndGFibGUtZm9udC1zaXplLXNtJzogJ0B0YWJsZS1mb250LXNpemUnLFxuICAgICd0YWJsZS1oZWFkZXItY2VsbC1zcGxpdC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuMDYpJyxcbiAgICAvLyBTb3J0ZXJcbiAgICAvLyBMZWdhY3k6IGB0YWJsZS1oZWFkZXItc29ydC1hY3RpdmUtYmdgIGlzIHVzZWQgZm9yIGhvdmVyIG5vdCByZWFsIGFjdGl2ZVxuICAgICd0YWJsZS1oZWFkZXItc29ydC1hY3RpdmUtYmcnOiAncmdiYSgwLCAwLCAwLCAwLjA0KScsXG4gICAgJ3RhYmxlLWZpeGVkLWhlYWRlci1zb3J0LWFjdGl2ZS1iZyc6ICdoc3YoMCwgMCwgOTYlKScsXG4gICAgLy8gRmlsdGVyXG4gICAgJ3RhYmxlLWhlYWRlci1maWx0ZXItYWN0aXZlLWJnJzogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICd0YWJsZS1maWx0ZXItYnRucy1iZyc6ICdpbmhlcml0JyxcbiAgICAndGFibGUtZmlsdGVyLWRyb3Bkb3duLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3RhYmxlLWV4cGFuZC1pY29uLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3RhYmxlLXNlbGVjdGlvbi1jb2x1bW4td2lkdGgnOiAnMzJweCcsXG4gICAgLy8gU3RpY2t5XG4gICAgJ3RhYmxlLXN0aWNreS1zY3JvbGwtYmFyLWJnJzogJ2ZhZGUoIzAwMCwgMzUlKScsXG4gICAgJ3RhYmxlLXN0aWNreS1zY3JvbGwtYmFyLXJhZGl1cyc6ICc0cHgnLFxuICAgIC8vIFRhZ1xuICAgIC8vIC0tXG4gICAgJ3RhZy1ib3JkZXItcmFkaXVzJzogJ0Bib3JkZXItcmFkaXVzLWJhc2UnLFxuICAgICd0YWctZGVmYXVsdC1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1saWdodCcsXG4gICAgJ3RhZy1kZWZhdWx0LWNvbG9yJzogJ0B0ZXh0LWNvbG9yJyxcbiAgICAndGFnLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLXNtJyxcbiAgICAndGFnLWxpbmUtaGVpZ2h0JzogJzIwcHgnLFxuICAgIC8vIFRpbWVQaWNrZXJcbiAgICAvLyAtLS1cbiAgICAncGlja2VyLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3BpY2tlci1iYXNpYy1jZWxsLWhvdmVyLWNvbG9yJzogJ0BpdGVtLWhvdmVyLWJnJyxcbiAgICAncGlja2VyLWJhc2ljLWNlbGwtYWN0aXZlLXdpdGgtcmFuZ2UtY29sb3InOiAnQHByaW1hcnktMScsXG4gICAgJ3BpY2tlci1iYXNpYy1jZWxsLWhvdmVyLXdpdGgtcmFuZ2UtY29sb3InOiAnbGlnaHRlbihAcHJpbWFyeS1jb2xvciwgMzUlKScsXG4gICAgJ3BpY2tlci1iYXNpYy1jZWxsLWRpc2FibGVkLWJnJzogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgICdwaWNrZXItYm9yZGVyLWNvbG9yJzogJ0Bib3JkZXItY29sb3Itc3BsaXQnLFxuICAgICdwaWNrZXItZGF0ZS1ob3Zlci1yYW5nZS1ib3JkZXItY29sb3InOiAnbGlnaHRlbihAcHJpbWFyeS1jb2xvciwgMjAlKScsXG4gICAgJ3BpY2tlci1kYXRlLWhvdmVyLXJhbmdlLWNvbG9yJzogJ0BwaWNrZXItYmFzaWMtY2VsbC1ob3Zlci13aXRoLXJhbmdlLWNvbG9yJyxcbiAgICAncGlja2VyLXRpbWUtcGFuZWwtY29sdW1uLXdpZHRoJzogJzU2cHgnLFxuICAgICdwaWNrZXItdGltZS1wYW5lbC1jb2x1bW4taGVpZ2h0JzogJzIyNHB4JyxcbiAgICAncGlja2VyLXRpbWUtcGFuZWwtY2VsbC1oZWlnaHQnOiAnMjhweCcsXG4gICAgJ3BpY2tlci1wYW5lbC1jZWxsLWhlaWdodCc6ICcyNHB4JyxcbiAgICAncGlja2VyLXBhbmVsLWNlbGwtd2lkdGgnOiAnMzZweCcsXG4gICAgJ3BpY2tlci10ZXh0LWhlaWdodCc6ICc0MHB4JyxcbiAgICAncGlja2VyLXBhbmVsLXdpdGhvdXQtdGltZS1jZWxsLWhlaWdodCc6ICc2NnB4JyxcbiAgICAvLyBDYWxlbmRhclxuICAgIC8vIC0tLVxuICAgICdjYWxlbmRhci1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdjYWxlbmRhci1pbnB1dC1iZyc6ICdAaW5wdXQtYmcnLFxuICAgICdjYWxlbmRhci1ib3JkZXItY29sb3InOiAnQGJvcmRlci1jb2xvci1pbnZlcnNlJyxcbiAgICAnY2FsZW5kYXItaXRlbS1hY3RpdmUtYmcnOiAnQGl0ZW0tYWN0aXZlLWJnJyxcbiAgICAnY2FsZW5kYXItY29sdW1uLWFjdGl2ZS1iZyc6ICdmYWRlKEBjYWxlbmRhci1pdGVtLWFjdGl2ZS1iZywgMjAlKScsXG4gICAgJ2NhbGVuZGFyLWZ1bGwtYmcnOiAnQGNhbGVuZGFyLWJnJyxcbiAgICAnY2FsZW5kYXItZnVsbC1wYW5lbC1iZyc6ICdAY2FsZW5kYXItZnVsbC1iZycsXG4gICAgLy8gQ2Fyb3VzZWxcbiAgICAvLyAtLS1cbiAgICAnY2Fyb3VzZWwtZG90LXdpZHRoJzogJzE2cHgnLFxuICAgICdjYXJvdXNlbC1kb3QtaGVpZ2h0JzogJzNweCcsXG4gICAgJ2Nhcm91c2VsLWRvdC1hY3RpdmUtd2lkdGgnOiAnMjRweCcsXG4gICAgLy8gQmFkZ2VcbiAgICAvLyAtLS1cbiAgICAnYmFkZ2UtaGVpZ2h0JzogJzIwcHgnLFxuICAgICdiYWRnZS1oZWlnaHQtc20nOiAnMTRweCcsXG4gICAgJ2JhZGdlLWRvdC1zaXplJzogJzZweCcsXG4gICAgJ2JhZGdlLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLXNtJyxcbiAgICAnYmFkZ2UtZm9udC1zaXplLXNtJzogJ0Bmb250LXNpemUtc20nLFxuICAgICdiYWRnZS1mb250LXdlaWdodCc6ICdub3JtYWwnLFxuICAgICdiYWRnZS1zdGF0dXMtc2l6ZSc6ICc2cHgnLFxuICAgICdiYWRnZS10ZXh0LWNvbG9yJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2JhZGdlLWNvbG9yJzogJ0BoaWdobGlnaHQtY29sb3InLFxuICAgIC8vIFJhdGVcbiAgICAvLyAtLS1cbiAgICAncmF0ZS1zdGFyLWNvbG9yJzogJ0B5ZWxsb3ctNicsXG4gICAgJ3JhdGUtc3Rhci1iZyc6ICdAYm9yZGVyLWNvbG9yLXNwbGl0JyxcbiAgICAncmF0ZS1zdGFyLXNpemUnOiAnMjBweCcsXG4gICAgJ3JhdGUtc3Rhci1ob3Zlci1zY2FsZSc6ICdzY2FsZSgxLjEpJyxcbiAgICAvLyBDYXJkXG4gICAgLy8gLS0tXG4gICAgJ2NhcmQtaGVhZC1jb2xvcic6ICdAaGVhZGluZy1jb2xvcicsXG4gICAgJ2NhcmQtaGVhZC1iYWNrZ3JvdW5kJzogJ3RyYW5zcGFyZW50JyxcbiAgICAnY2FyZC1oZWFkLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLWxnJyxcbiAgICAnY2FyZC1oZWFkLWZvbnQtc2l6ZS1zbSc6ICdAZm9udC1zaXplLWJhc2UnLFxuICAgICdjYXJkLWhlYWQtcGFkZGluZyc6ICcxNnB4JyxcbiAgICAnY2FyZC1oZWFkLXBhZGRpbmctc20nOiAnKEBjYXJkLWhlYWQtcGFkZGluZyAvIDIpJyxcbiAgICAnY2FyZC1oZWFkLWhlaWdodCc6ICc0OHB4JyxcbiAgICAnY2FyZC1oZWFkLWhlaWdodC1zbSc6ICczNnB4JyxcbiAgICAnY2FyZC1pbm5lci1oZWFkLXBhZGRpbmcnOiAnMTJweCcsXG4gICAgJ2NhcmQtcGFkZGluZy1iYXNlJzogJzI0cHgnLFxuICAgICdjYXJkLXBhZGRpbmctYmFzZS1zbSc6ICcoQGNhcmQtcGFkZGluZy1iYXNlIC8gMiknLFxuICAgICdjYXJkLWFjdGlvbnMtYmFja2dyb3VuZCc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdjYXJkLWFjdGlvbnMtbGktbWFyZ2luJzogJzEycHggMCcsXG4gICAgJ2NhcmQtc2tlbGV0b24tYmcnOiAnI2NmZDhkYycsXG4gICAgJ2NhcmQtYmFja2dyb3VuZCc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdjYXJkLXNoYWRvdyc6IFwiMCAxcHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcXG4gIDAgNXB4IDEycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOSlcIixcbiAgICAnY2FyZC1yYWRpdXMnOiAnQGJvcmRlci1yYWRpdXMtYmFzZScsXG4gICAgJ2NhcmQtaGVhZC10YWJzLW1hcmdpbi1ib3R0b20nOiAnLTE3cHgnLFxuICAgICdjYXJkLWhlYWQtZXh0cmEtY29sb3InOiAnQHRleHQtY29sb3InLFxuICAgIC8vIENvbW1lbnRcbiAgICAvLyAtLS1cbiAgICAnY29tbWVudC1iZyc6ICdpbmhlcml0JyxcbiAgICAnY29tbWVudC1wYWRkaW5nLWJhc2UnOiAnQHBhZGRpbmctbWQgMCcsXG4gICAgJ2NvbW1lbnQtbmVzdC1pbmRlbnQnOiAnNDRweCcsXG4gICAgJ2NvbW1lbnQtZm9udC1zaXplLWJhc2UnOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnY29tbWVudC1mb250LXNpemUtc20nOiAnQGZvbnQtc2l6ZS1zbScsXG4gICAgJ2NvbW1lbnQtYXV0aG9yLW5hbWUtY29sb3InOiAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAnY29tbWVudC1hdXRob3ItdGltZS1jb2xvcic6ICcjY2NjJyxcbiAgICAnY29tbWVudC1hY3Rpb24tY29sb3InOiAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAnY29tbWVudC1hY3Rpb24taG92ZXItY29sb3InOiAnIzU5NTk1OScsXG4gICAgJ2NvbW1lbnQtYWN0aW9ucy1tYXJnaW4tYm90dG9tJzogJ2luaGVyaXQnLFxuICAgICdjb21tZW50LWFjdGlvbnMtbWFyZ2luLXRvcCc6ICdAbWFyZ2luLXNtJyxcbiAgICAnY29tbWVudC1jb250ZW50LWRldGFpbC1wLW1hcmdpbi1ib3R0b20nOiAnaW5oZXJpdCcsXG4gICAgLy8gVGFic1xuICAgIC8vIC0tLVxuICAgICd0YWJzLWNhcmQtaGVhZC1iYWNrZ3JvdW5kJzogJ0BiYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0JyxcbiAgICAndGFicy1jYXJkLWhlaWdodCc6ICc0MHB4JyxcbiAgICAndGFicy1jYXJkLWFjdGl2ZS1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ3RhYnMtY2FyZC1ob3Jpem9udGFsLXBhZGRpbmcnOiBcIihcXG4gICAgKEB0YWJzLWNhcmQtaGVpZ2h0IC0gZmxvb3IoQGZvbnQtc2l6ZS1iYXNlICogQGxpbmUtaGVpZ2h0LWJhc2UpKSAvIDJcXG4gICkgLSBAYm9yZGVyLXdpZHRoLWJhc2UgQHBhZGRpbmctbWRcIixcbiAgICAndGFicy1jYXJkLWhvcml6b250YWwtcGFkZGluZy1zbSc6ICc2cHggQHBhZGRpbmctbWQnLFxuICAgICd0YWJzLWNhcmQtaG9yaXpvbnRhbC1wYWRkaW5nLWxnJzogJzdweCBAcGFkZGluZy1tZCA2cHgnLFxuICAgICd0YWJzLXRpdGxlLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLWJhc2UnLFxuICAgICd0YWJzLXRpdGxlLWZvbnQtc2l6ZS1sZyc6ICdAZm9udC1zaXplLWxnJyxcbiAgICAndGFicy10aXRsZS1mb250LXNpemUtc20nOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAndGFicy1pbmstYmFyLWNvbG9yJzogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICAndGFicy1iYXItbWFyZ2luJzogJzAgMCBAbWFyZ2luLW1kIDAnLFxuICAgICd0YWJzLWhvcml6b250YWwtZ3V0dGVyJzogJzMycHgnLFxuICAgICd0YWJzLWhvcml6b250YWwtbWFyZ2luJzogJzAgMCAwIEB0YWJzLWhvcml6b250YWwtZ3V0dGVyJyxcbiAgICAndGFicy1ob3Jpem9udGFsLW1hcmdpbi1ydGwnOiAnMCAwIDAgMzJweCcsXG4gICAgJ3RhYnMtaG9yaXpvbnRhbC1wYWRkaW5nJzogJ0BwYWRkaW5nLXNtIDAnLFxuICAgICd0YWJzLWhvcml6b250YWwtcGFkZGluZy1sZyc6ICdAcGFkZGluZy1tZCAwJyxcbiAgICAndGFicy1ob3Jpem9udGFsLXBhZGRpbmctc20nOiAnQHBhZGRpbmcteHMgMCcsXG4gICAgJ3RhYnMtdmVydGljYWwtcGFkZGluZyc6ICdAcGFkZGluZy14cyBAcGFkZGluZy1sZycsXG4gICAgJ3RhYnMtdmVydGljYWwtbWFyZ2luJzogJ0BtYXJnaW4tbWQgMCAwIDAnLFxuICAgICd0YWJzLXNjcm9sbGluZy1zaXplJzogJzMycHgnLFxuICAgICd0YWJzLWhpZ2hsaWdodC1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ3RhYnMtaG92ZXItY29sb3InOiAnQHByaW1hcnktNScsXG4gICAgJ3RhYnMtYWN0aXZlLWNvbG9yJzogJ0BwcmltYXJ5LTcnLFxuICAgICd0YWJzLWNhcmQtZ3V0dGVyJzogJzJweCcsXG4gICAgJ3RhYnMtY2FyZC10YWItYWN0aXZlLWJvcmRlci10b3AnOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAvLyBCYWNrVG9wXG4gICAgLy8gLS0tXG4gICAgJ2JhY2stdG9wLWNvbG9yJzogJyNmZmYnLFxuICAgICdiYWNrLXRvcC1iZyc6ICdAdGV4dC1jb2xvci1zZWNvbmRhcnknLFxuICAgICdiYWNrLXRvcC1ob3Zlci1iZyc6ICdAdGV4dC1jb2xvcicsXG4gICAgLy8gQXZhdGFyXG4gICAgLy8gLS0tXG4gICAgJ2F2YXRhci1zaXplLWJhc2UnOiAnMzJweCcsXG4gICAgJ2F2YXRhci1zaXplLWxnJzogJzQwcHgnLFxuICAgICdhdmF0YXItc2l6ZS1zbSc6ICcyNHB4JyxcbiAgICAnYXZhdGFyLWZvbnQtc2l6ZS1iYXNlJzogJzE4cHgnLFxuICAgICdhdmF0YXItZm9udC1zaXplLWxnJzogJzI0cHgnLFxuICAgICdhdmF0YXItZm9udC1zaXplLXNtJzogJzE0cHgnLFxuICAgICdhdmF0YXItYmcnOiAnI2NjYycsXG4gICAgJ2F2YXRhci1jb2xvcic6ICcjZmZmJyxcbiAgICAnYXZhdGFyLWJvcmRlci1yYWRpdXMnOiAnQGJvcmRlci1yYWRpdXMtYmFzZScsXG4gICAgJ2F2YXRhci1ncm91cC1vdmVybGFwcGluZyc6ICctOHB4JyxcbiAgICAnYXZhdGFyLWdyb3VwLXNwYWNlJzogJzNweCcsXG4gICAgJ2F2YXRhci1ncm91cC1ib3JkZXItY29sb3InOiAnI2ZmZicsXG4gICAgLy8gU3dpdGNoXG4gICAgLy8gLS0tXG4gICAgJ3N3aXRjaC1oZWlnaHQnOiAnMjJweCcsXG4gICAgJ3N3aXRjaC1zbS1oZWlnaHQnOiAnMTZweCcsXG4gICAgJ3N3aXRjaC1taW4td2lkdGgnOiAnNDRweCcsXG4gICAgJ3N3aXRjaC1zbS1taW4td2lkdGgnOiAnMjhweCcsXG4gICAgJ3N3aXRjaC1kaXNhYmxlZC1vcGFjaXR5JzogJzAuNCcsXG4gICAgJ3N3aXRjaC1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ3N3aXRjaC1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdzd2l0Y2gtc2hhZG93LWNvbG9yJzogJ2ZhZGUoIzAwMjMwYiwgMjAlKScsXG4gICAgJ3N3aXRjaC1wYWRkaW5nJzogJzJweCcsXG4gICAgJ3N3aXRjaC1pbm5lci1tYXJnaW4tbWluJzogJ2NlaWwoQHN3aXRjaC1oZWlnaHQgKiAwLjMpJyxcbiAgICAnc3dpdGNoLWlubmVyLW1hcmdpbi1tYXgnOiAnY2VpbChAc3dpdGNoLWhlaWdodCAqIDEuMSknLFxuICAgICdzd2l0Y2gtc20taW5uZXItbWFyZ2luLW1pbic6ICdjZWlsKEBzd2l0Y2gtc20taGVpZ2h0ICogMC4zKScsXG4gICAgJ3N3aXRjaC1zbS1pbm5lci1tYXJnaW4tbWF4JzogJ2NlaWwoQHN3aXRjaC1zbS1oZWlnaHQgKiAxLjEpJyxcbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgLy8gLS0tXG4gICAgJ3BhZ2luYXRpb24taXRlbS1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdwYWdpbmF0aW9uLWl0ZW0tc2l6ZSc6ICdAaGVpZ2h0LWJhc2UnLFxuICAgICdwYWdpbmF0aW9uLWl0ZW0tc2l6ZS1zbSc6ICcyNHB4JyxcbiAgICAncGFnaW5hdGlvbi1mb250LWZhbWlseSc6ICdAZm9udC1mYW1pbHknLFxuICAgICdwYWdpbmF0aW9uLWZvbnQtd2VpZ2h0LWFjdGl2ZSc6ICc1MDAnLFxuICAgICdwYWdpbmF0aW9uLWl0ZW0tYmctYWN0aXZlJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3BhZ2luYXRpb24taXRlbS1saW5rLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3BhZ2luYXRpb24taXRlbS1kaXNhYmxlZC1jb2xvci1hY3RpdmUnOiAnQGRpc2FibGVkLWNvbG9yJyxcbiAgICAncGFnaW5hdGlvbi1pdGVtLWRpc2FibGVkLWJnLWFjdGl2ZSc6ICdAZGlzYWJsZWQtYWN0aXZlLWJnJyxcbiAgICAncGFnaW5hdGlvbi1pdGVtLWlucHV0LWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ3BhZ2luYXRpb24tbWluaS1vcHRpb25zLXNpemUtY2hhbmdlci10b3AnOiAnMHB4JyxcbiAgICAvLyBQYWdlSGVhZGVyXG4gICAgLy8gLS0tXG4gICAgJ3BhZ2UtaGVhZGVyLXBhZGRpbmcnOiAnQHBhZGRpbmctbGcnLFxuICAgICdwYWdlLWhlYWRlci1wYWRkaW5nLXZlcnRpY2FsJzogJ0BwYWRkaW5nLW1kJyxcbiAgICAncGFnZS1oZWFkZXItcGFkZGluZy1icmVhZGNydW1iJzogJ0BwYWRkaW5nLXNtJyxcbiAgICAncGFnZS1oZWFkZXItY29udGVudC1wYWRkaW5nLXZlcnRpY2FsJzogJ0BwYWRkaW5nLXNtJyxcbiAgICAncGFnZS1oZWFkZXItYmFjay1jb2xvcic6ICcjMDAwJyxcbiAgICAncGFnZS1oZWFkZXItZ2hvc3QtYmcnOiAnaW5oZXJpdCcsXG4gICAgJ3BhZ2UtaGVhZGVyLWhlYWRpbmctdGl0bGUnOiAnQGhlYWRpbmctNC1zaXplJyxcbiAgICAncGFnZS1oZWFkZXItaGVhZGluZy1zdWItdGl0bGUnOiAnMTRweCcsXG4gICAgJ3BhZ2UtaGVhZGVyLXRhYnMtdGFiLWZvbnQtc2l6ZSc6ICcxNnB4JyxcbiAgICAvLyBCcmVhZGNydW1iXG4gICAgLy8gLS0tXG4gICAgJ2JyZWFkY3J1bWItYmFzZS1jb2xvcic6ICdAdGV4dC1jb2xvci1zZWNvbmRhcnknLFxuICAgICdicmVhZGNydW1iLWxhc3QtaXRlbS1jb2xvcic6ICdAdGV4dC1jb2xvcicsXG4gICAgJ2JyZWFkY3J1bWItZm9udC1zaXplJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgJ2JyZWFkY3J1bWItaWNvbi1mb250LXNpemUnOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnYnJlYWRjcnVtYi1saW5rLWNvbG9yJzogJ0B0ZXh0LWNvbG9yLXNlY29uZGFyeScsXG4gICAgJ2JyZWFkY3J1bWItbGluay1jb2xvci1ob3Zlcic6ICdAdGV4dC1jb2xvcicsXG4gICAgJ2JyZWFkY3J1bWItc2VwYXJhdG9yLWNvbG9yJzogJ0B0ZXh0LWNvbG9yLXNlY29uZGFyeScsXG4gICAgJ2JyZWFkY3J1bWItc2VwYXJhdG9yLW1hcmdpbic6ICcwIEBwYWRkaW5nLXhzJyxcbiAgICAvLyBTbGlkZXJcbiAgICAvLyAtLS1cbiAgICAnc2xpZGVyLW1hcmdpbic6ICcxMHB4IDZweCAxMHB4JyxcbiAgICAnc2xpZGVyLXJhaWwtYmFja2dyb3VuZC1jb2xvcic6ICdAYmFja2dyb3VuZC1jb2xvci1iYXNlJyxcbiAgICAnc2xpZGVyLXJhaWwtYmFja2dyb3VuZC1jb2xvci1ob3Zlcic6ICcjZTFlMWUxJyxcbiAgICAnc2xpZGVyLXRyYWNrLWJhY2tncm91bmQtY29sb3InOiAnQHByaW1hcnktMycsXG4gICAgJ3NsaWRlci10cmFjay1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyJzogJ0BwcmltYXJ5LTQnLFxuICAgICdzbGlkZXItaGFuZGxlLWJvcmRlci13aWR0aCc6ICcycHgnLFxuICAgICdzbGlkZXItaGFuZGxlLWJhY2tncm91bmQtY29sb3InOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnc2xpZGVyLWhhbmRsZS1jb2xvcic6ICdAcHJpbWFyeS0zJyxcbiAgICAnc2xpZGVyLWhhbmRsZS1jb2xvci1ob3Zlcic6ICdAcHJpbWFyeS00JyxcbiAgICAnc2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1cyc6ICd0aW50KEBwcmltYXJ5LWNvbG9yLCAyMCUpJyxcbiAgICAnc2xpZGVyLWhhbmRsZS1jb2xvci1mb2N1cy1zaGFkb3cnOiAnZmFkZShAcHJpbWFyeS1jb2xvciwgMTIlKScsXG4gICAgJ3NsaWRlci1oYW5kbGUtY29sb3ItdG9vbHRpcC1vcGVuJzogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICAnc2xpZGVyLWhhbmRsZS1zaXplJzogJzE0cHgnLFxuICAgICdzbGlkZXItaGFuZGxlLW1hcmdpbi10b3AnOiAnLTVweCcsXG4gICAgJ3NsaWRlci1oYW5kbGUtbWFyZ2luLWxlZnQnOiAnLTVweCcsXG4gICAgJ3NsaWRlci1oYW5kbGUtc2hhZG93JzogJzAnLFxuICAgICdzbGlkZXItZG90LWJvcmRlci1jb2xvcic6ICdAYm9yZGVyLWNvbG9yLXNwbGl0JyxcbiAgICAnc2xpZGVyLWRvdC1ib3JkZXItY29sb3ItYWN0aXZlJzogJ3RpbnQoQHByaW1hcnktY29sb3IsIDUwJSknLFxuICAgICdzbGlkZXItZGlzYWJsZWQtY29sb3InOiAnQGRpc2FibGVkLWNvbG9yJyxcbiAgICAnc2xpZGVyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3InOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAvLyBUcmVlXG4gICAgLy8gLS0tXG4gICAgJ3RyZWUtYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAndHJlZS10aXRsZS1oZWlnaHQnOiAnMjRweCcsXG4gICAgJ3RyZWUtY2hpbGQtcGFkZGluZyc6ICcxOHB4JyxcbiAgICAndHJlZS1kaXJlY3Rvcnktc2VsZWN0ZWQtY29sb3InOiAnI2ZmZicsXG4gICAgJ3RyZWUtZGlyZWN0b3J5LXNlbGVjdGVkLWJnJzogJ0BwcmltYXJ5LWNvbG9yJyxcbiAgICAndHJlZS1ub2RlLWhvdmVyLWJnJzogJ0BpdGVtLWhvdmVyLWJnJyxcbiAgICAndHJlZS1ub2RlLXNlbGVjdGVkLWJnJzogJ0BwcmltYXJ5LTInLFxuICAgIC8vIENvbGxhcHNlXG4gICAgLy8gLS0tXG4gICAgJ2NvbGxhcHNlLWhlYWRlci1wYWRkaW5nJzogJ0BwYWRkaW5nLXNtIEBwYWRkaW5nLW1kJyxcbiAgICAnY29sbGFwc2UtaGVhZGVyLXBhZGRpbmctZXh0cmEnOiAnNDBweCcsXG4gICAgJ2NvbGxhcHNlLWhlYWRlci1iZyc6ICdAYmFja2dyb3VuZC1jb2xvci1saWdodCcsXG4gICAgJ2NvbGxhcHNlLWNvbnRlbnQtcGFkZGluZyc6ICdAcGFkZGluZy1tZCcsXG4gICAgJ2NvbGxhcHNlLWNvbnRlbnQtYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnY29sbGFwc2UtaGVhZGVyLWFycm93LWxlZnQnOiAnMTZweCcsXG4gICAgLy8gU2tlbGV0b25cbiAgICAvLyAtLS1cbiAgICAnc2tlbGV0b24tY29sb3InOiAncmdiYSgxOTAsIDE5MCwgMTkwLCAwLjIpJyxcbiAgICAnc2tlbGV0b24tdG8tY29sb3InOiAnc2hhZGUoQHNrZWxldG9uLWNvbG9yLCA1JSknLFxuICAgICdza2VsZXRvbi1wYXJhZ3JhcGgtbWFyZ2luLXRvcCc6ICcyOHB4JyxcbiAgICAnc2tlbGV0b24tcGFyYWdyYXBoLWxpLW1hcmdpbi10b3AnOiAnQG1hcmdpbi1tZCcsXG4gICAgJ3NrZWxldG9uLXBhcmFncmFwaC1saS1oZWlnaHQnOiAnMTZweCcsXG4gICAgJ3NrZWxldG9uLXRpdGxlLWhlaWdodCc6ICcxNnB4JyxcbiAgICAnc2tlbGV0b24tdGl0bGUtcGFyYWdyYXBoLW1hcmdpbi10b3AnOiAnQG1hcmdpbi1sZycsXG4gICAgLy8gVHJhbnNmZXJcbiAgICAvLyAtLS1cbiAgICAndHJhbnNmZXItaGVhZGVyLWhlaWdodCc6ICc0MHB4JyxcbiAgICAndHJhbnNmZXItaXRlbS1oZWlnaHQnOiAnQGhlaWdodC1iYXNlJyxcbiAgICAndHJhbnNmZXItZGlzYWJsZWQtYmcnOiAnQGRpc2FibGVkLWJnJyxcbiAgICAndHJhbnNmZXItbGlzdC1oZWlnaHQnOiAnMjAwcHgnLFxuICAgICd0cmFuc2Zlci1pdGVtLWhvdmVyLWJnJzogJ0BpdGVtLWhvdmVyLWJnJyxcbiAgICAndHJhbnNmZXItaXRlbS1zZWxlY3RlZC1ob3Zlci1iZyc6ICdkYXJrZW4oQGl0ZW0tYWN0aXZlLWJnLCAyJSknLFxuICAgICd0cmFuc2Zlci1pdGVtLXBhZGRpbmctdmVydGljYWwnOiAnNnB4JyxcbiAgICAndHJhbnNmZXItbGlzdC1zZWFyY2gtaWNvbi10b3AnOiAnMTJweCcsXG4gICAgLy8gTWVzc2FnZVxuICAgIC8vIC0tLVxuICAgICdtZXNzYWdlLW5vdGljZS1jb250ZW50LXBhZGRpbmcnOiAnMTBweCAxNnB4JyxcbiAgICAnbWVzc2FnZS1ub3RpY2UtY29udGVudC1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgIC8vIE1vdGlvblxuICAgIC8vIC0tLVxuICAgICd3YXZlLWFuaW1hdGlvbi13aWR0aCc6ICc2cHgnLFxuICAgIC8vIEFsZXJ0XG4gICAgLy8gLS0tXG4gICAgJ2FsZXJ0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yJzogdG9rZW4uY29sb3JTdWNjZXNzQm9yZGVyLFxuICAgICdhbGVydC1zdWNjZXNzLWJnLWNvbG9yJzogdG9rZW4uY29sb3JTdWNjZXNzQmcsXG4gICAgJ2FsZXJ0LXN1Y2Nlc3MtaWNvbi1jb2xvcic6IHRva2VuLmNvbG9yU3VjY2VzcyxcbiAgICAnYWxlcnQtaW5mby1ib3JkZXItY29sb3InOiB0b2tlbi5jb2xvckluZm9Cb3JkZXIsXG4gICAgJ2FsZXJ0LWluZm8tYmctY29sb3InOiB0b2tlbi5jb2xvckluZm9CZyxcbiAgICAnYWxlcnQtaW5mby1pY29uLWNvbG9yJzogdG9rZW4uY29sb3JJbmZvLFxuICAgICdhbGVydC13YXJuaW5nLWJvcmRlci1jb2xvcic6IHRva2VuLmNvbG9yV2FybmluZ0JvcmRlcixcbiAgICAnYWxlcnQtd2FybmluZy1iZy1jb2xvcic6IHRva2VuLmNvbG9yV2FybmluZ0JnLFxuICAgICdhbGVydC13YXJuaW5nLWljb24tY29sb3InOiB0b2tlbi5jb2xvcldhcm5pbmcsXG4gICAgJ2FsZXJ0LWVycm9yLWJvcmRlci1jb2xvcic6IHRva2VuLmNvbG9yRXJyb3JCb3JkZXIsXG4gICAgJ2FsZXJ0LWVycm9yLWJnLWNvbG9yJzogdG9rZW4uY29sb3JFcnJvckJnLFxuICAgICdhbGVydC1lcnJvci1pY29uLWNvbG9yJzogJ0BlcnJvci1jb2xvcicsXG4gICAgJ2FsZXJ0LW1lc3NhZ2UtY29sb3InOiAnQGhlYWRpbmctY29sb3InLFxuICAgICdhbGVydC10ZXh0LWNvbG9yJzogJ0B0ZXh0LWNvbG9yJyxcbiAgICAnYWxlcnQtY2xvc2UtY29sb3InOiAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAnYWxlcnQtY2xvc2UtaG92ZXItY29sb3InOiAnQGljb24tY29sb3ItaG92ZXInLFxuICAgICdhbGVydC1wYWRkaW5nLXZlcnRpY2FsJzogJ0BwYWRkaW5nLXhzJyxcbiAgICAnYWxlcnQtcGFkZGluZy1ob3Jpem9udGFsJzogJ0BwYWRkaW5nLW1kIC0gMXB4JyxcbiAgICAnYWxlcnQtbm8taWNvbi1wYWRkaW5nLXZlcnRpY2FsJzogJ0BwYWRkaW5nLXhzJyxcbiAgICAnYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi1uby1pY29uLXBhZGRpbmctdmVydGljYWwnOiAnQHBhZGRpbmctbWQgLSAxcHgnLFxuICAgICdhbGVydC13aXRoLWRlc2NyaXB0aW9uLXBhZGRpbmctdmVydGljYWwnOiAnQHBhZGRpbmctbWQgLSAxcHgnLFxuICAgICdhbGVydC13aXRoLWRlc2NyaXB0aW9uLXBhZGRpbmcnOiBcIkBhbGVydC13aXRoLWRlc2NyaXB0aW9uLXBhZGRpbmctdmVydGljYWwgMTVweFxcbiAgQGFsZXJ0LXdpdGgtZGVzY3JpcHRpb24tbm8taWNvbi1wYWRkaW5nLXZlcnRpY2FsIEBhbGVydC13aXRoLWRlc2NyaXB0aW9uLWljb24tc2l6ZVwiLFxuICAgICdhbGVydC1pY29uLXRvcCc6ICc4cHggKyBAZm9udC1zaXplLWJhc2UgKiAoQGxpbmUtaGVpZ2h0LWJhc2UgLyAyKSAtIChAZm9udC1zaXplLWJhc2UgLyAyKScsXG4gICAgJ2FsZXJ0LXdpdGgtZGVzY3JpcHRpb24taWNvbi1zaXplJzogJzI0cHgnLFxuICAgIC8vIExpc3RcbiAgICAvLyAtLS1cbiAgICAnbGlzdC1oZWFkZXItYmFja2dyb3VuZCc6ICd0cmFuc3BhcmVudCcsXG4gICAgJ2xpc3QtZm9vdGVyLWJhY2tncm91bmQnOiAndHJhbnNwYXJlbnQnLFxuICAgICdsaXN0LWVtcHR5LXRleHQtcGFkZGluZyc6ICdAcGFkZGluZy1tZCcsXG4gICAgJ2xpc3QtaXRlbS1wYWRkaW5nJzogJ0BwYWRkaW5nLXNtIDAnLFxuICAgICdsaXN0LWl0ZW0tcGFkZGluZy1zbSc6ICdAcGFkZGluZy14cyBAcGFkZGluZy1tZCcsXG4gICAgJ2xpc3QtaXRlbS1wYWRkaW5nLWxnJzogJzE2cHggMjRweCcsXG4gICAgJ2xpc3QtaXRlbS1tZXRhLW1hcmdpbi1ib3R0b20nOiAnQHBhZGRpbmctbWQnLFxuICAgICdsaXN0LWl0ZW0tbWV0YS1hdmF0YXItbWFyZ2luLXJpZ2h0JzogJ0BwYWRkaW5nLW1kJyxcbiAgICAnbGlzdC1pdGVtLW1ldGEtdGl0bGUtbWFyZ2luLWJvdHRvbSc6ICdAcGFkZGluZy1zbScsXG4gICAgJ2xpc3QtY3VzdG9taXplLWNhcmQtYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb24tZm9udC1zaXplJzogJ0Bmb250LXNpemUtYmFzZScsXG4gICAgLy8gU3RhdGlzdGljXG4gICAgLy8gLS0tXG4gICAgJ3N0YXRpc3RpYy10aXRsZS1mb250LXNpemUnOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnc3RhdGlzdGljLWNvbnRlbnQtZm9udC1zaXplJzogJzI0cHgnLFxuICAgICdzdGF0aXN0aWMtdW5pdC1mb250LXNpemUnOiAnMjRweCcsXG4gICAgJ3N0YXRpc3RpYy1mb250LWZhbWlseSc6ICdAZm9udC1mYW1pbHknLFxuICAgIC8vIERyYXdlclxuICAgIC8vIC0tLVxuICAgICdkcmF3ZXItaGVhZGVyLXBhZGRpbmcnOiAnQHBhZGRpbmctbWQgQHBhZGRpbmctbGcnLFxuICAgICdkcmF3ZXItYm9keS1wYWRkaW5nJzogJ0BwYWRkaW5nLWxnJyxcbiAgICAnZHJhd2VyLWJnJzogJ0Bjb21wb25lbnQtYmFja2dyb3VuZCcsXG4gICAgJ2RyYXdlci1mb290ZXItcGFkZGluZy12ZXJ0aWNhbCc6ICdAbW9kYWwtZm9vdGVyLXBhZGRpbmctdmVydGljYWwnLFxuICAgICdkcmF3ZXItZm9vdGVyLXBhZGRpbmctaG9yaXpvbnRhbCc6ICdAbW9kYWwtZm9vdGVyLXBhZGRpbmctaG9yaXpvbnRhbCcsXG4gICAgJ2RyYXdlci1oZWFkZXItY2xvc2Utc2l6ZSc6ICc1NnB4JyxcbiAgICAnZHJhd2VyLXRpdGxlLWZvbnQtc2l6ZSc6ICdAZm9udC1zaXplLWxnJyxcbiAgICAnZHJhd2VyLXRpdGxlLWxpbmUtaGVpZ2h0JzogJzIycHgnLFxuICAgIC8vIFRpbWVsaW5lXG4gICAgLy8gLS0tXG4gICAgJ3RpbWVsaW5lLXdpZHRoJzogJzJweCcsXG4gICAgJ3RpbWVsaW5lLWNvbG9yJzogJ0Bib3JkZXItY29sb3Itc3BsaXQnLFxuICAgICd0aW1lbGluZS1kb3QtYm9yZGVyLXdpZHRoJzogJzJweCcsXG4gICAgJ3RpbWVsaW5lLWRvdC1jb2xvcic6ICdAcHJpbWFyeS1jb2xvcicsXG4gICAgJ3RpbWVsaW5lLWRvdC1iZyc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICd0aW1lbGluZS1pdGVtLXBhZGRpbmctYm90dG9tJzogJzIwcHgnLFxuICAgIC8vIFR5cG9ncmFwaHlcbiAgICAvLyAtLS1cbiAgICAndHlwb2dyYXBoeS10aXRsZS1mb250LXdlaWdodCc6ICc2MDAnLFxuICAgICd0eXBvZ3JhcGh5LXRpdGxlLW1hcmdpbi10b3AnOiAnMS4yZW0nLFxuICAgICd0eXBvZ3JhcGh5LXRpdGxlLW1hcmdpbi1ib3R0b20nOiAnMC41ZW0nLFxuICAgIC8vIFVwbG9hZFxuICAgIC8vIC0tLVxuICAgICd1cGxvYWQtYWN0aW9ucy1jb2xvcic6ICdAdGV4dC1jb2xvci1zZWNvbmRhcnknLFxuICAgIC8vIFN0ZXBzXG4gICAgLy8gLS0tXG4gICAgJ3Byb2Nlc3MtdGFpbC1jb2xvcic6ICdAYm9yZGVyLWNvbG9yLXNwbGl0JyxcbiAgICAnc3RlcHMtbmF2LWFycm93LWNvbG9yJzogJ2ZhZGUoQGJsYWNrLCAyNSUpJyxcbiAgICAnc3RlcHMtYmFja2dyb3VuZCc6ICdAY29tcG9uZW50LWJhY2tncm91bmQnLFxuICAgICdzdGVwcy1pY29uLXNpemUnOiAnMzJweCcsXG4gICAgJ3N0ZXBzLWljb24tY3VzdG9tLXNpemUnOiAnQHN0ZXBzLWljb24tc2l6ZScsXG4gICAgJ3N0ZXBzLWljb24tY3VzdG9tLXRvcCc6ICcwcHgnLFxuICAgICdzdGVwcy1pY29uLWN1c3RvbS1mb250LXNpemUnOiAnMjRweCcsXG4gICAgJ3N0ZXBzLWljb24tdG9wJzogJy0wLjVweCcsXG4gICAgJ3N0ZXBzLWljb24tZm9udC1zaXplJzogJ0Bmb250LXNpemUtbGcnLFxuICAgICdzdGVwcy1pY29uLW1hcmdpbic6ICcwIDhweCAwIDAnLFxuICAgICdzdGVwcy10aXRsZS1saW5lLWhlaWdodCc6ICdAaGVpZ2h0LWJhc2UnLFxuICAgICdzdGVwcy1zbWFsbC1pY29uLXNpemUnOiAnMjRweCcsXG4gICAgJ3N0ZXBzLXNtYWxsLWljb24tbWFyZ2luJzogJzAgOHB4IDAgMCcsXG4gICAgJ3N0ZXBzLWRvdC1zaXplJzogJzhweCcsXG4gICAgJ3N0ZXBzLWRvdC10b3AnOiAnMnB4JyxcbiAgICAnc3RlcHMtY3VycmVudC1kb3Qtc2l6ZSc6ICcxMHB4JyxcbiAgICAnc3RlcHMtZGVzY3JpcHRpb24tbWF4LXdpZHRoJzogJzE0MHB4JyxcbiAgICAnc3RlcHMtbmF2LWNvbnRlbnQtbWF4LXdpZHRoJzogJ2F1dG8nLFxuICAgICdzdGVwcy12ZXJ0aWNhbC1pY29uLXdpZHRoJzogJzE2cHgnLFxuICAgICdzdGVwcy12ZXJ0aWNhbC10YWlsLXdpZHRoJzogJzE2cHgnLFxuICAgICdzdGVwcy12ZXJ0aWNhbC10YWlsLXdpZHRoLXNtJzogJzEycHgnLFxuICAgIC8vIE5vdGlmaWNhdGlvblxuICAgIC8vIC0tLVxuICAgICdub3RpZmljYXRpb24tYmcnOiAnQGNvbXBvbmVudC1iYWNrZ3JvdW5kJyxcbiAgICAnbm90aWZpY2F0aW9uLXBhZGRpbmctdmVydGljYWwnOiAnMTZweCcsXG4gICAgJ25vdGlmaWNhdGlvbi1wYWRkaW5nLWhvcml6b250YWwnOiAnMjRweCcsXG4gICAgLy8gUmVzdWx0XG4gICAgLy8gLS0tXG4gICAgJ3Jlc3VsdC10aXRsZS1mb250LXNpemUnOiAnMjRweCcsXG4gICAgJ3Jlc3VsdC1zdWJ0aXRsZS1mb250LXNpemUnOiAnQGZvbnQtc2l6ZS1iYXNlJyxcbiAgICAncmVzdWx0LWljb24tZm9udC1zaXplJzogJzcycHgnLFxuICAgICdyZXN1bHQtZXh0cmEtbWFyZ2luJzogJzI0cHggMCAwIDAnLFxuICAgIC8vIEltYWdlXG4gICAgLy8gLS0tXG4gICAgJ2ltYWdlLXNpemUtYmFzZSc6ICc0OHB4JyxcbiAgICAnaW1hZ2UtZm9udC1zaXplLWJhc2UnOiAnMjRweCcsXG4gICAgJ2ltYWdlLWJnJzogJyNmNWY1ZjUnLFxuICAgICdpbWFnZS1jb2xvcic6ICcjZmZmJyxcbiAgICAnaW1hZ2UtbWFzay1mb250LXNpemUnOiAnMTZweCcsXG4gICAgJ2ltYWdlLXByZXZpZXctb3BlcmF0aW9uLXNpemUnOiAnMThweCcsXG4gICAgJ2ltYWdlLXByZXZpZXctb3BlcmF0aW9uLWNvbG9yJzogJ0B0ZXh0LWNvbG9yLWRhcmsnLFxuICAgICdpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1kaXNhYmxlZC1jb2xvcic6ICdmYWRlKEBpbWFnZS1wcmV2aWV3LW9wZXJhdGlvbi1jb2xvciwgMjUlKScsXG4gICAgLy8gU2VnbWVudGVkXG4gICAgLy8gLS0tXG4gICAgJ3NlZ21lbnRlZC1iZyc6ICdmYWRlKEBibGFjaywgNCUpJyxcbiAgICAnc2VnbWVudGVkLWhvdmVyLWJnJzogJ2ZhZGUoQGJsYWNrLCA2JSknLFxuICAgICdzZWdtZW50ZWQtc2VsZWN0ZWQtYmcnOiAnQHdoaXRlJyxcbiAgICAnc2VnbWVudGVkLWxhYmVsLWNvbG9yJzogJ2ZhZGUoQGJsYWNrLCA2NSUpJyxcbiAgICAnc2VnbWVudGVkLWxhYmVsLWhvdmVyLWNvbG9yJzogJyMyNjI2MjYnXG4gIH07IC8vIEZpbGwgY29sb3JzLiBlLmcuICdAcmVkLTEnLCAnQHllbGxvdy02J1xuXG4gIE9iamVjdC5rZXlzKHRva2VuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ICE9PSBrZXkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHRva2VuW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmF3W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pOyAvLyBDb252ZXJ0IHRvIHN0cmluZ1xuXG4gIHZhciByZXR1cm5EYXRhID0ge307XG4gIE9iamVjdC5rZXlzKHJhdykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbHVlID0gcmF3W2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm5EYXRhW2tleV0gPSB2YWx1ZShyYXcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAha2V5LmluY2x1ZGVzKCdsaW5lLWhlaWdodCcpKSB7XG4gICAgICByZXR1cm5EYXRhW2tleV0gPSBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuRGF0YVtrZXldID0gXCJcIi5jb25jYXQodmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXR1cm5EYXRhO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSAnQGFudC1kZXNpZ24vY29sb3JzJztcbmltcG9ydCBnZW5Db2xvck1hcFRva2VuIGZyb20gXCIuL2dlbkNvbG9yTWFwVG9rZW5cIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xudmFyIGRhcmtBbGdvcml0aG0gPSB0aGVtZS5kYXJrQWxnb3JpdGhtO1xuZXhwb3J0IHZhciBnZXRBbHBoYUNvbG9yID0gZnVuY3Rpb24gZ2V0QWxwaGFDb2xvcihiYXNlQ29sb3IsIGFscGhhKSB7XG4gIHJldHVybiBuZXcgVGlueUNvbG9yKGJhc2VDb2xvcikuc2V0QWxwaGEoYWxwaGEpLnRvUmdiU3RyaW5nKCk7XG59O1xuZXhwb3J0IHZhciBnZXRTb2xpZENvbG9yID0gZnVuY3Rpb24gZ2V0U29saWRDb2xvcihiYXNlQ29sb3IsIGJyaWdodG5lc3MpIHtcbiAgdmFyIGluc3RhbmNlID0gbmV3IFRpbnlDb2xvcihiYXNlQ29sb3IpO1xuICByZXR1cm4gaW5zdGFuY2UubGlnaHRlbihicmlnaHRuZXNzKS50b0hleFN0cmluZygpO1xufTtcblxudmFyIGdlbmVyYXRlQ29sb3JQYWxldHRlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JQYWxldHRlcyhiYXNlQ29sb3IpIHtcbiAgdmFyIGNvbG9ycyA9IGdlbmVyYXRlKGJhc2VDb2xvciwge1xuICAgIHRoZW1lOiAnZGFyaydcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgMTogY29sb3JzWzBdLFxuICAgIDI6IGNvbG9yc1sxXSxcbiAgICAzOiBjb2xvcnNbMl0sXG4gICAgNDogY29sb3JzWzNdLFxuICAgIDU6IGNvbG9yc1s2XSxcbiAgICA2OiBjb2xvcnNbNV0sXG4gICAgNzogY29sb3JzWzRdLFxuICAgIDg6IGNvbG9yc1s2XSxcbiAgICA5OiBjb2xvcnNbNV0sXG4gICAgMTA6IGNvbG9yc1s0XVxuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzKGJnQmFzZUNvbG9yLCB0ZXh0QmFzZUNvbG9yKSB7XG4gIHZhciBjb2xvckJnQmFzZSA9IGJnQmFzZUNvbG9yIHx8ICcjMDAwJztcbiAgdmFyIGNvbG9yVGV4dEJhc2UgPSB0ZXh0QmFzZUNvbG9yIHx8ICcjZmZmJztcbiAgcmV0dXJuIHtcbiAgICBjb2xvckJnQmFzZTogY29sb3JCZ0Jhc2UsXG4gICAgY29sb3JUZXh0QmFzZTogY29sb3JUZXh0QmFzZSxcbiAgICBjb2xvclRleHQ6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC44NSksXG4gICAgY29sb3JUZXh0U2Vjb25kYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuNDUpLFxuICAgIC8vIERpZmZlcmVudCBmcm9tIHY1XG4gICAgY29sb3JUZXh0VGVydGlhcnk6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC40NSksXG4gICAgY29sb3JUZXh0UXVhdGVybmFyeTogZ2V0QWxwaGFDb2xvcihjb2xvclRleHRCYXNlLCAwLjI1KSxcbiAgICBjb2xvckZpbGw6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4xOCksXG4gICAgY29sb3JGaWxsU2Vjb25kYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMTIpLFxuICAgIGNvbG9yRmlsbFRlcnRpYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMDgpLFxuICAgIGNvbG9yRmlsbFF1YXRlcm5hcnk6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4wNCksXG4gICAgY29sb3JCZ0VsZXZhdGVkOiBnZXRTb2xpZENvbG9yKGNvbG9yQmdCYXNlLCAxMiksXG4gICAgY29sb3JCZ0NvbnRhaW5lcjogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgOCksXG4gICAgY29sb3JCZ0xheW91dDogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgMCksXG4gICAgY29sb3JCZ1Nwb3RsaWdodDogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgMjYpLFxuICAgIGNvbG9yQm9yZGVyOiBnZXRTb2xpZENvbG9yKGNvbG9yQmdCYXNlLCAyNiksXG4gICAgY29sb3JCb3JkZXJTZWNvbmRhcnk6IGdldFNvbGlkQ29sb3IoY29sb3JCZ0Jhc2UsIDE5KSxcbiAgICBjb2xvclNwbGl0OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMTIpXG4gIH07XG59O1xuXG52YXIgZGVyaXZhdGl2ZSA9IGZ1bmN0aW9uIGRlcml2YXRpdmUodG9rZW4sIG1hcFRva2VuKSB7XG4gIHZhciBtZXJnZWRNYXBUb2tlbiA9IG1hcFRva2VuICE9PSBudWxsICYmIG1hcFRva2VuICE9PSB2b2lkIDAgPyBtYXBUb2tlbiA6IGRhcmtBbGdvcml0aG0odG9rZW4pO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtZXJnZWRNYXBUb2tlbiksIGdlbkNvbG9yTWFwVG9rZW4obWFwVG9rZW4gIT09IG51bGwgJiYgbWFwVG9rZW4gIT09IHZvaWQgMCA/IG1hcFRva2VuIDogdG9rZW4sIHtcbiAgICBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXM6IGdlbmVyYXRlQ29sb3JQYWxldHRlcyxcbiAgICBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzOiBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzXG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlcml2YXRpdmU7IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICdAYW50LWRlc2lnbi9jb2xvcnMnO1xuaW1wb3J0IGdlbkNvbG9yTWFwVG9rZW4gZnJvbSBcIi4vZ2VuQ29sb3JNYXBUb2tlblwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XG52YXIgZGVmYXVsdEFsZ29yaXRobSA9IHRoZW1lLmRlZmF1bHRBbGdvcml0aG07XG5leHBvcnQgdmFyIGdldEFscGhhQ29sb3IgPSBmdW5jdGlvbiBnZXRBbHBoYUNvbG9yKGJhc2VDb2xvciwgYWxwaGEpIHtcbiAgcmV0dXJuIG5ldyBUaW55Q29sb3IoYmFzZUNvbG9yKS5zZXRBbHBoYShhbHBoYSkudG9SZ2JTdHJpbmcoKTtcbn07XG5leHBvcnQgdmFyIGdldFNvbGlkQ29sb3IgPSBmdW5jdGlvbiBnZXRTb2xpZENvbG9yKGJhc2VDb2xvciwgYnJpZ2h0bmVzcykge1xuICB2YXIgaW5zdGFuY2UgPSBuZXcgVGlueUNvbG9yKGJhc2VDb2xvcik7XG4gIHJldHVybiBpbnN0YW5jZS5kYXJrZW4oYnJpZ2h0bmVzcykudG9IZXhTdHJpbmcoKTtcbn07XG5leHBvcnQgdmFyIGdlbmVyYXRlQ29sb3JQYWxldHRlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JQYWxldHRlcyhiYXNlQ29sb3IpIHtcbiAgdmFyIGNvbG9ycyA9IGdlbmVyYXRlKGJhc2VDb2xvcik7XG4gIHJldHVybiB7XG4gICAgMTogY29sb3JzWzBdLFxuICAgIDI6IGNvbG9yc1sxXSxcbiAgICAzOiBjb2xvcnNbMl0sXG4gICAgNDogY29sb3JzWzNdLFxuICAgIDU6IGNvbG9yc1s0XSxcbiAgICA2OiBjb2xvcnNbNV0sXG4gICAgNzogY29sb3JzWzZdLFxuICAgIDg6IGNvbG9yc1s0XSxcbiAgICA5OiBjb2xvcnNbNV0sXG4gICAgMTA6IGNvbG9yc1s2XVxuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZU5ldXRyYWxDb2xvclBhbGV0dGVzKGJnQmFzZUNvbG9yLCB0ZXh0QmFzZUNvbG9yKSB7XG4gIHZhciBjb2xvckJnQmFzZSA9IGJnQmFzZUNvbG9yIHx8ICcjZmZmJztcbiAgdmFyIGNvbG9yVGV4dEJhc2UgPSB0ZXh0QmFzZUNvbG9yIHx8ICcjMDAwJztcbiAgcmV0dXJuIHtcbiAgICBjb2xvckJnQmFzZTogY29sb3JCZ0Jhc2UsXG4gICAgY29sb3JUZXh0QmFzZTogY29sb3JUZXh0QmFzZSxcbiAgICBjb2xvclRleHQ6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC44NSksXG4gICAgY29sb3JUZXh0U2Vjb25kYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuNDUpLFxuICAgIC8vIERpZmZlcmVudCBmcm9tIHY1XG4gICAgY29sb3JUZXh0VGVydGlhcnk6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC40NSksXG4gICAgY29sb3JUZXh0UXVhdGVybmFyeTogZ2V0QWxwaGFDb2xvcihjb2xvclRleHRCYXNlLCAwLjI1KSxcbiAgICBjb2xvckZpbGw6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4wNiksXG4gICAgY29sb3JGaWxsU2Vjb25kYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMDQpLFxuICAgIGNvbG9yRmlsbFRlcnRpYXJ5OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuMDMpLFxuICAgIGNvbG9yRmlsbFF1YXRlcm5hcnk6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4wMiksXG4gICAgY29sb3JCZ0xheW91dDogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgNCksXG4gICAgY29sb3JCZ0NvbnRhaW5lcjogZ2V0U29saWRDb2xvcihjb2xvckJnQmFzZSwgMCksXG4gICAgY29sb3JCZ0VsZXZhdGVkOiBnZXRTb2xpZENvbG9yKGNvbG9yQmdCYXNlLCAwKSxcbiAgICBjb2xvckJnU3BvdGxpZ2h0OiBnZXRBbHBoYUNvbG9yKGNvbG9yVGV4dEJhc2UsIDAuODUpLFxuICAgIGNvbG9yQm9yZGVyOiBnZXRTb2xpZENvbG9yKGNvbG9yQmdCYXNlLCAxNSksXG4gICAgY29sb3JCb3JkZXJTZWNvbmRhcnk6IGdldFNvbGlkQ29sb3IoY29sb3JCZ0Jhc2UsIDYpLFxuICAgIGNvbG9yU3BsaXQ6IGdldEFscGhhQ29sb3IoY29sb3JUZXh0QmFzZSwgMC4wNilcbiAgfTtcbn07XG5cbnZhciBkZXJpdmF0aXZlID0gZnVuY3Rpb24gZGVyaXZhdGl2ZSh0b2tlbiwgbWFwVG9rZW4pIHtcbiAgdmFyIG1lcmdlZE1hcFRva2VuID0gbWFwVG9rZW4gIT09IG51bGwgJiYgbWFwVG9rZW4gIT09IHZvaWQgMCA/IG1hcFRva2VuIDogZGVmYXVsdEFsZ29yaXRobSh0b2tlbik7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1lcmdlZE1hcFRva2VuKSwgZ2VuQ29sb3JNYXBUb2tlbihtYXBUb2tlbiAhPT0gbnVsbCAmJiBtYXBUb2tlbiAhPT0gdm9pZCAwID8gbWFwVG9rZW4gOiB0b2tlbiwge1xuICAgIGdlbmVyYXRlQ29sb3JQYWxldHRlczogZ2VuZXJhdGVDb2xvclBhbGV0dGVzLFxuICAgIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXM6IGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXNcbiAgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVyaXZhdGl2ZTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuQ29sb3JNYXBUb2tlbihzZWVkLCBfcmVmKSB7XG4gIHZhciBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMgPSBfcmVmLmdlbmVyYXRlQ29sb3JQYWxldHRlcyxcbiAgICAgIGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMgPSBfcmVmLmdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXM7XG4gIHZhciBjb2xvclN1Y2Nlc3NCYXNlID0gc2VlZC5jb2xvclN1Y2Nlc3MsXG4gICAgICBjb2xvcldhcm5pbmdCYXNlID0gc2VlZC5jb2xvcldhcm5pbmcsXG4gICAgICBjb2xvckVycm9yQmFzZSA9IHNlZWQuY29sb3JFcnJvcixcbiAgICAgIGNvbG9ySW5mb0Jhc2UgPSBzZWVkLmNvbG9ySW5mbyxcbiAgICAgIGNvbG9yUHJpbWFyeUJhc2UgPSBzZWVkLmNvbG9yUHJpbWFyeSxcbiAgICAgIGNvbG9yQmdCYXNlID0gc2VlZC5jb2xvckJnQmFzZSxcbiAgICAgIGNvbG9yVGV4dEJhc2UgPSBzZWVkLmNvbG9yVGV4dEJhc2U7XG4gIHZhciBwcmltYXJ5Q29sb3JzID0gZ2VuZXJhdGVDb2xvclBhbGV0dGVzKGNvbG9yUHJpbWFyeUJhc2UpO1xuICB2YXIgc3VjY2Vzc0NvbG9ycyA9IGdlbmVyYXRlQ29sb3JQYWxldHRlcyhjb2xvclN1Y2Nlc3NCYXNlKTtcbiAgdmFyIHdhcm5pbmdDb2xvcnMgPSBnZW5lcmF0ZUNvbG9yUGFsZXR0ZXMoY29sb3JXYXJuaW5nQmFzZSk7XG4gIHZhciBlcnJvckNvbG9ycyA9IGdlbmVyYXRlQ29sb3JQYWxldHRlcyhjb2xvckVycm9yQmFzZSk7XG4gIHZhciBpbmZvQ29sb3JzID0gZ2VuZXJhdGVDb2xvclBhbGV0dGVzKGNvbG9ySW5mb0Jhc2UpO1xuICB2YXIgbmV1dHJhbENvbG9ycyA9IGdlbmVyYXRlTmV1dHJhbENvbG9yUGFsZXR0ZXMoY29sb3JCZ0Jhc2UsIGNvbG9yVGV4dEJhc2UpO1xuICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBuZXV0cmFsQ29sb3JzKSwge30sIHtcbiAgICBjb2xvclByaW1hcnlCZzogcHJpbWFyeUNvbG9yc1sxXSxcbiAgICBjb2xvclByaW1hcnlCZ0hvdmVyOiBwcmltYXJ5Q29sb3JzWzJdLFxuICAgIGNvbG9yUHJpbWFyeUJvcmRlcjogcHJpbWFyeUNvbG9yc1szXSxcbiAgICBjb2xvclByaW1hcnlCb3JkZXJIb3ZlcjogcHJpbWFyeUNvbG9yc1s0XSxcbiAgICBjb2xvclByaW1hcnlIb3ZlcjogcHJpbWFyeUNvbG9yc1s1XSxcbiAgICBjb2xvclByaW1hcnk6IHByaW1hcnlDb2xvcnNbNl0sXG4gICAgY29sb3JQcmltYXJ5QWN0aXZlOiBwcmltYXJ5Q29sb3JzWzddLFxuICAgIGNvbG9yUHJpbWFyeVRleHRIb3ZlcjogcHJpbWFyeUNvbG9yc1s4XSxcbiAgICBjb2xvclByaW1hcnlUZXh0OiBwcmltYXJ5Q29sb3JzWzldLFxuICAgIGNvbG9yUHJpbWFyeVRleHRBY3RpdmU6IHByaW1hcnlDb2xvcnNbMTBdLFxuICAgIGNvbG9yU3VjY2Vzc0JnOiBzdWNjZXNzQ29sb3JzWzFdLFxuICAgIGNvbG9yU3VjY2Vzc0JnSG92ZXI6IHN1Y2Nlc3NDb2xvcnNbMl0sXG4gICAgY29sb3JTdWNjZXNzQm9yZGVyOiBzdWNjZXNzQ29sb3JzWzNdLFxuICAgIGNvbG9yU3VjY2Vzc0JvcmRlckhvdmVyOiBzdWNjZXNzQ29sb3JzWzRdLFxuICAgIGNvbG9yU3VjY2Vzc0hvdmVyOiBzdWNjZXNzQ29sb3JzWzVdLFxuICAgIGNvbG9yU3VjY2Vzczogc3VjY2Vzc0NvbG9yc1s2XSxcbiAgICBjb2xvclN1Y2Nlc3NBY3RpdmU6IHN1Y2Nlc3NDb2xvcnNbN10sXG4gICAgY29sb3JTdWNjZXNzVGV4dEhvdmVyOiBzdWNjZXNzQ29sb3JzWzhdLFxuICAgIGNvbG9yU3VjY2Vzc1RleHQ6IHN1Y2Nlc3NDb2xvcnNbOV0sXG4gICAgY29sb3JTdWNjZXNzVGV4dEFjdGl2ZTogc3VjY2Vzc0NvbG9yc1sxMF0sXG4gICAgY29sb3JFcnJvckJnOiBlcnJvckNvbG9yc1sxXSxcbiAgICBjb2xvckVycm9yQmdIb3ZlcjogZXJyb3JDb2xvcnNbMl0sXG4gICAgY29sb3JFcnJvckJvcmRlcjogZXJyb3JDb2xvcnNbM10sXG4gICAgY29sb3JFcnJvckJvcmRlckhvdmVyOiBlcnJvckNvbG9yc1s0XSxcbiAgICBjb2xvckVycm9ySG92ZXI6IGVycm9yQ29sb3JzWzVdLFxuICAgIGNvbG9yRXJyb3I6IGVycm9yQ29sb3JzWzZdLFxuICAgIGNvbG9yRXJyb3JBY3RpdmU6IGVycm9yQ29sb3JzWzddLFxuICAgIGNvbG9yRXJyb3JUZXh0SG92ZXI6IGVycm9yQ29sb3JzWzhdLFxuICAgIGNvbG9yRXJyb3JUZXh0OiBlcnJvckNvbG9yc1s5XSxcbiAgICBjb2xvckVycm9yVGV4dEFjdGl2ZTogZXJyb3JDb2xvcnNbMTBdLFxuICAgIGNvbG9yV2FybmluZ0JnOiB3YXJuaW5nQ29sb3JzWzFdLFxuICAgIGNvbG9yV2FybmluZ0JnSG92ZXI6IHdhcm5pbmdDb2xvcnNbMl0sXG4gICAgY29sb3JXYXJuaW5nQm9yZGVyOiB3YXJuaW5nQ29sb3JzWzNdLFxuICAgIGNvbG9yV2FybmluZ0JvcmRlckhvdmVyOiB3YXJuaW5nQ29sb3JzWzRdLFxuICAgIGNvbG9yV2FybmluZ0hvdmVyOiB3YXJuaW5nQ29sb3JzWzVdLFxuICAgIGNvbG9yV2FybmluZzogd2FybmluZ0NvbG9yc1s2XSxcbiAgICBjb2xvcldhcm5pbmdBY3RpdmU6IHdhcm5pbmdDb2xvcnNbN10sXG4gICAgY29sb3JXYXJuaW5nVGV4dEhvdmVyOiB3YXJuaW5nQ29sb3JzWzhdLFxuICAgIGNvbG9yV2FybmluZ1RleHQ6IHdhcm5pbmdDb2xvcnNbOV0sXG4gICAgY29sb3JXYXJuaW5nVGV4dEFjdGl2ZTogd2FybmluZ0NvbG9yc1sxMF0sXG4gICAgY29sb3JJbmZvQmc6IGluZm9Db2xvcnNbMV0sXG4gICAgY29sb3JJbmZvQmdIb3ZlcjogaW5mb0NvbG9yc1syXSxcbiAgICBjb2xvckluZm9Cb3JkZXI6IGluZm9Db2xvcnNbM10sXG4gICAgY29sb3JJbmZvQm9yZGVySG92ZXI6IGluZm9Db2xvcnNbNF0sXG4gICAgY29sb3JJbmZvSG92ZXI6IGluZm9Db2xvcnNbNV0sXG4gICAgY29sb3JJbmZvOiBpbmZvQ29sb3JzWzZdLFxuICAgIGNvbG9ySW5mb0FjdGl2ZTogaW5mb0NvbG9yc1s3XSxcbiAgICBjb2xvckluZm9UZXh0SG92ZXI6IGluZm9Db2xvcnNbOF0sXG4gICAgY29sb3JJbmZvVGV4dDogaW5mb0NvbG9yc1s5XSxcbiAgICBjb2xvckluZm9UZXh0QWN0aXZlOiBpbmZvQ29sb3JzWzEwXSxcbiAgICBjb2xvckJnTWFzazogbmV3IFRpbnlDb2xvcignIzAwMCcpLnNldEFscGhhKDAuNDUpLnRvUmdiU3RyaW5nKCksXG4gICAgY29sb3JXaGl0ZTogJyNmZmYnXG4gIH0pO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBkZWZhdWx0QWxnb3JpdGhtIGZyb20gXCIuL2RlZmF1bHRcIjtcbmltcG9ydCBkYXJrQWxnb3JpdGhtIGZyb20gXCIuL2RhcmtcIjtcbmV4cG9ydCB7IGRlZmF1bHRBbGdvcml0aG0sIGRhcmtBbGdvcml0aG0gfTtcbnZhciB2NFRva2VuID0ge1xuICB0b2tlbjoge1xuICAgIGJvcmRlclJhZGl1czogMixcbiAgICBjb2xvclByaW1hcnk6ICcjMTg5MGZmJyxcbiAgICB3aXJlZnJhbWU6IHRydWVcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGVmYXVsdFRoZW1lID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2NFRva2VuKSwge30sIHtcbiAgYWxnb3JpdGhtOiBkZWZhdWx0QWxnb3JpdGhtLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWVudToge1xuICAgICAgcmFkaXVzSXRlbTogMCxcbiAgICAgIHJhZGl1c1N1Yk1lbnVJdGVtOiAwLFxuICAgICAgY29sb3JJdGVtVGV4dEhvdmVyOiAnIzE4OTBmZicsXG4gICAgICBjb2xvckl0ZW1UZXh0U2VsZWN0ZWQ6ICcjMTg5MGZmJyxcbiAgICAgIGNvbG9ySXRlbUJnU2VsZWN0ZWQ6ICcjZTZmN2ZmJyxcbiAgICAgIGNvbG9yQWN0aXZlQmFyV2lkdGg6IDMsXG4gICAgICBpdGVtTWFyZ2luSW5saW5lOiAwLFxuICAgICAgY29sb3JJdGVtQmdIb3ZlcjogJ3RyYW5zcGFyZW50J1xuICAgIH1cbiAgfVxufSk7XG5leHBvcnQgdmFyIGRhcmtUaGVtZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdjRUb2tlbiksIHt9LCB7XG4gIGFsZ29yaXRobTogZGFya0FsZ29yaXRobSxcbiAgY29tcG9uZW50czoge1xuICAgIE1lbnU6IHtcbiAgICAgIHJhZGl1c0l0ZW06IDAsXG4gICAgICByYWRpdXNTdWJNZW51SXRlbTogMCxcbiAgICAgIGNvbG9ySXRlbVRleHRIb3ZlcjogJyMxODkwZmYnLFxuICAgICAgY29sb3JJdGVtVGV4dFNlbGVjdGVkOiAnIzE4OTBmZicsXG4gICAgICBjb2xvckl0ZW1CZ1NlbGVjdGVkOiAnIzExMWIyNicsXG4gICAgICBjb2xvckFjdGl2ZUJhcldpZHRoOiAzLFxuICAgICAgaXRlbU1hcmdpbklubGluZTogMCxcbiAgICAgIGNvbG9ySXRlbUJnSG92ZXI6ICd0cmFuc3BhcmVudCdcbiAgICB9XG4gIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=