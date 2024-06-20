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
var MoonEclipse = function MoonEclipse(props) {
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
      d: "M14.9423 20.0929C13.7518 20.6739 12.414 21 11 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9c1.414 0 2.7517.326 3.9423.9071A8.2374 8.2374 0 0 0 14.6 3.9c-4.4735 0-8.1 3.6265-8.1 8.1s3.6265 8.1 8.1 8.1c.1147 0 .2288-.0024.3423-.0071Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18.2016 6.6002C20.6 9.7905 20.5995 14.212 18.2 17.4018M11 21c1.414 0 2.7518-.3261 3.9423-.9071A8.2723 8.2723 0 0 1 14.6 20.1c-4.4735 0-8.1-3.6265-8.1-8.1s3.6265-8.1 8.1-8.1c.1147 0 .2288.0024.3423.0071C13.7517 3.3261 12.414 3 11 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9Z"
    })]
  }));
};
var _default = exports["default"] = MoonEclipse;