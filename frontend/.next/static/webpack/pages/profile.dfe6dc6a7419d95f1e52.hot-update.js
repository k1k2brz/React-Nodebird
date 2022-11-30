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

  // Redux의 loadfollower 액션들 안만들고 이거만 쓰면 끝
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followers", fetcher),
    followersData = _useSWR.data,
    followerError = _useSWR.error;
  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3065/user/followings", fetcher),
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
  if (!me) {
    return '내 정보 로딩중....';
  }
  if (followerError || followingError) {
    console.error(followerError || followingError);
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 16
      }
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.");
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "\uD504\uB85C\uD544 | NodeBird")), __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followersData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followingsData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), ";");
};
_s(Profile, "yOwurXNg48oALiet3pdHwYEUo/c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiZmV0Y2hlciIsInVybCIsImF4aW9zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJQcm9maWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVNXUiIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiZXJyb3IiLCJmb2xsb3dpbmdzRGF0YSIsImZvbGxvd2luZ0Vycm9yIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNaO0FBQzBCO0FBQ3ZCO0FBQ047QUFFMUI7QUFDeUI7QUFFdUI7QUFDYztBQUNaO0FBSWxELElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQUlDLEdBQUc7RUFBQSxPQUFLQyw2Q0FBSyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsRUFBRTtJQUFFRyxlQUFlLEVBQUU7RUFBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU07SUFBQSxPQUFLQSxNQUFNLENBQUNDLElBQUk7RUFBQSxFQUFDO0FBQUE7QUFFaEcsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBUztFQUFBO0VBRWxCLG1CQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQVU7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQTlDQyxFQUFFLGdCQUFGQSxFQUFFOztFQUVWO0VBQ0EsY0FBc0RDLG1EQUFNLHlDQUF5Q2IsT0FBTyxDQUFDO0lBQS9GYyxhQUFhLFdBQW5CUCxJQUFJO0lBQXdCUSxhQUFhLFdBQXBCQyxLQUFLO0VBQ2xDLGVBQXdESCxtREFBTSwwQ0FBMENiLE9BQU8sQ0FBQztJQUFsR2lCLGNBQWMsWUFBcEJWLElBQUk7SUFBeUJXLGNBQWMsWUFBckJGLEtBQUs7O0VBRW5DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0FHLHVEQUFTLENBQUMsWUFBTTtJQUNaLElBQUksRUFBRVAsRUFBRSxJQUFJQSxFQUFFLENBQUNRLEVBQUUsQ0FBQyxFQUFFO01BQ2hCQyxrREFBTSxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCO0VBQ0osQ0FBQyxFQUFFLENBQUNWLEVBQUUsSUFBSUEsRUFBRSxDQUFDUSxFQUFFLENBQUMsQ0FBQztFQUVqQixJQUFJLENBQUNSLEVBQUUsRUFBRTtJQUNMLE9BQU8sY0FBYztFQUN6QjtFQUVBLElBQUlHLGFBQWEsSUFBSUcsY0FBYyxFQUFFO0lBQ2pDSyxPQUFPLENBQUNQLEtBQUssQ0FBQ0QsYUFBYSxJQUFJRyxjQUFjLENBQUM7SUFDOUMsT0FBTztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLGtIQUFrQztFQUM3QztFQUVBLE9BQ0ksbUVBQ0ksTUFBQyxnREFBSTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0Q7SUFBTSxPQUFPLEVBQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDeEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxtQ0FBNkIsQ0FDMUIsRUFDUCxNQUFDLDZEQUFTO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDTixNQUFDLG9FQUFnQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDcEIsTUFBQyw4REFBVTtJQUFDLE1BQU0sRUFBQyxvQkFBSztJQUFDLElBQUksRUFBRUosYUFBYztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDaEQsTUFBQyw4REFBVTtJQUFDLE1BQU0sRUFBQyxvQkFBSztJQUFDLElBQUksRUFBRUcsY0FBZTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDekMsTUFDYjtBQUVYLENBQUM7QUFBQyxHQWhESVQsT0FBTztFQUFBLFFBRU1DLHVEQUFXLEVBRzRCSSwyQ0FBTSxFQUNKQSwyQ0FBTTtBQUFBO0FBQUEsS0FONURMLE9BQU87QUFBQTtBQWtFRUEsc0VBQU8sRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5kZmU2ZGM2YTc0MTlkOTVmMWU1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbi8vIHN3ciDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4Eg6rCA64qlXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSlcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIC8vIFJlZHV47J2YIGxvYWRmb2xsb3dlciDslaHshZjrk6Qg7JWI66eM65Ok6rOgIOydtOqxsOunjCDsk7DrqbQg64GdXHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2Vyc2AsIGZldGNoZXIpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3NgLCBmZXRjaGVyKTtcclxuXHJcbiAgICAvLyBTV1LroZwg64yA7LK0XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBkaXNwYXRjaCh7XHJcbiAgICAvLyAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcbiAgICAvLyDroZzqt7jsnbgg7JWI7ZWc7LGE66GcIO2UhOuhnO2VhCDtjpjsnbTsp4Ag6rCA66m0IOumrO2EtFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICfrgrQg7KCV67O0IOuhnOuUqeykkS4uLi4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKVxyXG4gICAgICAgIHJldHVybiA8ZGl2Pu2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZWp64uI64ukLjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPu2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiVwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4xcIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+O1xyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpOiBhbnkgPT4gYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgc3RhcnQnKVxyXG4gICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMpXHJcbiAgICBjb25zdCBjb29raWUgPSByZXEgPyByZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAocmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBlbmQnKVxyXG4gICAgYXdhaXQgc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=