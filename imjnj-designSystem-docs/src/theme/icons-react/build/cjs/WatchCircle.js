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
var WatchCircle = function WatchCircle(props) {
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
      d: "M11.3 9.3V12l1.35 1.35"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.3 18.3c3.4794 0 6.3-2.8206 6.3-6.3 0-3.4794-2.8206-6.3-6.3-6.3C7.8206 5.7 5 8.5206 5 12c0 3.4794 2.8206 6.3 6.3 6.3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6.8 16.5.437 2.1848c.1649.8247.2474 1.2371.4627 1.5455.1898.272.4512.4862.7551.6191C8.7995 21 9.22 21 10.061 21h2.478c.841 0 1.2615 0 1.6062-.1506a1.8003 1.8003 0 0 0 .7551-.6191c.2153-.3084.2978-.7208.4627-1.5455L15.8 16.5m-9-9 .437-2.1848c.1649-.8247.2474-1.237.4627-1.5455a1.8 1.8 0 0 1 .7551-.619C8.7995 3 9.22 3 10.061 3h2.478c.841 0 1.2615 0 1.6062.1506.3039.1329.5653.3471.7551.6191.2153.3084.2978.7208.4627 1.5455L15.8 7.5m-4.5 1.8V12l1.35 1.35M17.6 12c0 3.4794-2.8206 6.3-6.3 6.3C7.8206 18.3 5 15.4794 5 12c0-3.4794 2.8206-6.3 6.3-6.3 3.4794 0 6.3 2.8206 6.3 6.3Z"
    })]
  }));
};
var _default = exports["default"] = WatchCircle;