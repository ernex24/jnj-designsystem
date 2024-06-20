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
var LinkBroken02 = function LinkBroken02(props) {
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
      d: "m8.85 15.15 6.3-6.3M9.3 4.8V3m5.4 16.2V21M4.8 9.3H3m16.2 5.4H21M5.6228 5.6228 4.35 4.35m14.0272 14.0271 1.2728 1.2728M12 17.0911l-1.9092 1.9092c-1.4058 1.4059-3.6852 1.4059-5.0911 0-1.406-1.4059-1.406-3.6853 0-5.0912l1.9092-1.9092m10.1823 0 1.9092-1.9092c1.4059-1.4059 1.4059-3.6852 0-5.0911-1.4059-1.406-3.6853-1.406-5.0912 0L12 6.9088"
    })
  }));
};
var _default = exports["default"] = LinkBroken02;