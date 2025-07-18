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
var Airplay = function Airplay(props) {
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
      d: "M11.4469 14.4637c.1899-.2279.2849-.3419.3986-.3834a.4497.4497 0 0 1 .309 0c.1137.0415.2087.1555.3986.3834l2.9628 3.5554c.3139.3767.4709.565.4733.7241a.4501.4501 0 0 1-.1671.3568c-.1238.1-.369.1-.8593.1H9.0372c-.4903 0-.7355 0-.8593-.1a.45.45 0 0 1-.167-.3568c.0023-.1591.1593-.3474.4732-.7241l2.9628-3.5554Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5.7 16.5c-1.4912 0-2.7-1.2088-2.7-2.7V7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 3 5.8078 3 7.32 3h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 5.0517 21 5.8078 21 7.32v6.48c0 1.4912-1.2088 2.7-2.7 2.7m-9.2628 2.7h5.9256c.4903 0 .7355 0 .8593-.1a.4501.4501 0 0 0 .1671-.3568c-.0024-.1591-.1594-.3474-.4733-.7241l-2.9628-3.5554c-.1899-.2279-.2849-.3419-.3986-.3834a.4497.4497 0 0 0-.309 0c-.1137.0415-.2087.1555-.3986.3834l-2.9628 3.5554c-.314.3767-.4709.565-.4733.7241a.45.45 0 0 0 .1671.3568c.1238.1.369.1.8593.1Z"
    })]
  }));
};
var _default = exports["default"] = Airplay;