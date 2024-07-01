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
var Waves = function Waves(props) {
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
      d: "M3 5.9c.54.45 1.08.9 2.25.9C7.5 6.8 7.5 5 9.75 5c1.17 0 1.71.45 2.25.9M3 16.7c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9m-9-5.4c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9m0-5.4c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9m-9 10.8c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9m-9-5.4c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 5.9c.54.45 1.08.9 2.25.9C7.5 6.8 7.5 5 9.75 5c1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9M3 16.7c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9M3 11.3c.54.45 1.08.9 2.25.9 2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9s1.08.9 2.25.9c2.25 0 2.25-1.8 4.5-1.8 1.17 0 1.71.45 2.25.9"
    })]
  }));
};
var _default = exports["default"] = Waves;