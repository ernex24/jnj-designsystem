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
var BellPlus = function BellPlus(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M8.7449 20.1c.6346.5601 1.4682.9 2.3812.9.913 0 1.7466-.3399 2.3813-.9m3.0187-11.7V3m-2.7 2.7h5.4m-7.2-2.6245a5.3999 5.3999 0 0 0-4.7184 1.5061A5.4 5.4 0 0 0 5.7261 8.4c0 2.7812-.7016 4.6854-1.4853 5.9449-.661 1.0624-.9916 1.5936-.9795 1.7418.0134.1641.0482.2266.1804.3247.1194.0886.6578.0886 1.7344.0886h11.9c1.0766 0 1.6149 0 1.7343-.0886.1323-.0981.167-.1606.1805-.3247.0121-.1482-.3185-.6795-.9796-1.742-.4429-.7118-.8595-1.6294-1.1381-2.7947"
    })
  }));
};
var _default = exports["default"] = BellPlus;