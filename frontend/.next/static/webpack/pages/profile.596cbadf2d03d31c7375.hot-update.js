webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.tsx");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.tsx");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.tsx");
var _this = undefined,
  _jsxFileName = "C:\\Users\\TaeIl\\Desktop\\frontStudy\\React-Nodebird\\frontend\\pages\\profile.tsx",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





// swr 서버사이드렌더링 가능




var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};
var Profile = function Profile() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
    followersLimit = _useState[0],
    setFollowersLimit = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
    followingsLimit = _useState2[0],
    setFollowingsLimit = _useState2[1];

  // Redux의 loadfollower 액션들 안만들고 이거만 쓰면 끝
  // 데이터도 없고 에러도 없으면 로딩
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
    followersData = _useSWR.data,
    followerError = _useSWR.error;
  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
    followingsData = _useSWR2.data,
    followingError = _useSWR2.error;

  // SWR로 대체
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch({
  //         type: LOAD_FOLLOWERS_REQUEST,
  //     });
  //     dispatch({
  //         type: LOAD_FOLLOWINGS_REQUEST,
  //     })
  // }, [])

  // 로그인 안한채로 프로필 페이지 가면 리턴
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  }, [me && me.id]);

  // 기존 보다 3씩 추가
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  if (!me) {
    return '내 정보 로딩중....';
  }
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.");
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "\uD504\uB85C\uD544 | NodeBird")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    onClickMore: loadMoreFollowings,
    loading: !followingsData && !followingError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    onClickMore: loadMoreFollowers,
    loading: !followersData && !followerError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  })), ";");
};
_s(Profile, "n+4WJwbO4ambwoUUudau0cWVZWo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_5__["default"], swr__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
var _c;
$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImF4aW9zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJQcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsImZvbGxvd2luZ3NMaW1pdCIsInNldEZvbGxvd2luZ3NMaW1pdCIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiZXJyb3IiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2luZ0Vycm9yIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwibG9hZE1vcmVGb2xsb3dlcnMiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJsb2FkTW9yZUZvbGxvd2luZ3MiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdFO0FBQ25DO0FBQzBCO0FBQ3ZCO0FBQ047QUFFMUI7QUFDeUI7QUFFdUI7QUFDYztBQUNaO0FBSWxELElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQUlDLEdBQUc7RUFBQSxPQUFLQyw2Q0FBSyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsRUFBRTtJQUFFRyxlQUFlLEVBQUU7RUFBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU07SUFBQSxPQUFLQSxNQUFNLENBQUNDLElBQUk7RUFBQSxFQUFDO0FBQUE7QUFFaEcsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBUztFQUFBO0VBRWxCLG1CQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQVU7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQTlDQyxFQUFFLGdCQUFGQSxFQUFFO0VBQ1YsZ0JBQTRDQyxz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ZS41OTZjYmFkZjJkMDNkMzFjNzM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuLy8gc3dyIOyEnOuyhOyCrOydtOuTnOugjOuNlOungSDqsIDriqVcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IHsgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKVxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgW2ZvbGxvd2luZ3NMaW1pdCwgc2V0Rm9sbG93aW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG5cclxuICAgIC8vIFJlZHV47J2YIGxvYWRmb2xsb3dlciDslaHshZjrk6Qg7JWI66eM65Ok6rOgIOydtOqxsOunjCDsk7DrqbQg64GdXHJcbiAgICAvLyDrjbDsnbTthLDrj4Qg7JeG6rOgIOyXkOufrOuPhCDsl4bsnLzrqbQg66Gc65SpXHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXJcclxuICAgICk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBlcnJvcjogZm9sbG93aW5nRXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyXHJcbiAgICApO1xyXG5cclxuICAgIC8vIFNXUuuhnCDrjIDssrRcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goe1xyXG4gICAgLy8gICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH0sIFtdKVxyXG5cclxuICAgIC8vIOuhnOq3uOyduCDslYjtlZzssYTroZwg7ZSE66Gc7ZWEIO2OmOydtOyngCDqsIDrqbQg66as7YS0XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIC8vIOq4sOyhtCDrs7Tri6QgM+yUqSDstpTqsIBcclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICfrgrQg7KCV67O0IOuhnOuUqeykkS4uLi4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKVxyXG4gICAgICAgIHJldHVybiA8ZGl2Pu2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZWp64uI64ukLjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPu2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93aW5nc0RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc31cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93ZXJzRGF0YX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2VyRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD47XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKChzdG9yZSk6IGFueSA9PiBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBzdGFydCcpXHJcbiAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycylcclxuICAgIGNvbnN0IGNvb2tpZSA9IHJlcSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChyZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0U2VydmVyU2lkZVByb3BzIGVuZCcpXHJcbiAgICBhd2FpdCBzdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==