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
var Server02 = function Server02(props) {
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
      d: "M3 7.6C3 5.6118 4.6118 4 6.6 4h10.8C19.3882 4 21 5.6118 21 7.6c0 1.9882-1.6118 3.6-3.6 3.6H6.6C4.6118 11.2 3 9.5882 3 7.6Zm0 7.2c0-1.9882 1.6118-3.6 3.6-3.6h10.8c1.9882 0 3.6 1.6118 3.6 3.6 0 1.9882-1.6118 3.6-3.6 3.6H6.6c-1.9882 0-3.6-1.6118-3.6-3.6Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6.6 7.6h.009M6.6 14.8h.009M6.6 11.2h10.8m-10.8 0C4.6118 11.2 3 9.5882 3 7.6 3 5.6118 4.6118 4 6.6 4h10.8C19.3882 4 21 5.6118 21 7.6c0 1.9882-1.6118 3.6-3.6 3.6m-10.8 0c-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6h10.8c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6"
    })]
  }));
};
var _default = exports["default"] = Server02;