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
var BezierCurve03 = function BezierCurve03(props) {
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
      d: "M3 17.04c0-.504 0-.7561.098-.9486a.9003.9003 0 0 1 .3934-.3933C3.684 15.6 3.936 15.6 4.44 15.6h.72c.504 0 .756 0 .9486.0981a.9003.9003 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.098.9486a.9003.9003 0 0 1-.3934.3933C5.916 19.2 5.664 19.2 5.16 19.2h-.72c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C3 18.5161 3 18.264 3 17.76v-.72Zm14.4 0c0-.504 0-.7561.0981-.9486a.9006.9006 0 0 1 .3933-.3933c.1925-.0981.4446-.0981.9486-.0981h.72c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933C21 16.2839 21 16.536 21 17.04v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981h-.72c-.504 0-.7561 0-.9486-.0981a.9006.9006 0 0 1-.3933-.3933C17.4 18.5161 17.4 18.264 17.4 17.76v-.72Zm-7.2-12.6c0-.504 0-.756.0981-.9486a.9003.9003 0 0 1 .3933-.3933C10.8839 3 11.136 3 11.64 3h.72c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C13.1161 6.6 12.864 6.6 12.36 6.6h-.72c-.504 0-.7561 0-.9486-.098a.9003.9003 0 0 1-.3933-.3934C10.2 5.916 10.2 5.664 10.2 5.16v-.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m10.9714 6.6-5.1428 9M6.6 17.4h10.7998m.7716-1.8-5.1428-9M4.44 19.2h.72c.504 0 .756 0 .9486-.0981a.9003.9003 0 0 0 .3933-.3933C6.6 18.5161 6.6 18.264 6.6 17.76v-.72c0-.504 0-.7561-.098-.9486a.9003.9003 0 0 0-.3934-.3933C5.916 15.6 5.664 15.6 5.16 15.6h-.72c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933C3 16.2839 3 16.536 3 17.04v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Zm14.4 0h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 18.5161 21 18.264 21 17.76v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C20.3161 15.6 20.064 15.6 19.56 15.6h-.72c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Zm-7.2-12.6h.72c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C13.8 5.916 13.8 5.664 13.8 5.16v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C13.1161 3 12.864 3 12.36 3h-.72c-.504 0-.7561 0-.9486.098a.9003.9003 0 0 0-.3933.3934C10.2 3.684 10.2 3.936 10.2 4.44v.72c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Z"
    })]
  }));
};
var _default = exports["default"] = BezierCurve03;