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
var MessageNotificationCircle = function MessageNotificationCircle(props) {
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
      d: "M20.1209 3.8787c1.1716 1.1716 1.1716 3.071 0 4.2426-1.1715 1.1716-3.071 1.1716-4.2426 0-1.1716-1.1715-1.1716-3.071 0-4.2426 1.1716-1.1716 3.0711-1.1716 4.2426 0Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.707 3.0365C7.3842 3.4362 3.9996 7.0728 3.9996 11.5c0 .95.1559 1.8636.4434 2.7166.1082.321.1623.4815.172.6048.0097.1218.0024.2072-.0277.3255-.0305.1199-.0979.2446-.2326.4939l-1.6356 3.0276c-.2334.4318-.35.6477-.3239.8144a.5.5 0 0 0 .2336.3494c.144.0879.3881.0626.8764.0122l5.121-.5294c.155-.016.2326-.024.3033-.0213a.901.901 0 0 1 .1864.0248c.0689.0159.1555.0493.3289.116.948.3653 1.978.5655 3.0548.5655 4.4308 0 8.0698-3.3902 8.4645-7.7181m-.8432-8.4032c1.1716 1.1716 1.1716 3.071 0 4.2426-1.1715 1.1716-3.071 1.1716-4.2426 0-1.1716-1.1715-1.1716-3.071 0-4.2426 1.1716-1.1716 3.0711-1.1716 4.2426 0Z"
    })]
  }));
};
var _default = exports["default"] = MessageNotificationCircle;