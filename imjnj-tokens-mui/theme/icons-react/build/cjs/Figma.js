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
var Figma = function Figma(props) {
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
      d: "M5 5c0-1.933 1.567-3.5 3.5-3.5H12v7H8.5C6.567 8.5 5 6.933 5 5Zm0 7c0-1.933 1.567-3.5 3.5-3.5H12v7H8.5C6.567 15.5 5 13.933 5 12Zm0 7c0-1.933 1.567-3.5 3.5-3.5H12V19c0 1.933-1.567 3.5-3.5 3.5S5 20.933 5 19Zm7-17.5h3.5C17.433 1.5 19 3.067 19 5s-1.567 3.5-3.5 3.5H12v-7ZM12 12c0-1.933 1.567-3.5 3.5-3.5S19 10.067 19 12s-1.567 3.5-3.5 3.5S12 13.933 12 12Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 1.5H8.5C6.567 1.5 5 3.067 5 5s1.567 3.5 3.5 3.5m3.5-7v7m0-7h3.5C17.433 1.5 19 3.067 19 5s-1.567 3.5-3.5 3.5m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0C6.567 8.5 5 10.067 5 12s1.567 3.5 3.5 3.5m3.5 0H8.5m3.5 0V19c0 1.933-1.567 3.5-3.5 3.5S5 20.933 5 19s1.567-3.5 3.5-3.5m7-7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5S12 13.933 12 12s1.567-3.5 3.5-3.5Z"
    })]
  }));
};
var _default = exports["default"] = Figma;