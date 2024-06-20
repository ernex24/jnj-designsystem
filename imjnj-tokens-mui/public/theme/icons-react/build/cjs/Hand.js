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
var Hand = function Hand(props) {
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
      d: "M11.15 21c4.225 0 7.65-3.3579 7.65-7.5v-5c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v-3c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v-1c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v1c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v6c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v2c0 4.1421 3.425 7.5 7.65 7.5Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6.56 11.5V14m0-2.5v-6c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5m-3.06 6c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v2c0 4.1421 3.425 7.5 7.65 7.5 4.225 0 7.65-3.3579 7.65-7.5v-5c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5m-6.12-3V11m0-5.5v-1c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5v1m0 0V11m0-5.5c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5v3m0 0V11"
    })]
  }));
};
var _default = exports["default"] = Hand;