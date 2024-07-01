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
var Lightbulb03 = function Lightbulb03(props) {
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
      d: "M14 14.9937c2.1285-1.0111 3.6-3.1805 3.6-5.6937 0-3.4794-2.8206-6.3-6.3-6.3C7.8206 3 5 5.8206 5 9.3c0 2.5132 1.4715 4.6826 3.6 5.6937V15.6c0 .8387 0 1.258.137 1.5888a1.8 1.8 0 0 0 .9742.9742c.3308.137.7501.137 1.5888.137s1.258 0 1.5888-.137a1.8 1.8 0 0 0 .9742-.9742C14 16.858 14 16.4387 14 15.6v-.6063Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9.05 21h4.5m.45-6.0063c2.1285-1.0111 3.6-3.1805 3.6-5.6937 0-3.4794-2.8206-6.3-6.3-6.3C7.8206 3 5 5.8206 5 9.3c0 2.5132 1.4715 4.6826 3.6 5.6937V15.6c0 .8387 0 1.258.137 1.5888a1.8 1.8 0 0 0 .9742.9742c.3308.137.7501.137 1.5888.137s1.258 0 1.5888-.137a1.8 1.8 0 0 0 .9742-.9742C14 16.858 14 16.4387 14 15.6v-.6063Z"
    })]
  }));
};
var _default = exports["default"] = Lightbulb03;