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
var Simcard = function Simcard(props) {
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
      d: "M4 7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C6.0517 3 6.8078 3 8.32 3h2.8906c.6604 0 .9906 0 1.3013.0746.2755.0661.5389.1752.7805.3233.2724.167.5059.4004.9729.8674l2.8694 2.8694c.467.467.7005.7005.8674.973a2.696 2.696 0 0 1 .3233.7804c.0746.3107.0746.641.0746 1.3013V16.68c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V7.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M7.6 13.62c0-.252 0-.378.049-.4743a.4502.4502 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v3.06c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049H8.32c-.252 0-.378 0-.4743-.049a.4502.4502 0 0 1-.1966-.1967C7.6 17.058 7.6 16.932 7.6 16.68v-3.06Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4 7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C6.0517 3 6.8078 3 8.32 3h2.8906c.6604 0 .9906 0 1.3013.0746.2755.0661.5389.1752.7805.3233.2724.167.5059.4004.9729.8674l2.8694 2.8694c.467.467.7005.7005.8674.973a2.696 2.696 0 0 1 .3233.7804c.0746.3107.0746.641.0746 1.3013V16.68c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V7.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7.6 13.62c0-.252 0-.378.049-.4743a.4502.4502 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v3.06c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049H8.32c-.252 0-.378 0-.4743-.049a.4502.4502 0 0 1-.1966-.1967C7.6 17.058 7.6 16.932 7.6 16.68v-3.06Z"
    })]
  }));
};
var _default = exports["default"] = Simcard;