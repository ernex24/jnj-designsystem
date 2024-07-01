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
var Droplets01 = function Droplets01(props) {
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
      d: "M21 14.6c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4 0-3.8823 5.4-12.6 5.4-12.6S21 10.7177 21 14.6ZM8.4 8.3c0 1.4912-1.2088 2.7-2.7 2.7S3 9.7912 3 8.3C3 6.3588 5.7 2 5.7 2s2.7 4.3588 2.7 6.3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 14.6c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4 0-3.8823 5.4-12.6 5.4-12.6S21 10.7177 21 14.6ZM8.4 8.3c0 1.4912-1.2088 2.7-2.7 2.7S3 9.7912 3 8.3C3 6.3588 5.7 2 5.7 2s2.7 4.3588 2.7 6.3Z"
    })]
  }));
};
var _default = exports["default"] = Droplets01;