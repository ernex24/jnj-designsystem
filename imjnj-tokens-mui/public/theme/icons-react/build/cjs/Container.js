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
var Container = function Container(props) {
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
      d: "M11.223 2.4318c.2836-.1576.4254-.2364.5756-.2673a1.0002 1.0002 0 0 1 .4029 0c.1501.031.2919.1097.5755.2673l7.4 4.111c.2996.1665.4493.2497.5584.368a1 1 0 0 1 .2141.364c.0505.1528.0505.324.0505.6667v8.1171c0 .3427 0 .514-.0505.6668a.999.999 0 0 1-.2141.3639c-.1091.1184-.2588.2016-.5584.368l-7.4 4.1111c-.2836.1576-.4254.2363-.5755.2672a.9977.9977 0 0 1-.4029 0c-.1502-.0309-.292-.1096-.5756-.2672l-7.4-4.1111c-.2995-.1664-.4493-.2496-.5584-.368a.999.999 0 0 1-.2141-.3639C3 16.5726 3 16.4013 3 16.0586v-8.117c0-.3427 0-.514.0505-.6668a1.0002 1.0002 0 0 1 .2141-.364c.109-.1183.2588-.2015.5584-.368l7.4-4.111Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20.5 7.2778 12 12.0001m0 0L3.5 7.2778m8.5 4.7223v9.5m9-5.4415v-8.117c0-.3427 0-.514-.0505-.6668a1 1 0 0 0-.2141-.364c-.1091-.1183-.2588-.2015-.5584-.368l-7.4-4.111c-.2836-.1576-.4254-.2364-.5755-.2673a1.0002 1.0002 0 0 0-.4029 0c-.1502.031-.292.1097-.5756.2673l-7.4 4.111c-.2995.1665-.4493.2497-.5584.368a1.0002 1.0002 0 0 0-.2141.364C3 7.4276 3 7.5988 3 7.9415v8.1171c0 .3427 0 .514.0505.6668a.999.999 0 0 0 .2141.3639c.109.1184.2588.2016.5584.368l7.4 4.1111c.2836.1576.4254.2363.5756.2672a.9977.9977 0 0 0 .4029 0c.1501-.0309.2919-.1096.5755-.2672l7.4-4.1111c.2996-.1664.4493-.2496.5584-.368a.999.999 0 0 0 .2141-.3639C21 16.5726 21 16.4013 21 16.0586Z"
    })]
  }));
};
var _default = exports["default"] = Container;