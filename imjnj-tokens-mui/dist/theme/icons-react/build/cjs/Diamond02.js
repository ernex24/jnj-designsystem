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
var Diamond02 = function Diamond02(props) {
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
      d: "M19.595 8.8638c.1494-.1644.2242-.2466.254-.3402a.45.45 0 0 0 .0054-.2543c-.0257-.0948-.0968-.1801-.239-.3508l-3.8829-4.6594c-.0794-.0953-.119-.1429-.1677-.1771a.4505.4505 0 0 0-.142-.0665C15.3653 3 15.3033 3 15.1794 3H6.8538c-.124 0-.1859 0-.2433.0154a.45.45 0 0 0-.1421.0666c-.0487.0342-.0883.0818-.1677.177L2.418 7.9186c-.1423.1707-.2134.256-.2391.3508a.45.45 0 0 0 .0055.2543c.0297.0936.1045.1758.254.3402l8.0456 8.8502c.1846.2031.277.3047.3855.3423.0954.033.199.033.2944 0 .1085-.0376.2009-.1392.3856-.3423l8.0456-8.8502Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.7166 21h12.6M2.4666 8.4h17.1M9.2166 3l-1.8 5.4 3.6 9.45 3.6-9.45-1.8-5.4m-1.2672 14.714 8.0456-8.8502c.1494-.1644.2242-.2466.254-.3402a.45.45 0 0 0 .0054-.2543c-.0257-.0948-.0968-.1801-.239-.3508l-3.8829-4.6594c-.0794-.0953-.119-.1429-.1677-.1771a.4505.4505 0 0 0-.142-.0665C15.3653 3 15.3033 3 15.1794 3H6.8538c-.124 0-.1859 0-.2433.0154a.45.45 0 0 0-.1421.0666c-.0487.0342-.0883.0818-.1677.177L2.418 7.9186c-.1423.1707-.2134.256-.2391.3508a.45.45 0 0 0 .0055.2543c.0297.0936.1045.1758.254.3402l8.0456 8.8502c.1846.2031.277.3047.3855.3423.0954.033.199.033.2944 0 .1085-.0376.2009-.1392.3856-.3423Z"
    })]
  }));
};
var _default = exports["default"] = Diamond02;