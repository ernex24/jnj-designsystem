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
var DistributeSpacingVertical = function DistributeSpacingVertical(props) {
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
      d: "M16 15c.9319 0 1.3978 0 1.7654-.1522.49-.203.8794-.5924 1.0824-1.0824C19 13.3978 19 12.9319 19 12c0-.9319 0-1.3978-.1522-1.7654a2.0003 2.0003 0 0 0-1.0824-1.0824C17.3978 9 16.9319 9 16 9H8c-.9319 0-1.3978 0-1.7654.1522a2 2 0 0 0-1.0824 1.0824C5 10.6022 5 11.0681 5 12c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C6.6022 15 7.0681 15 8 15h8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 3H3m18 18H3m2-9c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C6.6022 9 7.0681 9 8 9h8c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C19 10.6022 19 11.0681 19 12c0 .9319 0 1.3978-.1522 1.7654-.203.49-.5924.8794-1.0824 1.0824C17.3978 15 16.9319 15 16 15H8c-.9319 0-1.3978 0-1.7654-.1522a2.0003 2.0003 0 0 1-1.0824-1.0824C5 13.3978 5 12.9319 5 12Z"
    })]
  }));
};
var _default = exports["default"] = DistributeSpacingVertical;