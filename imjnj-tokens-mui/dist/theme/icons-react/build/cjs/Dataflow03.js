"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Dataflow03 = function Dataflow03(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M9.75 9.47c0-.252 0-.378.049-.4743a.45.45 0 0 1 .1967-.1966c.0963-.0491.2223-.0491.4743-.0491h3.06c.252 0 .378 0 .4743.049a.4502.4502 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v3.06c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049h-3.06c-.252 0-.378 0-.4743-.049a.4502.4502 0 0 1-.1966-.1967C9.75 12.908 9.75 12.782 9.75 12.53V9.47Zm6.75 6.75c0-.252 0-.378.049-.4743a.4505.4505 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h3.06c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v3.06c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967C20.658 20 20.532 20 20.28 20h-3.06c-.252 0-.378 0-.4743-.049a.4505.4505 0 0 1-.1967-.1967c-.049-.0963-.049-.2223-.049-.4743v-3.06ZM3 2.72c0-.252 0-.378.049-.4743a.45.45 0 0 1 .1967-.1966C3.342 2 3.468 2 3.72 2h3.06c.252 0 .378 0 .4743.049a.45.45 0 0 1 .1966.1967C7.5 2.342 7.5 2.468 7.5 2.72v3.06c0 .252 0 .378-.049.4743a.45.45 0 0 1-.1967.1966C7.158 6.5 7.032 6.5 6.78 6.5H3.72c-.252 0-.378 0-.4743-.049a.45.45 0 0 1-.1966-.1967C3 6.158 3 6.032 3 5.78V2.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.1 4.25h6.57c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972V8.3c0 .8387 0 1.258-.137 1.5888a1.8 1.8 0 0 1-.9742.9742C19.108 11 18.6887 11 17.85 11m-4.95 6.75H6.33c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3.45 16.3821 3.45 15.8781 3.45 14.87V13.7c0-.8387 0-1.258.137-1.5888a1.8 1.8 0 0 1 .9742-.9742C4.892 11 5.3113 11 6.15 11m4.32 2.25h3.06c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743V9.47c0-.252 0-.378-.049-.4743a.4502.4502 0 0 0-.1967-.1966C13.908 8.75 13.782 8.75 13.53 8.75h-3.06c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967C9.75 9.092 9.75 9.218 9.75 9.47v3.06c0 .252 0 .378.049.4743a.4502.4502 0 0 0 .1967.1967c.0963.049.2223.049.4743.049ZM17.22 20h3.06c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967C21 19.658 21 19.532 21 19.28v-3.06c0-.252 0-.378-.049-.4743a.4505.4505 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-3.06c-.252 0-.378 0-.4743.049a.4505.4505 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v3.06c0 .252 0 .378.049.4743a.4505.4505 0 0 0 .1967.1967c.0963.049.2223.049.4743.049ZM3.72 6.5h3.06c.252 0 .378 0 .4743-.049a.45.45 0 0 0 .1966-.1967C7.5 6.158 7.5 6.032 7.5 5.78V2.72c0-.252 0-.378-.049-.4743a.45.45 0 0 0-.1967-.1966C7.158 2 7.032 2 6.78 2H3.72c-.252 0-.378 0-.4743.049a.45.45 0 0 0-.1966.1967C3 2.342 3 2.468 3 2.72v3.06c0 .252 0 .378.049.4743a.45.45 0 0 0 .1967.1966C3.342 6.5 3.468 6.5 3.72 6.5Z"
    })]
  }));
};
var _default = exports["default"] = Dataflow03;