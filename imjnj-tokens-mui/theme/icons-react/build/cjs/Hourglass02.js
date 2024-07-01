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
var Hourglass02 = function Hourglass02(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16.8463 3H5.7537A.7537.7537 0 0 0 5 3.7537a9.0442 9.0442 0 0 0 2.649 6.3953l1.0973 1.0973c.109.109.1635.1634.2025.2158a.8999.8999 0 0 1 0 1.0758c-.039.0524-.0935.1068-.2025.2158L7.649 13.851A9.0442 9.0442 0 0 0 5 20.2463c0 .4163.3374.7537.7537.7537h11.0926a.7536.7536 0 0 0 .7537-.7537 9.0444 9.0444 0 0 0-2.649-6.3953l-1.0973-1.0973c-.109-.109-.1634-.1634-.2025-.2158a.9.9 0 0 1 0-1.0758c.0391-.0524.0935-.1068.2025-.2158l1.0973-1.0973A9.0444 9.0444 0 0 0 17.6 3.7537.7537.7537 0 0 0 16.8463 3Z"
    })
  }));
};
var _default = exports["default"] = Hourglass02;