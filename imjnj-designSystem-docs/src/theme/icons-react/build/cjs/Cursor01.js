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
var Cursor01 = function Cursor01(props) {
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
      d: "m12.9999 12.9999 6 6-6-6ZM4.7931 3.747c-.562-.2342-.843-.3512-1.0188-.2943a.5.5 0 0 0-.3216.3216c-.057.1758.0601.4568.2943 1.0188l5.5082 13.2213c.2524.6057.3785.9086.5495.9912a.5002.5002 0 0 0 .4649-.0156c.165-.094.2706-.4046.4816-1.026l1.7019-5.0107c.0465-.137.0698-.2055.1089-.2625a.5023.5023 0 0 1 .1288-.1288c.057-.0391.1255-.0624.2625-.1089l5.0107-1.7019c.6214-.211.932-.3166 1.026-.4816a.5002.5002 0 0 0 .0156-.465c-.0826-.1709-.3855-.297-.9912-.5494L4.7931 3.747Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m12.9999 12.9999 6 6m-1.0359-8.2487-5.0107 1.7019c-.137.0465-.2055.0698-.2625.1089a.5023.5023 0 0 0-.1288.1288c-.0391.057-.0624.1255-.1089.2625l-1.7019 5.0107c-.211.6214-.3166.932-.4816 1.026a.5002.5002 0 0 1-.465.0156c-.1709-.0826-.297-.3855-.5494-.9912L3.747 4.7931c-.2342-.562-.3512-.843-.2943-1.0188a.5.5 0 0 1 .3216-.3216c.1758-.057.4568.0601 1.0188.2943l13.2213 5.5082c.6057.2524.9086.3785.9912.5495a.5002.5002 0 0 1-.0156.4649c-.094.165-.4046.2706-1.026.4816Z"
    })]
  }));
};
var _default = exports["default"] = Cursor01;