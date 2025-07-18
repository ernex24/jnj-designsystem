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
var Umbrella01 = function Umbrella01(props) {
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
      d: "M11.0052 3c-4.4824 0-8.1994 3.2768-8.8863 7.5656-.067.4186-.1006.6279-.0164.8515.067.1779.231.3702.396.4644.2074.1185.4538.1185.9467.1185h15.12c.4929 0 .7393 0 .9468-.1185.165-.0942.329-.2865.3959-.4644.0842-.2236.0507-.4329-.0164-.8515C19.2047 6.2768 15.4876 3 11.0052 3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15.5052 18.66c0 1.2923-1.0073 2.34-2.25 2.34-1.2426 0-2.25-1.0477-2.25-2.34V12m-8.8863-1.4344C2.8058 6.2768 6.5229 3 11.0052 3c4.4824 0 8.1995 3.2768 8.8863 7.5656.0671.4186.1006.6279.0164.8515-.0669.1779-.2309.3702-.3959.4644-.2075.1185-.4539.1185-.9468.1185h-15.12c-.4929 0-.7393 0-.9467-.1185-.165-.0942-.329-.2865-.396-.4644-.0842-.2236-.0507-.4329.0164-.8515Z"
    })]
  }));
};
var _default = exports["default"] = Umbrella01;