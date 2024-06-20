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
var Scales01 = function Scales01(props) {
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
      d: "M6.6 19.2c1.9882 0 3.6-1.6118 3.6-3.6v-.18c0-.252 0-.378-.049-.4743a.4505.4505 0 0 0-.1967-.1967C9.858 14.7 9.732 14.7 9.48 14.7H3.72c-.252 0-.378 0-.4743.049a.4502.4502 0 0 0-.1966.1967C3 15.042 3 15.168 3 15.42v.18c0 1.9882 1.6118 3.6 3.6 3.6Zm10.8-1.8c1.9882 0 3.6-1.6118 3.6-3.6v-.18c0-.252 0-.378-.049-.4743a.4505.4505 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-5.76c-.252 0-.378 0-.4743.049a.4505.4505 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v.18c0 1.9882 1.6118 3.6 3.6 3.6Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 15.6v-.1352c0-.2848 0-.4272.0218-.566a1.8 1.8 0 0 1 .0958-.3606c.0499-.1313.1205-.2549.2619-.5023L6.6 8.4M3 15.6c0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6m-7.2 0v-.18c0-.252 0-.378.049-.4743a.4502.4502 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v.18M6.6 8.4l3.2205 5.6359c.1414.2474.212.371.2619.5023.0444.1166.0765.2374.0958.3606.0218.1388.0218.2812.0218.566V15.6M6.6 8.4l10.8-1.8m-3.6 7.2v-.1352c0-.2848 0-.4272.0218-.566a1.7928 1.7928 0 0 1 .0958-.3606c.0499-.1313.1205-.2549.2619-.5023L17.4 6.6m-3.6 7.2c0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6m-7.2 0v-.18c0-.252 0-.378.049-.4743a.4505.4505 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v.18m-3.6-7.2 3.2205 5.6359c.1414.2474.212.371.2619.5023.0444.1166.0765.2374.0958.3606.0218.1388.0218.2812.0218.566V13.8M12 3v4.5"
    })]
  }));
};
var _default = exports["default"] = Scales01;