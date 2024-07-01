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
var ShoppingCart03 = function ShoppingCart03(props) {
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
      d: "M7.4 20.55a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm8.1 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.7001 13.8h11.8222c.9115 0 1.3673 0 1.7301-.1699a1.8006 1.8006 0 0 0 .7723-.6913c.209-.3418.2593-.7948.36-1.7008l.5265-4.7385c.0307-.2767.0461-.415.0016-.5222a.45.45 0 0 0-.1981-.2212C19.6132 5.7 19.474 5.7 19.1956 5.7H4.2501M2 3h1.1236c.2382 0 .3572 0 .4504.0453a.45.45 0 0 1 .1949.183c.051.0902.0584.209.0733.4468l.8156 13.0498c.0149.2377.0223.3566.0733.4467a.45.45 0 0 0 .1949.1831c.0932.0453.2122.0453.4504.0453H17.3M6.95 20.55h.009m8.091 0h.009m-7.659 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm8.1 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    })]
  }));
};
var _default = exports["default"] = ShoppingCart03;