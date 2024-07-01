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
var CoinsStacked04 = function CoinsStacked04(props) {
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
      d: "M11.2 8.4c3.9765 0 7.2-1.2088 7.2-2.7S15.1765 3 11.2 3C7.2236 3 4 4.2088 4 5.7s3.2236 2.7 7.2 2.7Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18.4 5.7c0 1.4912-3.2235 2.7-7.2 2.7C7.2236 8.4 4 7.1912 4 5.7m14.4 0c0-1.4912-3.2235-2.7-7.2-2.7C7.2236 3 4 4.2088 4 5.7m14.4 0v12.6c0 1.4912-3.2236 2.7-7.2 2.7C7.2236 21 4 19.7912 4 18.3V5.7m14.4 4.2c0 1.4911-3.2236 2.6999-7.2 2.6999-3.9764 0-7.2-1.2088-7.2-2.7m14.4 4.1971c0 1.4912-3.2236 2.7-7.2 2.7-3.9764 0-7.2-1.2088-7.2-2.7"
    })]
  }));
};
var _default = exports["default"] = CoinsStacked04;