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
var Wallet04 = function Wallet04(props) {
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
      d: "M18.75 13.45c.4182 0 .6273 0 .8012-.0346a1.8 1.8 0 0 0 1.4142-1.4142C21 11.8273 21 11.6182 21 11.2s0-.6273-.0346-.8012a1.8 1.8 0 0 0-1.4142-1.4142c-.1739-.0346-.383-.0346-.8012-.0346h-1.8c-.4182 0-.6273 0-.8012.0346a1.8 1.8 0 0 0-1.4142 1.4142c-.0346.1739-.0346.383-.0346.8012s0 .6273.0346.8012a1.8 1.8 0 0 0 1.4142 1.4142c.1739.0346.383.0346.8012.0346h1.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19.2 8.95V6.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C17.8321 4 17.3281 4 16.32 4H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 5.3678 3 5.872 3 6.88v8.64c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h10.44c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972v-2.07m-4.5-2.25c0-.4182 0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142c.1739-.0346.383-.0346.8012-.0346h1.8c.4182 0 .6273 0 .8012.0346a1.8 1.8 0 0 1 1.4142 1.4142c.0346.1739.0346.383.0346.8012s0 .6273-.0346.8012a1.8 1.8 0 0 1-1.4142 1.4142c-.1739.0346-.383.0346-.8012.0346h-1.8c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142c-.0346-.1739-.0346-.383-.0346-.8012Z"
    })]
  }));
};
var _default = exports["default"] = Wallet04;