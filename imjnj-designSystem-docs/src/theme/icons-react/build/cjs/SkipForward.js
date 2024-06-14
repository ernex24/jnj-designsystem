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
var SkipForward = function SkipForward(props) {
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
      d: "M5 7.329c0-1.0657 0-1.5985.2185-1.8722a1 1 0 0 1 .7826-.3762c.3502.0004.7662.3333 1.5984.999l5.8388 4.671c.5338.4271.8007.6406.8974.8986a1.0004 1.0004 0 0 1 0 .7016c-.0967.258-.3636.4715-.8974.8986l-5.8388 4.671c-.8322.6657-1.2482.9986-1.5984.999a1.0002 1.0002 0 0 1-.7826-.3762C5 18.2695 5 17.7367 5 16.671V7.329Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 5v14M7.5995 17.9204l5.8388-4.671c.5338-.4271.8007-.6406.8974-.8986a1.0004 1.0004 0 0 0 0-.7016c-.0967-.258-.3636-.4715-.8974-.8986l-5.8388-4.671c-.8322-.6657-1.2482-.9986-1.5984-.999a1 1 0 0 0-.7826.3762C5 5.7304 5 6.2633 5 7.329v9.342c0 1.0657 0 1.5985.2185 1.8722a1 1 0 0 0 .7826.3762c.3502-.0004.7662-.3333 1.5984-.999Z"
    })]
  }));
};
var _default = exports["default"] = SkipForward;