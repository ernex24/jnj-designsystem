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
var UserEdit = function UserEdit(props) {
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
      d: "M10 12c2.4853 0 4.5-2.0147 4.5-4.5S12.4853 3 10 3 5.5 5.0147 5.5 7.5 7.5147 12 10 12Zm1.8861 5.8987c.0424-.1486.0636-.2228.0955-.2921a.9981.9981 0 0 1 .1026-.1745c.0451-.0614.0997-.116.209-.2253L18.75 10.75c.6904-.6904 1.8097-.6904 2.5 0 .6904.6903.6904 1.8097 0 2.5l-6.4568 6.4568c-.1093.1093-.1639.1639-.2253.209a.9981.9981 0 0 1-.1745.1026c-.0693.0318-.1435.0531-.292.0955L11 21l.8861-3.1013Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 15.5H7.5c-1.3956 0-2.0934 0-2.6611.1722a4.0001 4.0001 0 0 0-2.6667 2.6667C2 18.9067 2 19.6044 2 21M14.5 7.5c0 2.4853-2.0147 4.5-4.5 4.5S5.5 9.9853 5.5 7.5 7.5147 3 10 3s4.5 2.0147 4.5 4.5ZM11 21l3.1014-.8861c.1485-.0424.2227-.0637.292-.0955a.9981.9981 0 0 0 .1745-.1026c.0614-.0451.116-.0997.2253-.209L21.25 13.25c.6904-.6903.6904-1.8097 0-2.5-.6903-.6904-1.8096-.6904-2.5 0l-6.4568 6.4568c-.1093.1093-.1639.1639-.209.2253a.9981.9981 0 0 0-.1026.1745c-.0319.0693-.0531.1435-.0955.2921L11 21Z"
    })]
  }));
};
var _default = exports["default"] = UserEdit;