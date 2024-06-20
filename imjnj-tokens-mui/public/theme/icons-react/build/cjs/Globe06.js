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
var Globe06 = function Globe06(props) {
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
      d: "m16.282 19.9458-2.8501-7.5139 7.5139 2.8501-3.3319 1.3319-1.3319 3.3319Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m3.618 14.2806 1.7174-.9914a.4498.4498 0 0 1 .3078-.0526l3.379.6324a.45.45 0 0 0 .5328-.4443l-.013-2.9607a.4504.4504 0 0 1 .0614-.229l1.7053-2.9194a.45.45 0 0 0-.0204-.4857L8.417 2.7431m9.8832 1.83c-4.95 2.377-2.2502 5.5269-1.35 5.9769 1.6894.8446 4.0387.9 4.0387.9A9.2004 9.2004 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9c.1509 0 .3009-.0037.45-.0111m3.832-.0431-2.8501-7.5139 7.5139 2.8501-3.3319 1.3319-1.3319 3.3319Z"
    })]
  }));
};
var _default = exports["default"] = Globe06;