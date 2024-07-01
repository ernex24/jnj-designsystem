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
var Pencil02 = function Pencil02(props) {
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
      d: "M7.2121 18.8512c.2748-.0749.4122-.1124.5404-.1699a1.8034 1.8034 0 0 0 .3227-.1873c.1135-.0827.2142-.1834.4156-.3848l9.3001-9.3c.1782-.1783.2673-.2674.3007-.3701a.451.451 0 0 0 0-.2782c-.0334-.1027-.1225-.1918-.3007-.37L15.2091 5.209c-.1782-.1782-.2673-.2673-.37-.3007a.4502.4502 0 0 0-.2782 0c-.1027.0334-.1918.1225-.37.3007l-9.3 9.3001c-.2015.2014-.3022.3021-.385.4156a1.803 1.803 0 0 0-.1872.3227c-.0575.1282-.095.2656-.17.5404L3 20l4.2121-1.1488Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.4 2 21 5.6M3 20l1.1488-4.2121c.075-.2748.1124-.4122.17-.5404a1.803 1.803 0 0 1 .1872-.3227c.0827-.1135.1834-.2142.3848-.4156l9.3001-9.3c.1782-.1783.2673-.2674.37-.3008a.4502.4502 0 0 1 .2782 0c.1027.0334.1918.1225.37.3007l2.5818 2.5818c.1782.1782.2673.2673.3007.37a.451.451 0 0 1 0 .2782c-.0334.1027-.1225.1918-.3007.37l-9.3 9.3001c-.2015.2014-.3022.3021-.4157.3848a1.7974 1.7974 0 0 1-.3227.1873c-.1282.0575-.2656.095-.5404.1699L3 20Z"
    })]
  }));
};
var _default = exports["default"] = Pencil02;