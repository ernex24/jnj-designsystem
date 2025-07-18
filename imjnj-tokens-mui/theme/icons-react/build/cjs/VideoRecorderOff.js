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
var VideoRecorderOff = function VideoRecorderOff(props) {
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
      d: "M21 8.2382c0-.5452 0-.8178-.1078-.944a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5913L16.5 11l3.2709 3.2709c.3855.3855.5783.5783.7438.5913a.4501.4501 0 0 0 .3775-.1563C21 14.5796 21 14.307 21 13.7618V8.2382Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5.7 4.7C4.2088 4.7 3 5.9088 3 7.4v7.2c0 1.4912 1.2088 2.7 2.7 2.7h8.1c1.2174 0 2.2466-.8057 2.5835-1.913M16.5 11l3.2709-3.2709c.3855-.3855.5783-.5783.7438-.5913a.4501.4501 0 0 1 .3775.1563C21 7.4204 21 7.693 21 8.2382v5.5236c0 .5452 0 .8178-.1078.9441a.4501.4501 0 0 1-.3775.1563c-.1655-.013-.3583-.2058-.7438-.5913L16.5 11Zm0 0V9.02c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C14.4482 4.7 13.6921 4.7 12.18 4.7H9.75M3 2l18 18"
    })]
  }));
};
var _default = exports["default"] = VideoRecorderOff;