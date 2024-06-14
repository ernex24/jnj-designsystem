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
var Printer = function Printer(props) {
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
      d: "M6.6 15.68c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C7.9678 12.8 8.472 12.8 9.48 12.8h5.04c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.3851.1962.8891.1962 1.8972v1.44c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C16.0321 20 15.5281 20 14.52 20H9.48c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C6.6 18.6321 6.6 18.1281 6.6 17.12v-1.44Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.4 6.5V4.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.0321 2 15.5281 2 14.52 2H9.48c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C6.6 3.3678 6.6 3.872 6.6 4.88V6.5m0 9.9c-.837 0-1.2555 0-1.5988-.092a2.7 2.7 0 0 1-1.9092-1.9092C3 14.0555 3 13.637 3 12.8v-1.98c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 6.5 5.8078 6.5 7.32 6.5h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 8.5517 21 9.3078 21 10.82v1.98c0 .837 0 1.2555-.092 1.5988a2.7 2.7 0 0 1-1.9092 1.9092c-.3433.092-.7618.092-1.5988.092m-2.7-6.75h2.7M9.48 20h5.04c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-1.44c0-1.0081 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.0321 12.8 15.5281 12.8 14.52 12.8H9.48c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C6.6 14.1679 6.6 14.6719 6.6 15.68v1.44c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C7.9678 20 8.472 20 9.48 20Z"
    })]
  }));
};
var _default = exports["default"] = Printer;