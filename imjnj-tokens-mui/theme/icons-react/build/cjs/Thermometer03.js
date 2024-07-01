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
var Thermometer03 = function Thermometer03(props) {
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
      d: "M9.8 5.25C9.8 4.0074 8.7926 3 7.55 3S5.3 4.0074 5.3 5.25v8.332c-1.0854.7265-1.8 1.9638-1.8 3.368C3.5 19.1868 5.3133 21 7.55 21s4.05-1.8132 4.05-4.05c0-1.4042-.7146-2.6415-1.8-3.368V5.25Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M7.55 17.85a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19.25 3.9h-5.4m5.4 3.6h-5.4m5.4 3.6h-5.4M5.3 13.582V5.25C5.3 4.0074 6.3074 3 7.55 3S9.8 4.0074 9.8 5.25v8.332c1.0854.7265 1.8 1.9638 1.8 3.368 0 2.2368-1.8133 4.05-4.05 4.05S3.5 19.1868 3.5 16.95c0-1.4042.7146-2.6415 1.8-3.368Zm3.15 3.368a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    })]
  }));
};
var _default = exports["default"] = Thermometer03;