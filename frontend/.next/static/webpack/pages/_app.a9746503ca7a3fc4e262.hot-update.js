webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.tsx":
/*!************************!*\
  !*** ./sagas/user.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.tsx");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(follow),
  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(unfollow),
  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(changeNickname),
  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(loadUser),
  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(logIn),
  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),
  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),
  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchChangeNickname),
  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadUser),
  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),
  _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),
  _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),
  _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),
  _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUp),
  _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);




// SAGA를 통해 백엔드 (port 3065에 요청)
// axios보낼 https주소 saga폴더 index에 중복되는 부분 변수로 묶어줌
// withCredentials 공통설정 해줘서 자동으로 들어감

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/follow');
}
function follow(action) {
  return _regeneratorRuntime().wrap(function follow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
          });
        case 3:
          _context.next = 9;
          break;
        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context.t0.response.data
          });
        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 5]]);
}
function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/unfollow');
}
function unfollow(action) {
  return _regeneratorRuntime().wrap(function unfollow$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });
        case 5:
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context2.t0.response.data
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}
function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch('/user/nickname', {
    nickname: data
  });
}
;
function changeNickname(action) {
  var result;
  return _regeneratorRuntime().wrap(function changeNickname$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
        case 3:
          result = _context3.sent;
          console.log(result);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
            data: result.data
          });
        case 7:
          _context3.next = 14;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
            error: _context3.t0.response.data
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/user');
}
;
function loadUser(action) {
  var result;
  return _regeneratorRuntime().wrap(function loadUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
        case 3:
          result = _context4.sent;
          console.log(result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
            data: result.data
          });
        case 7:
          _context4.next = 14;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context4.t0.response.data
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

// login 할때 받아와야 하는 data
function logInAPI(data) {
  // API는 제너레이터가 아님 주의할 것 
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/user/login', data);
}

// call을 사용하면 이렇게 펼쳐서 적어줘야 함
// logInAPI(action.data);
// call(logInAPI, action.data);

// action.type 하면 Login request가 나오고 action.data하면 로그인 데이터가 들어있음
function logIn(action) {
  var result;
  return _regeneratorRuntime().wrap(function logIn$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
            // data: action.data, 더미용
          });
        case 6:
          _context5.next = 12;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context5.t0.response.data
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}
function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/user/logout');
}
function logOut() {
  return _regeneratorRuntime().wrap(function logOut$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
        case 3:
          _context6.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });
        case 5:
          _context6.next = 11;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context6.t0.response.data
          });
        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}
function signUpAPI(data) {
  // data는 email, password, nickname (signUp에서 넘어옴)
  return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/user', data);
}
function signUp(action) {
  var result;
  return _regeneratorRuntime().wrap(function signUp$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
        case 3:
          result = _context7.sent;
          console.log(result);
          // yield delay(1000);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });
        case 7:
          _context7.next = 13;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context7.t0.response.data
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 9]]);
}
function watchChangeNickname() {
  return _regeneratorRuntime().wrap(function watchChangeNickname$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}
function watchLoadUser() {
  return _regeneratorRuntime().wrap(function watchLoadUser$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}
function watchFollow() {
  return _regeneratorRuntime().wrap(function watchFollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}
function watchUnfollow() {
  return _regeneratorRuntime().wrap(function watchUnfollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}
// 한 번 밖에 받지 않는다 (1번 받고나면 이벤트 리스너 사라짐)
// 1. takeEvery를 사용하거나 (while문 대체) 2. while로 감싸서 무한으로 실행되게 해준다. (잘 안씀)
function watchLogIn() {
  return _regeneratorRuntime().wrap(function watchLogIn$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}
function watchLogOut() {
  return _regeneratorRuntime().wrap(function watchLogOut$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}
function watchSignUp() {
  return _regeneratorRuntime().wrap(function watchSignUp$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}
function userSaga() {
  return _regeneratorRuntime().wrap(function userSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci50c3giXSwibmFtZXMiOlsiZm9sbG93IiwidW5mb2xsb3ciLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyIiwibG9nSW4iLCJsb2dPdXQiLCJzaWduVXAiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJmb2xsb3dBUEkiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJwdXQiLCJ0eXBlIiwiRk9MTE9XX1NVQ0NFU1MiLCJkYXRhIiwiRk9MTE9XX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwidW5mb2xsb3dBUEkiLCJkZWxheSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiY2hhbmdlTmlja25hbWVBUEkiLCJwYXRjaCIsIm5pY2tuYW1lIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwibG9hZFVzZXJBUEkiLCJnZXQiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwibG9nSW5BUEkiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVT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QUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBO0FBRzdDLFNBQVVRLFdBQVc7RUFBQTtJQUFBO01BQUE7UUFBQTtVQUFBO1VBQ2pCLE9BQU11QyxxRUFBVSxDQUFDTyw4REFBZSxFQUFFckQsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBO0FBQUE7QUFJOUIsU0FBVVEsUUFBUTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFDN0IsT0FBTThDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3RELG1CQUFtQixDQUFDLEVBQ3pCc0QsK0RBQUksQ0FBQ3JELGFBQWEsQ0FBQyxFQUNuQnFELCtEQUFJLENBQUNwRCxXQUFXLENBQUMsRUFDakJvRCwrREFBSSxDQUFDbkQsYUFBYSxDQUFDLEVBQ25CbUQsK0RBQUksQ0FBQ2xELFVBQVUsQ0FBQyxFQUNoQmtELCtEQUFJLENBQUNqRCxXQUFXLENBQUMsRUFDakJpRCwrREFBSSxDQUFDaEQsV0FBVyxDQUFDLENBQ3BCLENBQUM7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE5NzQ2NTAzY2E3YTNmYzRlMjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIGRlbGF5LCBwdXQsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fU1VDQ0VTUywgTE9HX09VVF9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19JTl9SRVFVRVNULCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gU0FHQeulvCDthrXtlbQg67Cx7JeU65OcIChwb3J0IDMwNjXsl5Ag7JqU7LKtKVxyXG4vLyBheGlvc+uztOuCvCBodHRwc+yjvOyGjCBzYWdh7Y+0642UIGluZGV47JeQIOykkeuzteuQmOuKlCDrtoDrtoQg67OA7IiY66GcIOustuyWtOykjFxyXG4vLyB3aXRoQ3JlZGVudGlhbHMg6rO17Ya17ISk7KCVIO2VtOykmOyEnCDsnpDrj5nsnLzroZwg65Ok7Ja06rCQXHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2ZvbGxvdycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJKVxyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApOyDrjZTrr7jrjbDsnbTthLDsmqlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdW5mb2xsb3cnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEkpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBsb2dpbiDtlaDrlYwg67Cb7JWE7JmA7JW8IO2VmOuKlCBkYXRhXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIC8vIEFQSeuKlCDsoJzrhIjroIjsnbTthLDqsIAg7JWE64uYIOyjvOydmO2VoCDqsoMgXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKVxyXG59XHJcblxyXG4vLyBjYWxs7J2EIOyCrOyaqe2VmOuptCDsnbTroIfqsowg7Y687LOQ7IScIOyggeyWtOykmOyVvCDtlahcclxuLy8gbG9nSW5BUEkoYWN0aW9uLmRhdGEpO1xyXG4vLyBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4vLyBhY3Rpb24udHlwZSDtlZjrqbQgTG9naW4gcmVxdWVzdOqwgCDrgpjsmKTqs6AgYWN0aW9uLmRhdGHtlZjrqbQg66Gc6re47J24IOuNsOydtO2EsOqwgCDrk6TslrTsnojsnYxcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgLy8g7JqU7LKt7J2YIOqysOqzvOulvCDrsJvripTri6QuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCAo6rKw6rO86rCSIOyDgeq0gOyXhuydtCDrsJTroZwg7Iuk7ZaJKVxyXG4gICAgICAgIC8vIGNhbGzsnYAg64+Z6riwIO2VqOyImO2YuOy2nCAo6rKw6rO86rCSIOuwm+yVhOyYrCDrlYwg6rmM7KeAIOq4sOuLpOumvCAoZXgpdGhlbigoKSA9PiAp66W8IOuwm+yVhOyYpOuTrylcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7IC8vIOyEnOuyhOqwgCDslYTsp4Eg7JeG6riwIOuVjOusuOyXkFxyXG4gICAgICAgIC8vIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKeyymOufvCDsnpHshLHtlbTslbwg7YWM7Iqk7Yq47ZWY6riwIOyJveuLpC5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLCDrjZTrr7jsmqlcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8v7ISx6rO17J2AIHJlc3VsdC5kYXRhIOyLpO2MqOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TquLTri6RcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBUEkpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgICAvLyBkYXRh64qUIGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgKHNpZ25VcOyXkOyEnCDrhJjslrTsmLQpXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYWN0aW9uLmRhdGEg64Sj7Ja07KO866m0IHNpZ25VcEFQSeyXkOyEnCBkYXRh67Cb6riwIOqwgOuKpVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG4vLyDtlZwg67KIIOuwluyXkCDrsJvsp4Ag7JWK64qU64ukICgx67KIIOuwm+qzoOuCmOuptCDsnbTrsqTtirgg66as7Iqk64SIIOyCrOudvOynkClcclxuLy8gMS4gdGFrZUV2ZXJ566W8IOyCrOyaqe2VmOqxsOuCmCAod2hpbGXrrLgg64yA7LK0KSAyLiB3aGlsZeuhnCDqsJDsi7jshJwg66y07ZWc7Jy866GcIOyLpO2WieuQmOqyjCDtlbTspIDri6QuICjsnpgg7JWI7JSAKVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIC8vIExPR19JTuydtOuegCDslaHshZjsnbQg7Iuk7ZaJ65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG4gICAgLy8g7Ja07LCo7ZS8IExvZ2lu7J20IHJlcXVlc3Qg65CY64qUIOyInOqwhOyXkCDsi6TtlonrkJjri4jquYxcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxuICAgIC8vIOunjOyVvSB0YWtlTGF0ZXN066W8IOyCrOyaqe2VmOuptCAy7ZqMIOydtOyDgSDsl7Dsho3snLzroZwg64iM66CA7J2EIOuVjCDrp4jsp4Drp4nqurzrp4wg7Iuk7ZaJICjrp4jsmrDsiqQg6rOg7J6lIOuTseycvOuhnClcclxuICAgIC8vIOq3uOufrOuCmCDtlITroaDtirjsl5DshJzrp4wg66eI7KeA66eJ6rq8IOyCrOyaqe2VmOuKlOqxsOqzoCDrsLHsl5Trk5zsl5DshJzripQg65GQ67KIIOyalOyyrSDrs7Trg4QgKOyEnOuyhOyXkOuKlCDrkZDrsogg7KCA7J6l65Cc64ukKVxyXG4gICAgLy8gdGhyb3R0bGXroZwg7Iuc6rCE7KCc7ZWc7J2EIOuRrOyEnCDsoJztlZzsi5zqsIQg7J2064K0IOyXrOufrOuyiCDtgbTrpq3si5wg7ZWc67KI66eMIOyalOyyre2VmOqyjCDtlahcclxuXHJcbiAgICAvLyDssqvrsojsp7jqurzrp4wg7Iuk7ZaJ7ZWY64qUIOuwqeuyleuPhCDsnojsnYwgdGFrZVJlYWRpbmc/XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgXSlcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9