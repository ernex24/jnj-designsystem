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
var UsbFlashDrive = function UsbFlashDrive(props) {
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
      d: "M4 12.18c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C5.3678 9.3 5.872 9.3 6.88 9.3h8.64c1.0081 0 1.5121 0 1.8972.1962.3387.1726.614.448.7866.7866.1962.3851.1962.8891.1962 1.8972v4.5c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68v-4.5Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16.6 9.3V4.44c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C15.9161 3 15.664 3 15.16 3H7.24c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C5.8 3.684 5.8 3.936 5.8 4.44V9.3m3.6-2.7v-.9m3.6.9v-.9M8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-4.5c0-1.0081 0-1.5121-.1962-1.8972a1.8001 1.8001 0 0 0-.7866-.7866C17.0321 9.3 16.5281 9.3 15.52 9.3H6.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C4 10.6679 4 11.1719 4 12.18v4.5c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21Z"
    })]
  }));
};
var _default = exports["default"] = UsbFlashDrive;