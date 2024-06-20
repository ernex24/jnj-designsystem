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
var ClipboardPlus = function ClipboardPlus(props) {
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
      d: "M7.6 4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C8.284 3 8.536 3 9.04 3h4.32c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C14.1161 6.6 13.864 6.6 13.36 6.6H9.04c-.504 0-.756 0-.9486-.098a.9.9 0 0 1-.3933-.3934C7.6 5.916 7.6 5.664 7.6 5.16v-.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.8 4.8c.837 0 1.2555 0 1.5988.092a2.7 2.7 0 0 1 1.9092 1.9092c.092.3433.092.7618.092 1.5988v8.28c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V8.4c0-.837 0-1.2555.092-1.5988A2.7 2.7 0 0 1 6.0012 4.892C6.3445 4.8 6.763 4.8 7.6 4.8m3.6 11.7v-5.4m-2.7 2.7h5.4M9.04 6.6h4.32c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C14.8 5.916 14.8 5.664 14.8 5.16v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C14.1161 3 13.864 3 13.36 3H9.04c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C7.6 3.684 7.6 3.936 7.6 4.44v.72c0 .504 0 .756.098.9486a.9.9 0 0 0 .3934.3933C8.284 6.6 8.536 6.6 9.04 6.6Z"
    })]
  }));
};
var _default = exports["default"] = ClipboardPlus;