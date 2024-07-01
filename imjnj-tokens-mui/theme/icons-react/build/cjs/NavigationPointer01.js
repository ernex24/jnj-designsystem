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
var NavigationPointer01 = function NavigationPointer01(props) {
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
      d: "M3.4135 10.7445c-.5954-.2315-.893-.3473-.98-.5141a.5.5 0 0 1-.0002-.4615c.0867-.167.3842-.283.9793-.5153l16.8877-6.5903c.5372-.2097.8058-.3145.9774-.2571a.4999.4999 0 0 1 .3158.3158c.0574.1716-.0474.4402-.2571.9774L14.7461 20.587c-.2322.5951-.3484.8926-.5153.9793a.5.5 0 0 1-.4615-.0002c-.1668-.0869-.2826-.3846-.5141-.98l-2.6281-6.758c-.047-.1208-.0705-.1812-.1068-.2321a.4992.4992 0 0 0-.1167-.1167c-.0509-.0363-.1113-.0598-.2321-.1068l-6.758-2.6281Z"
    })
  }));
};
var _default = exports["default"] = NavigationPointer01;