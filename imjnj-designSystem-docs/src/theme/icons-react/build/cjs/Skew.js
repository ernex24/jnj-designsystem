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
var Skew = function Skew(props) {
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
      d: "M4.8 4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C5.484 3 5.736 3 6.24 3h.72c.504 0 .756 0 .9486.098a.9.9 0 0 1 .3933.3934C8.4 3.684 8.4 3.936 8.4 4.44v.72c0 .504 0 .756-.098.9486a.9.9 0 0 1-.3934.3933C7.716 6.6 7.464 6.6 6.96 6.6h-.72c-.504 0-.756 0-.9486-.098a.9.9 0 0 1-.3933-.3934C4.8 5.916 4.8 5.664 4.8 5.16v-.72ZM3 17.04c0-.504 0-.7561.098-.9486a.9003.9003 0 0 1 .3934-.3933C3.684 15.6 3.936 15.6 4.44 15.6h.72c.504 0 .756 0 .9486.0981a.9003.9003 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.098.9486a.9003.9003 0 0 1-.3934.3933C5.916 19.2 5.664 19.2 5.16 19.2h-.72c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C3 18.5161 3 18.264 3 17.76v-.72Zm14.4-12.6c0-.504 0-.756.0981-.9486a.9003.9003 0 0 1 .3933-.3933C18.0839 3 18.336 3 18.84 3h.72c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934C21 3.684 21 3.936 21 4.44v.72c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C20.3161 6.6 20.064 6.6 19.56 6.6h-.72c-.504 0-.7561 0-.9486-.098a.9003.9003 0 0 1-.3933-.3934C17.4 5.916 17.4 5.664 17.4 5.16v-.72Zm-1.8 12.6c0-.504 0-.7561.0981-.9486a.9006.9006 0 0 1 .3933-.3933c.1925-.0981.4446-.0981.9486-.0981h.72c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981h-.72c-.504 0-.7561 0-.9486-.0981a.9006.9006 0 0 1-.3933-.3933C15.6 18.5161 15.6 18.264 15.6 17.76v-.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m18.9427 6.6-1.2857 8.9999M6.7286 6.6l-1.6072 9M17.4 4.8h-9m7.2 12.6h-9M6.24 6.6h.72c.504 0 .756 0 .9486-.098a.9.9 0 0 0 .3933-.3934C8.4 5.916 8.4 5.664 8.4 5.16v-.72c0-.504 0-.756-.098-.9486a.9.9 0 0 0-.3934-.3933C7.716 3 7.464 3 6.96 3h-.72c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C4.8 3.684 4.8 3.936 4.8 4.44v.72c0 .504 0 .756.098.9486a.9.9 0 0 0 .3934.3933C5.484 6.6 5.736 6.6 6.24 6.6Zm-1.8 12.6h.72c.504 0 .756 0 .9486-.0981a.9003.9003 0 0 0 .3933-.3933C6.6 18.5161 6.6 18.264 6.6 17.76v-.72c0-.504 0-.7561-.098-.9486a.9003.9003 0 0 0-.3934-.3933C5.916 15.6 5.664 15.6 5.16 15.6h-.72c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933C3 16.2839 3 16.536 3 17.04v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Zm14.4-12.6h.72c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C21 5.916 21 5.664 21 5.16v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C20.3161 3 20.064 3 19.56 3h-.72c-.504 0-.7561 0-.9486.098a.9003.9003 0 0 0-.3933.3934C17.4 3.684 17.4 3.936 17.4 4.44v.72c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Zm-1.8 12.6h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C18.5161 15.6 18.264 15.6 17.76 15.6h-.72c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Z"
    })]
  }));
};
var _default = exports["default"] = Skew;