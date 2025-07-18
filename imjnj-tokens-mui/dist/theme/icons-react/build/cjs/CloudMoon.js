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
var CloudMoon = function CloudMoon(props) {
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
      d: "M6.6 20.0164c-1.9882 0-3.6-1.6118-3.6-3.6 0-1.7801 1.292-3.2584 2.9893-3.5485.7266-2.1242 2.7403-3.6515 5.1107-3.6515 2.0594 0 3.8495 1.1528 4.7603 2.8483a4.0508 4.0508 0 0 1 1.0897-.1483c2.2368 0 4.05 1.8132 4.05 4.05 0 2.2367-1.8132 4.05-4.05 4.05H6.6Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16.05 11.9164c2.3191 0 4.2657-1.5949 4.8029-3.7476a4.96 4.96 0 0 1-1.2029.1472c-2.7338 0-4.95-2.2162-4.95-4.95 0-.4147.051-.8175.1471-1.2024C12.6946 2.701 11.1 4.6475 11.1 6.9664c0 .8214.2001 1.5961.5542 2.278M5.7 6.5165v-3.6m-1.8 1.8h3.6m-.9 15.3c-1.9882 0-3.6-1.6118-3.6-3.6 0-1.7801 1.292-3.2584 2.9893-3.5485.7266-2.1242 2.7403-3.6515 5.1107-3.6515 2.0594 0 3.8495 1.1528 4.7603 2.8483a4.0508 4.0508 0 0 1 1.0897-.1483c2.2368 0 4.05 1.8132 4.05 4.05 0 2.2367-1.8132 4.05-4.05 4.05H6.6Z"
    })]
  }));
};
var _default = exports["default"] = CloudMoon;