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
var AnnotationX = function AnnotationX(props) {
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
      d: "M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v5.7c0 1.3978 0 2.0967-.2284 2.6481a2.9997 2.9997 0 0 1-1.6235 1.6235C18.5967 18 17.8978 18 16.5 18c-.4886 0-.7329 0-.9595.0535a2.0002 2.0002 0 0 0-.822.411c-.1788.1492-.3254.3446-.6185.7355l-1.46 1.9467c-.2171.2895-.3257.4342-.4588.486a.5002.5002 0 0 1-.3624 0c-.1331-.0518-.2417-.1965-.4588-.486L9.9 19.2c-.2932-.3909-.4397-.5863-.6185-.7355a2.0002 2.0002 0 0 0-.822-.411C8.233 18 7.9885 18 7.5 18c-1.3978 0-2.0967 0-2.648-.2284a2.9999 2.9999 0 0 1-1.6236-1.6235C3 15.5967 3 14.8978 3 13.5V7.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9.5 8 5 5m0-5-5 5m.4 6.2 1.46 1.9467c.2171.2895.3257.4342.4588.486a.5002.5002 0 0 0 .3624 0c.1331-.0518.2417-.1965.4588-.486L14.1 19.2c.2931-.3909.4397-.5863.6185-.7355a2.0002 2.0002 0 0 1 .822-.411C15.7671 18 16.0114 18 16.5 18c1.3978 0 2.0967 0 2.6481-.2284a2.9997 2.9997 0 0 0 1.6235-1.6235C21 15.5967 21 14.8978 21 13.5V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v5.7c0 1.3978 0 2.0967.2284 2.6481a2.9999 2.9999 0 0 0 1.6236 1.6235C5.4033 18 6.1021 18 7.5 18c.4886 0 .7329 0 .9595.0535.3022.0713.5836.2121.822.411.1788.1492.3254.3446.6185.7355Z"
    })]
  }));
};
var _default = exports["default"] = AnnotationX;