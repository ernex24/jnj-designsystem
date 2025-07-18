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
var PieChart01 = function PieChart01(props) {
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
      d: "M21.2104 15.8899a9.9994 9.9994 0 0 1-7.2676 5.9148A9.9996 9.9996 0 0 1 2.169 10.1646 10 10 0 0 1 8.0004 2.83"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M21.2004 11.9999c.2779 0 .4168 0 .528-.06a.5247.5247 0 0 0 .2199-.2382c.051-.1157.0407-.2441.0201-.5009a9.9995 9.9995 0 0 0-6.1412-8.4396 9.9998 9.9998 0 0 0-3.0276-.7293c-.2568-.0206-.3852-.0308-.5009.0201a.5247.5247 0 0 0-.2382.22c-.0601.1112-.0601.25-.0601.528v8.3999c0 .2801 0 .4201.0545.527a.5001.5001 0 0 0 .2185.2186c.107.0544.247.0544.527.0544h8.4Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21.2104 15.8899a9.9994 9.9994 0 0 1-7.2676 5.9148A9.9996 9.9996 0 0 1 2.169 10.1646 10 10 0 0 1 8.0004 2.83m13.2388 5.343a9.9995 9.9995 0 0 1 .7292 3.0277c.0206.2568.0309.3852-.0201.5009a.5247.5247 0 0 1-.2199.2382c-.1112.06-.2501.06-.528.06h-8.4c-.28 0-.42 0-.527-.0544a.5001.5001 0 0 1-.2185-.2186c-.0545-.1069-.0545-.2469-.0545-.527v-8.4c0-.2778 0-.4167.0601-.528a.5247.5247 0 0 1 .2382-.2199c.1157-.051.2441-.0407.5009-.02a9.9998 9.9998 0 0 1 8.4396 6.1411Z"
    })]
  }));
};
var _default = exports["default"] = PieChart01;