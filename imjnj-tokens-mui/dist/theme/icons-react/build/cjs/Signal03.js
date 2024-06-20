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
var Signal03 = function Signal03(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.7272 12.2728c-.7029-.703-.7029-1.8426 0-2.5456.703-.703 1.8426-.703 2.5456 0 .7029.703.7029 1.8426 0 2.5456m-5.0912 2.5456c-2.1088-2.1089-2.1088-5.528 0-7.6368 2.1089-2.1088 5.5279-2.1088 7.6368 0 2.1088 2.1088 2.1088 5.5279 0 7.6368M5.636 17.364c-3.5147-3.5148-3.5147-9.2132 0-12.728 3.5148-3.5147 9.2132-3.5147 12.728 0 3.5147 3.5148 3.5147 9.2132 0 12.728"
    })
  }));
};
var _default = exports["default"] = Signal03;