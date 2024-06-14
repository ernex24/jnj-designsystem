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
var Lightbulb01 = function Lightbulb01(props) {
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
      d: "M11.25 3C7.522 3 4.5 6.022 4.5 9.75c0 2.7679 1.666 5.2584 4.05 6.3h5.4c2.384-1.0416 4.05-3.5321 4.05-6.3C18 6.022 14.9779 3 11.25 3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13.95 16.05v2.25c0 .8387 0 1.258-.137 1.5888a1.8 1.8 0 0 1-.9742.9742C12.508 21 12.0887 21 11.25 21s-1.258 0-1.5888-.137a1.8 1.8 0 0 1-.9742-.9742c-.137-.3308-.137-.7501-.137-1.5888v-2.25m5.4 0c2.384-1.0416 4.05-3.5321 4.05-6.3C18 6.022 14.9779 3 11.25 3 7.522 3 4.5 6.022 4.5 9.75c0 2.7679 1.666 5.2584 4.05 6.3m5.4 0h-5.4"
    })]
  }));
};
var _default = exports["default"] = Lightbulb01;