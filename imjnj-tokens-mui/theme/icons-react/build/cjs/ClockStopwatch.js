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
var ClockStopwatch = function ClockStopwatch(props) {
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
      d: "M11.15 9.75v3.6l2.25 1.35"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.15 21c4.225 0 7.65-3.425 7.65-7.65 0-4.225-3.425-7.65-7.65-7.65-4.225 0-7.65 3.425-7.65 7.65 0 4.225 3.425 7.65 7.65 7.65ZM9.35 3h3.6-3.6Zm9.2961 3.2328-1.35-1.35.675.675m-14.3171.675 1.35-1.35-.675.675"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.15 9.75v3.6l2.25 1.35m-2.25-9c-4.225 0-7.65 3.425-7.65 7.65 0 4.225 3.425 7.65 7.65 7.65 4.225 0 7.65-3.425 7.65-7.65 0-4.225-3.425-7.65-7.65-7.65Zm0 0V3m-1.8 0h3.6m5.6961 3.2328-1.35-1.35.675.675m-14.3172.675 1.35-1.35-.675.675"
    })]
  }));
};
var _default = exports["default"] = ClockStopwatch;