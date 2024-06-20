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
var Translate01 = function Translate01(props) {
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
      d: "M19.2783 15.6h-6.4566l2.5788-5.3919c.2078-.4345.3117-.6517.4538-.7203a.45.45 0 0 1 .3914 0c.1421.0686.246.2858.4538.7203L19.2783 15.6Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.8217 15.6h6.4566m-6.4566 0L11.1 19.2m1.7217-3.6 2.5788-5.3919c.2078-.4345.3117-.6517.4538-.7203a.45.45 0 0 1 .3914 0c.1421.0686.246.2858.4538.7203L19.2783 15.6m0 0L21 19.2M3 4.8h5.4m0 0h3.15m-3.15 0V3m3.15 1.8h2.25m-2.25 0c-.4465 2.6616-1.4827 5.0726-3.001 7.096M10.2 12.9c-.5513-.2477-1.1136-.5921-1.651-1.004m0 0C7.3317 10.963 6.2425 9.684 5.7 8.4m2.849 3.496C7.1048 13.8206 5.2243 15.3946 3 16.5"
    })]
  }));
};
var _default = exports["default"] = Translate01;