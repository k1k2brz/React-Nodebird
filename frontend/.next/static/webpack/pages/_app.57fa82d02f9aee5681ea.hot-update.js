webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore, legacy_createStore, MiddlewareArray, SHOULD_AUTOBATCH, TaskAbortError, addListener, autoBatchEnhancer, clearAllListeners, configureStore, createAction, createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createImmutableStateInvariantMiddleware, createListenerMiddleware, createNextState, createReducer, createSelector, createSerializableStateInvariantMiddleware, createSlice, current, findNonSerializableValue, freeze, getDefaultMiddleware, getType, isAllOf, isAnyOf, isAsyncThunkAction, isDraft, isFulfilled, isImmutableDefault, isPending, isPlain, isPlainObject, isRejected, isRejectedWithValue, miniSerializeError, nanoid, original, prepareAutoBatched, removeListener, unwrapResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareArray", function() { return MiddlewareArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOULD_AUTOBATCH", function() { return SHOULD_AUTOBATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAbortError", function() { return TaskAbortError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addListener", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoBatchEnhancer", function() { return autoBatchEnhancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllListeners", function() { return clearAllListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAsyncThunk", function() { return createAsyncThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraftSafeSelector", function() { return createDraftSafeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImmutableStateInvariantMiddleware", function() { return createImmutableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListenerMiddleware", function() { return createListenerMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReducer", function() { return createReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSerializableStateInvariantMiddleware", function() { return createSerializableStateInvariantMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlice", function() { return createSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNonSerializableValue", function() { return findNonSerializableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultMiddleware", function() { return getDefaultMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllOf", function() { return isAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyOf", function() { return isAnyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAsyncThunkAction", function() { return isAsyncThunkAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFulfilled", function() { return isFulfilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutableDefault", function() { return isImmutableDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPending", function() { return isPending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlain", function() { return isPlain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejected", function() { return isRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRejectedWithValue", function() { return isRejectedWithValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miniSerializeError", function() { return miniSerializeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareAutoBatched", function() { return prepareAutoBatched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeListener", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapResult", function() { return unwrapResult; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["__DO_NOT_USE__ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["createStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacy_createStore", function() { return redux__WEBPACK_IMPORTED_MODULE_1__["legacy_createStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNextState", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "current", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["current"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["freeze"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "original", function() { return immer__WEBPACK_IMPORTED_MODULE_0__["original"]; });

/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"]; });

/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = reselect__WEBPACK_IMPORTED_MODULE_2__["createSelector"].apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(value) ? Object(immer__WEBPACK_IMPORTED_MODULE_0__["current"])(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
    return redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/getDefaultMiddleware.ts

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
function freezeDraftable(val) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraftable"])(val) ? Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(val, function () {
    }) : val;
}
// src/immutableStateInvariantMiddleware.ts
var isProduction = "development" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    for (var key in keysToDetect) {
        var childPath = path ? path + "." + key : key;
        if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
            continue;
        }
        var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
            continue;
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    return false;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j;
    return function (storeAPI) { return function (next) { return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
        }
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
        }
        else {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
        }
    }
    if (true) {
        if (immutableCheck) {
            var immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            var serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, finalMiddleware);
    var finalCompose = redux__WEBPACK_IMPORTED_MODULE_1__["compose"];
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var storeEnhancers = [middlewareEnhancer];
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(storeEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isFSA(action) {
    return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (true) {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    if (true) {
        if (typeof mapOrBuilderCallback === "object") {
            if (!hasWarnedAboutObjectNotation) {
                hasWarnedAboutObjectNotation = true;
                console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
            }
        }
    }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraftable"])(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "development" === "development") {
        if (options.initialState === void 0) {
            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        if (true) {
            if (typeof options.extraReducers === "object") {
                if (!hasWarnedAboutObjectNotation2) {
                    hasWarnedAboutObjectNotation2 = true;
                    console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
        }
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if (Object(immer__WEBPACK_IMPORTED_MODULE_0__["isDraft"])(state)) {
            runMutator(state);
            return state;
        }
        else {
            return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ( true && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                if (true) {
                    if (!displayedWarning) {
                        displayedWarning = true;
                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                    }
                }
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                var abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({ name: "AbortError", message: abortReason || "Aborted" }); }); });
                var started = false;
                function abort(reason) {
                    if (started) {
                        abortReason = reason;
                        abortController.abort();
                    }
                }
                var promise2 = function () {
                    return __async(this, null, function () {
                        var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = createAsyncThunk2;
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function (func, expected) {
    if (typeof func !== "function") {
        throw new TypeError(expected + " is not a function");
    }
};
var noop = function () {
};
var catchRejection = function (promise2, onError) {
    if (onError === void 0) { onError = noop; }
    promise2.catch(onError);
    return promise2;
};
var addAbortSignalListener = function (abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, { once: true });
};
var abortControllerWithReason = function (abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ (function () {
    function TaskAbortError(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError;
}());
// src/listenerMiddleware/task.ts
var validateActive = function (signal) {
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
var promisifyAbortSignal = function (signal) {
    return catchRejection(new Promise(function (_, reject) {
        var notifyRejection = function () { return reject(new TaskAbortError(signal.reason)); };
        if (signal.aborted) {
            notifyRejection();
        }
        else {
            addAbortSignalListener(signal, notifyRejection);
        }
    }));
};
var runTask = function (task2, cleanUp) { return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, Promise.resolve()];
            case 1:
                _c.sent();
                return [4 /*yield*/, task2()];
            case 2:
                value = _c.sent();
                return [2 /*return*/, {
                        status: "ok",
                        value: value
                    }];
            case 3:
                error_1 = _c.sent();
                return [2 /*return*/, {
                        status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                        error: error_1
                    }];
            case 4:
                cleanUp == null ? void 0 : cleanUp();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createPause = function (signal) {
    return function (promise2) {
        return catchRejection(Promise.race([promisifyAbortSignal(signal), promise2]).then(function (output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function (signal) {
    var pause = createPause(signal);
    return function (timeoutMs) {
        return pause(new Promise(function (resolve) { return setTimeout(resolve, timeoutMs); }));
    };
};
// src/listenerMiddleware/index.ts
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function (parentAbortSignal) {
    var linkControllers = function (controller) { return addAbortSignalListener(parentAbortSignal, function () { return abortControllerWithReason(controller, parentAbortSignal.reason); }); };
    return function (taskExecutor) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function () { return __async(void 0, null, function () {
            var result2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validateActive(parentAbortSignal);
                        validateActive(childAbortController.signal);
                        return [4 /*yield*/, taskExecutor({
                                pause: createPause(childAbortController.signal),
                                delay: createDelay(childAbortController.signal),
                                signal: childAbortController.signal
                            })];
                    case 1:
                        result2 = _c.sent();
                        validateActive(childAbortController.signal);
                        return [2 /*return*/, result2];
                }
            });
        }); }, function () { return abortControllerWithReason(childAbortController, taskCompleted); });
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function (startListening, signal) {
    var take = function (predicate, timeout) { return __async(void 0, null, function () {
        var unsubscribe, tuplePromise, promises, output;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    validateActive(signal);
                    unsubscribe = function () {
                    };
                    tuplePromise = new Promise(function (resolve) {
                        unsubscribe = startListening({
                            predicate: predicate,
                            effect: function (action, listenerApi) {
                                listenerApi.unsubscribe();
                                resolve([
                                    action,
                                    listenerApi.getState(),
                                    listenerApi.getOriginalState()
                                ]);
                            }
                        });
                    });
                    promises = [
                        promisifyAbortSignal(signal),
                        tuplePromise
                    ];
                    if (timeout != null) {
                        promises.push(new Promise(function (resolve) { return setTimeout(resolve, timeout, null); }));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, Promise.race(promises)];
                case 2:
                    output = _c.sent();
                    validateActive(signal);
                    return [2 /*return*/, output];
                case 3:
                    unsubscribe();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return function (predicate, timeout) { return catchRejection(take(predicate, timeout)); };
};
var getListenerEntryPropsFrom = function (options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) {
        predicate = createAction(type).match;
    }
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    }
    else if (matcher) {
        predicate = matcher;
    }
    else if (predicate) {
    }
    else {
        throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return { predicate: predicate, type: type, effect: effect };
};
var createListenerEntry = function (options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function () {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var createClearListenerMiddleware = function (listenerMap) {
    return function () {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    }
    catch (errorHandlerError) {
        setTimeout(function () {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([alm + "/error"], args));
};
var cancelActiveListeners = function (entry) {
    entry.pending.forEach(function (controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) { middlewareOptions = {}; }
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
    assertFunction(onError, "onError");
    var insertEntry = function (entry) {
        entry.unsubscribe = function () { return listenerMap.delete(entry.id); };
        listenerMap.set(entry.id, entry);
        return function (cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    var findListenerEntry = function (comparator) {
        for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
            var entry = _c[_i];
            if (comparator(entry)) {
                return entry;
            }
        }
        return void 0;
    };
    var startListening = function (options) {
        var entry = findListenerEntry(function (existingEntry) { return existingEntry.effect === options.effect; });
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    var stopListening = function (options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function (entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    var notifyListener = function (entry, action, api, getOriginalState) { return __async(_this, null, function () {
        var internalTaskController, take, listenerError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    internalTaskController = new AbortController();
                    take = createTakePattern(startListening, internalTaskController.signal);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    entry.pending.add(internalTaskController);
                    return [4 /*yield*/, Promise.resolve(entry.effect(action, assign({}, api, {
                            getOriginalState: getOriginalState,
                            condition: function (predicate, timeout) { return take(predicate, timeout).then(Boolean); },
                            take: take,
                            delay: createDelay(internalTaskController.signal),
                            pause: createPause(internalTaskController.signal),
                            extra: extra,
                            signal: internalTaskController.signal,
                            fork: createFork(internalTaskController.signal),
                            unsubscribe: entry.unsubscribe,
                            subscribe: function () {
                                listenerMap.set(entry.id, entry);
                            },
                            cancelActiveListeners: function () {
                                entry.pending.forEach(function (controller, _, set) {
                                    if (controller !== internalTaskController) {
                                        abortControllerWithReason(controller, listenerCancelled);
                                        set.delete(controller);
                                    }
                                });
                            }
                        })))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 3:
                    listenerError_1 = _c.sent();
                    if (!(listenerError_1 instanceof TaskAbortError)) {
                        safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    abortControllerWithReason(internalTaskController, listenerCompleted);
                    entry.pending.delete(internalTaskController);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function (api) { return function (next) { return function (action) {
        if (addListener.match(action)) {
            return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
            clearListenerMiddleware();
            return;
        }
        if (removeListener.match(action)) {
            return stopListening(action.payload);
        }
        var originalState = api.getState();
        var getOriginalState = function () {
            if (originalState === INTERNAL_NIL_TOKEN) {
                throw new Error(alm + ": getOriginalState can only be called synchronously");
            }
            return originalState;
        };
        var result;
        try {
            result = next(action);
            if (listenerMap.size > 0) {
                var currentState = api.getState();
                var listenerEntries = Array.from(listenerMap.values());
                for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
                    var entry = listenerEntries_1[_i];
                    var runListener = false;
                    try {
                        runListener = entry.predicate(action, currentState, originalState);
                    }
                    catch (predicateError) {
                        runListener = false;
                        safelyNotifyError(onError, predicateError, {
                            raisedBy: "predicate"
                        });
                    }
                    if (!runListener) {
                        continue;
                    }
                    notifyListener(entry, action, api, getOriginalState);
                }
            }
        }
        finally {
            originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
    }; }; };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var createQueueWithTimer = function (timeout) {
    return function (notify) {
        setTimeout(notify, timeout);
    };
};
var autoBatchEnhancer = function (options) {
    if (options === void 0) { options = { type: "raf" }; }
    return function (next) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var store = next.apply(void 0, args);
        var notifying = true;
        var shouldNotifyAtEndOfTick = false;
        var notificationQueued = false;
        var listeners = new Set();
        var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? requestAnimationFrame : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
        var notifyListeners = function () {
            notificationQueued = false;
            if (shouldNotifyAtEndOfTick) {
                shouldNotifyAtEndOfTick = false;
                listeners.forEach(function (l) { return l(); });
            }
        };
        return Object.assign({}, store, {
            subscribe: function (listener2) {
                var wrappedListener = function () { return notifying && listener2(); };
                var unsubscribe = store.subscribe(wrappedListener);
                listeners.add(listener2);
                return function () {
                    unsubscribe();
                    listeners.delete(listener2);
                };
            },
            dispatch: function (action) {
                var _a;
                try {
                    notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
                    shouldNotifyAtEndOfTick = !notifying;
                    if (shouldNotifyAtEndOfTick) {
                        if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                    }
                    return store.dispatch(action);
                }
                finally {
                    notifying = true;
                }
            }
        });
    }; };
};
// src/index.ts
Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();

//# sourceMappingURL=redux-toolkit.esm.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return dn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return sn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return vn; });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/reselect/es/defaultMemoize.js":
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/
/*! exports provided: defaultEqualityCheck, createCacheKeyComparator, defaultMemoize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEqualityCheck", function() { return defaultEqualityCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKeyComparator", function() { return createCacheKeyComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return defaultMemoize; });
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/*! exports provided: defaultMemoize, defaultEqualityCheck, createSelectorCreator, createSelector, createStructuredSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorCreator", function() { return createSelectorCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelector", function() { return createSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStructuredSelector", function() { return createStructuredSelector; });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultMemoize */ "./node_modules/reselect/es/defaultMemoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMemoize", function() { return _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__["defaultMemoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultEqualityCheck", function() { return _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__["defaultEqualityCheck"]; });




function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__["defaultMemoize"]);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ }),

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.tsx");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.tsx");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





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
var rootReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  // hydrate를 넣기 위해 index reducer 추가 (서버사이드 렌더링을 위해서)
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  mainPosts: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
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

/***/ }),

/***/ "./reducers/user.tsx":
/*!***************************!*\
  !*** ./reducers/user.tsx ***!
  \***************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
};
var loginAction = function loginAction(data) {
  return {
    type: 'LOG_IN',
    data: data
  };
};
var logoutAction = function logoutAction() {
  return {
    type: 'LOG_OUT'
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: action.data
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9yZWR1eC10b29sa2l0LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9kZWZhdWx0TWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLnRzeCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInJlZHVjZXIiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImxvZ291dEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QVcsQ0FBSUMsSUFBUyxFQUFLO0VBQ3RDLE9BQU87SUFDSFosSUFBSSxFQUFFLFFBQVE7SUFDZFksSUFBSSxFQUFKQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBQ00sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksR0FBUztFQUM5QixPQUFPO0lBQ0hiLElBQUksRUFBRTtFQUNWLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBcUM7RUFBQSxJQUFqQ1QsS0FBSyx1RUFBR08sWUFBWTtFQUFBLElBQUVOLE1BQU07RUFDekMsUUFBUUEsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBSyxRQUFRO01BQ1QsdUNBQ09GLEtBQUs7UUFDUlUsVUFBVSxFQUFFLElBQUk7UUFDaEJMLElBQUksRUFBRUosTUFBTSxDQUFDYTtNQUFJO0lBRXpCLEtBQUssU0FBUztNQUNWLHVDQUNPZCxLQUFLO1FBQ1JVLFVBQVUsRUFBRSxLQUFLO1FBQ2pCTCxJQUFJLEVBQUU7TUFBSTtJQUVsQjtNQUNJLE9BQU9MLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRWNTLHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41N2ZhODJkMDJmOWFlZTU2ODFlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59O1xyXG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xyXG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xyXG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcclxudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xyXG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XHJcbnZhciBfX2RlZk5vcm1hbFByb3AgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7IH07XHJcbnZhciBfX3NwcmVhZFZhbHVlcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXHJcbiAgICAgICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxyXG4gICAgICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XHJcbiAgICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9jID0gX19nZXRPd25Qcm9wU3ltYm9scyhiKTsgX2kgPCBfYy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3AgPSBfY1tfaV07XHJcbiAgICAgICAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcclxuICAgICAgICAgICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gYTtcclxufTtcclxudmFyIF9fc3ByZWFkUHJvcHMgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7IH07XHJcbnZhciBfX2FzeW5jID0gZnVuY3Rpb24gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgZnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfTtcclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLy8gc3JjL2luZGV4LnRzXHJcbmltcG9ydCB7IGVuYWJsZUVTNSB9IGZyb20gXCJpbW1lclwiO1xyXG5leHBvcnQgKiBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0MiwgY3VycmVudCBhcyBjdXJyZW50MiwgZnJlZXplLCBvcmlnaW5hbCwgaXNEcmFmdCBhcyBpc0RyYWZ0NCB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciBhcyBjcmVhdGVTZWxlY3RvcjIgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxuLy8gc3JjL2NyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLnRzXHJcbmltcG9ydCB7IGN1cnJlbnQsIGlzRHJhZnQgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxudmFyIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgIHZhciB3cmFwcGVkU2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW2lzRHJhZnQodmFsdWUpID8gY3VycmVudCh2YWx1ZSkgOiB2YWx1ZV0sIHJlc3QpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gd3JhcHBlZFNlbGVjdG9yO1xyXG59O1xyXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgYXMgY29tcG9zZTIsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vIHNyYy9kZXZ0b29sc0V4dGVuc2lvbi50c1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbnZhciBjb21wb3NlV2l0aERldlRvb2xzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gY29tcG9zZTtcclxuICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBkZXZUb29sc0VuaGFuY2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub29wMikge1xyXG4gICAgICAgIHJldHVybiBub29wMjtcclxuICAgIH07XHJcbn07XHJcbi8vIHNyYy9pc1BsYWluT2JqZWN0LnRzXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxuICAgIGlmIChwcm90byA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciBiYXNlUHJvdG8gPSBwcm90bztcclxuICAgIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XHJcbn1cclxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbi8vIHNyYy91dGlscy50c1xyXG5pbXBvcnQgY3JlYXRlTmV4dFN0YXRlLCB7IGlzRHJhZnRhYmxlIH0gZnJvbSBcImltbWVyXCI7XHJcbmZ1bmN0aW9uIGdldFRpbWVNZWFzdXJlVXRpbHMobWF4RGVsYXksIGZuTmFtZSkge1xyXG4gICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZWFzdXJlVGltZTogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVsYXBzZWQgKz0gZmluaXNoZWQgLSBzdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXJuSWZFeGNlZWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZWxhcHNlZCA+IG1heERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZm5OYW1lICsgXCIgdG9vayBcIiArIGVsYXBzZWQgKyBcIm1zLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIHdhcm5pbmcgdGhyZXNob2xkIG9mIFwiICsgbWF4RGVsYXkgKyBcIm1zLiBcXG5JZiB5b3VyIHN0YXRlIG9yIGFjdGlvbnMgYXJlIHZlcnkgbGFyZ2UsIHlvdSBtYXkgd2FudCB0byBkaXNhYmxlIHRoZSBtaWRkbGV3YXJlIGFzIGl0IG1pZ2h0IGNhdXNlIHRvbyBtdWNoIG9mIGEgc2xvd2Rvd24gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gU2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlIGZvciBpbnN0cnVjdGlvbnMuXFxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG52YXIgTWlkZGxld2FyZUFycmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1pZGRsZXdhcmVBcnJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1pZGRsZXdhcmVBcnJheSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3MpIHx8IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlkZGxld2FyZUFycmF5LCBTeW1ib2wuc3BlY2llcywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMsIGFycik7XHJcbiAgICB9O1xyXG4gICAgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgKE1pZGRsZXdhcmVBcnJheS5iaW5kLmFwcGx5KE1pZGRsZXdhcmVBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyWzBdLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IChNaWRkbGV3YXJlQXJyYXkuYmluZC5hcHBseShNaWRkbGV3YXJlQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyci5jb25jYXQodGhpcykpKSkoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG59KEFycmF5KSk7XHJcbmZ1bmN0aW9uIGZyZWV6ZURyYWZ0YWJsZSh2YWwpIHtcclxuICAgIHJldHVybiBpc0RyYWZ0YWJsZSh2YWwpID8gY3JlYXRlTmV4dFN0YXRlKHZhbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgfSkgOiB2YWw7XHJcbn1cclxuLy8gc3JjL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50c1xyXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG52YXIgcHJlZml4ID0gXCJJbnZhcmlhbnQgZmFpbGVkXCI7XHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmIChjb25kaXRpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4ICsgXCI6IFwiICsgKG1lc3NhZ2UgfHwgXCJcIikpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmosIHNlcmlhbGl6ZXIsIGluZGVudCwgZGVjeWNsZXIpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlciksIGluZGVudCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplKHNlcmlhbGl6ZXIsIGRlY3ljbGVyKSB7XHJcbiAgICB2YXIgc3RhY2sgPSBbXSwga2V5cyA9IFtdO1xyXG4gICAgaWYgKCFkZWN5Y2xlcilcclxuICAgICAgICBkZWN5Y2xlciA9IGZ1bmN0aW9uIChfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyIH5dXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcIltDaXJjdWxhciB+LlwiICsga2V5cy5zbGljZSgwLCBzdGFjay5pbmRleE9mKHZhbHVlKSkuam9pbihcIi5cIikgKyBcIl1cIjtcclxuICAgICAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICB+dGhpc1BvcyA/IHN0YWNrLnNwbGljZSh0aGlzUG9zICsgMSkgOiBzdGFjay5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICB+dGhpc1BvcyA/IGtleXMuc3BsaWNlKHRoaXNQb3MsIEluZmluaXR5LCBrZXkpIDoga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlY3ljbGVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZhbHVlIDogc2VyaWFsaXplci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0ltbXV0YWJsZURlZmF1bHQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT0gbnVsbCB8fCBPYmplY3QuaXNGcm96ZW4odmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNrRm9yTXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKSB7XHJcbiAgICB2YXIgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRlY3RNdXRhdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqLCBwYXRoKSB7XHJcbiAgICBpZiAoaWdub3JlUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVQYXRocyA9IFtdOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgdHJhY2tlZCA9IHsgdmFsdWU6IG9iaiB9O1xyXG4gICAgaWYgKCFpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICAgICAgdHJhY2tlZC5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGgpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhY2tlZC5jaGlsZHJlbltrZXldID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqW2tleV0sIGNoaWxkUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNrZWQ7XHJcbn1cclxuZnVuY3Rpb24gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnR5LCBvYmosIHNhbWVQYXJlbnRSZWYsIHBhdGgpIHtcclxuICAgIGlmIChpZ25vcmVQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZVBhdGhzID0gW107IH1cclxuICAgIGlmIChzYW1lUGFyZW50UmVmID09PSB2b2lkIDApIHsgc2FtZVBhcmVudFJlZiA9IGZhbHNlOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHZvaWQgMDtcclxuICAgIHZhciBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqO1xyXG4gICAgaWYgKHNhbWVQYXJlbnRSZWYgJiYgIXNhbWVSZWYgJiYgIU51bWJlci5pc05hTihvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aDogcGF0aCB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgICAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgdmFyIGtleXNUb0RldGVjdCA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbikge1xyXG4gICAgICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4ga2V5c1RvRGV0ZWN0KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuW2tleV0sIG9ialtrZXldLCBzYW1lUmVmLCBjaGlsZFBhdGgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zLmlzSW1tdXRhYmxlLCBpc0ltbXV0YWJsZSA9IF9jID09PSB2b2lkIDAgPyBpc0ltbXV0YWJsZURlZmF1bHQgOiBfYywgaWdub3JlZFBhdGhzID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIF9kID0gb3B0aW9ucy53YXJuQWZ0ZXIsIHdhcm5BZnRlciA9IF9kID09PSB2b2lkIDAgPyAzMiA6IF9kLCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZTtcclxuICAgIGlnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocyB8fCBpZ25vcmU7XHJcbiAgICB2YXIgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgIHZhciBnZXRTdGF0ZSA9IF9jLmdldFN0YXRlO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIkltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaW52YXJpYW50KCFyZXN1bHQud2FzTXV0YXRlZCwgXCJBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBiZXR3ZWVuIGRpc3BhdGNoZXMsIGluIHRoZSBwYXRoICdcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiJy4gIFRoaXMgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvci4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmIGludmFyaWFudCghcmVzdWx0Lndhc011dGF0ZWQsIFwiQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiBcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiLiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uIFwiICsgc3RyaW5naWZ5KGFjdGlvbikgKyBcIi4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uO1xyXG4gICAgICAgIH07IH07XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcclxuZnVuY3Rpb24gaXNQbGFpbih2YWwpIHtcclxuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcclxuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiIHx8IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgQXJyYXkuaXNBcnJheSh2YWwpIHx8IGlzUGxhaW5PYmplY3QodmFsKTtcclxufVxyXG5mdW5jdGlvbiBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUodmFsdWUsIHBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpIHtcclxuICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IFwiXCI7IH1cclxuICAgIGlmIChpc1NlcmlhbGl6YWJsZSA9PT0gdm9pZCAwKSB7IGlzU2VyaWFsaXphYmxlID0gaXNQbGFpbjsgfVxyXG4gICAgaWYgKGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZWRQYXRocyA9IFtdOyB9XHJcbiAgICB2YXIgZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XHJcbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleVBhdGg6IHBhdGggfHwgXCI8cm9vdD5cIixcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xyXG4gICAgdmFyIGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBlbnRyaWVzXzEgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgX2MgPSBlbnRyaWVzXzFbX2ldLCBrZXkgPSBfY1swXSwgbmVzdGVkVmFsdWUgPSBfY1sxXTtcclxuICAgICAgICB2YXIgbmVzdGVkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGhhc0lnbm9yZWRQYXRocyAmJiBpZ25vcmVkUGF0aHMuaW5kZXhPZihuZXN0ZWRQYXRoKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKG5lc3RlZFZhbHVlLCBuZXN0ZWRQYXRoLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zLmlzU2VyaWFsaXphYmxlLCBpc1NlcmlhbGl6YWJsZSA9IF9jID09PSB2b2lkIDAgPyBpc1BsYWluIDogX2MsIGdldEVudHJpZXMgPSBvcHRpb25zLmdldEVudHJpZXMsIF9kID0gb3B0aW9ucy5pZ25vcmVkQWN0aW9ucywgaWdub3JlZEFjdGlvbnMgPSBfZCA9PT0gdm9pZCAwID8gW10gOiBfZCwgX2UgPSBvcHRpb25zLmlnbm9yZWRBY3Rpb25QYXRocywgaWdub3JlZEFjdGlvblBhdGhzID0gX2UgPT09IHZvaWQgMCA/IFtcIm1ldGEuYXJnXCIsIFwibWV0YS5iYXNlUXVlcnlNZXRhXCJdIDogX2UsIF9mID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIGlnbm9yZWRQYXRocyA9IF9mID09PSB2b2lkIDAgPyBbXSA6IF9mLCBfZyA9IG9wdGlvbnMud2FybkFmdGVyLCB3YXJuQWZ0ZXIgPSBfZyA9PT0gdm9pZCAwID8gMzIgOiBfZywgX2ggPSBvcHRpb25zLmlnbm9yZVN0YXRlLCBpZ25vcmVTdGF0ZSA9IF9oID09PSB2b2lkIDAgPyBmYWxzZSA6IF9oLCBfaiA9IG9wdGlvbnMuaWdub3JlQWN0aW9ucywgaWdub3JlQWN0aW9ucyA9IF9qID09PSB2b2lkIDAgPyBmYWxzZSA6IF9qO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZUFQSSkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgIHZhciBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKHdhcm5BZnRlciwgXCJTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVcIik7XHJcbiAgICAgICAgaWYgKCFpZ25vcmVBY3Rpb25zICYmICEoaWdub3JlZEFjdGlvbnMubGVuZ3RoICYmIGlnbm9yZWRBY3Rpb25zLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKGFjdGlvbiwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRBY3Rpb25QYXRocyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZS5rZXlQYXRoLCB2YWx1ZSA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogYFwiICsga2V5UGF0aCArIFwiYC4gVmFsdWU6XCIsIHZhbHVlLCBcIlxcblRha2UgYSBsb29rIGF0IHRoZSBsb2dpYyB0aGF0IGRpc3BhdGNoZWQgdGhpcyBhY3Rpb246IFwiLCBhY3Rpb24sIFwiXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvYWN0aW9ucyN3aHktc2hvdWxkLXR5cGUtYmUtYS1zdHJpbmctb3ItYXQtbGVhc3Qtc2VyaWFsaXphYmxlLXdoeS1zaG91bGQtbXktYWN0aW9uLXR5cGVzLWJlLWNvbnN0YW50cylcIiwgXCJcXG4oVG8gYWxsb3cgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZXMgc2VlOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGEpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpZ25vcmVTdGF0ZSkge1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoc3RhdGUsIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsIHZhbHVlID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIHRoZSBzdGF0ZSwgaW4gdGhlIHBhdGg6IGBcIiArIGtleVBhdGggKyBcImAuIFZhbHVlOlwiLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGlzIGFjdGlvbiB0eXBlOiBcIiArIGFjdGlvbi50eXBlICsgXCIuXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvb3JnYW5pemluZy1zdGF0ZSNjYW4taS1wdXQtZnVuY3Rpb25zLXByb21pc2VzLW9yLW90aGVyLW5vbi1zZXJpYWxpemFibGUtaXRlbXMtaW4tbXktc3RvcmUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9OyB9OyB9O1xyXG59XHJcbi8vIHNyYy9nZXREZWZhdWx0TWlkZGxld2FyZS50c1xyXG5mdW5jdGlvbiBpc0Jvb2xlYW4oeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcclxufVxyXG5mdW5jdGlvbiBjdXJyeUdldERlZmF1bHRNaWRkbGV3YXJlKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9jID0gb3B0aW9ucy50aHVuaywgdGh1bmsgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuaW1tdXRhYmxlQ2hlY2ssIGltbXV0YWJsZUNoZWNrID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBvcHRpb25zLnNlcmlhbGl6YWJsZUNoZWNrLCBzZXJpYWxpemFibGVDaGVjayA9IF9lID09PSB2b2lkIDAgPyB0cnVlIDogX2U7XHJcbiAgICB2YXIgbWlkZGxld2FyZUFycmF5ID0gbmV3IE1pZGRsZXdhcmVBcnJheSgpO1xyXG4gICAgaWYgKHRodW5rKSB7XHJcbiAgICAgICAgaWYgKGlzQm9vbGVhbih0aHVuaykpIHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHRodW5rTWlkZGxld2FyZS53aXRoRXh0cmFBcmd1bWVudCh0aHVuay5leHRyYUFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmIChpbW11dGFibGVDaGVjaykge1xyXG4gICAgICAgICAgICB2YXIgaW1tdXRhYmxlT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIWlzQm9vbGVhbihpbW11dGFibGVDaGVjaykpIHtcclxuICAgICAgICAgICAgICAgIGltbXV0YWJsZU9wdGlvbnMgPSBpbW11dGFibGVDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkudW5zaGlmdChjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoaW1tdXRhYmxlT3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXphYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFpc0Jvb2xlYW4oc2VyaWFsaXphYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemFibGVPcHRpb25zID0gc2VyaWFsaXphYmxlQ2hlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWlkZGxld2FyZUFycmF5O1xyXG59XHJcbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xyXG52YXIgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUob3B0aW9ucykge1xyXG4gICAgdmFyIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcclxuICAgIHZhciBfYyA9IG9wdGlvbnMgfHwge30sIF9kID0gX2MucmVkdWNlciwgcmVkdWNlciA9IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZCwgX2UgPSBfYy5taWRkbGV3YXJlLCBtaWRkbGV3YXJlID0gX2UgPT09IHZvaWQgMCA/IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpIDogX2UsIF9mID0gX2MuZGV2VG9vbHMsIGRldlRvb2xzID0gX2YgPT09IHZvaWQgMCA/IHRydWUgOiBfZiwgX2cgPSBfYy5wcmVsb2FkZWRTdGF0ZSwgcHJlbG9hZGVkU3RhdGUgPSBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2csIF9oID0gX2MuZW5oYW5jZXJzLCBlbmhhbmNlcnMgPSBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2g7XHJcbiAgICB2YXIgcm9vdFJlZHVjZXI7XHJcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJvb3RSZWR1Y2VyID0gcmVkdWNlcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgICAgICByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJyZWR1Y2VyXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudCwgYW5kIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnMnKTtcclxuICAgIH1cclxuICAgIHZhciBmaW5hbE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlO1xyXG4gICAgaWYgKHR5cGVvZiBmaW5hbE1pZGRsZXdhcmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGZpbmFsTWlkZGxld2FyZSA9IGZpbmFsTWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpO1xyXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTiAmJiAhQXJyYXkuaXNBcnJheShmaW5hbE1pZGRsZXdhcmUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndoZW4gdXNpbmcgYSBtaWRkbGV3YXJlIGJ1aWxkZXIgZnVuY3Rpb24sIGFuIGFycmF5IG9mIG1pZGRsZXdhcmUgbXVzdCBiZSByZXR1cm5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgZmluYWxNaWRkbGV3YXJlLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHR5cGVvZiBpdGVtICE9PSBcImZ1bmN0aW9uXCI7IH0pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWFjaCBtaWRkbGV3YXJlIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZVN0b3JlIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIHZhciBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUuYXBwbHkodm9pZCAwLCBmaW5hbE1pZGRsZXdhcmUpO1xyXG4gICAgdmFyIGZpbmFsQ29tcG9zZSA9IGNvbXBvc2UyO1xyXG4gICAgaWYgKGRldlRvb2xzKSB7XHJcbiAgICAgICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTlxyXG4gICAgICAgIH0sIHR5cGVvZiBkZXZUb29scyA9PT0gXCJvYmplY3RcIiAmJiBkZXZUb29scykpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0b3JlRW5oYW5jZXJzID0gW21pZGRsZXdhcmVFbmhhbmNlcl07XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBfX3NwcmVhZEFycmF5KFttaWRkbGV3YXJlRW5oYW5jZXJdLCBlbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGVuaGFuY2VycyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBlbmhhbmNlcnMoc3RvcmVFbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbXBvc2VkRW5oYW5jZXIgPSBmaW5hbENvbXBvc2UuYXBwbHkodm9pZCAwLCBzdG9yZUVuaGFuY2Vycyk7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlZEVuaGFuY2VyKTtcclxufVxyXG4vLyBzcmMvY3JlYXRlQWN0aW9uLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlcGFyZUFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICghcHJlcGFyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZFxyXG4gICAgICAgICAgICB9LCBcIm1ldGFcIiBpbiBwcmVwYXJlZCAmJiB7IG1ldGE6IHByZXBhcmVkLm1ldGEgfSksIFwiZXJyb3JcIiBpbiBwcmVwYXJlZCAmJiB7IGVycm9yOiBwcmVwYXJlZC5lcnJvciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogYXJnc1swXSB9O1xyXG4gICAgfVxyXG4gICAgYWN0aW9uQ3JlYXRvci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiXCIgKyB0eXBlOyB9O1xyXG4gICAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZTtcclxuICAgIGFjdGlvbkNyZWF0b3IubWF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBhY3Rpb24udHlwZSA9PT0gdHlwZTsgfTtcclxuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGlzRlNBKGFjdGlvbikge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiB0eXBlb2YgYWN0aW9uLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgT2JqZWN0LmtleXMoYWN0aW9uKS5ldmVyeShpc1ZhbGlkS2V5KTtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIFtcInR5cGVcIiwgXCJwYXlsb2FkXCIsIFwiZXJyb3JcIiwgXCJtZXRhXCJdLmluZGV4T2Yoa2V5KSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGdldFR5cGUoYWN0aW9uQ3JlYXRvcikge1xyXG4gICAgcmV0dXJuIFwiXCIgKyBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVSZWR1Y2VyLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUyLCB7IGlzRHJhZnQgYXMgaXNEcmFmdDIsIGlzRHJhZnRhYmxlIGFzIGlzRHJhZnRhYmxlMiB9IGZyb20gXCJpbW1lclwiO1xyXG4vLyBzcmMvbWFwQnVpbGRlcnMudHNcclxuZnVuY3Rpb24gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2soYnVpbGRlckNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYWN0aW9uc01hcCA9IHt9O1xyXG4gICAgdmFyIGFjdGlvbk1hdGNoZXJzID0gW107XHJcbiAgICB2YXIgZGVmYXVsdENhc2VSZWR1Y2VyO1xyXG4gICAgdmFyIGJ1aWxkZXIgPSB7XHJcbiAgICAgICAgYWRkQ2FzZTogZnVuY3Rpb24gKHR5cGVPckFjdGlvbkNyZWF0b3IsIHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk1hdGNoZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSBcInN0cmluZ1wiID8gdHlwZU9yQWN0aW9uQ3JlYXRvciA6IHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgaW4gYWN0aW9uc01hcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWRkQ2FzZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25zTWFwW3R5cGVdID0gcmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNYXRjaGVyOiBmdW5jdGlvbiAobWF0Y2hlciwgcmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25NYXRjaGVycy5wdXNoKHsgbWF0Y2hlcjogbWF0Y2hlciwgcmVkdWNlcjogcmVkdWNlciB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREZWZhdWx0Q2FzZTogZnVuY3Rpb24gKHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCBjYW4gb25seSBiZSBjYWxsZWQgb25jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpO1xyXG4gICAgcmV0dXJuIFthY3Rpb25zTWFwLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXTtcclxufVxyXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xyXG5mdW5jdGlvbiBpc1N0YXRlRnVuY3Rpb24oeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxudmFyIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24gPSBmYWxzZTtcclxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIG1hcE9yQnVpbGRlckNhbGxiYWNrLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICBpZiAoYWN0aW9uTWF0Y2hlcnMgPT09IHZvaWQgMCkgeyBhY3Rpb25NYXRjaGVycyA9IFtdOyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIG9iamVjdCBub3RhdGlvbiBmb3IgYGNyZWF0ZVJlZHVjZXJgIGlzIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUlRLIDIuMC4gUGxlYXNlIHVzZSB0aGUgJ2J1aWxkZXIgY2FsbGJhY2snIG5vdGF0aW9uIGluc3RlYWQ6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2NyZWF0ZVJlZHVjZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSB0eXBlb2YgbWFwT3JCdWlsZGVyQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKSA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl0sIGFjdGlvbnNNYXAgPSBfY1swXSwgZmluYWxBY3Rpb25NYXRjaGVycyA9IF9jWzFdLCBmaW5hbERlZmF1bHRDYXNlUmVkdWNlciA9IF9jWzJdO1xyXG4gICAgdmFyIGdldEluaXRpYWxTdGF0ZTtcclxuICAgIGlmIChpc1N0YXRlRnVuY3Rpb24oaW5pdGlhbFN0YXRlKSkge1xyXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyZWV6ZURyYWZ0YWJsZShpbml0aWFsU3RhdGUoKSk7IH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZnJvemVuSW5pdGlhbFN0YXRlXzEgPSBmcmVlemVEcmFmdGFibGUoaW5pdGlhbFN0YXRlKTtcclxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmcm96ZW5Jbml0aWFsU3RhdGVfMTsgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7IH1cclxuICAgICAgICB2YXIgY2FzZVJlZHVjZXJzID0gX19zcHJlYWRBcnJheShbXHJcbiAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdXHJcbiAgICAgICAgXSwgZmluYWxBY3Rpb25NYXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gX2MubWF0Y2hlcjtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcclxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHZhciByZWR1Y2VyMiA9IF9jLnJlZHVjZXI7XHJcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2VyMjtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKGNhc2VSZWR1Y2Vycy5maWx0ZXIoZnVuY3Rpb24gKGNyKSB7IHJldHVybiAhIWNyOyB9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXJzID0gW2ZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZnQyKHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWZ0ID0gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzRHJhZnRhYmxlMihwcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYXNlUmVkdWNlcihwcmV2aW91c1N0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBIGNhc2UgcmVkdWNlciBvbiBhIG5vbi1kcmFmdGFibGUgdmFsdWUgbXVzdCBub3QgcmV0dXJuIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUyKHByZXZpb3VzU3RhdGUsIGZ1bmN0aW9uIChkcmFmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgfSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmVkdWNlci5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XHJcbiAgICByZXR1cm4gcmVkdWNlcjtcclxufVxyXG4vLyBzcmMvY3JlYXRlU2xpY2UudHNcclxudmFyIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24yID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGdldFR5cGUyKHNsaWNlLCBhY3Rpb25LZXkpIHtcclxuICAgIHJldHVybiBzbGljZSArIFwiL1wiICsgYWN0aW9uS2V5O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWNlKG9wdGlvbnMpIHtcclxuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYG5hbWVgIGlzIGEgcmVxdWlyZWQgb3B0aW9uIGZvciBjcmVhdGVTbGljZVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYW4gYGluaXRpYWxTdGF0ZWAgdmFsdWUgdGhhdCBpcyBub3QgYHVuZGVmaW5lZGAuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGBpbml0aWFsU3RhdGVgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsU3RhdGUgPT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5pbml0aWFsU3RhdGUgOiBmcmVlemVEcmFmdGFibGUob3B0aW9ucy5pbml0aWFsU3RhdGUpO1xyXG4gICAgdmFyIHJlZHVjZXJzID0gb3B0aW9ucy5yZWR1Y2VycyB8fCB7fTtcclxuICAgIHZhciByZWR1Y2VyTmFtZXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XHJcbiAgICB2YXIgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUgPSB7fTtcclxuICAgIHZhciBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSA9IHt9O1xyXG4gICAgdmFyIGFjdGlvbkNyZWF0b3JzID0ge307XHJcbiAgICByZWR1Y2VyTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocmVkdWNlck5hbWUpIHtcclxuICAgICAgICB2YXIgbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUgPSByZWR1Y2Vyc1tyZWR1Y2VyTmFtZV07XHJcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlMihuYW1lLCByZWR1Y2VyTmFtZSk7XHJcbiAgICAgICAgdmFyIGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIHZhciBwcmVwYXJlQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYgKFwicmVkdWNlclwiIGluIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlKSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucmVkdWNlcjtcclxuICAgICAgICAgICAgcHJlcGFyZUNhbGxiYWNrID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucHJlcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lW3JlZHVjZXJOYW1lXSA9IGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlW3R5cGVdID0gY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgYWN0aW9uQ3JlYXRvcnNbcmVkdWNlck5hbWVdID0gcHJlcGFyZUNhbGxiYWNrID8gY3JlYXRlQWN0aW9uKHR5cGUsIHByZXBhcmVDYWxsYmFjaykgOiBjcmVhdGVBY3Rpb24odHlwZSk7XHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIGJ1aWxkUmVkdWNlcigpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbjIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBvYmplY3Qgbm90YXRpb24gZm9yIGBjcmVhdGVTbGljZS5leHRyYVJlZHVjZXJzYCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJUSyAyLjAuIFBsZWFzZSB1c2UgdGhlICdidWlsZGVyIGNhbGxiYWNrJyBub3RhdGlvbiBpbnN0ZWFkOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9jcmVhdGVTbGljZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2MgPSB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCIgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhvcHRpb25zLmV4dHJhUmVkdWNlcnMpIDogW29wdGlvbnMuZXh0cmFSZWR1Y2Vyc10sIF9kID0gX2NbMF0sIGV4dHJhUmVkdWNlcnMgPSBfZCA9PT0gdm9pZCAwID8ge30gOiBfZCwgX2UgPSBfY1sxXSwgYWN0aW9uTWF0Y2hlcnMgPSBfZSA9PT0gdm9pZCAwID8gW10gOiBfZSwgX2YgPSBfY1syXSwgZGVmYXVsdENhc2VSZWR1Y2VyID0gX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mO1xyXG4gICAgICAgIHZhciBmaW5hbENhc2VSZWR1Y2VycyA9IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBleHRyYVJlZHVjZXJzKSwgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZpbmFsQ2FzZVJlZHVjZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZENhc2Uoa2V5LCBmaW5hbENhc2VSZWR1Y2Vyc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFjdGlvbk1hdGNoZXJzXzEgPSBhY3Rpb25NYXRjaGVyczsgX2kgPCBhY3Rpb25NYXRjaGVyc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSBhY3Rpb25NYXRjaGVyc18xW19pXTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkTWF0Y2hlcihtLm1hdGNoZXIsIG0ucmVkdWNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGREZWZhdWx0Q2FzZShkZWZhdWx0Q2FzZVJlZHVjZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgX3JlZHVjZXI7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgcmVkdWNlcjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKCFfcmVkdWNlcilcclxuICAgICAgICAgICAgICAgIF9yZWR1Y2VyID0gYnVpbGRSZWR1Y2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbkNyZWF0b3JzLFxyXG4gICAgICAgIGNhc2VSZWR1Y2Vyczogc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUsXHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghX3JlZHVjZXIpXHJcbiAgICAgICAgICAgICAgICBfcmVkdWNlciA9IGJ1aWxkUmVkdWNlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3JlZHVjZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvZW50aXR5X3N0YXRlLnRzXHJcbmZ1bmN0aW9uIGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWRzOiBbXSxcclxuICAgICAgICBlbnRpdGllczoge31cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShhZGRpdGlvbmFsU3RhdGUpIHtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbFN0YXRlID09PSB2b2lkIDApIHsgYWRkaXRpb25hbFN0YXRlID0ge307IH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihnZXRJbml0aWFsRW50aXR5U3RhdGUoKSwgYWRkaXRpb25hbFN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGdldEluaXRpYWxTdGF0ZTogZ2V0SW5pdGlhbFN0YXRlIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX3NlbGVjdG9ycy50c1xyXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHNlbGVjdFN0YXRlKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdElkcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuaWRzOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RFbnRpdGllcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuZW50aXRpZXM7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEFsbCA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIGZ1bmN0aW9uIChpZHMsIGVudGl0aWVzKSB7IHJldHVybiBpZHMubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZW50aXRpZXNbaWRdOyB9KTsgfSk7XHJcbiAgICAgICAgdmFyIHNlbGVjdElkID0gZnVuY3Rpb24gKF8sIGlkKSB7IHJldHVybiBpZDsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0QnlJZCA9IGZ1bmN0aW9uIChlbnRpdGllcywgaWQpIHsgcmV0dXJuIGVudGl0aWVzW2lkXTsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0VG90YWwgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RJZHMsIGZ1bmN0aW9uIChpZHMpIHsgcmV0dXJuIGlkcy5sZW5ndGg7IH0pO1xyXG4gICAgICAgIGlmICghc2VsZWN0U3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdElkczogc2VsZWN0SWRzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0QWxsOiBzZWxlY3RBbGwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUb3RhbDogc2VsZWN0VG90YWwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RFbnRpdGllcywgc2VsZWN0SWQsIHNlbGVjdEJ5SWQpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0RW50aXRpZXMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdElkczogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdElkcyksXHJcbiAgICAgICAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsXHJcbiAgICAgICAgICAgIHNlbGVjdEFsbDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdEFsbCksXHJcbiAgICAgICAgICAgIHNlbGVjdFRvdGFsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0VG90YWwpLFxyXG4gICAgICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBnZXRTZWxlY3RvcnM6IGdldFNlbGVjdG9ycyB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9zdGF0ZV9hZGFwdGVyLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUzLCB7IGlzRHJhZnQgYXMgaXNEcmFmdDMgfSBmcm9tIFwiaW1tZXJcIjtcclxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcclxuICAgIHZhciBvcGVyYXRvciA9IGNyZWF0ZVN0YXRlT3BlcmF0b3IoZnVuY3Rpb24gKF8sIHN0YXRlKSB7IHJldHVybiBtdXRhdG9yKHN0YXRlKTsgfSk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gb3BlcmF0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yKHN0YXRlLCB2b2lkIDApO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUsIGFyZykge1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZzIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRlNBKGFyZzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcnVuTXV0YXRvciA9IGZ1bmN0aW9uIChkcmFmdCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRvcihhcmcucGF5bG9hZCwgZHJhZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRvcihhcmcsIGRyYWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRHJhZnQzKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBydW5NdXRhdG9yKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZTMoc3RhdGUsIHJ1bk11dGF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3V0aWxzLnRzXHJcbmZ1bmN0aW9uIHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCkge1xyXG4gICAgdmFyIGtleSA9IHNlbGVjdElkKGVudGl0eSk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGtleSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGVudGl0eSBwYXNzZWQgdG8gdGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgdW5kZWZpbmVkLlwiLCBcIllvdSBzaG91bGQgcHJvYmFibHkgcHJvdmlkZSB5b3VyIG93biBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uLlwiLCBcIlRoZSBlbnRpdHkgdGhhdCB3YXMgcGFzc2VkOlwiLCBlbnRpdHksIFwiVGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb246XCIsIHNlbGVjdElkLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5mdW5jdGlvbiBlbnN1cmVFbnRpdGllc0FycmF5KGVudGl0aWVzKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgICAgZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKGVudGl0aWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRpdGllcztcclxufVxyXG5mdW5jdGlvbiBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpIHtcclxuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICB2YXIgYWRkZWQgPSBbXTtcclxuICAgIHZhciB1cGRhdGVkID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzEgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18xW19pXTtcclxuICAgICAgICB2YXIgaWQgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmIChpZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICB1cGRhdGVkLnB1c2goeyBpZDogaWQsIGNoYW5nZXM6IGVudGl0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkLnB1c2goZW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2FkZGVkLCB1cGRhdGVkXTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvdW5zb3J0ZWRfc3RhdGVfYWRhcHRlci50c1xyXG5mdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCkge1xyXG4gICAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmlkcy5wdXNoKGtleSk7XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18yID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzJbX2ldO1xyXG4gICAgICAgICAgICBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmICghKGtleSBpbiBzdGF0ZS5lbnRpdGllcykpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18zID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzNbX2ldO1xyXG4gICAgICAgICAgICBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBzdGF0ZS5pZHMgPSBbXTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllcyA9IHt9O1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVPbmVNdXRhYmx5KGtleSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlTWFueU11dGFibHkoW2tleV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hbnlNdXRhYmx5KGtleXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGRpZE11dGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1trZXldO1xyXG4gICAgICAgICAgICAgICAgZGlkTXV0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkaWRNdXRhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLmZpbHRlcihmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGlkIGluIHN0YXRlLmVudGl0aWVzOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxNdXRhYmx5KHN0YXRlKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgICAgICAgICBpZHM6IFtdLFxyXG4gICAgICAgICAgICBlbnRpdGllczoge31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VOZXdLZXkoa2V5cywgdXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbDIgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIHZhciB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwyLCB1cGRhdGUuY2hhbmdlcyk7XHJcbiAgICAgICAgdmFyIG5ld0tleSA9IHNlbGVjdElkVmFsdWUodXBkYXRlZCwgc2VsZWN0SWQpO1xyXG4gICAgICAgIHZhciBoYXNOZXdLZXkgPSBuZXdLZXkgIT09IHVwZGF0ZS5pZDtcclxuICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XHJcbiAgICAgICAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleTtcclxuICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkO1xyXG4gICAgICAgIHJldHVybiBoYXNOZXdLZXk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG5ld0tleXMgPSB7fTtcclxuICAgICAgICB2YXIgdXBkYXRlc1BlckVudGl0eSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGUuaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXBkYXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXM6IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPyB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0uY2hhbmdlcyA6IG51bGwpLCB1cGRhdGUuY2hhbmdlcylcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVzID0gT2JqZWN0LnZhbHVlcyh1cGRhdGVzUGVyRW50aXR5KTtcclxuICAgICAgICB2YXIgZGlkTXV0YXRlRW50aXRpZXMgPSB1cGRhdGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKGRpZE11dGF0ZUVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkaWRNdXRhdGVJZHMgPSB1cGRhdGVzLmZpbHRlcihmdW5jdGlvbiAodXBkYXRlKSB7IHJldHVybiB0YWtlTmV3S2V5KG5ld0tleXMsIHVwZGF0ZSwgc3RhdGUpOyB9KS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pZHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYyA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSksIGFkZGVkID0gX2NbMF0sIHVwZGF0ZWQgPSBfY1sxXTtcclxuICAgICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KSxcclxuICAgICAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXHJcbiAgICAgICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydCkge1xyXG4gICAgdmFyIF9jID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpLCByZW1vdmVPbmUgPSBfYy5yZW1vdmVPbmUsIHJlbW92ZU1hbnkgPSBfYy5yZW1vdmVNYW55LCByZW1vdmVBbGwgPSBfYy5yZW1vdmVBbGw7XHJcbiAgICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgdmFyIG1vZGVscyA9IG5ld0VudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuICEoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpIGluIHN0YXRlLmVudGl0aWVzKTsgfSk7XHJcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobW9kZWxzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGlmIChuZXdFbnRpdGllcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICBzdGF0ZS5pZHMgPSBbXTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBhcHBsaWVkVXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdXBkYXRlc18xID0gdXBkYXRlczsgX2kgPCB1cGRhdGVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGUgPSB1cGRhdGVzXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcGxpZWRVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihlbnRpdHksIHVwZGF0ZS5jaGFuZ2VzKTtcclxuICAgICAgICAgICAgdmFyIG5ld0lkID0gc2VsZWN0SWQoZW50aXR5KTtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZS5pZCAhPT0gbmV3SWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZW50aXRpZXNbbmV3SWRdID0gZW50aXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcHBsaWVkVXBkYXRlcykge1xyXG4gICAgICAgICAgICByZXNvcnRFbnRpdGllcyhzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwc2VydE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgX2MgPSBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpLCBhZGRlZCA9IF9jWzBdLCB1cGRhdGVkID0gX2NbMV07XHJcbiAgICAgICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpO1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcmVBcnJheXNFcXVhbChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtZXJnZShtb2RlbHMsIHN0YXRlKSB7XHJcbiAgICAgICAgbW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmVudGl0aWVzW3NlbGVjdElkKG1vZGVsKV0gPSBtb2RlbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNvcnRFbnRpdGllcyhzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNvcnRFbnRpdGllcyhzdGF0ZSkge1xyXG4gICAgICAgIHZhciBhbGxFbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMpO1xyXG4gICAgICAgIGFsbEVudGl0aWVzLnNvcnQoc29ydCk7XHJcbiAgICAgICAgdmFyIG5ld1NvcnRlZElkcyA9IGFsbEVudGl0aWVzLm1hcChzZWxlY3RJZCk7XHJcbiAgICAgICAgdmFyIGlkcyA9IHN0YXRlLmlkcztcclxuICAgICAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmVPbmU6IHJlbW92ZU9uZSxcclxuICAgICAgICByZW1vdmVNYW55OiByZW1vdmVNYW55LFxyXG4gICAgICAgIHJlbW92ZUFsbDogcmVtb3ZlQWxsLFxyXG4gICAgICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL2NyZWF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXIob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYyA9IF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdElkOiBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlLmlkOyB9XHJcbiAgICB9LCBvcHRpb25zKSwgc2VsZWN0SWQgPSBfYy5zZWxlY3RJZCwgc29ydENvbXBhcmVyID0gX2Muc29ydENvbXBhcmVyO1xyXG4gICAgdmFyIHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKTtcclxuICAgIHZhciBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpO1xyXG4gICAgdmFyIHN0YXRlQWRhcHRlciA9IHNvcnRDb21wYXJlciA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKSA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKTtcclxuICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgc2VsZWN0SWQ6IHNlbGVjdElkLFxyXG4gICAgICAgIHNvcnRDb21wYXJlcjogc29ydENvbXBhcmVyXHJcbiAgICB9LCBzdGF0ZUZhY3RvcnkpLCBzZWxlY3RvcnNGYWN0b3J5KSwgc3RhdGVBZGFwdGVyKTtcclxufVxyXG4vLyBzcmMvbmFub2lkLnRzXHJcbnZhciB1cmxBbHBoYWJldCA9IFwiTW9kdWxlU3ltYmhhc093blByLTAxMjM0NTY3ODlBQkNERUZHSE5SVmZnY3RpVXZ6X0txWVRKa0x4cFpYSWpRV1wiO1xyXG52YXIgbmFub2lkID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgIGlmIChzaXplID09PSB2b2lkIDApIHsgc2l6ZSA9IDIxOyB9XHJcbiAgICB2YXIgaWQgPSBcIlwiO1xyXG4gICAgdmFyIGkgPSBzaXplO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIGlkICs9IHVybEFscGhhYmV0W01hdGgucmFuZG9tKCkgKiA2NCB8IDBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkO1xyXG59O1xyXG4vLyBzcmMvY3JlYXRlQXN5bmNUaHVuay50c1xyXG52YXIgY29tbW9uUHJvcGVydGllcyA9IFtcclxuICAgIFwibmFtZVwiLFxyXG4gICAgXCJtZXNzYWdlXCIsXHJcbiAgICBcInN0YWNrXCIsXHJcbiAgICBcImNvZGVcIlxyXG5dO1xyXG52YXIgUmVqZWN0V2l0aFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVqZWN0V2l0aFZhbHVlKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVqZWN0V2l0aFZhbHVlO1xyXG59KCkpO1xyXG52YXIgRnVsZmlsbFdpdGhNZXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnVsZmlsbFdpdGhNZXRhKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRnVsZmlsbFdpdGhNZXRhO1xyXG59KCkpO1xyXG52YXIgbWluaVNlcmlhbGl6ZUVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHNpbXBsZUVycm9yID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21tb25Qcm9wZXJ0aWVzXzEgPSBjb21tb25Qcm9wZXJ0aWVzOyBfaSA8IGNvbW1vblByb3BlcnRpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gY29tbW9uUHJvcGVydGllc18xW19pXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtwcm9wZXJ0eV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2ltcGxlRXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtZXNzYWdlOiBTdHJpbmcodmFsdWUpIH07XHJcbn07XHJcbnZhciBjcmVhdGVBc3luY1RodW5rID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGh1bmsyKHR5cGVQcmVmaXgsIHBheWxvYWRDcmVhdG9yLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGZ1bGZpbGxlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvZnVsZmlsbGVkXCIsIGZ1bmN0aW9uIChwYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgbWV0YTogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWV0YSB8fCB7fSksIHtcclxuICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3RhdHVzOiBcImZ1bGZpbGxlZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciBwZW5kaW5nID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9wZW5kaW5nXCIsIGZ1bmN0aW9uIChyZXF1ZXN0SWQsIGFyZywgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogdm9pZCAwLFxyXG4gICAgICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwicGVuZGluZ1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcmVqZWN0ZWRcIiwgZnVuY3Rpb24gKGVycm9yLCByZXF1ZXN0SWQsIGFyZywgcGF5bG9hZCwgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgZXJyb3I6IChvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplRXJyb3IgfHwgbWluaVNlcmlhbGl6ZUVycm9yKShlcnJvciB8fCBcIlJlamVjdGVkXCIpLFxyXG4gICAgICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIHJlamVjdGVkV2l0aFZhbHVlOiAhIXBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3RhdHVzOiBcInJlamVjdGVkXCIsXHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkOiAoZXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yLm5hbWUpID09PSBcIkFib3J0RXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogKGVycm9yID09IG51bGwgPyB2b2lkIDAgOiBlcnJvci5uYW1lKSA9PT0gXCJDb25kaXRpb25FcnJvclwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciBkaXNwbGF5ZWRXYXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIEFDID0gdHlwZW9mIEFib3J0Q29udHJvbGxlciAhPT0gXCJ1bmRlZmluZWRcIiA/IEFib3J0Q29udHJvbGxlciA6IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25hYm9ydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiB2b2lkIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dJZkFib3J0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGlzcGxheWVkV2FybmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVGhpcyBwbGF0Zm9ybSBkb2VzIG5vdCBpbXBsZW1lbnQgQWJvcnRDb250cm9sbGVyLiBcXG5JZiB5b3Ugd2FudCB0byB1c2UgdGhlIEFib3J0Q29udHJvbGxlciB0byByZWFjdCB0byBgYWJvcnRgIGV2ZW50cywgcGxlYXNlIGNvbnNpZGVyIGltcG9ydGluZyBhIHBvbHlmaWxsIGxpa2UgJ2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5Jy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoYXJnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RJZCA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmlkR2VuZXJhdG9yKSA/IG9wdGlvbnMuaWRHZW5lcmF0b3IoYXJnKSA6IG5hbm9pZCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFib3J0Q29udHJvbGxlciA9IG5ldyBBQygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFib3J0UmVhc29uO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFib3J0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkgeyByZXR1cm4gYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KHsgbmFtZTogXCJBYm9ydEVycm9yXCIsIG1lc3NhZ2U6IGFib3J0UmVhc29uIHx8IFwiQWJvcnRlZFwiIH0pOyB9KTsgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWJvcnQocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRSZWFzb24gPSByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIGZpbmFsQWN0aW9uLCBjb25kaXRpb25SZXN1bHQsIGVycl8xLCBza2lwRGlzcGF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMCwgNCwgLCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IChfYSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY29uZGl0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCBhcmcsIHsgZ2V0U3RhdGU6IGdldFN0YXRlLCBleHRyYTogZXh0cmEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZShjb25kaXRpb25SZXN1bHQpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29uZGl0aW9uUmVzdWx0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvblJlc3VsdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbmRpdGlvbkVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBYm9ydGVkIGR1ZSB0byBjb25kaXRpb24gY2FsbGJhY2sgcmV0dXJuaW5nIGZhbHNlLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChwZW5kaW5nKHJlcXVlc3RJZCwgYXJnLCAoX2IgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldFBlbmRpbmdNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChvcHRpb25zLCB7IHJlcXVlc3RJZDogcmVxdWVzdElkLCBhcmc6IGFyZyB9LCB7IGdldFN0YXRlOiBnZXRTdGF0ZSwgZXh0cmE6IGV4dHJhIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmFjZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlZFByb21pc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHBheWxvYWRDcmVhdG9yKGFyZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydDogYWJvcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFdpdGhWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlamVjdFdpdGhWYWx1ZSh2YWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGZpbGxXaXRoVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGdWxmaWxsV2l0aE1ldGEodmFsdWUsIG1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEZ1bGZpbGxXaXRoTWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZChyZXN1bHQucGF5bG9hZCwgcmVxdWVzdElkLCBhcmcsIHJlc3VsdC5tZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEFjdGlvbiA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBlcnJfMSBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSA/IHJlamVjdGVkKG51bGwsIHJlcXVlc3RJZCwgYXJnLCBlcnJfMS5wYXlsb2FkLCBlcnJfMS5tZXRhKSA6IHJlamVjdGVkKGVycl8xLCByZXF1ZXN0SWQsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcERpc3BhdGNoID0gb3B0aW9ucyAmJiAhb3B0aW9ucy5kaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiAmJiByZWplY3RlZC5tYXRjaChmaW5hbEFjdGlvbikgJiYgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcERpc3BhdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmaW5hbEFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbmFsQWN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlMiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiBhYm9ydCxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgICAgICB1bndyYXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UyLnRoZW4odW53cmFwUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWN0aW9uQ3JlYXRvciwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBwZW5kaW5nLFxyXG4gICAgICAgICAgICByZWplY3RlZDogcmVqZWN0ZWQsXHJcbiAgICAgICAgICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxyXG4gICAgICAgICAgICB0eXBlUHJlZml4OiB0eXBlUHJlZml4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBc3luY1RodW5rMi53aXRoVHlwZXMgPSBjcmVhdGVBc3luY1RodW5rMjtcclxuICAgIHJldHVybiBjcmVhdGVBc3luY1RodW5rMjtcclxufSkoKTtcclxuZnVuY3Rpb24gdW53cmFwUmVzdWx0KGFjdGlvbikge1xyXG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgYWN0aW9uLmVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG4vLyBzcmMvdHNIZWxwZXJzLnRzXHJcbnZhciBoYXNNYXRjaEZ1bmN0aW9uID0gZnVuY3Rpb24gKHYpIHtcclxuICAgIHJldHVybiB2ICYmIHR5cGVvZiB2Lm1hdGNoID09PSBcImZ1bmN0aW9uXCI7XHJcbn07XHJcbi8vIHNyYy9tYXRjaGVycy50c1xyXG52YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uIChtYXRjaGVyLCBhY3Rpb24pIHtcclxuICAgIGlmIChoYXNNYXRjaEZ1bmN0aW9uKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIubWF0Y2goYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGlzQW55T2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLnNvbWUoZnVuY3Rpb24gKG1hdGNoZXIpIHsgcmV0dXJuIG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKTsgfSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzQWxsT2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLmV2ZXJ5KGZ1bmN0aW9uIChtYXRjaGVyKSB7IHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7IH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIHZhbGlkU3RhdHVzKSB7XHJcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLm1ldGEpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGhhc1ZhbGlkUmVxdWVzdElkID0gdHlwZW9mIGFjdGlvbi5tZXRhLnJlcXVlc3RJZCA9PT0gXCJzdHJpbmdcIjtcclxuICAgIHZhciBoYXNWYWxpZFJlcXVlc3RTdGF0dXMgPSB2YWxpZFN0YXR1cy5pbmRleE9mKGFjdGlvbi5tZXRhLnJlcXVlc3RTdGF0dXMpID4gLTE7XHJcbiAgICByZXR1cm4gaGFzVmFsaWRSZXF1ZXN0SWQgJiYgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FycmF5KGEpIHtcclxuICAgIHJldHVybiB0eXBlb2YgYVswXSA9PT0gXCJmdW5jdGlvblwiICYmIFwicGVuZGluZ1wiIGluIGFbMF0gJiYgXCJmdWxmaWxsZWRcIiBpbiBhWzBdICYmIFwicmVqZWN0ZWRcIiBpbiBhWzBdO1xyXG59XHJcbmZ1bmN0aW9uIGlzUGVuZGluZygpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNQZW5kaW5nKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsucGVuZGluZzsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1JlamVjdGVkKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicmVqZWN0ZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNSZWplY3RlZCgpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLnJlamVjdGVkOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBoYXNGbGFnID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWU7XHJcbiAgICB9O1xyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNGdWxmaWxsZWQoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJmdWxmaWxsZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNGdWxmaWxsZWQoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5mdWxmaWxsZWQ7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNBc3luY1RodW5rQWN0aW9uKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiLCBcImZ1bGZpbGxlZFwiLCBcInJlamVjdGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQXN5bmNUaHVua0FjdGlvbigpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhc3luY1RodW5rc18xID0gYXN5bmNUaHVua3M7IF9pIDwgYXN5bmNUaHVua3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGFzeW5jVGh1bmsgPSBhc3luY1RodW5rc18xW19pXTtcclxuICAgICAgICAgICAgbWF0Y2hlcnMucHVzaChhc3luY1RodW5rLnBlbmRpbmcsIGFzeW5jVGh1bmsucmVqZWN0ZWQsIGFzeW5jVGh1bmsuZnVsZmlsbGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL3V0aWxzLnRzXHJcbnZhciBhc3NlcnRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jLCBleHBlY3RlZCkge1xyXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGV4cGVjdGVkICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbn07XHJcbnZhciBub29wID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG52YXIgY2F0Y2hSZWplY3Rpb24gPSBmdW5jdGlvbiAocHJvbWlzZTIsIG9uRXJyb3IpIHtcclxuICAgIGlmIChvbkVycm9yID09PSB2b2lkIDApIHsgb25FcnJvciA9IG5vb3A7IH1cclxuICAgIHByb21pc2UyLmNhdGNoKG9uRXJyb3IpO1xyXG4gICAgcmV0dXJuIHByb21pc2UyO1xyXG59O1xyXG52YXIgYWRkQWJvcnRTaWduYWxMaXN0ZW5lciA9IGZ1bmN0aW9uIChhYm9ydFNpZ25hbCwgY2FsbGJhY2spIHtcclxuICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYWxsYmFjaywgeyBvbmNlOiB0cnVlIH0pO1xyXG59O1xyXG52YXIgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbiA9IGZ1bmN0aW9uIChhYm9ydENvbnRyb2xsZXIsIHJlYXNvbikge1xyXG4gICAgdmFyIHNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XHJcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIShcInJlYXNvblwiIGluIHNpZ25hbCkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2lnbmFsLCBcInJlYXNvblwiLCB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiByZWFzb24sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGFib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xyXG59O1xyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL2V4Y2VwdGlvbnMudHNcclxudmFyIHRhc2sgPSBcInRhc2tcIjtcclxudmFyIGxpc3RlbmVyID0gXCJsaXN0ZW5lclwiO1xyXG52YXIgY29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcclxudmFyIGNhbmNlbGxlZCA9IFwiY2FuY2VsbGVkXCI7XHJcbnZhciB0YXNrQ2FuY2VsbGVkID0gXCJ0YXNrLVwiICsgY2FuY2VsbGVkO1xyXG52YXIgdGFza0NvbXBsZXRlZCA9IFwidGFzay1cIiArIGNvbXBsZXRlZDtcclxudmFyIGxpc3RlbmVyQ2FuY2VsbGVkID0gbGlzdGVuZXIgKyBcIi1cIiArIGNhbmNlbGxlZDtcclxudmFyIGxpc3RlbmVyQ29tcGxldGVkID0gbGlzdGVuZXIgKyBcIi1cIiArIGNvbXBsZXRlZDtcclxudmFyIFRhc2tBYm9ydEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFza0Fib3J0RXJyb3IoY29kZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUYXNrQWJvcnRFcnJvclwiO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRhc2sgKyBcIiBcIiArIGNhbmNlbGxlZCArIFwiIChyZWFzb246IFwiICsgY29kZSArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRhc2tBYm9ydEVycm9yO1xyXG59KCkpO1xyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL3Rhc2sudHNcclxudmFyIHZhbGlkYXRlQWN0aXZlID0gZnVuY3Rpb24gKHNpZ25hbCkge1xyXG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFRhc2tBYm9ydEVycm9yKHNpZ25hbC5yZWFzb24pO1xyXG4gICAgfVxyXG59O1xyXG52YXIgcHJvbWlzaWZ5QWJvcnRTaWduYWwgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICByZXR1cm4gY2F0Y2hSZWplY3Rpb24obmV3IFByb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBub3RpZnlSZWplY3Rpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3QobmV3IFRhc2tBYm9ydEVycm9yKHNpZ25hbC5yZWFzb24pKTsgfTtcclxuICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgbm90aWZ5UmVqZWN0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRBYm9ydFNpZ25hbExpc3RlbmVyKHNpZ25hbCwgbm90aWZ5UmVqZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcbn07XHJcbnZhciBydW5UYXNrID0gZnVuY3Rpb24gKHRhc2syLCBjbGVhblVwKSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHZhbHVlLCBlcnJvcl8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFswLCAzLCA0LCA1XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRhc2syKCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJva1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3JfMSBpbnN0YW5jZW9mIFRhc2tBYm9ydEVycm9yID8gXCJjYW5jZWxsZWRcIiA6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzFcclxuICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCA9PSBudWxsID8gdm9pZCAwIDogY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG52YXIgY3JlYXRlUGF1c2UgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb21pc2UyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGNoUmVqZWN0aW9uKFByb21pc2UucmFjZShbcHJvbWlzaWZ5QWJvcnRTaWduYWwoc2lnbmFsKSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uIChvdXRwdXQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgY3JlYXRlRGVsYXkgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICB2YXIgcGF1c2UgPSBjcmVhdGVQYXVzZShzaWduYWwpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aW1lb3V0TXMpIHtcclxuICAgICAgICByZXR1cm4gcGF1c2UobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dE1zKTsgfSkpO1xyXG4gICAgfTtcclxufTtcclxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS9pbmRleC50c1xyXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcclxudmFyIElOVEVSTkFMX05JTF9UT0tFTiA9IHt9O1xyXG52YXIgYWxtID0gXCJsaXN0ZW5lck1pZGRsZXdhcmVcIjtcclxudmFyIGNyZWF0ZUZvcmsgPSBmdW5jdGlvbiAocGFyZW50QWJvcnRTaWduYWwpIHtcclxuICAgIHZhciBsaW5rQ29udHJvbGxlcnMgPSBmdW5jdGlvbiAoY29udHJvbGxlcikgeyByZXR1cm4gYWRkQWJvcnRTaWduYWxMaXN0ZW5lcihwYXJlbnRBYm9ydFNpZ25hbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBwYXJlbnRBYm9ydFNpZ25hbC5yZWFzb24pOyB9KTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFza0V4ZWN1dG9yKSB7XHJcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24odGFza0V4ZWN1dG9yLCBcInRhc2tFeGVjdXRvclwiKTtcclxuICAgICAgICB2YXIgY2hpbGRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgbGlua0NvbnRyb2xsZXJzKGNoaWxkQWJvcnRDb250cm9sbGVyKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcnVuVGFzayhmdW5jdGlvbiAoKSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0MjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUocGFyZW50QWJvcnRTaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXNrRXhlY3V0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBjcmVhdGVEZWxheShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQyID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0Ml07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ29tcGxldGVkKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdWx0OiBjcmVhdGVQYXVzZShwYXJlbnRBYm9ydFNpZ25hbCkocmVzdWx0KSxcclxuICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ2FuY2VsbGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59O1xyXG52YXIgY3JlYXRlVGFrZVBhdHRlcm4gPSBmdW5jdGlvbiAoc3RhcnRMaXN0ZW5pbmcsIHNpZ25hbCkge1xyXG4gICAgdmFyIHRha2UgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aW1lb3V0KSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1bnN1YnNjcmliZSwgdHVwbGVQcm9taXNlLCBwcm9taXNlcywgb3V0cHV0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0dXBsZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSA9IHN0YXJ0TGlzdGVuaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0OiBmdW5jdGlvbiAoYWN0aW9uLCBsaXN0ZW5lckFwaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyQXBpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJBcGkuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJBcGkuZ2V0T3JpZ2luYWxTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNpZnlBYm9ydFNpZ25hbChzaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dXBsZVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0LCBudWxsKTsgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAsIDMsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJhY2UocHJvbWlzZXMpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgb3V0cHV0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGltZW91dCkgeyByZXR1cm4gY2F0Y2hSZWplY3Rpb24odGFrZShwcmVkaWNhdGUsIHRpbWVvdXQpKTsgfTtcclxufTtcclxudmFyIGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUsIGFjdGlvbkNyZWF0b3IgPSBvcHRpb25zLmFjdGlvbkNyZWF0b3IsIG1hdGNoZXIgPSBvcHRpb25zLm1hdGNoZXIsIHByZWRpY2F0ZSA9IG9wdGlvbnMucHJlZGljYXRlLCBlZmZlY3QgPSBvcHRpb25zLmVmZmVjdDtcclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgcHJlZGljYXRlID0gY3JlYXRlQWN0aW9uKHR5cGUpLm1hdGNoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYWN0aW9uQ3JlYXRvcikge1xyXG4gICAgICAgIHR5cGUgPSBhY3Rpb25DcmVhdG9yLnR5cGU7XHJcbiAgICAgICAgcHJlZGljYXRlID0gYWN0aW9uQ3JlYXRvci5tYXRjaDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1hdGNoZXIpIHtcclxuICAgICAgICBwcmVkaWNhdGUgPSBtYXRjaGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJlZGljYXRlKSB7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDcmVhdGluZyBvciByZW1vdmluZyBhIGxpc3RlbmVyIHJlcXVpcmVzIG9uZSBvZiB0aGUga25vd24gZmllbGRzIGZvciBtYXRjaGluZyBhbiBhY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBhc3NlcnRGdW5jdGlvbihlZmZlY3QsIFwib3B0aW9ucy5saXN0ZW5lclwiKTtcclxuICAgIHJldHVybiB7IHByZWRpY2F0ZTogcHJlZGljYXRlLCB0eXBlOiB0eXBlLCBlZmZlY3Q6IGVmZmVjdCB9O1xyXG59O1xyXG52YXIgY3JlYXRlTGlzdGVuZXJFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgX2MgPSBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tKG9wdGlvbnMpLCB0eXBlID0gX2MudHlwZSwgcHJlZGljYXRlID0gX2MucHJlZGljYXRlLCBlZmZlY3QgPSBfYy5lZmZlY3Q7XHJcbiAgICB2YXIgaWQgPSBuYW5vaWQoKTtcclxuICAgIHZhciBlbnRyeSA9IHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgZWZmZWN0OiBlZmZlY3QsXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZSxcclxuICAgICAgICBwZW5kaW5nOiBuZXcgU2V0KCksXHJcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdWJzY3JpYmUgbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbn07XHJcbnZhciBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZSA9IGZ1bmN0aW9uIChsaXN0ZW5lck1hcCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsaXN0ZW5lck1hcC5mb3JFYWNoKGNhbmNlbEFjdGl2ZUxpc3RlbmVycyk7XHJcbiAgICAgICAgbGlzdGVuZXJNYXAuY2xlYXIoKTtcclxuICAgIH07XHJcbn07XHJcbnZhciBzYWZlbHlOb3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvckhhbmRsZXIsIGVycm9yVG9Ob3RpZnksIGVycm9ySW5mbykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3JUb05vdGlmeSwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvckhhbmRsZXJFcnJvcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvckhhbmRsZXJFcnJvcjtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufTtcclxudmFyIGFkZExpc3RlbmVyID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL2FkZFwiKTtcclxudmFyIGNsZWFyQWxsTGlzdGVuZXJzID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL3JlbW92ZUFsbFwiKTtcclxudmFyIHJlbW92ZUxpc3RlbmVyID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL3JlbW92ZVwiKTtcclxudmFyIGRlZmF1bHRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF9fc3ByZWFkQXJyYXkoW2FsbSArIFwiL2Vycm9yXCJdLCBhcmdzKSk7XHJcbn07XHJcbnZhciBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgIGVudHJ5LnBlbmRpbmcuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbGxlcikge1xyXG4gICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgbGlzdGVuZXJDYW5jZWxsZWQpO1xyXG4gICAgfSk7XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyTWlkZGxld2FyZShtaWRkbGV3YXJlT3B0aW9ucykge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmIChtaWRkbGV3YXJlT3B0aW9ucyA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmVPcHRpb25zID0ge307IH1cclxuICAgIHZhciBsaXN0ZW5lck1hcCA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBleHRyYSA9IG1pZGRsZXdhcmVPcHRpb25zLmV4dHJhLCBfYyA9IG1pZGRsZXdhcmVPcHRpb25zLm9uRXJyb3IsIG9uRXJyb3IgPSBfYyA9PT0gdm9pZCAwID8gZGVmYXVsdEVycm9ySGFuZGxlciA6IF9jO1xyXG4gICAgYXNzZXJ0RnVuY3Rpb24ob25FcnJvciwgXCJvbkVycm9yXCIpO1xyXG4gICAgdmFyIGluc2VydEVudHJ5ID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgZW50cnkudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBsaXN0ZW5lck1hcC5kZWxldGUoZW50cnkuaWQpOyB9O1xyXG4gICAgICAgIGxpc3RlbmVyTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FuY2VsT3B0aW9ucykge1xyXG4gICAgICAgICAgICBlbnRyeS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2FuY2VsT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogY2FuY2VsT3B0aW9ucy5jYW5jZWxBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVycyhlbnRyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHZhciBmaW5kTGlzdGVuZXJFbnRyeSA9IGZ1bmN0aW9uIChjb21wYXJhdG9yKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IEFycmF5LmZyb20obGlzdGVuZXJNYXAudmFsdWVzKCkpOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSBfY1tfaV07XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJhdG9yKGVudHJ5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN0YXJ0TGlzdGVuaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSBmaW5kTGlzdGVuZXJFbnRyeShmdW5jdGlvbiAoZXhpc3RpbmdFbnRyeSkgeyByZXR1cm4gZXhpc3RpbmdFbnRyeS5lZmZlY3QgPT09IG9wdGlvbnMuZWZmZWN0OyB9KTtcclxuICAgICAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgICAgIGVudHJ5ID0gY3JlYXRlTGlzdGVuZXJFbnRyeShvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc2VydEVudHJ5KGVudHJ5KTtcclxuICAgIH07XHJcbiAgICB2YXIgc3RvcExpc3RlbmluZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9jID0gZ2V0TGlzdGVuZXJFbnRyeVByb3BzRnJvbShvcHRpb25zKSwgdHlwZSA9IF9jLnR5cGUsIGVmZmVjdCA9IF9jLmVmZmVjdCwgcHJlZGljYXRlID0gX2MucHJlZGljYXRlO1xyXG4gICAgICAgIHZhciBlbnRyeSA9IGZpbmRMaXN0ZW5lckVudHJ5KGZ1bmN0aW9uIChlbnRyeTIpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoUHJlZGljYXRlT3JUeXBlID0gdHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgPyBlbnRyeTIudHlwZSA9PT0gdHlwZSA6IGVudHJ5Mi5wcmVkaWNhdGUgPT09IHByZWRpY2F0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoUHJlZGljYXRlT3JUeXBlICYmIGVudHJ5Mi5lZmZlY3QgPT09IGVmZmVjdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgZW50cnkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMoZW50cnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhIWVudHJ5O1xyXG4gICAgfTtcclxuICAgIHZhciBub3RpZnlMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbnRyeSwgYWN0aW9uLCBhcGksIGdldE9yaWdpbmFsU3RhdGUpIHsgcmV0dXJuIF9fYXN5bmMoX3RoaXMsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW50ZXJuYWxUYXNrQ29udHJvbGxlciwgdGFrZSwgbGlzdGVuZXJFcnJvcl8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGFza0NvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFrZSA9IGNyZWF0ZVRha2VQYXR0ZXJuKHN0YXJ0TGlzdGVuaW5nLCBpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuYWRkKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmVzb2x2ZShlbnRyeS5lZmZlY3QoYWN0aW9uLCBhc3NpZ24oe30sIGFwaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxTdGF0ZTogZ2V0T3JpZ2luYWxTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGltZW91dCkgeyByZXR1cm4gdGFrZShwcmVkaWNhdGUsIHRpbWVvdXQpLnRoZW4oQm9vbGVhbik7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlOiB0YWtlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGNyZWF0ZURlbGF5KGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yazogY3JlYXRlRm9yayhpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZW50cnkudW5zdWJzY3JpYmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lck1hcC5zZXQoZW50cnkuaWQsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xsZXIsIF8sIHNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlciAhPT0gaW50ZXJuYWxUYXNrQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBsaXN0ZW5lckNhbmNlbGxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckVycm9yXzEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobGlzdGVuZXJFcnJvcl8xIGluc3RhbmNlb2YgVGFza0Fib3J0RXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIGxpc3RlbmVyRXJyb3JfMSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpc2VkQnk6IFwiZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oaW50ZXJuYWxUYXNrQ29udHJvbGxlciwgbGlzdGVuZXJDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuZGVsZXRlKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB2YXIgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUgPSBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZShsaXN0ZW5lck1hcCk7XHJcbiAgICB2YXIgbWlkZGxld2FyZSA9IGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGFkZExpc3RlbmVyLm1hdGNoKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0TGlzdGVuaW5nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsZWFyQWxsTGlzdGVuZXJzLm1hdGNoKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVtb3ZlTGlzdGVuZXIubWF0Y2goYWN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcExpc3RlbmluZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcmlnaW5hbFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIGdldE9yaWdpbmFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0YXRlID09PSBJTlRFUk5BTF9OSUxfVE9LRU4pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihhbG0gKyBcIjogZ2V0T3JpZ2luYWxTdGF0ZSBjYW4gb25seSBiZSBjYWxsZWQgc3luY2hyb25vdXNseVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxTdGF0ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJNYXAuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lckVudHJpZXMgPSBBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbGlzdGVuZXJFbnRyaWVzXzEgPSBsaXN0ZW5lckVudHJpZXM7IF9pIDwgbGlzdGVuZXJFbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gbGlzdGVuZXJFbnRyaWVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBydW5MaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bkxpc3RlbmVyID0gZW50cnkucHJlZGljYXRlKGFjdGlvbiwgY3VycmVudFN0YXRlLCBvcmlnaW5hbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKHByZWRpY2F0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bkxpc3RlbmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIHByZWRpY2F0ZUVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlzZWRCeTogXCJwcmVkaWNhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFydW5MaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXIoZW50cnksIGFjdGlvbiwgYXBpLCBnZXRPcmlnaW5hbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgb3JpZ2luYWxTdGF0ZSA9IElOVEVSTkFMX05JTF9UT0tFTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07IH07IH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmc6IHN0YXJ0TGlzdGVuaW5nLFxyXG4gICAgICAgIHN0b3BMaXN0ZW5pbmc6IHN0b3BMaXN0ZW5pbmcsXHJcbiAgICAgICAgY2xlYXJMaXN0ZW5lcnM6IGNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlXHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9hdXRvQmF0Y2hFbmhhbmNlci50c1xyXG52YXIgU0hPVUxEX0FVVE9CQVRDSCA9IFwiUlRLX2F1dG9CYXRjaFwiO1xyXG52YXIgcHJlcGFyZUF1dG9CYXRjaGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHBheWxvYWQpIHtcclxuICAgIHZhciBfYztcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgbWV0YTogKF9jID0ge30sIF9jW1NIT1VMRF9BVVRPQkFUQ0hdID0gdHJ1ZSwgX2MpXHJcbiAgICB9KTtcclxufTsgfTtcclxudmFyIHByb21pc2U7XHJcbnZhciBxdWV1ZU1pY3JvdGFza1NoaW0gPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09IFwiZnVuY3Rpb25cIiA/IHF1ZXVlTWljcm90YXNrLmJpbmQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IGdsb2JhbCkgOiBmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIChwcm9taXNlIHx8IChwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkpKS50aGVuKGNiKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHRocm93IGVycjtcclxufSwgMCk7IH0pOyB9O1xyXG52YXIgY3JlYXRlUXVldWVXaXRoVGltZXIgPSBmdW5jdGlvbiAodGltZW91dCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub3RpZnkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KG5vdGlmeSwgdGltZW91dCk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgYXV0b0JhdGNoRW5oYW5jZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0geyB0eXBlOiBcInJhZlwiIH07IH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSBuZXh0LmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgdmFyIG5vdGlmeWluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvblF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIHF1ZXVlQ2FsbGJhY2sgPSBvcHRpb25zLnR5cGUgPT09IFwidGlja1wiID8gcXVldWVNaWNyb3Rhc2tTaGltIDogb3B0aW9ucy50eXBlID09PSBcInJhZlwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogb3B0aW9ucy50eXBlID09PSBcImNhbGxiYWNrXCIgPyBvcHRpb25zLnF1ZXVlTm90aWZpY2F0aW9uIDogY3JlYXRlUXVldWVXaXRoVGltZXIob3B0aW9ucy50aW1lb3V0KTtcclxuICAgICAgICB2YXIgbm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25RdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzaG91bGROb3RpZnlBdEVuZE9mVGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwoKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdG9yZSwge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChsaXN0ZW5lcjIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnlpbmcgJiYgbGlzdGVuZXIyKCk7IH07XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUod3JhcHBlZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyMik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlpbmcgPSAhKChfYSA9IGFjdGlvbiA9PSBudWxsID8gdm9pZCAwIDogYWN0aW9uLm1ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfYVtTSE9VTERfQVVUT0JBVENIXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSAhbm90aWZ5aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnlBdEVuZE9mVGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vdGlmaWNhdGlvblF1ZXVlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uUXVldWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlQ2FsbGJhY2sobm90aWZ5TGlzdGVuZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07IH07XHJcbn07XHJcbi8vIHNyYy9pbmRleC50c1xyXG5lbmFibGVFUzUoKTtcclxuZXhwb3J0IHsgTWlkZGxld2FyZUFycmF5LCBTSE9VTERfQVVUT0JBVENILCBUYXNrQWJvcnRFcnJvciwgYWRkTGlzdGVuZXIsIGF1dG9CYXRjaEVuaGFuY2VyLCBjbGVhckFsbExpc3RlbmVycywgY29uZmlndXJlU3RvcmUsIGNyZWF0ZUFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IsIGNyZWF0ZUVudGl0eUFkYXB0ZXIsIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSwgY3JlYXRlTGlzdGVuZXJNaWRkbGV3YXJlLCBkZWZhdWx0MiBhcyBjcmVhdGVOZXh0U3RhdGUsIGNyZWF0ZVJlZHVjZXIsIGNyZWF0ZVNlbGVjdG9yMiBhcyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLCBjcmVhdGVTbGljZSwgY3VycmVudDIgYXMgY3VycmVudCwgZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlLCBmcmVlemUsIGdldERlZmF1bHRNaWRkbGV3YXJlLCBnZXRUeXBlLCBpc0FsbE9mLCBpc0FueU9mLCBpc0FzeW5jVGh1bmtBY3Rpb24sIGlzRHJhZnQ0IGFzIGlzRHJhZnQsIGlzRnVsZmlsbGVkLCBpc0ltbXV0YWJsZURlZmF1bHQsIGlzUGVuZGluZywgaXNQbGFpbiwgaXNQbGFpbk9iamVjdCwgaXNSZWplY3RlZCwgaXNSZWplY3RlZFdpdGhWYWx1ZSwgbWluaVNlcmlhbGl6ZUVycm9yLCBuYW5vaWQsIG9yaWdpbmFsLCBwcmVwYXJlQXV0b0JhdGNoZWQsIHJlbW92ZUxpc3RlbmVyLCB1bndyYXBSZXN1bHQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVkdXgtdG9vbGtpdC5lc20uanMubWFwIiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KHI+MT9yLTE6MCksZT0xO2U8cjtlKyspdFtlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCx0KTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyh0Lmxlbmd0aD9cIiBcIit0Lm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHQobil7dmFyIHI7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09cilyZXR1cm4hMDt2YXIgdD1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyLFwiY29uc3RydWN0b3JcIikmJnIuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT1PYmplY3R8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCk9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIShudWxsPT09KHI9bi5jb25zdHJ1Y3Rvcil8fHZvaWQgMD09PXI/dm9pZCAwOnJbTF0pfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHQpe3JldHVybiByKHQpfHxuKDIzLHQpLHRbUV0udH1mdW5jdGlvbiBpKG4scix0KXt2b2lkIDA9PT10JiYodD0hMSksMD09PW8obik/KHQ/T2JqZWN0LmtleXM6bm4pKG4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QmJlwic3ltYm9sXCI9PXR5cGVvZiBlfHxyKGUsbltlXSxuKX0pKTpuLmZvckVhY2goKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHIoZSx0LG4pfSkpfWZ1bmN0aW9uIG8obil7dmFyIHI9bltRXTtyZXR1cm4gcj9yLmk+Mz9yLmktNDpyLmk6QXJyYXkuaXNBcnJheShuKT8xOnMobik/Mjp2KG4pPzM6MH1mdW5jdGlvbiB1KG4scil7cmV0dXJuIDI9PT1vKG4pP24uaGFzKHIpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpfWZ1bmN0aW9uIGEobixyKXtyZXR1cm4gMj09PW8obik/bi5nZXQocik6bltyXX1mdW5jdGlvbiBmKG4scix0KXt2YXIgZT1vKG4pOzI9PT1lP24uc2V0KHIsdCk6Mz09PWU/KG4uZGVsZXRlKHIpLG4uYWRkKHQpKTpuW3JdPXR9ZnVuY3Rpb24gYyhuLHIpe3JldHVybiBuPT09cj8wIT09bnx8MS9uPT0xL3I6biE9biYmciE9cn1mdW5jdGlvbiBzKG4pe3JldHVybiBYJiZuIGluc3RhbmNlb2YgTWFwfWZ1bmN0aW9uIHYobil7cmV0dXJuIHEmJm4gaW5zdGFuY2VvZiBTZXR9ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5vfHxuLnR9ZnVuY3Rpb24gbChuKXtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKTt2YXIgcj1ybihuKTtkZWxldGUgcltRXTtmb3IodmFyIHQ9bm4ociksZT0wO2U8dC5sZW5ndGg7ZSsrKXt2YXIgaT10W2VdLG89cltpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHJbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHIpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHIobil8fCF0KG4pP246KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4scil7cmV0dXJuIGQociwhMCl9KSwhMCksbil9ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHIpe3ZhciB0PXRuW3JdO3JldHVybiB0fHxuKDE4LHIpLHR9ZnVuY3Rpb24gbShuLHIpe3RuW25dfHwodG5bbl09cil9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4scil7ciYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXIpfWZ1bmN0aW9uIE8obil7ZyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBnKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgcj1uW1FdOzA9PT1yLml8fDE9PT1yLmk/ci5qKCk6ci5PPSEwfWZ1bmN0aW9uIFAocixlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT1yJiZyIT09aTtyZXR1cm4gZS5oLmd8fGIoXCJFUzVcIikuUyhlLHIsbyksbz8oaVtRXS5QJiYoTyhlKSxuKDQpKSx0KHIpJiYocj1NKGUsciksZS5sfHx4KGUscikpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLnQscixlLnUsZS5zKSk6cj1NKGUsaSxbXSksTyhlKSxlLnUmJmUudihlLnUsZS5zKSxyIT09SD9yOnZvaWQgMH1mdW5jdGlvbiBNKG4scix0KXtpZih5KHIpKXJldHVybiByO3ZhciBlPXJbUV07aWYoIWUpcmV0dXJuIGkociwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUscixpLG8sdCl9KSwhMCkscjtpZihlLkEhPT1uKXJldHVybiByO2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vO2koMz09PWUuaT9uZXcgU2V0KG8pOm8sKGZ1bmN0aW9uKHIsaSl7cmV0dXJuIEEobixlLG8scixpLHQpfSkpLHgobixvLCExKSx0JiZuLnUmJmIoXCJQYXRjaGVzXCIpLlIoZSx0LG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gQShlLGksbyxhLGMscyl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSkscihjKSl7dmFyIHY9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5ELGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEsdiksIXIodikpcmV0dXJuO2UubT0hMX1pZih0KGMpJiYheShjKSl7aWYoIWUuaC5GJiZlLl88MSlyZXR1cm47TShlLGMpLGkmJmkuQS5sfHx4KGUsYyl9fWZ1bmN0aW9uIHgobixyLHQpe3ZvaWQgMD09PXQmJih0PSExKSxuLmguRiYmbi5tJiZkKHIsdCl9ZnVuY3Rpb24geihuLHIpe3ZhciB0PW5bUV07cmV0dXJuKHQ/cCh0KTpuKVtyXX1mdW5jdGlvbiBJKG4scil7aWYociBpbiBuKWZvcih2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7dDspe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKTtpZihlKXJldHVybiBlO3Q9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfX1mdW5jdGlvbiBrKG4pe24uUHx8KG4uUD0hMCxuLmwmJmsobi5sKSl9ZnVuY3Rpb24gRShuKXtuLm98fChuLm89bChuLnQpKX1mdW5jdGlvbiBSKG4scix0KXt2YXIgZT1zKHIpP2IoXCJNYXBTZXRcIikuTihyLHQpOnYocik/YihcIk1hcFNldFwiKS5UKHIsdCk6bi5nP2Z1bmN0aW9uKG4scil7dmFyIHQ9QXJyYXkuaXNBcnJheShuKSxlPXtpOnQ/MTowLEE6cj9yLkE6XygpLFA6ITEsSTohMSxEOnt9LGw6cix0Om4sazpudWxsLG86bnVsbCxqOm51bGwsQzohMX0saT1lLG89ZW47dCYmKGk9W2VdLG89b24pO3ZhciB1PVByb3h5LnJldm9jYWJsZShpLG8pLGE9dS5yZXZva2UsZj11LnByb3h5O3JldHVybiBlLms9ZixlLmo9YSxmfShyLHQpOmIoXCJFUzVcIikuSihyLHQpO3JldHVybih0P3QuQTpfKCkpLnAucHVzaChlKSxlfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIHIoZSl8fG4oMjIsZSksZnVuY3Rpb24gbihyKXtpZighdChyKSlyZXR1cm4gcjt2YXIgZSx1PXJbUV0sYz1vKHIpO2lmKHUpe2lmKCF1LlAmJih1Lmk8NHx8IWIoXCJFUzVcIikuSyh1KSkpcmV0dXJuIHUudDt1Lkk9ITAsZT1GKHIsYyksdS5JPSExfWVsc2UgZT1GKHIsYyk7cmV0dXJuIGkoZSwoZnVuY3Rpb24ocix0KXt1JiZhKHUudCxyKT09PXR8fGYoZSxyLG4odCkpfSkpLDM9PT1jP25ldyBTZXQoZSk6ZX0oZSl9ZnVuY3Rpb24gRihuLHIpe3N3aXRjaChyKXtjYXNlIDI6cmV0dXJuIG5ldyBNYXAobik7Y2FzZSAzOnJldHVybiBBcnJheS5mcm9tKG4pfXJldHVybiBsKG4pfWZ1bmN0aW9uIE4oKXtmdW5jdGlvbiB0KG4scil7dmFyIHQ9c1tuXTtyZXR1cm4gdD90LmVudW1lcmFibGU9cjpzW25dPXQ9e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOnIsZ2V0OmZ1bmN0aW9uKCl7dmFyIHI9dGhpc1tRXTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHIpLGVuLmdldChyLG4pfSxzZXQ6ZnVuY3Rpb24ocil7dmFyIHQ9dGhpc1tRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHQpLGVuLnNldCh0LG4scil9fSx0fWZ1bmN0aW9uIGUobil7Zm9yKHZhciByPW4ubGVuZ3RoLTE7cj49MDtyLS0pe3ZhciB0PW5bcl1bUV07aWYoIXQuUClzd2l0Y2godC5pKXtjYXNlIDU6YSh0KSYmayh0KTticmVhaztjYXNlIDQ6byh0KSYmayh0KX19fWZ1bmN0aW9uIG8obil7Zm9yKHZhciByPW4udCx0PW4uayxlPW5uKHQpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9cltvXTtpZih2b2lkIDA9PT1hJiYhdShyLG8pKXJldHVybiEwO3ZhciBmPXRbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXJbUV07cmV0dXJuIGUubGVuZ3RoIT09bm4ocikubGVuZ3RoKyh2PzA6MSl9ZnVuY3Rpb24gYShuKXt2YXIgcj1uLms7aWYoci5sZW5ndGghPT1uLnQubGVuZ3RoKXJldHVybiEwO3ZhciB0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixyLmxlbmd0aC0xKTtpZih0JiYhdC5nZXQpcmV0dXJuITA7Zm9yKHZhciBlPTA7ZTxyLmxlbmd0aDtlKyspaWYoIXIuaGFzT3duUHJvcGVydHkoZSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gZihyKXtyLk8mJm4oMyxKU09OLnN0cmluZ2lmeShwKHIpKSl9dmFyIHM9e307bShcIkVTNVwiLHtKOmZ1bmN0aW9uKG4scil7dmFyIGU9QXJyYXkuaXNBcnJheShuKSxpPWZ1bmN0aW9uKG4scil7aWYobil7Zm9yKHZhciBlPUFycmF5KHIubGVuZ3RoKSxpPTA7aTxyLmxlbmd0aDtpKyspT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJcIitpLHQoaSwhMCkpO3JldHVybiBlfXZhciBvPXJuKHIpO2RlbGV0ZSBvW1FdO2Zvcih2YXIgdT1ubihvKSxhPTA7YTx1Lmxlbmd0aDthKyspe3ZhciBmPXVbYV07b1tmXT10KGYsbnx8ISFvW2ZdLmVudW1lcmFibGUpfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihyKSxvKX0oZSxuKSxvPXtpOmU/NTo0LEE6cj9yLkE6XygpLFA6ITEsSTohMSxEOnt9LGw6cix0Om4sazppLG86bnVsbCxPOiExLEM6ITF9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxRLHt2YWx1ZTpvLHdyaXRhYmxlOiEwfSksaX0sUzpmdW5jdGlvbihuLHQsbyl7bz9yKHQpJiZ0W1FdLkE9PT1uJiZlKG4ucCk6KG4udSYmZnVuY3Rpb24gbihyKXtpZihyJiZcIm9iamVjdFwiPT10eXBlb2Ygcil7dmFyIHQ9cltRXTtpZih0KXt2YXIgZT10LnQsbz10LmssZj10LkQsYz10Lmk7aWYoND09PWMpaShvLChmdW5jdGlvbihyKXtyIT09USYmKHZvaWQgMCE9PWVbcl18fHUoZSxyKT9mW3JdfHxuKG9bcl0pOihmW3JdPSEwLGsodCkpKX0pKSxpKGUsKGZ1bmN0aW9uKG4pe3ZvaWQgMCE9PW9bbl18fHUobyxuKXx8KGZbbl09ITEsayh0KSl9KSk7ZWxzZSBpZig1PT09Yyl7aWYoYSh0KSYmKGsodCksZi5sZW5ndGg9ITApLG8ubGVuZ3RoPGUubGVuZ3RoKWZvcih2YXIgcz1vLmxlbmd0aDtzPGUubGVuZ3RoO3MrKylmW3NdPSExO2Vsc2UgZm9yKHZhciB2PWUubGVuZ3RoO3Y8by5sZW5ndGg7disrKWZbdl09ITA7Zm9yKHZhciBwPU1hdGgubWluKG8ubGVuZ3RoLGUubGVuZ3RoKSxsPTA7bDxwO2wrKylvLmhhc093blByb3BlcnR5KGwpfHwoZltsXT0hMCksdm9pZCAwPT09ZltsXSYmbihvW2xdKX19fX0obi5wWzBdKSxlKG4ucCkpfSxLOmZ1bmN0aW9uKG4pe3JldHVybiA0PT09bi5pP28obik6YShuKX19KX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gZShuKXtpZighdChuKSlyZXR1cm4gbjtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLm1hcChlKTtpZihzKG4pKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20obi5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuW25bMF0sZShuWzFdKV19KSkpO2lmKHYobikpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShuKS5tYXAoZSkpO3ZhciByPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKTtmb3IodmFyIGkgaW4gbilyW2ldPWUobltpXSk7cmV0dXJuIHUobixMKSYmKHJbTF09bltMXSkscn1mdW5jdGlvbiBmKG4pe3JldHVybiByKG4pP2Uobik6bn12YXIgYz1cImFkZFwiO20oXCJQYXRjaGVzXCIseyQ6ZnVuY3Rpb24ocix0KXtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtmb3IodmFyIGk9dC5wYXRoLHU9dC5vcCxmPXIscz0wO3M8aS5sZW5ndGgtMTtzKyspe3ZhciB2PW8oZikscD1cIlwiK2lbc107MCE9PXYmJjEhPT12fHxcIl9fcHJvdG9fX1wiIT09cCYmXCJjb25zdHJ1Y3RvclwiIT09cHx8bigyNCksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmXCJwcm90b3R5cGVcIj09PXAmJm4oMjQpLFwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixwKSkmJm4oMTUsaS5qb2luKFwiL1wiKSl9dmFyIGw9byhmKSxkPWUodC52YWx1ZSksaD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKGwpe2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2UgYzpzd2l0Y2gobCl7Y2FzZSAxOnJldHVyblwiLVwiPT09aD9mLnB1c2goZCk6Zi5zcGxpY2UoaCwwLGQpO2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6cmV0dXJuIGYuYWRkKGQpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUoaCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZSh0LnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltoXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHJ9LFI6ZnVuY3Rpb24obixyLHQsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciBvPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9ci5jb25jYXQobik7dC5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHIsdCxlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLkQsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2UsdF07dD1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9ci5jb25jYXQoW3ZdKTt0LnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9ci5jb25jYXQoW2xdKTt0LnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnIuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obixyLHQsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT1yLmNvbmNhdChbdV0pO3QucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXIuY29uY2F0KFt1XSk7dC5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHIsdCxlKX19LE06ZnVuY3Rpb24obixyLHQsZSl7dC5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnI9PT1IP3ZvaWQgMDpyfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOm59KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gcihuLHIpe2Z1bmN0aW9uIHQoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHIpLG4ucHJvdG90eXBlPSh0LnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgdCl9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbihyKXtpZih0KHIpKXt2YXIgZT1SKG4uQS5oLHIsbik7bi5wLnNldChyLGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHIpfSkpKX1mdW5jdGlvbiB1KHIpe3IuTyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgYT1mdW5jdGlvbihuLHIpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHIpe24uX19wcm90b19fPXJ9fHxmdW5jdGlvbihuLHIpe2Zvcih2YXIgdCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihuW3RdPXJbdF0pfSkobixyKX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdGhpc1tRXT17aToyLGw6cixBOnI/ci5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLE86ITF9LHRoaXN9cihuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obixyKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHAodCkuaGFzKG4pJiZwKHQpLmdldChuKT09PXJ8fChlKHQpLGsodCksdC5ELnNldChuLCEwKSx0Lm8uc2V0KG4sciksdC5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksZShyKSxrKHIpLHIudC5oYXMobik/ci5ELnNldChuLCExKTpyLkQuZGVsZXRlKG4pLHIuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxrKG4pLG4uRD1uZXcgTWFwLGkobi50LChmdW5jdGlvbihyKXtuLkQuc2V0KHIsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHIsdC5nZXQoaSksaSx0KX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHI9dGhpc1tRXTt1KHIpO3ZhciBpPXAocikuZ2V0KG4pO2lmKHIuSXx8IXQoaSkpcmV0dXJuIGk7aWYoaSE9PXIudC5nZXQobikpcmV0dXJuIGk7dmFyIG89UihyLkEuaCxpLHIpO3JldHVybiBlKHIpLHIuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4scj10aGlzLHQ9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHIudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXQubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTpyLmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHI9dGhpcyx0PXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiByLmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49dC5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXIuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHIpe3JldHVybiB0aGlzW1FdPXtpOjMsbDpyLEE6cj9yLkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxPOiExLEM6ITF9LHRoaXN9cihuLFNldCk7dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHQuaGFzPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksci5vPyEhci5vLmhhcyhuKXx8ISghci5wLmhhcyhuKXx8IXIuby5oYXMoci5wLmdldChuKSkpOnIudC5oYXMobil9LHQuYWRkPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksdGhpcy5oYXMobil8fChvKHIpLGsociksci5vLmFkZChuKSksdGhpc30sdC5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksbyhyKSxrKHIpLHIuby5kZWxldGUobil8fCEhci5wLmhhcyhuKSYmci5vLmRlbGV0ZShyLnAuZ2V0KG4pKX0sdC5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLGsobiksbi5vLmNsZWFyKCkpfSx0LnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHQuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSx0LmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sdFtWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSx0LmZvckVhY2g9ZnVuY3Rpb24obixyKXtmb3IodmFyIHQ9dGhpcy52YWx1ZXMoKSxlPXQubmV4dCgpOyFlLmRvbmU7KW4uY2FsbChyLGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXQubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7TjpmdW5jdGlvbihuLHIpe3JldHVybiBuZXcgZihuLHIpfSxUOmZ1bmN0aW9uKG4scil7cmV0dXJuIG5ldyBjKG4scil9fSl9ZnVuY3Rpb24gSigpe04oKSxDKCksVCgpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDI0OlwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwifSxaPVwiXCIrT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcixubj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHJuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbihuKXt2YXIgcj17fTtyZXR1cm4gbm4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7clt0XT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCl9KSkscn0sdG49e30sZW49e2dldDpmdW5jdGlvbihuLHIpe2lmKHI9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSxyKSlyZXR1cm4gZnVuY3Rpb24obixyLHQpe3ZhciBlLGk9SShyLHQpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSxyKTt2YXIgaT1lW3JdO3JldHVybiBuLkl8fCF0KGkpP2k6aT09PXoobi50LHIpPyhFKG4pLG4ub1tyXT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHIpe3JldHVybiByIGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4scix0KXt2YXIgZT1JKHAobikscik7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHQpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSxyKSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09dClyZXR1cm4gbi5vW3JdPXQsbi5EW3JdPSExLCEwO2lmKGModCxpKSYmKHZvaWQgMCE9PXR8fHUobi50LHIpKSlyZXR1cm4hMDtFKG4pLGsobil9cmV0dXJuIG4ub1tyXT09PXQmJlwibnVtYmVyXCIhPXR5cGVvZiB0JiYodm9pZCAwIT09dHx8ciBpbiBuLm8pfHwobi5vW3JdPXQsbi5EW3JdPSEwLCEwKX0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obixyKXtyZXR1cm4gdm9pZCAwIT09eihuLnQscil8fHIgaW4gbi50PyhuLkRbcl09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5EW3JdLG4ubyYmZGVsZXRlIG4ub1tyXSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4scil7dmFyIHQ9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQscik7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09cixlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTp0W3JdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHIpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHIsdCl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQodCkpJiZuKDEzKSxvbi5zZXQuY2FsbCh0aGlzLHIsdCx2b2lkIDApfSxvbi5zZXQ9ZnVuY3Rpb24ocix0LGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT10JiZpc05hTihwYXJzZUludCh0KSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsclswXSx0LGUsclswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUocil7dmFyIGU9dGhpczt0aGlzLmc9Qix0aGlzLkY9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHIsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9cjt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHQ7cmV0dXJuKHQ9aSkuY2FsbC5hcHBseSh0LFtyLG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSx0KHIpKXt2YXIgYz13KGUpLHM9UihlLHIsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/TyhjKTpnKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IE8oYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXJ8fFwib2JqZWN0XCIhPXR5cGVvZiByKXtpZih2b2lkIDA9PT0oZj1pKHIpKSYmKGY9ciksZj09PUgmJihmPXZvaWQgMCksZS5GJiZkKGYsITApLG8pe3ZhciBwPVtdLGw9W107YihcIlBhdGNoZXNcIikuTShyLGYscCxsKSxvKHAsbCl9cmV0dXJuIGZ9bigyMSxyKX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obixyKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiBmdW5jdGlvbihyKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspaVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gZS5wcm9kdWNlV2l0aFBhdGNoZXMociwoZnVuY3Rpb24ocil7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFtyXS5jb25jYXQoaSkpfSkpfTt2YXIgdCxpLG89ZS5wcm9kdWNlKG4sciwoZnVuY3Rpb24obixyKXt0PW4saT1yfSkpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZvIGluc3RhbmNlb2YgUHJvbWlzZT9vLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybltuLHQsaV19KSk6W28sdCxpXX0sXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1yP3ZvaWQgMDpyLnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXMoci51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXI/dm9pZCAwOnIuYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZShyLmF1dG9GcmVlemUpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3QoZSl8fG4oOCkscihlKSYmKGU9RChlKSk7dmFyIGk9dyh0aGlzKSxvPVIodGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCxnKGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24ocix0KXt2YXIgZT1yJiZyW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksdCksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLkY9bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHIpe3ImJiFCJiZuKDIwKSx0aGlzLmc9cn0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24obix0KXt2YXIgZTtmb3IoZT10Lmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT10W2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape249aS52YWx1ZTticmVha319ZT4tMSYmKHQ9dC5zbGljZShlKzEpKTt2YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiByKG4pP28obix0KTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obix0KX0pKX0sZX0oKSxhbj1uZXcgdW4sZm49YW4ucHJvZHVjZSxjbj1hbi5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChhbiksc249YW4uc2V0QXV0b0ZyZWV6ZS5iaW5kKGFuKSx2bj1hbi5zZXRVc2VQcm94aWVzLmJpbmQoYW4pLHBuPWFuLmFwcGx5UGF0Y2hlcy5iaW5kKGFuKSxsbj1hbi5jcmVhdGVEcmFmdC5iaW5kKGFuKSxkbj1hbi5maW5pc2hEcmFmdC5iaW5kKGFuKTtleHBvcnQgZGVmYXVsdCBmbjtleHBvcnR7dW4gYXMgSW1tZXIscG4gYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSxsbiBhcyBjcmVhdGVEcmFmdCxEIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLE4gYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LFQgYXMgZW5hYmxlUGF0Y2hlcyxkbiBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSxyIGFzIGlzRHJhZnQsdCBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxmbiBhcyBwcm9kdWNlLGNuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxzbiBhcyBzZXRBdXRvRnJlZXplLHZuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiLyoqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgcG90ZW50aWFsIFwiZXh0cmEgYXJndW1lbnRcIiB2YWx1ZSB0byBiZSBpbmplY3RlZCBsYXRlcixcclxuICogYW5kIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIHRodW5rIG1pZGRsZXdhcmUgdGhhdCB1c2VzIHRoYXQgdmFsdWVcclxuICovXG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICAvLyBTdGFuZGFyZCBSZWR1eCBtaWRkbGV3YXJlIGRlZmluaXRpb24gcGF0dGVybjpcbiAgLy8gU2VlOiBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSN3cml0aW5nLWN1c3RvbS1taWRkbGV3YXJlXG4gIHZhciBtaWRkbGV3YXJlID0gZnVuY3Rpb24gbWlkZGxld2FyZShfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHRodW5rIG1pZGRsZXdhcmUgbG9va3MgZm9yIGFueSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCB0byBgc3RvcmUuZGlzcGF0Y2hgLlxuICAgICAgICAvLyBJZiB0aGlzIFwiYWN0aW9uXCIgaXMgcmVhbGx5IGEgZnVuY3Rpb24sIGNhbGwgaXQgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIEluamVjdCB0aGUgc3RvcmUncyBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIG1ldGhvZHMsIGFzIHdlbGwgYXMgYW55IFwiZXh0cmEgYXJnXCJcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBwYXNzIHRoZSBhY3Rpb24gZG93biB0aGUgbWlkZGxld2FyZSBjaGFpbiBhcyB1c3VhbFxuXG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gbWlkZGxld2FyZTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7IC8vIEF0dGFjaCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBzbyB1c2VycyBjYW4gY3JlYXRlIGEgY3VzdG9taXplZCB2ZXJzaW9uXG4vLyB3aXRoIHdoYXRldmVyIFwiZXh0cmEgYXJnXCIgdGhleSB3YW50IHRvIGluamVjdCBpbnRvIHRoZWlyIHRodW5rc1xuXG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcbmV4cG9ydCBkZWZhdWx0IHRodW5rOyIsIi8vIENhY2hlIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIEVyaWsgUmFzbXVzc2VuJ3MgYGxydS1tZW1vaXplYDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL2xydS1tZW1vaXplXG52YXIgTk9UX0ZPVU5EID0gJ05PVF9GT1VORCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGVxdWFscykge1xuICB2YXIgZW50cnk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAoZW50cnkgJiYgZXF1YWxzKGVudHJ5LmtleSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICBlbnRyeSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cnkgPyBbZW50cnldIDogW107XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBlbnRyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGVxdWFscykge1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY2FjaGVJbmRleCA9IGVudHJpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIGVxdWFscyhrZXksIGVudHJ5LmtleSk7XG4gICAgfSk7IC8vIFdlIGZvdW5kIGEgY2FjaGVkIGVudHJ5XG5cbiAgICBpZiAoY2FjaGVJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2NhY2hlSW5kZXhdOyAvLyBDYWNoZWQgZW50cnkgbm90IGF0IHRvcCBvZiBjYWNoZSwgbW92ZSBpdCB0byB0aGUgdG9wXG5cbiAgICAgIGlmIChjYWNoZUluZGV4ID4gMCkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShjYWNoZUluZGV4LCAxKTtcbiAgICAgICAgZW50cmllcy51bnNoaWZ0KGVudHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgIH0gLy8gTm8gZW50cnkgZm91bmQgaW4gY2FjaGUsIHJldHVybiBzZW50aW5lbFxuXG5cbiAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZ2V0KGtleSkgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gVE9ETyBJcyB1bnNoaWZ0IHNsb3c/XG4gICAgICBlbnRyaWVzLnVuc2hpZnQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gbWF4U2l6ZSkge1xuICAgICAgICBlbnRyaWVzLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBlbnRyaWVzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHB1dDogcHV0LFxuICAgIGdldEVudHJpZXM6IGdldEVudHJpZXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYywgZXF1YWxpdHlDaGVja09yT3B0aW9ucykge1xuICB2YXIgcHJvdmlkZWRPcHRpb25zID0gdHlwZW9mIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgPT09ICdvYmplY3QnID8gZXF1YWxpdHlDaGVja09yT3B0aW9ucyA6IHtcbiAgICBlcXVhbGl0eUNoZWNrOiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zXG4gIH07XG4gIHZhciBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPSBwcm92aWRlZE9wdGlvbnMuZXF1YWxpdHlDaGVjayxcbiAgICAgIGVxdWFsaXR5Q2hlY2sgPSBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPT09IHZvaWQgMCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogX3Byb3ZpZGVkT3B0aW9ucyRlcXVhLFxuICAgICAgX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID0gcHJvdmlkZWRPcHRpb25zLm1heFNpemUsXG4gICAgICBtYXhTaXplID0gX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID09PSB2b2lkIDAgPyAxIDogX3Byb3ZpZGVkT3B0aW9ucyRtYXhTLFxuICAgICAgcmVzdWx0RXF1YWxpdHlDaGVjayA9IHByb3ZpZGVkT3B0aW9ucy5yZXN1bHRFcXVhbGl0eUNoZWNrO1xuICB2YXIgY29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKTtcbiAgdmFyIGNhY2hlID0gbWF4U2l6ZSA9PT0gMSA/IGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGNvbXBhcmF0b3IpIDogY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgY29tcGFyYXRvcik7IC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIHZhciB2YWx1ZSA9IGNhY2hlLmdldChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbHVlID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhbHVlID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAocmVzdWx0RXF1YWxpdHlDaGVjaykge1xuICAgICAgICB2YXIgZW50cmllcyA9IGNhY2hlLmdldEVudHJpZXMoKTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEVxdWFsaXR5Q2hlY2soZW50cnkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRW50cnkpIHtcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoaW5nRW50cnkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FjaGUucHV0KGFyZ3VtZW50cywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1lbW9pemVkLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufSIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9IGZyb20gJy4vZGVmYXVsdE1lbW9pemUnO1xuZXhwb3J0IHsgZGVmYXVsdE1lbW9pemUsIGRlZmF1bHRFcXVhbGl0eUNoZWNrIH07XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyA/IFwiZnVuY3Rpb24gXCIgKyAoZGVwLm5hbWUgfHwgJ3VubmFtZWQnKSArIFwiKClcIiA6IHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogW1wiICsgZGVwZW5kZW5jeVR5cGVzICsgXCJdXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9uc0Zyb21BcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc0Zyb21BcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG5cbiAgICB2YXIgX2xhc3RSZXN1bHQ7IC8vIER1ZSB0byB0aGUgaW50cmljYWNpZXMgb2YgcmVzdCBwYXJhbXMsIHdlIGNhbid0IGRvIGFuIG9wdGlvbmFsIGFyZyBhZnRlciBgLi4uZnVuY3NgLlxuICAgIC8vIFNvLCBzdGFydCBieSBkZWNsYXJpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZS5cbiAgICAvLyAoQW5kIHllcywgdGhlIHdvcmRzICdtZW1vaXplJyBhbmQgJ29wdGlvbnMnIGFwcGVhciB0b28gbWFueSB0aW1lcyBpbiB0aGlzIG5leHQgc2VxdWVuY2UuKVxuXG5cbiAgICB2YXIgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0ge1xuICAgICAgbWVtb2l6ZU9wdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07IC8vIE5vcm1hbGx5LCB0aGUgcmVzdWx0IGZ1bmMgb3IgXCJvdXRwdXQgc2VsZWN0b3JcIiBpcyB0aGUgbGFzdCBhcmdcblxuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7IC8vIElmIHRoZSByZXN1bHQgZnVuYyBpcyBhY3R1YWxseSBhbiBfb2JqZWN0XywgYXNzdW1lIGl0J3Mgb3VyIG9wdGlvbnMgb2JqZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSByZXN1bHRGdW5jOyAvLyBhbmQgcG9wIHRoZSByZWFsIHJlc3VsdCBmdW5jIG9mZlxuXG4gICAgICByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFuIG91dHB1dCBmdW5jdGlvbiBhZnRlciB0aGUgaW5wdXRzLCBidXQgcmVjZWl2ZWQ6IFtcIiArIHR5cGVvZiByZXN1bHRGdW5jICsgXCJdXCIpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIHNldCBvZiBvcHRpb25zIHdlJ3JlIHVzaW5nLiBQcmVmZXIgb3B0aW9ucyBwYXNzZWQgZGlyZWN0bHksXG4gICAgLy8gYnV0IGZhbGwgYmFjayB0byBvcHRpb25zIGdpdmVuIHRvIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvci5cblxuXG4gICAgdmFyIF9kaXJlY3RseVBhc3NlZE9wdGlvbiA9IGRpcmVjdGx5UGFzc2VkT3B0aW9ucyxcbiAgICAgICAgX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbi5tZW1vaXplT3B0aW9ucyxcbiAgICAgICAgbWVtb2l6ZU9wdGlvbnMgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID09PSB2b2lkIDAgPyBtZW1vaXplT3B0aW9uc0Zyb21BcmdzIDogX2RpcmVjdGx5UGFzc2VkT3B0aW9uMjsgLy8gU2ltcGxpZnlpbmcgYXNzdW1wdGlvbjogaXQncyB1bmxpa2VseSB0aGF0IHRoZSBmaXJzdCBvcHRpb25zIGFyZyBvZiB0aGUgcHJvdmlkZWQgbWVtb2l6ZXJcbiAgICAvLyBpcyBhbiBhcnJheS4gSW4gbW9zdCBsaWJzIEkndmUgbG9va2VkIGF0LCBpdCdzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIG9yIG9wdGlvbnMgb2JqZWN0LlxuICAgIC8vIEJhc2VkIG9uIHRoYXQsIGlmIGBtZW1vaXplT3B0aW9uc2AgX2lzXyBhbiBhcnJheSwgd2UgYXNzdW1lIGl0J3MgYSBmdWxsXG4gICAgLy8gdXNlci1wcm92aWRlZCBhcnJheSBvZiBvcHRpb25zLiBPdGhlcndpc2UsIGl0IG11c3QgYmUganVzdCB0aGUgX2ZpcnN0XyBhcmcsIGFuZCBzb1xuICAgIC8vIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXkgc28gd2UgY2FuIGFwcGx5IGl0LlxuXG4gICAgdmFyIGZpbmFsTWVtb2l6ZU9wdGlvbnMgPSBBcnJheS5pc0FycmF5KG1lbW9pemVPcHRpb25zKSA/IG1lbW9pemVPcHRpb25zIDogW21lbW9pemVPcHRpb25zXTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh2b2lkIDAsIFtmdW5jdGlvbiByZWNvbXB1dGF0aW9uV3JhcHBlcigpIHtcbiAgICAgIF9yZWNvbXB1dGF0aW9ucysrOyAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChmaW5hbE1lbW9pemVPcHRpb25zKSk7IC8vIElmIGEgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWUgYXJndW1lbnRzIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2Ugb3VyIGRlcGVuZGVuY2llcyBhZ2Fpbi5cblxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gZGVwZW5kZW5jaWVzQ2hlY2tlcigpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIHZhciBsZW5ndGggPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBhbmQgbXV0YXRlIGEgbG9jYWwgbGlzdCBvZiBwYXJhbXMgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuXG4gICAgICBfbGFzdFJlc3VsdCA9IG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oc2VsZWN0b3IsIHtcbiAgICAgIHJlc3VsdEZ1bmM6IHJlc3VsdEZ1bmMsXG4gICAgICBtZW1vaXplZFJlc3VsdEZ1bmM6IG1lbW9pemVkUmVzdWx0RnVuYyxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgbGFzdFJlc3VsdDogZnVuY3Rpb24gbGFzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucztcbiAgICAgIH0sXG4gICAgICByZXNldFJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZXNldFJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07IC8vIEB0cy1pZ25vcmVcblxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcjtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuLy8gTWFudWFsIGRlZmluaXRpb24gb2Ygc3RhdGUgYW5kIG91dHB1dCBhcmd1bWVudHNcbmV4cG9ydCB2YXIgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycywgc2VsZWN0b3JDcmVhdG9yKSB7XG4gIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArIChcIndoZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG5cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBzZWxlY3RvckNyZWF0b3IoIC8vIEB0cy1pZ25vcmVcbiAgb2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTZWxlY3Rvcjtcbn07IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbmFtZTogJ3RhZWlsJyxcclxuLy8gICAgIGFnZTogMzAsXHJcbi8vICAgICBwYXNzd29yZDogJ2JhYm8nXHJcbi8vIH1cclxuXHJcbi8vIC8vIOunpOuyiCDsg4jroZwgZGF0YeulvCDrp4zrk6Qg7IiYIOyXhuq4sCDrlYzrrLjsl5Ag64+Z7KCB7Jy866GcIChhY3Rpb24gY3JlYXRvcilcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgICAgICBkYXRhLFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGNoYW5nZU5pY2tuYW1lKCdsZWUnKTtcclxuXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCduZW5lJykpXHJcblxyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuLy8gY29tYmluZVJlZHVjZXJz66GcIHVzZXIsIHBvc3Qg7ZWp7LOQ7KSA64ukXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIC8vIGh5ZHJhdGXrpbwg64Sj6riwIOychO2VtCBpbmRleCByZWR1Y2VyIOy2lOqwgCAo7ISc67KE7IKs7J2065OcIOugjOuNlOungeydhCDsnITtlbTshJwpXHJcbiAgICBpbmRleDogKHN0YXRlOiBPYmplY3QgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9