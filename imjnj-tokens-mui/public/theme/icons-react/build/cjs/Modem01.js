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
var Modem01 = function Modem01(props) {
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
      d: "M2 19c0-.9319 0-1.3978.1522-1.7654.203-.49.5923-.8794 1.0824-1.0824C3.6022 16 4.0681 16 5 16h14c.9319 0 1.3978 0 1.7653.1522.4901.203.8794.5924 1.0824 1.0824C22 17.6022 22 18.0681 22 19c0 .9319 0 1.3978-.1523 1.7654-.203.49-.5923.8794-1.0824 1.0824C20.3978 22 19.9319 22 19 22H5c-.932 0-1.3979 0-1.7654-.1522a2.0002 2.0002 0 0 1-1.0824-1.0824C2 20.3978 2 19.9319 2 19Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16.2427 4.7573c2.3431 2.3432 2.3431 6.1422 0 8.4853m-8.4854 0c-2.3431-2.3431-2.3431-6.1421 0-8.4853M4.8583 16C1.0236 12.0894 1.047 5.8106 4.9287 1.929m14.1426 0c3.8816 3.8816 3.9051 10.1604.0704 14.071M12 16V9M5 22h14c.9319 0 1.3978 0 1.7653-.1522a2.0001 2.0001 0 0 0 1.0824-1.0824C22 20.3978 22 19.9319 22 19c0-.9319 0-1.3978-.1523-1.7654a2.0001 2.0001 0 0 0-1.0824-1.0824C20.3978 16 19.9319 16 19 16H5c-.932 0-1.3979 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C2 17.6022 2 18.0681 2 19c0 .9319 0 1.3978.1522 1.7654.203.49.5923.8794 1.0824 1.0824C3.6022 22 4.0681 22 5 22Z"
    })]
  }));
};
var _default = exports["default"] = Modem01;