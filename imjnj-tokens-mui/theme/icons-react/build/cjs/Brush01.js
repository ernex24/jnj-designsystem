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
var Brush01 = function Brush01(props) {
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
      d: "M2 22.0002c2 0 4.608.3417 5.9748-1.0252 1.3669-1.3668 1.3669-3.5829 0-4.9497-1.3668-1.3668-3.5829-1.3668-4.9497 0s0 3.9749-1.0251 5.9749Zm6-6c-.4915-.4914-.7372-.7371-.876-.9945a2 2 0 0 1 .0377-1.9672c.1487-.2517.4037-.4878.9136-.96l9.8681-9.137c.8692-.8049 2.219-.779 3.0565.0587.8376.8376.8636 2.1873.0588 3.0565l-9.1371 9.8681c-.4722.5099-.7082.7649-.96.9136a2 2 0 0 1-1.9672.0378c-.2573-.1389-.503-.3846-.9945-.876Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 11.2224 3.7778 3.7778m-4.803 5.9748C6.608 22.3419 4 22.0002 2 22.0002c1.0251-2-.3417-4.6081 1.0251-5.9749 1.3668-1.3668 3.583-1.3668 4.9497 0 1.3669 1.3668 1.3669 3.5829 0 4.9497Zm3.9468-5.0502 9.1371-9.868c.8048-.8693.7788-2.219-.0588-3.0566-.8375-.8376-2.1873-.8636-3.0565-.0588l-9.868 9.1371c-.51.4722-.765.7083-.9137.96a2 2 0 0 0-.0378 1.9672c.139.2574.3846.5031.876.9945.4915.4914.7372.7371.9945.876a2 2 0 0 0 1.9672-.0378c.2518-.1487.4878-.4037.96-.9136Z"
    })]
  }));
};
var _default = exports["default"] = Brush01;