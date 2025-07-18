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
var HelpOctagon = function HelpOctagon(props) {
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
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.223 2.4316c.2836-.1575.4254-.2363.5755-.2672.133-.0273.27-.0273.403 0 .1501.031.2919.1097.5755.2672l7.4 4.1112c.2996.1664.4493.2496.5584.3679a1 1 0 0 1 .2141.364c.0505.1527.0505.324.0505.6667v8.1171c0 .3427 0 .514-.0505.6668a.9998.9998 0 0 1-.2141.3639c-.1091.1184-.2588.2016-.5584.368l-7.4 4.1111c-.2836.1575-.4254.2363-.5755.2672-.133.0273-.27.0273-.403 0-.1501-.0309-.2919-.1097-.5755-.2672l-7.4-4.1111c-.2995-.1664-.4493-.2496-.5584-.368a.9999.9999 0 0 1-.2141-.3639C3 16.5725 3 16.4012 3 16.0585v-8.117c0-.3427 0-.514.0505-.6669a1.0002 1.0002 0 0 1 .2141-.3639c.109-.1183.2588-.2015.5584-.368l7.4-4.111Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M3 7.9414v8.1171c0 .3427 0 .514.0505.6668a.9999.9999 0 0 0 .2141.3639c.109.1184.2588.2016.5584.368l7.4 4.1111c.2836.1575.4254.2363.5755.2672.133.0273.27.0273.403 0 .1501-.0309.2919-.1097.5755-.2672l7.4-4.1111c.2996-.1664.4493-.2496.5584-.368a.9998.9998 0 0 0 .2141-.3639C21 16.5725 21 16.4012 21 16.0585v-8.117c0-.3427 0-.514-.0505-.6669a1 1 0 0 0-.2141-.3639c-.1091-.1183-.2588-.2015-.5584-.368l-7.4-4.111c-.2836-.1576-.4254-.2364-.5755-.2673a1.0007 1.0007 0 0 0-.403 0c-.1501.031-.2919.1097-.5755.2672l-7.4 4.1112c-.2995.1664-.4493.2496-.5584.3679a1.0002 1.0002 0 0 0-.2141.364C3 7.4273 3 7.5986 3 7.9413Z"
    })]
  }));
};
var _default = exports["default"] = HelpOctagon;