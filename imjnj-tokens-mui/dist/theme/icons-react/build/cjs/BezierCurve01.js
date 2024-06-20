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
var BezierCurve01 = function BezierCurve01(props) {
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
      d: "M3 15.44c0-.504 0-.7561.098-.9486a.9003.9003 0 0 1 .3934-.3933C3.684 14 3.936 14 4.44 14h.72c.504 0 .756 0 .9486.0981a.9003.9003 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.098.9486a.9003.9003 0 0 1-.3934.3933C5.916 17.6 5.664 17.6 5.16 17.6h-.72c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C3 16.9161 3 16.664 3 16.16v-.72Zm7.2-9c0-.504 0-.756.0981-.9486a.9003.9003 0 0 1 .3933-.3933C10.8839 5 11.136 5 11.64 5h.72c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C13.1161 8.6 12.864 8.6 12.36 8.6h-.72c-.504 0-.7561 0-.9486-.098a.9003.9003 0 0 1-.3933-.3934C10.2 7.916 10.2 7.664 10.2 7.16v-.72Zm7.2 9c0-.504 0-.7561.0981-.9486a.9006.9006 0 0 1 .3933-.3933C18.0839 14 18.336 14 18.84 14h.72c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933C21 14.6839 21 14.936 21 15.44v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981h-.72c-.504 0-.7561 0-.9486-.0981a.9006.9006 0 0 1-.3933-.3933C17.4 16.9161 17.4 16.664 17.4 16.16v-.72Zm2.7-7.74a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Zm-16.2 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.2 6.8H3.9m16.2 0h-6.3m0 .2268c3.1054.7992 5.4 3.6182 5.4 6.9731m-14.4 0c0-3.3549 2.2946-6.1739 5.4-6.9731M4.44 17.6h.72c.504 0 .756 0 .9486-.0981a.9003.9003 0 0 0 .3933-.3933C6.6 16.9161 6.6 16.664 6.6 16.16v-.72c0-.504 0-.7561-.098-.9486a.9003.9003 0 0 0-.3934-.3933C5.916 14 5.664 14 5.16 14h-.72c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933C3 14.6839 3 14.936 3 15.44v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Zm7.2-9h.72c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C13.8 7.916 13.8 7.664 13.8 7.16v-.72c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C13.1161 5 12.864 5 12.36 5h-.72c-.504 0-.7561 0-.9486.098a.9003.9003 0 0 0-.3933.3934C10.2 5.684 10.2 5.936 10.2 6.44v.72c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Zm7.2 9h.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 16.9161 21 16.664 21 16.16v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C20.3161 14 20.064 14 19.56 14h-.72c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981ZM21 6.8a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Zm-16.2 0a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
    })]
  }));
};
var _default = exports["default"] = BezierCurve01;