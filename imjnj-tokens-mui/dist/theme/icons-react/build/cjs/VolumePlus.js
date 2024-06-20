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
var VolumePlus = function VolumePlus(props) {
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
      d: "M3 9.0106c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933c.1925-.098.4446-.098.9486-.098h1.5635c.2202 0 .3302 0 .4338-.025a.9.9 0 0 0 .2602-.1077c.0908-.0556.1686-.1335.3243-.2891l2.849-2.8491c.3856-.3856.5784-.5784.7439-.5914a.4501.4501 0 0 1 .3775.1564c.1078.1262.1078.3988.1078.944v12.7236c0 .5452 0 .8179-.1078.9441a.4502.4502 0 0 1-.3775.1564c-.1655-.0131-.3583-.2058-.7438-.5914l-2.8491-2.8491c-.1557-.1557-.2335-.2335-.3243-.2891a.9002.9002 0 0 0-.2602-.1078c-.1036-.0249-.2136-.0249-.4338-.0249H4.44c-.504 0-.756 0-.9486-.0981a.8993.8993 0 0 1-.3933-.3933C3 14.0867 3 13.8347 3 13.3306v-4.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M17.85 14.3206v-6.3m-3.15 3.15H21M9.8709 4.2998l-2.8491 2.849c-.1557.1557-.2335.2336-.3243.2892a.9.9 0 0 1-.2602.1078c-.1036.0248-.2136.0248-.4338.0248H4.44c-.504 0-.756 0-.9486.0981a.9.9 0 0 0-.3933.3933C3 8.2546 3 8.5066 3 9.0107v4.32c0 .5041 0 .7561.098.9486a.8993.8993 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981h1.5635c.2202 0 .3302 0 .4338.0249a.9002.9002 0 0 1 .2602.1078c.0908.0556.1686.1334.3243.2891l2.849 2.8491c.3856.3856.5784.5783.7439.5914a.4502.4502 0 0 0 .3775-.1564c.1078-.1262.1078-.3989.1078-.9441V4.8089c0-.5453 0-.8179-.1078-.9441a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5914Z"
    })]
  }));
};
var _default = exports["default"] = VolumePlus;