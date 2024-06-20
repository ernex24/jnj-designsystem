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
var Building06 = function Building06(props) {
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
      d: "M6.78 10.2h4.32V5.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C12.4679 3 12.9719 3 13.98 3h3.24c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972V19.2H3.9v-6.12c0-1.0081 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C5.2678 10.2 5.772 10.2 6.78 10.2Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.1 10.2H6.78c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3.9 11.5679 3.9 12.0719 3.9 13.08v6.12m16.2 0V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C18.7321 3 18.2281 3 17.22 3h-3.24c-1.0081 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C11.1 4.3678 11.1 4.872 11.1 5.88V19.2m9.9 0H3M14.25 6.6h2.7m-2.7 3.6h2.7m-2.7 3.6h2.7"
    })]
  }));
};
var _default = exports["default"] = Building06;