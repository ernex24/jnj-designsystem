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
var VideoRecorder = function VideoRecorder(props) {
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
      d: "M21 8.5382c0-.5452 0-.8178-.1078-.944a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5913L16.5 11.3l3.2709 3.2709c.3855.3855.5783.5783.7438.5913a.4501.4501 0 0 0 .3775-.1563C21 14.8796 21 14.607 21 14.0618V8.5382ZM3 9.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 5 5.8078 5 7.32 5h4.86c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v3.96c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 15.5482 3 14.7921 3 13.28V9.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 8.5382c0-.5452 0-.8178-.1078-.944a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5913L16.5 11.3l3.2709 3.2709c.3855.3855.5783.5783.7438.5913a.4501.4501 0 0 0 .3775-.1563C21 14.8796 21 14.607 21 14.0618V8.5382ZM3 9.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 5 5.8078 5 7.32 5h4.86c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v3.96c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 15.5482 3 14.7921 3 13.28V9.32Z"
    })]
  }));
};
var _default = exports["default"] = VideoRecorder;