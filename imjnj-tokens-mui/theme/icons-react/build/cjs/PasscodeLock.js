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
var PasscodeLock = function PasscodeLock(props) {
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
      d: "M12.225 9.5a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm4.5 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm-9 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm6.075 7.74c0-.504 0-.7561.0981-.9486a.9006.9006 0 0 1 .3933-.3933c.1925-.0981.4446-.0981.9486-.0981h3.42c.504 0 .7561 0 .9486.0981a.9006.9006 0 0 1 .3933.3933c.0981.1925.0981.4446.0981.9486v.72c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981h-3.42c-.504 0-.7561 0-.9486-.0981a.9006.9006 0 0 1-.3933-.3933C13.8 18.7161 13.8 18.464 13.8 17.96v-.72Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 10.4V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v3.24c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 14 4.872 14 5.88 14h5.22m.9-4.5h.0045m4.4955 0h.0045M7.5 9.5h.0045m11.0205 6.3v-1.575c0-.8698-.7052-1.575-1.575-1.575-.8698 0-1.575.7052-1.575 1.575V15.8m-3.15-6.3a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm4.5 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm-9 0a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Zm7.515 9.9h3.42c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C19.4161 15.8 19.164 15.8 18.66 15.8h-3.42c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Z"
    })]
  }));
};
var _default = exports["default"] = PasscodeLock;