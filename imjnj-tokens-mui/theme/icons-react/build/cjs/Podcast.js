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
var Podcast = function Podcast(props) {
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
      d: "M9.3 17.4c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v1.8c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8v-1.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M15.707 17.4c2.1091-1.4264 3.493-3.7999 3.493-6.4935C19.2 6.54 15.5734 3 11.1 3S3 6.54 3 10.9065c0 2.6936 1.384 5.0671 3.493 6.4935"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M7.8237 13.8C7.0669 13.035 6.6 12.0078 6.6 10.8755 6.6 8.5144 8.615 6.6 11.1 6.6c2.4851 0 4.5 1.9144 4.5 4.2755 0 1.1331-.4669 2.1595-1.2237 2.9245"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.1 12a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15.707 17.4c2.1091-1.4264 3.493-3.7999 3.493-6.4935C19.2 6.54 15.5734 3 11.1 3S3 6.54 3 10.9065c0 2.6936 1.384 5.0671 3.493 6.4935m1.3307-3.6C7.0669 13.035 6.6 12.0078 6.6 10.8755 6.6 8.5144 8.615 6.6 11.1 6.6c2.4851 0 4.5 1.9144 4.5 4.2755 0 1.1331-.4669 2.1595-1.2237 2.9245M11.1 21c-.9941 0-1.8-.8059-1.8-1.8v-1.8c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v1.8c0 .9941-.8059 1.8-1.8 1.8Zm.9-9.9a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    })]
  }));
};
var _default = exports["default"] = Podcast;