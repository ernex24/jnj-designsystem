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
var MedicalCircle = function MedicalCircle(props) {
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
      d: "M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M13.65 7.77c0-.252 0-.378-.049-.4743a.4502.4502 0 0 0-.1967-.1966C13.308 7.05 13.182 7.05 12.93 7.05h-1.86c-.252 0-.378 0-.4743.049a.4502.4502 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v1.86c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049H7.77c-.252 0-.378 0-.4743.049a.4502.4502 0 0 0-.1966.1967c-.0491.0963-.0491.2223-.0491.4743v1.86c0 .252 0 .378.049.4743a.4502.4502 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v1.86c0 .252 0 .378.049.4743a.4505.4505 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378.049-.4743a.4505.4505 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h1.86c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378-.049-.4743a.4505.4505 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-1.86c-.252 0-.378 0-.4743-.049a.4505.4505 0 0 1-.1967-.1967c-.049-.0963-.049-.2223-.049-.4743V7.77Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13.65 7.77c0-.252 0-.378-.049-.4743a.4502.4502 0 0 0-.1967-.1966C13.308 7.05 13.182 7.05 12.93 7.05h-1.86c-.252 0-.378 0-.4743.049a.4502.4502 0 0 0-.1967.1967c-.049.0963-.049.2223-.049.4743v1.86c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967c-.0963.049-.2223.049-.4743.049H7.77c-.252 0-.378 0-.4743.049a.4502.4502 0 0 0-.1966.1967c-.0491.0963-.0491.2223-.0491.4743v1.86c0 .252 0 .378.049.4743a.4502.4502 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v1.86c0 .252 0 .378.049.4743a.4505.4505 0 0 0 .1967.1967c.0963.049.2223.049.4743.049h1.86c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378.049-.4743a.4505.4505 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h1.86c.252 0 .378 0 .4743-.049a.4505.4505 0 0 0 .1967-.1967c.049-.0963.049-.2223.049-.4743v-1.86c0-.252 0-.378-.049-.4743a.4505.4505 0 0 0-.1967-.1967c-.0963-.049-.2223-.049-.4743-.049h-1.86c-.252 0-.378 0-.4743-.049a.4505.4505 0 0 1-.1967-.1967c-.049-.0963-.049-.2223-.049-.4743V7.77Z"
    })]
  }));
};
var _default = exports["default"] = MedicalCircle;