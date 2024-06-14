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
var LayersTwo02 = function LayersTwo02(props) {
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
      d: "M12.322 4.667c-.1181-.059-.1771-.0886-.239-.1002a.4502.4502 0 0 0-.166 0c-.0619.0116-.1209.0411-.239.1002L3 9.006l8.678 4.339c.1181.059.1771.0885.239.1001a.4498.4498 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 9.006l-8.678-4.339Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7.5 11.256 3 13.506l8.678 4.339c.1181.059.1771.0885.239.1001a.4498.4498 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 13.506l-4.5-2.25M3 9.006l8.678-4.339c.1181-.059.1771-.0886.239-.1002a.4502.4502 0 0 1 .166 0c.0619.0116.1209.0411.239.1002L21 9.006l-8.678 4.339c-.1181.059-.1771.0885-.239.1001a.4498.4498 0 0 1-.166 0c-.0619-.0116-.1209-.0411-.239-.1001L3 9.006Z"
    })]
  }));
};
var _default = exports["default"] = LayersTwo02;