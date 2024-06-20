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
var Star04 = function Star04(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12 2 1.8108 4.708c.2538.6599.3807.9898.578 1.2674a2.699 2.699 0 0 0 .6358.6358c.2776.1973.6075.3242 1.2674.578L21 11l-4.708 1.8108c-.6599.2538-.9898.3807-1.2674.578a2.699 2.699 0 0 0-.6358.6358c-.1973.2776-.3242.6075-.578 1.2674L12 20l-1.8108-4.708c-.2538-.6599-.3807-.9898-.578-1.2674a2.6996 2.6996 0 0 0-.6358-.6358c-.2776-.1973-.6075-.3242-1.2674-.578L3 11l4.708-1.8108c.6599-.2538.9898-.3807 1.2674-.578a2.701 2.701 0 0 0 .6358-.6358c.1973-.2776.3242-.6075.578-1.2674L12 2Z"
    })
  }));
};
var _default = exports["default"] = Star04;