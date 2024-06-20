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
var Umbrella02 = function Umbrella02(props) {
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
      d: "M12 2c-4.9706 0-9 4.0294-9 9 0 0 1.2508-.9 2.7-.9 1.4492 0 2.7.9 2.7.9s2.1508-.9 3.6-.9c1.4492 0 3.6.9 3.6.9s1.2508-.9 2.7-.9c1.4492 0 2.7.9 2.7.9 0-4.9706-4.0294-9-9-9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7.5 17.66C7.5 18.9523 8.5074 20 9.75 20S12 18.9523 12 17.66V10.1m0 0c-1.4492 0-3.6.9-3.6.9s-1.2508-.9-2.7-.9c-1.4492 0-2.7.9-2.7.9 0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 0-1.2508-.9-2.7-.9-1.4492 0-2.7.9-2.7.9s-2.1508-.9-3.6-.9Z"
    })]
  }));
};
var _default = exports["default"] = Umbrella02;