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
var Passport = function Passport(props) {
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
      d: "M4 7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C6.0517 3 6.8078 3 8.32 3h5.76c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v9.36c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.3482 21 15.5921 21 14.08 21H8.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C4 18.9482 4 18.1921 4 16.68V7.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.2 12c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7S9.7088 12 11.2 12Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.4 15.6H13M8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C16.3482 3 15.5921 3 14.08 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21ZM13.9 9.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    })]
  }));
};
var _default = exports["default"] = Passport;