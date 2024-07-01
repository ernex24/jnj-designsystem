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
var Announcement03 = function Announcement03(props) {
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
      d: "M21 8.85c0 3.2309-1.4103 5.85-3.15 5.85-1.7397 0-3.15-2.6191-3.15-5.85C14.7 5.6191 16.1103 3 17.85 3 19.5897 3 21 5.6191 21 8.85Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.85 14.7c1.7397 0 3.15-2.6191 3.15-5.85C21 5.6191 19.5897 3 17.85 3m0 11.7c-1.7397 0-3.15-2.6191-3.15-5.85C14.7 5.6191 16.1103 3 17.85 3m0 11.7L6.0992 12.5635c-.8347-.1518-1.2521-.2277-1.5896-.3934a2.7 2.7 0 0 1-1.4069-1.6858C3 10.1226 3 9.6984 3 8.85s0-1.2726.1027-1.6343a2.7 2.7 0 0 1 1.4069-1.6858c.3375-.1657.7549-.2416 1.5896-.3934L17.85 3M5.7 12.9l.3545 4.9626c.0336.4713.0505.7069.153.8855a.9006.9006 0 0 0 .3892.3624c.1854.0895.4216.0895.8941.0895H9.095c.5401 0 .8102 0 1.0101-.1077a.9003.9003 0 0 0 .3957-.4274c.0921-.2075.0714-.4768.0299-1.0153L10.2 13.35"
    })]
  }));
};
var _default = exports["default"] = Announcement03;