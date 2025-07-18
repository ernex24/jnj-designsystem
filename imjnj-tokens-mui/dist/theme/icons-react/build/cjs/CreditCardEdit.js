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
var CreditCardEdit = function CreditCardEdit(props) {
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
      d: "M14.6145 17.5775c.0318-.1589.0477-.2383.0767-.3124a.8989.8989 0 0 1 .0997-.1862c.0455-.0653.1028-.1226.2174-.2372L18.75 13.1c.4971-.4971 1.3029-.4971 1.8 0 .4971.4971.4971 1.3029 0 1.8l-3.7417 3.7417c-.1146.1146-.1719.1719-.2372.2174a.8989.8989 0 0 1-.1862.0997c-.0741.029-.1535.0449-.3124.0767L14.25 19.4l.3645-1.8225Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 9.5h18V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h5.22m3.15 1.8 1.8225-.3645c.1589-.0318.2383-.0477.3124-.0767a.8989.8989 0 0 0 .1862-.0997c.0653-.0455.1226-.1028.2372-.2174L20.55 14.9c.4971-.4971.4971-1.3029 0-1.8-.4971-.4971-1.3029-.4971-1.8 0l-3.7417 3.7417c-.1146.1146-.1719.1719-.2174.2372a.8989.8989 0 0 0-.0997.1862c-.029.0741-.0449.1535-.0767.3124L14.25 19.4Z"
    })]
  }));
};
var _default = exports["default"] = CreditCardEdit;