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
var Delete = function Delete(props) {
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
      d: "M7.04 5.28c.352-.4693.528-.704.751-.8733a2 2 0 0 1 .6598-.3298C8.72 4 9.0133 4 9.6 4h7.6c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C22 6.2798 22 7.1198 22 8.8v6.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C19.7202 20 18.8802 20 17.2 20H9.6c-.5867 0-.88 0-1.1492-.0769a1.9982 1.9982 0 0 1-.6597-.3299c-.2231-.1692-.3991-.4039-.7511-.8732l-4.32-5.76c-.2582-.3443-.3873-.5164-.437-.7054a1.0004 1.0004 0 0 1 0-.5092c.0497-.189.1788-.3611.437-.7054l4.32-5.76Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m17 9-6 6m0-6 6 6M2.72 12.96l4.32 5.76c.352.4693.528.704.751.8732.1976.15.4213.2618.6598.3299C8.72 20 9.0133 20 9.6 20h7.6c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C22 17.7202 22 16.8802 22 15.2V8.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C19.7202 4 18.8802 4 17.2 4H9.6c-.5867 0-.88 0-1.1492.0769a2 2 0 0 0-.6597.3298c-.2231.1693-.3991.404-.7511.8733l-4.32 5.76c-.2582.3443-.3873.5164-.437.7054a1.0004 1.0004 0 0 0 0 .5092c.0497.189.1788.3611.437.7054Z"
    })]
  }));
};
var _default = exports["default"] = Delete;