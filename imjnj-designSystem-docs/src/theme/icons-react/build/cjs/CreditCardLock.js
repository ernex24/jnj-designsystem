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
var CreditCardLock = function CreditCardLock(props) {
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
      d: "M14.7 17.69c0-.504 0-.7561.0981-.9486a.9006.9006 0 0 1 .3933-.3933c.1925-.0981.4446-.0981.9486-.0981h3.42c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933C21 16.9339 21 17.186 21 17.69v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981h-3.42c-.504 0-.7561 0-.9486-.0981a.9006.9006 0 0 1-.3933-.3933C14.7 19.1661 14.7 18.914 14.7 18.41v-.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19.425 16.25v-1.575c0-.8698-.7052-1.575-1.575-1.575-.8698 0-1.575.7052-1.575 1.575v1.575M21 9.5H3m18 .9V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h5.22m5.04 2.25h3.42c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 19.1661 21 18.914 21 18.41v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933c-.1925-.0981-.4446-.0981-.9486-.0981h-3.42c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Z"
    })]
  }));
};
var _default = exports["default"] = CreditCardLock;