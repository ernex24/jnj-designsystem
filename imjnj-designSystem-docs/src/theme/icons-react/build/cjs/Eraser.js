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
var Eraser = function Eraser(props) {
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
      d: "M4.3937 19.3941c-1.188-1.188-1.7821-1.782-2.0047-2.467a3 3 0 0 1 0-1.8541c.2226-.685.8166-1.279 2.0047-2.4671l8.2117-8.2118c1.1881-1.188 1.7821-1.782 2.4671-2.0046a3 3 0 0 1 1.8541 0c.685.2226 1.279.8166 2.4671 2.0046l.2117.2118c1.1881 1.188 1.7821 1.7821 2.0047 2.467a3.0011 3.0011 0 0 1 0 1.8542c-.2226.685-.8166 1.279-2.0047 2.467l-8.6686 8.6687c-.3459.3459-.5189.5188-.7207.6425a1.9985 1.9985 0 0 1-.578.2395C9.4077 21 9.1631 21 8.674 21H7.325c-.4893 0-.7338 0-.964-.0552a1.999 1.999 0 0 1-.5781-.2395c-.2019-.1237-.3748-.2966-.7207-.6425l-.6686-.6687Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m17.9995 13-7-7m10 15h-13m2.9373-.9372 8.6686-8.6687c1.1881-1.188 1.7821-1.782 2.0047-2.467a3.0011 3.0011 0 0 0 0-1.8541c-.2226-.685-.8166-1.279-2.0047-2.467l-.2117-.2119c-1.1881-1.188-1.7821-1.782-2.4671-2.0046a3 3 0 0 0-1.8541 0c-.685.2226-1.279.8166-2.4671 2.0046L4.3937 12.606c-1.188 1.188-1.7821 1.782-2.0047 2.467a3 3 0 0 0 0 1.8541c.2226.685.8166 1.279 2.0047 2.467l.6686.6687c.3459.3459.5188.5188.7207.6425a2 2 0 0 0 .578.2395C6.5913 21 6.8358 21 7.325 21h1.349c.4892 0 .7338 0 .964-.0552.204-.049.3992-.1298.5781-.2395.2019-.1237.3748-.2966.7207-.6425Z"
    })]
  }));
};
var _default = exports["default"] = Eraser;