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
var CloudSun01 = function CloudSun01(props) {
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
      d: "M7.5 19.2c-2.4853 0-4.5-2.0147-4.5-4.5s2.0147-4.5 4.5-4.5c.0298 0 .0596.0003.0893.0009C8.4085 8.5976 10.076 7.5 12 7.5c2.2673 0 4.1786 1.5244 4.7648 3.6042A4.0638 4.0638 0 0 1 16.95 11.1c2.2368 0 4.05 1.8132 4.05 4.05 0 2.2368-1.8132 4.05-4.05 4.05H7.5Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18.6312 11.4643C20.0415 10.7046 21 9.2143 21 7.5 21 5.0147 18.9853 3 16.5 3S12 5.0147 12 7.5m0 0c-1.924 0-3.5915 1.0976-4.4107 2.7009A4.4197 4.4197 0 0 0 7.5 10.2c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5h9.45c2.2368 0 4.05-1.8132 4.05-4.05 0-2.2368-1.8132-4.05-4.05-4.05-.0621 0-.1238.0014-.1852.0042C16.1786 9.0244 14.2673 7.5 12 7.5Z"
    })]
  }));
};
var _default = exports["default"] = CloudSun01;