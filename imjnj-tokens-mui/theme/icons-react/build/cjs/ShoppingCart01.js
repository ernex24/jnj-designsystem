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
var ShoppingCart01 = function ShoppingCart01(props) {
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
      d: "M15.8168 16.05H8.1147c-.8911 0-1.3367 0-1.6945-.1644a1.7993 1.7993 0 0 1-.768-.6705c-.211-.3323-.271-.7738-.3912-1.6568L4.3143 6.6h14.8156c.2986 0 .4479 0 .5529.0612a.45.45 0 0 1 .1977.239c.0405.1146.0126.2612-.0433.5545l-1.1913 6.2542c-.1587.8333-.2381 1.25-.4529 1.5619a1.7993 1.7993 0 0 1-.7571.6266c-.3467.1526-.7708.1526-1.6191.1526ZM8.3 21a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Zm7.2 0a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M2 3h1.1755c.2215 0 .3322 0 .4213.0407a.4499.4499 0 0 1 .1916.1662c.053.0825.0686.192.1.4113L4.3142 6.6m0 0 .9467 6.9583c.1201.883.1802 1.3245.3913 1.6568.186.2929.4527.5257.768.6705.3577.1644.8033.1644 1.6944.1644h7.7021c.8483 0 1.2724 0 1.6191-.1526a1.7993 1.7993 0 0 0 .7571-.6266c.2148-.3119.2942-.7286.4529-1.5619l1.1913-6.2542c.0559-.2933.0838-.44.0433-.5545a.45.45 0 0 0-.1977-.239c-.105-.0612-.2543-.0612-.5529-.0612H4.3143ZM9.2 20.1a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Zm7.2 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    })]
  }));
};
var _default = exports["default"] = ShoppingCart01;