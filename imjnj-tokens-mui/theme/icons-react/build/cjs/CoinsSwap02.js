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
var CoinsSwap02 = function CoinsSwap02(props) {
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
      d: "m6.6 5.6 1.8-1.8L6.6 2m10.8 14.4-1.8 1.8 1.8 1.8m-9 0c2.9823 0 5.4-2.4177 5.4-5.4 0-2.9823-2.4177-5.4-5.4-5.4-2.9823 0-5.4 2.4177-5.4 5.4C3 17.5823 5.4177 20 8.4 20Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6.6 5.6 1.8-1.8m0 0L6.6 2m1.8 1.8H6.6C4.6118 3.8 3 5.4118 3 7.4m14.4 9-1.8 1.8m0 0 1.8 1.8m-1.8-1.8h1.8c1.9882 0 3.6-1.6118 3.6-3.6M10.3701 6.05C10.9696 3.721 13.0838 2 15.6 2 18.5823 2 21 4.4177 21 7.4c0 2.5162-1.7209 4.6304-4.0499 5.2299M13.8 14.6c0 2.9823-2.4177 5.4-5.4 5.4C5.4177 20 3 17.5823 3 14.6c0-2.9823 2.4177-5.4 5.4-5.4 2.9823 0 5.4 2.4177 5.4 5.4Z"
    })]
  }));
};
var _default = exports["default"] = CoinsSwap02;